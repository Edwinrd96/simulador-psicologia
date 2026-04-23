@@ -1,615 +1,32 @@


/* ═══════════════════════════════════════════════════════════
   MINERD — Simulador EDD 2025-2026 | app.js
   ═══════════════════════════════════════════════════════════

// ── ACCESO ──────────────────────────────────────────────────
const ACCESO = {
  marileidy: ['psicologo', 'psicologoExterno'],
  fatima:    ['primaria',  'rimariaFiltrada'],
  katherine: ['tecnicoProfesional'],
  olga:      ['tecnicoDistrital']
};

// ── CONFIGURACIÓN POR ROL ────────────────────────────────────
const CONFIG = {
  psicologo: {
    banco:      () => typeof bancoPreguntas !== 'undefined' ? bancoPreguntas : [],
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
    banco:      () => typeof bancoFormularios !== 'undefined' ? bancoFormularios : [],
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
    banco:      () => typeof bancoPrimaria !== 'undefined' ? bancoPrimaria : [],
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
    banco:      () => typeof bancoFiltrado !== 'undefined' ? bancoFiltrado : [],
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
    banco:      () => typeof bancoTecnicoDistrital !== 'undefined' ? bancoTecnicoDistrital : [],
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
    banco:      () => typeof bancoTecnicoProfesional !== 'undefined' ? bancoTecnicoProfesional : [],
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

const USER_INFO = {
  marileidy: { avatar:'🧠', greeting:'¡Bienvenida, Marileidy!', sub:'Psicóloga Escolar — EDD 2025-2026' },
  fatima:    { avatar:'📚', greeting:'¡Bienvenida, Fátima!',    sub:'Maestra de Primaria — EDD 2025-2026' },
  katherine: { avatar:'🔧', greeting:'¡Bienvenida, Katherine!', sub:'Docente Técnico Profesional — EDD 2025-2026' },
  olga:      { avatar:'🏛️', greeting:'¡Bienvenida, Olga!',      sub:'Técnica Distrital — EDD 2025-2026' }
};

// ── ESTADO Y PERSISTENCIA ────────────────────────────────────
let nombreUsuario     = '';
let rolesPermitidos   = [];
let rolSeleccionado   = null;

let preguntasSeleccionadas = [];
let mapaOpcionesAll   = [];
let indiceActual      = 0;
let respuestasUsuario = {};
let tiempoRestante    = 0;
let intervaloTimer    = null;

// Pool por rol (evita repetición de preguntas). Se carga de memoria
let poolUsado = JSON.parse(localStorage.getItem('poolUsado_EDD')) || {};

function guardarProgresoActual() {
  const sesion = {
    nombreUsuario, rolSeleccionado, rolesPermitidos,
    preguntasSeleccionadas, mapaOpcionesAll, 
    indiceActual, respuestasUsuario, tiempoRestante
  };
  localStorage.setItem('sesion_activa_EDD', JSON.stringify(sesion));
}

function borrarProgresoActual() {
  localStorage.removeItem('sesion_activa_EDD');
}

// ── VENTANA DINÁMICA DE RECUPERACIÓN ─────────────────────────
window.onload = () => {
  const guardado = localStorage.getItem('sesion_activa_EDD');
  if (guardado) {
    const d = JSON.parse(guardado);
    
    // Crear un modal dinámico bonito
    const overlay = document.createElement('div');
    overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.8);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px;backdrop-filter:blur(5px);';
    overlay.innerHTML = `
      <div style="background:#fff;padding:30px;border-radius:15px;max-width:350px;text-align:center;box-shadow:0 10px 25px rgba(0,0,0,0.2);font-family:sans-serif;">
        <div style="font-size:3rem;margin-bottom:10px;">⏳</div>
        <h3 style="color:#003876;margin:0 0 10px;font-size:1.3rem;">¡Tienes un examen en pausa!</h3>
        <p style="color:#4b5563;margin-bottom:20px;font-size:0.95rem;">
          Hola <b>${d.nombreUsuario}</b>, tienes una práctica pendiente de <b>${d.rolSeleccionado}</b>.<br><br>
          Quedaste en la pregunta <b>${d.indiceActual + 1} de ${d.preguntasSeleccionadas.length}</b>. ¿Qué deseas hacer?
        </p>
        <div style="display:flex;gap:10px;flex-direction:column;">
          <button id="btn-retomar" style="background:#2563eb;color:#fff;border:none;padding:12px;border-radius:8px;font-weight:bold;cursor:pointer;font-size:1rem;">Continuar donde lo dejé</button>
          <button id="btn-reiniciar" style="background:#ef4444;color:#fff;border:none;padding:12px;border-radius:8px;font-weight:bold;cursor:pointer;font-size:1rem;">Borrar e iniciar de cero</button>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);

    document.getElementById('btn-retomar').onclick = () => {
      document.body.removeChild(overlay);
      nombreUsuario = d.nombreUsuario;
      rolesPermitidos = d.rolesPermitidos;
      rolSeleccionado = d.rolSeleccionado;
      preguntasSeleccionadas = d.preguntasSeleccionadas;
      mapaOpcionesAll = d.mapaOpcionesAll;
      indiceActual = d.indiceActual;
      respuestasUsuario = d.respuestasUsuario;
      tiempoRestante = d.tiempoRestante;
      
      mostrarSolo('quiz-screen');
      mostrarHeaderQuiz();
      iniciarTimer();
      mostrarPregunta();
      actualizarHeaderProg();
    };

    document.getElementById('btn-reiniciar').onclick = () => {
      document.body.removeChild(overlay);
      borrarProgresoActual();
    };
  }
};

// ── PANTALLAS ────────────────────────────────────────────────
const SCREENS = ['access-screen','profile-screen','start-screen','quiz-screen','result-screen'];

function mostrarSolo(id) {
  SCREENS.forEach(s => {
    const el = document.getElementById(s);
    if (el) el.classList.add('hidden');
  });
  const target = document.getElementById(id);
  if (target) target.classList.remove('hidden');
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
  if (inp) inp.classList.remove('err');

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
  if(inp) {
    inp.classList.add('err');
    setTimeout(() => inp.classList.remove('err'), 600);
  }
}

const inpAccess = document.getElementById('access-input');
if(inpAccess) {
  inpAccess.addEventListener('keydown', e => {
    if (e.key === 'Enter') verificarAcceso();
  });
}

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

// ── POOL SIN REPETICIÓN (AHORA CON MEMORIA) ──────────────────
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

  localStorage.setItem('poolUsado_EDD', JSON.stringify(poolUsado));
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
    alert('Error: No se encontró el banco de preguntas.');
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
  guardarProgresoActual();
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
  const mc = document.getElementById('mobile-counter');
  if(mc) mc.textContent   = `${indiceActual + 1}/${total}`;

  const esUltima = indiceActual === total - 1;
  const lblSig   = esUltima ? 'Finalizar ✓' : 'Siguiente →';
  const lblSigM  = esUltima ? 'Fin ✓' : 'Sig. →';

  ['prev-btn','prev-btn-m'].forEach(id => {
    const b = document.getElementById(id);
    if (b) b.style.visibility = indiceActual === 0 ? 'hidden' : 'visible';
  });

  const nextBtn = document.getElementById('next-btn');
  if(nextBtn) nextBtn.textContent = lblSig;
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

// ── INTERACCIÓN DE BOTONES (COMO EL ORIGINAL) ────────────────
function seleccionarOpcion(index, btnRef) {
  respuestasUsuario[indiceActual] = index;
  document.querySelectorAll('.opt-btn').forEach(b => b.classList.remove('selected'));
  btnRef.classList.add('selected');
  actualizarNav();
  setNextEnabled(true);
  actualizarHeaderProg();
  guardarProgresoActual();
}

function actualizarNav() {
  const nav   = document.getElementById('questions-nav');
  if(!nav) return;
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

  const sp = document.getElementById('sidebar-prog');
  if(sp) sp.textContent = `${resp}/${total}`;
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
    guardarProgresoActual();
  } else {
    finalizarExamen();
  }
}

function anteriorPregunta() {
  if (indiceActual > 0) {
    indiceActual--;
    mostrarPregunta();
    window.scrollTo({top:0, behavior:'smooth'});
    guardarProgresoActual();
  }
}

// ── HEADER QUIZ ──────────────────────────────────────────────
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
  const resp  = Object.keys(respuestasUsuario).length;
  const pct   = total > 0 ? Math.round((resp / total) * 100) : 0;
  
  const hL = document.getElementById('hdr-prog-label');
  if(hL) hL.textContent = `${resp} / ${total} respondidas`;
  const hF = document.getElementById('hdr-prog-fill');
  if(hF) hF.style.width = pct + '%';
}

// ── TIMER ────────────────────────────────────────────────────
function iniciarTimer() {
  if (intervaloTimer) clearInterval(intervaloTimer);
  actualizarTimer();
  intervaloTimer = setInterval(() => {
    if (tiempoRestante > 0) { 
      tiempoRestante--; 
      actualizarTimer(); 
      if (tiempoRestante % 5 === 0) guardarProgresoActual();
    }
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
  borrarProgresoActual(); // ¡Limpia la sesión al terminar!
  ocultarHeaderQuiz();
  mostrarSolo('result-screen');

  let puntos = 0;
  const review = document.getElementById('review-container');
  if(review) review.innerHTML = '';

  preguntasSeleccionadas.forEach((p, i) => {
    const visUsuario = respuestasUsuario[i];
    const { opciones, mapa } = mapaOpcionesAll[i];
    const origUsuario  = visUsuario !== undefined ? mapa[visUsuario] : undefined;
    const esCorrecta   = origUsuario === p.respuestaCorrecta;
    if (esCorrecta) puntos++;

    if(!review) return;
    const posCorrecta = mapa.indexOf(p.respuestaCorrecta);
    const textoUser   = visUsuario !== undefined ? opciones[visUsuario] : '<em>No respondida</em>';
    const textoCorr   = opciones[posCorrecta];

    const card = document.createElement('div');
    card.className = `rev-card ${esCorrecta ? 'ok' : 'fail'}`;
    card.innerHTML = `
      <div class="rev-hdr">
        <span class="rev-num">Pregunta ${i+1} · ${p.categoria||'General'}</span>
        <span>${esCorrecta ? '✅' :*/
