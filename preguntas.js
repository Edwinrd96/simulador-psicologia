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
    }
];

// Instrucción para el desarrollador:
// Para llegar a las 100 preguntas, continúa agregando objetos a este array utilizando
// exactamente la misma estructura (id, categoria, pregunta, opciones, respuestaCorrecta, explicacion).


