/* ═══════════════════════════════════════════════════════════
   MINERD — Simulador EDD 2025-2026 | app.js (Versión Final Móvil)
   ═══════════════════════════════════════════════════════════ */

// ── CONFIGURACIÓN DE ACCESO ─────────────────────────────────
const ACCESO = {
  marileidy: ['psicologo', 'psicologoExterno'],
  fatima:    ['primaria'],
  katherine: ['tecnicoProfesional'],
  olga:      ['tecnicoDistrital']
};

// ── CONFIGURACIÓN POR ROL ────────────────────────────────────
const CONFIG = {
  psicologo: {
    banco: () => (typeof bancoPreguntas !== 'undefined' ? bancoPreguntas : []),
    preguntas: 35,
    tiempo: (52 * 60) + 30,
    icon: '🧠',
    titulo: 'Evaluación Inicial - Psicología',
    color: '#7c3aed'
  },
  primaria: {
    banco: () => (typeof bancoPrimaria !== 'undefined' ? bancoPrimaria : []),
    preguntas: 40,
    tiempo: 60 * 60,
    icon: '📚',
    titulo: 'Evaluación Inicial - Primaria',
    color: '#2563eb'
  },
  tecnicoDistrital: {
    banco: () => (typeof bancoTecnicoDistrital !== 'undefined' ? bancoTecnicoDistrital : []),
    preguntas: 35,
    tiempo: (52 * 60) + 30,
    icon: '🏛️',
    titulo: 'Evaluación Inicial - Técnico/a',
    color: '#003876'
  }
};

// ── ESTADO DE LA APLICACIÓN ──────────────────────────────────
let nombreUsuario = '';
let rolSeleccionado = null;
let preguntasSeleccionadas = [];
let mapaOpcionesAll = [];
let indiceActual = 0;
let respuestasUsuario = {};
let tiempoRestante = 0;
let intervaloTimer = null;

// Cargar pool de preguntas usadas (Persistencia a largo plazo)
let poolUsado = JSON.parse(localStorage.getItem('poolUsado_EDD')) || {};

// ── GESTIÓN DE DISCO (STORAGE) ───────────────────────────────

function guardarProgresoEnDisco() {
  const estado = {
    nombreUsuario,
    rolSeleccionado,
    preguntasSeleccionadas,
    mapaOpcionesAll,
    indiceActual,
    respuestasUsuario,
    tiempoRestante,
    enCurso: true
  };
  localStorage.setItem('sesion_activa_EDD', JSON.stringify(estado));
  localStorage.setItem('poolUsado_EDD', JSON.stringify(poolUsado));
}

function limpiarSesionDisco() {
  localStorage.removeItem('sesion_activa_EDD');
}

// ── LÓGICA DE RECUPERACIÓN AL CARGAR ─────────────────────────

window.onload = () => {
  const guardado = localStorage.getItem('sesion_activa_EDD');
  
  if (guardado) {
    const d = JSON.parse(guardado);
    
    // Preguntar al usuario si desea retomar
    const retomar = confirm(
      `Hola ${d.nombreUsuario}, tienes un examen de "${d.rolSeleccionado}" pendiente.\n\n` +
      `¿Deseas continuar donde lo dejaste?\n` +
      `(Si cancelas, el progreso actual se borrará)`
    );

    if (retomar) {
      nombreUsuario = d.nombreUsuario;
      rolSeleccionado = d.rolSeleccionado;
      preguntasSeleccionadas = d.preguntasSeleccionadas;
      mapaOpcionesAll = d.mapaOpcionesAll;
      indiceActual = d.indiceActual;
      respuestasUsuario = d.respuestasUsuario;
      tiempoRestante = d.tiempoRestante;
      
      iniciarUIExamen();
    } else {
      limpiarSesionDisco();
      // Opcional: Redirigir a pantalla de inicio si es necesario
    }
  }
};

// ── MOTOR DEL EXAMEN ─────────────────────────────────────────

function sacarDelPool(rol, cantidad) {
  const banco = CONFIG[rol].banco();
  if (!poolUsado[rol]) poolUsado[rol] = [];

  // Si ya se usaron todas, reiniciar el historial del banco
  if (poolUsado[rol].length >= banco.length) {
    alert("¡Felicidades! Completaste todas las preguntas del banco. El historial se reiniciará para que puedas practicar de nuevo.");
    poolUsado[rol] = [];
  }

  // Filtrar preguntas que NO han sido usadas
  const disponibles = banco.filter((_, i) => !poolUsado[rol].includes(i));
  const barajadas = [...disponibles].sort(() => Math.random() - 0.5);
  const seleccion = barajadas.slice(0, Math.min(cantidad, barajadas.length));

  // Marcar como usadas
  seleccion.forEach(p => {
    const idxOriginal = banco.indexOf(p);
    poolUsado[rol].push(idxOriginal);
  });

  localStorage.setItem('poolUsado_EDD', JSON.stringify(poolUsado));
  return seleccion;
}

function iniciarExamen() {
  const cfg = CONFIG[rolSeleccionado];
  const sel = sacarDelPool(rolSeleccionado, cfg.preguntas);

  if (!sel.length) return alert("No hay preguntas disponibles.");

  preguntasSeleccionadas = sel;
  mapaOpcionesAll = preguntasSeleccionadas.map(p => {
    const indices = Array.from({length: p.opciones.length}, (_, i) => i).sort(() => Math.random() - 0.5);
    return { opciones: indices.map(i => p.opciones[i]), mapa: indices };
  });
  
  indiceActual = 0;
  respuestasUsuario = {};
  tiempoRestante = cfg.tiempo;
  
  iniciarUIExamen();
  guardarProgresoEnDisco();
}

function iniciarUIExamen() {
  mostrarSolo('quiz-screen');
  mostrarHeaderQuiz();
  iniciarTimer();
  mostrarPregunta();
  actualizarHeaderProg();
}

function mostrarPregunta() {
  const p = preguntasSeleccionadas[indiceActual];
  const { opciones } = mapaOpcionesAll[indiceActual];
  
  document.getElementById('question-text').textContent = p.pregunta;
  document.getElementById('question-counter').textContent = `Pregunta ${indiceActual + 1} de ${preguntasSeleccionadas.length}`;

  const container = document.getElementById('options-container');
  container.innerHTML = '';
  
  opciones.forEach((opc, j) => {
    const btn = document.createElement('button');
    btn.className = `opt-btn ${respuestasUsuario[indiceActual] === j ? 'selected' : ''}`;
    btn.textContent = opc;
    btn.onclick = () => {
      respuestasUsuario[indiceActual] = j;
      document.querySelectorAll('.opt-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      guardarProgresoEnDisco(); // Guardar cada respuesta
    };
    container.appendChild(btn);
  });
}

function siguientePregunta() {
  if (indiceActual < preguntasSeleccionadas.length - 1) {
    indiceActual++;
    mostrarPregunta();
    guardarProgresoEnDisco();
  } else {
    finalizarExamen();
  }
}

function anteriorPregunta() {
  if (indiceActual > 0) {
    indiceActual--;
    mostrarPregunta();
    guardarProgresoEnDisco();
  }
}

// ── CRONÓMETRO ───────────────────────────────────────────────

function iniciarTimer() {
  if (intervaloTimer) clearInterval(intervaloTimer);
  actualizarTimer();

  intervaloTimer = setInterval(() => {
    if (tiempoRestante > 0) {
      tiempoRestante--;
      actualizarTimer();
      // Guardar en disco cada 10 seg para asegurar el tiempo en el móvil
      if (tiempoRestante % 10 === 0) guardarProgresoEnDisco();
    } else {
      finalizarExamen();
    }
  }, 1000);
}

function actualizarTimer() {
  const el = document.getElementById('hdr-timer');
  const m = Math.floor(tiempoRestante / 60);
  const s = tiempoRestante % 60;
  if (el) el.textContent = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
}

// ── FINALIZACIÓN ─────────────────────────────────────────────

function finalizarExamen() {
  clearInterval(intervaloTimer);
  limpiarSesionDisco(); // Importante: Borramos sesión temporal al terminar
  
  mostrarSolo('result-screen');
  ocultarHeaderQuiz();

  let puntos = 0;
  preguntasSeleccionadas.forEach((p, i) => {
    const visIdx = respuestasUsuario[i];
    const originalIdx = visIdx !== undefined ? mapaOpcionesAll[i].map[visIdx] : -1;
    if (originalIdx === p.respuestaCorrecta) puntos++;
  });

  const total = preguntasSeleccionadas.length;
  document.getElementById('final-score').innerHTML = `${puntos} <span>/ ${total}</span>`;
}

// ── NAVEGACIÓN DE PANTALLAS ──────────────────────────────────

function mostrarSolo(id) {
  const screens = ['access-screen','profile-screen','start-screen','quiz-screen','result-screen'];
  screens.forEach(s => {
    const el = document.getElementById(s);
    if (el) el.classList.add('hidden');
  });
  const target = document.getElementById(id);
  if (target) target.classList.remove('hidden');
}

function mostrarHeaderQuiz() {
  document.getElementById('hdr-timer-wrap')?.classList.remove('hidden');
  document.getElementById('hdr-prog-wrap')?.classList.remove('hidden');
}

function ocultarHeaderQuiz() {
  document.getElementById('hdr-timer-wrap')?.classList.add('hidden');
  document.getElementById('hdr-prog-wrap')?.classList.add('hidden');
}

function actualizarHeaderProg() {
  const total = preguntasSeleccionadas.length;
  const resp = Object.keys(respuestasUsuario).length;
  const fill = document.getElementById('hdr-prog-fill');
  if (fill) fill.style.width = total > 0 ? (resp / total * 100) + '%' : '0%';
}










/* ═══════════════════════════════════════════════════════════
   MINERD — Simulador EDD 2025-2026 | app.js
   ═══════════════════════════════════════════════════════════

// ── ACCESO ──────────────────────────────────────────────────
// nombre normalizado → lista de roles permitidos (directos, sin sub-menú duplicado)
const ACCESO = {
  marileidy: ['psicologo', 'psicologoExterno'],
  fatima:    ['primaria',  'rimariaFiltrada'],
  katherine: ['tecnicoProfesional'],
  olga:      ['tecnicoDistrital']
};

// ── CONFIGURACIÓN POR ROL ────────────────────────────────────
const CONFIG = {
  psicologo: {
    banco:      () => bancoPreguntas,
    preguntas:  35,
    tiempo:     (52*60)+30,
    tiempoLabel:'52:30',
    icon:       '🧠',
    titulo:     'Evaluación Inicial',
    subtitulo:  'Psicología Escolar — Prueba de Juicio Situacional. Marco legal dominicano.',
    aprobacion: 25,
    color:      '#7c3aed',
    colorL:     '#ede9fe',
    chipLabel:  '35 preguntas',
    chipTime:   '52:30 min'
  },
  psicologoExterno: {
    banco:      () => bancoFormularios,
    preguntas:  35,
    tiempo:     (52*60)+30,
    tiempoLabel:'52:30',
    icon:       '📝',
    titulo:     'Evaluación de Formularios Externos',
    subtitulo:  'Psicología Escolar — Formularios y situaciones de evaluación profesional.',
    aprobacion: 25,
    color:      '#0d9488',
    colorL:     '#ccfbf1',
    chipLabel:  '35 preguntas',
    chipTime:   'Complementario'
  },
  primaria: {
    banco:      () => bancoPrimaria,
    preguntas:  40,
    tiempo:     60*60,
    tiempoLabel:'60:00',
    icon:       '📚',
    titulo:     'Evaluación Inicial',
    subtitulo:  'Nivel Primario — Análisis de Casos Pedagógicos. Ordenanza 04-2023.',
    aprobacion: 28,
    color:      '#2563eb',
    colorL:     '#dbeafe',
    chipLabel:  '40 preguntas',
    chipTime:   '60:00 min'
  },
  rimariaFiltrada: {
    banco:      () => bancoFiltrado,
    preguntas:  40,
    tiempo:     60*60,
    tiempoLabel:'60:00',
    icon:       '🔍',
    titulo:     'Evaluación Filtrada',
    subtitulo:  'Nivel Primario — Inclusión y casos pedagógicos específicos.',
    aprobacion: 8,
    color:      '#d97706',
    colorL:     '#fef3c7',
    chipLabel:  '40 preguntas',
    chipTime:   'Filtrado'
  },
  tecnicoDistrital: {
    banco:      () => bancoTecnicoDistrital,
    preguntas:  35,
    tiempo:     (52*60)+30,
    tiempoLabel:'52:30',
    icon:       '🏛️',
    titulo:     'Evaluación Inicial',
    subtitulo:  'Técnico/a Distrital — Gestión y Asesoría Técnica Distrital.',
    aprobacion: 25,
    color:      '#003876',
    colorL:     '#dbeafe',
    chipLabel:  '35 preguntas',
    chipTime:   '52:30 min'
  },
  tecnicoProfesional: {
    banco:      () => bancoTecnicoProfesional,
    preguntas:  40,
    tiempo:     60*60,
    tiempoLabel:'60:00',
    icon:       '🔧',
    titulo:     'Evaluación Inicial',
    subtitulo:  'Docente Técnico Profesional — Modalidad Técnico Profesional (MTP).',
    aprobacion: 14,
    color:      '#059669',
    colorL:     '#d1fae5',
    chipLabel:  '40 preguntas',
    chipTime:   '60:00 min'
  }
};

// Avatares e info del usuario por nombre
const USER_INFO = {
  marileidy: { avatar:'🧠', greeting:'¡Bienvenida, Marileidy!', sub:'Psicóloga Escolar — EDD 2025-2026' },
  fatima:    { avatar:'📚', greeting:'¡Bienvenida, Fátima!',    sub:'Maestra de Primaria — EDD 2025-2026' },
  katherine: { avatar:'🔧', greeting:'¡Bienvenida, Katherine!', sub:'Docente Técnico Profesional — EDD 2025-2026' },
  olga:      { avatar:'🏛️', greeting:'¡Bienvenida, Olga!',      sub:'Técnica Distrital — EDD 2025-2026' }
};

// ── ESTADO ───────────────────────────────────────────────────
let nombreUsuario     = '';
let rolesPermitidos   = [];
let rolSeleccionado   = null;

let preguntasSeleccionadas = [];
let mapaOpcionesAll   = [];
let indiceActual      = 0;
let respuestasUsuario = {};
let tiempoRestante    = 0;
let intervaloTimer    = null;

// Pool por rol (evitar repetición hasta agotar banco)
const poolUsado = {};

// ── PANTALLAS ────────────────────────────────────────────────
const SCREENS = ['access-screen','profile-screen','start-screen','quiz-screen','result-screen'];

function mostrarSolo(id) {
  SCREENS.forEach(s => {
    const el = document.getElementById(s);
    if (el) el.classList.add('hidden');
  });
  document.getElementById(id).classList.remove('hidden');
}

// ── NORMALIZAR ───────────────────────────────────────────────
function norm(str) {
  return str.trim().toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g,'')
    .replace(/[^a-z]/g,'');
}

// ── ACCESS ───────────────────────────────────────────────────
function verificarAcceso() {
  const inp = document.getElementById('access-input');
  const err = document.getElementById('access-error');
  const key = norm(inp.value);
  err.textContent = '';
  inp.classList.remove('err');

  if (!key) {
    mostrarError(inp, err, 'Por favor escribe tu nombre.');
    return;
  }
  const roles = ACCESO[key];
  if (!roles) {
    mostrarError(inp, err, 'Nombre no encontrado. Verifica que escribiste correctamente.');
    return;
  }
  nombreUsuario   = key;
  rolesPermitidos = roles;
  mostrarPerfil();
}

function mostrarError(inp, err, msg) {
  err.textContent = msg;
  inp.classList.add('err');
  setTimeout(() => inp.classList.remove('err'), 600);
}

document.getElementById('access-input').addEventListener('keydown', e => {
  if (e.key === 'Enter') verificarAcceso();
});

// ── PROFILE SCREEN ───────────────────────────────────────────
function mostrarPerfil() {
  const info = USER_INFO[nombreUsuario] || { avatar:'🎓', greeting:'¡Bienvenido/a!', sub:'Simulador EDD 2025-2026' };
  document.getElementById('welcome-avatar').textContent = info.avatar;
  document.getElementById('welcome-name').textContent   = info.greeting;
  document.getElementById('welcome-sub').textContent    = info.sub;

  const grid = document.getElementById('eval-grid');
  grid.innerHTML = '';

  rolesPermitidos.forEach((rol, idx) => {
    const cfg = CONFIG[rol];
    if (!cfg) return;

    // Calcular pool
    if (!poolUsado[rol]) poolUsado[rol] = [];
    const banco = cfg.banco ? cfg.banco() : [];
    const total = banco ? banco.length : 0;
    const usados = poolUsado[rol].length;
    const disp = total - usados;

    const card = document.createElement('div');
    card.className = 'eval-card';
    card.style.setProperty('--c', cfg.color);
    card.style.setProperty('--c-l', cfg.colorL);
    card.style.animationDelay = `${idx * 0.08}s`;

    card.innerHTML = `
      <div class="e-ill" style="background:${cfg.colorL}">${cfg.icon}</div>
      <div class="e-name">${cfg.titulo}</div>
      <div class="e-desc">${cfg.subtitulo}</div>
      <div class="e-meta">
        <span class="chip">${cfg.chipLabel}</span>
        <span class="chip ${idx === 1 ? 'gold' : ''}">${cfg.chipTime}</span>
      </div>
      <div class="e-pool">
        <span class="pool-dot"></span>
        ${disp} preguntas disponibles sin repetir (de ${total})
      </div>
    `;
    card.onclick = () => abrirStart(rol);
    grid.appendChild(card);
  });

  mostrarSolo('profile-screen');
}

function volverPerfil() {
  resetEstado();
  rolSeleccionado = null;
  ocultarHeaderQuiz();
  mostrarPerfil();
}

// ── START SCREEN ─────────────────────────────────────────────
function abrirStart(rol) {
  rolSeleccionado = rol;
  const cfg = CONFIG[rol];
  tiempoRestante = cfg.tiempo;

  document.getElementById('start-icon').textContent     = cfg.icon;
  document.getElementById('start-title').textContent    = cfg.titulo;
  document.getElementById('start-subtitle').textContent = cfg.subtitulo;
  document.getElementById('info-preguntas').textContent = cfg.preguntas + ' preguntas';
  document.getElementById('info-tiempo').textContent    = cfg.tiempoLabel + ' min';

  if (!poolUsado[rol]) poolUsado[rol] = [];
  const banco = cfg.banco ? cfg.banco() : [];
  const total = banco ? banco.length : 0;
  const usados = poolUsado[rol].length;
  const disp = total - usados;

  document.getElementById('pool-status').innerHTML =
    `📦 Banco total: <strong>${total}</strong> preguntas &nbsp;·&nbsp;
     ✅ Ya practicadas: <strong>${usados}</strong> &nbsp;·&nbsp;
     🔄 Disponibles sin repetir: <strong>${disp}</strong>
     ${disp === 0 ? '<br>⚡ El banco se reiniciará automáticamente.' : ''}`;

  mostrarSolo('start-screen');
}

// ── POOL SIN REPETICIÓN ──────────────────────────────────────
function sacarDelPool(rol, cantidad) {
  const banco = CONFIG[rol].banco();
  if (!banco || banco.length === 0) return [];
  if (!poolUsado[rol]) poolUsado[rol] = [];

  // Si ya usamos todo, reiniciar
  if (poolUsado[rol].length >= banco.length) {
    poolUsado[rol] = [];
  }

  const disponibles = banco.filter(p => {
    const id = p.id !== undefined ? p.id : banco.indexOf(p);
    return !poolUsado[rol].includes(id);
  });

  const barajadas = [...disponibles].sort(() => Math.random() - 0.5);
  const sel = barajadas.slice(0, Math.min(cantidad, barajadas.length));

  sel.forEach(p => {
    const id = p.id !== undefined ? p.id : banco.indexOf(p);
    if (!poolUsado[rol].includes(id)) poolUsado[rol].push(id);
  });

  return sel;
}

// ── MEZCLAR OPCIONES ─────────────────────────────────────────
function mezclarOpciones(pregunta) {
  const n = pregunta.opciones.length;
  const indices = Array.from({length: n}, (_, i) => i);
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  return { opciones: indices.map(i => pregunta.opciones[i]), mapa: indices };
}

// ── INICIAR EXAMEN ───────────────────────────────────────────
function iniciarExamen() {
  const cfg = CONFIG[rolSeleccionado];
  const sel = sacarDelPool(rolSeleccionado, cfg.preguntas);

  if (!sel || sel.length === 0) {
    alert('Error: No se encontró el banco de preguntas. Verifica que todos los archivos .js estén cargados.');
    return;
  }

  preguntasSeleccionadas = sel;
  mapaOpcionesAll = preguntasSeleccionadas.map(p => mezclarOpciones(p));
  indiceActual    = 0;
  respuestasUsuario = {};

  mostrarSolo('quiz-screen');
  mostrarHeaderQuiz();
  iniciarTimer();
  mostrarPregunta();
  actualizarHeaderProg();
}

// ── MOSTRAR PREGUNTA ─────────────────────────────────────────
function mostrarPregunta() {
  const p     = preguntasSeleccionadas[indiceActual];
  const total = preguntasSeleccionadas.length;
  const { opciones } = mapaOpcionesAll[indiceActual];
  const letras = ['A','B','C','D','E','F'];

  document.getElementById('question-counter').textContent = `Pregunta ${indiceActual + 1} de ${total}`;
  document.getElementById('category-badge').textContent   = p.categoria || 'General';
  document.getElementById('question-text').textContent    = p.pregunta;
  document.getElementById('mobile-counter').textContent   = `${indiceActual + 1}/${total}`;

  const esUltima = indiceActual === total - 1;
  const lblSig   = esUltima ? 'Finalizar ✓' : 'Siguiente →';
  const lblSigM  = esUltima ? 'Fin ✓' : 'Sig. →';

  ['prev-btn','prev-btn-m'].forEach(id => {
    const b = document.getElementById(id);
    if (b) b.style.visibility = indiceActual === 0 ? 'hidden' : 'visible';
  });

  document.getElementById('next-btn').textContent   = lblSig;
  const bm = document.getElementById('next-btn-m');
  if (bm) bm.textContent = lblSigM;

  const respondida = respuestasUsuario[indiceActual] !== undefined;
  setNextEnabled(respondida);

  const container = document.getElementById('options-container');
  container.innerHTML = '';
  const selVis = respuestasUsuario[indiceActual];

  opciones.forEach((opc, j) => {
    const btn = document.createElement('button');
    btn.className = `opt-btn${selVis === j ? ' selected' : ''}`;
    btn.innerHTML = `<span class="opt-letter">${letras[j] || j}</span><span>${opc}</span>`;
    btn.onclick = () => seleccionarOpcion(j, btn);
    container.appendChild(btn);
  });

  actualizarNav();
  actualizarHeaderProg();
}

function seleccionarOpcion(index, btnRef) {
  respuestasUsuario[indiceActual] = index;
  document.querySelectorAll('.opt-btn').forEach(b => b.classList.remove('selected'));
  btnRef.classList.add('selected');
  actualizarNav();
  setNextEnabled(true);
  actualizarHeaderProg();
}

function actualizarNav() {
  const nav   = document.getElementById('questions-nav');
  nav.innerHTML = '';
  const total = preguntasSeleccionadas.length;
  const resp  = Object.keys(respuestasUsuario).length;

  preguntasSeleccionadas.forEach((_, i) => {
    const btn = document.createElement('button');
    let cls = 'nav-btn';
    if (i === indiceActual) cls += ' current';
    else if (respuestasUsuario[i] !== undefined) cls += ' answered';
    btn.className = cls;
    btn.textContent = i + 1;
    btn.onclick = () => { indiceActual = i; mostrarPregunta(); };
    nav.appendChild(btn);
  });

  document.getElementById('sidebar-prog').textContent = `${resp}/${total}`;
}

function setNextEnabled(on) {
  const ids = ['next-btn','next-btn-m'];
  const esUltima = indiceActual === preguntasSeleccionadas.length - 1;
  ids.forEach(id => {
    const b = document.getElementById(id);
    if (!b) return;
    b.disabled = !on;
    b.classList.remove('btn-fin');
    if (on && esUltima) b.classList.add('btn-fin');
  });
}

function siguientePregunta() {
  const total = preguntasSeleccionadas.length;
  if (indiceActual < total - 1) {
    indiceActual++;
    mostrarPregunta();
    window.scrollTo({top:0, behavior:'smooth'});
  } else {
    finalizarExamen();
  }
}

function anteriorPregunta() {
  if (indiceActual > 0) {
    indiceActual--;
    mostrarPregunta();
    window.scrollTo({top:0, behavior:'smooth'});
  }
}

// ── HEADER QUIZ ──────────────────────────────────────────────
function mostrarHeaderQuiz() {
  document.getElementById('hdr-timer-wrap').classList.remove('hidden');
  document.getElementById('hdr-prog-wrap').classList.remove('hidden');
}

function ocultarHeaderQuiz() {
  document.getElementById('hdr-timer-wrap').classList.add('hidden');
  document.getElementById('hdr-prog-wrap').classList.add('hidden');
}

function actualizarHeaderProg() {
  const total = preguntasSeleccionadas.length;
  const resp  = Object.keys(respuestasUsuario).length;
  const pct   = total > 0 ? Math.round((resp / total) * 100) : 0;
  document.getElementById('hdr-prog-label').textContent  = `${resp} / ${total} respondidas`;
  document.getElementById('hdr-prog-fill').style.width   = pct + '%';
}

// ── TIMER ────────────────────────────────────────────────────
function iniciarTimer() {
  if (intervaloTimer) clearInterval(intervaloTimer);
  actualizarTimer();
  intervaloTimer = setInterval(() => {
    if (tiempoRestante > 0) { tiempoRestante--; actualizarTimer(); }
    else { clearInterval(intervaloTimer); finalizarExamen(); }
  }, 1000);
}

function actualizarTimer() {
  const el = document.getElementById('hdr-timer');
  if (!el) return;
  const m = Math.floor(tiempoRestante / 60);
  const s = tiempoRestante % 60;
  el.textContent = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  el.className = tiempoRestante <= 60 ? 'crit' : tiempoRestante <= 300 ? 'warn' : '';
}

// ── RESULTADO ────────────────────────────────────────────────
function finalizarExamen() {
  clearInterval(intervaloTimer);
  ocultarHeaderQuiz();
  mostrarSolo('result-screen');

  let puntos = 0;
  const review = document.getElementById('review-container');
  review.innerHTML = '';

  preguntasSeleccionadas.forEach((p, i) => {
    const visUsuario = respuestasUsuario[i];
    const { opciones, mapa } = mapaOpcionesAll[i];
    const origUsuario  = visUsuario !== undefined ? mapa[visUsuario] : undefined;
    const esCorrecta   = origUsuario === p.respuestaCorrecta;
    if (esCorrecta) puntos++;

    const posCorrecta = mapa.indexOf(p.respuestaCorrecta);
    const textoUser   = visUsuario !== undefined ? opciones[visUsuario] : '<em>No respondida</em>';
    const textoCorr   = opciones[posCorrecta];

    const card = document.createElement('div');
    card.className = `rev-card ${esCorrecta ? 'ok' : 'fail'}`;
    card.innerHTML = `
      <div class="rev-hdr">
        <span class="rev-num">Pregunta ${i+1} · ${p.categoria||'General'}</span>
        <span>${esCorrecta ? '✅' : '❌'}</span>
      </div>
      <p class="rev-q">${p.pregunta}</p>
      <div class="rev-ag">
        <div class="rev-ab ${esCorrecta?'uok':'ufail'}"><strong>Tu respuesta</strong>${textoUser}</div>
        ${!esCorrecta ? `<div class="rev-ab corr"><strong>Respuesta correcta</strong>${textoCorr}</div>` : ''}
      </div>
      <div class="rev-exp"><strong>📌 Justificación:</strong> ${p.explicacion||'No disponible.'}</div>
    `;
    review.appendChild(card);
  });

  const total    = preguntasSeleccionadas.length;
  const aprobMin = CONFIG[rolSeleccionado].aprobacion;
  const pct      = ((puntos / total) * 100).toFixed(1);
  const pctNum   = parseFloat(pct);

  // Determinar nivel de resultado
  let nivel, icon, msg, clsHero, verdad;
  if (pctNum >= 80) {
    nivel = 'win'; icon = '🏆'; msg = '¡Felicitaciones, sobresaliste!';
    clsHero = 'win';
    verdad = 'Rendimiento excepcional. Estás más que lista/o para la evaluación real. ¡Sigue así!';
  } else if (pctNum >= 60) {
    nivel = 'ok'; icon = '🎯'; msg = '¡Buen trabajo!';
    clsHero = 'ok';
    verdad = 'Resultado sólido. Refuerza las áreas donde tuviste errores y estarás lista/o.';
  } else if (pctNum >= 40) {
    nivel = 'med'; icon = '📖'; msg = 'Vas por buen camino';
    clsHero = 'ok';
    verdad = 'Tienes una base, pero hay temas que necesitan más repaso. ¡No te rindas!';
  } else {
    nivel = 'fail'; icon = '💪'; msg = '¡Tú puedes mejorar!';
    clsHero = 'fail';
    verdad = 'Esta es tu señal para revisar el marco normativo y los casos pedagógicos. ¡Cada intento cuenta!';
  }

  document.getElementById('result-hero').className = `result-hero ${clsHero}`;
  document.getElementById('result-icon').textContent = icon;
  document.getElementById('result-msg').textContent  = msg;
  document.getElementById('final-score').innerHTML   = `${puntos} <span>/ ${total}</span>`;
  document.getElementById('score-pct').textContent   = `${pct}% de precisión`;
  document.getElementById('score-verdict').textContent = verdad;

  // Celebración / animación motivacional
  if (nivel === 'win') lanzarConfeti();
  else if (nivel === 'ok' || nivel === 'med') lanzarEstrellas();
  else lanzarAnimoFail();

  window.scrollTo({top:0, behavior:'smooth'});
}

// ── ANIMACIONES MOTIVACIONALES ───────────────────────────────
function lanzarConfeti() {
  const overlay = document.getElementById('celebration-overlay');
  overlay.innerHTML = '';
  overlay.classList.remove('hidden');
  const colores = ['#f9b233','#003876','#22c55e','#a855f7','#ef4444','#3b82f6','#fbbf24'];
  for (let i = 0; i < 80; i++) {
    const p = document.createElement('div');
    p.className = 'conf';
    p.style.left = Math.random() * 100 + 'vw';
    p.style.background = colores[Math.floor(Math.random() * colores.length)];
    p.style.width = (8 + Math.random() * 8) + 'px';
    p.style.height = (12 + Math.random() * 10) + 'px';
    p.style.animationDuration = (2 + Math.random() * 3) + 's';
    p.style.animationDelay = (Math.random() * 2) + 's';
    p.style.borderRadius = Math.random() > .5 ? '50%' : '2px';
    overlay.appendChild(p);
  }
  setTimeout(() => overlay.classList.add('hidden'), 5500);
}

function lanzarEstrellas() {
  const overlay = document.getElementById('celebration-overlay');
  overlay.innerHTML = '';
  overlay.classList.remove('hidden');
  const emojis = ['⭐','🌟','✨','💫','🎉'];
  for (let i = 0; i < 18; i++) {
    const s = document.createElement('span');
    s.style.cssText = `
      position:absolute;font-size:${1.5+Math.random()*2}rem;
      left:${Math.random()*90+5}%;top:${Math.random()*80+10}%;
      animation:cfall ${3+Math.random()*2}s linear ${Math.random()*1.5}s forwards;
      opacity:0;transform:scale(0);
    `;
    s.textContent = emojis[Math.floor(Math.random()*emojis.length)];
    // Use keyframe via inline style trick
    s.style.animation = `starPop .6s cubic-bezier(.34,1.56,.64,1) ${i*0.1}s both`;
    overlay.appendChild(s);
  }
  // Add keyframe if needed
  if (!document.getElementById('star-kf')) {
    const st = document.createElement('style');
    st.id = 'star-kf';
    st.textContent = '@keyframes starPop{from{transform:scale(0) rotate(-180deg);opacity:0}to{transform:scale(1) rotate(0deg);opacity:1}}';
    document.head.appendChild(st);
  }
  setTimeout(() => {
    overlay.classList.add('hidden');
    overlay.innerHTML = '';
  }, 3500);
}

function lanzarAnimoFail() {
  const overlay = document.getElementById('celebration-overlay');
  overlay.innerHTML = '';
  overlay.classList.remove('hidden');
  const emojis = ['💪','📚','🌱','✏️','🎯'];
  for (let i = 0; i < 12; i++) {
    const s = document.createElement('span');
    s.style.cssText = `
      position:absolute;font-size:${1.8+Math.random()*1.5}rem;
      left:${Math.random()*90+5}%;top:${Math.random()*80+10}%;
    `;
    s.style.animation = `starPop .7s cubic-bezier(.34,1.56,.64,1) ${i*0.12}s both`;
    s.textContent = emojis[Math.floor(Math.random()*emojis.length)];
    overlay.appendChild(s);
  }
  setTimeout(() => {
    overlay.classList.add('hidden');
    overlay.innerHTML = '';
  }, 3000);
}

// ── HELPERS ──────────────────────────────────────────────────
function resetEstado() {
  clearInterval(intervaloTimer);
  intervaloTimer = null;
  preguntasSeleccionadas = [];
  mapaOpcionesAll   = [];
  indiceActual      = 0;
  respuestasUsuario = {};
  tiempoRestante    = 0;
}

function repetirExamen() {
  resetEstado();
  abrirStart(rolSeleccionado);
} */