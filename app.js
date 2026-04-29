/* ═══════════════════════════════════════════════════════
   MINERD — Simulador EDD 2025-2026
   app.js — Con editor de preguntas y admin total
═══════════════════════════════════════════════════════ */

/* ── ACCESO ─────────────────────────────────────────── */
// Edwin tiene acceso a TODOS los roles además del panel admin
const ACCESO = {
  marileidy: ['psicologo','psicologoExterno'],
  fatima:    ['primaria','rimariaFiltrada'],
  katherine: ['tecnicoProfesional'],
  olga:      ['tecnicoDistrital'],
  edwin:     ['__admin__','psicologo','psicologoExterno','primaria','rimariaFiltrada','tecnicoDistrital','tecnicoProfesional']
};

const USER_INFO = {
  marileidy: { av:'🧠', hi:'¡Bienvenida, Marileidy!',  sub:'Psicóloga Escolar — EDD 2025-2026' },
  fatima:    { av:'📚', hi:'¡Bienvenida, Fátima!',     sub:'Maestra de Primaria — EDD 2025-2026' },
  katherine: { av:'🔧', hi:'¡Bienvenida, Katherine!',  sub:'Docente Técnico Profesional — EDD 2025-2026' },
  olga:      { av:'🏛️', hi:'¡Bienvenida, Olga!',       sub:'Técnica Distrital — EDD 2025-2026' },
  edwin:     { av:'🛡️', hi:'¡Bienvenido, Edwin!',      sub:'Administrador del Sistema EDD — Acceso Total' }
};

/* ── CONFIGURACIÓN POR ROL ──────────────────────────── */
// CFG.banco() funde el banco base con las preguntas agregadas por admin
const CFG = {
  psicologo: {
    banco:()=>fusionarBanco('psicologo', bancoPreguntas),
    preguntas:35, tiempo:(52*60)+30, tiempoLbl:'52:30',
    icon:'🧠', titulo:'Evaluación Inicial',
    subtitulo:'Psicología Escolar — Prueba de Juicio Situacional y Marco Legal.',
    aprobacion:25, color:'#7c3aed', colorL:'#ede9fe', chipT:'52:30 min'
  },
  psicologoExterno: {
    banco:()=>fusionarBanco('psicologoExterno', bancoFormularios),
    preguntas:35, tiempo:(52*60)+30, tiempoLbl:'52:30',
    icon:'📝', titulo:'Evaluación de Formularios Externos',
    subtitulo:'Psicología Escolar — Formularios y situaciones de evaluación profesional.',
    aprobacion:25, color:'#0d9488', colorL:'#ccfbf1', chipT:'Complementario'
  },
  primaria: {
    banco:()=>fusionarBanco('primaria', bancoPrimaria),
    preguntas:40, tiempo:60*60, tiempoLbl:'60:00',
    icon:'📚', titulo:'Evaluación Inicial',
    subtitulo:'Nivel Primario — Análisis de Casos Pedagógicos. Ordenanza 04-2023.',
    aprobacion:28, color:'#2563eb', colorL:'#dbeafe', chipT:'60:00 min'
  },
  rimariaFiltrada: {
    banco:()=>fusionarBanco('rimariaFiltrada', bancoFiltrado),
    preguntas:40, tiempo:60*60, tiempoLbl:'60:00',
    icon:'🔍', titulo:'Evaluación Filtrada',
    subtitulo:'Nivel Primario — Inclusión educativa y casos pedagógicos específicos.',
    aprobacion:8, color:'#d97706', colorL:'#fef3c7', chipT:'Filtrado'
  },
  tecnicoDistrital: {
    banco:()=>fusionarBanco('tecnicoDistrital', bancoTecnicoDistrital),
    preguntas:35, tiempo:(52*60)+30, tiempoLbl:'52:30',
    icon:'🏛️', titulo:'Evaluación Inicial',
    subtitulo:'Técnico/a Distrital — Gestión y Asesoría Técnica Distrital.',
    aprobacion:25, color:'#003876', colorL:'#dbeafe', chipT:'52:30 min'
  },
  tecnicoProfesional: {
    banco:()=>fusionarBanco('tecnicoProfesional', bancoTecnicoProfesional),
    preguntas:40, tiempo:60*60, tiempoLbl:'60:00',
    icon:'🔧', titulo:'Evaluación Inicial',
    subtitulo:'Docente Técnico Profesional — Modalidad Técnico Profesional (MTP).',
    aprobacion:14, color:'#059669', colorL:'#d1fae5', chipT:'60:00 min'
  }
};

// Nombres legibles de los bancos para el editor
const BANCO_LABELS = {
  psicologo:          '🧠 Psicólogo/a — Evaluación Inicial',
  psicologoExterno:   '📝 Psicólogo/a — Formularios Externos',
  primaria:           '📚 Primaria — Evaluación Inicial',
  rimariaFiltrada:    '🔍 Primaria — Evaluación Filtrada',
  tecnicoDistrital:   '🏛️ Técnico/a Distrital',
  tecnicoProfesional: '🔧 Técnico Profesional'
};

/* ── STORAGE ─────────────────────────────────────────── */
const POOL_TTL    = 21*24*3600*1000;
const SESSION_TTL = 24*3600*1000;
const K_POOL      = 'minerd_pool_v3';
const K_SES       = 'minerd_session_v3';
const K_RES       = 'minerd_results_v3';
const K_EXTRA     = 'minerd_extra_v1';  // preguntas agregadas por admin

function sSave(key,val,ttl){
  try{ localStorage.setItem(key, JSON.stringify({v:val, exp:Date.now()+(ttl||999*24*3600*1000)})); }catch(e){}
}
function sLoad(key){
  try{
    const r=localStorage.getItem(key);
    if(!r) return null;
    const o=JSON.parse(r);
    if(o.exp && Date.now()>o.exp){ localStorage.removeItem(key); return null; }
    return o.v;
  }catch(e){ return null; }
}
function sDel(key){ try{ localStorage.removeItem(key); }catch(e){} }

/* ── BANCO EXTRA (preguntas agregadas por admin) ─────── */
// Estructura: { psicologo: [{...pregunta}], primaria: [{...}], ... }
function getExtra(){ return sLoad(K_EXTRA) || {}; }
function saveExtra(data){ sSave(K_EXTRA, data, 0); } // sin expiración

function fusionarBanco(rol, base){
  const extra = getExtra();
  const adicionales = (extra[rol] || []).map((p,i) => ({
    ...p,
    id: `extra_${rol}_${i}`,
    _esExtra: true
  }));
  return [...(base||[]), ...adicionales];
}

/* ── ESTADO GLOBAL ──────────────────────────────────── */
let usuario='', rolesOK=[], rolActual=null, esAdmin=false;
let preguntas=[], mapas=[], idx=0, respuestas={}, tiempoR=0, timer=null;
let pool = sLoad(K_POOL) || {};

/* ── PANTALLAS ──────────────────────────────────────── */
const SCREENS=['access-screen','profile-screen','start-screen','quiz-screen','result-screen','admin-screen'];
function show(id){ SCREENS.forEach(s=>{ const e=document.getElementById(s); if(e) e.classList.add('hidden'); }); document.getElementById(id).classList.remove('hidden'); }

function norm(s){ return s.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z]/g,''); }
function clean(txt){ return (txt||'').replace(/^[A-Fa-f]\)\s*/,'').trim(); }

/* ── MODAL ───────────────────────────────────────────── */
function modal({ ico='❓', icoClass='shake', title, msg, btns=[] }){
  const bg=document.getElementById('modal-bg');
  bg.innerHTML=`
    <div class="modal">
      <span class="modal-ico ${icoClass}">${ico}</span>
      <h3>${title}</h3>
      <p>${msg}</p>
      <div class="modal-btns">
        ${btns.map((b,i)=>`<button class="mb ${b.cls||'sec'}" onclick="modalAct(${i})">${b.label}</button>`).join('')}
      </div>
    </div>`;
  bg.classList.remove('hidden');
  bg._cbs=btns.map(b=>b.action||null);
}
function modalAct(i){ const bg=document.getElementById('modal-bg'); bg.classList.add('hidden'); if(bg._cbs&&bg._cbs[i]) bg._cbs[i](); }
function closeModal(){ document.getElementById('modal-bg').classList.add('hidden'); }

/* ── ACCESS ──────────────────────────────────────────── */
function verificarAcceso(){
  const inp=document.getElementById('ac-inp');
  const err=document.getElementById('ac-err');
  const key=norm(inp.value);
  err.textContent=''; inp.classList.remove('err');

  if(!key){ errInput(inp,err,'Por favor escribe tu nombre.'); return; }

  const roles=ACCESO[key];
  if(!roles){
    modal({
      ico:'🚫', icoClass:'alert',
      title:'Acceso denegado',
      msg:`El nombre <strong>"${inp.value.trim()}"</strong> no está registrado. Verifica que escribiste correctamente.`,
      btns:[{ label:'Intentar de nuevo', cls:'pri', action(){ inp.value=''; inp.focus(); } }]
    });
    errInput(inp,err,'Nombre no encontrado.');
    return;
  }

  usuario=key;
  esAdmin=(key==='edwin');
  // Para Edwin: rolesOK son todos excepto __admin__ (para la pantalla de evaluaciones)
  rolesOK=roles.filter(r=>r!=='__admin__');

  const savedPool=sLoad(K_POOL);
  if(savedPool) pool=savedPool;

  const ses=sLoad(K_SES);
  if(ses && ses.usuario===key && ses.rolActual && CFG[ses.rolActual]){
    const cfg=CFG[ses.rolActual];
    const resp=Object.keys(ses.respuestas||{}).length;
    modal({
      ico:'🔔', icoClass:'shake',
      title:'¿Continuar donde lo dejaste?',
      msg:`Tienes la <strong>${cfg.titulo}</strong> en progreso.<br>
           Pregunta <strong>${(ses.idx||0)+1}</strong> — ${resp} respuestas guardadas.<br>
           Sesión válida por 24 horas.`,
      btns:[
        { label:'▶ Continuar', cls:'pri', action:()=>restaurarSesion(ses) },
        { label:'🏠 Ir al inicio', cls:'sec', action(){ sDel(K_SES); mostrarPerfil(); } }
      ]
    });
  } else {
    mostrarPerfil();
  }
}
function errInput(inp,err,msg){ err.textContent=msg; inp.classList.add('err'); setTimeout(()=>inp.classList.remove('err'),600); }
document.getElementById('ac-inp').addEventListener('keydown',e=>{ if(e.key==='Enter') verificarAcceso(); });

/* ── PROFILE ─────────────────────────────────────────── */
function mostrarPerfil(){
  const info=USER_INFO[usuario]||{ av:'🎓', hi:'¡Bienvenido/a!', sub:'EDD 2025-2026' };
  document.getElementById('w-av').textContent   = info.av;
  document.getElementById('w-name').textContent = info.hi;
  document.getElementById('w-sub').textContent  = info.sub;

  const grid=document.getElementById('eval-grid');
  grid.innerHTML='';

  // Botón de panel admin para Edwin (siempre arriba)
  if(esAdmin){
    const adminBtn=document.createElement('div');
    adminBtn.className='eval-card';
    adminBtn.style.setProperty('--c','#6d28d9');
    adminBtn.style.setProperty('--c-l','#ede9fe');
    adminBtn.innerHTML=`
      <div class="ec-ico" style="background:#ede9fe;font-size:2rem">🛡️</div>
      <div class="ec-name" style="color:#6d28d9">Panel Administrador</div>
      <div class="ec-desc">Estadísticas, sesiones, editar bancos de preguntas y agregar nuevas preguntas.</div>
      <div class="ec-chips"><span class="chip" style="background:#ede9fe;color:#6d28d9">Acceso total</span></div>`;
    adminBtn.onclick=()=>showAdmin();
    grid.appendChild(adminBtn);
  }

  rolesOK.forEach((rol,i)=>{
    const cfg=CFG[rol]; if(!cfg) return;
    if(!pool[rol]) pool[rol]={ ids:[], ts:Date.now() };
    const banco=cfg.banco?cfg.banco():[];
    const total=banco?banco.length:0;
    const usados=pool[rol].ids?.length||0;
    const disp=Math.max(0,total-usados);
    const extra=getExtra()[rol]?.length||0;

    const card=document.createElement('div');
    card.className='eval-card';
    card.style.setProperty('--c',cfg.color);
    card.style.setProperty('--c-l',cfg.colorL);
    card.style.animationDelay=`${i*.09}s`;
    card.innerHTML=`
      <div class="ec-ico" style="background:${cfg.colorL}">${cfg.icon}</div>
      <div class="ec-name">${cfg.titulo}</div>
      <div class="ec-desc">${cfg.subtitulo}</div>
      <div class="ec-chips">
        <span class="chip">${cfg.preguntas} preguntas</span>
        <span class="chip g">${cfg.chipT}</span>
        ${extra>0?`<span class="chip" style="background:#dcfce7;color:#15803d">+${extra} nuevas</span>`:''}
      </div>
      <div class="ec-pool">
        <span class="pdot"></span>
        ${disp>0?`${disp} disponibles sin repetir`:'Ciclo completo — reiniciando'} · banco: ${total}
      </div>`;
    card.onclick=()=>abrirStart(rol);
    grid.appendChild(card);
  });

  ocultarHdrQuiz();
  show('profile-screen');
}

function volverPerfil(){ resetEstado(); rolActual=null; ocultarHdrQuiz(); mostrarPerfil(); }

/* ── START ───────────────────────────────────────────── */
function abrirStart(rol){
  rolActual=rol;
  const cfg=CFG[rol];
  tiempoR=cfg.tiempo;
  document.getElementById('st-ico').textContent    = cfg.icon;
  document.getElementById('st-title').textContent  = cfg.titulo;
  document.getElementById('st-sub').textContent    = cfg.subtitulo;
  document.getElementById('st-pregs').textContent  = cfg.preguntas+' preguntas';
  document.getElementById('st-tiempo').textContent = cfg.tiempoLbl+' min';

  if(!pool[rol]) pool[rol]={ ids:[], ts:Date.now() };
  const banco=cfg.banco()||[];
  const total=banco.length, usados=pool[rol].ids?.length||0, disp=Math.max(0,total-usados);
  const extra=getExtra()[rol]?.length||0;
  document.getElementById('pool-info').innerHTML=
    `📦 Banco total: <strong>${total}</strong>${extra?` (incluye <strong>${extra}</strong> preguntas nuevas)`:''} &nbsp;·&nbsp;
     ✅ Ya practicadas: <strong>${usados}</strong> &nbsp;·&nbsp;
     🔄 Sin repetir: <strong>${disp}</strong>
     ${disp===0?'<br>⚡ El banco se reinicia automáticamente.':''}`;
  show('start-screen');
}

/* ── POOL ────────────────────────────────────────────── */
function sacarPool(rol,n){
  const banco=CFG[rol].banco();
  if(!banco||!banco.length) return [];
  if(!pool[rol]||typeof pool[rol]!=='object') pool[rol]={ ids:[], ts:Date.now() };
  const ahora=Date.now();
  if((ahora-(pool[rol].ts||0))>POOL_TTL || pool[rol].ids.length>=banco.length){
    pool[rol]={ ids:[], ts:ahora };
  }
  const disp=banco.filter(p=>!pool[rol].ids.includes(p.id??banco.indexOf(p)));
  const sel=[...disp].sort(()=>Math.random()-.5).slice(0,Math.min(n,disp.length));
  sel.forEach(p=>{ const id=p.id??banco.indexOf(p); if(!pool[rol].ids.includes(id)) pool[rol].ids.push(id); });
  sSave(K_POOL,pool,POOL_TTL);
  return sel;
}

/* ── MEZCLAR OPCIONES ───────────────────────────────── */
function mezclar(p){
  const n=p.opciones.length, ix=Array.from({length:n},(_,i)=>i);
  for(let i=n-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [ix[i],ix[j]]=[ix[j],ix[i]]; }
  return { opciones:ix.map(i=>p.opciones[i]), mapa:ix };
}

/* ── SESIÓN ──────────────────────────────────────────── */
function guardarSesion(){
  if(!preguntas.length||!rolActual) return;
  const banco=CFG[rolActual]?.banco()||[];
  sSave(K_SES,{
    usuario, rolActual, tiempoR, idx, respuestas, mapas,
    preguntas:preguntas.length,
    pregIdxs:preguntas.map(p=>{ const i=banco.findIndex(b=>(b.id??banco.indexOf(b))===(p.id??banco.indexOf(p))); return i; }),
  },SESSION_TTL);
}
function restaurarSesion(ses){
  rolActual=ses.rolActual;
  const cfg=CFG[rolActual];
  if(!cfg){ mostrarPerfil(); return; }
  const banco=cfg.banco()||[];
  preguntas=(ses.pregIdxs||[]).map(i=>banco[i]).filter(Boolean);
  if(!preguntas.length){ mostrarPerfil(); return; }
  mapas=ses.mapas||preguntas.map(p=>mezclar(p));
  idx=ses.idx||0; respuestas=ses.respuestas||{}; tiempoR=ses.tiempoR||cfg.tiempo;
  show('quiz-screen'); mostrarHdrQuiz(); startTimer(); renderPregunta(); updHdrProg();
}

/* ── INICIAR EXAMEN ─────────────────────────────────── */
function iniciarExamen(){
  const cfg=CFG[rolActual];
  const sel=sacarPool(rolActual,cfg.preguntas);
  if(!sel||!sel.length){
    modal({ ico:'⚠️', icoClass:'', title:'Error de banco', msg:'No se encontraron preguntas disponibles.',
      btns:[{label:'OK',cls:'pri',action:null}] });
    return;
  }
  preguntas=sel; mapas=preguntas.map(p=>mezclar(p));
  idx=0; respuestas={}; tiempoR=cfg.tiempo;
  sDel(K_SES);
  show('quiz-screen'); mostrarHdrQuiz(); startTimer(); renderPregunta(); updHdrProg();
}

/* ── RENDER PREGUNTA ─────────────────────────────────── */
function renderPregunta(){
  const p=preguntas[idx], total=preguntas.length;
  const { opciones }=mapas[idx];
  const letras=['A','B','C','D','E','F'];
  const esUltima=idx===total-1;

  document.getElementById('q-num').textContent     = `Pregunta ${idx+1} de ${total}`;
  document.getElementById('q-cat').textContent     = p.categoria||'General';
  document.getElementById('q-txt').textContent     = p.pregunta;
  document.getElementById('mob-cnt').textContent   = `${idx+1}/${total}`;
  document.getElementById('q-prog-fill').style.width=`${((idx+1)/total)*100}%`;

  ['btn-prev','btn-prev-m'].forEach(id=>{ const b=document.getElementById(id); if(b) b.style.visibility=idx===0?'hidden':'visible'; });
  const nl=esUltima?'Finalizar ✓':'Siguiente →', nlm=esUltima?'Fin ✓':'Sig. →';
  document.getElementById('btn-next').textContent=nl;
  const bm=document.getElementById('btn-next-m'); if(bm) bm.textContent=nlm;
  setNext(respuestas[idx]!==undefined);

  const cont=document.getElementById('opts'); cont.innerHTML='';
  const sel=respuestas[idx];
  opciones.forEach((opc,j)=>{
    const btn=document.createElement('button');
    btn.className=`opt${sel===j?' sel':''}`;
    btn.innerHTML=`<span class="opt-ltr">${letras[j]||j}</span><span>${clean(opc)}</span>`;
    btn.onclick=()=>elegir(j,btn);
    cont.appendChild(btn);
  });
  updNav(); updHdrProg(); guardarSesion();
}
function elegir(j,btnRef){
  respuestas[idx]=j;
  document.querySelectorAll('.opt').forEach(b=>b.classList.remove('sel'));
  btnRef.classList.add('sel');
  updNav(); setNext(true); updHdrProg(); guardarSesion();
}

/* ── NAVEGACIÓN ──────────────────────────────────────── */
function updNav(){
  const total=preguntas.length, resp=Object.keys(respuestas).length;
  const nav=document.getElementById('qs-nav'); nav.innerHTML='';
  const mob=document.getElementById('mob-qrow'); mob.innerHTML='';
  preguntas.forEach((_,i)=>{
    const isCur=i===idx, isAns=respuestas[i]!==undefined;
    const cls=isCur?'cur':(isAns?'ans':'');
    const d=document.createElement('button');
    d.className=`nb${cls?' '+cls:''}`; d.textContent=i+1;
    d.onclick=()=>{ idx=i; renderPregunta(); };
    nav.appendChild(d);
    const m=document.createElement('button');
    m.className=`mob-nb${cls?' '+cls:''}`; m.textContent=i+1;
    m.onclick=()=>{ idx=i; renderPregunta(); scrollMob(i); };
    mob.appendChild(m);
  });
  document.getElementById('sb-prg').textContent=`${resp}/${total}`;
  scrollMob(idx);
}
function scrollMob(i){
  const row=document.getElementById('mob-qrow'), scroller=row?.parentElement;
  if(!scroller) return;
  const btn=row.children[i];
  if(btn) scroller.scrollTo({left:btn.offsetLeft-(scroller.offsetWidth/2)+(btn.offsetWidth/2),behavior:'smooth'});
}
function setNext(on){
  const esUltima=idx===preguntas.length-1;
  ['btn-next','btn-next-m'].forEach(id=>{ const b=document.getElementById(id); if(!b)return; b.disabled=!on; b.classList.toggle('btn-fin',on&&esUltima); });
}
function irSiguiente(){ if(idx<preguntas.length-1){ idx++; renderPregunta(); window.scrollTo({top:0,behavior:'smooth'}); } else finalizarExamen(); }
function irAnterior(){ if(idx>0){ idx--; renderPregunta(); window.scrollTo({top:0,behavior:'smooth'}); } }

/* ── HEADER QUIZ ─────────────────────────────────────── */
function mostrarHdrQuiz(){ document.getElementById('hdr-timer').classList.remove('hidden'); document.getElementById('hdr-prog-wrap').classList.remove('hidden'); }
function ocultarHdrQuiz(){ document.getElementById('hdr-timer').classList.add('hidden'); document.getElementById('hdr-prog-wrap').classList.add('hidden'); }
function updHdrProg(){ const total=preguntas.length, resp=Object.keys(respuestas).length, pct=total>0?Math.round((resp/total)*100):0; document.getElementById('hdr-prog-lbl').textContent=`${resp}/${total}`; document.getElementById('hdr-prog-fill').style.width=pct+'%'; }

/* ── TIMER ───────────────────────────────────────────── */
function startTimer(){ if(timer)clearInterval(timer); updTimer(); timer=setInterval(()=>{ if(tiempoR>0){ tiempoR--; updTimer(); guardarSesion(); } else{ clearInterval(timer); finalizarExamen(); } },1000); }
function updTimer(){ const el=document.getElementById('hdr-timer-txt'); if(!el)return; const m=Math.floor(tiempoR/60), s=tiempoR%60; el.textContent=`${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`; el.className=tiempoR<=60?'crit':tiempoR<=300?'warn':''; }

window.addEventListener('beforeunload',e=>{ if(preguntas.length&&rolActual&&Object.keys(respuestas).length>0){ guardarSesion(); e.preventDefault(); e.returnValue=''; } });
document.addEventListener('visibilitychange',()=>{ if(document.visibilityState==='hidden'&&preguntas.length) guardarSesion(); });

/* ── FINALIZAR ───────────────────────────────────────── */
function finalizarExamen(){
  clearInterval(timer); sDel(K_SES); ocultarHdrQuiz(); show('result-screen');
  let puntos=0;
  const rev=document.getElementById('review'); rev.innerHTML='';
  preguntas.forEach((p,i)=>{
    const visU=respuestas[i];
    const { opciones, mapa }=mapas[i];
    const origU=visU!==undefined?mapa[visU]:undefined;
    const ok=origU===p.respuestaCorrecta;
    if(ok) puntos++;
    const posCorr=mapa.indexOf(p.respuestaCorrecta);
    const txtU=visU!==undefined?clean(opciones[visU]):'<em>No respondida</em>';
    const txtC=clean(opciones[posCorr]);
    const card=document.createElement('div');
    card.className=`rev-card ${ok?'ok':'fail'}`;
    card.innerHTML=`
      <div class="rev-hdr">
        <span class="rev-num">Pregunta ${i+1} · ${p.categoria||'General'}</span>
        <span style="font-size:1.1rem">${ok?'✅':'❌'}</span>
      </div>
      <p class="rev-q">${p.pregunta}</p>
      <div class="rev-grid">
        <div class="rev-box ${ok?'uok':'ufail'}"><strong>Tu respuesta</strong>${txtU}</div>
        ${!ok?`<div class="rev-box corr"><strong>Respuesta correcta</strong>${txtC}</div>`:''}
      </div>
      <div class="rev-exp"><strong>📌 Justificación:</strong> ${p.explicacion||'No disponible.'}</div>`;
    rev.appendChild(card);
  });
  guardarResultadoAdmin(puntos,preguntas.length);
  const total=preguntas.length, pct=((puntos/total)*100).toFixed(1), n=parseFloat(pct);
  let cls,ico,headline,msg;
  if(n>=80){      cls='rh-win';ico='🏆';headline='¡Sobresaliente!';msg='Rendimiento excepcional. Dominas el contenido y estás lista/o para la evaluación real. ¡Continúa así!'; }
  else if(n>=65){ cls='rh-win';ico='🎯';headline='¡Excelente trabajo!';msg='Muy buen desempeño. Refuerza las áreas con errores y estarás lista/o.'; }
  else if(n>=50){ cls='rh-ok';ico='📖';headline='Vas por buen camino';msg='Tienes una base sólida. Repasa los temas con más errores y vuelve a intentarlo.'; }
  else if(n>=35){ cls='rh-ok';ico='💡';headline='Sigue practicando';msg='Hay áreas importantes que reforzar. Revisa el marco normativo e inténtalo de nuevo.'; }
  else{           cls='rh-fail';ico='💪';headline='¡Tú puedes superarlo!';msg='Estudia el marco legal y los casos pedagógicos. ¡Cada intento es un aprendizaje!'; }
  document.getElementById('result-hero').className=`result-hero ${cls}`;
  document.getElementById('r-ico').textContent=ico;
  document.getElementById('r-headline').textContent=headline;
  document.getElementById('r-score').innerHTML=`${puntos} <span>/ ${total}</span>`;
  document.getElementById('r-pct').textContent=`${pct}% de precisión`;
  document.getElementById('r-msg').textContent=msg;
  document.getElementById('result-stats').innerHTML=`
    <div class="rs-box"><span class="rs-n" style="color:var(--green)">${puntos}</span><span class="rs-l">Correctas</span></div>
    <div class="rs-box"><span class="rs-n" style="color:var(--red)">${total-puntos}</span><span class="rs-l">Incorrectas</span></div>
    <div class="rs-box"><span class="rs-n" style="color:var(--blue)">${pct}%</span><span class="rs-l">Precisión</span></div>`;
  if(n>=65) lanzarConfeti();
  else if(n>=40) lanzarEstrellas();
  else lanzarAnimo();
  window.scrollTo({top:0,behavior:'smooth'});
}

/* ── ANIMACIONES ─────────────────────────────────────── */
function lanzarConfeti(){
  const canvas=document.getElementById('cel'), ctx=canvas.getContext('2d');
  canvas.width=window.innerWidth; canvas.height=window.innerHeight;
  const cols=['#f9b233','#003876','#22c55e','#a855f7','#ef4444','#3b82f6','#fbbf24','#ec4899'];
  const pieces=Array.from({length:120},()=>({ x:Math.random()*canvas.width, y:-20, w:6+Math.random()*8, h:10+Math.random()*10, color:cols[Math.floor(Math.random()*cols.length)], rot:Math.random()*360, rotS:(Math.random()-.5)*8, vx:(Math.random()-.5)*3, vy:2+Math.random()*4, alpha:1, circle:Math.random()>.5 }));
  let f=0;
  (function draw(){ ctx.clearRect(0,0,canvas.width,canvas.height); pieces.forEach(p=>{ ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.rot*Math.PI/180);ctx.globalAlpha=p.alpha;ctx.fillStyle=p.color; if(p.circle){ctx.beginPath();ctx.arc(0,0,p.w/2,0,Math.PI*2);ctx.fill();}else{ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h);} ctx.restore(); p.x+=p.vx;p.y+=p.vy;p.rot+=p.rotS;p.vy+=.04;if(f>120)p.alpha-=.01; }); f++; if(f<220)requestAnimationFrame(draw); else ctx.clearRect(0,0,canvas.width,canvas.height); })();
}
function lanzarEstrellas(){ _emojiRain(['⭐','🌟','✨','💫','🎉','🎊'],16); }
function lanzarAnimo(){ _emojiRain(['💪','📚','🌱','✏️','🎯','🔥','🧠'],12); }
function _emojiRain(emojis,count){
  const ov=document.getElementById('cel'), ctx=ov.getContext('2d');
  ov.width=window.innerWidth; ov.height=window.innerHeight;
  const items=Array.from({length:count},()=>({ x:Math.random()*ov.width*.9+ov.width*.05, y:Math.random()*ov.height*.8+ov.height*.05, emoji:emojis[Math.floor(Math.random()*emojis.length)], size:30+Math.random()*30, alpha:0, scale:0 }));
  let f=0;
  (function draw(){ ctx.clearRect(0,0,ov.width,ov.height); items.forEach((it,i)=>{ const delay=i*4; if(f>delay){ if(it.scale<1)it.scale=Math.min(1,it.scale+.08); it.alpha=f>delay+30?Math.max(0,1-((f-delay-30)/80)):it.scale; } if(it.alpha>0){ ctx.save();ctx.globalAlpha=it.alpha;ctx.translate(it.x,it.y);ctx.scale(it.scale,it.scale);ctx.font=`${it.size}px serif`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(it.emoji,0,0);ctx.restore(); } }); f++; if(f<200)requestAnimationFrame(draw); else ctx.clearRect(0,0,ov.width,ov.height); })();
}

/* ══════════════════════════════════════════════════════
   ADMIN PANEL COMPLETO
══════════════════════════════════════════════════════ */
function guardarResultadoAdmin(puntos,total){
  try{
    const raw=localStorage.getItem(K_RES), arr=raw?JSON.parse(raw):[];
    arr.push({ usuario, rol:rolActual, titulo:CFG[rolActual]?.titulo, puntos, total, pct:((puntos/total)*100).toFixed(1), fecha:new Date().toLocaleString('es-DO'), ts:Date.now() });
    localStorage.setItem(K_RES,JSON.stringify(arr.slice(-300)));
  }catch(e){}
}
function loadResults(){ try{ const r=localStorage.getItem(K_RES); return r?JSON.parse(r):[]; }catch(e){return[];} }

function showAdmin(){
  ocultarHdrQuiz();
  show('admin-screen');
  adminTab('stats', null);
}

let _tabActual='stats';
function adminTab(tab, btn){
  _tabActual=tab;
  document.querySelectorAll('.atab').forEach(b=>b.classList.remove('on'));
  if(btn) btn.classList.add('on');
  else { const tabs=['stats','sessions','banks','editor']; const tabBtns=document.querySelectorAll('.atab'); tabBtns.forEach((b,i)=>{ if(tabs[i]===tab) b.classList.add('on'); }); }
  const panel=document.getElementById('apanel');
  const results=loadResults();

  if(tab==='stats'){
    const tot=results.length, avg=tot>0?(results.reduce((a,r)=>a+parseFloat(r.pct),0)/tot).toFixed(1):'0.0';
    const users=[...new Set(results.map(r=>r.usuario))];
    const byRol={};
    results.forEach(r=>{ if(!byRol[r.rol])byRol[r.rol]=0; byRol[r.rol]++; });
    const extra=getExtra();
    const totalExtra=Object.values(extra).reduce((a,v)=>a+(v.length||0),0);
    panel.innerHTML=`
      <h3>📊 Estadísticas del sistema</h3>
      <div class="a-stat-row">
        <div class="a-stat"><div class="n">${tot}</div><div class="l">Exámenes completados</div></div>
        <div class="a-stat"><div class="n">${users.length}</div><div class="l">Usuarios únicos</div></div>
        <div class="a-stat"><div class="n">${avg}%</div><div class="l">Precisión promedio</div></div>
        <div class="a-stat"><div class="n" style="color:var(--green)">${totalExtra}</div><div class="l">Preguntas agregadas</div></div>
      </div>
      <h3 style="margin-bottom:12px">Exámenes por evaluación</h3>
      <div class="a-stat-row">
        ${Object.entries(byRol).map(([r,c])=>`<div class="a-stat"><div class="n">${c}</div><div class="l" style="font-size:.62rem">${CFG[r]?.titulo||r}</div></div>`).join('')}
        ${Object.keys(byRol).length===0?'<p style="color:var(--muted);font-size:.85rem">Sin datos aún.</p>':''}
      </div>`;
  }
  else if(tab==='sessions'){
    const sorted=[...results].sort((a,b)=>b.ts-a.ts);
    panel.innerHTML=`
      <h3>👥 Historial de sesiones (${results.length})</h3>
      <input class="srch" placeholder="🔍 Buscar por nombre o evaluación..." oninput="filtrarSes(this.value)">
      <div id="ses-list">
        ${sorted.slice(0,80).map(r=>`
          <div class="urow">
            <div class="urow-av">${USER_INFO[r.usuario]?.av||'👤'}</div>
            <div class="urow-info">
              <div class="urow-name">${r.usuario.charAt(0).toUpperCase()+r.usuario.slice(1)}</div>
              <div class="urow-det">${r.titulo||r.rol} · ${r.fecha}</div>
            </div>
            <div class="urow-sc" style="color:${parseFloat(r.pct)>=60?'var(--green)':'var(--red)'}">
              ${r.puntos}/${r.total} · ${r.pct}%
            </div>
          </div>`).join('')}
        ${sorted.length===0?'<p style="color:var(--muted);font-size:.85rem;padding:14px">No hay sesiones registradas aún.</p>':''}
      </div>`;
  }
  else if(tab==='banks'){
    const bankList=Object.entries(BANCO_LABELS);
    const letras=['A','B','C','D','E','F'];
    panel.innerHTML=`
      <h3>📚 Bancos de preguntas</h3>
      <input class="srch" id="bank-srch" placeholder="🔍 Buscar pregunta..." oninput="filtrarBanco(this.value)">
      <div id="bank-list">
        ${bankList.map(([rolKey,label])=>{
          const banco=CFG[rolKey]?.banco()||[];
          const extra=getExtra()[rolKey]?.length||0;
          return `<details style="margin-bottom:10px;background:var(--bg);border-radius:11px;border:1.5px solid var(--border);overflow:hidden">
            <summary style="padding:13px 16px;cursor:pointer;font-weight:800;font-size:.87rem;color:var(--blue);list-style:none;display:flex;justify-content:space-between;align-items:center">
              <span>${label}</span>
              <span style="font-weight:600;color:var(--muted);font-size:.76rem">${banco.length} preguntas${extra?` (+${extra} nuevas)`:''}</span>
            </summary>
            <div style="padding:10px 13px 14px" id="bank-${rolKey}">
              ${banco.map((p,i)=>`
                <div class="q-adm" data-texto="${(p.pregunta||'').toLowerCase()}">
                  <div class="q-adm-num">
                    #${p.id||i+1} · ${p.categoria||'General'}
                    ${p._esExtra?'<span style="background:#dcfce7;color:#15803d;font-size:.6rem;padding:2px 7px;border-radius:99px;margin-left:6px;font-weight:800">NUEVA</span>':''}
                  </div>
                  <div class="q-adm-txt">${p.pregunta}</div>
                  <div class="q-adm-opts">
                    ${p.opciones.map((o,j)=>`<div class="q-opt${j===p.respuestaCorrecta?' corr':''}">${letras[j]}) ${clean(o)}${j===p.respuestaCorrecta?' ✅':''}</div>`).join('')}
                  </div>
                  ${p._esExtra?`<button onclick="eliminarPreguntaExtra('${rolKey}',${i-(banco.length-(getExtra()[rolKey]?.length||0))})" style="margin-top:8px;padding:4px 12px;border:1.5px solid var(--red);background:var(--red-l);color:var(--red);border-radius:7px;font-size:.75rem;font-weight:800;cursor:pointer">🗑 Eliminar</button>`:''}
                </div>`).join('')}
            </div>
          </details>`;
        }).join('')}
      </div>`;
  }
  else if(tab==='editor'){
    renderEditor();
  }
}

function filtrarSes(q){
  const results=loadResults().filter(r=>r.usuario.includes(q.toLowerCase())||(r.titulo||'').toLowerCase().includes(q.toLowerCase()));
  const list=document.getElementById('ses-list'); if(!list) return;
  list.innerHTML=results.slice(0,80).map(r=>`
    <div class="urow">
      <div class="urow-av">${USER_INFO[r.usuario]?.av||'👤'}</div>
      <div class="urow-info">
        <div class="urow-name">${r.usuario.charAt(0).toUpperCase()+r.usuario.slice(1)}</div>
        <div class="urow-det">${r.titulo||r.rol} · ${r.fecha}</div>
      </div>
      <div class="urow-sc" style="color:${parseFloat(r.pct)>=60?'var(--green)':'var(--red)'}">
        ${r.puntos}/${r.total} · ${r.pct}%
      </div>
    </div>`).join('')||'<p style="color:var(--muted);font-size:.85rem;padding:12px">Sin resultados.</p>';
}

function filtrarBanco(q){
  document.querySelectorAll('.q-adm').forEach(el=>{
    const txt=el.getAttribute('data-texto')||'';
    el.style.display=(!q||txt.includes(q.toLowerCase()))?'':'none';
  });
}

/* ── EDITOR DE PREGUNTAS ─────────────────────────────── */
function renderEditor(){
  const panel=document.getElementById('apanel');
  const extra=getExtra();
  panel.innerHTML=`
    <h3>✏️ Editor de Preguntas</h3>
    <p style="font-size:.83rem;color:var(--muted);margin-bottom:18px;line-height:1.6">
      Agrega nuevas preguntas a cualquier banco sin tocar el código. Las preguntas se guardan en este navegador y se fusionan con el banco original automáticamente.
    </p>

    <!-- FORMULARIO NUEVA PREGUNTA -->
    <div id="editor-form" style="background:var(--bg);border-radius:14px;border:2px solid var(--border);padding:22px;margin-bottom:24px">
      <div style="font-size:.85rem;font-weight:900;color:var(--blue);margin-bottom:16px;display:flex;align-items:center;gap:8px">
        ➕ Nueva pregunta
      </div>

      <div class="ef-row">
        <label class="ef-label">Banco de preguntas *</label>
        <select id="ef-banco" class="ef-input" onchange="updEditorOpts()">
          ${Object.entries(BANCO_LABELS).map(([k,v])=>`<option value="${k}">${v}</option>`).join('')}
        </select>
      </div>

      <div class="ef-row">
        <label class="ef-label">Categoría</label>
        <input type="text" id="ef-cat" class="ef-input" placeholder="Ej: Convivencia, Inclusión, Planificación...">
      </div>

      <div class="ef-row">
        <label class="ef-label">Pregunta *</label>
        <textarea id="ef-pregunta" class="ef-input" rows="4" placeholder="Escribe la pregunta aquí..."></textarea>
      </div>

      <div class="ef-row">
        <label class="ef-label">Opciones de respuesta *</label>
        <div id="ef-opts">
          ${['A','B','C','D'].map((l,i)=>`
            <div class="ef-opt-row" id="ef-opt-wrap-${i}">
              <span class="ef-opt-ltr" id="ef-ltr-${i}">${l}</span>
              <input type="text" id="ef-opt-${i}" class="ef-opt-input" placeholder="Opción ${l}...">
              <button onclick="marcarCorrecta(${i})" class="ef-mark-btn" id="ef-mark-${i}" title="Marcar como correcta">✓</button>
              ${i>=2?`<button onclick="quitarOpcion(${i})" class="ef-del-btn" title="Eliminar opción">✕</button>`:''}
            </div>`).join('')}
        </div>
        <div style="display:flex;gap:8px;margin-top:10px;flex-wrap:wrap">
          <button onclick="agregarOpcion()" class="ef-add-btn">+ Agregar opción</button>
        </div>
        <div style="margin-top:8px;font-size:.76rem;color:var(--muted)" id="ef-corr-info">ℹ️ Haz clic en ✓ para marcar la respuesta correcta</div>
      </div>

      <div class="ef-row">
        <label class="ef-label">Justificación / Explicación técnica *</label>
        <textarea id="ef-exp" class="ef-input" rows="3" placeholder="Base legal, fundamento técnico, ordenanza aplicable..."></textarea>
      </div>

      <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:6px">
        <button onclick="guardarPregunta()" class="ef-save-btn">💾 Guardar pregunta</button>
        <button onclick="limpiarFormulario()" class="ef-clear-btn">🗑 Limpiar formulario</button>
      </div>

      <div id="ef-feedback" style="margin-top:12px;font-size:.83rem;font-weight:800;min-height:20px"></div>
    </div>

    <!-- PREGUNTAS GUARDADAS POR BANCO -->
    <div style="font-size:.85rem;font-weight:900;color:var(--blue);margin-bottom:14px">
      📋 Preguntas agregadas (${Object.values(extra).reduce((a,v)=>a+(v.length||0),0)} total)
    </div>
    <div id="editor-list">
      ${Object.entries(BANCO_LABELS).map(([rolKey,label])=>{
        const items=extra[rolKey]||[];
        if(!items.length) return '';
        const letras=['A','B','C','D','E','F'];
        return `<details open style="margin-bottom:12px;background:var(--bg);border-radius:11px;border:1.5px solid var(--border);overflow:hidden">
          <summary style="padding:12px 15px;cursor:pointer;font-weight:800;font-size:.85rem;color:var(--blue);list-style:none;display:flex;justify-content:space-between;align-items:center">
            ${label} <span style="color:var(--muted);font-weight:600;font-size:.76rem">${items.length} preguntas nuevas</span>
          </summary>
          <div style="padding:10px 13px 14px">
            ${items.map((p,i)=>`
              <div class="q-adm" style="position:relative">
                <div class="q-adm-num">
                  Nueva #${i+1} · ${p.categoria||'General'}
                  <span style="background:#dcfce7;color:#15803d;font-size:.6rem;padding:2px 7px;border-radius:99px;margin-left:6px;font-weight:800">NUEVA</span>
                </div>
                <div class="q-adm-txt">${p.pregunta}</div>
                <div class="q-adm-opts">
                  ${p.opciones.map((o,j)=>`<div class="q-opt${j===p.respuestaCorrecta?' corr':''}">${letras[j]}) ${clean(o)}${j===p.respuestaCorrecta?' ✅':''}</div>`).join('')}
                </div>
                <div class="rev-exp" style="margin-top:8px"><strong>Justificación:</strong> ${p.explicacion||'—'}</div>
                <div style="display:flex;gap:8px;margin-top:8px;flex-wrap:wrap">
                  <button onclick="editarPreguntaExtra('${rolKey}',${i})" style="padding:5px 13px;border:1.5px solid var(--blue);background:var(--blue-l);color:var(--blue);border-radius:7px;font-size:.75rem;font-weight:800;cursor:pointer">✏️ Editar</button>
                  <button onclick="eliminarPreguntaExtra('${rolKey}',${i})" style="padding:5px 13px;border:1.5px solid var(--red);background:var(--red-l);color:var(--red);border-radius:7px;font-size:.75rem;font-weight:800;cursor:pointer">🗑 Eliminar</button>
                </div>
              </div>`).join('')}
          </div>
        </details>`;
      }).filter(Boolean).join('')||'<p style="color:var(--muted);font-size:.83rem;padding:10px">Aún no has agregado preguntas.</p>'}
    </div>`;
}

// Estado del editor
let efOpciones=4, efCorrecta=-1, _editando=null; // _editando = {rol, idx}

function updEditorOpts(){
  // nothing dynamic needed on bank change
}

function marcarCorrecta(i){
  efCorrecta=i;
  document.querySelectorAll('.ef-mark-btn').forEach((b,j)=>{
    b.style.background = j===i ? 'var(--green)' : '';
    b.style.color      = j===i ? '#fff' : '';
    b.style.borderColor= j===i ? 'var(--green)' : '';
  });
  document.getElementById('ef-corr-info').textContent=`✅ Respuesta correcta: Opción ${['A','B','C','D','E','F'][i]}`;
  document.getElementById('ef-corr-info').style.color='var(--green)';
}

function agregarOpcion(){
  if(efOpciones>=6){ alert('Máximo 6 opciones.'); return; }
  const letras=['A','B','C','D','E','F'];
  const i=efOpciones++;
  const div=document.createElement('div');
  div.className='ef-opt-row'; div.id=`ef-opt-wrap-${i}`;
  div.innerHTML=`
    <span class="ef-opt-ltr" id="ef-ltr-${i}">${letras[i]}</span>
    <input type="text" id="ef-opt-${i}" class="ef-opt-input" placeholder="Opción ${letras[i]}...">
    <button onclick="marcarCorrecta(${i})" class="ef-mark-btn" id="ef-mark-${i}" title="Marcar como correcta">✓</button>
    <button onclick="quitarOpcion(${i})" class="ef-del-btn" title="Eliminar">✕</button>`;
  document.getElementById('ef-opts').appendChild(div);
}

function quitarOpcion(i){
  const el=document.getElementById(`ef-opt-wrap-${i}`);
  if(el){ el.remove(); efOpciones--; if(efCorrecta===i) efCorrecta=-1; }
}

function guardarPregunta(){
  const fb=document.getElementById('ef-feedback');
  const banco=document.getElementById('ef-banco').value;
  const cat  =document.getElementById('ef-cat').value.trim();
  const preg =document.getElementById('ef-pregunta').value.trim();
  const exp  =document.getElementById('ef-exp').value.trim();
  const letras=['A','B','C','D','E','F'];

  // Recoger opciones existentes
  const opts=[];
  for(let i=0;i<efOpciones;i++){
    const el=document.getElementById(`ef-opt-${i}`);
    if(el) opts.push(el.value.trim());
  }

  // Validar
  if(!preg){ fb.textContent='❌ La pregunta no puede estar vacía.'; fb.style.color='var(--red)'; return; }
  const optsValidas=opts.filter(o=>o);
  if(optsValidas.length<2){ fb.textContent='❌ Necesitas al menos 2 opciones.'; fb.style.color='var(--red)'; return; }
  if(efCorrecta<0||efCorrecta>=optsValidas.length){ fb.textContent='❌ Debes marcar cuál es la respuesta correcta.'; fb.style.color='var(--red)'; return; }
  if(!exp){ fb.textContent='❌ La justificación técnica es obligatoria.'; fb.style.color='var(--red)'; return; }

  const nueva={ pregunta:preg, categoria:cat||'General', opciones:optsValidas, respuestaCorrecta:efCorrecta, explicacion:exp };

  const extra=getExtra();
  if(!extra[banco]) extra[banco]=[];

  if(_editando && _editando.rol===banco){
    extra[banco][_editando.idx]=nueva;
    _editando=null;
    fb.textContent='✅ Pregunta actualizada correctamente.';
  } else {
    extra[banco].push(nueva);
    fb.textContent=`✅ Pregunta agregada al banco "${BANCO_LABELS[banco]}".`;
  }
  fb.style.color='var(--green)';
  saveExtra(extra);
  setTimeout(()=>{ limpiarFormulario(); renderEditor(); },1000);
}

function limpiarFormulario(){
  document.getElementById('ef-cat').value='';
  document.getElementById('ef-pregunta').value='';
  document.getElementById('ef-exp').value='';
  document.getElementById('ef-feedback').textContent='';
  efOpciones=4; efCorrecta=-1; _editando=null;
  // Restore 4 default options
  const cont=document.getElementById('ef-opts');
  if(!cont) return;
  const letras=['A','B','C','D'];
  cont.innerHTML=letras.map((l,i)=>`
    <div class="ef-opt-row" id="ef-opt-wrap-${i}">
      <span class="ef-opt-ltr" id="ef-ltr-${i}">${l}</span>
      <input type="text" id="ef-opt-${i}" class="ef-opt-input" placeholder="Opción ${l}...">
      <button onclick="marcarCorrecta(${i})" class="ef-mark-btn" id="ef-mark-${i}" title="Marcar como correcta">✓</button>
      ${i>=2?`<button onclick="quitarOpcion(${i})" class="ef-del-btn" title="Eliminar opción">✕</button>`:''}
    </div>`).join('');
  document.getElementById('ef-corr-info').textContent='ℹ️ Haz clic en ✓ para marcar la respuesta correcta';
  document.getElementById('ef-corr-info').style.color='';
}

function editarPreguntaExtra(rolKey,i){
  const extra=getExtra();
  const p=(extra[rolKey]||[])[i]; if(!p) return;
  _editando={ rol:rolKey, idx:i };
  // Set form values
  document.getElementById('ef-banco').value=rolKey;
  document.getElementById('ef-cat').value=p.categoria||'';
  document.getElementById('ef-pregunta').value=p.pregunta||'';
  document.getElementById('ef-exp').value=p.explicacion||'';
  // Rebuild options
  efOpciones=p.opciones.length; efCorrecta=p.respuestaCorrecta;
  const cont=document.getElementById('ef-opts'); cont.innerHTML='';
  const letras=['A','B','C','D','E','F'];
  p.opciones.forEach((o,j)=>{
    const div=document.createElement('div'); div.className='ef-opt-row'; div.id=`ef-opt-wrap-${j}`;
    div.innerHTML=`
      <span class="ef-opt-ltr" id="ef-ltr-${j}">${letras[j]}</span>
      <input type="text" id="ef-opt-${j}" class="ef-opt-input" value="${o.replace(/"/g,'&quot;')}">
      <button onclick="marcarCorrecta(${j})" class="ef-mark-btn" id="ef-mark-${j}" style="${j===efCorrecta?'background:var(--green);color:#fff;border-color:var(--green)':''}" title="Marcar como correcta">✓</button>
      ${j>=2?`<button onclick="quitarOpcion(${j})" class="ef-del-btn" title="Eliminar">✕</button>`:''}`;
    cont.appendChild(div);
  });
  document.getElementById('ef-corr-info').textContent=`✅ Respuesta correcta: Opción ${letras[efCorrecta]}`;
  document.getElementById('ef-corr-info').style.color='var(--green)';
  document.getElementById('ef-feedback').textContent='📝 Editando pregunta. Haz clic en Guardar cuando termines.';
  document.getElementById('ef-feedback').style.color='var(--blue)';
  document.getElementById('editor-form').scrollIntoView({behavior:'smooth'});
}

function eliminarPreguntaExtra(rolKey,i){
  modal({
    ico:'🗑️', icoClass:'',
    title:'¿Eliminar pregunta?',
    msg:'Esta acción no se puede deshacer. La pregunta será eliminada permanentemente del banco.',
    btns:[
      { label:'Sí, eliminar', cls:'danger', action(){
        const extra=getExtra();
        if(extra[rolKey]) extra[rolKey].splice(i,1);
        saveExtra(extra);
        renderEditor();
      }},
      { label:'Cancelar', cls:'sec', action:null }
    ]
  });
}

/* ── RESET ──────────────────────────────────────────── */
function resetEstado(){ clearInterval(timer); timer=null; preguntas=[]; mapas=[]; idx=0; respuestas={}; tiempoR=0; }
function repetirExamen(){ resetEstado(); abrirStart(rolActual); }