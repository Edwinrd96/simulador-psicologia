/* ═══════════════════════════════════════════════════════════
   MINERD — Simulador EDD 2025-2026 | app.js
   ═══════════════════════════════════════════════════════════ */

/* ─────────────────────────────────────────────────────────
   AES-256 BROWSER DECRYPTION
   Uses WebCrypto API to decrypt the .enc.js bank files
   ───────────────────────────────────────────────────────── */
const _AES_SECRET = 'MINERD-EDD-2025-ADMIN-KEY-SECURE';
const _AES_SALT   = 'minerd-salt-2025';

async function _deriveKey() {
  const enc   = new TextEncoder();
  const base  = await crypto.subtle.importKey('raw', enc.encode(_AES_SECRET), 'PBKDF2', false, ['deriveKey']);
  return crypto.subtle.deriveKey(
    { name:'PBKDF2', salt:enc.encode(_AES_SALT), iterations:100000, hash:'SHA-256' },
    base,
    { name:'AES-CBC', length:256 },
    false,
    ['decrypt']
  );
}

async function _decryptBank(encStr) {
  const [ivB64, dataB64] = encStr.split(':');
  const iv   = _b64ToArr(ivB64);
  const data = _b64ToArr(dataB64);
  const key  = await _deriveKey();
  const dec  = await crypto.subtle.decrypt({ name:'AES-CBC', iv }, key, data);
  return new TextDecoder().decode(dec);
}

function _b64ToArr(b64) {
  const binary = atob(b64);
  const bytes  = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

// Decrypt all banks on load and expose as globals
const BANKS_READY = {};
async function decryptAllBanks() {
  const map = {
    bancoPreguntas:          typeof _enc_bancoPreguntas          !== 'undefined' ? _enc_bancoPreguntas          : null,
    bancoFormularios:        typeof _enc_bancoFormularios        !== 'undefined' ? _enc_bancoFormularios        : null,
    bancoFiltrado:           typeof _enc_bancoFiltrado           !== 'undefined' ? _enc_bancoFiltrado           : null,
    bancoPrimaria:           typeof _enc_bancoPrimaria           !== 'undefined' ? _enc_bancoPrimaria           : null,
    bancoTecnicoDistrital:   typeof _enc_bancoTecnicoDistrital   !== 'undefined' ? _enc_bancoTecnicoDistrital   : null,
    bancoTecnicoProfesional: typeof _enc_bancoTecnicoProfesional !== 'undefined' ? _enc_bancoTecnicoProfesional : null,
  };
  for (const [name, enc] of Object.entries(map)) {
    if (!enc) { BANKS_READY[name] = []; continue; }
    try {
      const code = await _decryptBank(enc);
      // Safe eval in isolated scope
      const fn = new Function(code + `\nreturn ${name};`);
      BANKS_READY[name] = fn();
    } catch(e) {
      console.warn(`Bank decrypt failed: ${name}`, e);
      BANKS_READY[name] = [];
    }
  }
}

/* ─────────────────────────────────────────────────────────
   STORAGE HELPERS (localStorage w/ 3-week TTL for pool,
   24h TTL for active session)
   ───────────────────────────────────────────────────────── */
const POOL_TTL    = 21 * 24 * 3600 * 1000; // 3 weeks
const SESSION_TTL = 24 * 3600 * 1000;       // 24 hours
const POOL_KEY    = 'minerd_pool_v2';
const SESSION_KEY = 'minerd_session_v2';

function storeSave(key, value, ttl) {
  try {
    localStorage.setItem(key, JSON.stringify({ v: value, exp: Date.now() + ttl }));
  } catch(e) {}
}

function storeLoad(key) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    const obj = JSON.parse(raw);
    if (Date.now() > obj.exp) { localStorage.removeItem(key); return null; }
    return obj.v;
  } catch(e) { return null; }
}

function storeRemove(key) {
  try { localStorage.removeItem(key); } catch(e) {}
}

/* ─────────────────────────────────────────────────────────
   ACCESO Y CONFIGURACIÓN
   ───────────────────────────────────────────────────────── */
const ACCESO = {
  marileidy: ['psicologo','psicologoExterno'],
  fatima:    ['primaria','rimariaFiltrada'],
  katherine: ['tecnicoProfesional'],
  olga:      ['tecnicoDistrital'],
  edwin:     ['__admin__']
};

const CONFIG = {
  psicologo: {
    banco:      () => BANKS_READY.bancoPreguntas,
    preguntas:  35, tiempo:(52*60)+30, tiempoLabel:'52:30',
    icon:'🧠', titulo:'Evaluación Inicial',
    subtitulo:'Psicología Escolar — Prueba de Juicio Situacional. Marco legal dominicano.',
    aprobacion:25, color:'#7c3aed', colorL:'#ede9fe', chipTime:'52:30 min'
  },
  psicologoExterno: {
    banco:      () => BANKS_READY.bancoFormularios,
    preguntas:  35, tiempo:(52*60)+30, tiempoLabel:'52:30',
    icon:'📝', titulo:'Evaluación de Formularios Externos',
    subtitulo:'Psicología Escolar — Formularios y situaciones de evaluación profesional.',
    aprobacion:25, color:'#0d9488', colorL:'#ccfbf1', chipTime:'Complementario'
  },
  primaria: {
    banco:      () => BANKS_READY.bancoPrimaria,
    preguntas:  40, tiempo:60*60, tiempoLabel:'60:00',
    icon:'📚', titulo:'Evaluación Inicial',
    subtitulo:'Nivel Primario — Análisis de Casos Pedagógicos. Ordenanza 04-2023.',
    aprobacion:28, color:'#2563eb', colorL:'#dbeafe', chipTime:'60:00 min'
  },
  rimariaFiltrada: {
    banco:      () => BANKS_READY.bancoFiltrado,
    preguntas:  40, tiempo:60*60, tiempoLabel:'60:00',
    icon:'🔍', titulo:'Evaluación Filtrada',
    subtitulo:'Nivel Primario — Inclusión y casos pedagógicos específicos.',
    aprobacion:8, color:'#d97706', colorL:'#fef3c7', chipTime:'Filtrado'
  },
  tecnicoDistrital: {
    banco:      () => BANKS_READY.bancoTecnicoDistrital,
    preguntas:  35, tiempo:(52*60)+30, tiempoLabel:'52:30',
    icon:'🏛️', titulo:'Evaluación Inicial',
    subtitulo:'Técnico/a Distrital — Gestión y Asesoría Técnica Distrital.',
    aprobacion:25, color:'#003876', colorL:'#dbeafe', chipTime:'52:30 min'
  },
  tecnicoProfesional: {
    banco:      () => BANKS_READY.bancoTecnicoProfesional,
    preguntas:  40, tiempo:60*60, tiempoLabel:'60:00',
    icon:'🔧', titulo:'Evaluación Inicial',
    subtitulo:'Docente Técnico Profesional — Modalidad Técnico Profesional (MTP).',
    aprobacion:14, color:'#059669', colorL:'#d1fae5', chipTime:'60:00 min'
  }
};

const USER_INFO = {
  marileidy: { avatar:'🧠', greeting:'¡Bienvenida, Marileidy!',  sub:'Psicóloga Escolar — EDD 2025-2026' },
  fatima:    { avatar:'📚', greeting:'¡Bienvenida, Fátima!',     sub:'Maestra de Primaria — EDD 2025-2026' },
  katherine: { avatar:'🔧', greeting:'¡Bienvenida, Katherine!',  sub:'Docente Técnico Profesional — EDD 2025-2026' },
  olga:      { avatar:'🏛️', greeting:'¡Bienvenida, Olga!',       sub:'Técnica Distrital — EDD 2025-2026' },
  edwin:     { avatar:'🛡️', greeting:'¡Bienvenido, Edwin!',      sub:'Administrador del Sistema' }
};

/* ─────────────────────────────────────────────────────────
   ESTADO GLOBAL
   ───────────────────────────────────────────────────────── */
let nombreUsuario     = '';
let rolesPermitidos   = [];
let rolSeleccionado   = null;

let preguntasSeleccionadas = [];
let mapaOpcionesAll   = [];
let indiceActual      = 0;
let respuestasUsuario = {};
let tiempoRestante    = 0;
let intervaloTimer    = null;

// Pool persistente (cargado de localStorage)
let poolUsado = {};

const SCREENS = ['access-screen','profile-screen','start-screen','quiz-screen','result-screen','admin-screen'];

function mostrarSolo(id) {
  SCREENS.forEach(s => { const el=document.getElementById(s); if(el) el.classList.add('hidden'); });
  document.getElementById(id).classList.remove('hidden');
}

/* ─────────────────────────────────────────────────────────
   NORMALIZAR
   ───────────────────────────────────────────────────────── */
function norm(s) {
  return s.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z]/g,'');
}

/* ─────────────────────────────────────────────────────────
   MODAL SYSTEM
   ───────────────────────────────────────────────────────── */
function showModal({ icon, title, message, buttons, extraClass='' }) {
  const overlay = document.getElementById('modal-overlay');
  overlay.innerHTML = `
    <div class="modal ${extraClass}">
      <span class="modal-icon">${icon}</span>
      <h3>${title}</h3>
      <p>${message}</p>
      <div class="modal-btns">
        ${buttons.map((b,i) => `<button class="mbtn ${b.cls||'sec'}" onclick="modalAction(${i})">${b.label}</button>`).join('')}
      </div>
    </div>`;
  overlay.classList.remove('hidden');
  overlay._callbacks = buttons.map(b => b.action);
}

function modalAction(i) {
  const overlay = document.getElementById('modal-overlay');
  overlay.classList.add('hidden');
  const cb = overlay._callbacks && overlay._callbacks[i];
  if (cb) cb();
}

function closeModal() {
  document.getElementById('modal-overlay').classList.add('hidden');
}

/* ─────────────────────────────────────────────────────────
   ACCESS
   ───────────────────────────────────────────────────────── */
function verificarAcceso() {
  const inp = document.getElementById('access-input');
  const err = document.getElementById('access-error');
  const key = norm(inp.value);
  err.textContent = '';
  inp.classList.remove('err');

  if (!key) {
    mostrarErrorAcceso(inp, err, 'Por favor escribe tu nombre.');
    return;
  }
  const roles = ACCESO[key];
  if (!roles) {
    // Animated error modal
    showModal({
      icon: '🚫',
      title: 'Acceso denegado',
      message: `El nombre <strong>"${inp.value.trim()}"</strong> no está registrado en el sistema. Verifica que escribiste correctamente tu nombre.`,
      extraClass: 'error-modal',
      buttons: [{ label: 'Intentar de nuevo', cls: 'prim', action: () => { inp.value=''; inp.focus(); } }]
    });
    mostrarErrorAcceso(inp, err, 'Nombre no encontrado.');
    return;
  }

  nombreUsuario   = key;
  rolesPermitidos = roles;

  // Load persistent pool
  const savedPool = storeLoad(POOL_KEY);
  if (savedPool) poolUsado = savedPool;

  // Admin check
  if (roles[0] === '__admin__') {
    mostrarAdmin();
    return;
  }

  // Check for saved session (within 24h)
  const savedSession = storeLoad(SESSION_KEY);
  if (savedSession && savedSession.usuario === key && savedSession.rolSeleccionado) {
    showModal({
      icon: '🔔',
      title: '¿Continuar donde lo dejaste?',
      message: `Tienes una evaluación guardada: <strong>${CONFIG[savedSession.rolSeleccionado]?.titulo || ''}</strong> — Pregunta ${(savedSession.indiceActual||0)+1}, con ${Object.keys(savedSession.respuestasUsuario||{}).length} preguntas respondidas.`,
      buttons: [
        { label: '▶ Continuar', cls: 'prim', action: () => restaurarSesion(savedSession) },
        { label: '🏠 Ir al inicio', cls: 'sec', action: () => { storeRemove(SESSION_KEY); mostrarPerfil(); } }
      ]
    });
  } else {
    mostrarPerfil();
  }
}

function mostrarErrorAcceso(inp, err, msg) {
  err.textContent = msg;
  inp.classList.add('err');
  setTimeout(() => inp.classList.remove('err'), 600);
}

document.getElementById('access-input').addEventListener('keydown', e => {
  if (e.key === 'Enter') verificarAcceso();
});

/* ─────────────────────────────────────────────────────────
   PROFILE
   ───────────────────────────────────────────────────────── */
function mostrarPerfil() {
  const info = USER_INFO[nombreUsuario] || { avatar:'🎓', greeting:'¡Bienvenido/a!', sub:'Simulador EDD 2025-2026' };
  document.getElementById('welcome-av').textContent   = info.avatar;
  document.getElementById('welcome-name').textContent = info.greeting;
  document.getElementById('welcome-sub').textContent  = info.sub;

  const grid = document.getElementById('eval-grid');
  grid.innerHTML = '';

  rolesPermitidos.forEach((rol, idx) => {
    const cfg = CONFIG[rol];
    if (!cfg) return;
    if (!poolUsado[rol]) poolUsado[rol] = { ids:[], ts: Date.now() };

    const banco = cfg.banco ? cfg.banco() : [];
    const total = banco ? banco.length : 0;
    const usados = Array.isArray(poolUsado[rol]?.ids) ? poolUsado[rol].ids.length : 0;
    const disp   = Math.max(0, total - usados);

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
        <span class="chip">${cfg.preguntas} preguntas</span>
        <span class="chip gold">${cfg.chipTime}</span>
      </div>
      <div class="e-pool">
        <span class="pdot"></span>
        ${disp > 0 ? `${disp} disponibles sin repetir` : 'Ciclo completo — reiniciando'} (banco: ${total})
      </div>`;
    card.onclick = () => abrirStart(rol);
    grid.appendChild(card);
  });

  ocultarHeaderQuiz();
  mostrarSolo('profile-screen');
}

function volverPerfil() {
  resetEstado();
  rolSeleccionado = null;
  ocultarHeaderQuiz();
  mostrarPerfil();
}

/* ─────────────────────────────────────────────────────────
   START
   ───────────────────────────────────────────────────────── */
function abrirStart(rol) {
  rolSeleccionado = rol;
  const cfg = CONFIG[rol];
  tiempoRestante = cfg.tiempo;

  document.getElementById('start-icon').textContent     = cfg.icon;
  document.getElementById('start-title').textContent    = cfg.titulo;
  document.getElementById('start-subtitle').textContent = cfg.subtitulo;
  document.getElementById('info-preguntas').textContent = cfg.preguntas + ' preguntas';
  document.getElementById('info-tiempo').textContent    = cfg.tiempoLabel + ' min';

  if (!poolUsado[rol]) poolUsado[rol] = { ids:[], ts: Date.now() };
  const banco = cfg.banco ? cfg.banco() : [];
  const total  = banco ? banco.length : 0;
  const usados = poolUsado[rol].ids?.length || 0;
  const disp   = Math.max(0, total - usados);

  document.getElementById('pool-st').innerHTML =
    `📦 Banco: <strong>${total}</strong> preguntas &nbsp;·&nbsp;
     ✅ Practicadas: <strong>${usados}</strong> &nbsp;·&nbsp;
     🔄 Disponibles: <strong>${disp}</strong>
     ${disp === 0 ? '<br>⚡ El banco se reiniciará automáticamente.' : ''}`;

  mostrarSolo('start-screen');
}

/* ─────────────────────────────────────────────────────────
   POOL SIN REPETICIÓN (PERSISTENTE)
   ───────────────────────────────────────────────────────── */
function sacarDelPool(rol, cantidad) {
  const banco = CONFIG[rol].banco();
  if (!banco || banco.length === 0) return [];

  if (!poolUsado[rol] || typeof poolUsado[rol] !== 'object') {
    poolUsado[rol] = { ids:[], ts: Date.now() };
  }

  // Si expiró (3 semanas) o completamos el banco, reiniciar
  const ahora = Date.now();
  const expirado = (ahora - (poolUsado[rol].ts||0)) > POOL_TTL;
  if (expirado || poolUsado[rol].ids.length >= banco.length) {
    poolUsado[rol] = { ids:[], ts: ahora };
  }

  const disponibles = banco.filter(p => {
    const id = p.id !== undefined ? p.id : banco.indexOf(p);
    return !poolUsado[rol].ids.includes(id);
  });

  const barajadas = [...disponibles].sort(() => Math.random() - 0.5);
  const sel = barajadas.slice(0, Math.min(cantidad, barajadas.length));

  sel.forEach(p => {
    const id = p.id !== undefined ? p.id : banco.indexOf(p);
    if (!poolUsado[rol].ids.includes(id)) poolUsado[rol].ids.push(id);
  });

  // Persist pool (3-week TTL)
  storeSave(POOL_KEY, poolUsado, POOL_TTL);
  return sel;
}

/* ─────────────────────────────────────────────────────────
   MEZCLAR OPCIONES
   ───────────────────────────────────────────────────────── */
function mezclarOpciones(pregunta) {
  const n = pregunta.opciones.length;
  const indices = Array.from({length:n},(_,i)=>i);
  for (let i=n-1; i>0; i--) {
    const j = Math.floor(Math.random()*(i+1));
    [indices[i],indices[j]]=[indices[j],indices[i]];
  }
  return { opciones: indices.map(i => pregunta.opciones[i]), mapa: indices };
}

/* Strip leading "A) " "B) " etc from option text */
function cleanOption(text) {
  return text.replace(/^[A-Fa-f]\)\s*/,'').trim();
}

/* ─────────────────────────────────────────────────────────
   GUARDAR / RESTAURAR SESIÓN (24h)
   ───────────────────────────────────────────────────────── */
function guardarSesion() {
  const session = {
    usuario:              nombreUsuario,
    rolSeleccionado,
    tiempoRestante,
    indiceActual,
    respuestasUsuario,
    // Serialize question IDs and mapa instead of full objects
    preguntaIds:          preguntasSeleccionadas.map(p => p.id !== undefined ? p.id : null),
    preguntaIdxs:         preguntasSeleccionadas.map(p => {
      const banco = CONFIG[rolSeleccionado]?.banco();
      return banco ? banco.indexOf(p) : -1;
    }),
    mapaOpcionesAll:      mapaOpcionesAll,
    ts:                   Date.now()
  };
  storeSave(SESSION_KEY, session, SESSION_TTL);
}

function restaurarSesion(sess) {
  rolSeleccionado = sess.rolSeleccionado;
  const cfg = CONFIG[rolSeleccionado];
  if (!cfg) { mostrarPerfil(); return; }

  const banco = cfg.banco();
  if (!banco || banco.length === 0) { mostrarPerfil(); return; }

  // Reconstruct questions array from saved indexes
  preguntasSeleccionadas = (sess.preguntaIdxs || []).map(idx => banco[idx]).filter(Boolean);

  if (preguntasSeleccionadas.length === 0) { mostrarPerfil(); return; }

  mapaOpcionesAll   = sess.mapaOpcionesAll || preguntasSeleccionadas.map(p => mezclarOpciones(p));
  indiceActual      = sess.indiceActual || 0;
  respuestasUsuario = sess.respuestasUsuario || {};
  tiempoRestante    = sess.tiempoRestante || cfg.tiempo;

  mostrarSolo('quiz-screen');
  mostrarHeaderQuiz();
  iniciarTimer();
  mostrarPregunta();
  actualizarHeaderProg();
}

/* ─────────────────────────────────────────────────────────
   INICIAR EXAMEN
   ───────────────────────────────────────────────────────── */
function iniciarExamen() {
  const cfg = CONFIG[rolSeleccionado];
  const sel = sacarDelPool(rolSeleccionado, cfg.preguntas);

  if (!sel || sel.length === 0) {
    showModal({
      icon:'⚠️', title:'Error de banco',
      message:'No se encontraron preguntas. Verifica que los archivos de banco estén cargados correctamente.',
      buttons:[{ label:'Aceptar', cls:'prim', action:()=>{} }]
    });
    return;
  }

  preguntasSeleccionadas = sel;
  mapaOpcionesAll        = preguntasSeleccionadas.map(p => mezclarOpciones(p));
  indiceActual           = 0;
  respuestasUsuario      = {};
  tiempoRestante         = cfg.tiempo;

  storeRemove(SESSION_KEY); // clear old session
  mostrarSolo('quiz-screen');
  mostrarHeaderQuiz();
  iniciarTimer();
  mostrarPregunta();
  actualizarHeaderProg();
}

/* ─────────────────────────────────────────────────────────
   MOSTRAR PREGUNTA
   ───────────────────────────────────────────────────────── */
function mostrarPregunta() {
  const p     = preguntasSeleccionadas[indiceActual];
  const total = preguntasSeleccionadas.length;
  const { opciones } = mapaOpcionesAll[indiceActual];
  const letras = ['A','B','C','D','E','F'];

  document.getElementById('q-counter').textContent = `Pregunta ${indiceActual+1} de ${total}`;
  document.getElementById('q-cat').textContent     = p.categoria || 'General';
  document.getElementById('q-text').textContent    = p.pregunta;
  document.getElementById('mob-cnt').textContent   = `${indiceActual+1}/${total}`;

  const esUltima = indiceActual === total-1;
  ['prev-btn','prev-btn-m'].forEach(id=>{
    const b = document.getElementById(id);
    if(b) b.style.visibility = indiceActual===0?'hidden':'visible';
  });
  document.getElementById('next-btn').textContent = esUltima ? 'Finalizar ✓' : 'Siguiente →';
  const bm = document.getElementById('next-btn-m');
  if(bm) bm.textContent = esUltima ? 'Fin ✓' : 'Sig. →';

  const respVis = respuestasUsuario[indiceActual];
  setNextEnabled(respVis !== undefined);

  const container = document.getElementById('opts-container');
  container.innerHTML = '';

  opciones.forEach((opc, j) => {
    const btn = document.createElement('button');
    btn.className = `opt-btn${respVis===j?' selected':''}`;
    btn.innerHTML = `<span class="opt-ltr">${letras[j]||j}</span><span>${cleanOption(opc)}</span>`;
    btn.onclick = () => seleccionarOpcion(j, btn);
    container.appendChild(btn);
  });

  actualizarNav();
  actualizarHeaderProg();

  // Auto-save session
  guardarSesion();
}

function seleccionarOpcion(index, btnRef) {
  respuestasUsuario[indiceActual] = index;
  document.querySelectorAll('.opt-btn').forEach(b => b.classList.remove('selected'));
  btnRef.classList.add('selected');
  actualizarNav();
  setNextEnabled(true);
  actualizarHeaderProg();
  guardarSesion();
}

function actualizarNav() {
  // Desktop sidebar
  const nav   = document.getElementById('questions-nav');
  const mob   = document.getElementById('mob-q-inner');
  const total = preguntasSeleccionadas.length;
  const resp  = Object.keys(respuestasUsuario).length;
  nav.innerHTML = '';
  mob.innerHTML = '';

  preguntasSeleccionadas.forEach((_,i) => {
    let cls = '';
    if(i===indiceActual) cls = 'current';
    else if(respuestasUsuario[i]!==undefined) cls = 'answered';

    // Desktop
    const d = document.createElement('button');
    d.className = `nav-btn${cls?' '+cls:''}`;
    d.textContent = i+1;
    d.onclick = () => { indiceActual=i; mostrarPregunta(); };
    nav.appendChild(d);

    // Mobile
    const m = document.createElement('button');
    m.className = `mob-nav-btn${cls?' '+cls:''}`;
    m.textContent = i+1;
    m.onclick = () => { indiceActual=i; mostrarPregunta(); scrollMobNav(i); };
    mob.appendChild(m);
  });

  document.getElementById('sb-prog').textContent = `${resp}/${total}`;

  // Scroll mobile nav to current
  scrollMobNav(indiceActual);
}

function scrollMobNav(idx) {
  const mob = document.getElementById('mob-q-inner');
  const scroller = mob?.parentElement;
  if (!scroller) return;
  const btn = mob.children[idx];
  if (btn) {
    const btnLeft = btn.offsetLeft;
    const btnW    = btn.offsetWidth;
    const scrollW = scroller.offsetWidth;
    scroller.scrollTo({ left: btnLeft - (scrollW/2) + (btnW/2), behavior:'smooth' });
  }
}

function setNextEnabled(on) {
  const esUltima = indiceActual === preguntasSeleccionadas.length-1;
  ['next-btn','next-btn-m'].forEach(id => {
    const b = document.getElementById(id);
    if (!b) return;
    b.disabled = !on;
    b.classList.remove('btn-fin');
    if(on && esUltima) b.classList.add('btn-fin');
  });
}

function siguientePregunta() {
  const total = preguntasSeleccionadas.length;
  if (indiceActual < total-1) {
    indiceActual++;
    mostrarPregunta();
    window.scrollTo({top:0,behavior:'smooth'});
  } else {
    finalizarExamen();
  }
}

function anteriorPregunta() {
  if(indiceActual>0){ indiceActual--; mostrarPregunta(); window.scrollTo({top:0,behavior:'smooth'}); }
}

/* ─────────────────────────────────────────────────────────
   HEADER QUIZ
   ───────────────────────────────────────────────────────── */
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
  const pct   = total>0 ? Math.round((resp/total)*100) : 0;
  document.getElementById('hdr-prog-lbl').textContent = `${resp}/${total}`;
  document.getElementById('hdr-prog-fill').style.width = pct+'%';
}

/* ─────────────────────────────────────────────────────────
   TIMER
   ───────────────────────────────────────────────────────── */
function iniciarTimer() {
  if(intervaloTimer) clearInterval(intervaloTimer);
  actualizarTimer();
  intervaloTimer = setInterval(()=>{
    if(tiempoRestante>0){ tiempoRestante--; actualizarTimer(); guardarSesion(); }
    else{ clearInterval(intervaloTimer); finalizarExamen(); }
  },1000);
}

function actualizarTimer() {
  const el = document.getElementById('hdr-timer');
  if(!el) return;
  const m = Math.floor(tiempoRestante/60), s = tiempoRestante%60;
  el.textContent = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  el.className = tiempoRestante<=60?'crit':tiempoRestante<=300?'warn':'';
}

/* ─────────────────────────────────────────────────────────
   PAGE VISIBILITY — warn on leave mid-quiz
   ───────────────────────────────────────────────────────── */
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') {
    // Auto-save whenever they tab away
    if (preguntasSeleccionadas.length > 0 && rolSeleccionado) guardarSesion();
  }
});

window.addEventListener('beforeunload', e => {
  if (preguntasSeleccionadas.length > 0 && rolSeleccionado && Object.keys(respuestasUsuario).length > 0) {
    guardarSesion();
    e.preventDefault();
    e.returnValue = '¿Seguro que deseas salir? Tu progreso se guardará.';
  }
});

/* ─────────────────────────────────────────────────────────
   FINALIZAR EXAMEN
   ───────────────────────────────────────────────────────── */
function finalizarExamen() {
  clearInterval(intervaloTimer);
  storeRemove(SESSION_KEY); // clear saved session on finish
  ocultarHeaderQuiz();
  mostrarSolo('result-screen');

  let puntos = 0;
  const review = document.getElementById('review-container');
  review.innerHTML = '';

  preguntasSeleccionadas.forEach((p,i)=>{
    const visUser = respuestasUsuario[i];
    const { opciones, mapa } = mapaOpcionesAll[i];
    const origUser = visUser!==undefined ? mapa[visUser] : undefined;
    const ok       = origUser === p.respuestaCorrecta;
    if(ok) puntos++;

    const posCorr  = mapa.indexOf(p.respuestaCorrecta);
    const txtUser  = visUser!==undefined ? cleanOption(opciones[visUser]) : '<em>No respondida</em>';
    const txtCorr  = cleanOption(opciones[posCorr]);

    const card = document.createElement('div');
    card.className = `rev-card ${ok?'ok':'fail'}`;
    card.innerHTML = `
      <div class="rev-hdr">
        <span class="rev-num">Pregunta ${i+1} · ${p.categoria||'General'}</span>
        <span>${ok?'✅':'❌'}</span>
      </div>
      <p class="rev-q">${p.pregunta}</p>
      <div class="rev-ag">
        <div class="rev-ab ${ok?'uok':'ufail'}"><strong>Tu respuesta</strong>${txtUser}</div>
        ${!ok?`<div class="rev-ab corr"><strong>Respuesta correcta</strong>${txtCorr}</div>`:''}
      </div>
      <div class="rev-exp"><strong>📌 Justificación:</strong> ${p.explicacion||'No disponible.'}</div>`;
    review.appendChild(card);
  });

  // Save session stats for admin
  guardarResultadoAdmin(puntos, preguntasSeleccionadas.length);

  const total   = preguntasSeleccionadas.length;
  const minAprob = CONFIG[rolSeleccionado].aprobacion;
  const pct     = ((puntos/total)*100).toFixed(1);
  const pctNum  = parseFloat(pct);

  let nivel, icon, msg, cls, vrd;
  if(pctNum>=80){
    nivel='win';icon='🏆';msg='¡Felicitaciones, sobresaliste!';cls='win';
    vrd='Rendimiento excepcional. Estás más que lista/o para la evaluación real.';
  } else if(pctNum>=60){
    nivel='ok';icon='🎯';msg='¡Buen trabajo!';cls='ok';
    vrd='Resultado sólido. Refuerza las áreas con errores y estarás lista/o.';
  } else if(pctNum>=40){
    nivel='med';icon='📖';msg='Vas por buen camino';cls='ok';
    vrd='Tienes una base. Repasa los temas con más errores. ¡No te rindas!';
  } else {
    nivel='fail';icon='💪';msg='¡Tú puedes mejorar!';cls='fail';
    vrd='Esta es tu señal para revisar el marco normativo. ¡Cada intento cuenta!';
  }

  document.getElementById('result-hero').className=`result-hero ${cls}`;
  document.getElementById('r-icon').textContent  = icon;
  document.getElementById('r-msg').textContent   = msg;
  document.getElementById('r-score').innerHTML   = `${puntos} <span>/ ${total}</span>`;
  document.getElementById('r-pct').textContent   = `${pct}% de precisión`;
  document.getElementById('r-vrd').textContent   = vrd;

  if(nivel==='win')        lanzarConfeti();
  else if(nivel!=='fail')  lanzarEstrellas();
  else                     lanzarAnimo();

  window.scrollTo({top:0,behavior:'smooth'});
}

/* ─────────────────────────────────────────────────────────
   ANIMATIONS
   ───────────────────────────────────────────────────────── */
function lanzarConfeti() {
  const ov = document.getElementById('cel-overlay');
  ov.innerHTML = '';
  const cols=['#f9b233','#003876','#22c55e','#a855f7','#ef4444','#3b82f6','#fbbf24'];
  for(let i=0;i<90;i++){
    const p=document.createElement('div');p.className='conf';
    p.style.left=Math.random()*100+'vw';
    p.style.background=cols[Math.floor(Math.random()*cols.length)];
    p.style.width=(7+Math.random()*8)+'px';p.style.height=(11+Math.random()*10)+'px';
    p.style.animationDuration=(2+Math.random()*3)+'s';
    p.style.animationDelay=(Math.random()*1.5)+'s';
    p.style.borderRadius=Math.random()>.5?'50%':'2px';
    ov.appendChild(p);
  }
  setTimeout(()=>ov.innerHTML='',6000);
}

function lanzarEstrellas() {
  _injectStarKf();
  const ov=document.getElementById('cel-overlay');ov.innerHTML='';
  ['⭐','🌟','✨','💫','🎉'].forEach((e,idx)=>{
    for(let i=0;i<3;i++){
      const s=document.createElement('span');
      s.style.cssText=`position:absolute;font-size:${1.5+Math.random()*2}rem;left:${Math.random()*85+5}%;top:${Math.random()*75+10}%;`;
      s.style.animation=`starPop .6s cubic-bezier(.34,1.56,.64,1) ${(idx*3+i)*.1}s both`;
      s.textContent=e;ov.appendChild(s);
    }
  });
  setTimeout(()=>ov.innerHTML='',4000);
}

function lanzarAnimo() {
  _injectStarKf();
  const ov=document.getElementById('cel-overlay');ov.innerHTML='';
  ['💪','📚','🌱','✏️','🎯','🔥'].forEach((e,idx)=>{
    const s=document.createElement('span');
    s.style.cssText=`position:absolute;font-size:${1.8+Math.random()*1.5}rem;left:${Math.random()*85+5}%;top:${Math.random()*75+10}%;`;
    s.style.animation=`starPop .7s cubic-bezier(.34,1.56,.64,1) ${idx*.12}s both`;
    s.textContent=e;ov.appendChild(s);
  });
  setTimeout(()=>ov.innerHTML='',3500);
}

function _injectStarKf(){
  if(!document.getElementById('_sk')){
    const s=document.createElement('style');s.id='_sk';
    s.textContent='@keyframes starPop{from{transform:scale(0) rotate(-180deg);opacity:0}to{transform:scale(1) rotate(0);opacity:1}}';
    document.head.appendChild(s);
  }
}

/* ─────────────────────────────────────────────────────────
   ADMIN PANEL
   ───────────────────────────────────────────────────────── */
// Save result stats to localStorage for admin
function guardarResultadoAdmin(puntos, total) {
  try {
    const key = 'minerd_results_v2';
    const raw = localStorage.getItem(key);
    const arr = raw ? JSON.parse(raw) : [];
    arr.push({
      usuario: nombreUsuario,
      rol: rolSeleccionado,
      titulo: CONFIG[rolSeleccionado]?.titulo,
      puntos, total,
      pct: ((puntos/total)*100).toFixed(1),
      fecha: new Date().toLocaleString('es-DO'),
      ts: Date.now()
    });
    // Keep max 200 results
    const trimmed = arr.slice(-200);
    localStorage.setItem(key, JSON.stringify(trimmed));
  } catch(e) {}
}

function loadResults() {
  try {
    const raw = localStorage.getItem('minerd_results_v2');
    return raw ? JSON.parse(raw) : [];
  } catch(e){ return []; }
}

function mostrarAdmin() {
  mostrarSolo('admin-screen');
  adminTab('stats');
}

let _adminTabActive = 'stats';
function adminTab(tab) {
  _adminTabActive = tab;
  document.querySelectorAll('.atab').forEach(b=>{
    b.classList.toggle('active', b.textContent.toLowerCase().includes(tab==='stats'?'stad':tab==='sessions'?'ses':'ban'));
  });
  // Fix tab highlighting
  document.querySelectorAll('.atab').forEach((b,i)=>{
    const map=['stats','sessions','banks'];
    b.classList.toggle('active', map[i]===tab);
  });
  renderAdminPanel(tab);
}

function renderAdminPanel(tab) {
  const panel = document.getElementById('admin-panel');
  const results = loadResults();

  if (tab==='stats') {
    const total  = results.length;
    const pctAvg = total>0 ? (results.reduce((a,r)=>a+parseFloat(r.pct),0)/total).toFixed(1) : '0.0';
    const users  = [...new Set(results.map(r=>r.usuario))];
    const byRol  = {};
    results.forEach(r=>{ if(!byRol[r.rol]) byRol[r.rol]=0; byRol[r.rol]++; });
    panel.innerHTML = `
      <h3>📊 Estadísticas generales</h3>
      <div class="stat-row">
        <div class="stat-card"><div class="n">${total}</div><div class="l">Exámenes completados</div></div>
        <div class="stat-card"><div class="n">${users.length}</div><div class="l">Usuarios únicos</div></div>
        <div class="stat-card"><div class="n">${pctAvg}%</div><div class="l">Precisión promedio</div></div>
      </div>
      <h3 style="margin-bottom:12px">Por evaluación</h3>
      <div class="stat-row">
        ${Object.entries(byRol).map(([r,c])=>`<div class="stat-card"><div class="n">${c}</div><div class="l">${CONFIG[r]?.titulo||r}<br><small style="font-size:.65rem;opacity:.7">${r}</small></div></div>`).join('')}
      </div>`;
  }
  else if (tab==='sessions') {
    const sorted = [...results].sort((a,b)=>b.ts-a.ts);
    panel.innerHTML = `
      <h3>👥 Historial de sesiones (${results.length})</h3>
      <input class="search-bar" placeholder="🔍 Buscar por nombre o evaluación..." oninput="filtrarSesiones(this.value)">
      <div id="session-list">
        ${sorted.slice(0,50).map(r=>`
          <div class="user-row">
            <div class="user-av">${USER_INFO[r.usuario]?.avatar||'👤'}</div>
            <div class="user-info">
              <div class="user-name">${r.usuario.charAt(0).toUpperCase()+r.usuario.slice(1)}</div>
              <div class="user-detail">${r.titulo||r.rol} · ${r.fecha}</div>
            </div>
            <div class="user-score" style="color:${parseFloat(r.pct)>=60?'var(--green)':'var(--red)'}">
              ${r.puntos}/${r.total} (${r.pct}%)
            </div>
          </div>`).join('')}
        ${sorted.length===0?'<p style="color:var(--muted);font-size:.85rem;padding:16px">No hay sesiones registradas aún.</p>':''}
      </div>`;
  }
  else if (tab==='banks') {
    // Show all banks with questions and correct answers
    const bankList = [
      { key:'bancoPreguntas',          label:'Psicólogo — Inicial',       rolKey:'psicologo' },
      { key:'bancoFormularios',        label:'Psicólogo — Formularios',   rolKey:'psicologoExterno' },
      { key:'bancoPrimaria',           label:'Primaria — Inicial',        rolKey:'primaria' },
      { key:'bancoFiltrado',           label:'Primaria — Filtrado',       rolKey:'rimariaFiltrada' },
      { key:'bancoTecnicoDistrital',   label:'Técnico Distrital',         rolKey:'tecnicoDistrital' },
      { key:'bancoTecnicoProfesional', label:'Técnico Profesional',       rolKey:'tecnicoProfesional' },
    ];
    panel.innerHTML = `
      <h3>📚 Bancos de preguntas</h3>
      <input class="search-bar" id="bank-search" placeholder="🔍 Buscar pregunta..." oninput="filtrarBanco(this.value)">
      <div id="bank-list">
        ${bankList.map(b=>{
          const banco = BANKS_READY[b.key]||[];
          return `<details style="margin-bottom:10px;background:var(--bg);border-radius:10px;border:1.5px solid var(--border);overflow:hidden">
            <summary style="padding:12px 16px;cursor:pointer;font-weight:800;font-size:.88rem;color:var(--blue)">
              ${b.label} — <span style="color:var(--muted);font-weight:600">${banco.length} preguntas</span>
            </summary>
            <div style="padding:12px 14px 14px">
              ${banco.slice(0,999).map((p,i)=>{
                const letras=['A','B','C','D','E','F'];
                return `<div class="q-admin-item">
                  <div class="q-admin-num">#${p.id||i+1} · ${p.categoria||'General'}</div>
                  <div class="q-admin-txt">${p.pregunta}</div>
                  <div class="q-admin-opts">
                    ${p.opciones.map((o,j)=>`<div class="q-opt-row${j===p.respuestaCorrecta?' correct':''}">${letras[j]}) ${cleanOption(o)}${j===p.respuestaCorrecta?' ✅':''}</div>`).join('')}
                  </div>
                </div>`;
              }).join('')}
            </div>
          </details>`;
        }).join('')}
      </div>`;
  }
}

function filtrarSesiones(q) {
  const results = loadResults().filter(r =>
    r.usuario.includes(q.toLowerCase()) ||
    (r.titulo||'').toLowerCase().includes(q.toLowerCase())
  );
  const list = document.getElementById('session-list');
  if (!list) return;
  list.innerHTML = results.slice(0,50).map(r=>`
    <div class="user-row">
      <div class="user-av">${USER_INFO[r.usuario]?.avatar||'👤'}</div>
      <div class="user-info">
        <div class="user-name">${r.usuario.charAt(0).toUpperCase()+r.usuario.slice(1)}</div>
        <div class="user-detail">${r.titulo||r.rol} · ${r.fecha}</div>
      </div>
      <div class="user-score" style="color:${parseFloat(r.pct)>=60?'var(--green)':'var(--red)'}">
        ${r.puntos}/${r.total} (${r.pct}%)
      </div>
    </div>`).join('') || '<p style="color:var(--muted);font-size:.85rem;padding:12px">Sin resultados.</p>';
}

function filtrarBanco(q) {
  // Simple highlight search - re-render with filter
  // For performance, just scroll to first match using browser find
}

/* ─────────────────────────────────────────────────────────
   HELPERS
   ───────────────────────────────────────────────────────── */
function resetEstado() {
  clearInterval(intervaloTimer); intervaloTimer=null;
  preguntasSeleccionadas=[]; mapaOpcionesAll=[]; indiceActual=0; respuestasUsuario={}; tiempoRestante=0;
}

function repetirExamen() { resetEstado(); abrirStart(rolSeleccionado); }

/* ─────────────────────────────────────────────────────────
   INIT — decrypt banks on page load
   ───────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', async () => {
  // Show loading state briefly
  const btn = document.querySelector('.btn-go');
  if(btn){ btn.textContent = 'Cargando...'; btn.disabled = true; }
  await decryptAllBanks();
  if(btn){ btn.textContent = 'Acceder al Simulador →'; btn.disabled = false; }
});