// Formulario: SIMULACRO.pdf
const bancoFormularios = [
  {
    "id": 1,
    "categoria": "Prevención del Acoso Escolar",
    "pregunta": "Para prevenir el acoso escolar, la estrategia más efectiva es:",
    "opciones": [
      "Desarrollar talleres puntuales sobre convivencia escolar",
      "Implementar programas de educación socioemocional continua",
      "Establecer consecuencias severas para conductas de acoso",
      "Monitorear constantemente áreas de recreo y baños"
    ],
    "respuestaCorrecta": 1,
    "explicacion": "Base Técnica: La prevención sostenida y efectiva no se basa en acciones aisladas ni únicamente punitivas, sino en la integración continua de la educación socioemocional para desarrollar la empatía y la resolución de conflictos desde edades tempranas."
  },
  {
    "id": 2,
    "categoria": "Resolución de Conflictos",
    "pregunta": "Dos estudiantes se agreden físicamente gravemente. Según protocolo:",
    "opciones": [
      "Sancionar según manual de convivencia automáticamente",
      "Realizar terapia de grupo para resolución de conflictos",
      "Separar a los estudiantes y mediar reconciliación",
      "Aplicar protocolo de actuación ante violencia escolar"
    ],
    "respuestaCorrecta": 3,
    "explicacion": "Base Legal: Ante agresiones físicas graves, el centro debe ceñirse estrictamente al Protocolo de Actuación ante Situaciones de Violencia Escolar (MINERD), el cual estipula pasos específicos de contención, notificación y seguimiento."
  },
  {
    "id": 3,
    "categoria": "Intervención en Acoso Escolar",
    "pregunta": "Identifica bullying sistemático a estudiante con discapacidad. La intervención:",
    "opciones": [
      "Cambia de sección al estudiante afectado prioritariamente",
      "Sanciona a agresores según gravedad de los hechos",
      "Activar protocolo de acoso, proteger a la víctima y sancionar según normativa",
      "Desarrolla habilidades sociales en el estudiante vulnerado"
    ],
    "respuestaCorrecta": 2,
    "explicacion": "Base Legal: Ley 136-03 y Normas de Convivencia. El acoso hacia estudiantes con discapacidad es una falta grave o muy grave. Requiere una intervención sistémica: activación de protocolo, resguardo de la víctima y aplicación de consecuencias formativas para los agresores."
  },
  {
    "id": 4,
    "categoria": "Atención a la Diversidad",
    "pregunta": "Un estudiante con TDAH no diagnosticado afecta el ambiente de aula. El procedimiento es:",
    "opciones": [
      "Realizar screening y coordinar evaluación multidisciplinaria",
      "Derivar a neurología con informe descriptivo",
      "Implementar adaptaciones conductuales provisionales",
      "Sugerir evaluación médica especializada inmediata"
    ],
    "respuestaCorrecta": 0,
    "explicacion": "Base Técnica: Antes de derivaciones médicas, el equipo de orientación debe realizar una evaluación psicopedagógica inicial (screening) y articular con docentes y familia para tener un panorama completo del estudiante."
  },
  {
    "id": 5,
    "categoria": "Clima y Bienestar Docente",
    "pregunta": "Un docente manifiesta burnout y trata mal a estudiantes. Usted:",
    "opciones": [
      "Brinda apoyo emocional y canaliza recursos de salud para la carga laboral con la Dirección.",
      "Sugiere capacitación en manejo de estrés laboral",
      "Deriva a servicio de salud mental ocupacional",
      "Reporta a dirección para acciones disciplinarias"
    ],
    "respuestaCorrecta": 0,
    "explicacion": "Base Técnica: El rol del psicólogo abarca el clima escolar. Debe ofrecer una primera línea de apoyo, mediando con la gestión para crear condiciones laborales que protejan tanto al docente como a los estudiantes."
  },
  {
    "id": 6,
    "categoria": "Ética Profesional",
    "pregunta": "Un docente solicita información confidencial de un estudiante. Usted:",
    "opciones": [
      "Ofrece orientación general sin revelar datos específicos",
      "Solicita autorización por escrito de los padres",
      "Comparte información relevante para proceso educativo",
      "Provee solo información necesaria para intervención docente"
    ],
    "respuestaCorrecta": 3,
    "explicacion": "Base Ética: Código del CODOPSI. El docente no requiere conocer el expediente clínico completo, pero sí necesita las orientaciones pedagógicas y conductuales derivadas de este para manejar la situación en el aula."
  },
  {
    "id": 7,
    "categoria": "Trabajo con Familias",
    "pregunta": "Un padre se niega a aceptar que su hijo necesita apoyo psicológico. Usted:",
    "opciones": [
      "Reporta el caso a protección infantil por negligencia",
      "Establece alianza mostrando beneficios del apoyo especializado",
      "Implementa estrategias de contención emocional escolar",
      "Sugiere seguimiento desde el departamento de orientación"
    ],
    "respuestaCorrecta": 1,
    "explicacion": "Base Técnica: La negación paterna inicial se maneja construyendo empatía y mostrando evidencias concretas de cómo el apoyo especializado impactará positivamente en el desarrollo integral del niño."
  },
  {
    "id": 8,
    "categoria": "Seguimiento Académico",
    "pregunta": "Un estudiante muestra deterioro académico repentino. El abordaje:",
    "opciones": [
      "Implementa plan de nivelación académica inmediata",
      "Realiza evaluación integral del contexto y situación actual",
      "Notifica a familia sobre bajo rendimiento académico",
      "Deriva a evaluación neuropsicológica completa"
    ],
    "respuestaCorrecta": 1,
    "explicacion": "Base Técnica: Un cambio brusco en el rendimiento suele ser síntoma de factores subyacentes (emocionales, familiares, sociales). Requiere una indagación profunda y contextual antes de tomar medidas académicas."
  },
  {
    "id": 9,
    "categoria": "Intervención Clínica",
    "pregunta": "Un estudiante de 1er ciclo muestra signos de ansiedad escolar. Según el Código de Ética, usted debe:",
    "opciones": [
      "Realizar observación en aula antes de cualquier intervención",
      "Iniciar evaluación psicológica con consentimiento informando a los padres",
      "Derivar inmediatamente a servicio de salud mental externo",
      "Aplicar técnicas de relajación en sesiones individuales"
    ],
    "respuestaCorrecta": 1,
    "explicacion": "Base Legal: Ley 136-03 y Ética Profesional. Cualquier abordaje psicológico individual con menores de edad requiere obligatoriamente el conocimiento y consentimiento informado de los padres o tutores."
  },
  {
    "id": 10,
    "categoria": "Atención a la Diversidad",
    "pregunta": "Según la ordenanza 05-2024 las adaptaciones curriculares para NEE:",
    "opciones": [
      "Son responsabilidad compartida con docentes de aula",
      "El currículo dominicano debe adaptarse a las necesidades de cada estudiante",
      "Deben ser equivalentes para estudiantes con misma discapacidad",
      "Aplican principalmente en asignaturas instrumentales"
    ],
    "respuestaCorrecta": 1,
    "explicacion": "Base Legal: Ordenanza 05-2024. La educación inclusiva concibe un currículo flexible que realiza ajustes razonables en función del perfil individual de cada estudiante, no de etiquetas diagnósticas generales."
  },
  {
    "id": 11,
    "categoria": "Protocolo de Riesgo",
    "pregunta": "Un estudiante revela ideas suicidas durante una sesión. Su obligación es:",
    "opciones": [
      "Activar protocolo de crisis y notificar a padres/tutores",
      "Incrementar frecuencia de sesiones de apoyo emocional",
      "Desarrollar contrato de no suicidio inmediatamente",
      "Hospitalizar preventivamente para evaluación psiquiátrica"
    ],
    "respuestaCorrecta": 0,
    "explicacion": "Base Legal: En casos de riesgo de vida, la confidencialidad se levanta. El protocolo exige notificar inmediatamente a la familia y coordinar derivación de urgencia a servicios de salud mental."
  },
  {
    "id": 12,
    "categoria": "Resolución de Conflictos",
    "pregunta": "Un conflicto entre docentes afecta clima escolar. Su rol:",
    "opciones": [
      "Deriva a dirección para manejo administrativo del caso",
      "Sugiere capacitación en inteligencia emocional docente",
      "Media voluntariamente si las partes solicitan intervención",
      "Ofrece estrategias de resolución pacífica de conflictos"
    ],
    "respuestaCorrecta": 3,
    "explicacion": "Base Técnica: El orientador fomenta la cultura de paz proporcionando herramientas y propiciando espacios institucionales para gestionar las diferencias de manera asertiva y dialógica."
  },
  {
    "id": 13,
    "categoria": "Protección de Derechos",
    "pregunta": "Detecta negligencia parental en un caso. Según protocolo:",
    "opciones": [
      "Notifica al Consejo de Protección de NNA correspondiente",
      "Implementa plan de apoyo familiar desde la escuela",
      "Deriva a trabajo social para intervención familiar",
      "Conversa con padres sobre consecuencias legales de negligencia"
    ],
    "respuestaCorrecta": 2,
    "explicacion": "Base Legal: Protocolos MINERD. La primera línea de acción ante negligencia corroborada es articular con Trabajo Social e instituciones de apoyo familiar antes de proceder a instancias más drásticas de protección, buscando restaurar la capacidad parental."
  },
  {
    "id": 14,
    "categoria": "Protección de Derechos",
    "pregunta": "Detecta que un docente utiliza castigos humillantes. Según la Ley 136-03, debe:",
    "opciones": [
      "Capacitar al docente en manejo conductual positivo",
      "Activar protocolo de protección y notificar a CONANI o fiscalía",
      "Documentar evidencias para evaluación de desempeño",
      "Mediar entre el docente y los estudiantes afectados"
    ],
    "respuestaCorrecta": 1,
    "explicacion": "Base Legal: Ley 136-03. El castigo físico o humillante está prohibido. Por tratarse de una vulneración a la integridad del menor por parte de un adulto responsable, debe reportarse inmediatamente."
  },
  {
    "id": 15,
    "categoria": "Formación Continua",
    "pregunta": "Al identificar necesidades de formación docente, la acción:",
    "opciones": [
      "Diseña plan de desarrollo profesional según necesidades",
      "Gestiona capacitación externa especializada",
      "Sugiere autoevaluación de prácticas pedagógicas",
      "Programa talleres generales sobre temas prioritarios"
    ],
    "respuestaCorrecta": 0,
    "explicacion": "Base Técnica: El acompañamiento docente requiere una planificación estructurada. El levantamiento de necesidades se consolida en un Plan de Desarrollo Profesional y no en acciones formativas dispersas."
  },
  {
    "id": 16,
    "categoria": "Protección de Derechos",
    "pregunta": "Según la Ley 136-03, ante sospecha fundada de abuso sexual, debe:",
    "opciones": [
      "Reportar al CONANI y fiscalía de manera inmediata",
      "Preservar evidencias y notificar a dirección escolar",
      "Realizar entrevista investigativa con el presunto agresor",
      "Activar protocolo interno de protección estudiantil"
    ],
    "respuestaCorrecta": 0,
    "explicacion": "Base Legal: Ley 136-03, Art. 14. La escuela tiene el deber de denunciar y debe evitar cualquier acción investigativa interna que contamine el proceso o revictimice al estudiante."
  },
  {
    "id": 17,
    "categoria": "Atención a la Diversidad",
    "pregunta": "Un estudiante con autismo tiene crisis sensoriales en aula. La adaptación:",
    "opciones": [
      "Permite salidas del aula cuando siente sobrecarga sensorial",
      "Adapta iluminación y sonido en el ambiente escolar",
      "Designa compañero de apoyo durante situaciones críticas",
      "Implementa estrategias de anticipación y espacios de calma"
    ],
    "respuestaCorrecta": 3,
    "explicacion": "Base Técnica: En primaria, la creación de rutinas predecibles (anticipación visual) y la disponibilidad de un entorno seguro para regulación emocional (rincón de la calma) son fundamentales."
  },
  {
    "id": 18,
    "categoria": "Derechos de NNA",
    "pregunta": "Según la Ley 136-03, el derecho a la participación estudiantil incluye:",
    "opciones": [
      "Expresar opinión en asuntos que afecten su desarrollo",
      "Elegir contenidos de asignaturas optativas",
      "Participar en diseño del proyecto educativo institucional",
      "Integrar comités de evaluación docente periódicamente"
    ],
    "respuestaCorrecta": 0,
    "explicacion": "Base Legal: Ley 136-03. El derecho a la participación y a ser escuchado es un principio rector. Los NNA tienen derecho a opinar libremente y a que sus opiniones se tomen en cuenta en asuntos de su interés."
  },
  {
    "id": 19,
    "categoria": "Evaluación Psicopedagógica",
    "pregunta": "Para un estudiante con posible discapacidad intelectual no diagnosticada:",
    "opciones": [
      "Adaptar currículo según observaciones conductuales",
      "Sugerir evaluación neurológica para diagnóstico diferencial",
      "Implementar estrategias de aprendizaje multisensorial",
      "Solicitar evaluación psicopedagógica al departamento de orientación y derivar a salud mental para diagnóstico"
    ],
    "respuestaCorrecta": 3,
    "explicacion": "Base Legal: Ordenanza 05-2024. Se requiere la articulación: evaluación inicial por el centro educativo para identificar apoyos y derivación para confirmación diagnóstica especializada externa."
  },
  {
    "id": 20,
    "categoria": "Inclusión Educativa",
    "pregunta": "Para inclusión de estudiante con movilidad reducida, el plan debe contener:",
    "opciones": [
      "Garantiza accesibilidad arquitectónica y participación plena",
      "Adapta actividades de educación física específicamente",
      "Prioriza ubicación en aulas de planta baja exclusivamente",
      "Asigna auxiliar pedagógico para desplazamientos"
    ],
    "respuestaCorrecta": 0,
    "explicacion": "Base Legal: Ley de Inclusión y Diseño Universal de Aprendizaje. La meta es eliminar las barreras del entorno para garantizar no solo el acceso, sino la plena participación e integración en todas las actividades."
  },

// Formulario: ITEMS Psicólogos_Orientadores EDD2025 ADP.pdf (Variante 2)
  {
    "id": 21,
    "categoria": "Inclusión Educativa",
    "pregunta": "Para apoyar la inclusión, el psicólogo:",
    "opciones": [
      "Acompaña al docente en aula.",
      "Recomienda ajustes metodológicos.",
      "Orienta sobre adaptación curricular.",
      "Diseña estrategias de apoyo."
    ],
    "respuestaCorrecta": 1,
    "explicacion": "Base Técnica: Ordenanza 05-2024. El rol del psicólogo frente a la inclusión consiste en asesorar al docente recomendando los ajustes metodológicos necesarios (Diseño Universal de Aprendizaje) para eliminar las barreras del entorno."
  },
  {
    "id": 22,
    "categoria": "Funciones Esenciales",
    "pregunta": "Función esencial del orientador es:",
    "opciones": [
      "Colaborar con el bienestar emocional.",
      "Apoyar en la integración escolar.",
      "Guiar procesos académicos.",
      "Acompañar en decisiones vocacionales."
    ],
    "respuestaCorrecta": 0,
    "explicacion": "Base Técnica: Manual de Orientación y Psicología. Aunque el orientador acompaña procesos vocacionales y académicos, su función nuclear y transversal es salvaguardar y colaborar con el bienestar emocional integral del estudiante."
  },
  {
    "id": 23,
    "categoria": "Resolución de Conflictos",
    "pregunta": "En la mediación educativa, el orientador:",
    "opciones": [
      "Redacta compromisos.",
      "Facilita el diálogo.",
      "Informa a directivos.",
      "Promueve acuerdos."
    ],
    "respuestaCorrecta": 1,
    "explicacion": "Base Técnica: Enfoque de Cultura de Paz. El mediador no impone soluciones ni redacta los acuerdos iniciales; su intervención técnica consiste en ser un puente neutral que facilita el diálogo empático entre las partes."
  },
  {
    "id": 24,
    "categoria": "Ética Profesional",
    "pregunta": "La ética profesional exige:",
    "opciones": [
      "Cumplir normativas escolares.",
      "Resguardar confidencialidad.",
      "Garantizar consentimiento informado.",
      "Actuar con imparcialidad."
    ],
    "respuestaCorrecta": 1,
    "explicacion": "Base Ética: Ley 136-03 y Código CODOPSI. El resguardo de la intimidad y la confidencialidad de la información compartida por los estudiantes es el principio ético rector de la práctica psicológica y orientadora."
  },
  {
    "id": 25,
    "categoria": "Evaluación NEAE",
    "pregunta": "En la detección de NEAE, el psicólogo debe:",
    "opciones": [
      "Elaborar informes técnicos.",
      "Acompañar al estudiante.",
      "Aplicar evaluaciones psicométricas.",
      "Coordinar remisiones a especialistas."
    ],
    "respuestaCorrecta": 0,
    "explicacion": "Base Técnica: El proceso de detección y evaluación de Necesidades Específicas de Apoyo Educativo (NEAE) en los centros culmina con la elaboración del informe técnico (psicopedagógico) que sustenta los ajustes curriculares."
  },
  {
    "id": 26,
    "categoria": "Evaluación Psicopedagógica",
    "pregunta": "En evaluación psicopedagógica, el psicólogo:",
    "opciones": [
      "Administra pruebas diagnósticas.",
      "Socializa resultados con docentes.",
      "Diseña planes de apoyo.",
      "Elabora perfiles de desarrollo."
    ],
    "respuestaCorrecta": 2,
    "explicacion": "Base Técnica: El propósito fundamental de la evaluación en el contexto educativo no es el etiquetado clínico, sino el diseño de planes de apoyo y estrategias de intervención para mejorar el aprendizaje."
  },
  {
    "id": 27,
    "categoria": "Primeros Auxilios Psicológicos",
    "pregunta": "La intervención en crisis prioriza:",
    "opciones": [
      "Registrar el caso.",
      "Derivar si es necesario.",
      "Comunicar a la familia.",
      "Contener emocionalmente."
    ],
    "respuestaCorrecta": 3,
    "explicacion": "Base Técnica: Protocolo de Intervención en Crisis. Ante un desborde emocional, la acción inmediata y primaria es la contención emocional (Primeros Auxilios Psicológicos). El registro y la derivación son pasos secundarios."
  },
  {
    "id": 28,
    "categoria": "Prevención Escolar",
    "pregunta": "Para fortalecer la salud mental, un psicólogo escolar:",
    "opciones": [
      "Realiza sesiones grupales.",
      "Orienta a estudiantes individualmente.",
      "Participa en comités de bienestar.",
      "Implementa programas preventivos."
    ],
    "respuestaCorrecta": 3,
    "explicacion": "Base Técnica: El modelo del MINERD es preventivo y proactivo. La implementación de programas sistémicos (habilidades para la vida, resiliencia) es la forma más efectiva de fortalecer la salud mental a nivel macro."
  },
  {
    "id": 29,
    "categoria": "Mediación de Conflictos",
    "pregunta": "En la mediación de conflictos, debe:",
    "opciones": [
      "Escuchar activamente a las partes.",
      "Proponer acuerdos.",
      "Documentar el proceso.",
      "Informar a directivos."
    ],
    "respuestaCorrecta": 0,
    "explicacion": "Base Técnica: La escucha activa es la herramienta principal del mediador. Permite validar las emociones de los involucrados, comprender las posturas y ayudar a desescalar el conflicto."
  },
  {
    "id": 30,
    "categoria": "Orientación Vocacional",
    "pregunta": "La orientación vocacional implica:",
    "opciones": [
      "Coordinar charlas profesionales.",
      "Aplicar pruebas de intereses.",
      "Guiar en la elección de carrera.",
      "Orientar sobre opciones académicas."
    ],
    "respuestaCorrecta": 2,
    "explicacion": "Base Técnica: La orientación vocacional es un proceso de acompañamiento continuo. Implica guiar al estudiante en su autoconocimiento y toma de decisiones para su proyecto de vida (elección de carrera o inserción laboral)."
  },
  {
    "id": 31,
    "categoria": "Prevención del Fracaso Escolar",
    "pregunta": "En la prevención del fracaso escolar, el orientador debe:",
    "opciones": [
      "Coordinar con docentes.",
      "Proponer estrategias de apoyo.",
      "Identificar factores de riesgo.",
      "Involucrar a las familias."
    ],
    "respuestaCorrecta": 2,
    "explicacion": "Base Técnica: Para prevenir, primero hay que detectar. La identificación temprana de los factores de riesgo (ausentismo, desmotivación, problemas familiares) es el paso inicial ineludible."
  },
  {
    "id": 32,
    "categoria": "Funciones Esenciales (Variante)",
    "pregunta": "La función esencial es:",
    "opciones": [
      "Orientar a familias.",
      "Participar en diagnósticos institucionales.",
      "Intervenir en casos de dificultad emocional.",
      "Apoyar a docentes."
    ],
    "respuestaCorrecta": 2,
    "explicacion": "Base Técnica: Reafirmando las prioridades del perfil, la atención directa a las necesidades afectivas y la intervención en dificultades emocionales constituyen la base clínica-educativa del rol profesional."
  },
  {
    "id": 33,
    "categoria": "Prevención General",
    "pregunta": "En prevención, lo más importante es:",
    "opciones": [
      "Promover programas socioemocionales.",
      "Coordinar talleres de convivencia.",
      "Producir material psicoeducativo.",
      "Organizar charlas de sensibilización."
    ],
    "respuestaCorrecta": 0,
    "explicacion": "Base Técnica: Las charlas y materiales son complementarios. El desarrollo sostenido de competencias a través de programas socioemocionales es la intervención de mayor impacto para prevenir conductas de riesgo."
  },
  {
    "id": 34,
    "categoria": "Apoyo Familiar",
    "pregunta": "La orientación a familias incluye:",
    "opciones": [
      "Fomentar comunicación con la escuela.",
      "Derivar a servicios comunitarios.",
      "Informar sobre desarrollo adolescente.",
      "Promover pautas de crianza."
    ],
    "respuestaCorrecta": 3,
    "explicacion": "Base Técnica: Escuelas de Padres MINERD. Dotar a las familias de estrategias positivas para la resolución de conflictos en el hogar (pautas de crianza) repercute directamente en el comportamiento del niño en la escuela."
  },
  {
    "id": 35,
    "categoria": "Participación Familiar",
    "pregunta": "En el trabajo con familias, el orientador debe:",
    "opciones": [
      "Informar sobre rendimiento académico.",
      "Fomentar comunicación con docentes.",
      "Motivar asistencia a reuniones.",
      "Promover participación activa."
    ],
    "respuestaCorrecta": 3,
    "explicacion": "Base Legal: Ley 136-03. La familia es cogarante de derechos. El orientador debe trascender la mera asistencia a reuniones y buscar la implicación y participación activa de los padres en el desarrollo educativo."
  },

// Formulario: Simulador ITEMS Psicologo_Orientador_a EDD2025 Fase 3 (Secundaria)

  {
    "id": 36,
    "categoria": "Salud Mental y Riesgo",
    "pregunta": "Un estudiante de 4to de secundaria comenta que se siente constantemente triste, ha perdido interés y menciona 'a veces quisiera desaparecer', pidiendo confidencialidad. ¿Cuál es la actuación adecuada?",
    "opciones": [
      "Respetar la confidencialidad completamente",
      "Informar inmediatamente a todos los docentes",
      "Activar protocolo de riesgo, informar a la familia y dar seguimiento",
      "Esperar a ver si el estudiante mejora"
    ],
    "respuestaCorrecta": 2,
    "explicacion": "Base Legal: Ley 136-03. Cuando existe riesgo de vida (ideación suicida), el deber de protección prima sobre la confidencialidad. Se debe informar a la familia y activar la ruta de salud mental externa."
  },
  {
    "id": 37,
    "categoria": "Evaluación Psicopedagógica",
    "pregunta": "Un orientador aplica solo un test de inteligencia ante un caso de bajo rendimiento y concluye dificultades cognitivas. ¿Cuál es el error principal?",
    "opciones": [
      "Uso de pruebas estandarizadas",
      "Falta de observación en el aula",
      "Realizar una evaluación reduccionista y no integral",
      "No consultar con el docente"
    ],
    "respuestaCorrecta": 2,
    "explicacion": "Base Técnica: La evaluación psicopedagógica debe ser integral, considerando factores emocionales, familiares, sociales y pedagógicos, no limitarse a una única cifra de CI."
  },
  {
    "id": 38,
    "categoria": "Prevención de Sustancias",
    "pregunta": "En secundaria, para prevenir el consumo de sustancias, el enfoque debe ser:",
    "opciones": [
      "Informativo sobre los peligros de las drogas",
      "Basado en el desarrollo de habilidades para la vida",
      "Centrado en la vigilancia y detección de consumidores",
      "Orientado a la sanción ejemplarizante"
    ],
    "respuestaCorrecta": 1,
    "explicacion": "Base Técnica: El fortalecimiento de la autoestima, la asertividad y la toma de decisiones (Habilidades para la Vida) es el factor preventivo más eficaz según los modelos internacionales y el MINERD."
  },
  {
    "id": 39,
    "categoria": "Mediación Escolar",
    "pregunta": "En un conflicto entre un docente y un grupo de estudiantes, el orientador actúa como:",
    "opciones": [
      "Defensor del docente para mantener la autoridad",
      "Mediador que facilita la comunicación y el entendimiento",
      "Juez que determina quién tiene la razón",
      "Observador pasivo que solo registra el evento"
    ],
    "respuestaCorrecta": 1,
    "explicacion": "Base Técnica: Estrategia de Cultura de Paz. El rol técnico es facilitar que ambas partes se escuchen y lleguen a acuerdos que restauren el vínculo pedagógico."
  },
  {
    "id": 40,
    "categoria": "Embarazo en Adolescentes",
    "pregunta": "Ante una estudiante embarazada, la prioridad del centro educativo es:",
    "opciones": [
      "Sugerir el paso a la modalidad de educación de adultos",
      "Garantizar su permanencia y continuidad en el sistema",
      "Solicitar que los padres la retiren por su seguridad",
      "Notificar a la fiscalía de manera automática"
    ],
    "respuestaCorrecta": 1,
    "explicacion": "Base Legal: Constitución Dominicana y Ley 136-03. El estado y la escuela deben garantizar que el embarazo no sea causa de exclusión o deserción escolar."
  },
  {
    "id": 41,
    "categoria": "Orientación Vocacional",
    "pregunta": "¿Cuál es el objetivo principal de la orientación vocacional en el segundo ciclo de secundaria?",
    "opciones": [
      "Aplicar pruebas para decidir qué carrera deben estudiar",
      "Facilitar el autoconocimiento y la exploración de opciones",
      "Asegurar que todos elijan carreras universitarias",
      "Entrevistar a los padres para que ellos elijan la carrera"
    ],
    "respuestaCorrecta": 1,
    "explicacion": "Base Técnica: Se busca que el joven desarrolle autonomía en su proyecto de vida mediante el conocimiento de sus intereses, aptitudes y la realidad del mercado laboral."
  },
  {
    "id": 42,
    "categoria": "Inclusión Educativa",
    "pregunta": "Las Adaptaciones Curriculares Individualizadas (ACI) deben ser registradas en:",
    "opciones": [
      "El cuaderno del estudiante",
      "El Documento Individual de Adaptación Curricular (DIAC)",
      "Únicamente en el registro de grado",
      "En una carta enviada al distrito"
    ],
    "respuestaCorrecta": 1,
    "explicacion": "Base Normativa: Ordenanza 05-2024. El DIAC es el instrumento oficial para documentar los ajustes razonables y el seguimiento a estudiantes con NEAE."
  },
  {
    "id": 43,
    "categoria": "Convivencia Escolar",
    "pregunta": "El equipo de gestión solicita revisar el manual de convivencia. El aporte del orientador debe ser:",
    "opciones": [
      "Aumentar la rigurosidad de las sanciones",
      "Asegurar que las medidas sean formativas y respeten derechos",
      "Delegar la responsabilidad solo en los docentes",
      "Enfocarse en la parte estética del documento"
    ],
    "respuestaCorrecta": 1,
    "explicacion": "Base Legal: Las normas de convivencia deben ser coherentes con el enfoque de derechos y buscar el aprendizaje social, no solo el castigo."
  },
  {
    "id": 44,
    "categoria": "Gestión del Tiempo",
    "pregunta": "Un orientador dedica el 80% de su tiempo a tareas administrativas del director. Esto es un error porque:",
    "opciones": [
      "No le pagan por hacer trabajo administrativo",
      "Desvirtúa su rol de apoyo psicopedagógico y emocional",
      "Los docentes se quejarán de su ausencia",
      "No podrá llenar los informes mensuales"
    ],
    "respuestaCorrecta": 1,
    "explicacion": "Base Técnica: Los lineamientos del MINERD establecen que el orientador es un apoyo técnico al aprendizaje y al bienestar; el exceso de burocracia impide la intervención directa con los estudiantes."
  },
  {
    "id": 45,
    "categoria": "Acompañamiento Docente",
    "pregunta": "Al observar una práctica docente que excluye a un estudiante, el orientador debe:",
    "opciones": [
      "Corregir al docente frente a los estudiantes",
      "Informar al director para que lo sancione",
      "Realizar una retroalimentación privada y reflexiva con el docente",
      "No intervenir para no afectar la relación"
    ],
    "respuestaCorrecta": 2,
    "explicacion": "Base Técnica: El acompañamiento debe ser formativo y colaborativo. La retroalimentación privada permite al docente reflexionar sobre su práctica sin sentirse vulnerado."
  },

// Formulario: ITEMS Psicólogos_Orientadores EDD2025dddd ADP (Enfoque Sistémico)

  {
    "id": 46,
    "categoria": "Gestión Curricular",
    "pregunta": "En el proceso de revisión de la planificación docente, el orientador debe asegurar que:",
    "opciones": [
      "Se incluyan actividades recreativas semanalmente.",
      "Estén integradas las estrategias de atención a la diversidad.",
      "El contenido cumpla con el calendario escolar estrictamente.",
      "Se asignen tareas diferenciadas por nivel socioeconómico."
    ],
    "respuestaCorrecta": 1,
    "explicacion": "Base Técnica: El orientador asesora al docente para que el Diseño Universal de Aprendizaje (DUA) sea parte de la planificación, garantizando que todos los estudiantes, independientemente de sus condiciones, puedan acceder al conocimiento."
  },
  {
    "id": 47,
    "categoria": "Intervención Individual",
    "pregunta": "¿Cuál es la acción correcta ante un estudiante que presenta un cambio repentino y extremo en su comportamiento social?",
    "opciones": [
      "Aplicar una sanción disciplinaria preventiva.",
      "Realizar una entrevista inicial y explorar el contexto familiar.",
      "Remitir a un centro de salud mental sin evaluación previa.",
      "Esperar a que el docente reporte una falta grave."
    ],
    "respuestaCorrecta": 1,
    "explicacion": "Base Técnica: Los cambios conductuales bruscos son indicadores de riesgo. La entrevista inicial permite identificar si el origen es una situación de crisis emocional, abuso o conflicto familiar antes de cualquier otra medida."
  },
  {
    "id": 48,
    "categoria": "Cultura de Paz",
    "pregunta": "Para disminuir los índices de violencia en el centro, la intervención más efectiva es:",
    "opciones": [
      "Aumentar la vigilancia en las horas de recreo.",
      "Implementar un programa de mediadores de conflictos entre pares.",
      "Dictar charlas magistrales sobre las consecuencias de la violencia.",
      "Expulsar a los estudiantes con conductas disruptivas recurrentes."
    ],
    "respuestaCorrecta": 1,
    "explicacion": "Base Técnica: Estrategia Nacional de Cultura de Paz. El empoderamiento de los estudiantes como mediadores fomenta la autonomía y la resolución pacífica de conflictos desde una perspectiva de liderazgo positivo."
  },
  {
    "id": 49,
    "categoria": "Inclusión Educativa",
    "pregunta": "Según la Ordenanza 05-2024, un estudiante con discapacidad motriz debe ser:",
    "opciones": [
      "Evaluado solo en áreas manuales.",
      "Exonerado de las actividades físicas.",
      "Integrado mediante ajustes razonables en el entorno y las actividades.",
      "Ubicado en un aula especial fuera del grupo regular."
    ],
    "respuestaCorrecta": 2,
    "explicacion": "Base Legal: La normativa prohíbe la segregación. Se deben eliminar barreras arquitectónicas y metodológicas para que participe en igualdad de condiciones con sus compañeros."
  },
  {
    "id": 50,
    "categoria": "Ética y Confidencialidad",
    "pregunta": "Un directivo solicita el expediente psicológico de un estudiante para un proceso judicial. El psicólogo debe:",
    "opciones": [
      "Entregar el expediente original de inmediato.",
      "Negarse rotundamente citando el secreto profesional.",
      "Entregar un informe técnico con la información relevante al caso.",
      "Pedir al estudiante que explique su situación al directivo."
    ],
    "respuestaCorrecta": 2,
    "explicacion": "Base Ética: CODOPSI. El expediente es propiedad del departamento de orientación. Ante requerimientos legales, se emite un informe técnico especializado que responda a lo solicitado sin vulnerar datos sensibles innecesarios."
  },
  {
    "id": 51,
    "categoria": "Gestión Escolar",
    "pregunta": "El equipo de orientación participa en el Equipo de Gestión con el fin de:",
    "opciones": [
      "Controlar la disciplina general del centro.",
      "Aportar una visión psicopedagógica a la toma de decisiones.",
      "Supervisar el cumplimiento del horario docente.",
      "Administrar los recursos económicos del centro educativo."
    ],
    "respuestaCorrecta": 1,
    "explicacion": "Base Técnica: Manual de Funciones. El orientador asegura que las decisiones administrativas y pedagógicas del centro no pierdan de vista el bienestar emocional y el aprendizaje de los alumnos."
  },
  {
    "id": 52,
    "categoria": "Prevención de Riesgos",
    "pregunta": "Ante una sospecha de abuso sexual infantil, el tiempo máximo para actuar es:",
    "opciones": [
      "24 horas tras confirmarse el hecho.",
      "Inmediato, tras tener la sospecha fundada.",
      "48 horas para investigar internamente.",
      "Una semana para hablar con los padres."
    ],
    "respuestaCorrecta": 1,
    "explicacion": "Base Legal: Ley 136-03. La notificación a las autoridades de protección (Fiscalía o CONANI) debe ser inmediata. La escuela no debe investigar, solo reportar para proteger la integridad del menor."
  },
  {
    "id": 53,
    "categoria": "Apoyo Familiar",
    "pregunta": "La 'Escuela para Padres' tiene como objetivo principal:",
    "opciones": [
      "Informar sobre las calificaciones de los estudiantes.",
      "Fortalecer las competencias parentales y el vínculo escuela-familia.",
      "Recaudar fondos para actividades del centro.",
      "Juzgar los estilos de crianza de las familias."
    ],
    "respuestaCorrecta": 1,
    "explicacion": "Base Técnica: Es un espacio de formación continua donde se brindan herramientas a los padres para acompañar mejor el proceso de desarrollo y aprendizaje de sus hijos."
  },
  {
    "id": 54,
    "categoria": "Acompañamiento Docente",
    "pregunta": "Al observar que un docente utiliza el grito como método de control, el orientador debe:",
    "opciones": [
      "Gritar más fuerte para demostrar autoridad.",
      "Reportar al docente por maltrato infantil inmediatamente.",
      "Modelar técnicas de disciplina positiva en una sesión conjunta.",
      "Ignorar la situación si los estudiantes no se quejan."
    ],
    "respuestaCorrecta": 2,
    "explicacion": "Base Técnica: El acompañamiento es formativo. Modelar o facilitar talleres de disciplina positiva ayuda al docente a cambiar prácticas autoritarias por herramientas de gestión de aula efectivas."
  },
  {
    "id": 55,
    "categoria": "Detección de Necesidades",
    "pregunta": "¿Qué instrumento es básico para iniciar un proceso de evaluación psicopedagógica?",
    "opciones": [
      "Un test de personalidad proyectivo.",
      "La ficha de remisión del docente de aula.",
      "El acta de nacimiento del estudiante.",
      "Una carta de recomendación de un psicólogo externo."
    ],
    "respuestaCorrecta": 1,
    "explicacion": "Base Técnica: El proceso inicia con el reporte del docente, quien identifica en el día a día las dificultades que interfieren con el aprendizaje del estudiante."
  },
  {
    "id": 56,
    "categoria": "Salud Mental",
    "pregunta": "La intervención ante el duelo en la escuela debe priorizar:",
    "opciones": [
      "El retorno inmediato a la normalidad académica.",
      "La validación de las emociones y el acompañamiento en el proceso.",
      "Evitar hablar del tema para no entristecer a los demás.",
      "Asignar más tareas para mantener la mente ocupada."
    ],
    "respuestaCorrecta": 1,
    "explicacion": "Base Técnica: La escuela debe ser un entorno seguro. Validar el dolor y permitir espacios de expresión emocional evita que el duelo se convierta en un proceso patológico."
  },
  {
    "id": 57,
    "categoria": "Liderazgo y Participación",
    "pregunta": "Los Consejos de Curso son una oportunidad para trabajar:",
    "opciones": [
      "El orden alfabético de los estudiantes.",
      "La democracia escolar y el liderazgo estudiantil.",
      "La limpieza exclusiva del aula.",
      "El cobro de cuotas mensuales."
    ],
    "respuestaCorrecta": 1,
    "explicacion": "Base Técnica: Son los órganos de participación de los estudiantes donde aprenden a debatir, proponer y elegir, fortaleciendo su formación ciudadana."
  },
  {
    "id": 58,
    "categoria": "Inclusión Educativa",
    "pregunta": "El 'Diferencial' en el registro de grado se utiliza para:",
    "opciones": [
      "Estudiantes que no asisten regularmente.",
      "Registrar las calificaciones de estudiantes con adaptaciones curriculares significativas.",
      "Anotar las faltas de disciplina.",
      "Separar a los estudiantes por género."
    ],
    "respuestaCorrecta": 1,
    "explicacion": "Base Normativa: Permite que el progreso de los estudiantes con NEAE sea evaluado según sus propios objetivos alcanzados, respetando su ritmo y nivel de apoyo."
  },
  {
    "id": 59,
    "categoria": "Vínculo Comunitario",
    "pregunta": "Ante un caso de desnutrición severa en un estudiante, el orientador coordina con:",
    "opciones": [
      "La policía nacional.",
      "Las instituciones de salud locales.",
      "El profesor de educación física únicamente.",
      "Una biblioteca pública."
    ],
    "respuestaCorrecta": 1,
    "explicacion": "Base Técnica: El trabajo en red. El orientador debe conocer la oferta de servicios de salud y protección de su zona para derivar casos que exceden el ámbito educativo."
  },
  {
    "id": 60,
    "categoria": "Evaluación del Desempeño",
    "pregunta": "El portafolio de evidencias del orientador debe demostrar:",
    "opciones": [
      "Que tiene muchos libros guardados.",
      "El impacto de sus intervenciones en el bienestar y aprendizaje estudiantil.",
      "Que conoce todas las leyes de memoria.",
      "El número de horas que pasa sentado en su oficina."
    ],
    "respuestaCorrecta": 1,
    "explicacion": "Base Técnica: Un portafolio profesional no es una colección de papeles, sino una muestra reflexiva de cómo su labor técnica ha transformado la realidad del centro."
  },
// Formulario: SIMULACRO - Etapa V: Ejercicio de Rendimiento Profesional (ERP)

  {
    "id": 61,
    "categoria": "Riesgo Psicosocial",
    "pregunta": "Un estudiante de 4to de secundaria le comenta al orientador que se siente constantemente triste, ha perdido interés en actividades y menciona 'a veces quisiera desaparecer', pero le pide que no informe a nadie. ¿Cuál debe ser la actuación más adecuada?",
    "opciones": [
      "Respetar la confidencialidad completamente",
      "Informar inmediatamente a todos los docentes",
      "Activar protocolo de riesgo, informar a la familia y dar seguimiento",
      "Esperar a ver si el estudiante mejora"
    ],
    "respuestaCorrecta": 2,
    "explicacion": "Base Legal: Ley 136-03. Ante riesgo de ideación suicida, la confidencialidad se subordina al derecho a la vida y la protección de la integridad del menor. Es obligatorio informar a los tutores y buscar ayuda especializada."
  },
  {
    "id": 62,
    "categoria": "Evaluación Psicopedagógica",
    "pregunta": "Un docente refiere a un estudiante por bajo rendimiento. El orientador aplica solo un test de inteligencia y concluye que el estudiante tiene dificultades cognitivas. ¿Cuál es el error principal?",
    "opciones": [
      "Uso de pruebas estandarizadas",
      "Realizar una evaluación reduccionista y no integral",
      "No haber solicitado permiso a la dirección",
      "Aplicar la prueba en horario de clases"
    ],
    "respuestaCorrecta": 1,
    "explicacion": "Base Técnica: Una evaluación técnica de calidad debe ser multidimensional (social, familiar, emocional y pedagógica). Un test de CI por sí solo no explica el bajo rendimiento y puede estigmatizar."
  },
  {
    "id": 63,
    "categoria": "Gestión de Conflictos",
    "pregunta": "Un docente refiere a un estudiante como 'hiperactivo y problemático'. Solicita al orientador que lo evalúe porque 'seguro tiene un trastorno'. ¿Cuál es la mejor respuesta del orientador?",
    "opciones": [
      "Realizar una evaluación integral considerando múltiples contextos",
      "Crear un espacio sistemático de intervención y aceptar la etiqueta",
      "Sugerir acciones a la familia y a la comunidad para mejorar la conducta",
      "Informar a los padres que el estudiante tiene un problema"
    ],
    "respuestaCorrecta": 0,
    "explicacion": "Base Técnica: El orientador debe evitar validar etiquetas diagnósticas emitidas por personal no clínico. Su rol es observar el contexto de aula y realizar una evaluación integral para entender la conducta."
  },
  {
    "id": 64,
    "categoria": "Contención Emocional",
    "pregunta": "Un estudiante rompe en llanto en clase tras recibir una baja calificación. Dice: 'soy un fracaso'. Es la primera vez que ocurre y no hay antecedentes. ¿Cuál es la mejor respuesta inicial del docente?",
    "opciones": [
      "Brindar contención emocional en el momento y luego evaluar si requiere seguimiento",
      "Remitir inmediatamente a orientación",
      "Ignorar para no reforzar la conducta",
      "Explicar que es normal y continuar la clase"
    ],
    "respuestaCorrecta": 0,
    "explicacion": "Base Técnica: La primera respuesta ante un desborde emocional en el aula debe ser la empatía y la contención por parte del docente (Primeros Auxilios Psicológicos), para luego analizar si el caso amerita intervención de orientación."
  },
  {
    "id": 65,
    "categoria": "Inclusión Educativa",
    "pregunta": "Se integra al centro un estudiante con discapacidad visual total. La primera acción del equipo de orientación debe ser:",
    "opciones": [
      "Solicitar un maestro sombra pagado por la familia",
      "Sensibilizar a la comunidad educativa y asesorar sobre ajustes razonables",
      "Exonerar al estudiante de las evaluaciones escritas",
      "Recomendar que se inscriba en una escuela especial"
    ],
    "respuestaCorrecta": 1,
    "explicacion": "Base Legal: Ordenanza 05-2024. La inclusión empieza por la eliminación de barreras actitudinales (sensibilización) y del entorno (ajustes razonables), garantizando el acceso al currículo regular."
  },
  {
    "id": 66,
    "categoria": "Prevención de Embarazo",
    "pregunta": "Al trabajar la prevención de embarazo en la adolescencia en 2do ciclo de secundaria, el enfoque debe priorizar:",
    "opciones": [
      "El miedo a las enfermedades de transmisión sexual",
      "El proyecto de vida y la toma de decisiones responsable",
      "El conocimiento biológico exclusivo del sistema reproductor",
      "La abstinencia como única opción válida"
    ],
    "respuestaCorrecta": 1,
    "explicacion": "Base Técnica: Los programas preventivos más exitosos en secundaria son aquellos que conectan las decisiones actuales con las metas a largo plazo (Proyecto de Vida) y fortalecen la autonomía."
  },
  {
    "id": 67,
    "categoria": "Protección de Derechos",
    "pregunta": "Un estudiante llega con marcas físicas sospechosas de maltrato. Al ser cuestionado, se muestra temeroso y no habla. ¿Cuál es el protocolo?",
    "opciones": [
      "Llamar a los padres para preguntar qué pasó",
      "Esperar a que el estudiante confíe y cuente la verdad",
      "Activar el protocolo de presunto maltrato y notificar a las autoridades competentes",
      "Curar las heridas y enviarlo al aula para no interrumpir su clase"
    ],
    "respuestaCorrecta": 2,
    "explicacion": "Base Legal: Ley 136-03. Ante señales físicas de maltrato, el centro educativo tiene la obligación legal de denunciar. Confrontar a los padres puede poner en mayor riesgo al menor."
  },
  {
    "id": 68,
    "categoria": "Mediación Docente",
    "pregunta": "Hay una tensión evidente entre el equipo de orientación y el cuerpo docente por la 'falta de sanciones' a estudiantes. ¿Qué acción técnica es más adecuada?",
    "opciones": [
      "Ceder y aplicar sanciones más severas para ganar apoyo",
      "Realizar un taller sobre disciplina positiva y el enfoque de las Normas de Convivencia",
      "Ignorar la tensión y seguir trabajando individualmente",
      "Pedir a la dirección que obligue a los docentes a colaborar"
    ],
    "respuestaCorrecta": 1,
    "explicacion": "Base Técnica: El conflicto suele surgir por desconocimiento del enfoque formativo de la disciplina. El orientador debe educar sobre cómo la disciplina positiva es más efectiva a largo plazo que el castigo punitivo."
  }

];