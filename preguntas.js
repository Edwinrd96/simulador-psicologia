// Base de datos de casos situacionales MINERD
const bancoPreguntas = [
    {
        id: 1,
        categoria: "Familia",
        pregunta: "Durante una entrevista, un estudiante de 3er grado de primaria revela que su tío, quien vive en la misma casa, le hace 'caricias incómodas' cuando su madre sale a trabajar. Según el protocolo dominicano, ¿Cuál es la acción inmediata e innegociable de la Unidad de Orientación y Psicología?",
        opciones: [
            "A) Convocar a la madre de forma urgente para que ella decida si presenta la denuncia.",
            "B) Realizar una investigación exhaustiva en la escuela para validar si el relato del niño es cierto.",
            "C) Denunciar el caso de manera inmediata ante CONANI o el Ministerio Público (Línea Vida) e informar a la dirección.",
            "D) Referir al estudiante a un psicólogo clínico privado para contención emocional antes de actuar."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ley 136-03 (Código para el Sistema de Protección de los Derechos Fundamentales de NNA). Establece la obligatoriedad de denuncia inmediata por parte del personal de los centros educativos ante la presunción de abuso. La escuela no investiga, reporta."
    },
    {
        id: 2,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "Un docente reporta que un estudiante de nuevo ingreso diagnosticado con TDAH se levanta constantemente e interrumpe. El docente solicita que el orientador se lleve al niño al departamento durante su clase para poder avanzar. ¿Cómo debe proceder el orientador según el Manual de Orientación?",
        opciones: [
            "A) Aceptar la solicitud para garantizar el derecho a la educación del resto del grupo.",
            "B) Diseñar adecuaciones curriculares no significativas junto al docente y sugerir estrategias como roles activos dentro del aula.",
            "C) Solicitar a los padres que mediquen al estudiante para que pueda permanecer en el salón regular.",
            "D) Suspender al estudiante temporalmente hasta que adquiera madurez conductual."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 02-2016 (Inclusión Escolar). El orientador acompaña al docente en el diseño de apoyos dentro del entorno natural (aula). Aislar al estudiante en el departamento vulnera su derecho a la inclusión."
    },
    {
        id: 3,
        categoria: "Convivencia",
        pregunta: "Se produce una pelea física entre dos estudiantes de 4to de secundaria. Según el protocolo de Cultura de Paz, al aplicar medidas disciplinarias, el enfoque principal debe ser:",
        opciones: [
            "A) Retributivo: asegurar que el castigo sea proporcional al nivel de violencia ejercida.",
            "B) Restaurativo: enfocarse en la responsabilización, la reparación del daño y el restablecimiento del vínculo.",
            "C) Punitivo preventivo: expulsar a los involucrados para dar un escarmiento al resto del liceo.",
            "D) Clínico: diagnosticar a los estudiantes con trastornos de control de impulsos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Normas del Sistema Educativo Dominicano para la Convivencia Armoniosa. El sistema desecha el modelo punitivo a favor del enfoque de justicia restaurativa."
    },
    {
        id: 4,
        categoria: "Gestión/POA",
        pregunta: "Al inicio del año escolar, el equipo de gestión solicita a la Unidad de Orientación su Plan Operativo Anual (POA). ¿Cuál debe ser el punto de partida técnico para elaborar este documento?",
        opciones: [
            "A) Los intereses personales y áreas de especialización clínica de la orientadora.",
            "B) Copiar las actividades del año anterior porque el currículo no ha cambiado.",
            "C) Las demandas de disciplina emitidas únicamente por la dirección del centro.",
            "D) La evaluación diagnóstica de las necesidades psicosociales y psicopedagógicas del centro y la comunidad."
        ],
        respuestaCorrecta: 3,
        explicacion: "Base Legal: Manual de Orientación y Psicología 2024. Toda planificación (POA) debe responder a un diagnóstico contextualizado basado en datos reales del centro educativo."
    },
    {
        id: 5,
        categoria: "Familia",
        pregunta: "El equipo docente detecta que un estudiante de 13 años falta a clases frecuentemente los viernes porque asiste a un mercado a vender productos para ayudar económicamente a su familia. ¿Qué acción corresponde al centro?",
        opciones: [
            "A) Adaptarle el horario para que pueda asistir a clases de lunes a jueves sin penalidad.",
            "B) Entender la situación económica y justificar las faltas en el registro de grado.",
            "C) Realizar intervención familiar, concientizar sobre el derecho a la educación y notificar a la red de protección si persiste el trabajo infantil.",
            "D) Expulsar al estudiante por inasistencia crónica e incumplimiento del deber escolar."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ley 136-03. El trabajo infantil que interfiere con la escolaridad es una vulneración de derechos. La escuela debe intervenir mediante acompañamiento familiar y redes locales."
    },
    {
        id: 6,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "Para derivar a un estudiante a evaluación psicopedagógica profunda por dificultades severas de lectura, ¿cuál es el requisito ético y administrativo fundamental previo a la aplicación de pruebas estandarizadas?",
        opciones: [
            "A) La aprobación directa del Distrito Educativo correspondiente.",
            "B) El reporte anecdótico firmado por el docente guía.",
            "C) El consentimiento informado firmado por la familia o tutores legales.",
            "D) La autorización escrita del director del centro educativo."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ética profesional y Manual de Orientación. Ningún menor puede ser sometido a evaluación psicométrica sin la autorización expresa (Consentimiento Informado) de sus tutores legales."
    },
    {
        id: 7,
        categoria: "Convivencia",
        pregunta: "Una adolescente de secundaria reporta que un compañero difunde rumores sexuales sobre ella en un grupo de WhatsApp, causándole aislamiento y llanto. ¿Qué tipo de falta constituye esto y qué protocolo se activa?",
        opciones: [
            "A) Falta leve; se maneja con un diálogo reflexivo entre ambos en el recreo.",
            "B) Falta muy grave (Ciberacoso); requiere intervención con familias, apoyo psicológico a la víctima y medidas socioeducativas al agresor.",
            "C) Asunto externo; la escuela no interviene porque WhatsApp ocurre fuera del horario escolar.",
            "D) Falta grave del docente por no supervisar los teléfonos móviles de los estudiantes."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Protocolo de actuación ante situaciones de acoso escolar. El ciberacoso que afecta el entorno escolar es tipificado como falta grave/muy grave y exige activación inmediata de la ruta de atención."
    },
    {
        id: 8,
        categoria: "Gestión/POA",
        pregunta: "Según el Estatuto del Docente (Ley 66-97), el rol del psicólogo escolar está clasificado como personal de apoyo a la docencia. En el marco de sus funciones, ¿qué NO le corresponde hacer?",
        opciones: [
            "A) Acompañar a los docentes en el diseño de estrategias inclusivas.",
            "B) Cubrir de manera permanente las aulas cuando los maestros titulares faltan.",
            "C) Dirigir la Escuela de Padres y Madres del centro educativo.",
            "D) Participar en la elaboración del Proyecto Educativo de Centro (PEC)."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Funciones de Orientación (Manual 2024). Cubrir ausencias docentes desvirtúa el rol y bloquea el cumplimiento del POA. Es una función puramente administrativa/docente."
    },
    {
        id: 9,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "Se identifica a un estudiante con alta capacidad intelectual (superdotación) que se muestra desmotivado y disruptivo en clase. ¿Qué ajuste es el indicado según la Ordenanza 02-2016?",
        opciones: [
            "A) Ponerlo como monitor o ayudante del profesor para que le enseñe a los que no entienden.",
            "B) Enriquecimiento y flexibilización curricular para ofrecerle retos cognitivos acordes a su nivel.",
            "C) Acelerarlo (brincarlo) de grado inmediatamente sin evaluación previa.",
            "D) Exigirle que modere su comportamiento y se adapte al ritmo de la mayoría."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 02-2016 sobre NEAE. Las Altas Capacidades requieren respuestas de enriquecimiento curricular, no simplemente darle más cantidad del mismo trabajo o usarlo de ayudante."
    },
    {
        id: 10,
        categoria: "Convivencia",
        pregunta: "Un docente decomisa un 'vape' a un estudiante dentro del aula. El docente exige a la psicóloga que llame a la policía de inmediato. Según el MINERD, ¿cómo debe procesarse este caso?",
        opciones: [
            "A) Cumplir la orden del docente y llamar a la policía para que requise a todos.",
            "B) Entregar el vape al estudiante al final del día advirtiéndole que no lo vuelva a hacer.",
            "C) Retener el objeto, notificar a la familia, aplicar medida formativa y referir a programas de prevención de adicciones.",
            "D) Expulsar al estudiante y transferirlo a la modalidad de educación de adultos (PREPARA)."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Normas de Convivencia. El consumo/porte de sustancias permitidas para adultos pero prohibidas para menores se maneja como falta disciplinaria con enfoque formativo, involucrando a la familia y la prevención."
    },
    {
        id: 11,
        categoria: "Familia",
        pregunta: "Padres de un alumno en proceso de divorcio conflictivo solicitan a la escuela informes contradictorios sobre el rendimiento del niño para usarlos en el juzgado. ¿Cómo debe proceder Orientación?",
        opciones: [
            "A) Negarse a entregar cualquier información a ambos padres para no involucrarse.",
            "B) Entregar el informe únicamente al padre que paga la colegiatura o aporta económicamente.",
            "C) Mantener la neutralidad escolar, emitiendo informes psicopedagógicos estrictamente académicos solicitados por vía judicial oficial.",
            "D) Tomar partido por el padre que se note más preocupado por el bienestar del niño."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ética Profesional. El centro debe resguardar al menor del conflicto parental. Los informes se emiten objetivamente sobre el desarrollo escolar, idealmente a solicitud de una instancia legal o compartidos equitativamente si ambos mantienen la patria potestad."
    },
    {
        id: 12,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "Una niña de origen extranjero no domina el idioma español, dificultando su evaluación de aprendizajes. El docente desea calificarla con 'Insuficiente'. ¿Qué recomienda la normativa de Inclusión?",
        opciones: [
            "A) Sugerir que la estudiante asista de oyente hasta que aprenda el idioma.",
            "B) Recomendar la reprobación del grado para que gane tiempo.",
            "C) Aplicar la evaluación en su idioma natal temporalmente.",
            "D) Realizar adecuaciones curriculares de acceso (barrera lingüística) y evaluar sus competencias mediante formatos visuales o prácticos.",
        ],
        respuestaCorrecta: 3,
        explicacion: "Base Legal: Ordenanza 02-2016. La barrera del idioma es una Necesidad Específica de Apoyo Educativo (NEAE) transitoria. Se debe garantizar el acceso a la evaluación mediante ajustes metodológicos, no penalizar por el idioma."
    },
    {
        id: 13,
        categoria: "Convivencia",
        pregunta: "Un estudiante confiesa tener ideaciones suicidas y muestra marcas de 'cutting'. Ruega a la orientadora que no se lo diga a sus padres. ¿Qué principio ético prevalece aquí?",
        opciones: [
            "A) El principio de confidencialidad y secreto profesional a toda costa.",
            "B) El principio de autonomía del estudiante adolescente.",
            "C) El principio de protección a la vida (excepción a la confidencialidad), activando ruta de atención en salud mental y notificando a la familia.",
            "D) El principio de no maleficencia, dándole terapia en la escuela para que no se autolesione más."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Protocolo ante ideación suicida y ética psicológica. La confidencialidad se rompe de inmediato ante riesgo inminente de daño a sí mismo o a terceros. La escuela no hace terapia clínica, deriva."
    },
    {
        id: 14,
        categoria: "Gestión/POA",
        pregunta: "Dentro del seguimiento individual a un estudiante, la herramienta técnica donde el orientador debe asentar las entrevistas, acuerdos e incidencias de manera formal se llama:",
        opciones: [
            "A) Registro Anecdótico del Docente.",
            "B) Ficha Integral del Estudiante (Expediente Psicopedagógico).",
            "C) Boletín de Calificaciones.",
            "D) Libro de Novedades de la Policía Escolar."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual Operativo. El expediente o ficha integral es el documento confidencial y oficial donde reposa el historial de intervenciones realizadas por el área de Orientación y Psicología."
    },
    {
        id: 15,
        categoria: "Familia",
        pregunta: "El principal objetivo de la 'Escuela de Padres y Madres' en el centro educativo dominicano es:",
        opciones: [
            "A) Recaudar fondos (APMAE) para el mantenimiento del plantel.",
            "B) Citar a los padres de los alumnos con problemas de conducta para llamarles la atención en grupo.",
            "C) Promover un espacio formativo y de reflexión para fortalecer las habilidades de crianza y la corresponsabilidad educativa.",
            "D) Darles clases formales a los padres analfabetos para que terminen la educación básica."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ordenanza 09-2000 (Modificada). Las Escuelas de Padres son espacios psicosociales preventivos destinados a fortalecer la alianza familia-escuela en pro del desarrollo integral del estudiantado."
    },



    // BLOQUE 2: PREGUNTAS 16 A 35
    {
        id: 16,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "Una estudiante de 5to de primaria presenta dislexia diagnosticada. Durante los exámenes escritos, se bloquea y deja el examen en blanco, aunque oralmente demuestra dominar el tema. ¿Qué adecuación exige la Ordenanza 02-2016?",
        opciones: [
            "A) Eximirla de tomar las pruebas y calificarla solo por asistencia.",
            "B) Aplicar adecuaciones de acceso y metodológicas, como permitirle responder de forma oral o darle tiempo extendido.",
            "C) Transferirla a una escuela de educación especial.",
            "D) Bajarle el nivel de los contenidos para que el examen sea de 2do grado."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 02-2016. Las NEAE asociadas a dislexia no requieren bajar el nivel del currículo (adecuación significativa), sino cambiar la forma de evaluación (adecuación de acceso/metodológica)."
    },
    {
        id: 17,
        categoria: "Convivencia",
        pregunta: "Una estudiante de 15 años de un liceo nocturno notifica que está embarazada. Un grupo de docentes exige su retiro o traslado a PREPARA argumentando que es 'un mal ejemplo' para las demás. ¿Qué dicta el marco legal?",
        opciones: [
            "A) Se debe aceptar la solicitud docente para mantener la moral del centro.",
            "B) Se garantiza su permanencia, se prohíbe toda discriminación y se le brindan apoyos para evitar la deserción escolar.",
            "C) Se suspende temporalmente hasta que dé a luz y luego se reintegra.",
            "D) Se le obliga a tomar clases exclusivamente virtuales."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 y Normas de Convivencia. El embarazo no es motivo de expulsión ni traslado forzoso. Es un derecho constitucional la protección a la maternidad y el acceso a la educación."
    },
    {
        id: 18,
        categoria: "Familia",
        pregunta: "Un niño de nivel inicial llega recurrentemente al centro sin desayunar, con evidentes signos de falta de higiene, ropa sucia y bajo peso. La escuela ha citado a la familia tres veces sin éxito. ¿Cuál es el paso a seguir?",
        opciones: [
            "A) Bañarlo y alimentarlo en la escuela sin notificar a nadie más.",
            "B) Expulsar al niño hasta que los padres se presenten.",
            "C) Emitir un reporte de presunta negligencia y abandono a CONANI y al Ministerio Público.",
            "D) Ir a la casa con la Policía Escolar a arrestar a los padres."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ley 136-03. La negligencia severa (omisión de cuidados básicos de salud, higiene y alimentación) es una forma de maltrato infantil. Ante la inasistencia de la familia, la escuela está obligada a reportar a las autoridades de protección."
    },
    {
        id: 19,
        categoria: "Gestión/POA",
        pregunta: "Fallece de forma trágica un docente muy querido en la comunidad educativa. Los estudiantes están consternados y llorando. ¿Cuál es el protocolo inmediato de intervención desde Orientación y Psicología?",
        opciones: [
            "A) Suspender la docencia por una semana para que todos guarden luto en casa.",
            "B) Ignorar el hecho y obligar a los estudiantes a tomar sus exámenes para mantener la rutina.",
            "C) Activar el protocolo de intervención en crisis, realizar contención emocional grupal y permitir espacios guiados para la expresión del duelo.",
            "D) Remitir a todos los estudiantes a psiquiatría."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Protocolo de Intervención en Crisis del MINERD. El rol del psicólogo/orientador es liderar la contención de primer orden y psicoeducación sobre el duelo dentro del recinto escolar."
    },
    {
        id: 20,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "Al recibir a un estudiante con Trastorno del Espectro Autista (TEA) nivel 1, el docente nota que el ruido del timbre escolar le provoca crisis sensoriales. ¿Qué ajuste razonable debe sugerir el orientador?",
        opciones: [
            "A) Obligar al estudiante a tolerar el timbre para que se acostumbre al mundo real.",
            "B) Sugerir el uso de audífonos canceladores de ruido y anticiparle visualmente cuándo va a sonar el timbre.",
            "C) Desconectar el timbre de toda la escuela para que no sufra.",
            "D) Dejarlo en la biblioteca todo el día."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 02-2016 y Diseño Universal para el Aprendizaje (DUA). Se deben proveer apoyos técnicos (audífonos) y estrategias de anticipación para mitigar barreras sensoriales."
    },
    {
        id: 21,
        categoria: "Convivencia",
        pregunta: "El director sorprende a un estudiante alterando las calificaciones en el registro de grado. Según las Normas de Convivencia, esta acción se tipifica como:",
        opciones: [
            "A) Falta Leve.",
            "B) Falta Grave.",
            "C) Falta Muy Grave.",
            "D) Un simple error de adolescencia."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Normas del Sistema Educativo Dominicano para la Convivencia Armoniosa. La alteración de documentos oficiales del centro educativo está tipificada explícitamente como una Falta Muy Grave."
    },
    {
        id: 22,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "Durante la evaluación diagnóstica inicial, el equipo de orientación detecta que el 60% de los estudiantes de 1er grado de secundaria tienen un fuerte rezago en lectoescritura. ¿Qué procede técnicamente?",
        opciones: [
            "A) Diseñar un plan de intervención psicopedagógica grupal en articulación con el equipo docente.",
            "B) Reprobar a todos los estudiantes de forma preventiva.",
            "C) Culpar a los maestros de primaria y enviar una queja al Distrito Educativo.",
            "D) Ignorar el dato, ya que Orientación solo atiende problemas de conducta."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Manual de Orientación. Los datos de la evaluación diagnóstica deben usarse para el diseño de planes de apoyo y nivelación integrados a la planificación docente."
    },
    {
        id: 23,
        categoria: "Familia",
        pregunta: "Un estudiante comete una falta grave y se cita a los padres para firmar un acta de compromiso. El padre se niega a firmar, mostrándose agresivo y validando la mala conducta de su hijo. ¿Qué debe hacer el centro?",
        opciones: [
            "A) Obligar al padre a firmar usando al guardia escolar.",
            "B) Expulsar definitivamente al estudiante al no contar con el apoyo familiar.",
            "C) Levantar un acta de comparecencia detallando la negativa del padre, firmada por testigos del centro, y notificar al Distrito Educativo o CONANI.",
            "D) Romper el acta y dejar el caso impune."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Protocolos del MINERD y Ley 136-03. La negativa del tutor no paraliza el proceso. Se documenta la falta de corresponsabilidad (acta con testigos) y se escala al nivel superior o de protección."
    },
    {
        id: 24,
        categoria: "Gestión/POA",
        pregunta: "En la estructura del MINERD, la Unidad de Orientación y Psicología rinde cuentas operativamente y entrega sus informes estadísticos de manera directa a:",
        opciones: [
            "A) La Asociación de Padres (APMAE).",
            "B) El equipo docente.",
            "C) El/la Director(a) del Centro Educativo.",
            "D) El Ministerio de Salud Pública."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Manual Operativo de Centro Público. El personal de Orientación pertenece al equipo de gestión y responde jerárquicamente a la dirección del centro, canalizando luego la información al técnico distrital."
    },
    {
        id: 25,
        categoria: "Convivencia",
        pregunta: "Un grupo de alumnos acorrala a un compañero, lo graba humillándolo, le quita el dinero de la merienda y difunde el video. ¿Qué medidas disciplinarias y de protección corresponden?",
        opciones: [
            "A) Diálogo mediado, suspensión temporal del grupo agresor por Falta Muy Grave y derivación de la víctima para apoyo psicológico.",
            "B) Castigo físico a los agresores según la gravedad del caso.",
            "C) Solo reportar a la policía y desvincular al centro del problema.",
            "D) Expulsar al agredido por dejarse quitar el dinero."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Normas de Convivencia y Protocolo de Acoso. El acoso agravado con extorsión y difusión (ciberacoso) es Falta Muy Grave. Conlleva suspensión, apoyo a la víctima y posible derivación al Ministerio Público (Policía Especializada NNA)."
    },
    {
        id: 26,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "El maestro de matemáticas se niega a realizar ajustes curriculares para un estudiante con discapacidad intelectual, alegando que 'el currículo nacional es uno solo y no se puede alterar'. ¿Qué principio legal le recuerda el orientador?",
        opciones: [
            "A) Principio de elitismo académico.",
            "B) Principio de Equidad e Inclusión, donde el currículo es flexible y adaptable a las características del estudiante.",
            "C) Principio de estandarización.",
            "D) El maestro tiene razón, no se puede alterar."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 66-97 y Ordenanza 02-2016. El currículo dominicano es abierto, flexible y participativo, permitiendo adecuaciones para garantizar el derecho a la educación de calidad para todos (Inclusión)."
    },
    {
        id: 27,
        categoria: "Familia",
        pregunta: "Una madre solicita al psicólogo escolar que le aplique una prueba de coeficiente intelectual (WISC) a su hija porque quiere saber 'si es superdotada' para presumirlo. ¿Cuál es la postura ética del psicólogo MINERD?",
        opciones: [
            "A) Aplicarla inmediatamente para complacer a la madre.",
            "B) Explicarle que el centro educativo solo evalúa con fines psicopedagógicos cuando hay indicadores de NEAE que afectan el aprendizaje, no por curiosidad.",
            "C) Cobrarle a la madre por hacer la prueba fuera de horario.",
            "D) Aplicar una prueba descargada de internet para salir del paso."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Orientación. El servicio público no tiene fines clínicos generales ni se aplica psicometría a petición sin justificación pedagógica fundamentada."
    },
    {
        id: 28,
        categoria: "Gestión/POA",
        pregunta: "Para garantizar el impacto de los programas de prevención (ej: prevención de embarazo o drogas), estos deben diseñarse preferiblemente basándose en:",
        opciones: [
            "A) Las fechas efemérides del calendario escolar exclusivamente.",
            "B) El Diagnóstico de Necesidades y Línea Base del Centro Educativo.",
            "C) Materiales comprados de editoriales privadas.",
            "D) Las opiniones personales del director."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Diseño de POA. Todo programa de orientación debe tener base empírica contextual, partiendo de un diagnóstico o línea base que identifique los riesgos reales de esa población."
    },
    {
        id: 29,
        categoria: "Convivencia",
        pregunta: "Durante una revisión rutinaria (operativo mochila), coordinada con la dirección escolar, se encuentra un arma blanca (cuchillo) en la mochila de un estudiante de secundaria. ¿Cuál es el protocolo?",
        opciones: [
            "A) Botar el cuchillo y no decirle a nadie.",
            "B) Devolverlo a la hora de salida con una advertencia.",
            "C) Decomiso, notificación a la familia, intervención de Policía Escolar por porte de armas y suspensión preventiva.",
            "D) Hacer que el estudiante corte frutas en el receso para darle un uso positivo."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Normas de Convivencia. El porte de armas blancas es una Falta Muy Grave y constituye un delito penal juvenil. Requiere activación inmediata de la Policía Escolar."
    },
    {
        id: 30,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "Un estudiante de 16 años cursa el 6to grado de primaria. Presenta desmotivación y conflictos por la diferencia de edad con sus compañeros (11 años). ¿A qué programa del MINERD debe ser referido?",
        opciones: [
            "A) Programa Nacional de Becas.",
            "B) PREPARA, al alcanzar la edad normativa para educación de adultos.",
            "C) Aceleración de aprendizajes (si aplica) o Educación de Jóvenes y Adultos.",
            "D) Programa de alimentación escolar."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Reglamentos de Evaluación. La condición descrita se llama 'Sobreedad severa'. Se gestionan programas de aceleración o el traspaso a subsistemas de adultos para preservar su autoestima y adecuación social."
    },
    {
        id: 31,
        categoria: "Familia",
        pregunta: "En una entrevista familiar, la madre admite que disciplina a su hijo con golpes usando cables y correas, argumentando que 'así se cría en este país'. ¿Qué rol asume el psicólogo?",
        opciones: [
            "A) Validar la cultura dominicana y apoyar el método.",
            "B) Realizar psicoeducación urgente sobre pautas de crianza positiva, advirtiendo sobre las consecuencias legales del maltrato, y notificar a la red de protección.",
            "C) Golpear a la madre para que vea lo que se siente.",
            "D) Denunciar a la madre de forma anónima en redes sociales."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 y Protocolos de Crianza Positiva. El maltrato físico no es justificable culturalmente. Se hace intervención psicoeducativa obligatoria, pero el deber de denunciar el abuso sigue activo si hay daño."
    },
    {
        id: 32,
        categoria: "Convivencia",
        pregunta: "Un docente reporta a Orientación que ha notado que un alumno siempre se aísla, llora sin motivo aparente y ha bajado drásticamente sus notas en el último mes. ¿Cuál es el primer paso del psicólogo?",
        opciones: [
            "A) Citar a los padres inmediatamente para referirlo a psiquiatría.",
            "B) Observar al estudiante en su entorno natural (aula, recreo) y realizar una entrevista de exploración inicial.",
            "C) Aplicar una batería de pruebas de personalidad.",
            "D) Diagnosticarlo con depresión infantil en el registro."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Proceso de Evaluación Psicopedagógica. Antes de citar o diagnosticar, se debe triangular información mediante observación estructurada y exploración clínica inicial en el contexto escolar."
    },
    {
        id: 33,
        categoria: "Gestión/POA",
        pregunta: "¿Cuál es el instrumento oficial donde el docente asienta los indicadores de logro de los estudiantes y que sirve de insumo clave para que Orientación detecte alertas académicas?",
        opciones: [
            "A) El Cuaderno anecdótico.",
            "B) El Registro de Grado.",
            "C) La Ficha de Inscripción.",
            "D) El Diseño Curricular."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 02-2016. El Registro de Grado es la herramienta oficial de evaluación continua. Sus informes de progreso son la fuente principal para derivar a apoyo psicopedagógico."
    },
    {
        id: 34,
        categoria: "Convivencia",
        pregunta: "Frente a un conflicto entre estudiantes, la 'Mediación Escolar' (Estrategia de Cultura de Paz) requiere fundamentalmente que:",
        opciones: [
            "A) El mediador (orientador o estudiante líder) imponga el castigo correspondiente.",
            "B) La participación de las partes en conflicto sea voluntaria y el mediador sea imparcial.",
            "C) Se invite a los padres para que defiendan a sus hijos.",
            "D) Se grabe en video para tener pruebas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Mediación de Conflictos MINERD. La mediación no es un juicio; es un proceso voluntario, confidencial e imparcial donde las partes buscan el acuerdo guiados por un tercero."
    },
    {
        id: 35,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "La profesora de lengua española solicita que la orientadora saque de su aula a un niño con Síndrome de Down de manera permanente porque 'atrasa al resto'. ¿Qué mandato legal se está violando directamente?",
        opciones: [
            "A) La Ley de Tránsito.",
            "B) El Estatuto del Docente y la Ley 66-97.",
            "C) La Ley 136-03 y la Política Nacional de Educación Inclusiva (Ordenanza 02-2016).",
            "D) El Reglamento Interno de la APMAE."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ordenanza 02-2016. Todo niño, independientemente de su condición, tiene derecho a permanecer en el aula regular, recibiendo los apoyos necesarios. La segregación está legalmente prohibida."
    },



    // BLOQUE 3: PREGUNTAS 36 A 60
    {
        id: 36,
        categoria: "Convivencia",
        pregunta: "Un docente castiga a un estudiante de 2do de secundaria poniéndolo de rodillas frente a la pizarra por interrumpir la clase. Al enterarse, ¿qué principio legal debe invocar el orientador para intervenir?",
        opciones: [
            "A) La autonomía del docente para manejar la disciplina en su aula.",
            "B) La prohibición absoluta de castigos corporales, tratos crueles y humillantes, según la Ley 136-03 y las Normas de Convivencia.",
            "C) El respeto a los mayores, justificando que el estudiante lo provocó.",
            "D) El derecho del estudiante a elegir su castigo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 (Art. 45). El Estado y los centros educativos prohíben explícitamente cualquier castigo físico o trato humillante. Es una vulneración de derechos que debe detenerse de inmediato y reportarse."
    },
    {
        id: 37,
        categoria: "Gestión/POA",
        pregunta: "Durante la elaboración del Proyecto Educativo de Centro (PEC), el equipo de gestión indica que Orientación y Psicología no debe participar, ya que su rol es solo atender estudiantes problemáticos. ¿Es esto correcto?",
        opciones: [
            "A) Sí, porque Orientación es un departamento clínico independiente.",
            "B) Sí, el PEC es responsabilidad exclusiva del director y el coordinador pedagógico.",
            "C) No, el psicólogo escolar es parte del Equipo de Gestión y debe articular su Plan Operativo Anual (POA) directamente con las metas del PEC.",
            "D) No, porque el psicólogo es quien debe redactar todo el PEC por sí solo."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Manual Operativo de Centro. Orientación y Psicología es un componente estratégico del Equipo de Gestión y su POA debe estar alineado y transversalizado en el PEC."
    },
    {
        id: 38,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "Un estudiante de secundaria presenta dificultades severas en la resolución de problemas matemáticos básicos, invierte los números y no comprende conceptos de cantidad, a pesar de tener un rendimiento normal en otras áreas. Esto es un indicador de:",
        opciones: [
            "A) Disgrafía.",
            "B) Discalculia (Trastorno Específico del Aprendizaje con dificultad en las matemáticas).",
            "C) Dislexia profunda.",
            "D) Retraso mental severo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal/Técnica: Criterios diagnósticos psicopedagógicos. La dificultad específica para el procesamiento numérico y el cálculo, aislando otras habilidades cognitivas, corresponde a la discalculia."
    },
    {
        id: 39,
        categoria: "Familia",
        pregunta: "El centro educativo exige el acta de nacimiento actualizada para inscribir a una niña. La madre, de escasos recursos, indica que no la tiene y que el proceso tardará meses. El director le niega la inscripción. ¿Qué establece la ley?",
        opciones: [
            "A) La niña no puede estudiar hasta que traiga el documento original.",
            "B) Se garantiza la matriculación provisional, protegiendo el derecho a la educación (Ley 136-03), y la escuela apoya a la familia en la gestión del documento.",
            "C) Se inscribe a la niña pero con un nombre falso temporal.",
            "D) Se manda a la niña a trabajar hasta que consiga el acta."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 y circulares del MINERD. La falta de documentación de identidad no es un impedimento para acceder al derecho fundamental a la educación. La inscripción es obligatoria mientras se regulariza el estatus."
    },
    {
        id: 40,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "¿Qué modelo pedagógico exige la Ordenanza 02-2016 que sea aplicado por los docentes para minimizar las barreras de aprendizaje antes de requerir una evaluación psicopedagógica individualizada?",
        opciones: [
            "A) El Conductismo Operante.",
            "B) El Diseño Universal para el Aprendizaje (DUA).",
            "C) El Modelo Clínico-Médico.",
            "D) La Educación Exclusiva."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 02-2016. El DUA promueve proporcionar múltiples formas de representación, expresión y compromiso en el aula regular para atender a la diversidad desde la planificación inicial."
    },
    {
        id: 41,
        categoria: "Convivencia",
        pregunta: "Durante una excursión escolar, varios estudiantes de 6to de secundaria son sorprendidos consumiendo bebidas alcohólicas. Según las Normas de Convivencia, el procedimiento a seguir es:",
        opciones: [
            "A) Dejarlos continuar en la excursión y hablarles al regresar.",
            "B) Retirarlos de la actividad, notificar de inmediato a los padres, aplicar suspensión según la gravedad (Falta Muy Grave) y referir a prevención.",
            "C) Obligarlos a tomar agua y ponerlos a limpiar el autobús.",
            "D) Cancelar la graduación de toda la promoción."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Normas de Convivencia. El consumo de sustancias prohibidas para menores en actividades oficiales del centro es una Falta Muy Grave que requiere cese inmediato de la conducta, notificación familiar y medida socioeducativa."
    },
    {
        id: 42,
        categoria: "Gestión/POA",
        pregunta: "El psicólogo escolar planifica dar 'terapia psicológica individual de 45 minutos semanales' a 15 estudiantes con depresión. ¿Es esta una función pertinente en el sistema educativo dominicano?",
        opciones: [
            "A) Sí, es la función principal de la plaza de psicología clínica en la escuela.",
            "B) No, el servicio de orientación escolar no es clínico. Debe brindar apoyo psicoeducativo, contención inicial y derivar los casos terapéuticos a Salud Pública o centros especializados.",
            "C) Sí, siempre y cuando los padres paguen una cuota de recuperación.",
            "D) No, porque los estudiantes con depresión no deben estar en la escuela."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Orientación y Psicología 2024. El rol en el centro es psicoeducativo y preventivo, no clínico-terapéutico. Se realiza intervención breve, acompañamiento pedagógico y derivación a redes de salud."
    },
    {
        id: 43,
        categoria: "Familia",
        pregunta: "La madre de un estudiante, quien tiene una orden de alejamiento contra el padre del niño por violencia de género, notifica a la escuela que el padre ha intentado ir a buscar al niño a la salida. ¿Qué debe hacer el centro?",
        opciones: [
            "A) Mantenerse neutral, ya que es el padre biológico y tiene derechos.",
            "B) Entregar el niño al padre si este trae un juguete o regalo.",
            "C) Acatar la orden judicial de protección, alertar a la Policía Escolar y no entregar al niño bajo ninguna circunstancia, notificando a la madre.",
            "D) Citar a ambos a la escuela para que arreglen sus problemas de pareja."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ley 24-97 y protocolos de seguridad escolar. El centro educativo está obligado a respetar las órdenes judiciales de protección. Entregar al menor viola el mandato legal y pone en riesgo su vida."
    },
    {
        id: 44,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "Se inscribe un estudiante con discapacidad visual (ceguera total). La maestra indica que no sabe Braille y solicita que lo saquen de su clase. ¿Cuál es el rol del equipo de Orientación y Psicología?",
        opciones: [
            "A) Darle la razón a la maestra y mandarlo a un centro de educación especial.",
            "B) Asesorar a la docente en adecuaciones de acceso (lectores de pantalla, materiales en alto relieve, audios) y gestionar el apoyo técnico a través de los Centros de Recursos para la Atención a la Diversidad (CAD).",
            "C) Que la orientadora le dé las clases de todas las materias en el departamento.",
            "D) Sugerir que el estudiante solo asista a la clase de educación física."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 02-2016. El estudiante pertenece al aula regular. El orientador articula con los CAD y acompaña al docente en las adaptaciones de acceso a la información (tiflotecnología, audios)."
    },
    {
        id: 45,
        categoria: "Convivencia",
        pregunta: "¿Cuál de las siguientes sanciones está ESTRÍCTAMENTE PROHIBIDA en las Normas del Sistema Educativo Dominicano para la Convivencia Armoniosa?",
        opciones: [
            "A) La suspensión temporal por un máximo de 5 días con asignación de tareas.",
            "B) Los trabajos de reparación del daño causado.",
            "C) La expulsión definitiva del sistema educativo (desescolarización total).",
            "D) Los diálogos reflexivos con compromiso firmado."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Normas de Convivencia y Ley 136-03. Ninguna medida disciplinaria puede significar la pérdida del derecho a la educación. Las expulsiones 'para la calle' están prohibidas; los traslados deben ser fundamentados y garantizando cupo."
    },
    {
        id: 46,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "Al aplicar una prueba de detección de estilos de aprendizaje, la orientadora nota que un grupo aprende mejor interactuando físicamente y manipulando objetos. El docente solo da clases magistrales dictadas. ¿Qué corresponde hacer?",
        opciones: [
            "A) Decirles a los alumnos que se esfuercen más en escuchar.",
            "B) Compartir los resultados con el docente y acompañarle en la diversificación de estrategias metodológicas (incorporar actividades kinestésicas).",
            "C) Ignorar la prueba porque el estilo magistral es el único oficial.",
            "D) Quejarse del maestro con la dirección inmediatamente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Orientación. El perfil psicopedagógico de los grupos es un insumo que el orientador devuelve a los docentes para la mejora de la práctica y la planificación (trabajo colaborativo)."
    },
    {
        id: 47,
        categoria: "Gestión/POA",
        pregunta: "Un orientador de nuevo ingreso decide publicar en sus redes sociales personales fotos de los estudiantes realizando dinámicas en su departamento, sin censurar los rostros, para mostrar 'su buen trabajo'. ¿Qué falta está cometiendo?",
        opciones: [
            "A) Ninguna, es una excelente estrategia de marketing educativo.",
            "B) Violación al derecho a la intimidad, propia imagen y confidencialidad de niños, niñas y adolescentes tipificada en la Ley 136-03.",
            "C) Falta leve de puntualidad.",
            "D) Violación de derechos de autor."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 y Código de Ética de CODOPSI. Está terminantemente prohibida la exposición pública o difusión de imágenes de NNA sin consentimiento explícito escrito de los padres, y menos en el contexto de intervenciones psicopedagógicas."
    },
    {
        id: 48,
        categoria: "Familia",
        pregunta: "Una adolescente solicita ayuda indicando que su familia la va a obligar a casarse y vivir con un hombre de 35 años por un acuerdo económico. ¿Qué mandato legal debe ejecutar la escuela?",
        opciones: [
            "A) Respetar las decisiones y la cultura de esa familia.",
            "B) Activar de urgencia el protocolo de protección, denunciando al Ministerio Público y CONANI, ya que el matrimonio infantil y las uniones tempranas son delitos penalizados en la República Dominicana.",
            "C) Llamar al hombre de 35 años para que firme un acta de compromiso en la escuela.",
            "D) Recomendarle a la adolescente métodos anticonceptivos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 1-21 (que prohíbe el matrimonio infantil en RD) y Ley 136-03. La escuela tiene el deber irrenunciable de denunciar las uniones tempranas forzadas, tipificadas como abuso y violación de derechos fundamentales."
    },
    {
        id: 49,
        categoria: "Convivencia",
        pregunta: "Dos estudiantes de 3er grado de primaria están jugando agresivamente (golpeándose de manera constante en los recreos), aunque ambos dicen que es 'jugando'. Un docente dice que son 'cosas de niños'. El orientador debe:",
        opciones: [
            "A) Estar de acuerdo con el docente y no intervenir.",
            "B) Intervenir para frenar la conducta, identificar factores de riesgo, realizar psicoeducación sobre límites y buen trato, e informar a las familias.",
            "C) Suspender a ambos niños por 10 días.",
            "D) Mandarlos a jugar fútbol para que se golpeen con la pelota."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Protocolos de Cultura de Paz. Los 'juegos bruscos' normalizados en la infancia temprana pueden ser antesala de violencia. La intervención oportuna, formativa y preventiva es el estándar."
    },
    {
        id: 50,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "En el proceso de Evaluación Psicopedagógica de un estudiante con sospecha de NEAE, el equipo interdisciplinario mínimo del centro educativo para realizar el levantamiento de información debe involucrar a:",
        opciones: [
            "A) Solamente al psicólogo escolar.",
            "B) El médico de la comunidad y el director.",
            "C) El docente, el orientador/psicólogo escolar y la familia (con apoyo del equipo de gestión).",
            "D) La secretaria del centro y el conserje."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ordenanza 02-2016. La evaluación psicopedagógica en el centro no es aislada ni exclusiva del psicólogo; es un proceso colaborativo que requiere la visión del docente (contexto áulico), Orientación (técnica) y Familia (contexto socio-familiar)."
    },
    {
        id: 51,
        categoria: "Gestión/POA",
        pregunta: "Una de las líneas de acción prioritarias en el POA de Orientación y Psicología en el nivel Secundario, según el currículo vigente, es:",
        opciones: [
            "A) Enseñar a los estudiantes a cocinar.",
            "B) El Programa de Orientación Vocacional y Transición a la Vida Adulta o Laboral.",
            "C) Realizar diagnósticos psiquiátricos masivos.",
            "D) Organizar las fiestas de graduación."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Diseño Curricular de Secundaria y Manual de Orientación. Acompañar el proyecto de vida y la toma de decisiones vocacionales/profesionales es una meta estatutaria del nivel secundario."
    },
    {
        id: 52,
        categoria: "Familia",
        pregunta: "El centro educativo determina que un estudiante necesita evaluación profunda por un CAD (Centro de Atención a la Diversidad). La familia se niega rotundamente a llevarlo por miedo a que lo 'etiqueten'. ¿Qué acción sigue?",
        opciones: [
            "A) Sensibilizar a la familia sobre los beneficios de la evaluación, documentar la negativa en acta y continuar ofreciendo las adecuaciones de acceso posibles dentro del aula regular.",
            "B) Expulsar al estudiante por falta de cooperación de los padres.",
            "C) Engañar a los padres, llevar al niño al CAD sin que se enteren.",
            "D) Quitarle todas las ayudas escolares hasta que los padres cedan."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Ordenanza 02-2016. Se respeta el proceso de la familia mediante sensibilización (no coerción), pero la escuela no puede paralizar su deber de ofrecer una educación accesible con los recursos internos disponibles."
    },
    {
        id: 53,
        categoria: "Convivencia",
        pregunta: "Un grupo de estudiantes vandaliza (pinta con spray y rompe) los baños del centro educativo. Según las Normas de Convivencia, la medida restaurativa más apropiada, además de la suspensión, es:",
        opciones: [
            "A) Darles una paliza ejemplar.",
            "B) Que paguen el doble de lo que cuesta el baño en efectivo a la dirección.",
            "C) Trabajo socioeducativo como participar en la limpieza y restauración del espacio físico dañado, involucrando a los padres.",
            "D) Que pidan perdón por el micrófono en el acto de la bandera."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Normas de Convivencia. El enfoque restaurativo exige que la medida disciplinaria tenga un carácter reparador del daño causado al bien común (limpiar/pintar lo vandalizado), fomentando la responsabilización."
    },
    {
        id: 54,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "Un docente pregunta al psicólogo escolar cómo manejar a un estudiante hiperactivo (TDAH) que termina rápido y empieza a molestar a los demás. Una estrategia de adecuación metodológica correcta es:",
        opciones: [
            "A) Sentarlo al final del aula, de cara a la pared.",
            "B) Asignarle tareas fragmentadas, roles activos (como repartir material) y permitirle descansos o 'tiempos fuera' acordados positivamente.",
            "C) Dejarlo salir al patio a jugar hasta que la clase termine.",
            "D) Multiplicarle por tres la cantidad de ejercicios para mantenerlo ocupado."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal/Técnica: Estrategias DUA y atención a la diversidad. Fragmentar tareas y canalizar la necesidad motora a través de roles útiles mejora la autorregulación sin castigar la condición neurobiológica del estudiante."
    },
    {
        id: 55,
        categoria: "Gestión/POA",
        pregunta: "Se ausenta la secretaria del centro educativo por una semana. El director instruye a la psicóloga escolar a sentarse en la recepción a responder el teléfono y recibir visitantes. ¿Qué debe argumentar la psicóloga?",
        opciones: [
            "A) Aceptar inmediatamente para mostrar disposición.",
            "B) Recordar amparada en sus funciones (Manual Operativo) que su rol es el apoyo psicosocial y pedagógico; asumir roles administrativos vulnera el derecho de atención a los estudiantes y la confidencialidad de su departamento.",
            "C) Aceptar, pero solo si le pagan horas extras.",
            "D) Renunciar al puesto inmediatamente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Funciones del cargo (Manual Operativo de Centro Público). Desviar al profesional de la psicología hacia tareas administrativas (recepción, digitación de notas) es una mala práctica que anula la ejecución de su POA."
    },
    {
        id: 56,
        categoria: "Familia",
        pregunta: "Un niño llega con moretones en la espalda y brazos. Al preguntarle, dice que su padre lo golpeó con un palo por no hacer la tarea. El protocolo oficial del MINERD indica que el centro debe:",
        opciones: [
            "A) Llamar al padre a la escuela para confrontarlo a solas.",
            "B) Esperar a ver si los golpes desaparecen en unos días.",
            "C) Informar al director, no confrontar al presunto agresor, y realizar la derivación/denuncia inmediata a Línea Vida o fiscalía de NNA, resguardando al menor.",
            "D) Curar al niño y decirle que se porte mejor para evitar castigos."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Hoja de Ruta para la prevención y atención a la violencia (MINERD/CONANI). Ante abuso físico evidente, confrontar al agresor pone en riesgo mayor a la víctima. Se activa el sistema de protección estatal directamente."
    },
    {
        id: 57,
        categoria: "Convivencia",
        pregunta: "Un estudiante llega tarde al centro educativo por tercera vez en la semana. La medida inmediata según las normativas vigentes NO debe ser:",
        opciones: [
            "A) Devolverlo a su casa perdiendo el día de clases.",
            "B) Permitir el ingreso, registrar la tardanza en el anecdotario e indagar la causa.",
            "C) Contactar a la familia para identificar obstáculos logísticos.",
            "D) Aplicar un llamado de atención verbal."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Normas de Convivencia y Ley 136-03. Devolver a un estudiante a su casa vulnera el derecho a la educación y lo expone a riesgos de calle. Las tardanzas (Faltas Leves) se manejan dentro del centro y con la familia."
    },
    {
        id: 58,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "El 'Plan de Apoyo a los Aprendizajes' que se diseña al finalizar el primer periodo (evaluación diagnóstica y formativa) es responsabilidad directa de:",
        opciones: [
            "A) El conserje del centro.",
            "B) El docente de la asignatura, en acompañamiento con Orientación y Psicología cuando se requieren diversificaciones metodológicas.",
            "C) Exclusivamente del departamento de psicología.",
            "D) La policía escolar."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza sobre el Sistema de Evaluación. La recuperación y apoyo a los aprendizajes es una responsabilidad docente ineludible, con el asesoramiento técnico del orientador en caso de barreras identificadas."
    },
    {
        id: 59,
        categoria: "Gestión/POA",
        pregunta: "El fortalecimiento de la 'Red de Apoyo Institucional' en el POA de Orientación se refiere a:",
        opciones: [
            "A) Comprar routers para mejorar el WiFi de la escuela.",
            "B) Crear lazos operativos formales con el centro de salud local, CONANI, Policía Escolar, fiscalía y juntas de vecinos para la derivación de casos.",
            "C) Crear grupos de WhatsApp con los docentes.",
            "D) Redes de pesca para actividades recreativas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Orientación. El trabajo comunitario y de articulación institucional es una línea estratégica clave. La escuela no resuelve todo sola, necesita un mapeo y vinculación con la red comunitaria de protección e intervención."
    },
    {
        id: 60,
        categoria: "Convivencia",
        pregunta: "Durante un operativo de la Policía Escolar se solicita que la psicóloga escolar requise (revise corporalmente e íntimamente) a una estudiante bajo sospecha de llevar sustancias. ¿Qué debe responder la psicóloga?",
        opciones: [
            "A) Hacer la revisión íntima porque ella es mujer y psicóloga.",
            "B) Negarse, ya que las revisiones corporales vulneran la intimidad, no son función de Orientación, y la inspección debe ceñirse estrictamente a las pertenencias (mochila) bajo el debido proceso legal.",
            "C) Obligar a la estudiante a que ella misma se quite la ropa.",
            "D) Grabar la requisa para tener pruebas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Protocolos de Seguridad y Ley 136-03 (Derecho a la integridad y dignidad). El personal docente/psicológico no tiene autoridad legal ni ética para realizar registros corporales invasivos a menores. Solo se revisan útiles escolares con testigos y causa probada."
    },


    // BLOQUE 4: PREGUNTAS 61 A 85
    {
        id: 61,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "Un estudiante de 1er grado con Mutismo Selectivo no habla con el docente ni sus compañeros, pero realiza todas las tareas escritas correctamente. El docente quiere reprobarlo por no participar oralmente. ¿Qué adecuación debe aplicarse?",
        opciones: [
            "A) Obligarlo a exponer frente a todos para que pierda el miedo.",
            "B) Aplicar una adecuación metodológica y de evaluación, permitiendo que su participación y evaluación sean exclusivamente escritas o mediante proyectos visuales.",
            "C) Suspenderlo hasta que un terapeuta certifique que ya puede hablar.",
            "D) Bajarle los puntos de participación a cero sin reprobarlo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 02-2016. El Mutismo Selectivo es una barrera emocional/ansiosa. Evaluar oralmente a un niño con esta condición es punitivo. Se debe diversificar el instrumento de evaluación asegurando que demuestre la competencia por otras vías (DUA)."
    },
    {
        id: 62,
        categoria: "Convivencia",
        pregunta: "Una estudiante denuncia que un grupo de compañeras la excluye, se burlan de su aspecto y le esconden la mochila a diario. El maestro guía responde: 'Eso es normal a esa edad, no le hagas caso y ya se cansarán'. ¿Qué error técnico y legal comete el maestro?",
        opciones: [
            "A) Ninguno, la resiliencia se desarrolla enfrentando problemas.",
            "B) Omisión de socorro escolar ante indicadores claros de acoso escolar (Bullying), lo cual constituye una Falta Grave del personal docente al no activar el protocolo de protección.",
            "C) Error de diagnóstico, ya que debió referir a la niña a psiquiatría.",
            "D) Error administrativo por no cobrarles una multa a las acosadoras."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Protocolo de actuación ante situaciones de acoso escolar en los centros educativos. El acoso nunca debe normalizarse o minimizarse como 'cosas de la edad'. La omisión del docente vulnera el derecho a un entorno seguro."
    },
    {
        id: 63,
        categoria: "Gestión/POA",
        pregunta: "Según el Manual de Orientación y Psicología, el proceso de Evaluación del Plan Operativo Anual (POA) de la Unidad debe realizarse:",
        opciones: [
            "A) Únicamente al final del año escolar.",
            "B) De forma continua, sistemática y mediante informes mensuales que permitan reorientar las acciones si es necesario.",
            "C) Cada 5 años cuando cambien las autoridades.",
            "D) Solo si lo solicita el Distrito Educativo de sorpresa."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Orientación y Psicología 2024. La planificación no es estática. Se requiere un monitoreo continuo (rendición de cuentas mensual) para evaluar el impacto de las intervenciones y ajustar cronogramas."
    },
    {
        id: 64,
        categoria: "Familia",
        pregunta: "El psicólogo escolar detecta que una adolescente se está autolesionando por ideación suicida. Al citar a los padres, estos minimizan el hecho diciendo que es 'para llamar la atención' y se niegan a llevarla a salud mental. ¿Qué paso sigue?",
        opciones: [
            "A) Respetar la decisión de los padres, ya que tienen la patria potestad.",
            "B) Activar la ruta de protección de derechos, notificando a CONANI y al Ministerio Público por negligencia médica/psicológica grave que atenta contra la vida del menor.",
            "C) Darle pastillas antidepresivas a la niña en la escuela a escondidas.",
            "D) Hacerle prometer a la niña que no lo volverá a hacer."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 y Protocolo de Salud Mental. La negativa de los padres a buscar atención psiquiátrica de urgencia ante un riesgo de vida inminente constituye negligencia severa. El Estado interviene en protección del menor."
    },
    {
        id: 65,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "Se aprueba una Adecuación Curricular Significativa (ACS) para un estudiante con Discapacidad Intelectual Moderada en 4to grado. Al final del periodo, ¿con base en qué criterios se le debe calificar?",
        opciones: [
            "A) Con los mismos criterios y competencias del currículo regular de 4to grado.",
            "B) Con los criterios establecidos de forma individualizada en su Plan de Adecuación Curricular (PAC), reconociendo sus propios avances.",
            "C) No se le califica, solo se le promueve automáticamente.",
            "D) Se le califica con el currículo de 1er grado oficial."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 02-2016 y Normativa de Evaluación. Cuando un estudiante requiere Adecuaciones Significativas (cambio o eliminación de competencias del grado), se le evalúa y promueve en base a las metas trazadas en su propio PAC, no compitiendo con el estándar del grado."
    },
    {
        id: 66,
        categoria: "Convivencia",
        pregunta: "Una maestra encuentra el diario íntimo de una alumna, lo lee frente a toda la clase para 'dar una lección de moral' porque encontró lenguaje soez. ¿Qué derecho constitucional e institucional vulneró la docente?",
        opciones: [
            "A) Derecho a la educación pública.",
            "B) Derecho a la libre asociación.",
            "C) Derecho a la intimidad, al honor y a la reputación, protegido por la Ley 136-03.",
            "D) Ninguno, en la escuela la maestra tiene autoridad absoluta sobre las pertenencias."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ley 136-03 (Art. 18). Los niños, niñas y adolescentes tienen derecho a la intimidad personal y familiar. Leer correspondencia o diarios privados frente a terceros es un abuso de poder y trato humillante."
    },
    {
        id: 67,
        categoria: "Gestión/POA",
        pregunta: "Dentro de la estructura de participación escolar, ¿cuál es el rol del profesional de Orientación y Psicología respecto a los Consejos de Curso y Comités Estudiantiles?",
        opciones: [
            "A) Elegir directamente a los líderes estudiantiles.",
            "B) Asesorar, acompañar y formar en liderazgo, cultura de paz y resolución de conflictos a los estudiantes electos.",
            "C) Prohibir los Consejos de Curso porque causan desorden.",
            "D) Ser el presidente del Consejo de Curso en todos los grados."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 03-2019 (Reglamentos Estudiantiles). Orientación asesora la conformación de organismos de participación estudiantil, brindando herramientas socioemocionales, mediación y liderazgo democrático."
    },
    {
        id: 68,
        categoria: "Familia",
        pregunta: "Un estudiante de 8 años confiesa a la orientadora que, cuando se porta mal, su abuela (tutora legal) lo encierra en una habitación oscura por horas sin comida. ¿Cómo se tipifica este acto según la normativa dominicana?",
        opciones: [
            "A) Medida disciplinaria severa pero legal en el hogar.",
            "B) Privación de libertad y maltrato infantil continuado, requiriendo denuncia inmediata a las autoridades competentes.",
            "C) Trastorno de ansiedad infantil.",
            "D) Adecuación conductual casera."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 (Protección contra el abuso). El encierro forzado y la privación de alimentos son tipificados penalmente como maltrato y tortura infantil, activando inmediatamente el protocolo de denuncia (Línea Vida)."
    },
    {
        id: 69,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "Un adolescente de 3ero de secundaria tiene diagnóstico formal de Disgrafía y Disortografía severa. El profesor de Sociales le resta 10 puntos en cada trabajo por faltas ortográficas. ¿Es esto correcto según las normativas inclusivas?",
        opciones: [
            "A) Sí, para que aprenda a escribir bien.",
            "B) Sí, la ortografía es innegociable en el currículo dominicano.",
            "C) No, penalizar errores ortográficos asociados a una NEAE diagnosticada es una práctica excluyente; se debe evaluar el contenido y competencia, permitiendo herramientas compensatorias (ej. corrector digital).",
            "D) No, el profesor de Sociales no evalúa ortografía."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ordenanza 02-2016. Castigar un síntoma directo de un Trastorno del Aprendizaje viola el principio de equidad. Se debe ofrecer la adecuación metodológica (uso de laptop, procesador de texto) y evaluar la competencia histórica o social, no el déficit."
    },
    {
        id: 70,
        categoria: "Convivencia",
        pregunta: "Dos estudiantes se pelean a golpes a tres cuadras del liceo, usando el uniforme escolar, y el video se viraliza. ¿Tiene competencia el centro educativo para aplicar medidas disciplinarias?",
        opciones: [
            "A) No, porque ocurrió fuera del recinto escolar físico.",
            "B) Sí, porque portan el uniforme institucional, afectando la imagen del centro y la convivencia de la comunidad educativa, tipificándose como Falta Grave o Muy Grave.",
            "C) No, eso es competencia exclusiva de la Policía Nacional.",
            "D) Sí, pero solo se les puede llamar la atención en privado sin sanción."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Normas de Convivencia MINERD. El uso del uniforme y la afectación directa del clima escolar extienden la jurisdicción disciplinaria y formativa del centro educativo ante incidentes en las inmediaciones o redes sociales."
    },
    {
        id: 71,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "La dirección del centro le pide al psicólogo escolar que emita una carta obligando a los padres de un niño muy inquieto a medicarlo con Ritalina para dejarlo entrar al aula. ¿Cuál es la postura ética y legal correcta?",
        opciones: [
            "A) Redactar la carta, ya que la disciplina del centro es prioridad.",
            "B) Explicar que el centro educativo no prescribe medicamentos, no diagnostica clínicamente, ni puede condicionar el derecho a la educación a un tratamiento farmacológico.",
            "C) Darle remedios naturales al niño en el departamento.",
            "D) Obligar a los padres verbalmente sin dejar rastro escrito."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ética profesional y Ley 136-03. Condicionar el acceso a la educación a la medicación es discriminatorio y una exclusión ilegal. La indicación farmacológica es competencia exclusiva y soberana del médico especialista (psiquiatra/neurólogo) y la familia."
    },
    {
        id: 72,
        categoria: "Gestión/POA",
        pregunta: "Para prevenir los conflictos violentos de manera sistemática, el Manual de Orientación establece que las Unidades deben conformar y capacitar a un grupo de estudiantes líderes para que funjan como:",
        opciones: [
            "A) Espías o informantes del director.",
            "B) Red de Mediadores Escolares Pares.",
            "C) Policías escolares juveniles.",
            "D) Jueces de un tribunal de disciplina estudiantil."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Estrategia de Cultura de Paz y Mediación Escolar. El programa de mediación entre pares entrena a los alumnos para facilitar diálogos y resolver conflictos leves de manera pacífica entre sus iguales, guiados por orientación."
    },
    {
        id: 73,
        categoria: "Familia",
        pregunta: "Una adolescente de 17 años que está embarazada y convive con su pareja (menor emancipado de hecho) acude a inscribir a su hijo recién nacido en la estancia infantil escolar y a firmar sus propias notas. ¿Se le permite?",
        opciones: [
            "A) No, debe venir su padre o madre hasta que cumpla los 18.",
            "B) Sí, la condición de madre/padre adolescente y la vida independiente les otorga emancipación de hecho para las decisiones sobre su educación y la de sus hijos.",
            "C) No, los menores embarazados pierden sus derechos civiles.",
            "D) Solo si la directora la autoriza."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03. Los adolescentes madres/padres tienen el derecho y la responsabilidad de representar a sus hijos, y al vivir de forma independiente asumen representatividad sobre sus propios procesos escolares."
    },
    {
        id: 74,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "Un estudiante de 8 años con TEA (Trastorno del Espectro Autista) tiende a huir del aula ('fuga') ante cambios imprevistos en la rutina. ¿Cuál es la estrategia psicopedagógica preventiva más efectiva?",
        opciones: [
            "A) Cerrar la puerta del aula con llave para que no escape.",
            "B) Castigarlo severamente si se levanta de la silla.",
            "C) Uso de agendas visuales/pictogramas, estructuración del tiempo y anticipación clara de los cambios de rutina o transiciones.",
            "D) Ignorar la conducta, ya que es parte de su autismo."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal/Técnica: Adecuaciones de Acceso (Ordenanza 02-2016). Las personas con TEA requieren estructuración y predictibilidad. La anticipación visual y verbal de las transiciones reduce la ansiedad severa que provoca la conducta de fuga."
    },
    {
        id: 75,
        categoria: "Convivencia",
        pregunta: "Desaparece un teléfono celular dentro del aula. La docente cierra la puerta y amenaza con revisar la ropa interior de todos los estudiantes si no aparece. ¿Qué acción corresponde al orientador?",
        opciones: [
            "A) Ayudar a la docente a hacer la revisión más rápido.",
            "B) Intervenir de inmediato para detener el proceso, recordando que los cateos corporales son ilegales y violan la dignidad e integridad (Ley 136-03), y aplicar el protocolo de mediación e investigación sin coerción.",
            "C) Llamar a la prensa.",
            "D) Decirle al estudiante al que le robaron que no traiga cosas de valor."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Normas de Convivencia y Constitución de la República. Las requisas corporales forzadas o vejatorias en escuelas son ilegales. El hurto (Falta Grave) se investiga mediante entrevistas, resguardando los derechos fundamentales."
    },
    {
        id: 76,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "Falso o Verdadero: Según la normativa de Inclusión (Ordenanza 02-2016), los estudiantes con Altas Capacidades Intelectuales (Superdotación) NO presentan Necesidades Específicas de Apoyo Educativo (NEAE) porque ya son muy inteligentes.",
        opciones: [
            "A) Verdadero, las NEAE son solo para estudiantes con déficit.",
            "B) Falso, la sobredotación es una NEAE que requiere de programas de enriquecimiento curricular, ya que el currículo estándar les genera barreras de desmotivación y posible deserción.",
            "C) Verdadero, solo necesitan que se les ponga a dar clases.",
            "D) Falso, porque necesitan medicación."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 02-2016. La excepcionalidad superior (altas capacidades) está tipificada formalmente como una condición NEAE que exige respuesta educativa especializada (flexibilización y enriquecimiento)."
    },
    {
        id: 77,
        categoria: "Gestión/POA",
        pregunta: "El equipo de gestión decide realizar una reunión abierta con los docentes donde analizan en voz alta los historiales de abuso sexual de los estudiantes para 'tenerles pena'. ¿Qué principio ético y legal se violó?",
        opciones: [
            "A) Principio de Solidaridad.",
            "B) El Principio del Interés Superior del Niño y el deber de estricta Confidencialidad y protección de datos sensibles (Ley 136-03).",
            "C) No se violó nada, los maestros deben saberlo todo.",
            "D) Principio de Calidad Educativa."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 y Ética CODOPSI. La divulgación de antecedentes de abuso (revictimización institucional) es una falta ética grave. Solo se comparten informaciones estrictamente necesarias para el manejo en aula, bajo anonimato de los detalles traumáticos."
    },
    {
        id: 78,
        categoria: "Familia",
        pregunta: "En la primera semana de adaptación del Nivel Inicial, una niña llora desconsoladamente al separarse de su madre. La maestra ordena a la madre irse corriendo a escondidas para que la niña no la vea. Según las prácticas recomendadas por MINERD:",
        opciones: [
            "A) Es la técnica correcta para evitar apego.",
            "B) Es una práctica dañina; la transición debe ser gradual, permitiendo despedidas afectuosas, tiempos reducidos progresivos y presencia de la familia si es necesario, generando seguridad.",
            "C) Se debe castigar a la niña por no madurar.",
            "D) Se le debe dar un calmante a la niña."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal/Pedagógica: Diseño Curricular del Nivel Inicial y Guía de Adaptación. Huir a escondidas genera ansiedad de abandono traumática. El proceso de adaptación exige rutinas de transición seguras, predecibles y de vinculación positiva."
    },
    {
        id: 79,
        categoria: "Convivencia",
        pregunta: "Se detecta que un estudiante de primaria de 10 años está mostrando imágenes pornográficas explícitas en su tableta a otros niños. El protocolo MINERD para este caso estipula:",
        opciones: [
            "A) Retener el dispositivo, informar de inmediato a la familia, derivar a evaluación psicosocial (indicador de posible vulneración de derechos/abuso en el entorno) y aplicar medida formativa.",
            "B) Romper la tableta frente a todos.",
            "C) Expulsarlo definitivamente por corromper menores.",
            "D) Dejarlo pasar porque en internet se ve de todo."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Normas de Convivencia y Protocolo de Protección. El consumo y distribución de pornografía infantil/adulta a esa edad no es solo una falta disciplinaria, es una alerta roja (bandera) de que el menor podría estar siendo víctima de exposición a material nocivo o abuso en su hogar."
    },
    {
        id: 80,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "Una estudiante con baja visión severa (no ceguera total) es inscrita en el centro. El ajuste razonable de acceso más básico e inmediato que el orientador debe pautar con el docente es:",
        opciones: [
            "A) Enviarla al área de Orientación todos los días.",
            "B) Ubicación preferencial cerca de la pizarra, uso de macrotipos (letras ampliadas), buena iluminación y verbalización de todo lo que se escribe en el pizarrón.",
            "C) Que aprenda Braille de forma obligatoria.",
            "D) Eximirla de leer y escribir."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal/Técnica: DUA y Ordenanza 02-2016 (Adecuaciones de Acceso). Las modificaciones ambientales (luz, ubicación) y de formato (letra grande) son el primer nivel de intervención para garantizar la participación autónoma sin mermar la exigencia académica."
    },
    {
        id: 81,
        categoria: "Convivencia",
        pregunta: "En el marco de la Disciplina Positiva, los 'Círculos Restaurativos' tienen como finalidad principal:",
        opciones: [
            "A) Que el infractor sea avergonzado públicamente.",
            "B) Que todos se sienten en círculo a rezar.",
            "C) Construir comunidad y responder al conflicto reuniendo a los afectados para expresar cómo se sintieron y acordar conjuntamente cómo reparar el daño.",
            "D) Obligar a los estudiantes a memorizar las leyes."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Estrategias de Cultura de Paz y Buen Trato MINERD. El modelo de justicia restaurativa utiliza los círculos para fomentar empatía, responsabilidad y resarcir el tejido social roto por la falta disciplinaria."
    },
    {
        id: 82,
        categoria: "Gestión/POA",
        pregunta: "Al finalizar el 6to grado de primaria, la Unidad de Orientación desarrolla actividades para preparar emocional y académicamente a los estudiantes hacia el 1er grado de secundaria. ¿Cómo se llama este proceso clave del POA?",
        opciones: [
            "A) Graduación de octavo.",
            "B) Acompañamiento a la Transición de Nivel o Ciclo.",
            "C) Exámenes de Admisión.",
            "D) Diagnóstico Clínico de Salida."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Orientación. Los programas de transición (tanto de Inicial a Primaria, como de Primaria a Secundaria) son responsabilidad del orientador para mitigar la deserción, el estrés adaptativo y el rezago académico producto de los cambios de sistema."
    },
    {
        id: 83,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "El diagnóstico de disfasia en un niño impacta directamente en su capacidad de:",
        opciones: [
            "A) Caminar correctamente.",
            "B) Comprensión y expresión del lenguaje hablado (Trastorno específico del desarrollo del lenguaje).",
            "C) Ver la pizarra a larga distancia.",
            "D) Entender conceptos matemáticos complejos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal/Técnica: Perfiles de NEAE. La disfasia o Trastorno Específico del Lenguaje (TEL) afecta la estructuración, comprensión y expresión lingüística, requiriendo apoyos directos en el área de comunicación y acompañamiento fonoaudiológico."
    },
    {
        id: 84,
        categoria: "Familia",
        pregunta: "Un estudiante revela incidentalmente que un vecino lo tocó de forma indebida. La orientadora lo lleva a su departamento e inicia un interrogatorio profundo con 20 preguntas directas sobre el evento para 'estar segura antes de denunciar'. ¿Cuál es el error técnico gravísimo?",
        opciones: [
            "A) No haber invitado a la directora al interrogatorio.",
            "B) Realizar preguntas sugestivas e insistentes que provocan revictimización traumática y pueden invalidar el testimonio legalmente. El protocolo exige escuchar sin interrumpir ni interrogar, y derivar a CONANI/Ministerio Público.",
            "C) No haber llamado al vecino acusado.",
            "D) Ningún error, la orientadora debe investigar a fondo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Protocolo ante presunción de abuso sexual MINERD/CONANI. El personal escolar tiene estrictamente prohibido investigar o interrogar pericialmente. Solo se acoge el develamiento (escucha empática y pasiva) y se denuncia, evitando la revictimización."
    },
    {
        id: 85,
        categoria: "Convivencia",
        pregunta: "El equipo docente nota que varios alumnos portan collares idénticos de ciertos colores, utilizan saludos corporales específicos codificados y marcan el baño con símbolos y un 'número'. Estos son indicadores de alerta de:",
        opciones: [
            "A) Una nueva tendencia de TikTok inofensiva.",
            "B) Presencia e infiltración de pandillas o bandas juveniles (asociación ilícita) en el centro educativo.",
            "C) Un club de lectura secreto.",
            "D) Alumnos superdotados jugando."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Protocolos de Seguridad Escolar y Prevención de Violencia. La exhibición de códigos visuales, territoriales (grafitis) y de indumentaria coordinada son banderas rojas de la presencia de pandillas, requiriendo prevención y articulación con Policía Escolar Comunitaria."
    },


    // BLOQUE 5: PREGUNTAS 86 A 100 (CIERRE)
    {
        id: 86,
        categoria: "Ética Profesional",
        pregunta: "Un psicólogo escolar recibe un regalo costoso (una laptop de última generación) de parte de un padre para 'agradecerle' que su hijo haya pasado de grado tras un proceso de recuperación. Según el Código de Ética y el Estatuto Docente, el profesional debe:",
        opciones: [
            "A) Aceptar el regalo discretamente sin que el director se entere.",
            "B) Rechazar amablemente el regalo, explicando que su labor es un deber profesional remunerado por el Estado y que aceptar dádivas compromete su integridad y objetividad.",
            "C) Aceptarlo y rifarlo entre los estudiantes del curso.",
            "D) Pedirle al padre que mejor le dé el dinero en efectivo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Estatuto del Docente y Código de Ética de CODOPSI. El personal educativo tiene prohibido solicitar o aceptar recompensas, regalos o beneficios por el cumplimiento de sus funciones oficiales (conflicto de intereses)."
    },
    {
        id: 87,
        categoria: "Gestión/POA",
        pregunta: "La 'Estrategia de Cultura de Paz' en los centros educativos dominicanos se fundamenta principalmente en:",
        opciones: [
            "A) El aumento de la vigilancia policial y las cámaras de seguridad.",
            "B) El desarrollo de competencias emocionales, la mediación de conflictos y la promoción del buen trato y los derechos humanos.",
            "C) La aplicación de reglamentos de disciplina cada vez más rígidos y punitivos.",
            "D) Prohibir que los estudiantes hablen durante el recreo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Lineamientos de Orientación y Psicología. La cultura de paz no es ausencia de conflicto, sino la capacidad de gestionarlos mediante el diálogo, la empatía y la resolución no violenta."
    },
    {
        id: 88,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "Al realizar una observación de aula, la orientadora nota que el docente utiliza un lenguaje despectivo con los estudiantes que tienen dificultades, llamándolos 'brutos' o 'perezosos'. ¿Cuál es la acción inmediata correcta?",
        opciones: [
            "A) Gritarle al docente frente a los alumnos para defenderlos.",
            "B) Realizar un acompañamiento reflexivo individual con el docente, recordándole las Normas de Convivencia y el impacto del clima afectivo en el aprendizaje, y reportar a la dirección.",
            "C) No intervenir, pues cada maestro tiene su estilo de enseñanza.",
            "D) Decirle a los estudiantes que ignoren al maestro."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Estatuto del Docente y Normas de Convivencia. El maltrato verbal por parte del personal es una falta ética y administrativa. El orientador debe asesorar al docente hacia prácticas de respeto y disciplina positiva."
    },
    {
        id: 89,
        categoria: "Familia",
        pregunta: "La Ordenanza 02-2019 establece la conformación de las 'Escuelas de Padres y Madres'. ¿Cuál es el objetivo principal de este espacio coordinado por Orientación?",
        opciones: [
            "A) Cobrar las cuotas mensuales para el mantenimiento del centro.",
            "B) Fortalecer las competencias parentales y la corresponsabilidad de las familias en el proceso formativo de sus hijos.",
            "C) Que los padres vigilen a los maestros durante las clases.",
            "D) Organizar únicamente las fiestas de fin de año."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 02-2019 y Ley 66-97. La Escuela de Padres es un espacio de formación sistemática para que la familia se involucre activamente en el apoyo académico y emocional desde el hogar."
    },
    {
        id: 90,
        categoria: "Convivencia",
        pregunta: "Un estudiante de secundaria es sorprendido fumando vape (cigarrillo electrónico) en el baño. Esta acción se clasifica según las normas vigentes como:",
        opciones: [
            "A) Falta Leve.",
            "B) Falta Grave.",
            "C) Falta Muy Grave.",
            "D) Acción permitida si el vape no tiene nicotina."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Normas del Sistema Educativo Dominicano para la Convivencia Armoniosa. El consumo de tabaco o sustancias similares (vapeo) dentro de instituciones educativas es una Falta Muy Grave por el riesgo a la salud propia y ajena."
    },
    {
        id: 91,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "En el Diseño Curricular Dominicano, las 'Competencias Fundamentales' son transversales a todas las áreas. ¿Cuál de ellas es responsabilidad directa y prioritaria del área de Orientación y Psicología?",
        opciones: [
            "A) Competencia Ética y Ciudadana, y Competencia de Desarrollo Personal y Espiritual.",
            "B) Competencia Científica y Tecnológica.",
            "C) Competencia Comunicativa en lenguas extranjeras.",
            "D) Competencia de Pensamiento Lógico en matemáticas."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Diseño Curricular Nivel Primario/Secundario. Aunque todas las áreas las trabajan, Orientación lidera el fortalecimiento del autoconocimiento, la autoestima y los valores éticos-sociales."
    },
    {
        id: 92,
        categoria: "Gestión/POA",
        pregunta: "Si un psicólogo escolar nota indicadores de agotamiento extremo (Burnout), pérdida de empatía y estrés crónico que afectan su labor, ¿qué principio de autocuidado ético debe aplicar?",
        opciones: [
            "A) Seguir trabajando sin decir nada para que no lo cancelen.",
            "B) Solicitar supervisión técnica, buscar apoyo profesional externo y notificar a su superior para gestionar un plan de bienestar laboral.",
            "C) Faltar al trabajo todos los lunes sin permiso.",
            "D) Desquitarse con los estudiantes más ruidosos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal/Ética: Código de Ética de CODOPSI. El profesional de la salud mental tiene la responsabilidad ética de velar por su propia salud para no perjudicar a sus usuarios y garantizar la calidad del servicio."
    },
    {
        id: 93,
        categoria: "Convivencia",
        pregunta: "Falso o Verdadero: El centro educativo puede prohibir la entrada a un estudiante por tener el pelo largo o un peinado afro, alegando 'higiene o disciplina'.",
        opciones: [
            "A) Verdadero, las normas internas de cada centro están por encima de todo.",
            "B) Falso, es una práctica discriminatoria que viola el derecho a la educación, la identidad personal y el libre desarrollo de la personalidad (Constitución Dominicana).",
            "C) Verdadero, solo si es un colegio privado.",
            "D) Falso, pero solo si el estudiante es excelente académicamente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Constitución de la República y circulares del MINERD. El aspecto físico (pelo, peinados) no puede ser barrera para el acceso a la educación. La higiene no depende del largo o forma del cabello."
    },
    {
        id: 94,
        categoria: "Familia",
        pregunta: "Ante un caso de divorcio conflictivo, uno de los padres se presenta a la escuela y exige que NO se le dé ninguna información escolar al otro padre. ¿Cómo debe proceder la Unidad de Orientación?",
        opciones: [
            "A) Obedecer al primer padre que dio la orden.",
            "B) Informar que, mientras no exista una sentencia judicial que prive de la autoridad parental (patria potestad) a uno de ellos, ambos tienen derecho legal a recibir información sobre el progreso de su hijo.",
            "C) No darle información a ninguno de los dos para evitar líos.",
            "D) Cobrarle a ambos por cada boletín de notas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Código Civil y Ley 136-03. La patria potestad es compartida. Solo un juez puede suspender el derecho de un padre/madre a estar informado sobre la vida escolar de su hijo."
    },
    {
        id: 95,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "Un niño de 3er grado de primaria aún no sabe leer ni escribir oraciones simples. El equipo de orientación debe priorizar:",
        opciones: [
            "A) Mandarlo a repetir el grado inmediatamente.",
            "B) Realizar una evaluación psicopedagógica completa para identificar si existe un Trastorno del Aprendizaje o si es un problema de mediación pedagógica (rezago).",
            "C) Ignorarlo, ya que cada niño tiene su ritmo y aprenderá solo a los 12 años.",
            "D) Decirle a la madre que lo ponga a trabajar."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 02-2016. La falta de adquisición de la lectoescritura en el primer ciclo es una alerta roja que exige intervención diagnóstica y apoyo inmediato para evitar el fracaso escolar."
    },
    {
        id: 96,
        categoria: "Gestión/POA",
        pregunta: "El 'Calendario Escolar' dominicano es un documento oficial que el orientador debe usar para:",
        opciones: [
            "A) Saber cuáles días no hay que ir a trabajar.",
            "B) Planificar las actividades de prevención, efemérides socioemocionales y periodos de evaluación en el POA.",
            "C) Anotar sus compromisos personales.",
            "D) Usarlo como cuaderno de notas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Resolución anual del MINERD. El calendario es la guía obligatoria de cumplimiento para la organización del tiempo docente y las actividades de apoyo psicopedagógico."
    },
    {
        id: 97,
        categoria: "Convivencia",
        pregunta: "El uso de la mediación de conflictos NO es recomendable cuando existe:",
        opciones: [
            "A) Un desacuerdo por un préstamo de un lápiz.",
            "B) Una situación de abuso sexual o violencia física grave con desequilibrio de poder evidente.",
            "C) Una discusión por un turno en la fila del almuerzo.",
            "D) Una diferencia de opiniones sobre un juego."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Protocolos de Mediación. La mediación requiere igualdad de condiciones entre las partes. En casos de delitos (abuso sexual, agresiones físicas graves), no se media; se aplica la ley y la protección."
    },
    {
        id: 98,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "¿Qué organismo del MINERD se encarga de dar apoyo técnico directo a las escuelas para la atención de estudiantes con discapacidad, cuando el centro ya agotó sus recursos internos?",
        opciones: [
            "A) La Policía Escolar.",
            "B) Los CAD (Centros de Atención a la Diversidad).",
            "C) El Banco Central.",
            "D) La Junta de Vecinos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 02-2016. Los CAD son las instancias externas de apoyo que colaboran en la evaluación profunda y pautas de adecuación para estudiantes con discapacidad o NEAE complejas."
    },
    {
        id: 99,
        categoria: "Ética Profesional",
        pregunta: "Un docente le pide al psicólogo que le pase el test de personalidad de un alumno para leerlo en la sala de profesores. El psicólogo debe:",
        opciones: [
            "A) Prestárselo de inmediato para llevarse bien con el colega.",
            "B) Negarse, explicando que los protocolos de evaluación son confidenciales y solo se comparte con el docente el informe de recomendaciones pedagógicas derivadas de los resultados.",
            "C) Cobrarle por el préstamo del test.",
            "D) Publicar el test en el mural de la escuela."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ética profesional (CODOPSI) y Manual de Orientación. Los materiales brutos (tests, dibujos, notas de sesiones) son confidenciales. Al docente solo se le entregan las pautas de manejo y resultados interpretados que le ayuden en el aula."
    },
    {
        id: 100,
        categoria: "Marco Legal",
        pregunta: "La Ley General de Educación de la República Dominicana es la:",
        opciones: [
            "A) Ley 136-03.",
            "B) Ley 66-97.",
            "C) Ley 87-01.",
            "D) Ley 41-08."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Es el cimiento de todo el sistema educativo nacional. La 66-97 garantiza el derecho de todos los habitantes a la educación."
    },

    {
        id: 101,
        categoria: "Ética Profesional",
        pregunta: "Un orientador recibe un obsequio costoso de parte de los padres de un estudiante poco antes de la entrega de informes de evaluación. Según el Código de Ética (Orden Departamental 22-2023), usted debe:",
        opciones: [
            "A) Aceptar el regalo para no ofender la amabilidad de la familia.",
            "B) Rechazar el regalo cortésmente, ya que el personal educativo tiene prohibido recibir dádivas que comprometan su imparcialidad.",
            "C) Aceptarlo y donarlo a la dirección del centro educativo.",
            "D) Recibirlo solo si el estudiante tiene excelentes calificaciones."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. El Código de Ética prohíbe al personal docente y administrativo aceptar regalos o beneficios que puedan interpretarse como un conflicto de interés o favoritismo."
    },
    {
        id: 102,
        categoria: "Derecho Constitucional",
        pregunta: "De acuerdo con el Artículo 63 de la Constitución Dominicana, la educación tiene como objeto:",
        opciones: [
            "A) La formación de mano de obra técnica para el sector privado.",
            "B) La formación integral del ser humano a lo largo de toda la vida y la formación de ciudadanos libres, críticos y creativos.",
            "C) Únicamente la alfabetización inicial en el primer ciclo de primaria.",
            "D) El cumplimiento de los objetivos de los partidos políticos de turno."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Constitución de la República Dominicana, Art. 63. Define la educación como un derecho humano y establece sus fines esenciales de desarrollo integral y ciudadanía."
    },
    {
        id: 103,
        categoria: "Evaluación de Aprendizajes",
        pregunta: "La Ordenanza 04-2023 establece que la evaluación de los aprendizajes en los niveles Inicial, Primario y Secundario debe ser:",
        opciones: [
            "A) Sumativa y centrada solo en los exámenes finales.",
            "B) Un proceso pedagógico, sistemático, participativo, continuo y basado en competencias.",
            "C) Un método para clasificar a los estudiantes según su inteligencia.",
            "D) Responsabilidad exclusiva del psicólogo escolar y no del docente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. Esta norma redefine el sistema de evaluación para alinearlo con el currículo por competencias vigente."
    },
    {
        id: 104,
        categoria: "Protección de Menores",
        pregunta: "Un psicólogo escolar detecta sospechas fundadas de abuso sexual en un menor. Según la Ley 136-03, ¿cuál es el protocolo obligatorio?",
        opciones: [
            "A) Confrontar a la familia antes de cualquier reporte externo.",
            "B) Realizar una terapia psicológica profunda para confirmar antes de denunciar.",
            "C) Notificar de inmediato al Ministerio Público o a la Fiscalía de Niños, Niñas y Adolescentes.",
            "D) Solicitar autorización previa al Director del Distrito Educativo."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ley 136-03 (Código para el Sistema de Protección). La denuncia es obligatoria e inmediata ante la sospecha de vulneración de derechos, prevaleciendo el Interés Superior del Niño."
    },
    {
        id: 105,
        categoria: "Inclusión Educativa",
        pregunta: "Según la Ordenanza 05-2024, si un centro educativo no posee rampas o materiales adaptados para un estudiante con discapacidad, el centro debe:",
        opciones: [
            "A) Sugerir a los padres que busquen un centro con mejores condiciones.",
            "B) Gestionar y aplicar los Ajustes Razonables y apoyos necesarios para garantizar la educación inclusiva.",
            "C) Exonerar al estudiante de asistir a clases presenciales.",
            "D) Esperar a que el Ministerio de Educación realice una remodelación general del plantel."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. Establece los lineamientos para la educación inclusiva, obligando al sistema a adaptarse a la diversidad del alumnado."
    },
    {
        id: 106,
        categoria: "Participación Familiar",
        pregunta: "La reciente Ordenanza 03-2025 establece que el organismo base para la participación de los padres en el aula es:",
        opciones: [
            "A) La Junta de Centro.",
            "B) El Comité de Curso de Padres, Madres y Tutores.",
            "C) El Consejo de Estudiantes.",
            "D) La Asociación de Ex-alumnos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 03-2025. Regula la participación de la familia, colocando al Comité de Curso como la célula fundamental de apoyo al docente guía."
    },
    {
        id: 107,
        categoria: "Función Pública",
        pregunta: "Un orientador abandona su puesto de trabajo por tres días consecutivos sin justificación legal. Según la Ley 41-08 de Función Pública, esto se tipifica como:",
        opciones: [
            "A) Una falta leve.",
            "B) Una falta grave que puede dar lugar a la destitución.",
            "C) Un derecho del trabajador por estrés laboral.",
            "D) Una acción que solo requiere reposición del tiempo perdido."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 41-08 de Función Pública. El abandono injustificado del cargo es una violación directa a los deberes del servidor público."
    },
    {
        id: 108,
        categoria: "Transparencia",
        pregunta: "Un grupo de ciudadanos solicita información sobre el uso de los fondos descentralizados de un centro educativo. Según la Ley 200-04, el centro debe:",
        opciones: [
            "A) Negar la información por ser de seguridad institucional.",
            "B) Entregar la información solicitada en el plazo legal, garantizando el libre acceso a los datos públicos.",
            "C) Cobrar una tarifa especial por el servicio de búsqueda.",
            "D) Solicitar que la persona explique para qué usará la información."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 200-04 de Libre Acceso a la Información Pública. Establece que toda institución que reciba fondos del Estado debe rendir cuentas a cualquier ciudadano que lo solicite."
    },
    {
        id: 109,
        categoria: "Alfabetización",
        pregunta: "La Ordenanza 01-2023 prioriza la Política Nacional de Alfabetización Inicial para asegurar que los niños dominen la lectura y escritura en:",
        opciones: [
            "A) El Nivel Inicial solamente.",
            "B) La Etapa Oportuna (primer ciclo del Nivel Primario).",
            "C) El primer año del Nivel Secundario.",
            "D) Programas de educación de adultos exclusivamente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. El foco del MINERD es garantizar que el aprendizaje de la lengua escrita ocurra en los grados 1ro, 2do y 3ro de primaria."
    },
    {
        id: 110,
        categoria: "Discapacidad",
        pregunta: "La Ley 5-13 sobre Discapacidad en RD establece que el Ministerio de Educación debe garantizar:",
        opciones: [
            "A) Escuelas separadas para cada tipo de discapacidad.",
            "B) El acceso, permanencia y progreso de las personas con discapacidad en un sistema educativo inclusivo.",
            "C) La exención de impuestos para los padres de niños con discapacidad.",
            "D) Únicamente becas para estudios en el extranjero."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 5-13. Esta ley fundamenta el derecho a la no discriminación y la obligación de adaptar los entornos educativos."
    },
    {
        id: 111,
        categoria: "Ética y Relaciones",
        pregunta: "Según la Orden Departamental 22-2023, ¿cuál de estas acciones está prohibida para el personal docente?",
        opciones: [
            "A) Realizar tutorías académicas grupales en el aula.",
            "B) Transportar estudiantes en vehículos privados sin autorización previa y justificación de emergencia.",
            "C) Participar en las reuniones de la APMAE.",
            "D) Colaborar con el psicólogo en el seguimiento de un caso."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023 (Código de Ética). Establece límites claros para evitar situaciones de riesgo o interpretaciones de abuso de poder."
    },
    {
        id: 112,
        categoria: "Desarrollo Nacional",
        pregunta: "El cuarto eje estratégico de la Estrategia Nacional de Desarrollo 2030 (Ley 1-12) se enfoca en:",
        opciones: [
            "A) La construcción de nuevos aeropuertos.",
            "B) Una sociedad de producción y consumo ambientalmente sostenible.",
            "C) La exportación de minerales.",
            "D) La privatización del servicio eléctrico."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 1-12. El cuarto eje de la END busca la sostenibilidad ambiental y la adaptación al cambio climático como base del desarrollo."
    },
    {
        id: 113,
        categoria: "Evaluación y Promoción",
        pregunta: "Bajo la Ordenanza 04-2023, si un estudiante de Primaria no logra los aprendizajes requeridos tras las estrategias de recuperación pedagógica, se debe:",
        opciones: [
            "A) Promoverlo automáticamente por su edad.",
            "B) Realizar un informe detallado y aplicar la normativa de permanencia o promoción correspondiente.",
            "C) Suspenderlo del centro educativo.",
            "D) Obligarlo a tomar clases nocturnas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. Regula la promoción basada en el logro de competencias e indicadores definidos en el diseño curricular."
    },
    {
        id: 114,
        categoria: "Derechos Humanos",
        pregunta: "El Artículo 26 de la Declaración Universal de los Derechos Humanos, vinculado al Artículo 63 constitucional, establece que la educación debe:",
        opciones: [
            "A) Ser gratuita, al menos en la instrucción elemental y fundamental.",
            "B) Ser obligatoria solo para los varones.",
            "C) Depender de la posición económica de los padres.",
            "D) Centrarse solo en la formación militar."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Declaración Universal de los Derechos Humanos. Establece la gratuidad y obligatoriedad de la enseñanza básica como un derecho universal."
    },
    {
        id: 115,
        categoria: "Necesidades Específicas",
        pregunta: "La Ordenanza 04-2018 norma los servicios para estudiantes con Necesidades Específicas de Apoyo Educativo (NEAE). ¿Cuál es su objetivo principal?",
        opciones: [
            "A) Identificar a los estudiantes con dificultades para retirarlos del sistema regular.",
            "B) Establecer normas para la atención a la diversidad y asegurar ajustes curriculares.",
            "C) Crear un currículo totalmente distinto para estos estudiantes.",
            "D) Delegar la responsabilidad total en los padres."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2018. Es la norma pionera en regular cómo el currículo debe ser flexible para atender a la diversidad."
    },
    {
        id: 116,
        categoria: "Convivencia Escolar",
        pregunta: "Un estudiante agrede físicamente a un compañero provocándole una lesión. Según las Normas del Sistema Educativo Dominicano (Ordenanza 05-2023), esta falta es:",
        opciones: [
            "A) Leve.",
            "B) Grave.",
            "C) Muy Grave.",
            "D) Un conflicto menor entre pares."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ordenanza 05-2023. La violencia física que atenta contra la integridad de los miembros de la comunidad educativa es calificada como Falta Muy Grave."
    },
    {
        id: 117,
        categoria: "Estructura del Sistema",
        pregunta: "La Ley 66-97 establece que el organismo superior de decisión en materia de política educativa en la República Dominicana es:",
        opciones: [
            "A) El Congreso Nacional.",
            "B) El Consejo Nacional de Educación.",
            "C) La ADP (Asociación Dominicana de Profesores).",
            "D) El Despacho de la Primera Dama."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 66-97, Art. 76. El Consejo Nacional de Educación es el máximo órgano de dirección del sistema educativo preuniversitario."
    },
    {
        id: 118,
        categoria: "Participación Comunitaria",
        pregunta: "Según la Ordenanza 03-2025, ¿cuál es la función de la APMAE respecto a los recursos del centro?",
        opciones: [
            "A) Gastar el dinero de la Junta de Centro a su discreción.",
            "B) Colaborar con la fiscalización y el apoyo a la ejecución de los planes del centro.",
            "C) Establecer cuotas obligatorias a los padres para pagar maestros.",
            "D) Administrar las cuentas bancarias personales de los docentes."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 03-2025. La Asociación de Padres, Madres, Amigos y Tutores de la Escuela tiene un rol de apoyo y vigilancia, no de administración directa del presupuesto del Estado."
    },
    {
        id: 119,
        categoria: "Evaluación por Competencias",
        pregunta: "Bajo la Ordenanza 04-2023, la evaluación que se realiza al inicio de un proceso para conocer los saberes previos se denomina:",
        opciones: [
            "A) Evaluación Sumativa.",
            "B) Evaluación Diagnóstica.",
            "C) Evaluación Final.",
            "D) Examen Completivo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La evaluación diagnóstica es fundamental para ajustar la planificación docente a la realidad del grupo."
    },
    {
        id: 120,
        categoria: "Código de Ética",
        pregunta: "Si un psicólogo escolar es testigo de un acto de corrupción administrativa en el centro, según el Código de Ética y la Ley 41-08, debe:",
        opciones: [
            "A) Callar para evitar conflictos con sus compañeros.",
            "B) Denunciar el hecho ante las autoridades superiores siguiendo los canales institucionales.",
            "C) Publicarlo en redes sociales de forma anónima.",
            "D) Renunciar inmediatamente sin decir nada."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 41-08 y Orden Departamental 22-2023. Los servidores públicos tienen el deber ético y legal de denunciar irregularidades que afecten el patrimonio público."
    },


    {
        id: 121,
        categoria: "Ética Profesional",
        pregunta: "Según la Orden Departamental 22-2023, ¿cuál es el protocolo a seguir si un docente necesita comunicarse con un estudiante vía WhatsApp por un tema académico urgente?",
        opciones: [
            "A) Escribirle directamente al número personal del estudiante en cualquier horario.",
            "B) Hacerlo preferiblemente a través del grupo oficial del curso o mediante el contacto con el padre, madre o tutor legal.",
            "C) Pedirle al estudiante que borre la conversación después de leerla.",
            "D) Está estrictamente prohibido usar WhatsApp, incluso para temas académicos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. El Código de Ética establece que la comunicación debe ser transparente y a través de los canales institucionales o tutores para evitar la privacidad inadecuada con menores."
    },
    {
        id: 122,
        categoria: "Evaluación de Aprendizajes",
        pregunta: "De acuerdo con la Ordenanza 04-2023, ¿qué sucede con un estudiante que no logra los indicadores de logro mínimos después de las estrategias de recuperación?",
        opciones: [
            "A) Es promovido automáticamente por el principio de flexibilidad.",
            "B) El docente debe realizar ajustes en su planificación y ofrecer nuevas oportunidades de aprendizaje según los criterios de promoción vigentes.",
            "C) Se le asigna una calificación de 70 para que pueda pasar de grado.",
            "D) Debe abandonar el centro educativo y buscar una escuela técnica."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La evaluación es procesual y el sistema obliga a agotar todas las estrategias pedagógicas antes de decidir la permanencia o promoción."
    },
    {
        id: 123,
        categoria: "Derechos de la Infancia",
        pregunta: "La Ley 136-03 define el 'Interés Superior del Niño' como:",
        opciones: [
            "A) El derecho de los padres a decidir sobre la vida de sus hijos sin intervención del Estado.",
            "B) El principio que obliga a que toda decisión que afecte a un menor deba priorizar su bienestar y derechos fundamentales.",
            "C) La obligación de que los niños tengan las calificaciones más altas del curso.",
            "D) El derecho de los niños a no recibir correcciones disciplinarias de ningún tipo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03. Este principio es transversal a toda la normativa dominicana y obliga a jueces, docentes y psicólogos a decidir siempre lo más beneficioso para el menor."
    },
    {
        id: 124,
        categoria: "Inclusión Educativa",
        pregunta: "La Ordenanza 05-2024 define las 'Barreras para el Aprendizaje y la Participación' (BAP) como:",
        opciones: [
            "A) La falta de inteligencia de algunos estudiantes.",
            "B) Factores del entorno (físico, curricular o actitudinal) que dificultan el acceso pleno a la educación en igualdad de condiciones.",
            "C) El muro perimetral que rodea los centros educativos.",
            "D) La resistencia de los padres a inscribir a sus hijos en la escuela."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. El enfoque inclusivo moderno se centra en eliminar las barreras del contexto en lugar de ver la 'discapacidad' como un problema del estudiante."
    },
    {
        id: 125,
        categoria: "Participación Comunitaria",
        pregunta: "Según la Ordenanza 03-2025, ¿cuál es la vigencia de la directiva de la Asociación de Padres, Madres, Amigos y Tutores de la Escuela (APMAE)?",
        opciones: [
            "A) 1 año.",
            "B) 2 años.",
            "C) 4 años.",
            "D) Es vitalicia mientras tengan hijos en la escuela."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 03-2025. La nueva normativa establece periodos de 2 años para permitir la renovación y participación democrática de las familias."
    },
    {
        id: 126,
        categoria: "Gestión Administrativa",
        pregunta: "La Ley 41-08 establece que los servidores públicos (incluyendo docentes) tienen derecho a una licencia por matrimonio de:",
        opciones: [
            "A) 1 día laborable.",
            "B) 3 días laborables.",
            "C) 5 días laborables.",
            "D) 15 días calendario."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ley 41-08 de Función Pública. Es un derecho establecido para todos los servidores públicos del Estado Dominicano."
    },
    {
        id: 127,
        categoria: "Legislación Educativa",
        pregunta: "La Ley 66-97 establece que la Educación Inicial es obligatoria para el último año, el cual corresponde a la edad de:",
        opciones: [
            "A) 3 años.",
            "B) 4 años.",
            "C) 5 años.",
            "D) 6 años."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ley 66-97. Aunque el Nivel Inicial comienza antes, el Estado dominicano garantiza la obligatoriedad y gratuidad del último año (Pre-primario)."
    },
    {
        id: 128,
        categoria: "Transparencia",
        pregunta: "Si un ciudadano solicita información pública y el centro educativo no responde en un plazo de 15 días hábiles, según la Ley 200-04 se produce:",
        opciones: [
            "A) La cancelación automática de la solicitud.",
            "B) El silencio administrativo positivo, y el ciudadano puede reclamar ante el Tribunal Superior Administrativo.",
            "C) Una multa automática para el portero del centro.",
            "D) El cierre temporal del centro educativo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 200-04. El incumplimiento del plazo de respuesta genera responsabilidad legal para el funcionario a cargo."
    },
    {
        id: 129,
        categoria: "Ética Escolar",
        pregunta: "Un psicólogo escolar observa que un compañero docente humilla verbalmente a un estudiante frente a la clase. ¿Cuál es su deber según la Orden Departamental 22-2023?",
        opciones: [
            "A) No intervenir para no dañar la relación con su compañero.",
            "B) Reportar el incidente a la dirección y orientar al docente sobre el trato digno y el Código de Ética.",
            "C) Humillar al docente para que sienta lo que sintió el alumno.",
            "D) Decirle al estudiante que no le preste atención."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. El personal debe velar por la integridad emocional de los estudiantes y reportar cualquier conducta que vulnere su dignidad."
    },
    {
        id: 130,
        categoria: "Alfabetización Inicial",
        pregunta: "La Política Nacional de Alfabetización Inicial (Ordenanza 01-2023) se enfoca principalmente en fortalecer:",
        opciones: [
            "A) El aprendizaje de lenguas extranjeras en primaria.",
            "B) La comprensión lectora, la producción de textos y el pensamiento lógico-matemático en el primer ciclo.",
            "C) El uso de redes sociales en el aula.",
            "D) La caligrafía artística únicamente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. Esta política busca saldar la deuda histórica de aprendizaje de lectura y escritura en los grados iniciales."
    },
    {
        id: 131,
        categoria: "Constitución y Educación",
        pregunta: "El Artículo 63 de la Constitución establece que el Estado tiene la obligación de garantizar la gratuidad de la educación en los niveles:",
        opciones: [
            "A) Inicial y Primario únicamente.",
            "B) Primario y Secundario únicamente.",
            "C) Inicial, Primario y Secundario.",
            "D) Desde el nivel inicial hasta el nivel doctoral."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Constitución Dominicana, Art. 63. El Estado garantiza la educación preuniversitaria gratuita y obligatoria."
    },
    {
        id: 132,
        categoria: "Sistema de Evaluación",
        pregunta: "Según la Ordenanza 04-2023, la calificación mínima para promover una asignatura en el Nivel Secundario es de:",
        opciones: [
            "A) 60 puntos.",
            "B) 65 puntos.",
            "C) 70 puntos.",
            "D) 80 puntos."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ordenanza 04-2023. Se mantiene el criterio de 70 puntos como el mínimo aprobatorio para el Nivel Secundario."
    },
    {
        id: 133,
        categoria: "Convivencia Escolar",
        pregunta: "Un estudiante es encontrado con un arma blanca en su mochila. Según las Normas del Sistema Educativo (05-2023), esto se clasifica como:",
        opciones: [
            "A) Falta Leve.",
            "B) Falta Grave.",
            "C) Falta Muy Grave.",
            "D) No es una falta si no la usó."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ordenanza 05-2023. La posesión de objetos peligrosos (armas blancas, de fuego, etc.) pone en riesgo la seguridad colectiva y es una Falta Muy Grave."
    },
    {
        id: 134,
        categoria: "Derechos Humanos",
        pregunta: "El Artículo 26 de la Declaración Universal de Derechos Humanos establece que los padres tienen derecho preferente a:",
        opciones: [
            "A) Recibir un sueldo por enviar a sus hijos a la escuela.",
            "B) Escoger el tipo de educación que habrá de darse a sus hijos.",
            "C) Castigar físicamente a sus hijos en presencia de los maestros.",
            "D) No enviar a sus hijos a la escuela si así lo desean."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Art. 26 de la Declaración de DD.HH. Reconoce la libertad de las familias para elegir el centro y enfoque educativo."
    },
    {
        id: 135,
        categoria: "Función Pública",
        pregunta: "Según la Ley 41-08, los servidores de carrera administrativa solo pueden ser destituidos por:",
        opciones: [
            "A) Cambio de gobierno o partido político.",
            "B) Decisión arbitraria del director del centro.",
            "C) Causas legales justificadas y siguiendo el debido proceso.",
            "D) No caerle bien a la comunidad educativa."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ley 41-08. La estabilidad laboral es un derecho del servidor de carrera, protegiéndolo de despidos políticos."
    },
    {
        id: 136,
        categoria: "Ordenanza 05-2024",
        pregunta: "¿Qué es el DUA dentro del marco de la Educación Inclusiva?",
        opciones: [
            "A) Documento Único de Alumno.",
            "B) Diseño Universal para el Aprendizaje, que busca crear currículos accesibles para todos desde el inicio.",
            "C) Departamento de Unidades Académicas.",
            "D) Derecho Universal al Alimento."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. El DUA es el enfoque pedagógico recomendado para atender la diversidad en el aula ordinaria."
    },
    {
        id: 137,
        categoria: "Planificación Estratégica",
        pregunta: "La Ley 1-12 (Estrategia Nacional de Desarrollo) establece que para el año 2030, la República Dominicana debe ser:",
        opciones: [
            "A) Una potencia militar regional.",
            "B) Una sociedad democrática, cohesionada, territorialmente equilibrada y que garantiza igualdad de oportunidades.",
            "C) Un país donde solo se hable inglés.",
            "D) Una economía basada únicamente en la agricultura."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 1-12. Define la visión de nación a largo plazo como un país socialmente justo y desarrollado."
    },
    {
        id: 138,
        categoria: "Estructura Educativa",
        pregunta: "Según la Ley 66-97, el sistema educativo preuniversitario se divide en los siguientes niveles:",
        opciones: [
            "A) Básico, Medio y Superior.",
            "B) Inicial, Primario y Secundario.",
            "C) Maternal, Primario y Técnico.",
            "D) Pre-escolar, Escolar y Liceo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 66-97 (actualizada por estructura actual). Los tres niveles fundamentales son Inicial, Primario y Secundario."
    },
    {
        id: 139,
        categoria: "Participación Comunitaria",
        pregunta: "Bajo la Ordenanza 03-2025, ¿quién preside la Junta de Centro Educativo?",
        opciones: [
            "A) El presidente de la APMAE.",
            "B) El Director del Centro Educativo.",
            "C) El Alcalde de la comunidad.",
            "D) El representante de los docentes."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 03-2025. El director es la máxima autoridad ejecutiva y preside la junta como órgano descentralizado."
    },
    {
        id: 140,
        categoria: "Justificación Técnica",
        pregunta: "Un docente decide no evaluar a un estudiante con autismo porque 'no entiende nada'. ¿Qué principio de la Ordenanza 05-2023 y 05-2024 viola?",
        opciones: [
            "A) El principio de ahorro de tiempo docente.",
            "B) El principio de equidad y el derecho a una evaluación adaptada a las necesidades del estudiante.",
            "C) El principio de autonomía pedagógica.",
            "D) Ninguno, el docente tiene la razón si el alumno no habla."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanzas 05-2023 y 05-2024. Todo estudiante tiene derecho a ser evaluado mediante los ajustes curriculares necesarios según su condición."
    },

    {
        id: 141,
        categoria: "Convivencia Escolar",
        pregunta: "Un estudiante de secundaria es sorprendido consumiendo bebidas alcohólicas dentro del plantel. Según la Ordenanza 05-2023, esta conducta se considera una:",
        opciones: [
            "A) Falta Leve.",
            "B) Falta Grave.",
            "C) Falta Muy Grave.",
            "D) Falta de respeto simple."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ordenanza 05-2023. El consumo, posesión o promoción de sustancias prohibidas (alcohol, tabaco, drogas) dentro de los centros educativos es una Falta Muy Grave."
    },
    {
        id: 142,
        categoria: "Evaluación de Aprendizajes",
        pregunta: "Según la Ordenanza 04-2023, ¿cuál es la función de la 'Evaluación Formativa' durante el proceso de enseñanza?",
        opciones: [
            "A) Poner una nota definitiva al final de cada mes.",
            "B) Identificar progresos, dificultades y ajustar la intervención pedagógica mientras el aprendizaje ocurre.",
            "C) Determinar si el estudiante aprueba o reprueba el año.",
            "D) Comparar el rendimiento de un estudiante con el de sus compañeros."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La evaluación formativa no busca calificar, sino regular el proceso de aprendizaje y enseñanza en tiempo real."
    },
    {
        id: 143,
        categoria: "Legislación Educativa",
        pregunta: "La Ley 66-97 establece que el 'Gasto Público Anual en Educación' no debe ser inferior al:",
        opciones: [
            "A) 2% del PIB o el 10% del gasto público total.",
            "B) 4% del PIB o el 16% del gasto público total, de ambos el que sea mayor.",
            "C) 5% del PIB fijado por la Constitución.",
            "D) 3% del PIB según el Banco Mundial."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 66-97. Es el mandato legal que fundamenta el presupuesto educativo dominicano."
    },
    {
        id: 144,
        categoria: "Código de Ética",
        pregunta: "Usted se entera de que un colega docente utiliza a los estudiantes para realizar compras personales fuera del centro durante el horario de clases. Según la Orden Departamental 22-2023, esto es:",
        opciones: [
            "A) Una muestra de confianza docente-estudiante.",
            "B) Una violación al Código de Ética que prohíbe el uso de estudiantes para fines personales o domésticos.",
            "C) Permitido si el estudiante tiene permiso escrito de sus padres.",
            "D) Una falta leve que solo requiere reporte verbal."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. El personal educativo debe garantizar la seguridad y el tiempo académico de los menores, prohibiéndose su uso para tareas personales."
    },
    {
        id: 145,
        categoria: "Inclusión y Discapacidad",
        pregunta: "Bajo la Ley 5-13 y la Ordenanza 05-2024, ¿qué son los 'Ajustes Curriculares Individualizados' (ACI)?",
        opciones: [
            "A) Un currículo especial para que el estudiante no tenga que estudiar lo mismo que los demás.",
            "B) Modificaciones y adaptaciones en los elementos del currículo para dar respuesta a las NEAE de un estudiante.",
            "C) La eliminación de los exámenes para los estudiantes con discapacidad.",
            "D) Un documento para justificar que el estudiante no puede aprender."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. Los ACI permiten que el estudiante acceda al mismo currículo que sus pares mediante los apoyos necesarios."
    },
    {
        id: 146,
        categoria: "Función Pública",
        pregunta: "Según la Ley 41-08, ¿cuál de los siguientes es un deber de los servidores públicos?",
        opciones: [
            "A) Realizar actividades proselitistas en el lugar de trabajo.",
            "B) Desempeñar con dedicación y honestidad las funciones a su cargo.",
            "C) Delegar sus funciones en personas ajenas a la institución.",
            "D) Recibir gratificaciones por agilizar trámites de los ciudadanos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 41-08 de Función Pública. La honestidad y dedicación son principios rectores del servicio civil."
    },
    {
        id: 147,
        categoria: "Participación Comunitaria",
        pregunta: "La Ordenanza 03-2025 indica que la participación de las familias en la gestión escolar es:",
        opciones: [
            "A) Opcional según lo decida el Director del centro.",
            "B) Un derecho y un deber constitucional y legal para fortalecer la calidad educativa.",
            "C) Solo para los padres que pagan la cuota de la APMAE.",
            "D) Limitada únicamente a la firma de boletines de notas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 03-2025. Esta nueva norma refuerza que la gestión educativa es compartida entre escuela, familia y comunidad."
    },
    {
        id: 148,
        categoria: "Alfabetización",
        pregunta: "En el marco de la Ordenanza 01-2023, ¿cuál es el papel del equipo de orientación y psicología en la alfabetización?",
        opciones: [
            "A) Enseñar a leer y escribir directamente en lugar del maestro.",
            "B) Identificar de forma temprana barreras de aprendizaje y brindar apoyo psicopedagógico a los estudiantes rezagados.",
            "C) Sancionar a los estudiantes que no aprenden al ritmo del grupo.",
            "D) Evaluar solo a los estudiantes que terminan el bachillerato."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. El apoyo psicopedagógico es vital para la política de alfabetización inicial oportuna."
    },
    {
        id: 149,
        categoria: "Derecho a la Información",
        pregunta: "Según la Ley 200-04, si una información solicitada ya está disponible en la página web de la institución, la autoridad debe:",
        opciones: [
            "A) Ignorar la solicitud.",
            "B) Indicar al solicitante la fuente, dirección o sitio exacto donde puede acceder a la información.",
            "C) Obligar al ciudadano a ir presencialmente a buscarla.",
            "D) Cobrar por el diseño de la página web."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 200-04. Se busca la eficiencia en el acceso; si es público y digital, se facilita el enlace directo."
    },
    {
        id: 150,
        categoria: "Convivencia Escolar",
        pregunta: "Un estudiante falta a clases de manera recurrente sin causa justificada. Según la Ordenanza 05-2023, esto es una:",
        opciones: [
            "A) Falta Leve.",
            "B) Falta Grave.",
            "C) Falta Muy Grave.",
            "D) Situación que no le compete a la escuela."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Ordenanza 05-2023. La impuntualidad y la inasistencia injustificada se consideran Faltas Leves, pero requieren seguimiento para evitar el abandono escolar."
    },
    {
        id: 151,
        categoria: "Sistema de Evaluación",
        pregunta: "¿Qué técnica de evaluación es priorizada por la Ordenanza 04-2023 para evaluar competencias en el Nivel Secundario?",
        opciones: [
            "A) El dictado y la repetición de textos.",
            "B) El uso de rúbricas, listas de cotejo, portafolios y resolución de problemas.",
            "C) La memorización de fechas históricas.",
            "D) Únicamente los exámenes de selección múltiple."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. El enfoque por competencias exige instrumentos que evidencien el desempeño real del estudiante."
    },
    {
        id: 152,
        categoria: "Ley 136-03",
        pregunta: "Bajo la Ley 136-03, la 'Disciplina Escolar' debe ser:",
        opciones: [
            "A) Administrada mediante castigos físicos moderados.",
            "B) Compatible con la dignidad del niño y sus derechos fundamentales, prohibiendo el maltrato físico y psicológico.",
            "C) Responsabilidad única de la policía escolar.",
            "D) Aplicada solo en casos de extrema urgencia."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03. Prohíbe cualquier forma de disciplina que degrade o violente la integridad del menor."
    },
    {
        id: 153,
        categoria: "Inclusión Educativa",
        pregunta: "La Ordenanza 04-2018 establece que el Centro de Atención a la Diversidad (CAD) tiene como función:",
        opciones: [
            "A) Sacar a los estudiantes con discapacidad de las aulas regulares.",
            "B) Asesorar y acompañar a los centros educativos en la implementación de apoyos para estudiantes con NEAE.",
            "C) Decidir qué niños pueden estudiar y cuáles no.",
            "D) Administrar las becas de los estudiantes de secundaria."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2018. El CAD es el soporte técnico para que la inclusión sea una realidad en los centros."
    },
    {
        id: 154,
        categoria: "Estrategia Nacional",
        pregunta: "Uno de los objetivos de la Ley 1-12 (END) en materia de educación es:",
        opciones: [
            "A) Universalizar la educación inicial, primaria y secundaria con calidad.",
            "B) Reducir el número de docentes para ahorrar recursos.",
            "C) Privatizar la educación universitaria.",
            "D) Sustituir los libros impresos por tabletas sin supervisión pedagógica."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Ley 1-12. Busca la cobertura universal y la calidad educativa como derecho fundamental."
    },
    {
        id: 155,
        categoria: "Constitución Dominicana",
        pregunta: "Según el Art. 63, ¿quién tiene el derecho y la responsabilidad primaria de la educación de sus hijos?",
        opciones: [
            "A) El Estado dominicano.",
            "B) El Ministerio de Educación.",
            "C) La familia.",
            "D) Los tribunales de niños, niñas y adolescentes."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Constitución Dominicana. Reconoce a la familia como el núcleo inicial de la educación y el Estado como garante del servicio."
    },
    {
        id: 156,
        categoria: "Ética Profesional",
        pregunta: "Un orientador difunde fotos de un estudiante que cometió una falta en un grupo de WhatsApp de amigos. Según la Orden Departamental 22-2023, esto es:",
        opciones: [
            "A) Una forma de alertar a la sociedad.",
            "B) Una falta grave que viola el derecho a la intimidad, la imagen del menor y el deber de confidencialidad.",
            "C) Permitido si el estudiante no se ve bien en la foto.",
            "D) Solo una falta leve si no hubo mala intención."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023 y Ley 136-03. La protección de la imagen y la privacidad del menor es sagrada y su violación conlleva sanciones legales y éticas."
    },
    {
        id: 157,
        categoria: "Ordenanza 05-2024",
        pregunta: "¿Qué establece la Ordenanza 05-2024 respecto al currículo dominicano?",
        opciones: [
            "A) Que es rígido y no admite cambios.",
            "B) Que debe ser flexible y abierto para permitir los ajustes necesarios a favor de la inclusión.",
            "C) Que solo se puede modificar cada 20 años.",
            "D) Que es exclusivo para personas sin discapacidad."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. La flexibilidad curricular es la clave para atender a la diversidad en el aula inclusiva."
    },
    {
        id: 158,
        categoria: "Gestión Escolar",
        pregunta: "Según la Ley 66-97, ¿quién preside el Consejo Nacional de Educación?",
        opciones: [
            "A) El Presidente de la República.",
            "B) El Ministro de Educación.",
            "C) El Director Ejecutivo del INABIMA.",
            "D) El presidente de la Cámara de Diputados."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 66-97. El Ministro de Educación dirige este órgano máximo del sistema."
    },
    {
        id: 159,
        categoria: "Participación Comunitaria",
        pregunta: "Bajo la Ordenanza 03-2025, ¿cuál es el propósito de la 'Escuela de Padres y Madres'?",
        opciones: [
            "A) Que los padres vuelvan a cursar el bachillerato.",
            "B) Proporcionar un espacio de formación y reflexión para fortalecer las competencias parentales y el apoyo al aprendizaje.",
            "C) Recaudar fondos para la construcción de aulas.",
            "D) Elegir al nuevo director del centro."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 03-2025. Es un componente estratégico para que la familia sepa cómo acompañar el proceso educativo de sus hijos."
    },
    {
        id: 160,
        categoria: "Sistema de Evaluación",
        pregunta: "En el Nivel Primario, según la Ordenanza 04-2023, el informe que se entrega a los padres para comunicar los resultados se llama:",
        opciones: [
            "A) Acta de Calificaciones.",
            "B) Informe de Aprendizaje.",
            "C) Récord de Notas.",
            "D) Certificado de Aptitud."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. El nombre busca reflejar que lo que se comunica es el progreso en el aprendizaje, no solo números."
    },


    {
        id: 161,
        categoria: "Convivencia Escolar",
        pregunta: "Un estudiante altera o falsifica las calificaciones en su Informe de Aprendizaje. Según la Ordenanza 05-2023, esta acción es una:",
        opciones: [
            "A) Falta Leve.",
            "B) Falta Grave.",
            "C) Falta Muy Grave.",
            "D) Acción sin importancia si el estudiante tiene buenas notas."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ordenanza 05-2023. El fraude documental y la alteración de documentos oficiales del sistema educativo se tipifican como una Falta Muy Grave."
    },
    {
        id: 162,
        categoria: "Función Pública",
        pregunta: "Según la Ley 41-08, ¿cuál de las siguientes es una falta de tercer grado que conlleva la destitución del cargo?",
        opciones: [
            "A) Incumplimiento del horario de trabajo por primera vez.",
            "B) La comisión de actos de acoso sexual en el ámbito laboral.",
            "C) No usar el uniforme de la institución.",
            "D) Tomar café fuera del tiempo de descanso."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 41-08 de Función Pública. El acoso sexual es una falta gravísima que implica la separación inmediata del servicio público y procesos legales."
    },
    {
        id: 163,
        categoria: "Evaluación de Aprendizajes",
        pregunta: "La Ordenanza 04-2023 establece que en el Nivel Primario, los resultados de la evaluación se expresan de manera:",
        opciones: [
            "A) Numérica exclusivamente (0-100).",
            "B) Literal y descriptiva mediante niveles de desempeño e indicadores de logro.",
            "C) Por colores (Rojo, Amarillo y Verde).",
            "D) Solo mediante el promedio general al final del año."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. Se prioriza la descripción cualitativa del avance del estudiante sobre la simple asignación de un número en los primeros niveles."
    },
    {
        id: 164,
        categoria: "Educación Inclusiva",
        pregunta: "De acuerdo con la Ordenanza 05-2024, el término 'Población con Necesidades Específicas de Apoyo Educativo (NEAE)' incluye a:",
        opciones: [
            "A) Solo estudiantes con discapacidad física.",
            "B) Estudiantes con discapacidad, trastornos del aprendizaje, altas capacidades intelectuales y condiciones de vulnerabilidad.",
            "C) Únicamente estudiantes que no hablan español.",
            "D) Estudiantes que han repetido más de dos veces el mismo grado."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. El concepto de NEAE es amplio y busca proteger a cualquier estudiante que requiera apoyos distintos a los habituales."
    },
    {
        id: 165,
        categoria: "Participación Comunitaria",
        pregunta: "La Ordenanza 03-2025 establece que los fondos que recibe la Junta de Centro deben ser ejecutados de acuerdo con:",
        opciones: [
            "A) El criterio personal del Director.",
            "B) El Proyecto Educativo de Centro (PEC) y el Plan Operativo Anual (POA).",
            "C) Las peticiones directas de los vecinos de la comunidad.",
            "D) Las órdenes del sindicato de maestros."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 03-2025. La transparencia financiera obliga a que cada peso gastado esté vinculado a las metas pedagógicas planificadas."
    },
    {
        id: 166,
        categoria: "Ética Profesional",
        pregunta: "Un docente castiga a un grupo de estudiantes dejándolos sin recreo o sin almuerzo escolar. Según el Código de Ética (22-2023), esta medida es:",
        opciones: [
            "A) Una técnica de disciplina efectiva.",
            "B) Una falta ética, ya que no se puede privar a los estudiantes de sus derechos básicos como la alimentación o el descanso.",
            "C) Permitida si el curso está muy indisciplinado.",
            "D) Solo permitida si el director firma una autorización."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023 y Manuales de Convivencia. Las sanciones deben ser pedagógicas y nunca vulnerar derechos fundamentales del menor."
    },
    {
        id: 167,
        categoria: "Legislación Educativa",
        pregunta: "La Ley 66-97 indica que la educación es un servicio público que tiene como fin:",
        opciones: [
            "A) El enriquecimiento de los dueños de colegios privados.",
            "B) El desarrollo de la conciencia nacional y el respeto a los símbolos patrios.",
            "C) La formación de atletas de alto rendimiento solamente.",
            "D) Que todos los ciudadanos piensen de la misma manera."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 66-97. Uno de los fines de la educación dominicana es el fortalecimiento de la identidad y los valores patrios."
    },
    {
        id: 168,
        categoria: "Transparencia",
        pregunta: "Según la Ley 200-04, ¿quién es el responsable final de garantizar el acceso a la información en una institución pública?",
        opciones: [
            "A) El encargado de seguridad.",
            "B) La máxima autoridad ejecutiva de la institución (en este caso, el Director).",
            "C) El Ministerio de Hacienda.",
            "D) La secretaria de recepción."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 200-04. La responsabilidad legal recae sobre el titular de la institución, quien debe asegurar que el Oficial de Acceso a la Información cumpla sus funciones."
    },
    {
        id: 169,
        categoria: "Código de Ética",
        pregunta: "La Orden Departamental 22-2023 prohíbe al personal docente y administrativo tener relaciones sentimentales con estudiantes. Si esto ocurre, la sanción es:",
        opciones: [
            "A) Un traslado a otro centro educativo.",
            "B) Una suspensión de 15 días.",
            "C) La destitución inmediata y puesta a disposición de la justicia.",
            "D) Un llamado de atención escrito."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Orden Departamental 22-2023 y Ley 136-03. Es una violación gravísima a la integridad del menor y a la ética profesional, con implicaciones penales."
    },
    {
        id: 170,
        categoria: "Evaluación y Promoción",
        pregunta: "En el Nivel Secundario, la Ordenanza 04-2023 establece que el estudiante que repruebe hasta dos asignaturas debe:",
        opciones: [
            "A) Repetir el año completo automáticamente.",
            "B) Ir a pruebas completivas en las fechas establecidas.",
            "C) Ser promovido y recuperar las asignaturas el año siguiente.",
            "D) Tomar clases de verano pagadas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. Se mantiene el sistema de pruebas completivas para aquellos que no alcanzaron el mínimo de 70 puntos durante el año."
    },
    {
        id: 171,
        categoria: "Convivencia Armoniosa",
        pregunta: "El 'Acoso Escolar' o Bullying, según la Ordenanza 05-2023, debe ser manejado mediante:",
        opciones: [
            "A) La expulsión definitiva de ambos estudiantes.",
            "B) Un protocolo de mediación, apoyo psicológico y medidas restaurativas.",
            "C) Ignorar el conflicto si ocurre fuera del aula.",
            "D) Dejar que los estudiantes resuelvan sus problemas solos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2023. La normativa busca la solución pacífica de conflictos y la reeducación de los involucrados."
    },
    {
        id: 172,
        categoria: "Derechos Humanos",
        pregunta: "La Declaración Universal de Derechos Humanos (Art. 26) establece que la instrucción técnica y profesional habrá de ser:",
        opciones: [
            "A) Generalizada y accesible a todos en función de los méritos.",
            "B) Limitada a una élite de la sociedad.",
            "C) Solo para quienes puedan pagarla.",
            "D) Obligatoria para todos los ciudadanos hasta los 30 años."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Declaración Universal de DD.HH. Establece que mientras la básica es obligatoria, la técnica/superior debe ser accesible por mérito."
    },
    {
        id: 173,
        categoria: "Alfabetización Inicial",
        pregunta: "La Política Nacional de Alfabetización Inicial (01-2023) enfatiza que los docentes deben utilizar:",
        opciones: [
            "A) Libros de texto de hace 20 años.",
            "B) Diversas estrategias y recursos que respeten los ritmos de aprendizaje de cada niño.",
            "C) Solo el método de la copia del pizarrón.",
            "D) Una sola metodología estándar para todo el país."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. La flexibilidad metodológica es clave para lograr que ningún niño se quede atrás en la alfabetización."
    },
    {
        id: 174,
        categoria: "Discapacidad",
        pregunta: "Según la Ley 5-13, ¿qué porcentaje de vacantes en el sector público debe ser reservado para personas con discapacidad?",
        opciones: [
            "A) No menos del 2%.",
            "B) No menos del 5%.",
            "C) No menos del 10%.",
            "D) El porcentaje es opcional según la institución."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 5-13 sobre Discapacidad. Esta ley fomenta la inclusión laboral en las instituciones del Estado."
    },
    {
        id: 175,
        categoria: "Función Pública",
        pregunta: "Un servidor público tiene derecho a una licencia por fallecimiento de un pariente cercano (padres, hijos, cónyuge) de:",
        opciones: [
            "A) 1 día.",
            "B) 3 días laborables.",
            "C) 5 días laborables.",
            "D) Una semana completa."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 41-08. Es un derecho de licencia con goce de sueldo ante situaciones de duelo familiar."
    },
    {
        id: 176,
        categoria: "Participación Comunitaria",
        pregunta: "Bajo la Ordenanza 03-2025, el Consejo de Curso es un organismo de participación formado por:",
        opciones: [
            "A) Solo los padres del curso.",
            "B) Los estudiantes del curso y su docente guía.",
            "C) El director y los maestros del grado.",
            "D) Los vecinos más cercanos a la escuela."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 03-2025. El Consejo de Curso es el espacio donde los estudiantes ejercen su derecho a la participación y democracia escolar."
    },
    {
        id: 177,
        categoria: "Ordenanza 05-2024",
        pregunta: "El enfoque de 'Educación Inclusiva' según la Ordenanza 05-2024 implica que:",
        opciones: [
            "A) El alumno debe cambiar para encajar en la escuela.",
            "B) La escuela debe transformarse para responder a la diversidad de todos los alumnos.",
            "C) Solo se aceptan niños con discapacidad si hay cupo.",
            "D) Los niños con NEAE deben estar en un aula aparte todo el día."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. Se basa en el modelo social de la discapacidad, donde el entorno es el que debe adaptarse."
    },
    {
        id: 178,
        categoria: "Constitución Dominicana",
        pregunta: "El Artículo 63 establece que la inversión del Estado en educación, ciencia y tecnología debe ser:",
        opciones: [
            "A) Reducida en tiempos de crisis económica.",
            "B) Creciente y sostenida, en correspondencia con los niveles de desempeño macroeconómico.",
            "C) Fija sin importar el crecimiento del país.",
            "D) Dependiente de préstamos internacionales solamente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Constitución Dominicana. Protege la inversión educativa como un pilar estratégico del Estado."
    },
    {
        id: 179,
        categoria: "Evaluación Técnica",
        pregunta: "Según la Ordenanza 04-2023, los indicadores de logro son:",
        opciones: [
            "A) Las tareas que el alumno hace en casa.",
            "B) Señales o evidencias que permiten observar el nivel de dominio de las competencias.",
            "C) El número de páginas que tiene el libro de texto.",
            "D) Las asistencias del estudiante al centro."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. Son los referentes que usa el docente para evaluar de manera objetiva el progreso del alumno."
    },
    {
        id: 180,
        categoria: "Convivencia Escolar",
        pregunta: "Un docente que utiliza el castigo físico como método de corrección está violando:",
        opciones: [
            "A) La Ley 136-03 y la Ordenanza 05-2023.",
            "B) Solo las reglas internas de su centro.",
            "C) Únicamente el contrato con el Ministerio.",
            "D) Ninguna ley, si el padre le dio permiso."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Ley 136-03 y Ordenanza 05-2023. El maltrato físico está prohibido por ley y es causa de sanciones graves o penales."
    },
    
    {
        id: 181,
        categoria: "Ética Profesional",
        pregunta: "Un docente publica en sus redes sociales personales críticas ofensivas hacia la dirección del centro y sus colegas. Según la Orden Departamental 22-2023, esto se considera:",
        opciones: [
            "A) Uso legítimo de la libertad de expresión.",
            "B) Una violación al Código de Ética que exige respeto y decoro hacia los miembros de la comunidad educativa.",
            "C) Una falta leve que no tiene consecuencias.",
            "D) Permitido si las críticas son ciertas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. El personal debe mantener una conducta pública y digital que no lesione la imagen del sistema educativo ni la integridad de sus compañeros."
    },
    {
        id: 122,
        categoria: "Inclusión Educativa",
        pregunta: "La Ordenanza 05-2024 establece que la 'Evaluación Psicopedagógica' debe ser utilizada para:",
        opciones: [
            "A) Clasificar a los estudiantes en 'aptos' y 'no aptos'.",
            "B) Identificar las capacidades, barreras y apoyos específicos que requiere un estudiante con NEAE.",
            "C) Justificar la expulsión de un estudiante conflictivo.",
            "D) Exonerar al estudiante de cursar las materias de matemáticas y lengua."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. Es una herramienta diagnóstica para diseñar los ajustes y apoyos necesarios, nunca para segregar."
    },
    {
        id: 183,
        categoria: "Participación Comunitaria",
        pregunta: "Según la Ordenanza 03-2025, ¿qué organismo representa a los estudiantes en el manejo de los conflictos y la mejora del centro?",
        opciones: [
            "A) El Consejo de Estudiantes.",
            "B) El Comité de Disciplina de los Padres.",
            "C) La Junta Municipal.",
            "D) El sindicato de maestros."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Ordenanza 03-2025. El Consejo de Estudiantes es el órgano de representación democrática del alumnado en la gestión escolar."
    },
    {
        id: 184,
        categoria: "Legislación Educativa",
        pregunta: "La Ley 66-97 define que la 'Educación No Formal' es aquella que:",
        opciones: [
            "A) Se imparte en las universidades.",
            "B) Tiene por objeto ofrecer conocimientos y capacitación sin sujeción a los grados del sistema formal.",
            "C) No requiere ningún tipo de evaluación.",
            "D) Es solo para personas que no terminaron la primaria."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 66-97. Es un subsistema flexible destinado a la capacitación técnica y social de los ciudadanos."
    },
    {
        id: 185,
        categoria: "Función Pública",
        pregunta: "Bajo la Ley 41-08, si un servidor público considera que una orden de un superior es manifiestamente ilegal, debe:",
        opciones: [
            "A) Cumplirla sin cuestionar.",
            "B) Objetarla por escrito ante el superior que la emitió o la autoridad correspondiente.",
            "C) Renunciar inmediatamente.",
            "D) Hacer lo contrario a lo que se le pidió sin avisar."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 41-08. El servidor público tiene el deber de no cumplir órdenes que violen la ley, protegiendo la integridad de la administración pública."
    },
    {
        id: 186,
        categoria: "Evaluación de Aprendizajes",
        pregunta: "La Ordenanza 04-2023 introduce los 'Registros de Grado' actualizados. ¿Cuál es su utilidad principal?",
        opciones: [
            "A) Guardar las excusas médicas de los estudiantes.",
            "B) Consignar de forma sistemática el seguimiento de los indicadores de logro y el progreso de los estudiantes.",
            "C) Llevar el control de los uniformes entregados.",
            "D) Anotar los nombres de los padres que no asisten a reuniones."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. El registro es el documento oficial donde se evidencia la evaluación procesual y el desarrollo de competencias."
    },
    {
        id: 187,
        categoria: "Convivencia Escolar",
        pregunta: "Un estudiante es víctima de ciberacoso por parte de un compañero fuera del horario escolar. ¿Qué establece la Ordenanza 05-2023 sobre la intervención del centro?",
        opciones: [
            "A) El centro no interviene porque ocurrió fuera de la escuela.",
            "B) El centro debe intervenir si el acoso afecta la convivencia o el clima escolar y el bienestar del estudiante.",
            "C) Es un problema exclusivo de la policía nacional.",
            "D) Se debe expulsar a ambos para evitar problemas en el centro."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2023. Las normas de convivencia extienden su protección a situaciones externas que repercutan en el entorno educativo y emocional del alumno."
    },
    {
        id: 188,
        categoria: "Estrategia Nacional",
        pregunta: "La Ley 1-12 (END) propone que la educación dominicana debe fomentar:",
        opciones: [
            "A) Una cultura de ahorro y emprendimiento.",
            "B) El pensamiento crítico, la innovación y el respeto a la diversidad.",
            "C) La dependencia de los subsidios estatales.",
            "D) El estudio exclusivo de carreras tradicionales como medicina y derecho."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 1-12. Son pilares para transformar la sociedad dominicana hacia una economía del conocimiento."
    },
    {
        id: 189,
        categoria: "Derecho a la Información",
        pregunta: "Según la Ley 200-04, la solicitud de información puede ser rechazada si:",
        opciones: [
            "A) El director está muy ocupado.",
            "B) La información solicitada afecta la seguridad nacional o la privacidad de datos personales de menores.",
            "C) El ciudadano no tiene título universitario.",
            "D) La información es de hace más de dos años."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 200-04. Existen excepciones legales para proteger derechos superiores como la seguridad del Estado o la intimidad de las personas."
    },
    {
        id: 190,
        categoria: "Legislación Escolar",
        pregunta: "La Ordenanza 05-2023 clasifica como 'Falta Grave' el incumplimiento de:",
        opciones: [
            "A) Llegar 5 minutos tarde una vez al mes.",
            "B) El uso reiterado de celulares o dispositivos electrónicos para fines ajenos al aprendizaje en el aula.",
            "C) Olvidar un libro en la casa.",
            "D) Pedir permiso para ir al baño."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2023. El uso disruptivo de la tecnología que afecta el proceso de enseñanza es una falta grave sujeta a medidas correctivas."
    },
    {
        id: 191,
        categoria: "Inclusión y Apoyo",
        pregunta: "Según la Ordenanza 04-2018, los 'Servicios de Apoyo a la Educación Inclusiva' deben estar conformados por:",
        opciones: [
            "A) Solo personal de seguridad.",
            "B) Orientadores, psicólogos y docentes de apoyo pedagógico.",
            "C) Miembros de la comunidad que sepan de carpintería.",
            "D) Médicos especialistas externos únicamente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2018. Define el equipo multidisciplinario necesario para garantizar la atención a la diversidad."
    },
    {
        id: 192,
        categoria: "Alfabetización",
        pregunta: "La Ordenanza 01-2023 establece que la alfabetización es una responsabilidad de:",
        opciones: [
            "A) Solo el maestro de lengua española.",
            "B) Toda la comunidad educativa y el sistema en su conjunto.",
            "C) La familia de forma exclusiva en el hogar.",
            "D) Las instituciones de educación superior solamente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. Se define como un compromiso sistémico para garantizar el éxito escolar futuro."
    },
    {
        id: 193,
        categoria: "Código de Ética",
        pregunta: "Bajo la Orden Departamental 22-2023, el personal del centro debe evitar 'Relaciones de Intimidad' con:",
        opciones: [
            "A) Estudiantes, ex-estudiantes menores de edad y padres de familia si afecta su imparcialidad.",
            "B) Solo estudiantes de su propia aula.",
            "C) Sus propios hijos que estudian en el centro.",
            "D) Nadie, la vida privada no está regulada."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Orden Departamental 22-2023. Establece perímetros de seguridad ética para proteger a los menores y la integridad del servicio educativo."
    },
    {
        id: 194,
        categoria: "Sistema de Evaluación",
        pregunta: "En el Nivel Secundario (Ordenanza 04-2023), ¿qué ocurre si un estudiante reprueba una asignatura en las pruebas extraordinarias?",
        opciones: [
            "A) Debe repetir el grado completo.",
            "B) Tiene derecho a una tercera oportunidad inmediata.",
            "C) Debe cursarla de nuevo en la modalidad de tutoría o según disponga la norma de permanencia.",
            "D) Se le regalan los puntos para evitar el abandono escolar."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ordenanza 04-2023. Regula la trayectoria del estudiante asegurando que los aprendizajes no logrados sean completados."
    },
    {
        id: 195,
        categoria: "Participación Comunitaria",
        pregunta: "La Ordenanza 03-2025 prohíbe explícitamente que los organismos de participación (como APMAE):",
        opciones: [
            "A) Realicen reuniones en el centro.",
            "B) Participen en actividades partidistas o de proselitismo político dentro del centro educativo.",
            "C) Ayuden a pintar la escuela.",
            "D) Sugieran mejoras pedagógicas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 03-2025. Los organismos de participación deben ser neutrales y enfocarse únicamente en el bienestar educativo."
    },
    {
        id: 196,
        categoria: "Ordenanza 05-2024",
        pregunta: "El principio de 'Equidad' en la educación inclusiva significa:",
        opciones: [
            "A) Darle a todos exactamente lo mismo.",
            "B) Dar a cada uno lo que necesita para garantizar la igualdad de oportunidades y resultados.",
            "C) Que todos los estudiantes deben comprar el mismo uniforme.",
            "D) Que todos deben obtener la misma calificación sin importar su esfuerzo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. La equidad reconoce la diversidad y aplica apoyos diferenciados para lograr la justicia educativa."
    },
    {
        id: 197,
        categoria: "Constitución Dominicana",
        pregunta: "Según el Art. 63, la educación superior es competencia del Estado, pero su gestión debe basarse en:",
        opciones: [
            "A) La autonomía universitaria y la libertad de cátedra.",
            "B) El control total del gobierno central sobre los programas.",
            "C) La prohibición de la investigación científica.",
            "D) Que solo se imparta en la capital del país."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Constitución Dominicana. Protege la libertad académica y la autogestión de las universidades."
    },
    {
        id: 198,
        categoria: "Legislación Educativa",
        pregunta: "La Ley 66-97 clasifica a los docentes como:",
        opciones: [
            "A) Trabajadores manuales.",
            "B) Profesionales de la educación encargados de impartir enseñanza y dirigir el proceso de aprendizaje.",
            "C) Empleados administrativos de apoyo.",
            "D) Contratistas temporales del Estado."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 66-97. Reconoce el estatus profesional del docente y sus responsabilidades directas en el aula."
    },
    {
        id: 199,
        categoria: "Manuales de Convivencia",
        pregunta: "Si un estudiante comete una falta muy grave, la medida educativa debe ser aplicada por:",
        opciones: [
            "A) El docente solo en su aula.",
            "B) El Equipo de Gestión y el Consejo Escolar de Centro, garantizando el derecho a la defensa.",
            "C) El presidente de la junta de vecinos.",
            "D) El psicólogo sin avisar a los padres."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2023. Asegura el debido proceso y la participación de los órganos de gestión en las sanciones más delicadas."
    },
    {
        id: 200,
        categoria: "Evaluación Técnica",
        pregunta: "La Ordenanza 04-2023 establece que la 'Metaevaluación' es:",
        opciones: [
            "A) El examen final de todo el sistema educativo.",
            "B) La evaluación de los propios procesos e instrumentos de evaluación para mejorarlos.",
            "C) Una evaluación que se hace en el espacio exterior.",
            "D) La calificación que ponen los padres a los maestros."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. Es un proceso de reflexión sobre la práctica evaluativa para asegurar su calidad y objetividad."
    },


    {
        id: 201,
        categoria: "Evaluación Nivel Inicial",
        pregunta: "Según la Ordenanza 04-2023, ¿cuál es la escala oficial para registrar la valoración de los indicadores de logro en el Nivel Inicial?",
        opciones: [
            "A) 0 a 100 puntos.",
            "B) Logrado (L), En Proceso (EP) y Todavía no Logrado (TNL).",
            "C) Excelente, Muy Bueno, Bueno e Insuficiente.",
            "D) Aprobado y Reprobado."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. El Nivel Inicial evalúa de forma cualitativa basándose en el progreso del niño respecto a los indicadores."
    },
    {
        id: 202,
        categoria: "Promoción Nivel Inicial",
        pregunta: "En el Nivel Inicial, si un niño no ha alcanzado la mayoría de los indicadores de logro al finalizar el año escolar, el protocolo establece que:",
        opciones: [
            "A) Debe repetir el grado para nivelarse.",
            "B) La promoción es automática; el niño avanza al grado siguiente según su edad cronológica.",
            "C) Se le debe realizar una prueba extraordinaria de conocimiento.",
            "D) Debe permanecer en el centro en horario extendido obligatoriamente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La promoción en el Nivel Inicial es automática por edad, garantizando la permanencia en su grupo de pares."
    },
    {
        id: 203,
        categoria: "Rol de la Psicóloga - NEAE",
        pregunta: "Ante la sospecha de una Necesidad Específica de Apoyo Educativo (NEAE) en un niño de Pre-Primario, ¿cuál es la primera acción de la psicóloga según la Ordenanza 05-2024?",
        opciones: [
            "A) Referir inmediatamente a un neurólogo externo.",
            "B) Realizar una evaluación psicopedagógica inicial para identificar barreras y diseñar apoyos.",
            "C) Solicitar a los padres que cambien al niño a un centro de educación especial.",
            "D) Esperar a que el niño llegue a Primaria para intervenir."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. La detección temprana y la evaluación psicopedagógica en el centro son el primer paso para la inclusión."
    },
    {
        id: 204,
        categoria: "Ley 136-03",
        pregunta: "Si un niño de Inicial llega al centro con hematomas sospechosos de maltrato físico, la Ley 136-03 obliga al personal a:",
        opciones: [
            "A) Interrogar al niño frente a sus padres.",
            "B) Notificar de inmediato a las autoridades competentes (CONANI o Fiscalía) bajo principio de confidencialidad.",
            "C) No intervenir para no perder la confianza de la familia.",
            "D) Aplicar una sanción administrativa al padre cuando vaya a recoger al niño."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03. El personal educativo es garante de derechos y tiene el deber de denuncia ante sospecha de abuso."
    },
    {
        id: 205,
        categoria: "Alfabetización Inicial",
        pregunta: "La Ordenanza 01-2023 sobre Alfabetización Inicial en la Etapa Oportuna, destaca que el Nivel Inicial debe centrarse en:",
        opciones: [
            "A) Enseñar a escribir frases complejas y párrafos.",
            "B) El desarrollo de la conciencia fonológica y el contacto con el mundo escrito de forma lúdica.",
            "C) Evaluar con exámenes escritos mensuales.",
            "D) Prohibir el uso de imágenes para que solo vean letras."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. Se busca crear las bases del lenguaje y la alfabetización funcional desde el juego."
    },
    {
        id: 206,
        categoria: "Ética Profesional",
        pregunta: "Según la Orden Departamental 22-2023, un comportamiento ético de la psicóloga hacia los padres de Nivel Inicial es:",
        opciones: [
            "A) Compartir los diagnósticos de los niños en el grupo de WhatsApp de padres.",
            "B) Mantener la confidencialidad de la información privada de las familias obtenida en entrevistas.",
            "C) Aceptar regalos costosos para priorizar la atención de un niño.",
            "D) Dar consejos legales sobre procesos de divorcio."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023 y Código de Ética. El secreto profesional y la imparcialidad son pilares del personal docente y administrativo."
    },
    {
        id: 207,
        categoria: "Ordenanza 05-2023",
        pregunta: "Un niño de 5 años presenta conductas disruptivas constantes (muerde o empuja). Según las Normas de Convivencia, la respuesta debe ser:",
        opciones: [
            "A) Suspenderlo por 3 días para que reflexione en casa.",
            "B) Aplicar medidas educativas acordes a su nivel de desarrollo, priorizando el diálogo y la orientación.",
            "C) Expulsarlo definitivamente del centro.",
            "D) Dejarlo solo en el patio como castigo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2023. En el Nivel Inicial las medidas son estrictamente formativas y proporcionales a la edad."
    },
    {
        id: 208,
        categoria: "Constitución Dominicana",
        pregunta: "El Artículo 63 de la Constitución establece que la educación es un derecho de toda persona. En el caso del Nivel Inicial, el Estado tiene la obligación de:",
        opciones: [
            "A) Cobrar una cuota mínima para mantenimiento.",
            "B) Garantizar su gratuidad y universalidad, especialmente en el último año (Pre-Primario).",
            "C) Solo permitir la inscripción de niños con excelente conducta.",
            "D) Dejar la educación inicial exclusivamente en manos del sector privado."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Constitución Dominicana, Art. 63. El Estado debe garantizar la oferta pública gratuita para el Nivel Inicial."
    },
    {
        id: 209,
        categoria: "Gestión Escolar",
        pregunta: "Según la Ordenanza 03-2025, los organismos de participación de los padres en el Nivel Inicial buscan:",
        opciones: [
            "A) Decidir qué maestra debe ser contratada o despedida.",
            "B) Colaborar con el bienestar de los niños y fortalecer el vínculo escuela-familia.",
            "C) Administrar la nómina del centro educativo.",
            "D) Organizar rifas para beneficio personal de la directiva."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 03-2025. Los organismos como la APMAE son de apoyo y participación comunitaria, no de gestión administrativa directa."
    },
    {
        id: 210,
        categoria: "Desarrollo Infantil",
        pregunta: "Como psicóloga de Inicial, al observar el desarrollo motor, usted identifica que un niño no realiza pinza digital. Este indicador pertenece principalmente a la dimensión:",
        opciones: [
            "A) Cognitiva.",
            "B) Motricidad Fina.",
            "C) Socio-afectiva.",
            "D) Lingüística."
        ],
        respuestaCorrecta: 1,
        explicacion: "Referencia: Diseño Curricular Nivel Inicial. La pinza digital es un hito clave de la motricidad fina evaluada en el registro."
    },
    {
        id: 211,
        categoria: "Ley 5-13 Discapacidad",
        pregunta: "La Ley 5-13 prohíbe a los centros educativos:",
        opciones: [
            "A) Pedir el acta de nacimiento.",
            "B) Negar la matriculación a un niño por su condición de discapacidad física o cognitiva.",
            "C) Realizar actos de bandera.",
            "D) Tener psicólogos en el centro."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 5-13. La negativa de inscripción por discapacidad constituye un acto de discriminación sancionado por ley."
    },
    {
        id: 212,
        categoria: "Función Pública",
        pregunta: "Un psicólogo escolar del sistema público que falta tres días consecutivos al centro sin causa justificada incurre en:",
        opciones: [
            "A) Una falta leve con amonestación verbal.",
            "B) El abandono de cargo, según la Ley 41-08 de Función Pública.",
            "C) Un derecho adquirido por antigüedad.",
            "D) Nada, si luego repone las horas el sábado."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 41-08. El cumplimiento del horario es un deber sagrado del servidor público."
    },
    {
        id: 213,
        categoria: "Evaluación Diagnóstica",
        pregunta: "¿En qué momento del año escolar se debe aplicar la evaluación diagnóstica en el Nivel Inicial?",
        opciones: [
            "A) Solo al final del año.",
            "B) Al inicio del año escolar para conocer los saberes previos y el estado de desarrollo.",
            "C) Únicamente cuando el director lo solicite.",
            "D) Después de cada recreo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La diagnóstica es el punto de partida para la planificación docente y la intervención psicopedagógica."
    },
    {
        id: 214,
        categoria: "Inclusión Educativa",
        pregunta: "La Ordenanza 05-2024 define los 'Ajustes Curriculares' como:",
        opciones: [
            "A) Hacer un examen más fácil para que el niño no llore.",
            "B) Modificaciones en los elementos del currículo para dar respuesta a las necesidades de aprendizaje del estudiante.",
            "C) Eliminar las materias que al niño no le gustan.",
            "D) Cambiar al niño de aula cada mes."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. Los ajustes garantizan que el estudiante con NEAE pueda acceder a los mismos aprendizajes que sus compañeros."
    },
    {
        id: 215,
        categoria: "Derecho a la Información",
        pregunta: "Si un padre solicita ver el Registro de Grado para conocer el progreso de su hijo, el centro basado en la Ley 200-04 debe:",
        opciones: [
            "A) Negarlo porque es un documento secreto del maestro.",
            "B) Facilitar el acceso a la información que concierne estrictamente a su hijo.",
            "C) Cobrarle una tarifa por la consulta.",
            "D) Decirle que espere al final del año."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 200-04. Los padres tienen derecho a acceder a la información académica de sus tutelados."
    },
    {
        id: 216,
        categoria: "Manual de Convivencia",
        pregunta: "En el Nivel Inicial, la estrategia principal para resolver conflictos entre pares es:",
        opciones: [
            "A) El aislamiento en la dirección.",
            "B) La mediación del adulto y el aprendizaje de la empatía.",
            "C) La anotación en el expediente para futura expulsión.",
            "D) Ignorar el conflicto para que aprendan solos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Convivencia y Ordenanza 05-2023. En Inicial los conflictos son oportunidades de aprendizaje socioemocional."
    },
    {
        id: 217,
        categoria: "Código de Ética",
        pregunta: "La Orden Departamental 22-2023 prohíbe al personal educativo el uso de celulares para:",
        opciones: [
            "A) Llamar a una ambulancia en una emergencia.",
            "B) Grabar o fotografiar a los estudiantes menores de edad sin autorización oficial y fines pedagógicos.",
            "C) Usar la calculadora en clases de matemáticas.",
            "D) Revisar el calendario escolar."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. Protege la imagen y privacidad de los niños, niñas y adolescentes."
    },
    {
        id: 218,
        categoria: "Estrategia Nacional de Desarrollo",
        pregunta: "La Ley 1-12 (END) plantea como objetivo para la educación:",
        opciones: [
            "A) Que todos los estudiantes sean militares.",
            "B) Lograr una educación de calidad que forme ciudadanos críticos y capaces de integrarse a la sociedad del conocimiento.",
            "C) Reducir los días de clase para ahorrar presupuesto.",
            "D) Que los padres den las clases en lugar de los maestros."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 1-12. Busca la transformación social a través de un sistema educativo moderno y eficiente."
    },
    {
        id: 219,
        categoria: "Alfabetización Inicial",
        pregunta: "En la Política Nacional de Alfabetización (01-2023), el psicólogo apoya principalmente en:",
        opciones: [
            "A) Comprar los libros de texto.",
            "B) Identificar barreras cognitivas o emocionales que dificulten el proceso de adquisición de la lectura y escritura.",
            "C) Limpiar la biblioteca del centro.",
            "D) Dar clases de lengua española todos los días."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. El psicólogo es parte clave del equipo que asegura el éxito de la alfabetización oportuna."
    },
    {
        id: 220,
        categoria: "Relaciones Internacionales",
        pregunta: "El Artículo 26 de la Declaración Universal de los Derechos Humanos, citado en la normativa dominicana, establece que:",
        opciones: [
            "A) La educación es solo para los que pueden pagarla.",
            "B) Toda persona tiene derecho a la educación, la cual debe ser gratuita al menos en la instrucción elemental.",
            "C) Los niños no tienen derecho a opinar.",
            "D) La educación debe ser solo técnica."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Art. 26 Derechos Humanos. Es el fundamento internacional del derecho a la educación que asume la República Dominicana."
    },



    {
        id: 221,
        categoria: "Evaluación Nivel Inicial",
        pregunta: "En el Nivel Inicial, ¿cómo se concibe el error del niño durante el proceso de aprendizaje según la Ordenanza 04-2023?",
        opciones: [
            "A) Como una falta de capacidad cognitiva.",
            "B) Como una oportunidad para que el docente y el psicólogo reorienten la enseñanza y el apoyo.",
            "C) Como un motivo para bajar la calificación en el Registro de Grado.",
            "D) Como algo que debe evitarse mediante el castigo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La evaluación en Inicial es procesual y el error es parte natural del desarrollo que guía la intervención."
    },
    {
        id: 222,
        categoria: "Inclusión Educativa",
        pregunta: "La Ordenanza 05-2024 establece que el 'Diseño Universal para el Aprendizaje' (DUA) debe ser aplicado para:",
        opciones: [
            "A) Solo estudiantes con discapacidad visual.",
            "B) Todos los estudiantes, eliminando barreras desde la planificación inicial.",
            "C) Estudiantes que tengan problemas de conducta únicamente.",
            "D) Los niños que no pagan la mensualidad en colegios privados."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. El DUA es un enfoque inclusivo para que todos los niños aprendan juntos según sus ritmos."
    },
    {
        id: 223,
        categoria: "Código de Ética",
        pregunta: "Si un familiar de un estudiante le ofrece dinero a la psicóloga para 'limpiar' un expediente conductual, según la Orden Departamental 22-2023, esto se considera:",
        opciones: [
            "A) Una muestra de gratitud aceptable.",
            "B) Un acto de soborno y una falta gravísima al Código de Ética.",
            "C) Un ingreso extra por servicios profesionales.",
            "D) Un préstamo que debe devolverse al mes."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. La integridad y la honestidad son irrenunciables para el personal del MINERD."
    },
    {
        id: 224,
        categoria: "Desarrollo Socioemocional",
        pregunta: "En el Nivel Inicial, el proceso de 'Socialización' es evaluado principalmente para observar:",
        opciones: [
            "A) Si el niño sabe leer el abecedario.",
            "B) La capacidad de relacionarse con otros, respetar turnos y expresar emociones de forma adecuada.",
            "C) Si el niño sabe correr 100 metros.",
            "D) La rapidez con la que el niño termina la merienda."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Diseño Curricular Nivel Inicial. El desarrollo socio-afectivo es un eje central de la evaluación cualitativa."
    },
    {
        id: 225,
        categoria: "Ley 136-03",
        pregunta: "El derecho a la 'Integridad Personal' del niño en la Ley 136-03 implica que ningún personal escolar puede:",
        opciones: [
            "A) Ponerle tareas en casa.",
            "B) Someterlo a castigos físicos, humillaciones o tratos degradantes.",
            "C) Pedirle que guarde silencio en la biblioteca.",
            "D) Evaluar su rendimiento académico."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03, Art. 12. Se prohíbe cualquier forma de violencia como método de disciplina."
    },
    {
        id: 226,
        categoria: "Evaluación Nivel Inicial",
        pregunta: "¿Qué instrumento es fundamental para que la psicóloga de Inicial registre las observaciones de comportamientos atípicos o sobresalientes?",
        opciones: [
            "A) El examen trimestral.",
            "B) El anecdotario o diario de observación.",
            "C) La factura de inscripción.",
            "D) El carnet de vacunación."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. Las técnicas de observación y registro son las más adecuadas para el Nivel Inicial."
    },
    {
        id: 227,
        categoria: "Gestión Administrativa",
        pregunta: "Según la Ley 41-08, la 'Evaluación del Desempeño' del personal docente y administrativo tiene como fin:",
        opciones: [
            "A) Identificar a quién despedir por razones políticas.",
            "B) Promover la mejora continua, identificar necesidades de capacitación y otorgar incentivos.",
            "C) Humillar al personal frente a los padres.",
            "D) Eliminar las vacaciones de verano."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 41-08 de Función Pública. La evaluación es una herramienta de desarrollo profesional."
    },
    {
        id: 228,
        categoria: "Derecho a la Educación",
        pregunta: "La Ordenanza 05-2023 establece que la educación debe ser 'Asequible'. Esto significa que:",
        opciones: [
            "A) Solo los niños inteligentes pueden entrar.",
            "B) El Estado debe garantizar cupos y recursos suficientes para toda la población infantil.",
            "C) Los padres deben pagar el transporte escolar.",
            "D) Las escuelas solo deben estar en las ciudades grandes."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2023 y Art. 63 Constitución. El Estado tiene la obligación de crear la oferta educativa."
    },
    {
        id: 229,
        categoria: "Atención a la Diversidad",
        pregunta: "Cuando un niño de Inicial presenta una discapacidad severa que requiere apoyos que el centro ordinario no puede ofrecer, la psicóloga debe:",
        opciones: [
            "A) Expulsar al niño.",
            "B) Coordinar con el CAD (Centro de Atención a la Diversidad) para una evaluación y posible escolarización en un centro de Educación Especial.",
            "C) Decirle a la maestra que lo ignore.",
            "D) Dejar que el niño se quede en su casa sin estudiar."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. El tránsito a la educación especial es una medida excepcional basada en el bienestar del niño."
    },
    {
        id: 230,
        categoria: "Alfabetización Inicial",
        pregunta: "En el marco de la Ordenanza 01-2023, ¿cuál es el papel de la familia en la alfabetización?",
        opciones: [
            "A) Enseñar a leer al niño antes de que entre a la escuela.",
            "B) Fomentar el hábito de la lectura en casa y participar en las actividades propuestas por el centro.",
            "C) Comprar libros de caligrafía obligatoriamente.",
            "D) No involucrarse para no confundir al niño."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. La corresponsabilidad familia-escuela es clave para el éxito educativo."
    },
    {
        id: 231,
        categoria: "Convivencia Escolar",
        pregunta: "Una 'Falta Grave' según las normas de convivencia en un contexto administrativo (personal adulto) sería:",
        opciones: [
            "A) Llegar 2 minutos tarde un día.",
            "B) Incumplir con el registro de las evaluaciones de los estudiantes de forma reiterada.",
            "C) Usar un lapicero azul en lugar de negro.",
            "D) Saludar cordialmente al portero."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2023 y Ley 41-08. El incumplimiento de los deberes técnicos es una falta que afecta el proceso educativo."
    },
    {
        id: 232,
        categoria: "Ética y Redes Sociales",
        pregunta: "La Orden Departamental 22-2023 prohíbe que el personal del centro mantenga con los estudiantes:",
        opciones: [
            "A) Conversaciones grupales sobre tareas.",
            "B) Relaciones de amistad íntima o comunicaciones privadas por redes sociales fuera de fines educativos.",
            "C) Contacto visual durante las clases.",
            "D) Reuniones con los padres presentes."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. Busca prevenir el acoso y mantener la distancia profesional adecuada."
    },
    {
        id: 233,
        categoria: "Estrategia Nacional de Desarrollo",
        pregunta: "Uno de los indicadores de éxito de la Ley 1-12 (END) para el 2030 en educación es:",
        opciones: [
            "A) Que el 100% de los niños terminen el nivel primario con competencias básicas de lecto-escritura y matemática.",
            "B) Que no existan escuelas públicas.",
            "C) Que los uniformes cambien de color cada año.",
            "D) Que todos los psicólogos sean directores."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Ley 1-12 END 2030. El objetivo es la calidad educativa medida en aprendizajes concretos."
    },
    {
        id: 234,
        categoria: "Organismos de Participación",
        pregunta: "La Ordenanza 03-2025 define que la Junta de Centro es el organismo encargado de:",
        opciones: [
            "A) Solo limpiar el centro educativo.",
            "B) Gestionar los recursos económicos y velar por el mantenimiento del centro educativo.",
            "C) Dar clases de psicología.",
            "D) Elegir al Ministro de Educación."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 03-2025 y Ley 66-97. La descentralización se ejecuta a través de las Juntas de Centro."
    },
    {
        id: 235,
        categoria: "Evaluación Nivel Inicial",
        pregunta: "Cuando un indicador de logro aparece como 'TNL' (Todavía No Logrado) al final de un periodo en Inicial, la psicóloga debe sugerir:",
        opciones: [
            "A) Repetición del grado.",
            "B) Estrategias de apoyo diferenciadas y seguimiento psicopedagógico para fortalecer esa área.",
            "C) Que el niño se retire del centro.",
            "D) No hacer nada, el niño aprenderá solo cuando crezca."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La evaluación diagnóstica y continua sirve para ajustar el apoyo, no para sancionar."
    },
    {
        id: 236,
        categoria: "Ley 200-04",
        pregunta: "Según la Ley de Libre Acceso a la Información Pública, las instituciones educativas deben publicar:",
        opciones: [
            "A) Las fotos de los niños llorando.",
            "B) El presupuesto recibido y la ejecución de los gastos (vía Junta de Centro).",
            "C) Las contraseñas de los correos de los maestros.",
            "D) La dirección de la casa de todos los empleados."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 200-04. La transparencia financiera es obligatoria en la gestión pública."
    },
    {
        id: 237,
        categoria: "Constitución Dominicana",
        pregunta: "El derecho a la libertad de conciencia y de cultos en las escuelas (Art. 45 de la Constitución) significa que:",
        opciones: [
            "A) La escuela puede obligar a todos a ser de una sola religión.",
            "B) Se debe respetar la creencia religiosa de los niños y sus familias sin discriminación.",
            "C) No se permite hablar de Dios en ninguna escuela.",
            "D) Solo los niños católicos pueden inscribirse."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Constitución Dominicana y Ley 66-97. El sistema educativo respeta la libertad religiosa."
    },
    {
        id: 238,
        categoria: "Atención Primaria en Salud Escolar",
        pregunta: "Si un niño de Inicial presenta una dificultad visual evidente (se acerca mucho a los libros), el protocolo de la psicóloga es:",
        opciones: [
            "A) Operar al niño en el centro.",
            "B) Informar a la familia y coordinar la referencia a un servicio de salud oftalmológica para diagnóstico.",
            "C) Comprarle unos lentes en el mercado.",
            "D) Sentarlo en la última fila."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024 (Inclusión). La detección de barreras físicas/sensoriales es parte del rol de apoyo educativo."
    },
    {
        id: 239,
        categoria: "Ley 5-13 Discapacidad",
        pregunta: "El principio de 'Igualdad de Oportunidades' en la Ley 5-13 significa que los niños con discapacidad:",
        opciones: [
            "A) Tienen derecho a los mismos servicios educativos de calidad que los demás, con los apoyos necesarios.",
            "B) Deben tener una escuela diferente lejos de los demás niños.",
            "C) No deben ser evaluados.",
            "D) Tienen permiso para llegar tarde todos los días."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Ley 5-13. Busca la inclusión plena en igualdad de condiciones."
    },
    {
        id: 240,
        categoria: "Evaluación Nivel Inicial",
        pregunta: "En el Registro de Grado del Nivel Inicial, la sección de 'Observaciones' sirve para:",
        opciones: [
            "A) Escribir chismes sobre la familia.",
            "B) Anotar datos relevantes sobre el contexto, salud o ritmos de aprendizaje que expliquen el progreso del niño.",
            "C) Dibujar caricaturas cuando el maestro está aburrido.",
            "D) Solo poner la fecha de cumpleaños."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. Es una herramienta cualitativa vital para la continuidad del proceso educativo."
    },

    {
        id: 241,
        categoria: "Inclusión Educativa",
        pregunta: "Según la Ordenanza 05-2024, ¿cuál es el documento donde se registran formalmente los ajustes curriculares individuales para un niño con NEAE en Inicial?",
        opciones: [
            "A) En el cuaderno de tareas del niño.",
            "B) En el Plan de Apoyo a la Diversidad (PAD) o expediente psicopedagógico.",
            "C) En una hoja suelta pegada en la puerta del aula.",
            "D) No se registran, se dicen de forma verbal."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. Los ajustes deben estar documentados para garantizar el seguimiento técnico y pedagógico."
    },
    {
        id: 242,
        categoria: "Evaluación Nivel Inicial",
        pregunta: "La evaluación en el Nivel Inicial se caracteriza por ser 'Globalizadora' porque:",
        opciones: [
            "A) Evalúa a todos los niños del mundo por igual.",
            "B) Considera todas las dimensiones del desarrollo del niño (cognitiva, emocional, física, social) de forma integrada.",
            "C) Solo evalúa si el niño sabe usar el globo terráqueo.",
            "D) Se realiza una sola vez al año de forma general."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. En Inicial no se dividen las competencias como materias aisladas, sino como un desarrollo integral."
    },
    {
        id: 243,
        categoria: "Ley 136-03",
        pregunta: "El principio de 'Corresponsabilidad' en la Ley 136-03 establece que la protección de los niños es obligación de:",
        opciones: [
            "A) Solo la Policía Nacional.",
            "B) La familia, la escuela, la comunidad y el Estado.",
            "C) Solo de los padres biológicos.",
            "D) Exclusivamente del psicólogo escolar."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03. Todos los actores de la sociedad deben velar por el cumplimiento de los derechos del menor."
    },
    {
        id: 244,
        categoria: "Convivencia Escolar",
        pregunta: "Si un docente de Inicial le grita palabras despectivas a un estudiante frente al curso, según la Ordenanza 05-2023 esto es una falta:",
        opciones: [
            "A) Leve, se resuelve con una disculpa.",
            "B) Grave o Muy Grave, dependiendo del daño psicológico y la reincidencia.",
            "C) Inexistente, ya que el docente tiene derecho a disciplinar.",
            "D) Administrativa que solo compete al director."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2023 y Orden Departamental 22-2023. El maltrato verbal está estrictamente prohibido y sancionado."
    },
    {
        id: 245,
        categoria: "Desarrollo Evolutivo",
        pregunta: "Como psicóloga de Inicial, usted sabe que el juego simbólico (jugar a la casita, al doctor) es un indicador de:",
        opciones: [
            "A) Falta de atención en clase.",
            "B) Desarrollo cognitivo y capacidad de representación de la realidad.",
            "C) Que el niño necesita más horas de caligrafía.",
            "D) Pereza por parte de la maestra."
        ],
        respuestaCorrecta: 1,
        explicacion: "Referencia: Diseño Curricular Nivel Inicial. El juego simbólico es vital para el desarrollo de funciones superiores en la etapa preoperacional."
    },
    {
        id: 246,
        categoria: "Ley 41-08 Función Pública",
        pregunta: "Un derecho de la psicóloga como servidora pública de carrera, según la Ley 41-08, es:",
        opciones: [
            "A) Elegir sus propios horarios de entrada y salida.",
            "B) Recibir capacitación continua y participar en los sistemas de incentivos por desempeño.",
            "C) Nombrar a sus familiares en el mismo centro.",
            "D) Negarse a trabajar con niños que no le caigan bien."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 41-08. La ley protege el derecho al desarrollo profesional y la estabilidad basada en el mérito."
    },
    {
        id: 247,
        categoria: "Código de Ética",
        pregunta: "La Orden Departamental 22-2023 indica que la relación entre el personal del centro y los estudiantes debe basarse en:",
        opciones: [
            "A) La familiaridad extrema y el afecto físico constante.",
            "B) El respeto mutuo, la distancia profesional y la protección de la integridad del menor.",
            "C) La autoridad absoluta del docente sin derecho a réplica.",
            "D) La indiferencia para evitar problemas legales."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. Define límites claros para prevenir situaciones de riesgo o abuso de poder."
    },
    {
        id: 248,
        categoria: "Evaluación Diagnóstica",
        pregunta: "Durante la evaluación diagnóstica en Inicial, si se detecta un retraso significativo en el lenguaje, la psicóloga debe:",
        opciones: [
            "A) Recomendar que el niño no hable en clase.",
            "B) Realizar una entrevista con los padres y sugerir una evaluación especializada (terapia de habla).",
            "C) Decirle a la maestra que el niño es 'lento'.",
            "D) No intervenir hasta que el niño cumpla 7 años."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. La intervención temprana es la clave para reducir las barreras de aprendizaje futuras."
    },
    {
        id: 249,
        categoria: "Ley 66-97",
        pregunta: "La Ley General de Educación 66-97 establece que el patrimonio del centro educativo es:",
        opciones: [
            "A) Propiedad privada del director.",
            "B) Bien público y debe ser cuidado por toda la comunidad educativa.",
            "C) Propiedad de la APMAE únicamente.",
            "D) Responsabilidad solo del sereno o portero."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 66-97. Los recursos y la planta física son propiedad del Estado para el servicio de la comunidad."
    },
    {
        id: 250,
        categoria: "Inclusión Educativa",
        pregunta: "Según la Ordenanza 05-2024, ¿cuál es el rol del equipo de gestión frente a un estudiante con discapacidad?",
        opciones: [
            "A) Buscar la forma de que se traslade a otro centro rápidamente.",
            "B) Garantizar la accesibilidad física y los apoyos pedagógicos necesarios en el centro.",
            "C) Ignorar la condición para que el niño se sienta 'normal'.",
            "D) Cobrarle una cuota extra por atención personalizada."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. El centro tiene la obligación de adaptarse al estudiante, no al revés."
    },
    {
        id: 251,
        categoria: "Alfabetización Inicial",
        pregunta: "La 'Etapa Oportuna' descrita en la Ordenanza 01-2023 se refiere a que el niño debe estar plenamente alfabetizado al finalizar:",
        opciones: [
            "A) El Nivel Inicial.",
            "B) El Tercer Grado de Primaria.",
            "C) El Sexto Grado de Primaria.",
            "D) El Bachillerato."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. La meta país es que a los 8 años (3ero primaria) todos los niños lean y escriban con fluidez."
    },
    {
        id: 252,
        categoria: "Gestión de Riesgos",
        pregunta: "En el Nivel Inicial, ante un simulacro de sismo, la psicóloga escolar apoya principalmente en:",
        opciones: [
            "A) Grabar el video para las redes sociales.",
            "B) La contención emocional de los niños para evitar crisis de pánico y asegurar una evacuación tranquila.",
            "C) Salir primero para dar el ejemplo.",
            "D) Quedarse en la oficina revisando expedientes."
        ],
        respuestaCorrecta: 1,
        explicacion: "Referencia: Manual de Gestión de Riesgos MINERD. El apoyo psicosocial es fundamental en situaciones de emergencia."
    },
    {
        id: 253,
        categoria: "Ordenanza 03-2025",
        pregunta: "La participación de la familia en la evaluación de los niños de Inicial se realiza mediante:",
        opciones: [
            "A) La entrega de informes de progreso y entrevistas periódicas de retroalimentación.",
            "B) Dejar que los padres pongan la nota en el Registro.",
            "C) No informar nada a los padres para no estresarlos.",
            "D) Publicar las notas en el mural de la entrada."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Ordenanza 04-2023 y 03-2025. La comunicación familia-escuela sobre el progreso es un derecho y un deber."
    },
    {
        id: 254,
        categoria: "Constitución Dominicana",
        pregunta: "El Artículo 63 de la Constitución establece que la familia es:",
        opciones: [
            "A) Un actor secundario en la educación.",
            "B) La primera responsable de la educación de sus hijos, con apoyo del Estado.",
            "C) Quien decide si el niño va o no a la escuela sin dar explicaciones.",
            "D) La encargada de comprar los uniformes al Ministerio."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Constitución Dominicana. Define la prioridad de la familia en la formación de los menores."
    },
    {
        id: 255,
        categoria: "Evaluación Nivel Inicial",
        pregunta: "En el Nivel Inicial, ¿se aplican exámenes de fin de año para determinar si el niño pasa de curso?",
        opciones: [
            "A) Sí, son obligatorios según la Ley 66-97.",
            "B) No, la evaluación es continua y la promoción es por edad.",
            "C) Solo si el niño tiene mala conducta.",
            "D) Solo en los colegios privados."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. Se prohíbe el uso de exámenes estandarizados de aprobación/reprobación en Inicial."
    },
    {
        id: 256,
        categoria: "Ley 200-04",
        pregunta: "Según la Ley de Libre Acceso a la Información, una respuesta de la institución ante una solicitud de información debe darse en un plazo máximo de:",
        opciones: [
            "A) 24 horas.",
            "B) 15 días hábiles (con posibilidad de prórroga en casos complejos).",
            "C) Un año.",
            "D) No hay plazo legal."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 200-04. Establece tiempos claros para garantizar la transparencia."
    },
    {
        id: 257,
        categoria: "Ética y Regalos",
        pregunta: "El Código de Ética del MINERD prohíbe que los psicólogos reciban beneficios de proveedores de servicios (ej. centros de terapia) por:",
        opciones: [
            "A) Referirles estudiantes del centro educativo.",
            "B) Saludarles en la calle.",
            "C) Asistir a conferencias gratuitas organizadas por ellos.",
            "D) Leer sus folletos informativos."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Código de Ética y Orden Departamental 22-2023. El tráfico de influencias y el beneficio personal son faltas graves."
    },
    {
        id: 258,
        categoria: "Estrategia Nacional de Desarrollo",
        pregunta: "La Ley 1-12 busca que el sistema educativo dominicano fomente:",
        opciones: [
            "A) La memorización de datos históricos solamente.",
            "B) El pensamiento crítico, la creatividad y los valores éticos.",
            "C) La obediencia ciega a los superiores.",
            "D) La competencia agresiva entre estudiantes."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 1-12. Son los pilares del ciudadano que requiere la Estrategia Nacional."
    },
    {
        id: 259,
        categoria: "Atención a la Diversidad",
        pregunta: "Un niño con Aptitudes Sobresalientes (Talento) en Inicial, según la Ordenanza 05-2024, requiere:",
        opciones: [
            "A) Que lo pasen a 5to de Primaria de inmediato.",
            "B) Actividades de enriquecimiento curricular que desafíen sus capacidades dentro de su grupo de edad.",
            "C) Que le pongan a limpiar el aula para que no se aburra.",
            "D) No necesita nada porque ya es inteligente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. La alta capacidad también es una NEAE que requiere atención diferenciada."
    },
    {
        id: 260,
        categoria: "Rol del Psicólogo - Convivencia",
        pregunta: "En la resolución de un conflicto entre dos familias de Inicial, la postura de la psicóloga debe ser:",
        opciones: [
            "A) Apoyar a la familia que tenga más dinero.",
            "B) Imparcial, mediadora y siempre buscando el interés superior del niño.",
            "C) No involucrarse en absoluto.",
            "D) Decidir quién tiene la razón y castigar a la otra parte."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2023 y Manual de Convivencia. La neutralidad y la mediación son funciones técnicas de la unidad de orientación."
    },

    {
        id: 261,
        categoria: "Evaluación Nivel Inicial",
        pregunta: "Cuando un niño de Inicial muestra un avance significativo en un indicador pero aún necesita apoyo intermitente, ¿qué valoración corresponde según la Ordenanza 04-2023?",
        opciones: [
            "A) Logrado (L).",
            "B) En Proceso (EP).",
            "C) Todavía No Logrado (TNL).",
            "D) 75 puntos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. 'En Proceso' se usa cuando el niño muestra la conducta o habilidad con ayuda o de manera inconstante."
    },
    {
        id: 262,
        categoria: "Inclusión y NEAE",
        pregunta: "Usted recibe un niño con un diagnóstico de Autismo en Inicial. Según la Ordenanza 05-2024, la primera respuesta del centro debe ser:",
        opciones: [
            "A) Solicitar una sombra pagada por los padres de forma obligatoria.",
            "B) Aplicar el Diseño Universal para el Aprendizaje (DUA) y realizar los ajustes curriculares necesarios.",
            "C) Decir que el centro no está preparado y referir a otro lugar.",
            "D) Poner al niño en un aula aparte para no distraer a los demás."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. La educación inclusiva obliga al centro a realizar ajustes razonables para garantizar el acceso al currículo."
    },
    {
        id: 263,
        categoria: "Protección Infantil",
        pregunta: "Un padre de familia se presenta al centro de Inicial en estado de embriaguez a retirar a su hijo. ¿Cuál es el protocolo correcto basándose en la Ley 136-03?",
        opciones: [
            "A) Entregar al niño para evitar conflictos con el padre.",
            "B) Retener al niño por su seguridad, contactar a otro tutor autorizado y, si es necesario, a las autoridades (CONANI/Policía).",
            "C) Llamar a la prensa para denunciar el hecho.",
            "D) Cobrarle una multa al padre antes de entregarle al niño."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 y Protocolos de Cultura de Paz. El interés superior y la integridad física del niño son la prioridad absoluta."
    },
    {
        id: 264,
        categoria: "Función Pública",
        pregunta: "Según la Ley 41-08, ¿cuál de estos es un deber de la psicóloga escolar?",
        opciones: [
            "A) Realizar proselitismo político dentro del centro educativo.",
            "B) Denunciar ante sus superiores o autoridades competentes cualquier acto de corrupción que tenga conocimiento.",
            "C) Cobrar consultas privadas a los padres del mismo centro donde labora.",
            "D) Ausentarse sin avisar si no tiene casos pendientes."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 41-08. La denuncia de actos ilícitos y la probidad son deberes éticos del servidor público."
    },
    {
        id: 265,
        categoria: "Evaluación Nivel Inicial",
        pregunta: "¿Cuál es el propósito fundamental de la evaluación en el Nivel Inicial de acuerdo con la Ordenanza 04-2023?",
        opciones: [
            "A) Seleccionar a los niños más brillantes para un grupo especial.",
            "B) Recoger información relevante para retroalimentar el proceso de enseñanza y potenciar el desarrollo integral.",
            "C) Certificar que el niño ya sabe leer antes de ir a Primaria.",
            "D) Clasificar a los niños según su nivel económico."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La evaluación es formativa y busca mejorar el aprendizaje, no etiquetar al niño."
    },
    {
        id: 266,
        categoria: "Relación Escuela-Familia",
        pregunta: "La Ordenanza 03-2025 establece que los padres tienen derecho a ser informados sobre la evaluación de sus hijos:",
        opciones: [
            "A) Solo si el niño va a reprobar.",
            "B) De manera periódica, sistemática y clara sobre los avances y dificultades.",
            "C) Solo una vez al año al finalizar el ciclo.",
            "D) Solo si pagan la cuota de la APMAE."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 03-2025. La transparencia en el progreso educativo es un derecho de los tutores legales."
    },
    {
        id: 267,
        categoria: "Código de Ética",
        pregunta: "La Orden Departamental 22-2023 prohíbe al personal docente y administrativo en el Nivel Inicial:",
        opciones: [
            "A) Abrazar a un niño de forma afectiva y protectora frente a testigos.",
            "B) Besar a los estudiantes en la boca o tener cualquier contacto físico de carácter erótico o inapropiado.",
            "C) Cantar canciones infantiles con los niños.",
            "D) Ayudar a un niño a abrocharse los zapatos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. Establece límites de contacto físico para prevenir abusos y proteger la integridad del menor."
    },
    {
        id: 268,
        categoria: "Estrategia Nacional de Desarrollo",
        pregunta: "En relación a la Ley 1-12, la formación en valores en el Nivel Inicial busca crear ciudadanos:",
        opciones: [
            "A) Que solo obedezcan sin preguntar.",
            "B) Responsables, solidarios y con respeto a los derechos humanos y la identidad nacional.",
            "C) Que prefieran vivir en otros países.",
            "D) Que solo se interesen por el dinero."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 1-12 END 2030. La formación ciudadana empieza desde la primera infancia."
    },
    {
        id: 269,
        categoria: "Detección Temprana",
        pregunta: "Un niño de 4 años en el centro no establece contacto visual y no responde a su nombre. La psicóloga, bajo un enfoque preventivo, debe considerar esto como:",
        opciones: [
            "A) Un comportamiento normal de timidez.",
            "B) Una señal de alerta que requiere observación detallada y posible referimiento a evaluación diagnóstica.",
            "C) Una falta de respeto que debe ser sancionada.",
            "D) Un signo de que el niño es muy independiente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Referencia: Guía de señales de alerta del MINERD. La detección temprana es responsabilidad del psicólogo escolar."
    },
    {
        id: 270,
        categoria: "Convivencia Escolar",
        pregunta: "Según la Ordenanza 05-2023, cuando ocurre un conflicto en Inicial, la medida a aplicar debe ser 'Restaurativa'. Esto significa:",
        opciones: [
            "A) Que el niño que hizo algo malo debe ser humillado públicamente.",
            "B) Que se busca reparar el daño, aprender de la situación y restaurar la armonía en el grupo.",
            "C) Que el niño debe pagar los materiales que rompió de su bolsillo.",
            "D) Que el niño debe ser cambiado de aula inmediatamente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2023. El enfoque restaurativo prioriza el aprendizaje social sobre el castigo punitivo."
    },
    {
        id: 271,
        categoria: "Transparencia (Ley 200-04)",
        pregunta: "La Ley 200-04 garantiza que cualquier ciudadano puede solicitar al centro educativo información sobre:",
        opciones: [
            "A) La vida privada de los profesores.",
            "B) El uso de los recursos del fondo de descentralización entregados a la Junta de Centro.",
            "C) Los expedientes psicológicos confidenciales de los niños.",
            "D) Las notas personales que la psicóloga toma en su diario privado."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 200-04. La información financiera pública es de libre acceso, la información personal sensible es protegida."
    },
    {
        id: 272,
        categoria: "Evaluación Nivel Inicial",
        pregunta: "El Registro de Grado de Nivel Inicial debe completarse de manera:",
        opciones: [
            "A) Mensual, sin importar si hay cambios.",
            "B) Sistemática y continua, reflejando el progreso real observado en el niño.",
            "C) Al final del año, basándose en la memoria del docente.",
            "D) Solo cuando el distrito educativo anuncie una supervisión."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La veracidad y sistematicidad del registro garantizan una evaluación justa."
    },
    {
        id: 273,
        categoria: "Constitución Dominicana",
        pregunta: "El Artículo 63 de la Constitución Dominicana indica que la erradicación del analfabetismo es:",
        opciones: [
            "A) Tarea exclusiva de las iglesias.",
            "B) Una obligación del Estado.",
            "C) Opcional para los ayuntamientos.",
            "D) Responsabilidad solo de los padres que no saben leer."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Constitución Dominicana, Art. 63. Es un mandato constitucional erradicar el analfabetismo en toda la población."
    },
    {
        id: 274,
        categoria: "Inclusión Educativa",
        pregunta: "La Ordenanza 05-2024 prohíbe el uso de términos despectivos o etiquetas para referirse a estudiantes con discapacidad. El término correcto es:",
        opciones: [
            "A) Enfermito.",
            "B) Estudiante con discapacidad o estudiante con NEAE.",
            "C) Niño especial.",
            "D) Minusválido."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024 y Ley 5-13. Se debe utilizar un lenguaje basado en derechos y respeto a la persona."
    },
    {
        id: 275,
        categoria: "Ley 66-97",
        pregunta: "Según la Ley 66-97, el sistema educativo dominicano se fundamenta en principios:",
        opciones: [
            "A) Militares y de control social.",
            "B) Cristianos, democráticos y de justicia social.",
            "C) Exclusivamente tecnológicos.",
            "D) De competencia económica."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 66-97. Define la filosofía que sustenta la educación nacional."
    },
    {
        id: 276,
        categoria: "Desarrollo del Lenguaje",
        pregunta: "Un niño de Inicial que presenta dificultades para pronunciar la 'rr' a los 4 años, la psicóloga debe saber que:",
        opciones: [
            "A) Es una falta grave de aprendizaje.",
            "B) Puede ser parte del proceso normal de adquisición fonológica, pero debe observarse.",
            "C) Debe ser reprobado inmediatamente.",
            "D) Ya debería hablar como un adulto."
        ],
        respuestaCorrecta: 1,
        explicacion: "Referencia: Desarrollo evolutivo del lenguaje. El fonema 'rr' es uno de los últimos en adquirirse (hacia los 5-6 años)."
    },
    {
        id: 277,
        categoria: "Ordenanza 01-2023",
        pregunta: "La Política Nacional de Alfabetización Inicial prioriza que el aprendizaje sea 'Significativo'. Esto ocurre cuando:",
        opciones: [
            "A) El niño memoriza muchas palabras sin entenderlas.",
            "B) El niño conecta los nuevos conocimientos con sus experiencias previas y su entorno.",
            "C) El niño copia 20 páginas de un libro.",
            "D) El niño recibe un premio por cada letra aprendida."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023 y Enfoque Constructivista del currículo."
    },
    {
        id: 278,
        categoria: "Ética Profesional",
        pregunta: "Si una psicóloga escolar de Inicial nota que un docente está siendo negligente con la higiene de los niños, su deber según el Código de Ética es:",
        opciones: [
            "A) Ignorarlo para no buscarse problemas con el compañero.",
            "B) Conversar con el docente de forma asertiva y, si no hay cambio, informar al equipo de gestión para proteger el bienestar del niño.",
            "C) Contárselo a los padres en la salida de forma secreta.",
            "D) Publicarlo en su estado de Facebook sin decir nombres."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Código de Ética y Orden Departamental 22-2023. El bienestar del estudiante prima sobre la camaradería profesional."
    },
    {
        id: 279,
        categoria: "Administración Educativa",
        pregunta: "La 'Descentralización Educativa' mencionada en la Ley 66-97 busca:",
        opciones: [
            "A) Que el Ministro de Educación haga todo el trabajo solo.",
            "B) Transferir poder de decisión y recursos a las regiones, distritos y centros educativos para una gestión más eficiente.",
            "C) Que cada escuela se mande sola sin seguir las leyes del MINERD.",
            "D) Eliminar el Ministerio de Educación."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 66-97. Es el modelo que permite que las comunidades participen en la gestión escolar."
    },
    {
        id: 280,
        categoria: "Evaluación Nivel Inicial",
        pregunta: "¿Qué significa que la evaluación en Inicial sea 'Continua'?",
        opciones: [
            "A) Que el niño tiene que estar tomando exámenes todo el día.",
            "B) Que se realiza durante todo el proceso de enseñanza-aprendizaje, no solo al final.",
            "C) Que la maestra no puede dejar de escribir nunca.",
            "D) Que el niño nunca sale a recreo para que lo evalúen."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La evaluación es parte intrínseca del día a día pedagógico."
   },

    {
        id: 281,
        categoria: "Evaluación Nivel Inicial",
        pregunta: "En el Nivel Inicial, el informe de progreso que se entrega a la familia debe estar redactado en un lenguaje:",
        opciones: [
            "A) Altamente técnico y médico para demostrar profesionalismo.",
            "B) Claro, sencillo y descriptivo, resaltando los logros y las áreas que requieren apoyo.",
            "C) Inglés, para preparar a los niños para el futuro.",
            "D) Códigos numéricos que solo el psicólogo entienda."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. El objetivo es que la familia comprenda el desarrollo del niño para colaborar en su proceso."
    },
    {
        id: 282,
        categoria: "Inclusión Educativa",
        pregunta: "La Ordenanza 05-2024 establece que la 'Educación Inclusiva' implica:",
        opciones: [
            "A) Crear escuelas especiales en cada barrio para separar a los niños.",
            "B) Transformar el sistema educativo para eliminar barreras y asegurar la participación de todos sin discriminación.",
            "C) Inscribir a los niños con discapacidad pero dejarlos en una esquina sin hacer nada.",
            "D) Que solo los niños con NEAE asistan a la escuela tres días a la semana."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. La inclusión es un derecho humano que exige cambios sistémicos para la equidad."
    },
    {
        id: 283,
        categoria: "Ley 136-03",
        pregunta: "Si un psicólogo escolar identifica que un niño de inicial es víctima de negligencia grave por parte de sus padres (falta de alimentación o higiene extrema), debe:",
        opciones: [
            "A) No hacer nada porque es un problema privado de la familia.",
            "B) Intervenir orientando a la familia y, de persistir, reportar a las autoridades de protección (CONANI).",
            "C) Adoptar al niño de manera informal.",
            "D) Expulsar al niño del centro para evitar mala imagen."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03. La negligencia es una forma de maltrato por omisión que debe ser abordada por el sistema de protección."
    },
    {
        id: 284,
        categoria: "Función Pública (Ley 41-08)",
        pregunta: "¿Cuál de las siguientes es una 'Prohibición' para los servidores públicos según la Ley 41-08?",
        opciones: [
            "A) Tomar vacaciones en el periodo escolar correspondiente.",
            "B) Solicitar o aceptar gratificaciones, dádivas u obsequios a cambio de servicios propios de su cargo.",
            "C) Participar en talleres de capacitación del MINERD.",
            "D) Afiliarse a un sindicato docente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 41-08. El soborno y el cohecho son faltas gravísimas que conllevan la destitución."
    },
    {
        id: 285,
        categoria: "Gestión Escolar",
        pregunta: "Según la Ordenanza 03-2025, el Consejo Estudiantil es un organismo de participación. En el Nivel Inicial, este se fomenta principalmente para:",
        opciones: [
            "A) Organizar huelgas contra la dirección.",
            "B) Iniciar el aprendizaje de la vida democrática y la expresión de opiniones de forma organizada.",
            "C) Que los niños elijan qué merienda se va a comprar.",
            "D) Sustituir el trabajo de los maestros."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 03-2025 y Ley 66-97. La formación ciudadana comienza con la participación temprana."
    },
    {
        id: 286,
        categoria: "Ética Profesional",
        pregunta: "Ante un caso de divorcio conflictivo donde ambos padres disputan la tutoría, la psicóloga de Inicial debe:",
        opciones: [
            "A) Elegir al padre que mejor le caiga.",
            "B) Mantener la neutralidad, enfocarse en el bienestar emocional del niño y basarse solo en documentos legales oficiales (sentencias).",
            "C) No dejar que el niño entre al centro hasta que los padres se arreglen.",
            "D) Testificar en favor de la madre sin que un juez se lo pida."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Código de Ética y Orden Departamental 22-2023. La actuación del psicólogo debe ser técnica, legal e imparcial."
    },
    {
        id: 287,
        categoria: "Evaluación Nivel Inicial",
        pregunta: "La 'Evaluación Formativa' en el Nivel Inicial se realiza:",
        opciones: [
            "A) Solo cuando el niño se porta mal.",
            "B) Durante todo el proceso para ajustar las estrategias pedagógicas a las necesidades del niño.",
            "C) Únicamente mediante exámenes de opción múltiple.",
            "D) Al final de cada ciclo de 6 años."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. Permite tomar decisiones a tiempo para no esperar al final del año."
    },
    {
        id: 288,
        categoria: "Inclusión y DUA",
        pregunta: "En el Diseño Universal para el Aprendizaje (DUA), proporcionar 'Múltiples Formas de Expresión' significa:",
        opciones: [
            "A) Que todos los niños deben hablar tres idiomas.",
            "B) Permitir que los niños demuestren lo aprendido de diferentes maneras (dibujo, señas, lenguaje oral, etc.).",
            "C) Que el aula debe tener muchos juguetes diferentes.",
            "D) Que la psicóloga debe hablar en voz alta siempre."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. Reconoce que cada niño tiene diferentes habilidades para comunicar sus logros."
    },
    {
        id: 289,
        categoria: "Derecho a la Información",
        pregunta: "La Ley 200-04 indica que si la información solicitada ya está disponible en la página web institucional, el centro debe:",
        opciones: [
            "A) Negar la respuesta.",
            "B) Indicar al solicitante el enlace o fuente exacta donde puede consultarla.",
            "C) Imprimirla y cobrar por las copias.",
            "D) Ignorar la solicitud."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 200-04. Facilita el acceso rápido a la información pública existente."
    },
    {
        id: 290,
        categoria: "Estrategia Nacional de Desarrollo",
        pregunta: "La Ley 1-12 (END) busca que la República Dominicana sea un país donde:",
        opciones: [
            "A) No sea necesario ir a la escuela.",
            "B) Exista igualdad de oportunidades y justicia social para todos los ciudadanos.",
            "C) Solo los ricos tengan acceso a la tecnología.",
            "D) El sistema educativo sea el más caro del mundo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 1-12. La educación es el motor principal para lograr la equidad social planteada en la END."
    },
    {
        id: 291,
        categoria: "Código de Ética",
        pregunta: "La Orden Departamental 22-2023 establece que el personal educativo que tenga conocimiento de una falta ética de un compañero y lo oculte:",
        opciones: [
            "A) Es un buen compañero.",
            "B) Incurre en una falta por omisión y puede ser sancionado.",
            "C) Recibirá un premio por lealtad.",
            "D) No tiene responsabilidad alguna."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. El encubrimiento de faltas graves daña la institucionalidad y la seguridad de los niños."
    },
    {
        id: 292,
        categoria: "Convivencia Escolar",
        pregunta: "En el Nivel Inicial, la 'Disciplina Positiva' se basa en:",
        opciones: [
            "A) Dejar que los niños hagan lo que quieran sin límites.",
            "B) Establecer límites claros basados en el respeto, la firmeza y el cariño, sin violencia.",
            "C) Premiar con dulces cada vez que un niño se queda sentado.",
            "D) Usar el miedo como herramienta de control."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2023. Busca el desarrollo de la autorregulación en el niño."
    },
    {
        id: 293,
        categoria: "Ley 5-13 Discapacidad",
        pregunta: "La Ley 5-13 establece que los edificios escolares deben cumplir con normas de:",
        opciones: [
            "A) Decoración de lujo.",
            "B) Accesibilidad universal (rampas, baños adaptados, etc.).",
            "C) Tener solo dos pisos.",
            "D) Colores azul y blanco obligatoriamente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 5-13. El entorno físico no debe ser una barrera para el acceso a la educación."
    },
    {
        id: 294,
        categoria: "Evaluación Nivel Inicial",
        pregunta: "¿Quién es el responsable directo de completar el Registro de Grado en el Nivel Inicial?",
        opciones: [
            "A) El conserje del centro.",
            "B) La docente de aula, con el apoyo y orientación de la psicóloga.",
            "C) Los padres de familia en las reuniones trimestrales.",
            "D) El digitador del distrito educativo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La docente es quien observa el día a día, pero la psicóloga orienta sobre casos especiales."
    },
    {
        id: 295,
        categoria: "Constitución Dominicana",
        pregunta: "El derecho a la libertad de expresión (Art. 49) en el contexto escolar significa que:",
        opciones: [
            "A) Los niños pueden decir palabras obscenas.",
            "B) Los estudiantes tienen derecho a expresar sus ideas y opiniones libremente, acorde a su etapa de desarrollo.",
            "C) El director puede prohibir que los psicólogos hablen con los padres.",
            "D) No se puede criticar ninguna decisión del Ministerio."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Constitución Dominicana. La libertad de expresión es un derecho fundamental que se educa en la escuela."
    },
    {
        id: 296,
        categoria: "Inclusión y NEAE",
        pregunta: "Un niño con 'Dificultades Específicas de Aprendizaje' (DEA) en Inicial suele presentar señales en:",
        opciones: [
            "A) El tamaño de sus zapatos.",
            "B) El desarrollo del lenguaje, la percepción visual o la coordinación motora.",
            "C) Su preferencia por colores oscuros.",
            "D) La cantidad de agua que bebe."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. Estas son funciones básicas que impactarán el aprendizaje posterior de la lectura y el cálculo."
    },
    {
        id: 297,
        categoria: "Ordenanza 01-2023",
        pregunta: "La Política Nacional de Alfabetización considera que la lectura es un proceso de:",
        opciones: [
            "A) Construcción de significados, no solo decodificación de letras.",
            "B) Repetición de sonidos en voz alta.",
            "C) Copiado de textos del libro a la mascota.",
            "D) Adorno para la biblioteca."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Ordenanza 01-2023. Leer implica comprender y usar el lenguaje para comunicarse."
    },
    {
        id: 298,
        categoria: "Ley 66-97",
        pregunta: "El Consejo Nacional de Educación es el organismo que:",
        opciones: [
            "A) Solo se encarga de limpiar las escuelas.",
            "B) Dicta las políticas educativas generales y aprueba las ordenanzas.",
            "C) Paga los sueldos de los maestros directamente.",
            "D) Vende los uniformes escolares."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 66-97. Es la máxima autoridad en materia de política educativa en el país."
    },
    {
        id: 299,
        categoria: "Manual de Convivencia",
        pregunta: "Cuando se aplica una medida educativa en el Nivel Inicial, la prioridad es:",
        opciones: [
            "A) Que el niño pase vergüenza para que no lo repita.",
            "B) La protección de los derechos del niño y su formación integral.",
            "C) Que los padres paguen una multa económica.",
            "D) Que el niño sea suspendido por un mes."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2023. El enfoque es siempre pedagógico y de respeto a la dignidad humana."
    },
    {
        id: 300,
        categoria: "Evaluación de Desempeño",
        pregunta: "La evaluación de desempeño para una psicóloga escolar busca fundamentalmente:",
        opciones: [
            "A) Crear miedo entre el personal.",
            "B) Fortalecer la calidad del servicio educativo mediante la retroalimentación y la mejora de las competencias profesionales.",
            "C) Eliminar los puestos de psicología en los centros.",
            "D) Solo contar cuántas horas estuvo sentada en la oficina."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 41-08 y reglamentos del MINERD. Es un proceso de crecimiento institucional y personal."
    },

    {
        id: 301,
        categoria: "Evaluación de Desempeño",
        pregunta: "Durante su Evaluación de Desempeño, se le presenta un caso donde una docente de Pre-Primario le exige aplicar una prueba de coeficiente intelectual (CI) a un niño de 5 años porque 'aprende lento'. Según la Ordenanza 05-2024, su respuesta técnica debe ser:",
        opciones: [
            "A) Aplicar la prueba inmediatamente para complacer a la docente.",
            "B) Explicar que la evaluación en Inicial es ecológica y procesual, priorizando la identificación de barreras y no la medición de un CI estático.",
            "C) Referir al niño al psiquiatra para que él aplique la prueba.",
            "D) Decirle a la docente que el niño no tiene solución."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. El modelo inclusivo dominicano rechaza el enfoque clínico/médico (etiquetas de CI) en favor del modelo social (identificar barreras en el entorno)."
    },
    {
        id: 302,
        categoria: "Ordenanza 01-2023 (Alfabetización)",
        pregunta: "Una docente de Kínder (4 años) castiga a un niño dejándolo sin recreo porque no sabe escribir su nombre completo con letra cursiva. Como psicóloga, usted interviene basándose en:",
        opciones: [
            "A) Felicitar a la maestra por su exigencia.",
            "B) La Ordenanza 01-2023, que establece que la alfabetización inicial es un proceso lúdico y emergente, y las normas de convivencia prohíben suprimir el recreo.",
            "C) Sugerir que el niño copie su nombre 100 veces.",
            "D) Citar a los padres para decirles que el niño fracasará."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023 y 05-2023. Exigir habilidades no acordes a la etapa evolutiva genera frustración; quitar el recreo es una medida prohibida."
    },
    {
        id: 303,
        categoria: "Ley 136-03",
        pregunta: "Usted nota que una niña de 4 años acude al centro con el mismo uniforme sucio toda la semana y presenta bajo peso severo. El director le sugiere 'no meterse en problemas familiares'. Su deber legal es:",
        opciones: [
            "A) Obedecer al director por respeto a la jerarquía.",
            "B) Documentar el caso, intervenir con la familia y, de no haber cambios, notificar al Sistema Nacional de Protección (CONANI), pues es negligencia (Ley 136-03).",
            "C) Comprarle comida a escondidas.",
            "D) Burlarse de la niña frente al curso."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03. El deber de denuncia ante el maltrato u omisión de cuidados es obligatorio e indelegable para el personal escolar."
    },
    {
        id: 304,
        categoria: "Ordenanza 04-2023 (Registro de Grado)",
        pregunta: "En la reunión de evaluación del primer periodo, la maestra le informa que pondrá 'Todavía No Logrado' (TNL) a la mayoría de los niños para que los padres 'se asusten y ayuden más'. Su orientación debe ser:",
        opciones: [
            "A) Apoyar la estrategia para integrar a las familias.",
            "B) Recordar que la evaluación debe ser ética y objetiva, reflejando el progreso real, no usarse como herramienta de castigo o presión.",
            "C) Decirle que mejor ponga números rojos.",
            "D) Cambiar las notas usted misma sin avisarle a la maestra."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La evaluación tiene un carácter ético y formativo, no punitivo."
    },
    {
        id: 305,
        categoria: "Inclusión (Ordenanza 05-2024)",
        pregunta: "Al planificar los 'Ajustes Curriculares' para un estudiante sordo en el Nivel Inicial, la estrategia principal en el aula ordinaria debe ser:",
        opciones: [
            "A) Obligarlo a hablar oralmente sin usar señas.",
            "B) Incorporar apoyos visuales, material concreto y promover el aprendizaje básico de Lengua de Señas Dominicana (LSD) en el entorno.",
            "C) Dejarlo dibujando todo el día para que no moleste.",
            "D) Pedirle a la madre que se quede con él en el aula."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. El entorno debe proveer los medios de comunicación alternativos o aumentativos que requiera el estudiante."
    },
    {
        id: 306,
        categoria: "Código de Ética",
        pregunta: "En una fiesta de cumpleaños fuera del horario escolar, los padres de un estudiante de su centro le invitan a tomar bebidas alcohólicas con ellos y subir fotos a Instagram. Según la Orden Departamental 22-2023:",
        opciones: [
            "A) Puede hacerlo porque es fuera del horario de trabajo.",
            "B) Debe declinar, ya que el personal educativo debe mantener una imagen de decoro y distancia profesional dentro y fuera de la escuela.",
            "C) Puede hacerlo solo si no lleva el uniforme del MINERD.",
            "D) Puede hacerlo si las fotos duran solo 24 horas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. El código regula la imagen pública y las relaciones extralaborales que puedan comprometer la figura de autoridad y respeto."
    },
    {
        id: 307,
        categoria: "Evaluación Diagnóstica",
        pregunta: "¿Qué técnica es la más pertinente y válida para que la psicóloga evalúe la motricidad gruesa de un grupo de niños de 3 años en su etapa diagnóstica?",
        opciones: [
            "A) Un examen escrito de opción múltiple.",
            "B) La observación sistemática durante actividades de juego guiado en el patio o área de psicomotricidad.",
            "C) Una entrevista a solas en el departamento de orientación.",
            "D) Pedirles que lean un cuento."
        ],
        respuestaCorrecta: 1,
        explicacion: "Referencia: Currículo de Nivel Inicial y Ordenanza 04-2023. La observación en contextos naturales de juego es la principal técnica de recolección de datos."
    },
    {
        id: 308,
        categoria: "Convivencia (05-2023)",
        pregunta: "Un niño de Pre-Primario muerde frecuentemente a sus compañeros. La madre de un niño agredido exige la expulsión del agresor. Su proceder como psicóloga es:",
        opciones: [
            "A) Expulsar al niño agresor para evitar demandas.",
            "B) Explicar a la madre que en Inicial las medidas son formadoras, no punitivas, y aplicar un plan de modificación conductual con la familia del agresor.",
            "C) Permitir que la madre agredida le grite al niño agresor.",
            "D) Decirle a la maestra que amarre al niño agresor a la silla."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2023. Protege el derecho a la educación de todos los menores; en Inicial no existe la expulsión como medida disciplinaria."
    },
    {
        id: 309,
        categoria: "Función Pública (Ley 41-08)",
        pregunta: "Durante el horario laboral, el director le pide que salga del centro para ir a un mitin político del partido de gobierno. Según la Ley 41-08, usted debe:",
        opciones: [
            "A) Ir con entusiasmo para asegurar su puesto.",
            "B) Negarse, ya que está prohibido realizar proselitismo político durante la jornada laboral.",
            "C) Ir pero quedarse escondida en la parte de atrás.",
            "D) Obligar a los maestros a ir también."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 41-08. El ejercicio de la función pública es apartidista y el proselitismo en horario laboral es falta grave."
    },
    {
        id: 310,
        categoria: "Constitución Art. 63",
        pregunta: "Una familia inmigrante indocumentada intenta inscribir a su hijo de 5 años en el centro. El director se niega por falta de papeles. Según el Art. 63 de la Constitución y las normativas del MINERD, usted aconseja:",
        opciones: [
            "A) Apoyar al director porque los extranjeros no tienen derechos.",
            "B) Recordar que el derecho a la educación es universal; se inscribe al niño y se le da un código temporal escolar mientras regularizan.",
            "C) Llamar a migración inmediatamente.",
            "D) Cobrarles en dólares para aceptarlo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Art. 63 Constitución y normativas de inscripción MINERD. El derecho a la educación prima sobre el estatus migratorio del menor."
    },
    {
        id: 311,
        categoria: "Participación Familiar (03-2025)",
        pregunta: "Al conformar el Comité de Curso en un aula de Pre-Primario, la docente sugiere elegir solo a madres que no trabajen para que 'tengan tiempo'. Su intervención técnica, basada en la Ordenanza 03-2025, es:",
        opciones: [
            "A) Estar de acuerdo, es más práctico.",
            "B) Promover que la elección sea democrática e inclusiva, permitiendo la participación de padres, madres o tutores independientemente de su ocupación.",
            "C) Imponer a dedo quiénes serán del comité.",
            "D) Prohibir que se forme el comité."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 03-2025. La participación debe ser democrática, equitativa y sin discriminación."
    },
    {
        id: 312,
        categoria: "Ley 5-13 (Discapacidad)",
        pregunta: "El centro está organizando el acto cívico del 27 de febrero. Un niño con parálisis cerebral en silla de ruedas es dejado en el aula 'para que no se acalore'. Esto constituye:",
        opciones: [
            "A) Una medida de protección adecuada.",
            "B) Un acto de exclusión y discriminación contrario a la Ley 5-13.",
            "C) Una decisión exclusiva de la maestra de educación física.",
            "D) Un favor para la madre del niño."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 5-13 y Ordenanza 05-2024. Los estudiantes con discapacidad tienen derecho a participar en todas las actividades socioculturales del centro."
    },
    {
        id: 313,
        categoria: "Rol del Psicólogo - Planificación",
        pregunta: "En las comunidades de aprendizaje (grupos pedagógicos), el rol de la psicóloga de Inicial frente a la planificación docente es:",
        opciones: [
            "A) Dictarle a la maestra lo que tiene que hacer.",
            "B) Asesorar en la incorporación del DUA y en estrategias para atender los diferentes ritmos y estilos de aprendizaje de los niños.",
            "C) Revisar la ortografía de la planificación exclusivamente.",
            "D) No participar porque eso es trabajo solo de la coordinadora."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Funciones del Departamento de Orientación y Psicología MINERD. El apoyo psicopedagógico en la planificación garantiza la atención a la diversidad."
    },
    {
        id: 314,
        categoria: "Ley 200-04 (Transparencia)",
        pregunta: "Una organización comunitaria solicita formalmente el POA (Plan Operativo Anual) del centro educativo. La respuesta institucional adecuada es:",
        opciones: [
            "A) Entregarlo, ya que es un documento de carácter público y planificación institucional.",
            "B) Negarlo argumentando confidencialidad de Estado.",
            "C) Entregar solo la portada.",
            "D) Cobrar 10,000 pesos por la información."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Ley 200-04. Los planes operativos y presupuestos de instituciones públicas son de libre acceso."
    },
    {
        id: 315,
        categoria: "Evaluación Nivel Inicial",
        pregunta: "Si en el segundo periodo de evaluación (mitad de año) un niño de Inicial tiene casi todos sus indicadores en 'TNL', el protocolo del equipo de gestión y psicología es:",
        opciones: [
            "A) Enviar una carta de expulsión preventiva.",
            "B) Activar un plan de intervención psicopedagógica, realizar ajustes en el aula y tener tutorías con la familia.",
            "C) Esperar a junio a ver si mejora milagrosamente.",
            "D) Regalarle los indicadores ('L') para que los padres no se quejen."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La evaluación procesual sirve precisamente para activar apoyos a tiempo y evitar rezagos."
    },
    {
        id: 316,
        categoria: "Ley 1-12 (Estrategia Nacional)",
        pregunta: "La Estrategia Nacional de Desarrollo al 2030 promueve en el Nivel Inicial la política de:",
        opciones: [
            "A) Reducir la inversión en la primera infancia.",
            "B) La atención integral a la primera infancia (ej. INAIPI) y la universalización de la educación inicial de calidad.",
            "C) Privatizar todos los Kínder.",
            "D) Eliminar el desayuno escolar."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 1-12. El Eje Estratégico 2 prioriza la educación desde la primera infancia como base del desarrollo humano."
    },
    {
        id: 317,
        categoria: "Código de Ética",
        pregunta: "Una maestra de su centro publica un video en TikTok donde los niños de su aula aparecen bailando una canción con letras explícitas. Según la Orden Departamental 22-2023, esto es:",
        opciones: [
            "A) Excelente para promover el talento artístico.",
            "B) Una falta grave por exponer la imagen de menores sin consentimiento y usar material no pedagógico y moralmente inapropiado.",
            "C) Permitido si los niños están de espaldas.",
            "D) Problema exclusivo de los padres."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. La hipersexualización infantil y la exposición mediática sin fin educativo son severamente sancionadas."
    },
    {
        id: 318,
        categoria: "Desarrollo Evolutivo",
        pregunta: "Un indicador clave del desarrollo socio-emocional que usted esperaría observar y evaluar en un niño de 5 años (Pre-Primario) es:",
        opciones: [
            "A) Capacidad para resolver ecuaciones de primer grado.",
            "B) Reconocer y nombrar emociones básicas propias y ajenas, mostrando incipiente empatía.",
            "C) Leer 100 palabras por minuto sin equivocarse.",
            "D) Quedarse sentado sin moverse durante 4 horas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Referencia: Currículo de Nivel Inicial. El desarrollo de la inteligencia emocional es un pilar en esta etapa."
    },
    {
        id: 319,
        categoria: "Convivencia (Rutas de Actuación)",
        pregunta: "Ante un posible caso de Abuso Sexual Infantil (ASI) detectado por un cambio abrupto en los dibujos y conducta de una niña de Inicial, la psicóloga DEBE:",
        opciones: [
            "A) Confrontar directamente al presunto abusador.",
            "B) Aplicar la ruta de actuación del MINERD: asegurar a la niña, no revictimizar con preguntas repetitivas, y derivar el caso a la fiscalía/CONANI inmediatamente.",
            "C) Llamar a los padres a una reunión grupal.",
            "D) Ocultar el caso por falta de pruebas médicas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Protocolos de Cultura de Paz MINERD y Ley 136-03. La escuela no investiga, detecta y deriva a las autoridades judiciales."
    },
    {
        id: 320,
        categoria: "Evaluación Nivel Inicial",
        pregunta: "En el contexto de la evaluación, el Portafolio en el Nivel Inicial se utiliza para:",
        opciones: [
            "A) Guardar basura del aula.",
            "B) Evidenciar el proceso y progreso del niño a través de la recopilación sistemática de sus producciones y trabajos.",
            "C) Mostrar solo los trabajos que están perfectos.",
            "D) Dárselo al director para que decida quién pasa de curso."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. El portafolio es un instrumento cualitativo que muestra la evolución cronológica del aprendizaje."
    },

    {
        id: 321,
        categoria: "Inclusión y DUA",
        pregunta: "Un estudiante de Kínder tiene Trastorno por Déficit de Atención e Hiperactividad (TDAH). Una medida basada en el DUA para la gestión del aula sería:",
        opciones: [
            "A) Sentarlo castigado frente a la pared.",
            "B) Alternar actividades pasivas con actividades de movimiento, y estructurar el tiempo con apoyos visuales (agendas pictóricas).",
            "C) Quitarle el recreo hasta que termine la tarea.",
            "D) Exigirle a los padres que lo mediquen para aceptarlo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. El DUA busca modificar el entorno y la metodología (ej. agendas visuales) para facilitar la participación."
    },
    {
        id: 322,
        categoria: "Ley 41-08 (Derechos)",
        pregunta: "Una psicóloga del MINERD solicita una licencia por maternidad. Según el marco legal dominicano, este derecho le otorga un descanso remunerado de:",
        opciones: [
            "A) 2 semanas.",
            "B) 14 semanas (según las últimas modificaciones del Ministerio de Administración Pública y OIT).",
            "C) 1 año completo.",
            "D) No tiene derecho si es de nuevo ingreso."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 41-08 y resoluciones del MAP. Es un derecho fundamental de las servidoras públicas."
    },
    {
        id: 323,
        categoria: "Ordenanza 01-2023",
        pregunta: "En la Alfabetización Inicial, el concepto de 'Ambiente Letrado' en el aula de Nivel Inicial significa:",
        opciones: [
            "A) Que el aula no tenga dibujos, solo letras negras.",
            "B) Que el espacio esté intencionalmente organizado con rótulos funcionales, cuentos accesibles y carteles elaborados junto a los niños.",
            "C) Que la maestra obligue a leer desde el primer día.",
            "D) Comprar láminas caras y no dejar que los niños las toquen."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. El ambiente letrado promueve la inmersión natural y significativa en la cultura escrita."
    },
    {
        id: 324,
        categoria: "Ley 136-03 (Derecho al Juego)",
        pregunta: "El Artículo 18 de la Ley 136-03 consagra el derecho al descanso, esparcimiento, juego y actividades recreativas. En el centro educativo, esto se garantiza al:",
        opciones: [
            "A) Eliminar los recreos para tener más horas de matemáticas.",
            "B) Considerar el juego como la principal estrategia pedagógica en Inicial y proteger los tiempos de recreo.",
            "C) Dejar que los niños jueguen en la calle sin supervisión.",
            "D) Cobrar una cuota para usar los juegos del patio."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 y Diseño Curricular de Inicial. El juego es un derecho y el motor del aprendizaje en la primera infancia."
    },
    {
        id: 325,
        categoria: "Código de Ética",
        pregunta: "Usted descubre que el director del centro está alterando los datos de la edad de los niños en el SIGERD (Sistema de Gestión) para poder matricularlos antes de tiempo. Su acción ética es:",
        opciones: [
            "A) Guardar silencio porque él es el jefe.",
            "B) Reportar la irregularidad al Distrito Educativo (Departamento de Orientación o Supervisión), ya que es una falsificación de documentos oficiales.",
            "C) Ayudarle a alterar los documentos para ser su amiga.",
            "D) Publicarlo anónimamente en redes sociales."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023 y Ley 41-08. El encubrimiento de fraude es una falta grave que conlleva responsabilidad compartida."
    },
    {
        id: 326,
        categoria: "Participación Familiar (03-2025)",
        pregunta: "El rol principal de la Asamblea General de la APMAE al inicio del año escolar es:",
        opciones: [
            "A) Decidir qué niños pueden inscribirse.",
            "B) Elegir la Directiva de la Asociación de Padres, Madres y Tutores, y aprobar el plan de trabajo anual.",
            "C) Recaudar dinero obligatoriamente para pagarle a los maestros.",
            "D) Criticar la vestimenta de las maestras."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 03-2025. Es el máximo órgano de participación familiar y funciona de forma democrática."
    },
    {
        id: 327,
        categoria: "Evaluación Nivel Inicial",
        pregunta: "¿Qué técnica cualitativa permite a la psicóloga y docente registrar un evento inusual o significativo del comportamiento de un niño en un momento específico?",
        opciones: [
            "A) El examen estandarizado.",
            "B) El Registro Anecdótico.",
            "C) La rúbrica sumativa.",
            "D) El pase de lista."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. El registro anecdótico capta situaciones contextuales que explican conductas o avances."
    },
    {
        id: 328,
        categoria: "Ley 66-97",
        pregunta: "Según el Estatuto del Docente y la Ley 66-97, ¿cómo se logra el ingreso a la carrera docente (incluyendo orientadores y psicólogos)?",
        opciones: [
            "A) Por designación política directa del Ministro.",
            "B) Mediante la superación de un Concurso de Oposición que evalúa competencias profesionales.",
            "C) Por recomendación de un amigo que trabaje en el distrito.",
            "D) Pagando una cuota de ingreso al sindicato."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 66-97 y Estatuto Docente. El mérito y la capacidad son los únicos criterios para el ingreso al sistema público."
    },
    {
        id: 329,
        categoria: "Inclusión y Transición",
        pregunta: "Cuando un niño con una NEAE asociada a discapacidad pasa de Pre-Primario a Primero de Primaria, la psicóloga de Inicial debe:",
        opciones: [
            "A) Romper su expediente para proteger su privacidad.",
            "B) Coordinar un proceso de 'Transición' con el equipo de Primaria, transfiriendo su Plan de Apoyo a la Diversidad (PAD) para garantizar la continuidad.",
            "C) Desearle buena suerte y olvidarse del caso.",
            "D) Recomendarle a los padres que lo dejen en Inicial un año más por pena."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. La transición articulada evita la interrupción de los apoyos psicopedagógicos entre niveles."
    },
    {
        id: 330,
        categoria: "Constitución (Derecho a la Intimidad)",
        pregunta: "El Artículo 44 de la Constitución protege el derecho a la intimidad y el honor personal. En el contexto escolar de Inicial, esto impide que el personal:",
        opciones: [
            "A) Salude a los niños por su nombre.",
            "B) Divulgue información clínica, familiar o psicológica del estudiante sin autorización de los tutores (salvo requerimiento judicial).",
            "C) Llame a los padres por teléfono.",
            "D) Entregue el informe de notas en un sobre cerrado."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Constitución Art. 44 y Ley 136-03. El secreto profesional y la confidencialidad son mandatos constitucionales."
    },
    {
        id: 331,
        categoria: "Convivencia (Tipificación de Faltas)",
        pregunta: "Una docente abandona el aula de niños de 3 años por 20 minutos para ir a hablar por celular, dejándolos solos. Según las normas disciplinarias laborales del MINERD, esto es:",
        opciones: [
            "A) Una falta leve.",
            "B) Una falta grave o muy grave por abandono de funciones que pone en riesgo inminente la integridad de los menores.",
            "C) Un derecho a su hora libre.",
            "D) Una costumbre aceptable."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 41-08 y Ordenanza 05-2023. La negligencia en la supervisión de la primera infancia es altamente penada."
    },
    {
        id: 332,
        categoria: "Ordenanza 01-2023 (Alfabetización)",
        pregunta: "El enfoque curricular para enseñar a leer y escribir en el nivel inicial dominicano NO es:",
        opciones: [
            "A) Constructivista.",
            "B) Funcional y comunicativo.",
            "C) Mecanicista y repetitivo (ej. planas de 'ma me mi mo mu').",
            "D) Lúdico y experiencial."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ordenanza 01-2023. Se ha superado el método silábico tradicional en favor de la comprensión del sentido de los textos."
    },
    {
        id: 333,
        categoria: "Evaluación de Desempeño",
        pregunta: "Al momento de ser evaluada su competencia de 'Liderazgo y Relaciones Interpersonales', los evaluadores observarán si usted:",
        opciones: [
            "A) Trabaja completamente aislada en su oficina.",
            "B) Fomenta un clima de colaboración, maneja constructivamente los conflictos y se integra activamente al trabajo de la comunidad educativa.",
            "C) Grita para imponer su autoridad.",
            "D) Solo habla con el director."
        ],
        respuestaCorrecta: 1,
        explicacion: "Referencia: Estándares Profesionales y del Desempeño (MINERD). El trabajo en equipo es una competencia cardinal."
    },
    {
        id: 334,
        categoria: "Ley 200-04 (Acceso a la Información)",
        pregunta: "Si un padre solicita copias de los cheques de pago de la Junta de Centro, ¿el director puede negarse argumentando que los padres no son auditores?",
        opciones: [
            "A) Sí, la contabilidad es privada.",
            "B) No, todo ciudadano tiene derecho a escrutar el manejo de los fondos públicos asignados al centro (Ley 200-04).",
            "C) Sí, porque los padres no saben de finanzas.",
            "D) Solo si la APMAE lo autoriza."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 200-04 y Manual de Juntas Descentralizadas. Transparencia total en el uso del presupuesto."
    },
    {
        id: 335,
        categoria: "Rol del Psicólogo - Familia",
        pregunta: "En una 'Escuela de Padres' (espacio de formación) del Nivel Inicial, un tema altamente pertinente propuesto por la psicóloga sería:",
        opciones: [
            "A) Historia de la Revolución Francesa.",
            "B) Pautas de crianza positiva, límites con amor y prevención del abuso infantil.",
            "C) Cómo invertir en la bolsa de valores.",
            "D) Técnicas avanzadas de química orgánica."
        ],
        respuestaCorrecta: 1,
        explicacion: "Referencia: Manual de Orientación y Psicología MINERD. El apoyo psicosocial a la crianza previene factores de riesgo."
    },
    {
        id: 336,
        categoria: "Código de Ética",
        pregunta: "Una maestra le comenta en confianza que un padre soltero de su curso le está invitando a salir románticamente y ella quiere aceptar. Según la Orden Departamental 22-2023, usted le orienta que:",
        opciones: [
            "A) Acepte porque encontrar pareja es difícil.",
            "B) Se abstenga, pues el código prohíbe las relaciones de carácter sexo-afectivo con padres o tutores de los estudiantes mientras estén en el centro.",
            "C) Salgan pero a escondidas.",
            "D) Le pida regalos costosos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. Protege la objetividad pedagógica y evita conflictos de intereses o favoritismos."
    },
    {
        id: 337,
        categoria: "Ley 5-13 Discapacidad",
        pregunta: "Según la Convención sobre los Derechos de las Personas con Discapacidad y la Ley 5-13, ¿quién debe adaptarse en el proceso educativo?",
        opciones: [
            "A) El niño debe curarse para poder entrar a la escuela.",
            "B) La escuela y el sistema educativo deben proveer los ajustes y eliminar las barreras para acoger al niño.",
            "C) Los padres deben buscar una escuela especial siempre.",
            "D) La sociedad no tiene que hacer nada."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 5-13. Consagra el modelo social de la discapacidad: la barrera está en el entorno, no en el individuo."
    },
    {
        id: 338,
        categoria: "Evaluación Nivel Inicial",
        pregunta: "Si la rúbrica de evaluación indica que un niño 'Logrado' (L) arma rompecabezas de 20 piezas, y un niño logra armar uno de 10 piezas con ayuda, su calificación es:",
        opciones: [
            "A) Excelente.",
            "B) En Proceso (EP) o Todavía No Logrado (TNL), dependiendo de la frecuencia de la ayuda y la edad evolutiva.",
            "C) Reprobado.",
            "D) 50 puntos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La valoración cualitativa mide la aproximación a la meta esperada (indicador)."
    },
    {
        id: 339,
        categoria: "Desarrollo del Niño",
        pregunta: "En la primera infancia, la 'Lateralidad' (preferencia por usar más el lado derecho o izquierdo del cuerpo) suele definirse claramente alrededor de los:",
        opciones: [
            "A) 6 meses de nacido.",
            "B) 4 a 5 años de edad.",
            "C) 15 años.",
            "D) Nunca se define."
        ],
        respuestaCorrecta: 1,
        explicacion: "Referencia: Hitos del desarrollo psicomotor (Currículo Nivel Inicial). Es fundamental no forzar al niño a usar una mano específica antes de tiempo."
    },
    {
        id: 340,
        categoria: "Estrategia Nacional de Desarrollo",
        pregunta: "El enfoque de 'Equidad de Género' transversalizado en la Ley 1-12 aplicado al Nivel Inicial significa que:",
        opciones: [
            "A) Solo las niñas pueden jugar con muñecas.",
            "B) Se promueve la igualdad de oportunidades y trato, evitando estereotipos de género desde los primeros años de vida.",
            "C) Los niños varones son más inteligentes.",
            "D) Se debe separar a niños y niñas en aulas distintas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 1-12 y Currículo. La educación debe deconstruir roles sociales discriminatorios desde el preescolar."
    },


    {
        id: 341,
        categoria: "Ley 136-03 (Derecho a la Identidad)",
        pregunta: "Un niño de 5 años asiste al centro, pero su madre no tiene Acta de Nacimiento. La Ley 136-03 y las normas del MINERD dictan que la escuela debe:",
        opciones: [
            "A) Echar al niño a la calle.",
            "B) Inscribirlo provisionalmente y orientar/acompañar a la madre en el proceso de declaración tardía a través de las instituciones competentes.",
            "C) Llamar a la policía para que arreste a la madre.",
            "D) Cobrarle una mensualidad."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03. El derecho a la identidad y el nombre es inalienable, y la escuela actúa como ente garante facilitando la ruta institucional."
    },
    {
        id: 342,
        categoria: "Convivencia y Cultura de Paz",
        pregunta: "En una discusión entre maestras frente a los niños de Kínder, una de ellas lanza un cuaderno. La psicóloga debe intervenir considerando que:",
        opciones: [
            "A) Es algo normal por el estrés.",
            "B) Constituye una falta grave al clima escolar, violando la Ordenanza 05-2023, y es un pésimo modelaje de resolución de conflictos para los menores.",
            "C) Solo debe intervenir si el cuaderno golpea a un niño.",
            "D) Debe grabar un video y enviarlo por WhatsApp."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2023 y Código de Ética. El personal adulto debe ser el principal modelo de autorregulación emocional."
    },
    {
        id: 343,
        categoria: "Ordenanza 05-2024 (Inclusión)",
        pregunta: "El 'Ajuste Curricular Significativo' se diferencia del 'No Significativo' en que el Significativo:",
        opciones: [
            "A) Solo cambia el color del lápiz.",
            "B) Modifica los indicadores de logro o competencias fundamentales adaptándolos a las posibilidades del estudiante, y se registra formalmente en el PAD.",
            "C) Significa que el niño no va a clases.",
            "D) Lo aprueba el Presidente de la República."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. Los ajustes significativos alteran la complejidad de lo que se enseña y evalúa."
    },
    {
        id: 344,
        categoria: "Evaluación de Desempeño",
        pregunta: "En la evaluación de desempeño, el portafolio profesional de la psicóloga debe contener evidencias de:",
        opciones: [
            "A) Sus recibos de compra de ropa.",
            "B) Planificación anual, informes psicopedagógicos (protegiendo identidad), actas de escuelas de padres y registros de acompañamiento docente.",
            "C) Fotos de sus vacaciones.",
            "D) Exámenes de matemáticas que aplicó."
        ],
        respuestaCorrecta: 1,
        explicacion: "Referencia: Instrumentos de Evaluación de Desempeño MINERD. El portafolio es la evidencia empírica de su labor técnica."
    },
    {
        id: 345,
        categoria: "Ley 41-08 (Régimen Disciplinario)",
        pregunta: "Una amonestación escrita a una servidora pública de carrera (como una psicóloga escolar) procede cuando:",
        opciones: [
            "A) Asesina a alguien.",
            "B) Comete faltas de segundo grado, como reincidir en ausencias injustificadas, tras haber agotado las amonestaciones verbales.",
            "C) Llega 1 minuto tarde una sola vez.",
            "D) Hace bien su trabajo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 41-08. El régimen disciplinario es progresivo: amonestación verbal, escrita, suspensión y destitución."
    },
    {
        id: 346,
        categoria: "Ley 66-97 (Fines de la Educación)",
        pregunta: "Según el Artículo 5 de la Ley 66-97, uno de los fines de la educación dominicana es:",
        opciones: [
            "A) Formar personas dependientes del Estado.",
            "B) Formar ciudadanos amantes de su familia y de su Patria, conscientes de sus deberes, derechos y libertades.",
            "C) Promover la cultura de otros países por encima de la dominicana.",
            "D) Enseñar a los niños a trabajar en fábricas desde los 5 años."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 66-97. La identidad nacional y la formación ciudadana son pilares teleológicos del sistema."
    },
    {
        id: 347,
        categoria: "Evaluación Nivel Inicial",
        pregunta: "Al finalizar el año escolar, el docente de Pre-Primario debe elaborar un informe final que sintetice los logros del niño. La psicóloga acompaña este proceso verificando que:",
        opciones: [
            "A) El informe tenga mínimo 50 páginas.",
            "B) Exista coherencia entre lo registrado durante los tres periodos evaluativos y el perfil de egreso descrito en el informe final.",
            "C) El informe solo mencione las cosas malas del niño.",
            "D) Todos los niños tengan exactamente el mismo informe copiado y pegado."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La objetividad y la personalización del informe cualitativo garantizan una transición adecuada a Primaria."
    },
    {
        id: 348,
        categoria: "Código de Ética",
        pregunta: "Un orientador de un centro educativo privado cercano le ofrece una comisión de dinero por cada estudiante que usted, desde el centro público, le refiera a su consulta vespertina. Su accionar debe ser:",
        opciones: [
            "A) Aceptar la oferta para ganar dinero extra.",
            "B) Rechazar la oferta tajantemente, ya que la Orden Departamental 22-2023 y la Ley 41-08 prohíben recibir beneficios económicos por el ejercicio del cargo o generar conflictos de interés.",
            "C) Aceptar pero pedir que le pague en efectivo para no dejar rastro.",
            "D) Referir a todos los niños posibles para ganar más."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. El tráfico de influencias y el cohecho violan el principio de probidad."
    },
    {
        id: 349,
        categoria: "Ordenanza 01-2023 (Alfabetización)",
        pregunta: "Según las orientaciones curriculares, la 'Conciencia Fonológica' en el Nivel Inicial se desarrolla a través de:",
        opciones: [
            "A) Repetir reglas gramaticales teóricas.",
            "B) Juegos con rimas, separación oral de sílabas a través de palmadas y canciones que manipulan los sonidos del habla.",
            "C) Exámenes de dictado sorpresa.",
            "D) Ver televisión en silencio."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023 y Diseño Curricular. Es el pilar fundamental pre-lector que se trabaja desde los 3 años."
    },
    {
        id: 350,
        categoria: "Participación Familiar (03-2025)",
        pregunta: "La Junta de Centro es el organismo descentralizado que administra los fondos operativos. ¿La APMAE tiene representación en la Junta de Centro?",
        opciones: [
            "A) No, el dinero solo lo maneja el director.",
            "B) Sí, los padres tienen representación con voz y voto para garantizar la transparencia y la participación de la comunidad.",
            "C) Solo pueden ir de oyentes pero no opinar.",
            "D) Sí, pero solo los padres que aporten dinero a la escuela."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 03-2025 y Reglamento de Juntas Descentralizadas. La cogestión es obligatoria."
    },
    {
        id: 351,
        categoria: "Inclusión y Equidad",
        pregunta: "La diferencia principal entre 'Integración' e 'Inclusión' según la normativa del MINERD (05-2024) es:",
        opciones: [
            "A) Son exactamente lo mismo.",
            "B) La integración pide que el niño se adapte a la escuela; la Inclusión exige que la escuela se transforme para atender a la diversidad de todos los niños.",
            "C) La inclusión es solo para escuelas privadas.",
            "D) La integración es obligatoria, la inclusión es opcional."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. El paradigma dominicano actual es inclusivo, garantizando que el diseño del entorno sea accesible desde el inicio."
    },
    {
        id: 352,
        categoria: "Ley 136-03 (Derecho a la Educación)",
        pregunta: "Una adolescente queda embarazada. El director de la escuela quiere expulsarla 'para que no sea mal ejemplo' para los niños de Inicial. La ley establece que:",
        opciones: [
            "A) El director tiene razón, debe ser expulsada.",
            "B) Es ilegal. El Estado prohíbe la expulsión por embarazo, debiendo garantizar modalidades de estudio que aseguren su permanencia en el sistema (Ley 136-03).",
            "C) Debe pagar una multa para seguir estudiando.",
            "D) Solo puede estudiar de noche."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 y normativas del MINERD. La discriminación por embarazo está expresamente prohibida y sancionada."
    },
    {
        id: 353,
        categoria: "Evaluación Diagnóstica Inicial",
        pregunta: "Durante las dos primeras semanas de adaptación (evaluación diagnóstica), una niña de 3 años llora inconsolablemente cuando la madre se va. La acción psicopedagógica pertinente es:",
        opciones: [
            "A) Castigar a la niña por inmadura.",
            "B) Trabajar el apego seguro, permitir la entrada escalonada de la familia y brindar contención emocional, ya que es una reacción evolutiva esperable (ansiedad de separación).",
            "C) Obligar a la madre a irse corriendo.",
            "D) Encerrar a la niña sola hasta que se calme."
        ],
        respuestaCorrecta: 1,
        explicacion: "Referencia: Documento de Apoyo de Nivel Inicial (Periodo de Adaptación). El acompañamiento socioemocional es clave para la transición del hogar a la escuela."
    },
    {
        id: 354,
        categoria: "Constitución Dominicana",
        pregunta: "El derecho al 'Libre Desarrollo de la Personalidad' (Art. 43 de la Constitución) en la escuela implica:",
        opciones: [
            "A) Que el niño puede romper los muebles de la escuela.",
            "B) El respeto a la individualidad, ritmos y formas de ser de cada estudiante, sin discriminación ni imposición de modelos estandarizados opresivos.",
            "C) Que los docentes no pueden poner reglas.",
            "D) Que no hay horarios de entrada ni salida."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Constitución Art. 43. Protege la autonomía y dignidad en la construcción del ser humano."
    },
    {
        id: 355,
        categoria: "Normas de Convivencia (05-2023)",
        pregunta: "El proceso de mediación en conflictos escolares, establecido en las normativas, tiene como característica principal ser:",
        opciones: [
            "A) Un juicio público con jurado.",
            "B) Un proceso voluntario, imparcial y confidencial donde las partes buscan soluciones con la ayuda de un tercero neutral (como la psicóloga).",
            "C) Una obligación donde el director dicta la sentencia.",
            "D) Una reunión para insultarse ordenadamente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2023. La mediación es el núcleo de la resolución pacífica de conflictos escolares."
    },
    {
        id: 356,
        categoria: "Evaluación de Desempeño",
        pregunta: "Si en su Evaluación de Desempeño obtiene una calificación en la escala de 'Insuficiente', la Ley 41-08 y los reglamentos del MINERD establecen que:",
        opciones: [
            "A) Será ascendida a directora.",
            "B) Será sometida a un programa intensivo de capacitación y desarrollo profesional, y si en la siguiente evaluación vuelve a fallar, procede la desvinculación.",
            "C) Recibirá un aumento salarial.",
            "D) No pasa nada, todo sigue igual."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 41-08. La evaluación busca mejorar, pero la insuficiencia reiterada conlleva la pérdida del estatus de carrera."
    },
    {
        id: 357,
        categoria: "Evaluación Nivel Inicial",
        pregunta: "¿Qué papel juega la Autoevaluación en los niños de Nivel Inicial (Pre-Primario) según la Ordenanza 04-2023?",
        opciones: [
            "A) Ninguno, son muy pequeños para autoevaluarse.",
            "B) Es fundamental; se promueve a través de asambleas, preguntas metacognitivas simples ('¿Qué aprendimos hoy?', '¿Cómo te sentiste?') para desarrollar su autonomía.",
            "C) Se usa para que ellos mismos se pongan la nota final.",
            "D) Solo sirve para perder tiempo de clases."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La metacognición y autorregulación inician en la primera infancia con el acompañamiento docente."
    },
    {
        id: 358,
        categoria: "Ley 200-04 y Privacidad",
        pregunta: "Un periodista invoca la Ley de Libre Acceso a la Información para solicitar los nombres y direcciones de todos los estudiantes del centro para una nota de prensa. ¿Qué procede?",
        opciones: [
            "A) Entregar los datos rápidamente para no ser multado.",
            "B) Denegar la solicitud amparándose en que la Ley 200-04 exceptúa el acceso a datos personales cuya divulgación pueda invadir la intimidad y poner en riesgo a los menores (Art. 18).",
            "C) Entregar solo los de las niñas.",
            "D) Pedirle al periodista que pague por la lista."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 200-04 (Excepciones) y Ley 136-03. La protección de los datos de menores es absoluta frente al escrutinio público."
    },
    {
        id: 359,
        categoria: "Orden Departamental 22-2023",
        pregunta: "La prohibición de 'Uso de lenguaje inapropiado' hacia los estudiantes incluye específicamente:",
        opciones: [
            "A) Hablarles en voz suave.",
            "B) El uso de apodos, sarcasmos, gritos, groserías o comentarios humillantes que vulneren su autoestima y dignidad humana.",
            "C) Corregir un error de matemáticas.",
            "D) Pedirles que hagan una fila ordenada."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. El maltrato psicológico y verbal está erradicado por norma de las prácticas docentes."
    },
    {
        id: 360,
        categoria: "Rol de la Psicóloga (Integral)",
        pregunta: "De acuerdo a los lineamientos del MINERD, el modelo de intervención en Orientación y Psicología debe ser predominantemente:",
        opciones: [
            "A) Clínico, reactivo y enfocado solo en el niño problema.",
            "B) Preventivo, proactivo, sistémico (involucrando familia y docentes) y enfocado en el desarrollo integral de toda la comunidad educativa.",
            "C) Administrativo, solo llenando formularios en la oficina.",
            "D) Punitivo, decidiendo los castigos diarios."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual Operativo del Departamento de Orientación y Psicología MINERD. El modelo psicopedagógico nacional prioriza la prevención."
    },

    {
        id: 361,
        categoria: "Inclusión (Ordenanza 05-2024)",
        pregunta: "Un niño de 4 años presenta conductas compatibles con el Espectro Autista (TEA), pero no tiene diagnóstico médico. La docente se niega a realizar ajustes hasta que los padres traigan un certificado. Su postura técnica es:",
        opciones: [
            "A) Darle la razón a la docente para evitar errores médicos.",
            "B) Aplicar los ajustes razonables basados en las barreras observadas de inmediato, ya que la Ordenanza 05-2024 establece que la atención a la diversidad no está condicionada a un diagnóstico clínico.",
            "C) Suspender al niño hasta que tenga el diagnóstico.",
            "D) Realizar los ajustes solo si los padres pagan una evaluación privada."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. El centro debe responder a la necesidad educativa detectada pedagógicamente, sin esperar el trámite clínico."
    },
    {
        id: 362,
        categoria: "Ética Profesional (22-2023)",
        pregunta: "Usted recibe una queja de que una docente de Inicial usa su celular para chatear durante la 'Siesta' o el 'Descanso' de los niños, descuidando la vigilancia. ¿Cómo procede usted como parte del equipo de gestión?",
        opciones: [
            "A) No hace nada, es el tiempo libre de la maestra.",
            "B) Aborda a la docente y le recuerda que, según el Código de Ética, el personal debe garantizar la seguridad y supervisión continua de los menores sin distracciones tecnológicas.",
            "C) Le pide que le preste el cargador.",
            "D) Publica la queja en el grupo de WhatsApp de los padres."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. La supervisión en Inicial es ininterrumpida por la vulnerabilidad de la edad."
    },
    {
        id: 363,
        categoria: "Evaluación (Ordenanza 04-2023)",
        pregunta: "En el Registro de Grado de Inicial, el apartado 'Observaciones' debe utilizarse para:",
        opciones: [
            "A) Escribir que el niño es 'malo' o 'molesto'.",
            "B) Describir de forma objetiva hechos significativos que expliquen el progreso del niño o las barreras que enfrenta, evitando juicios de valor.",
            "C) Anotar si la madre debe dinero al centro.",
            "D) Dejarlo en blanco para no trabajar de más."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. El registro es un documento técnico-legal; las observaciones deben ser profesionales y descriptivas."
    },
    {
        id: 364,
        categoria: "Ley 136-03",
        pregunta: "Un niño de 5 años le cuenta que su padrastro le obliga a trabajar vendiendo golosinas en el semáforo por las tardes. Usted debe:",
        opciones: [
            "A) Felicitar al niño por ser emprendedor.",
            "B) Activar inmediatamente el protocolo de protección por Trabajo Infantil, notificando al CONANI y al Ministerio de Trabajo.",
            "C) Decirle al niño que no lo haga más.",
            "D) No intervenir porque ocurre fuera de la escuela."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03. El trabajo infantil es una violación grave a los derechos fundamentales y la escuela debe denunciarlo."
    },
    {
        id: 365,
        categoria: "Desarrollo Organizacional",
        pregunta: "¿Qué documento orienta las acciones de prevención y apoyo emocional que la psicóloga ejecutará durante todo el año escolar?",
        opciones: [
            "A) El libro de cuentos del aula.",
            "B) El Plan Anual de Orientación y Psicología, alineado al Proyecto Educativo de Centro (PEC).",
            "C) La lista de merienda.",
            "D) El horario de limpieza del centro."
        ],
        respuestaCorrecta: 1,
        explicacion: "Referencia: Manual operativo de Orientación y Psicología. Toda acción debe estar planificada y responder a las necesidades del centro."
    },
    {
        id: 366,
        categoria: "Convivencia (05-2023)",
        pregunta: "Una docente le pide 'una técnica' para que los niños de 3 años dejen de moverse tanto y se queden callados por una hora. Su respuesta técnica es:",
        opciones: [
            "A) Sugerirles que les ponga una película larga.",
            "B) Explicar que evolutivamente los niños de esa edad necesitan movimiento y que las actividades deben ser cortas, dinámicas y variadas.",
            "C) Recomendarles que les dé un dulce si se callan.",
            "D) Decirle que les grite fuerte."
        ],
        respuestaCorrecta: 1,
        explicacion: "Referencia: Psicología del Desarrollo y Currículo de Inicial. La inmovilidad prolongada es contraria al desarrollo natural en la primera infancia."
    },
    {
        id: 367,
        categoria: "Ley 41-08",
        pregunta: "Si una psicóloga escolar es evaluada dos veces consecutivas con 'Satisfactorio' (en lugar de Excelente), ¿tiene derecho a bonos por desempeño?",
        opciones: [
            "A) No, solo los Excelentes cobran.",
            "B) Sí, la escala de 'Satisfactorio' hacia arriba da derecho a los beneficios e incentivos previstos en la ley.",
            "C) Solo si el director quiere dárselo.",
            "D) Debe renunciar por no ser excelente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 41-08 y reglamentos de incentivos. El desempeño satisfactorio cumple con las expectativas institucionales."
    },
    {
        id: 368,
        categoria: "Alfabetización (01-2023)",
        pregunta: "La 'Lectura en Voz Alta' por parte de la docente o psicóloga a los niños de Inicial tiene como fin principal:",
        opciones: [
            "A) Que los niños se duerman.",
            "B) Desarrollar el placer por la lectura, el vocabulario y la comprensión de estructuras narrativas.",
            "C) Que los niños aprendan a leer solos en una semana.",
            "D) Cumplir con un requisito del Ministerio."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. Es una estrategia clave de modelado y fomento de la alfabetización emergente."
    },
    {
        id: 369,
        categoria: "Derechos Humanos / Constitución",
        pregunta: "El principio de 'Interés Superior del Niño' significa que:",
        opciones: [
            "A) Los niños mandan sobre los adultos.",
            "B) En toda decisión que afecte a un menor, se debe priorizar lo que más beneficie su desarrollo integral y sus derechos.",
            "C) Los padres siempre tienen la razón.",
            "D) La escuela puede hacer lo que quiera si es por el bien del niño."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Constitución Dominicana y Ley 136-03. Es el principio rector de toda actuación con menores."
    },
    {
        id: 370,
        categoria: "Inclusión y Tecnología",
        pregunta: "En el marco de la Ordenanza 05-2024, el uso de software de comunicación para un niño con discapacidad motora severa se considera:",
        opciones: [
            "A) Un gasto innecesario.",
            "B) Una Tecnología de Apoyo (Producto de Apoyo) necesaria para garantizar su derecho a la expresión.",
            "C) Un juguete para que se distraiga.",
            "D) Algo que solo debe usarse en la casa."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. El acceso a la tecnología es parte de los apoyos para la eliminación de barreras."
    },
    {
        id: 371,
        categoria: "Gestión de Riesgos",
        pregunta: "Ante un sismo durante el horario escolar, la prioridad de la psicóloga es:",
        opciones: [
            "A) Salir corriendo la primera para pedir ayuda.",
            "B) Colaborar en la evacuación calmada de los niños hacia el punto de encuentro y brindar primeros auxilios psicológicos post-evento.",
            "C) Quedarse debajo de su escritorio hasta que alguien la busque.",
            "D) Llamar a los padres para que vengan en medio del sismo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Referencia: Protocolos de Gestión de Riesgos MINERD. El personal debe modelar la calma y guiar a los más vulnerables."
    },
    {
        id: 372,
        categoria: "Participación Familiar",
        pregunta: "Si una familia se niega sistemáticamente a asistir a las convocatorias para tratar el rezago de su hijo, usted debe:",
        opciones: [
            "A) Rendirse y no llamarlos más.",
            "B) Documentar las ausencias, realizar una visita domiciliaria si es posible, y agotar las rutas de apoyo antes de reportar por falta de compromiso parental.",
            "C) Expulsar al niño por culpa de los padres.",
            "D) Ponerle notas excelentes para que no tengan que venir."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 03-2025. Se debe agotar el acompañamiento y la búsqueda de la familia."
    },
    {
        id: 373,
        categoria: "Evaluación (04-2023)",
        pregunta: "Un indicador de logro en Inicial dice: 'Agrupa objetos por dos criterios (color y forma)'. Un niño solo lo hace por color. Su valoración es:",
        opciones: [
            "A) Logrado (L).",
            "B) En Proceso (EP).",
            "C) Todavía No Logrado (TNL).",
            "D) Deficiente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. 'En Proceso' indica que ya domina una parte del indicador pero necesita seguir trabajando para completarlo."
    },
    {
        id: 374,
        categoria: "Código de Ética",
        pregunta: "Un psicólogo escolar publica en sus estados de WhatsApp críticas negativas sobre la inteligencia de los padres de sus estudiantes. Esto viola el principio de:",
        opciones: [
            "A) Libertad de cátedra.",
            "B) Respeto, decoro y confidencialidad profesional (Orden Departamental 22-2023).",
            "C) Honestidad financiera.",
            "D) Higiene personal."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. El respeto a la dignidad de la familia es obligatorio."
    },
    {
        id: 375,
        categoria: "Ley 66-97 (Gratuidad)",
        pregunta: "Una maestra de Pre-Primario pide a los padres una cuota mensual de 500 pesos para comprar materiales que el MINERD no envió. ¿Es esto legal?",
        opciones: [
            "A) Sí, si es por el bien de los niños.",
            "B) No, la educación pública es gratuita y obligatoria; cualquier requerimiento económico es ilegal (Ley 66-97).",
            "C) Sí, si lo aprueba la APMAE.",
            "D) Solo si le dan recibo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 66-97 y Constitución. No se puede condicionar el servicio educativo a pagos de ninguna especie."
    },
    {
        id: 376,
        categoria: "Liderazgo en el Centro",
        pregunta: "Cuando hay un conflicto entre dos docentes que afecta el clima del aula de Inicial, el papel de la psicóloga es:",
        opciones: [
            "A) Elegir un bando y defenderlo.",
            "B) Facilitar un proceso de mediación para restaurar la armonía y asegurar que el conflicto no afecte a los niños.",
            "C) Ignorar el problema porque no son niños.",
            "D) Contarle el chisme a los otros maestros."
        ],
        respuestaCorrecta: 1,
        explicacion: "Referencia: Funciones del orientador/psicólogo. La convivencia escolar incluye las relaciones entre adultos."
    },
    {
        id: 377,
        categoria: "Investigación-Acción",
        pregunta: "La psicóloga observa que en el recreo hay muchos accidentes. Decide investigar por qué ocurre y proponer un 'Recreo Divertido y Seguro'. Esto se llama:",
        opciones: [
            "A) Perder el tiempo.",
            "B) Innovación educativa e investigación-acción para la mejora del clima escolar.",
            "C) Vigilar a los conserjes.",
            "D) Terapia de grupo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Referencia: Estándares de desempeño. El profesional debe proponer soluciones basadas en la evidencia de su entorno."
    },
    {
        id: 378,
        categoria: "Estrategia Nacional de Desarrollo",
        pregunta: "La END 2030 busca que la formación de los estudiantes incluya el uso ético de las TIC. En Inicial esto se traduce en:",
        opciones: [
            "A) Que cada niño tenga un celular propio.",
            "B) Introducción gradual a recursos digitales educativos bajo supervisión docente pedagógica.",
            "C) No usar tecnología nunca hasta los 18 años.",
            "D) Aprender a programar en Java a los 4 años."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 1-12. El uso pedagógico y supervisado de las TIC inicia desde la educación temprana."
    },
    {
        id: 379,
        categoria: "Inclusión y Género",
        pregunta: "Un niño de Inicial quiere jugar en el área de 'Dramatización' (la casita) y la maestra lo saca diciendo que 'eso es de niñas'. Usted interviene porque:",
        opciones: [
            "A) La casita es muy pequeña para él.",
            "B) El juego simbólico no tiene género y se debe promover la igualdad de oportunidades (Ley 1-12).",
            "C) Quiere que el niño aprenda a cocinar de verdad.",
            "D) No tiene nada más que hacer."
        ],
        respuestaCorrecta: 1,
        explicacion: "Referencia: Currículo Inicial y END. La escuela debe romper estereotipos limitantes."
    },
    {
        id: 380,
        categoria: "Evaluación Final",
        pregunta: "¿Cuál es el fin último de que usted sea evaluada en su desempeño?",
        opciones: [
            "A) Que la despidan.",
            "B) Identificar fortalezas y necesidades de capacitación para elevar la calidad del sistema educativo.",
            "C) Comparar quién es la mejor psicóloga del distrito.",
            "D) Llenar papeles que nadie lee."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 41-08. La evaluación es para el desarrollo y la excelencia institucional."
    },

    {
        id: 381,
        categoria: "Inclusión (PAD)",
        pregunta: "El 'Plan de Apoyo a la Diversidad' (PAD) es un documento que:",
        opciones: [
            "A) Solo llena la maestra de educación especial.",
            "B) Elabora la docente con apoyo de la psicóloga para planificar los ajustes y apoyos específicos de un estudiante con NEAE.",
            "C) Se entrega a los padres para que ellos eduquen al niño.",
            "D) Es opcional si el niño se porta bien."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. El PAD es la herramienta formal de planificación inclusiva."
    },
    {
        id: 382,
        categoria: "Ley 136-03 (Disciplina)",
        pregunta: "Un directivo del centro propone crear un 'cuarto de reflexión' (aislamiento) para los niños de Inicial que muerden. Según la Ley 136-03:",
        opciones: [
            "A) Es una excelente idea pedagógica.",
            "B) Es una violación a la integridad psíquica y está prohibido como método disciplinario.",
            "C) Solo puede usarse si tiene aire acondicionado.",
            "D) Se puede usar si el psicólogo está adentro también."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 y Ordenanza 05-2023. El aislamiento y los tratos crueles o degradantes son ilegales."
    },
    {
        id: 383,
        categoria: "Ética (Denuncia)",
        pregunta: "Usted observa que una colega psicóloga está cobrando a los padres por aplicarles pruebas que son gratuitas por el MINERD. Su deber es:",
        opciones: [
            "A) Pedirle una parte del dinero.",
            "B) Reportar el hecho a la Dirección y al Distrito, ya que es una falta ética y legal gravísima (Ley 41-08).",
            "C) Quedarse callada para no ser 'chivata'.",
            "D) Aconsejarle que suba el precio."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 41-08 y Código de Ética. El aprovechamiento del cargo para beneficio económico es causa de destitución."
    },
    {
        id: 384,
        categoria: "Evaluación (04-2023)",
        pregunta: "En el Nivel Inicial, un niño que no asiste al menos al 80% de las clases sin justificación válida:",
        opciones: [
            "A) Pasa de curso automáticamente.",
            "B) Podría estar en riesgo de no promover, aunque en Inicial la promoción es casi automática, se debe reportar la negligencia familiar.",
            "C) Es expulsado del país.",
            "D) Se le regala un premio por asistencia."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La asistencia es obligatoria y su falta es señal de alerta para el equipo de psicología."
    },
    {
        id: 385,
        categoria: "Protocolos de Cultura de Paz",
        pregunta: "En una pelea física entre dos niños de 5 años, la primera acción de la psicóloga es:",
        opciones: [
            "A) Grabar el video para evidencia.",
            "B) Separarlos físicamente con cuidado, asegurar que no haya lesiones y calmar emocionalmente a ambos antes de investigar.",
            "C) Gritarles para que se asusten y se detengan.",
            "D) Llamar a la policía."
        ],
        respuestaCorrecta: 1,
        explicacion: "Referencia: Protocolos de Cultura de Paz. La contención y seguridad física es la prioridad inmediata."
    },
    {
        id: 386,
        categoria: "Ley 200-04",
        pregunta: "La Ley de Libre Acceso a la Información Pública promueve el principio de 'Publicidad', el cual indica que:",
        opciones: [
            "A) Hay que pagar anuncios en TV.",
            "B) Toda información en poder del Estado se presume pública, salvo las excepciones legales.",
            "C) Solo los políticos pueden saber lo que pasa.",
            "D) Las escuelas deben ser secretas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 200-04. Es un pilar de la democracia y la transparencia."
    },
    {
        id: 387,
        categoria: "Estrategia Nacional de Desarrollo",
        pregunta: "Dentro de la END 2030, el objetivo de 'Educación de Calidad' para el Nivel Inicial se mide principalmente por:",
        opciones: [
            "A) La cantidad de niños que saben inglés.",
            "B) El desarrollo de las competencias fundamentales y el bienestar integral de los niños.",
            "C) Que todos los niños tengan uniformes nuevos.",
            "D) Que la escuela sea de cristal."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 1-12. La calidad se define por el logro de competencias para la vida."
    },
    {
        id: 388,
        categoria: "Hitos del Desarrollo",
        pregunta: "A los 5 años, un niño debería ser capaz de realizar cuál de estas tareas de autocuidado:",
        opciones: [
            "A) Cocinar su propio desayuno.",
            "B) Ir al baño solo, lavarse las manos y vestirse con poca ayuda.",
            "C) Conducir una bicicleta por la avenida.",
            "D) Administrar su dinero de la merienda para el mes."
        ],
        respuestaCorrecta: 1,
        explicacion: "Referencia: Currículo de Inicial. La autonomía en el autocuidado es un indicador clave de madurez en Pre-Primario."
    },
    {
        id: 389,
        categoria: "Código de Ética (Regalos)",
        pregunta: "Un padre muy agradecido le lleva un perfume de 10,000 pesos como regalo personal a la psicóloga. Según la normativa:",
        opciones: [
            "A) Debe aceptarlo porque es un regalo de corazón.",
            "B) Debe declinarlo amablemente, explicando que el código prohíbe aceptar obsequios de valor económico significativo de los usuarios.",
            "C) Debe aceptarlo y rifarlo en el centro.",
            "D) Debe pedirle que mejor le dé el dinero en efectivo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 41-08 y Orden Departamental 22-2023. Evita el favoritismo o la percepción de soborno."
    },
    {
        id: 390,
        categoria: "Evaluación (04-2023)",
        pregunta: "¿Cuál de estos NO es un instrumento de evaluación en el Nivel Inicial?",
        opciones: [
            "A) Pauta de observación.",
            "B) Registro de grado.",
            "C) Prueba nacional escrita estandarizada.",
            "D) Portafolio."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ordenanza 04-2023. En Inicial no existen las pruebas nacionales; la evaluación es puramente cualitativa."
    },
    {
        id: 391,
        categoria: "Inclusión y Comunidad",
        pregunta: "La psicóloga organiza una charla sobre 'Aceptación de la Diversidad' para toda la comunidad. Esto responde a la función de:",
        opciones: [
            "A) Perder el tiempo de clase.",
            "B) Sensibilización y creación de culturas inclusivas (Ordenanza 05-2024).",
            "C) Buscar votos para el director.",
            "D) Reemplazar a la maestra de sociales."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. La inclusión requiere educar no solo al niño, sino a todo el entorno."
    },
    {
        id: 392,
        categoria: "Ley 66-97 (Estructura)",
        pregunta: "El órgano encargado de la participación de los maestros en la gestión escolar a través de la representación sindical es:",
        opciones: [
            "A) El Senado de la República.",
            "B) La ADP (Asociación Dominicana de Profesores) reconocida por la ley.",
            "C) El club de madres.",
            "D) La junta de vecinos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 66-97. Reconoce la libertad de asociación profesional."
    },
    {
        id: 393,
        categoria: "Salud Mental Escolar",
        pregunta: "Un niño de 4 años presenta mutismo selectivo (no habla en la escuela pero sí en casa). Su intervención inicial es:",
        opciones: [
            "A) Obligarlo a hablar frente a todos para que pierda el miedo.",
            "B) Crear un ambiente de confianza, usar comunicación no verbal y coordinar con un especialista externo para manejo de ansiedad.",
            "C) Ignorarlo hasta que decida hablar.",
            "D) Castigarlo sin merienda por no saludar."
        ],
        respuestaCorrecta: 1,
        explicacion: "Referencia: Guía de intervenciones psicopedagógicas. El mutismo selectivo es un trastorno de ansiedad y requiere empatía, no presión."
    },
    {
        id: 394,
        categoria: "Derecho a la Recreación",
        pregunta: "La directora decide convertir el patio de juegos en un parqueo para los maestros. Usted interviene alegando que:",
        opciones: [
            "A) Los carros se van a ensuciar.",
            "B) Se está violando el derecho al juego y esparcimiento de los niños (Ley 136-03) y el diseño curricular de Inicial.",
            "C) No hay problema, los niños pueden jugar en el aula.",
            "D) Solo si le dejan un espacio para su carro."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03. El espacio físico para el juego es una garantía del desarrollo infantil."
    },
    {
        id: 395,
        categoria: "Constitución (Igualdad)",
        pregunta: "El Artículo 39 de la Constitución prohíbe la discriminación. Si un centro rechaza a un niño por tener el cabello largo o ricitos, está:",
        opciones: [
            "A) Aplicando normas de higiene correctas.",
            "B) Incurriendo en un acto de discriminación ilegal que vulnera el derecho a la educación y la libre personalidad.",
            "C) Siguiendo las órdenes del Ministerio.",
            "D) Educando en valores tradicionales."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Constitución Art. 39 y fallos del Tribunal Constitucional. El aspecto físico no puede ser barrera para la educación."
    },
    {
        id: 396,
        categoria: "Ética (Relación con Colegas)",
        pregunta: "Una colega psicóloga le pide que le pase las respuestas de su evaluación de desempeño por chat. Su respuesta debe ser:",
        opciones: [
            "A) Pasárselas para ser solidaria.",
            "B) Negarse, ya que la evaluación es personal, ética y busca reflejar la realidad profesional de cada uno.",
            "C) Cobrarle por las respuestas.",
            "D) Pasarle respuestas incorrectas a propósito."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. La integridad en los procesos de evaluación es un deber ético."
    },
    {
        id: 397,
        categoria: "Alfabetización (01-2023)",
        pregunta: "¿A qué edad promedio se espera que un niño en el sistema dominicano inicie formalmente el contacto con la cultura escrita a través de su nombre propio?",
        opciones: [
            "A) A los 10 años.",
            "B) Desde los 3 años (Nivel Inicial) de forma significativa y lúdica.",
            "C) Solo en la universidad.",
            "D) Cuando aprenda a hablar perfectamente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. El nombre propio es la primera 'palabra con sentido' que el niño aprende a reconocer y producir."
    },
    {
        id: 398,
        categoria: "Ley 41-08 (Servicio al Ciudadano)",
        pregunta: "El principio de 'Cortesía' en la Ley 41-08 obliga a la psicóloga a:",
        opciones: [
            "A) Invitar a café a todos los que lleguen.",
            "B) Tratar con amabilidad, respeto y diligencia a los padres, estudiantes y compañeros.",
            "C) No decir nunca que 'no' a un favor.",
            "D) Sonreír aunque no quiera."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 41-08. El buen trato es un deber del servidor público."
    },
    {
        id: 399,
        categoria: "Evaluación de Desempeño (Meta)",
        pregunta: "La meta de que usted alcance el nivel de 'Excelente' en esta evaluación es:",
        opciones: [
            "A) Ganar más dinero solamente.",
            "B) Garantizar que los niños del Nivel Inicial reciban el mejor apoyo psicopedagógico posible para su éxito escolar.",
            "C) Ser la favorita del Distrito.",
            "D) Que le den más vacaciones."
        ],
        respuestaCorrecta: 1,
        explicacion: "Referencia: Visión del MINERD. El centro de todo el sistema es el aprendizaje y bienestar del estudiante."
    },
    {
        id: 400,
        categoria: "Reflexión Profesional",
        pregunta: "Al terminar estas 400 preguntas, la psicóloga escolar demuestra:",
        opciones: [
            "A) Que tiene mucha paciencia.",
            "B) Un alto nivel de compromiso con su actualización legal, curricular y ética para su evaluación de desempeño.",
            "C) Que sabe usar mucho la computadora.",
            "D) Que ya no necesita estudiar más nunca."
        ],
        respuestaCorrecta: 1,
        explicacion: "La preparación constante es la marca de un profesional de excelencia. ¡Mucho éxito en su evaluación!"
    }
];

// Instrucción para el desarrollador:
// Para llegar a las 100 preguntas, continúa agregando objetos a este array utilizando
// exactamente la misma estructura (id, categoria, pregunta, opciones, respuestaCorrecta, explicacion).


