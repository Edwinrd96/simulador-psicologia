// --- ESTADO ---
let rolSeleccionado = null; // 'psicologo' | 'primaria'
let preguntasSeleccionadas = [];
let indiceActual = 0;
let respuestasUsuario = {};
let tiempoRestante = 0;
let intervaloTimer;

// Configuración por rol
const CONFIG = {
    psicologo: { preguntas: 35, tiempo: (52 * 60) + 30, tiempoLabel: '52:30 min' },
    primaria:  { preguntas: 40, tiempo: 60 * 60,         tiempoLabel: '60:00 min' }
};

// --- ELEMENTOS ---
const roleScreen   = document.getElementById('role-screen');
const startScreen  = document.getElementById('start-screen');
const quizScreen   = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const nextBtn      = document.getElementById('next-btn');
const prevBtn      = document.getElementById('prev-btn');
const navContainer = document.getElementById('questions-nav');

// --- EVENTOS ---
document.getElementById('start-btn').onclick = iniciarExamen;
document.getElementById('prev-btn').onclick   = anteriorPregunta;
document.getElementById('next-btn').onclick   = siguientePregunta;
document.getElementById('restart-btn').onclick = () => {
    // Reiniciar con el mismo rol
    resetEstado();
    resultScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
};

// --- SELECCIÓN DE ROL ---
function seleccionarRol(rol) {
    rolSeleccionado = rol;
    const cfg = CONFIG[rol];
    tiempoRestante = cfg.tiempo;

    if (rol === 'psicologo') {
        document.getElementById('start-icon').textContent = '🧠';
        document.getElementById('start-title').textContent = 'Psicólogo/a Escolar';
        document.getElementById('start-subtitle').textContent =
            'Prueba de Juicio Situacional — Unidad de Orientación y Psicología. Marco legal dominicano.';
    } else {
        document.getElementById('start-icon').textContent = '📚';
        document.getElementById('start-title').textContent = 'Maestro/a de Nivel Primario';
        document.getElementById('start-subtitle').textContent =
            'Análisis de Casos Pedagógicos — EDD 2025-2026. Ordenanza 04-2023 y marco normativo MINERD.';
    }

    // Actualizar info dinámica en la pantalla de inicio
    document.getElementById('info-preguntas').textContent = `${cfg.preguntas} seleccionadas`;
    document.getElementById('info-tiempo').textContent = cfg.tiempoLabel;

    roleScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
}

function volverSeleccion() {
    resetEstado();
    resultScreen.classList.add('hidden');
    quizScreen.classList.add('hidden');
    startScreen.classList.add('hidden');
    roleScreen.classList.remove('hidden');
}

function resetEstado() {
    clearInterval(intervaloTimer);
    preguntasSeleccionadas = [];
    indiceActual = 0;
    respuestasUsuario = {};
    tiempoRestante = rolSeleccionado ? CONFIG[rolSeleccionado].tiempo : (52 * 60) + 30;
}

// --- INICIAR EXAMEN ---
function iniciarExamen() {
    const cfg = CONFIG[rolSeleccionado];
    const banco = rolSeleccionado === 'psicologo' ? bancoPreguntas : bancoPrimaria;

    const barajadas = [...banco].sort(() => Math.random() - 0.5);
    preguntasSeleccionadas = barajadas.slice(0, cfg.preguntas);

    startScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');

    iniciarTimer();
    mostrarPregunta();
}

// --- MOSTRAR PREGUNTA ---
function mostrarPregunta() {
    const pregunta = preguntasSeleccionadas[indiceActual];
    const total = preguntasSeleccionadas.length;

    document.getElementById('question-counter').textContent = `Pregunta ${indiceActual + 1} de ${total}`;
    document.getElementById('category-badge').textContent   = pregunta.categoria;
    document.getElementById('question-text').textContent    = pregunta.pregunta;
    document.getElementById('progress-bar').style.width     = `${((indiceActual + 1) / total) * 100}%`;

    prevBtn.style.visibility = indiceActual === 0 ? 'hidden' : 'visible';
    nextBtn.textContent = indiceActual === total - 1 ? 'Finalizar Examen' : 'Siguiente';

    if (respuestasUsuario[indiceActual] !== undefined) activarBoton();
    else desactivarBoton();

    const container = document.getElementById('options-container');
    container.innerHTML = '';

    pregunta.opciones.forEach((opc, i) => {
        const btn = document.createElement('button');
        btn.className = `option-btn ${respuestasUsuario[indiceActual] === i ? 'selected' : ''}`;
        btn.textContent = opc;
        btn.onclick = () => seleccionarOpcion(i, btn);
        container.appendChild(btn);
    });

    actualizarMenuLateral();
}

function seleccionarOpcion(index, btnReferencia) {
    respuestasUsuario[indiceActual] = index;

    document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
    btnReferencia.classList.add('selected');

    actualizarMenuLateral();
    activarBoton();
}

function actualizarMenuLateral() {
    navContainer.innerHTML = '';
    preguntasSeleccionadas.forEach((_, i) => {
        const btn = document.createElement('button');
        btn.className = `nav-num-btn ${i === indiceActual ? 'current' : ''} ${respuestasUsuario[i] !== undefined ? 'answered' : ''}`;
        btn.textContent = i + 1;
        btn.onclick = () => { indiceActual = i; mostrarPregunta(); };
        navContainer.appendChild(btn);
    });
}

function siguientePregunta() {
    const total = preguntasSeleccionadas.length;
    if (indiceActual < total - 1) {
        indiceActual++;
        mostrarPregunta();
        window.scrollTo(0, 0);
    } else {
        finalizarExamen();
    }
}

function anteriorPregunta() {
    if (indiceActual > 0) {
        indiceActual--;
        mostrarPregunta();
    }
}

// --- TIMER ---
function iniciarTimer() {
    if (intervaloTimer) clearInterval(intervaloTimer);
    actualizarDisplayTimer();

    intervaloTimer = setInterval(() => {
        if (tiempoRestante > 0) {
            tiempoRestante--;
            actualizarDisplayTimer();
            manejarAlertasVisuales();
        } else {
            clearInterval(intervaloTimer);
            finalizarExamen();
        }
    }, 1000);
}

function actualizarDisplayTimer() {
    const timerDisplay = document.getElementById('timer');
    if (!timerDisplay) return;
    const min = Math.floor(tiempoRestante / 60);
    const seg = tiempoRestante % 60;
    timerDisplay.textContent = `${min.toString().padStart(2, '0')}:${seg.toString().padStart(2, '0')}`;
}

function manejarAlertasVisuales() {
    const timerDisplay = document.getElementById('timer');
    if (!timerDisplay) return;

    if (tiempoRestante <= 60) {
        timerDisplay.className = "text-4xl font-mono font-black timer-critical";
    } else if (tiempoRestante <= 300) {
        timerDisplay.className = "text-4xl font-mono font-black timer-warning";
    } else {
        timerDisplay.className = "text-4xl font-mono font-black text-[#003876]";
    }
}

// --- RESULTADOS ---
function finalizarExamen() {
    clearInterval(intervaloTimer);
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');

    let puntos = 0;
    const review = document.getElementById('review-container');
    review.innerHTML = '';

    preguntasSeleccionadas.forEach((p, i) => {
        const respuestaUser = respuestasUsuario[i];
        const esCorrecta = respuestaUser === p.respuestaCorrecta;
        if (esCorrecta) puntos++;

        const statusColor = esCorrecta ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50';
        const icon = esCorrecta ? '✅' : '❌';

        review.innerHTML += `
            <div class="review-card ${statusColor} p-5 rounded-lg shadow-sm border mb-4 border-l-8">
                <div class="flex justify-between items-start mb-2">
                    <span class="font-bold text-gray-700">Pregunta ${i + 1}</span>
                    <span>${icon}</span>
                </div>
                <p class="text-gray-800 font-medium mb-3">${p.pregunta}</p>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                    <div class="p-2 rounded ${esCorrecta ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}">
                        <strong>Tu respuesta:</strong><br>
                        ${respuestaUser !== undefined ? p.opciones[respuestaUser] : 'No respondida'}
                    </div>
                    ${!esCorrecta ? `
                    <div class="p-2 rounded bg-blue-100 text-blue-800">
                        <strong>Respuesta correcta:</strong><br>
                        ${p.opciones[p.respuestaCorrecta]}
                    </div>` : ''}
                </div>
                
                <div class="mt-3 text-xs text-gray-500 bg-white p-2 rounded border italic">
                    <strong>Justificación técnica:</strong> ${p.explicacion}
                </div>
            </div>`;
    });

    const total = preguntasSeleccionadas.length;
    const aprobacion = rolSeleccionado === 'primaria' ? 28 : 25; // 70% aprox
    const porcentaje = ((puntos / total) * 100).toFixed(1);
    document.getElementById('final-score').textContent = `${puntos} / ${total}`;
    document.getElementById('score-percentage').innerHTML = `
        <div class="text-2xl font-bold ${puntos >= aprobacion ? 'text-green-300' : 'text-red-300'}">
            ${porcentaje}% de Precisión
        </div>
        <p class="opacity-75 mt-1">${puntos >= aprobacion
            ? '¡Excelente! Estás listo/a para el concurso.'
            : 'Te recomendamos seguir repasando los marcos legales.'}</p>
    `;
    window.scrollTo(0, 0);
}

// --- HELPERS ---
function activarBoton() {
    nextBtn.disabled = false;
    nextBtn.className = "bg-[#003876] text-white font-bold py-2 px-8 rounded-lg shadow-md cursor-pointer hover:bg-blue-800 transition-all";
}

function desactivarBoton() {
    nextBtn.disabled = true;
    nextBtn.className = "bg-gray-300 text-gray-500 font-bold py-2 px-8 rounded-lg cursor-not-allowed";
}