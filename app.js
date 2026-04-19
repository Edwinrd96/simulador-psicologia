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
const timerDisplay = document.getElementById('timer');

// --- EVENTOS ---
startBtn.onclick = iniciarExamen;
nextBtn.onclick = siguientePregunta;
prevBtn.onclick = anteriorPregunta;
restartBtn.onclick = () => window.location.reload();

// --- FUNCIONES PRINCIPALES ---
function iniciarExamen() {
    // 1. Preparar preguntas
    const barajadas = [...bancoPreguntas].sort(() => Math.random() - 0.5);
    preguntasSeleccionadas = barajadas.slice(0, 35);
    
    // 2. Cambiar pantallas
    startScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    
    // 3. ¡ARRANCAR EL RELOJ!
    iniciarTimer(); 
    
    // 4. Mostrar primera pregunta
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
    
    // Estado del botón Siguiente
    if (respuestasUsuario[indiceActual] !== undefined) activarBoton(); 
    else desactivarBoton();

    pregunta.opciones.forEach((opc, i) => {
        const btn = document.createElement('button');
        // Si esta opción es la que el usuario ya eligió, le ponemos la clase 'selected'
        btn.className = `option-btn ${respuestasUsuario[indiceActual] === i ? 'selected' : ''}`;
        btn.textContent = opc;
        btn.onclick = () => seleccionarOpcion(i, btn);
        container.appendChild(btn);
    });

    actualizarMenuLateral();
}

function seleccionarOpcion(index, btnReferencia) {
    respuestasUsuario[indiceActual] = index;
    
    // Actualizar visualmente las opciones en pantalla
    const todosBotones = document.querySelectorAll('.option-btn');
    todosBotones.forEach(b => b.classList.remove('selected'));
    btnReferencia.classList.add('selected');
    
    // Actualizar el menú lateral (poner en verde) y activar botón
    actualizarMenuLateral();
    activarBoton(); 
}

function actualizarMenuLateral() {
    navContainer.innerHTML = '';
    preguntasSeleccionadas.forEach((_, i) => {
        const btn = document.createElement('button');
        // Lógica de colores: 'current' para la actual, 'answered' para las completadas
        btn.className = `nav-num-btn ${i === indiceActual ? 'current' : ''} ${respuestasUsuario[i] !== undefined ? 'answered' : ''}`;
        btn.textContent = i + 1;
        btn.onclick = () => { 
            indiceActual = i; 
            mostrarPregunta(); 
        };
        navContainer.appendChild(btn);
    });
}

function siguientePregunta() {
    if (indiceActual < 34) {
        indiceActual++;
        mostrarPregunta();
        // Scroll al inicio de la pregunta en móviles
        window.scrollTo(0,0);
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

// --- TIMER DINÁMICO ---
function iniciarTimer() {
    // Limpiamos cualquier intervalo previo por seguridad
    if (intervaloTimer) clearInterval(intervaloTimer);
    
    // Ejecutar una vez al inicio para que no espere 1 segundo en aparecer
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
    if (!timerDisplay) return; // Seguridad por si el elemento no existe

    const min = Math.floor(tiempoRestante / 60);
    const seg = tiempoRestante % 60;
    
    // Formato 00:00 siempre con dos dígitos
    timerDisplay.textContent = `${min.toString().padStart(2, '0')}:${seg.toString().padStart(2, '0')}`;
}

function manejarAlertasVisuales() {
    const timerDisplay = document.getElementById('timer');
    if (!timerDisplay) return;

    if (tiempoRestante <= 60) {
        // Crítico: Rojo y parpadeo (1 min)
        timerDisplay.className = "text-4xl font-mono font-black timer-critical";
    } else if (tiempoRestante <= 300) {
        // Advertencia: Naranja (5 min)
        timerDisplay.className = "text-4xl font-mono font-black timer-warning";
    } else {
        // Normal: Azul
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

    const porcentaje = ((puntos / 35) * 100).toFixed(1);
    document.getElementById('final-score').textContent = `${puntos} / 35`;
    document.getElementById('score-percentage').innerHTML = `
        <div class="text-2xl font-bold ${puntos >= 25 ? 'text-green-600' : 'text-red-600'}">
            ${porcentaje}% de Precisión
        </div>
        <p class="text-gray-500">${puntos >= 25 ? '¡Excelente! Estás listo para el concurso.' : 'Te recomendamos seguir repasando los marcos legales.'}</p>
    `;
    window.scrollTo(0,0);
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