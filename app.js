// --- ESTADO ---
let rolSeleccionado = null;
let rolPrincipal = null; // Para saber a qué sub-pantalla regresar
let preguntasSeleccionadas = [];
let indiceActual = 0;
let respuestasUsuario = {};
let tiempoRestante = 0;
let intervaloTimer;

// Configuración por rol
const CONFIG = {
    psicologo: {
        banco: () => bancoPreguntas,
        preguntas: 35,
        tiempo: (52 * 60) + 30,
        tiempoLabel: '52:30 min',
        icon: '🧠',
        titulo: 'Psicólogo/a Escolar',
        subtitulo: 'Banco General — Prueba de Juicio Situacional. Marco legal dominicano.',
        aprobacion: 25
    },
    psicologoExterno: {
        banco: () => bancoFormularios,
        preguntas: 35,
        tiempo: (52 * 60) + 30,
        tiempoLabel: '52:30 min',
        icon: '🧠',
        titulo: 'Psicólogo/a Escolar — Banco Complementario',
        subtitulo: 'Banco adicional basado en formularios y situaciones de evaluación profesional.',
        aprobacion: 25
    },
    primaria: {
        banco: () => bancoPrimaria,
        preguntas: 40,
        tiempo: 60 * 60,
        tiempoLabel: '60:00 min',
        icon: '📚',
        titulo: 'Maestro/a de Nivel Primario',
        subtitulo: 'Banco General — Análisis de Casos Pedagógicos. Ordenanza 04-2023 y marco normativo MINERD.',
        aprobacion: 28
    },
    rimariaFiltrada: {
        banco: () => bancoFiltrado,
        preguntas: 40,
        tiempo: 60 * 60,
        tiempoLabel: '60:00 min',
        icon: '📚',
        titulo: 'Maestro/a de Primaria — Banco Filtrado',
        subtitulo: 'Banco filtrado con preguntas sobre inclusión y casos pedagógicos específicos.',
        aprobacion: 8
    },
    tecnicoDistrital: {
        banco: () => bancoTecnicoDistrital,
        preguntas: 35,
        tiempo: (52 * 60) + 30,
        tiempoLabel: '52:30 min',
        icon: '🏛️',
        titulo: 'Técnico/a Distrital',
        subtitulo: 'Prueba de Rendimiento Profesional — Gestión y Asesoría Técnica Distrital.',
        aprobacion: 25
    },
    tecnicoProfesional: {
        banco: () => bancoTecnicoProfesional,
         preguntas: 40,
        tiempo: 60 * 60,
        tiempoLabel: '60:00 min',
        icon: '🔧',
        titulo: 'Docente Técnico Profesional',
        subtitulo: 'Prueba de Rendimiento Profesional — Modalidad Técnico Profesional (MTP).',
        aprobacion: 14
    }
};

// Roles que tienen sub-pantalla de selección
const ROLES_CON_SUB = {
    psicologo: 'sub-screen-psicologo',
    primaria: 'sub-screen-primaria'
};

// --- ELEMENTOS ---
const roleScreen    = document.getElementById('role-screen');
const startScreen   = document.getElementById('start-screen');
const quizScreen    = document.getElementById('quiz-screen');
const resultScreen  = document.getElementById('result-screen');
const nextBtn       = document.getElementById('next-btn');
const prevBtn       = document.getElementById('prev-btn');
const navContainer  = document.getElementById('questions-nav');

// --- EVENTOS ---
document.getElementById('start-btn').onclick  = iniciarExamen;
document.getElementById('prev-btn').onclick   = anteriorPregunta;
document.getElementById('next-btn').onclick   = siguientePregunta;
document.getElementById('restart-btn').onclick = () => {
    resetEstado();
    resultScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
};

// --- SELECCIÓN DE ROL PRINCIPAL (con sub-pantalla) ---
function seleccionarRolPrincipal(rolBase) {
    rolPrincipal = rolBase;
    const subScreenId = ROLES_CON_SUB[rolBase];
    ocultarTodasLasPantallas();
    document.getElementById(subScreenId).classList.remove('hidden');
}

// --- SELECCIÓN DIRECTA DE ROL (sin sub-pantalla) ---
function seleccionarRol(rol) {
    rolSeleccionado = rol;
    const cfg = CONFIG[rol];
    tiempoRestante = cfg.tiempo;

    document.getElementById('start-icon').textContent   = cfg.icon;
    document.getElementById('start-title').textContent  = cfg.titulo;
    document.getElementById('start-subtitle').textContent = cfg.subtitulo;
    document.getElementById('info-preguntas').textContent = `${cfg.preguntas} preguntas`;
    document.getElementById('info-tiempo').textContent    = cfg.tiempoLabel;

    ocultarTodasLasPantallas();
    startScreen.classList.remove('hidden');
}

function ocultarTodasLasPantallas() {
    roleScreen.classList.add('hidden');
    startScreen.classList.add('hidden');
    quizScreen.classList.add('hidden');
    resultScreen.classList.add('hidden');
    // Ocultar sub-pantallas
    Object.values(ROLES_CON_SUB).forEach(id => {
        document.getElementById(id).classList.add('hidden');
    });
}

function volverSeleccion() {
    resetEstado();
    rolSeleccionado = null;
    rolPrincipal = null;
    ocultarTodasLasPantallas();
    roleScreen.classList.remove('hidden');
}

function volverSubSeleccion() {
    // Si el rol viene de una sub-pantalla, volver a ella; si no, volver a la pantalla principal
    if (rolPrincipal && ROLES_CON_SUB[rolPrincipal]) {
        resetEstado();
        rolSeleccionado = null;
        ocultarTodasLasPantallas();
        document.getElementById(ROLES_CON_SUB[rolPrincipal]).classList.remove('hidden');
    } else {
        volverSeleccion();
    }
}

function resetEstado() {
    clearInterval(intervaloTimer);
    preguntasSeleccionadas = [];
    indiceActual = 0;
    respuestasUsuario = {};
    tiempoRestante = rolSeleccionado ? CONFIG[rolSeleccionado].tiempo : 0;
}

// --- INICIAR EXAMEN ---
function iniciarExamen() {
    const cfg = CONFIG[rolSeleccionado];
    const banco = cfg.banco();

    if (!banco || banco.length === 0) {
        alert('Error: No se encontró el banco de preguntas. Verifica que todos los archivos .js estén cargados.');
        return;
    }

    const totalDisponible = banco.length;
    const totalSolicitar  = Math.min(cfg.preguntas, totalDisponible);

    const barajadas = [...banco].sort(() => Math.random() - 0.5);
    preguntasSeleccionadas = barajadas.slice(0, totalSolicitar);

    ocultarTodasLasPantallas();
    quizScreen.classList.remove('hidden');

    iniciarTimer();
    mostrarPregunta();
}

// --- MOSTRAR PREGUNTA ---
function mostrarPregunta() {
    const pregunta = preguntasSeleccionadas[indiceActual];
    const total    = preguntasSeleccionadas.length;

    document.getElementById('question-counter').textContent = `Pregunta ${indiceActual + 1} de ${total}`;
    document.getElementById('category-badge').textContent   = pregunta.categoria || 'General';
    document.getElementById('question-text').textContent    = pregunta.pregunta;
    document.getElementById('progress-bar').style.width     = `${((indiceActual + 1) / total) * 100}%`;

    prevBtn.style.visibility = indiceActual === 0 ? 'hidden' : 'visible';
    nextBtn.textContent = indiceActual === total - 1 ? 'Finalizar Prueba' : 'Siguiente';

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
    ocultarTodasLasPantallas();
    resultScreen.classList.remove('hidden');

    let puntos = 0;
    const review = document.getElementById('review-container');
    review.innerHTML = '';

    preguntasSeleccionadas.forEach((p, i) => {
        const respuestaUser = respuestasUsuario[i];
        const esCorrecta    = respuestaUser === p.respuestaCorrecta;
        if (esCorrecta) puntos++;

        const statusColor = esCorrecta ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50';
        const icon        = esCorrecta ? '✅' : '❌';

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

    const total      = preguntasSeleccionadas.length;
    const aprobacion = CONFIG[rolSeleccionado].aprobacion;
    const porcentaje = ((puntos / total) * 100).toFixed(1);

    document.getElementById('final-score').textContent = `${puntos} / ${total}`;
    document.getElementById('score-percentage').innerHTML = `
        <div class="text-2xl font-bold ${puntos >= aprobacion ? 'text-green-300' : 'text-red-300'}">
            ${porcentaje}% de Precisión
        </div>
        <p class="opacity-75 mt-1">${puntos >= aprobacion
            ? '¡Excelente desempeño! Sigue preparándote con este simulador.'
            : 'Te recomendamos seguir repasando el marco normativo y los casos pedagógicos.'}</p>
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