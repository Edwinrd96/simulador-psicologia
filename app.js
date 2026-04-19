// --- CONFIGURACIÓN TÉCNICA ---
const TOTAL_PREGUNTAS_EXAMEN = 35;
const TIEMPO_EXAMEN_MINUTOS = 52;
const TIEMPO_EXAMEN_SEGUNDOS = 30;

// --- VARIABLES DE ESTADO ---
let preguntasSeleccionadas = [];
let indiceActual = 0;
let respuestasUsuario = {};
let tiempoRestante = (TIEMPO_EXAMEN_MINUTOS * 60) + TIEMPO_EXAMEN_SEGUNDOS;
let intervaloTimer;

// --- REFERENCIAS AL DOM ---
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn'); // Asegúrate de que este ID exista en tu HTML
const restartBtn = document.getElementById('restart-btn');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const questionCounter = document.getElementById('question-counter');
const categoryBadge = document.getElementById('category-badge');
const progressBar = document.getElementById('progress-bar');
const timerContainer = document.getElementById('timer-container');
const timerDisplay = document.getElementById('timer');
const navContainer = document.getElementById('questions-nav');

// --- EVENTOS ---
startBtn.addEventListener('click', iniciarExamen);
nextBtn.addEventListener('click', siguientePregunta);
prevBtn.addEventListener('click', anteriorPregunta);
restartBtn.addEventListener('click', () => window.location.reload());

// --- FUNCIONES DE NAVEGACIÓN ---
function iniciarExamen() {
    const bancoAleatorio = shuffleArray(bancoPreguntas);
    preguntasSeleccionadas = bancoAleatorio.slice(0, Math.min(TOTAL_PREGUNTAS_EXAMEN, bancoPreguntas.length));
    
    startScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    timerContainer.classList.remove('hidden');
    
    iniciarTimer();
    mostrarPregunta();
}

function mostrarPregunta() {
    const preguntaActual = preguntasSeleccionadas[indiceActual];
    
    // 1. Textos y Contador
    questionCounter.textContent = `Pregunta ${indiceActual + 1} de ${preguntasSeleccionadas.length}`;
    categoryBadge.textContent = preguntaActual.categoria;
    questionText.textContent = preguntaActual.pregunta;
    
    // 2. Barra de Progreso (basada en el índice actual)
    const progress = ((indiceActual + 1) / preguntasSeleccionadas.length) * 100;
    progressBar.style.width = `${progress}%`;
    
    // 3. Actualizar Menú Numérico
    actualizarNavegacionNumerica();

    // 4. Control de Botones (Anterior / Siguiente)
    // Ocultar "Anterior" si es la primera pregunta
    prevBtn.style.visibility = (indiceActual === 0) ? 'hidden' : 'visible';
    
    // Texto del botón principal
    nextBtn.textContent = (indiceActual === preguntasSeleccionadas.length - 1) ? 'Finalizar Examen' : 'Siguiente';

    // 5. Render de Opciones
    optionsContainer.innerHTML = '';
    let yaRespondida = respuestasUsuario[indiceActual] !== undefined;

    if (!yaRespondida) {
        desactivarBotonSiguiente();
    } else {
        activarBotonSiguiente();
    }

    preguntaActual.opciones.forEach((opcion, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        if (respuestasUsuario[indiceActual] === index) btn.classList.add('selected');
        
        btn.textContent = opcion;
        btn.onclick = () => seleccionarOpcion(index, btn);
        optionsContainer.appendChild(btn);
    });
}

function actualizarNavegacionNumerica() {
    navContainer.innerHTML = '';
    preguntasSeleccionadas.forEach((_, index) => {
        const btn = document.createElement('button');
        btn.className = 'nav-num-btn';
        if (index === indiceActual) btn.classList.add('current');
        if (respuestasUsuario[index] !== undefined) btn.classList.add('answered');
        
        btn.textContent = index + 1;
        btn.onclick = () => {
            indiceActual = index;
            mostrarPregunta();
        };
        navContainer.appendChild(btn);
    });
}

function seleccionarOpcion(index, btnReferencia) {
    respuestasUsuario[indiceActual] = index;
    
    const todosBotones = optionsContainer.querySelectorAll('.option-btn');
    todosBotones.forEach(b => b.classList.remove('selected'));
    btnReferencia.classList.add('selected');
    
    actualizarNavegacionNumerica();
    activarBotonSiguiente();
}

function siguientePregunta() {
    // Verificamos si estamos ANTES de la última pregunta
    if (indiceActual < preguntasSeleccionadas.length - 1) {
        indiceActual++;
        mostrarPregunta();
        // Hacemos scroll hacia arriba en el contenedor de la pregunta por si era larga
        const scrollContainer = document.querySelector('.overflow-y-auto');
        if(scrollContainer) scrollContainer.scrollTop = 0;
    } else {
        // SI ES LA ÚLTIMA: Ejecutamos el cierre
        console.log("Finalizando examen..."); // Para depuración
        finalizarExamen();
    }
}

function anteriorPregunta() {
    if (indiceActual > 0) {
        indiceActual--;
        mostrarPregunta();
    }
}

// --- UTILIDADES ---
function activarBotonSiguiente() {
    nextBtn.disabled = false;
    nextBtn.className = "minerd-bg text-white font-bold py-2 px-6 rounded-lg transition-all cursor-pointer hover:bg-blue-800 shadow-md";
}

function desactivarBotonSiguiente() {
    nextBtn.disabled = true;
    nextBtn.className = "bg-gray-300 text-gray-500 cursor-not-allowed font-bold py-2 px-6 rounded-lg transition-all";
}

function shuffleArray(array) {
    return [...array].sort(() => Math.random() - 0.5);
}

// --- TIMER Y RESULTADOS (Mantén tus funciones actuales de Timer y ProcesarResultados) ---
function iniciarTimer() { /* Tu código actual */ }
function actualizarDisplayTimer() { /* Tu código actual */ }
function finalizarExamen() { /* Tu código actual */ }
function procesarResultados() { /* Tu código actual */ }
function generarRecomendaciones(stats) { /* Tu código actual */ }