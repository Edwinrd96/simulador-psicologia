// --- ESTADO ---
let preguntasSeleccionadas = [];
let indiceActual = 0;
let respuestasUsuario = {};
let tiempoRestante = (52 * 60) + 30;
let intervaloTimer;

// --- ELEMENTOS ---
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const restartBtn = document.getElementById('restart-btn');
const quizScreen = document.getElementById('quiz-screen');
const startScreen = document.getElementById('start-screen');
const resultScreen = document.getElementById('result-screen');
const navContainer = document.getElementById('questions-nav');

// --- EVENTOS ---
startBtn.onclick = iniciarExamen;
nextBtn.onclick = siguientePregunta;
prevBtn.onclick = anteriorPregunta;
restartBtn.onclick = () => window.location.reload();

function iniciarExamen() {
    const barajadas = [...bancoPreguntas].sort(() => Math.random() - 0.5);
    preguntasSeleccionadas = barajadas.slice(0, 35);
    
    startScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    
    iniciarTimer();
    mostrarPregunta();
}

function mostrarPregunta() {
    const pregunta = preguntasSeleccionadas[indiceActual];
    
    // UI Básica
    document.getElementById('question-counter').textContent = `Pregunta ${indiceActual + 1} de 35`;
    document.getElementById('category-badge').textContent = pregunta.categoria;
    document.getElementById('question-text').textContent = pregunta.pregunta;
    document.getElementById('progress-bar').style.width = `${((indiceActual + 1) / 35) * 100}%`;

    // Botones Navegación
    prevBtn.style.visibility = indiceActual === 0 ? 'hidden' : 'visible';
    nextBtn.textContent = indiceActual === 34 ? 'Finalizar Examen' : 'Siguiente';

    // Opciones
    const container = document.getElementById('options-container');
    container.innerHTML = '';
    
    if (respuestasUsuario[indiceActual] !== undefined) activarBoton(); 
    else desactivarBoton();

    pregunta.opciones.forEach((opc, i) => {
        const btn = document.createElement('button');
        btn.className = `option-btn ${respuestasUsuario[indiceActual] === i ? 'selected' : ''}`;
        btn.textContent = opc;
        btn.onclick = () => {
            respuestasUsuario[indiceActual] = i;
            mostrarPregunta(); // Refresca para marcar selección
        };
        container.appendChild(btn);
    });

    actualizarMenuLateral();
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
    if (indiceActual < 34) {
        indiceActual++;
        mostrarPregunta();
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

// MODIFICACIÓN: Selección de opción con actualización inmediata
function seleccionarOpcion(index, btnReferencia) {
    respuestasUsuario[indiceActual] = index;
    
    // Actualizar visualmente las opciones
    const todosBotones = optionsContainer.querySelectorAll('.option-btn');
    todosBotones.forEach(b => b.classList.remove('selected'));
    btnReferencia.classList.add('selected');
    
    // ¡IMPORTANTE! Actualizar el menú lateral para que se ponga verde
    actualizarMenuLateral();
    activarBoton(); 
}

// MODIFICACIÓN: Revisión Técnica Dinámica
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
        
        // Creamos una tarjeta dinámica
        const statusColor = esCorrecta ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50';
        const icon = esCorrecta ? '✅' : '❌';
        
        review.innerHTML += `
            <div class="review-card ${statusColor} p-5 rounded-lg shadow-sm border mb-4">
                <div class="flex justify-between items-start mb-2">
                    <span class="font-bold text-gray-700">Pregunta ${i+1}</span>
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

    // Puntuación con barra de éxito
    const porcentaje = ((puntos / 35) * 100).toFixed(1);
    document.getElementById('final-score').textContent = `${puntos} / 35`;
    document.getElementById('score-percentage').innerHTML = `
        <div class="text-2xl font-bold ${puntos >= 25 ? 'text-green-600' : 'text-red-600'}">
            ${porcentaje}% de Precisión
        </div>
        <p class="text-gray-500">${puntos >= 25 ? '¡Excelente! Estás listo para el concurso.' : 'Te recomendamos seguir repasando los marcos legales.'}</p>
    `;
}

// --- HELPERS ---
function activarBoton() {
    nextBtn.disabled = false;
    nextBtn.className = "bg-[#003876] text-white font-bold py-2 px-8 rounded-lg shadow-md";
}

function desactivarBoton() {
    nextBtn.disabled = true;
    nextBtn.className = "bg-gray-300 text-gray-500 font-bold py-2 px-8 rounded-lg";
}

function iniciarTimer() {
    intervaloTimer = setInterval(() => {
        tiempoRestante--;
        const min = Math.floor(tiempoRestante / 60);
        const seg = tiempoRestante % 60;
        document.getElementById('timer').textContent = `${min}:${seg < 10 ? '0' : ''}${seg}`;
        if (tiempoRestante <= 0) finalizarExamen();
    }, 1000);
}