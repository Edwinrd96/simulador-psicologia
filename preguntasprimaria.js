/**
 * ============================================================================
 * BANCO DE 400 PREGUNTAS - ANÁLISIS DE CASOS
 * Evaluación de Desempeño Docente 2025-2026 (EDD)
 * Etapa 5: Ejercicio de Rendimiento Profesional (ERP)
 * Perfil: Maestra de Nivel Primario (1ero a 6to)
 * ============================================================================
 *
 * MARCO NORMATIVO:
 * - Adecuación Curricular 2023 (Enfoque por competencias)
 * - Ordenanza 04-2023 (Sistema de Evaluación: L, EP, I)
 * - Ordenanza 01-2023 (Alfabetización Inicial)
 * - Ley 136-03 (Código del Menor)
 * - Manual de Convivencia Escolar
 * - Orden Departamental 22-2023 (Ética del Servidor Docente)
 * - Ordenanza 05-2024 (Educación Inclusiva)
 * - Orden Departamental 50-2025 (EDD prioritaria)
 *
 * CLAVES DISCURSIVAS OFICIALES DEL ERP (MINERD):
 * 1. Mediación pedagógica: diálogo, acompañamiento (NO imposición)
 * 2. Atención a la diversidad: ajustes curriculares (NO "igual para todos")
 * 3. Evaluación formativa: retroalimentación y auto-revisión docente
 * 4. Gestión positiva del clima de aula: normas claras, refuerzo positivo
 *    (NO expulsión ni castigo físico/psicológico)
 *
 * CATEGORÍAS:
 * - Planificación | Evaluación | Inclusión | Ética | Alfabetización
 * - Convivencia | Protección Infantil | Gestión de Aula
 * ============================================================================
 */

const bancoPrimaria = [
    // ========================================================================
    // BLOQUE 1 (1-20): Fundamentos - Todas las categorías
    // ========================================================================
    {
        id: 1,
        categoria: "Evaluación",
        pregunta: "La maestra Rosa imparte 3er grado. Al finalizar la primera unidad de Matemática, observa que 8 de sus 32 estudiantes no logran resolver problemas de adición con reagrupación. El director le sugiere colocar 'I' (Insuficiente) a esos 8 estudiantes para 'que los padres reaccionen'. ¿Cuál es la actuación pedagógicamente correcta?",
        opciones: [
            "A) Colocar 'I' a los 8 estudiantes como sugiere el director, ya que él tiene la autoridad jerárquica en el centro.",
            "B) Registrar 'EP' (En Proceso) en el Registro de Grado, diseñar actividades de retroalimentación y documentar la intervención pedagógica antes de emitir un juicio final.",
            "C) Promediar las notas numéricas de las pruebas aplicadas y convertirlas al indicador correspondiente sin intervención adicional.",
            "D) Colocar 'L' (Logrado) a todos para evitar conflictos con los padres y con la dirección del centro."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La evaluación en Primaria es formativa, continua y por competencias. 'EP' reconoce que el estudiante avanza hacia el logro y obliga a implementar estrategias de retroalimentación documentadas. Colocar 'I' prematuramente viola el carácter formativo de la evaluación."
    },
    {
        id: 2,
        categoria: "Alfabetización",
        pregunta: "En 1er grado, Luis (6 años) al finalizar el primer trimestre reconoce las vocales y algunas consonantes, pero aún no lee palabras completas. La madre exige que la maestra le aplique 'planas' diarias en casa como refuerzo. ¿Qué decisión profesional corresponde?",
        opciones: [
            "A) Enviar las planas solicitadas porque la familia tiene derecho a decidir sobre el aprendizaje de su hijo.",
            "B) Explicar a la madre el enfoque de alfabetización inicial basado en la construcción del sistema de escritura, y acordar actividades significativas de lectura y escritura contextualizadas en el hogar.",
            "C) Aplicar un dictado diario en el aula para presionar el avance de Luis hasta igualar a sus compañeros.",
            "D) Recomendar a la madre que repita el grado con Luis el próximo año escolar."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. El enfoque oficial concibe la alfabetización como un proceso de construcción donde el niño atraviesa niveles (presilábico, silábico, silábico-alfabético, alfabético). Las planas mecánicas contradicen este enfoque. Se orienta a la familia hacia prácticas significativas: lectura compartida, escritura con propósito comunicativo."
    },
    {
        id: 3,
        categoria: "Inclusión",
        pregunta: "Llega a 4to grado Ana, con diagnóstico de Trastorno del Espectro Autista (TEA) nivel 1. La maestra nunca ha trabajado con TEA. Algunos padres del curso se quejan porque 'Ana interrumpe las clases'. ¿Cuál es la actuación correcta de la docente?",
        opciones: [
            "A) Solicitar al director que Ana sea trasladada a un centro de educación especial donde 'pueda ser mejor atendida'.",
            "B) Activar el protocolo de educación inclusiva: coordinar con el equipo de gestión y orientación, elaborar adecuaciones curriculares con el psicólogo escolar, y realizar una jornada de sensibilización con las familias.",
            "C) Sentar a Ana al final del aula para que no distraiga a los demás y continuar con la planificación regular.",
            "D) Asignar a Ana tareas distintas y más sencillas sin realizar adecuaciones curriculares formales."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. Todo estudiante tiene derecho a educarse en el sistema regular con los apoyos necesarios. Corresponde al centro activar el Equipo de Gestión, realizar las adecuaciones curriculares pertinentes y trabajar con las familias para construir una cultura inclusiva."
    },
    {
        id: 4,
        categoria: "Ética",
        pregunta: "La maestra de 5to grado descubre que un estudiante copió su examen de Ciencias Sociales del compañero. Es la primera vez que ocurre. ¿Cuál responde al marco ético docente?",
        opciones: [
            "A) Anular el examen públicamente frente al curso para que sirva de escarmiento a los demás estudiantes.",
            "B) Conversar en privado con el estudiante para comprender las causas, registrar la situación, informar a la familia y diseñar una nueva oportunidad de evaluación auténtica.",
            "C) Colocarle 'I' directamente en el Registro de Grado sin mayor procedimiento.",
            "D) Ignorar el hecho para no generar conflicto con la familia."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023 y Manual de Convivencia. La falta debe abordarse desde una perspectiva formativa, respetando la dignidad del estudiante, indagando causas, involucrando a la familia y ofreciendo una nueva oportunidad. La exposición pública vulnera el derecho a la intimidad (Ley 136-03)."
    },
    {
        id: 5,
        categoria: "Planificación",
        pregunta: "La maestra de 2do grado debe planificar una unidad integrada sobre 'La familia y la comunidad' que articula Ciencias Sociales, Lengua Española y Formación Humana. ¿Cuál es el punto de partida correcto según el Diseño Curricular vigente?",
        opciones: [
            "A) Seleccionar los contenidos del libro de texto y distribuirlos cronológicamente en las semanas de la unidad.",
            "B) Identificar las Competencias Fundamentales y Específicas a desarrollar, seleccionar indicadores de logro y diseñar situaciones de aprendizaje contextualizadas.",
            "C) Fotocopiar la planificación de la maestra del año anterior y ajustar las fechas.",
            "D) Comenzar elaborando las pruebas escritas que se aplicarán al final de la unidad."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. La planificación por competencias parte de las Competencias Fundamentales y Específicas, se concreta en indicadores de logro observables y se desarrolla mediante situaciones de aprendizaje significativas. El contenido es un medio, no el punto de partida."
    },
    {
        id: 6,
        categoria: "Ética",
        pregunta: "Un padre de familia de 6to grado le ofrece a la maestra RD$5,000 'como agradecimiento' por el esfuerzo con su hijo, justo antes de las evaluaciones del segundo período. ¿Cuál es la actuación correcta?",
        opciones: [
            "A) Aceptar el dinero ya que es un gesto voluntario de agradecimiento del padre.",
            "B) Rechazar el obsequio con cortesía, explicar que su labor es un deber profesional, y notificar la situación a la dirección del centro.",
            "C) Aceptar el dinero pero prometer imparcialidad en las calificaciones.",
            "D) Pedir al padre que mejor compre materiales para el aula con ese dinero."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. El docente no debe aceptar dádivas, regalos en efectivo o beneficios que comprometan su imparcialidad. La transparencia exige rechazar el obsequio y comunicar el hecho a la dirección."
    },
    {
        id: 7,
        categoria: "Inclusión",
        pregunta: "En 3er grado hay un estudiante haitiano, José Luis, que habla creole y español básico. Presenta dificultades para comprender las consignas escritas. Una colega le sugiere: 'no pierdas tiempo con él, mejor enfócate en los que sí entienden'. ¿Cómo debe actuar la maestra?",
        opciones: [
            "A) Seguir el consejo de la colega y atender prioritariamente a los estudiantes que dominan el español.",
            "B) Diseñar adecuaciones de acceso al currículo (apoyos visuales, pares tutores, instrucciones simplificadas), valorar sus saberes previos y promover un aula intercultural.",
            "C) Solicitar al director que José Luis sea reubicado en un grado inferior hasta que mejore su español.",
            "D) Traducir únicamente los exámenes al creole y mantener el resto de la enseñanza igual."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024 y Ley 136-03 (principio de no discriminación). La diversidad lingüística y cultural es parte de la inclusión. Corresponde realizar adecuaciones de acceso, valorar los saberes del estudiante y construir un aula intercultural."
    },
    {
        id: 8,
        categoria: "Evaluación",
        pregunta: "Al final del primer período en 4to grado, la maestra debe reportar el desempeño de sus estudiantes en la competencia 'Comunicativa' de Lengua Española. Pedro ha logrado leer en voz alta con fluidez pero presenta dificultades para comprender textos expositivos. ¿Qué indicador corresponde?",
        opciones: [
            "A) 'L' (Logrado), porque lee con fluidez, que es el indicador más visible.",
            "B) 'EP' (En Proceso), porque ha alcanzado parcialmente los indicadores de la competencia comunicativa, y requiere continuar trabajando la comprensión.",
            "C) 'I' (Insuficiente), porque no comprende textos expositivos.",
            "D) Un número del 70 al 79, convertido posteriormente a la escala literal."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. 'EP' aplica cuando el estudiante demuestra avances parciales hacia el logro. La competencia comunicativa integra múltiples dimensiones. No se utilizan escalas numéricas en el Nivel Primario."
    },
    {
        id: 9,
        categoria: "Protección Infantil",
        pregunta: "La maestra de 5to grado observa moretones en los brazos de Carla. Al preguntarle, la niña dice que 'se cayó'. Días después, nota nuevas marcas y Carla se muestra retraída. ¿Cuál es la obligación legal y ética de la docente?",
        opciones: [
            "A) Esperar a tener pruebas concretas antes de actuar, para no acusar injustamente a la familia.",
            "B) Notificar inmediatamente al equipo de orientación y al director del centro, quienes activarán el protocolo de referimiento al CONANI conforme al Código del Menor.",
            "C) Hablar directamente con los padres de Carla para confrontarlos sobre los moretones.",
            "D) Registrar la observación en el Registro de Grado pero no comunicarlo a terceros para proteger la privacidad de la familia."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03, artículos 12, 13 y 14. La docente tiene obligación legal de notificar cualquier sospecha de maltrato. El protocolo exige comunicar a orientación y dirección, quienes referirán al CONANI. Confrontar a la familia directamente puede poner en riesgo a la niña."
    },
    {
        id: 10,
        categoria: "Alfabetización",
        pregunta: "En 1er grado, durante una actividad de escritura espontánea, Miguel escribe 'MPLT' cuando intenta escribir 'Mi pelota'. Según el enfoque de alfabetización inicial, ¿cómo debe interpretar la maestra esta producción?",
        opciones: [
            "A) Como un error que debe corregirse inmediatamente copiando la palabra correcta diez veces.",
            "B) Como evidencia de que Miguel está en nivel silábico de construcción del sistema de escritura (una grafía por sílaba), y diseñar intervenciones para avanzar al nivel silábico-alfabético.",
            "C) Como señal de posible dislexia que amerita referimiento inmediato al psicólogo.",
            "D) Como indicador de que Miguel no está listo para 1er grado y debe repetir inicial."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. El enfoque psicogenético reconoce niveles de construcción (presilábico, silábico, silábico-alfabético, alfabético). La escritura 'MPLT' para 'Mi pelota' evidencia hipótesis silábica. La intervención docente debe ser específica para el nivel del estudiante."
    },
    {
        id: 11,
        categoria: "Planificación",
        pregunta: "Para 6to grado, la maestra planifica una unidad de Ciencias de la Naturaleza sobre 'Los ecosistemas'. Un colega le recomienda 'dar los conceptos primero y luego hacer un experimento al final'. ¿Cuál es el enfoque correcto según el currículo vigente?",
        opciones: [
            "A) Seguir la recomendación del colega porque los estudiantes necesitan primero la teoría para entender la práctica.",
            "B) Partir de una situación de aprendizaje contextualizada (ej. estudio del ecosistema local), movilizar saberes previos, integrar indagación científica y conceptualización a lo largo de la unidad.",
            "C) Dictar todos los conceptos del tema para que los estudiantes los memoricen antes del examen final.",
            "D) Asignar un proyecto de investigación individual sin orientación docente para que los estudiantes aprendan por cuenta propia."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. El enfoque por competencias articula la situación de aprendizaje como eje de la planificación. La indagación científica, la movilización de saberes previos y la conceptualización son procesos simultáneos y contextualizados."
    },
    {
        id: 12,
        categoria: "Evaluación",
        pregunta: "La maestra de 2do grado aplicará una evaluación de la competencia matemática 'Resolución de problemas'. El libro de texto trae un examen con 20 operaciones aisladas. ¿Qué debe hacer la docente?",
        opciones: [
            "A) Aplicar el examen del libro tal como viene, pues fue diseñado por expertos en educación.",
            "B) Diseñar una evaluación auténtica con situaciones problema contextualizadas que permitan observar el razonamiento, la estrategia y la comunicación matemática del estudiante.",
            "C) Aplicar las 20 operaciones del libro y agregar dos problemas al final.",
            "D) Tomar dictado oral de las operaciones para que los estudiantes las resuelvan mentalmente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023 y Adecuación Curricular 2023. La evaluación por competencias requiere situaciones auténticas donde el estudiante movilice saberes. Las operaciones aisladas evalúan procedimientos pero no la competencia matemática."
    },
    {
        id: 13,
        categoria: "Inclusión",
        pregunta: "En 3er grado, Sofía presenta discapacidad visual (baja visión). La maestra recibió el diagnóstico al inicio del año pero no ha realizado ninguna adecuación porque 'Sofía se esfuerza y se las arregla'. Ahora Sofía está bajando en rendimiento. ¿Qué debe hacer la maestra?",
        opciones: [
            "A) Felicitar a Sofía por su esfuerzo autónomo y mantener la enseñanza sin cambios.",
            "B) Realizar adecuaciones de acceso (material ampliado, ubicación cerca del pizarrón, tiempos extendidos, uso de recursos auditivos), coordinar con el equipo de orientación y documentar las adecuaciones en la planificación.",
            "C) Pedir a los compañeros de Sofía que le lean los materiales para que ella solo escuche.",
            "D) Eximir a Sofía de las evaluaciones escritas hasta que consiga lentes adecuados."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. Las adecuaciones de acceso son obligatorias cuando el estudiante presenta discapacidad. La inclusión no consiste en esperar que el estudiante se adapte, sino en eliminar las barreras para el aprendizaje y la participación."
    },
    {
        id: 14,
        categoria: "Ética",
        pregunta: "La maestra de 4to grado es contactada por una editorial que le ofrece una comisión del 15% si recomienda sus libros de texto a los padres del curso. ¿Cuál es la respuesta éticamente correcta?",
        opciones: [
            "A) Aceptar la oferta porque los libros son de buena calidad y la comisión es un ingreso adicional legítimo.",
            "B) Rechazar la oferta, pues representa un conflicto de intereses incompatible con la función docente, y ceñirse a los textos oficiales o a los seleccionados por el centro educativo.",
            "C) Aceptar la oferta pero no cobrar la comisión, donándola a la biblioteca del aula.",
            "D) Consultar con los padres si están de acuerdo en que ella reciba la comisión."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. Aceptar comisiones por recomendar productos constituye conflicto de intereses y uso indebido del cargo. La selección de textos debe responder a criterios pedagógicos institucionales."
    },
    {
        id: 15,
        categoria: "Planificación",
        pregunta: "La maestra de 1er grado debe articular su planificación semanal con los Proyectos de Investigación y las Unidades de Aprendizaje. Un padre exige un 'cronograma rígido' semana por semana. ¿Qué corresponde hacer?",
        opciones: [
            "A) Entregar al padre un cronograma fijo e inmodificable de todas las semanas del año escolar.",
            "B) Compartir la planificación general por unidades/proyectos, explicando que la planificación es flexible y se ajusta a los intereses, ritmos y emergentes del grupo, conforme al enfoque por competencias.",
            "C) Negar al padre el acceso a la planificación por ser un documento docente interno.",
            "D) Entregar la planificación solo si el padre firma un compromiso de no cuestionarla."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. La planificación por competencias es flexible y responde a las necesidades emergentes del grupo. La familia tiene derecho a conocer la planificación general (Ley 136-03)."
    },
    {
        id: 16,
        categoria: "Evaluación",
        pregunta: "Al cierre del año escolar en 5to grado, Andrés obtiene 'EP' en tres de las cuatro competencias específicas de Matemática. El padre solicita que le asigne 'L' para que no tenga problemas el próximo año. ¿Qué debe hacer la docente?",
        opciones: [
            "A) Acceder a la solicitud del padre, pues Andrés es un niño esforzado y así no se desmotiva.",
            "B) Mantener el indicador 'EP' como reflejo fiel del desempeño, conversar con la familia sobre el plan de recuperación pedagógica, y documentar el acompañamiento.",
            "C) Cambiar los indicadores a 'L' pero registrar internamente las dificultades reales.",
            "D) Colocar 'I' para forzar la repitencia y que Andrés 'afiance' los contenidos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023 y Orden Departamental 22-2023. Alterar el indicador por presión familiar viola la honestidad profesional. 'EP' indica que el estudiante está en camino al logro y activa el plan de acompañamiento."
    },
    {
        id: 17,
        categoria: "Alfabetización",
        pregunta: "En 2do grado, la maestra nota que 5 estudiantes aún están en nivel silábico-alfabético mientras el resto ya escribe convencionalmente. Una colega le dice 'eso ya debieron traerlo de primero, no es tu problema'. ¿Cómo debe actuar?",
        opciones: [
            "A) Aceptar el comentario de la colega y enviarlos al Departamento de Orientación para que se encarguen del proceso.",
            "B) Diseñar un plan de alfabetización diferenciado dentro del aula, con actividades de escritura significativa, trabajo en pequeños grupos y monitoreo sistemático del avance en los niveles de construcción.",
            "C) Pedirle a la maestra de 1er grado que los reciba nuevamente hasta que aprendan a leer.",
            "D) Enviarles planas y dictados diarios como refuerzo hasta igualarlos al resto."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. La alfabetización es un proceso que continúa en todo el Primer Ciclo del Nivel Primario. Corresponde a cada docente diagnosticar el nivel de construcción de cada estudiante y diseñar intervenciones diferenciadas."
    },
    {
        id: 18,
        categoria: "Inclusión",
        pregunta: "En 6to grado hay un estudiante, Carlos, con TDAH. Durante los exámenes se distrae y no termina. La maestra piensa que 'debe aprender a concentrarse como los demás'. ¿Qué plantea la normativa?",
        opciones: [
            "A) Aplicar el examen en iguales condiciones a todos para no generar ventajas indebidas.",
            "B) Realizar adecuaciones de acceso (tiempos adicionales, ambiente con menos distractores, fraccionamiento de la prueba, apoyos visuales), documentadas en la planificación y coordinadas con orientación.",
            "C) Entregarle a Carlos un examen más corto y sencillo que al resto del grupo.",
            "D) Exonerarlo de los exámenes y evaluarlo solo con observación en clase."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. Las adecuaciones de acceso mantienen los mismos indicadores pero modifican condiciones, tiempos o recursos para garantizar equidad. La igualdad de condiciones no es equidad."
    },
    {
        id: 19,
        categoria: "Protección Infantil",
        pregunta: "Durante el recreo, la maestra de 4to grado ve a un colega gritarle e insultar a un estudiante delante de otros. El estudiante queda llorando. ¿Cuál es la actuación ética correcta de la maestra?",
        opciones: [
            "A) No intervenir, pues cada docente maneja su disciplina como entiende y no debe meterse en asuntos ajenos.",
            "B) Acompañar al estudiante, contenerlo emocionalmente, y notificar formalmente al director y al equipo de orientación el hecho observado, conforme al deber de protección del Código del Menor.",
            "C) Grabar al colega con su celular para tener pruebas antes de hablar.",
            "D) Confrontar públicamente al colega delante del estudiante para que se disculpe."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 (artículos 12-14) y Orden Departamental 22-2023. Todo adulto del centro tiene deber de garante frente a la integridad del niño. El maltrato verbal es violencia que debe notificarse. La omisión convierte al testigo en corresponsable."
    },
    {
        id: 20,
        categoria: "Planificación",
        pregunta: "La maestra de 3er grado diseña una situación de aprendizaje para Ciencias Sociales sobre 'Los servicios de mi comunidad'. Debe decidir cómo evaluar el desempeño. ¿Cuál es la decisión coherente con el enfoque por competencias?",
        opciones: [
            "A) Aplicar una prueba escrita de opción múltiple con 20 preguntas al final de la unidad.",
            "B) Diseñar una evaluación integrada con rúbrica de desempeño, que combine la producción de los estudiantes (maqueta, exposición, texto informativo), la observación sistemática y la autoevaluación, articulada con los indicadores de logro.",
            "C) Calificar solo la tarea final del proyecto y descartar el proceso previo.",
            "D) Poner una nota general subjetiva al finalizar la unidad según la impresión de la docente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023 y Adecuación Curricular 2023. La evaluación por competencias es auténtica, procesual e integrada. Utiliza instrumentos diversos (rúbricas, registros, portafolios, autoevaluación) articulados con indicadores de logro."
    },

    // ========================================================================
    // BLOQUE 2 (21-60): Gestión de Aula, Convivencia y Casos Complejos
    // ========================================================================
    {
        id: 21,
        categoria: "Gestión de Aula",
        pregunta: "En 5to grado, dos estudiantes discuten y uno empuja al otro durante la clase de Matemática. La maestra está explicando un contenido clave. ¿Cuál es la intervención pedagógicamente correcta?",
        opciones: [
            "A) Enviar inmediatamente a los dos estudiantes a la dirección para que los suspendan.",
            "B) Detener brevemente la clase, separar a los estudiantes, aplicar una estrategia de regulación emocional, y posteriormente mediar el conflicto mediante el diálogo siguiendo el Manual de Convivencia.",
            "C) Ignorar el hecho para no perder el hilo de la clase y continuar con la explicación.",
            "D) Gritarles delante de todos para que aprendan a respetar la clase."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Convivencia Escolar y Ordenanza 05-2024. La gestión positiva del aula prioriza la regulación emocional, la mediación y el diálogo como estrategias de resolución de conflictos, no la sanción punitiva inmediata."
    },
    {
        id: 22,
        categoria: "Evaluación",
        pregunta: "La maestra de 1er grado realizará la evaluación diagnóstica al inicio del año. Un colega le sugiere aplicar un examen escrito con 30 preguntas. ¿Cuál es la estrategia correcta para la evaluación diagnóstica en este nivel?",
        opciones: [
            "A) Aplicar el examen escrito sugerido por el colega para tener datos objetivos desde el inicio.",
            "B) Utilizar múltiples estrategias lúdicas y contextualizadas (conversaciones, observación, producciones orales y gráficas) que permitan identificar saberes previos y niveles de desarrollo.",
            "C) Asumir que todos los estudiantes de 1ero están en el mismo punto y comenzar desde cero.",
            "D) Basar el diagnóstico únicamente en los informes del Nivel Inicial sin aplicar nada adicional."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023 y Ordenanza 01-2023. La evaluación diagnóstica en 1er grado debe ser lúdica, multimodal y adaptada al nivel de desarrollo, recogiendo información sobre niveles de construcción de lengua escrita, pensamiento matemático y desarrollo socioemocional."
    },
    {
        id: 23,
        categoria: "Convivencia",
        pregunta: "En 6to grado, una estudiante se acerca a la maestra y le dice llorando que sus compañeras 'la están molestando por WhatsApp' fuera del horario escolar. ¿Cómo debe actuar la maestra?",
        opciones: [
            "A) Indicarle que no puede intervenir porque ocurre fuera del centro educativo.",
            "B) Acoger emocionalmente a la estudiante, documentar lo informado, activar el protocolo de convivencia con orientación y dirección, y trabajar con el grupo sobre ciudadanía digital.",
            "C) Llamar a las madres de las estudiantes involucradas y confrontarlas entre sí.",
            "D) Sancionar públicamente a las estudiantes implicadas en la próxima clase."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Convivencia Escolar y Ley 136-03. El ciberacoso entre estudiantes del centro es competencia escolar aun cuando ocurra fuera del horario. Corresponde activar el protocolo de convivencia y abordar pedagógicamente la ciudadanía digital."
    },
    {
        id: 24,
        categoria: "Planificación",
        pregunta: "La maestra de 4to grado elabora su planificación de Lengua Española. Debe decidir cómo abordar la comprensión lectora durante el año. ¿Cuál es el enfoque correcto?",
        opciones: [
            "A) Asignar un texto semanal con cuestionario de 10 preguntas literales al final.",
            "B) Diseñar secuencias didácticas con diversidad textual (narrativos, expositivos, instructivos), trabajando estrategias antes, durante y después de la lectura, articuladas con indicadores de la competencia comunicativa.",
            "C) Pedir a los estudiantes que lean en voz alta y corregir su pronunciación como único trabajo lector.",
            "D) Entregar guías de respuestas correctas para que los estudiantes las copien del libro de texto."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023 y Ordenanza 01-2023. La comprensión lectora se desarrolla mediante diversidad textual, estrategias antes/durante/después de la lectura y producción de sentido, no mediante cuestionarios literales aislados."
    },
    {
        id: 25,
        categoria: "Inclusión",
        pregunta: "Llega a 2do grado un estudiante, Jorge, con discapacidad motora que usa silla de ruedas. El aula está en un segundo piso sin rampa. ¿Cuál es la actuación correcta de la maestra?",
        opciones: [
            "A) Pedir a los padres que transfieran a Jorge a otro centro con mejor infraestructura.",
            "B) Comunicar inmediatamente al Equipo de Gestión para gestionar la reubicación del aula en planta baja, solicitar apoyos al distrito educativo y garantizar el acceso pleno a todos los espacios escolares.",
            "C) Asignar a dos compañeros para que suban a Jorge en brazos cada día.",
            "D) Enviarle las tareas a su casa para que estudie desde allí."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024 y Ley 136-03. La eliminación de barreras físicas es obligación del centro educativo. El acceso pleno al currículo y a los espacios es un derecho fundamental, no una concesión."
    },
    {
        id: 26,
        categoria: "Ética",
        pregunta: "La maestra de 3er grado utiliza el grupo de WhatsApp de padres para compartir información académica. Un día, un padre le pide por mensaje privado que 'le tenga paciencia' a su hijo porque 'tiene problemas en casa'. ¿Cuál es la actuación ética correcta?",
        opciones: [
            "A) Compartir esta información con otros padres del grupo para que entiendan el comportamiento del niño.",
            "B) Mantener estricta confidencialidad, agradecer la confianza del padre, coordinar discretamente con orientación si procede, y registrar la información solo en medios oficiales del centro.",
            "C) Preguntarle al niño directamente en clase qué problemas tiene en casa.",
            "D) Divulgar la situación a las colegas en la sala de profesores como 'comentario informativo'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023 y Ley 136-03. El docente está obligado a la confidencialidad respecto de información sensible de estudiantes y familias. Divulgar datos personales vulnera el derecho a la intimidad del niño y la ética profesional."
    },
    {
        id: 27,
        categoria: "Alfabetización",
        pregunta: "En 1er grado, la maestra realiza una actividad de escritura libre. Observa que Sara escribe sólo una letra para representar cada palabra (ej. 'C' para 'casa', 'P' para 'pelota'). ¿En qué nivel de construcción está Sara y qué intervención corresponde?",
        opciones: [
            "A) Nivel alfabético; aplicarle dictado diario de palabras completas para afianzar.",
            "B) Nivel presilábico con diferenciación; diseñar actividades que la hagan reflexionar sobre la cantidad y variedad de grafías (escritura con apoyos, comparación de palabras, juegos fonológicos).",
            "C) Nivel silábico convencional; felicitarla y avanzar al siguiente contenido.",
            "D) Dislexia; enviarla al psicólogo para evaluación especializada inmediata."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. El nivel presilábico con diferenciación se caracteriza por usar grafías variadas pero sin correspondencia sonido-letra. La intervención debe ser específica: actividades de reflexión fonológica y conciencia de la cantidad y variedad de grafías."
    },
    {
        id: 28,
        categoria: "Evaluación",
        pregunta: "La maestra de 5to grado debe evaluar la competencia 'Resolución de problemas' en Matemática. Diseña una situación donde los estudiantes planifican una excursión con un presupuesto dado. ¿Qué instrumento de evaluación es más coherente?",
        opciones: [
            "A) Prueba escrita de 20 operaciones de multiplicación y división.",
            "B) Rúbrica de desempeño que evalúe comprensión del problema, estrategias utilizadas, ejecución de cálculos, comunicación matemática y verificación de resultados.",
            "C) Lista de cotejo con la única pregunta '¿el estudiante resolvió correctamente?'.",
            "D) Promedio de calificaciones de tareas anteriores."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023 y Adecuación Curricular 2023. La rúbrica de desempeño es el instrumento más coherente con la evaluación por competencias, pues permite valorar múltiples dimensiones del proceso de resolución y retroalimentar de forma específica."
    },
    {
        id: 29,
        categoria: "Gestión de Aula",
        pregunta: "En 2do grado, los estudiantes se muestran inquietos después del recreo y se dificulta iniciar la clase de Ciencias Sociales. ¿Cuál es la estrategia pedagógicamente adecuada?",
        opciones: [
            "A) Castigar al grupo quitándoles el próximo recreo hasta que 'aprendan a comportarse'.",
            "B) Implementar una rutina de transición post-recreo (respiración, actividad corporal breve, canción, ronda de emociones) que regule el estado del grupo y prepare para el aprendizaje.",
            "C) Amenazar con bajar la nota a quienes no se calmen inmediatamente.",
            "D) Enviarlos a sentarse en silencio absoluto durante 20 minutos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023 (dimensión socioemocional) y Manual de Convivencia. La regulación emocional grupal mediante rutinas pedagógicas es parte de la gestión positiva del aula. El castigo colectivo es contraproducente y vulnera derechos."
    },
    {
        id: 30,
        categoria: "Inclusión",
        pregunta: "En 4to grado hay un estudiante, Pedro, con altas capacidades intelectuales. Termina las actividades mucho antes que sus compañeros y se aburre. La maestra considera que 'adelantarle contenidos' sería injusto para el resto. ¿Qué corresponde hacer?",
        opciones: [
            "A) Pedirle que se quede quieto y espere a que sus compañeros terminen.",
            "B) Diseñar actividades de ampliación y profundización (investigaciones, retos cognitivos, proyectos personales) coordinadas con orientación, como parte de la atención a la diversidad.",
            "C) Asignarle a Pedro el rol de 'ayudante de la maestra' para que corrija tareas de sus compañeros.",
            "D) Ignorar su situación porque 'los niños inteligentes no necesitan atención especial'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. Las altas capacidades son parte de la diversidad educativa que requiere adecuaciones curriculares. Las actividades de profundización y ampliación son una respuesta inclusiva. No es función del estudiante sustituir al docente en sus tareas."
    },
    {
        id: 31,
        categoria: "Protección Infantil",
        pregunta: "Un estudiante de 3er grado le cuenta a la maestra que su tío 'lo toca de manera incómoda' cuando se queda solo con él. La maestra nunca ha manejado una situación así. ¿Cuál es la actuación correcta?",
        opciones: [
            "A) Dudar del relato del niño por su corta edad y esperar a que lo repita para tomarlo en serio.",
            "B) Acoger al niño sin interrogarlo extensamente, garantizar su seguridad inmediata, notificar de forma urgente al director y al equipo de orientación para activar el protocolo de referimiento al CONANI y al Ministerio Público.",
            "C) Llamar directamente al tío del niño para confrontarlo sobre los hechos.",
            "D) Recomendar al niño que 'no se quede más con su tío' y continuar con la clase."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 (artículos 12-14, 396-404). Ante una sospecha o revelación de abuso sexual infantil, existe obligación legal de notificación inmediata al CONANI y al Ministerio Público. No se debe interrogar extensamente al niño ni confrontar al presunto agresor. El protocolo protege al niño y preserva la evidencia."
    },
    {
        id: 32,
        categoria: "Planificación",
        pregunta: "La maestra de 6to grado planifica una unidad integrada sobre 'Derechos y deberes ciudadanos'. Debe seleccionar el tipo de evaluación. ¿Cuál es más coherente con el enfoque por competencias?",
        opciones: [
            "A) Un examen de opción múltiple con 30 preguntas al finalizar la unidad.",
            "B) Un proyecto participativo (asamblea simulada, campaña comunitaria, análisis de caso) evaluado con rúbrica que articule competencias Ética y Ciudadana, Comunicativa y Pensamiento Lógico, Creativo y Crítico.",
            "C) Un resumen escrito del libro de texto como única evidencia.",
            "D) Una prueba oral donde los estudiantes reciten los artículos de la Constitución."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023 y Ordenanza 04-2023. Las competencias Ética y Ciudadana requieren movilización de saberes en contextos participativos reales, evaluados mediante instrumentos que capturen desempeños complejos (proyectos, rúbricas)."
    },
    {
        id: 33,
        categoria: "Ética",
        pregunta: "La maestra de 5to grado es invitada por una ONG a dar un taller los sábados, con remuneración. El horario no interfiere con su jornada escolar. ¿Qué debe considerar éticamente?",
        opciones: [
            "A) Aceptar sin más, pues es su tiempo libre y puede disponer de él como quiera.",
            "B) Verificar compatibilidad con el régimen del servidor público docente, informar a su superior inmediato, asegurar que no existe conflicto de intereses ni uso indebido de recursos del MINERD.",
            "C) Rechazar la oferta por el simple hecho de ser docente en funciones.",
            "D) Aceptar y ofrecer descuentos solo a los padres de sus estudiantes para 'ayudar'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023 y Estatuto del Docente. Las actividades complementarias fuera del horario oficial son permitidas siempre que no generen conflicto de intereses, no usen recursos del MINERD y se notifique al superior cuando corresponda."
    },
    {
        id: 34,
        categoria: "Evaluación",
        pregunta: "En 2do grado, la maestra implementa la coevaluación entre estudiantes como parte del proceso formativo. Un padre se queja de que 'los niños no saben evaluar'. ¿Cómo debe responder?",
        opciones: [
            "A) Eliminar la coevaluación por la queja del padre y volver sólo a la evaluación docente tradicional.",
            "B) Explicar al padre el valor formativo de la coevaluación y la autoevaluación, mostrar los criterios claros (rúbricas sencillas, pictogramas) que guían el proceso y cómo el docente acompaña y valida.",
            "C) Asignar a cada padre la tarea de evaluar a los compañeros de sus hijos.",
            "D) Usar la coevaluación solo como juego sin incidencia en el Registro de Grado."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La autoevaluación y la coevaluación son estrategias legítimas del enfoque formativo por competencias que desarrollan metacognición y autorregulación. El docente guía, valida e integra estos procesos con criterios claros."
    },
    {
        id: 35,
        categoria: "Alfabetización",
        pregunta: "En 1er grado, la maestra planifica el trabajo con textos auténticos. Una colega le dice 'mejor usa sílabas aisladas primero: ma-me-mi-mo-mu, y cuando las dominen pasas a palabras'. ¿Cuál es el enfoque correcto?",
        opciones: [
            "A) Seguir el consejo de la colega porque 'así se aprendía antes y funcionaba'.",
            "B) Trabajar con textos auténticos y con sentido desde el inicio (nombres propios, cuentos, canciones, rótulos, listas), integrando la reflexión sobre el sistema de escritura en contextos significativos.",
            "C) Alternar una semana de sílabas aisladas y una semana de textos.",
            "D) Enseñar primero el abecedario en orden alfabético y luego cada sílaba."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. El enfoque oficial de alfabetización inicial parte del trabajo con textos auténticos y significativos, no con unidades aisladas descontextualizadas. La reflexión sobre el sistema de escritura ocurre dentro de prácticas sociales del lenguaje."
    },
    {
        id: 36,
        categoria: "Gestión de Aula",
        pregunta: "En 3er grado, un estudiante nuevo no quiere participar y se muestra retraído. Llevan dos semanas de clase. ¿Cuál es la intervención más adecuada?",
        opciones: [
            "A) Exigirle que participe obligatoriamente frente al grupo para que 'rompa el hielo'.",
            "B) Generar un ambiente de confianza, asignarle un compañero-padrino, respetar sus ritmos de integración, y conversar en privado para conocer sus intereses y preocupaciones.",
            "C) Ignorar su conducta y esperar a que se adapte solo con el tiempo.",
            "D) Comunicar a los padres que 'el niño tiene problemas de socialización' sin mayor análisis."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Convivencia y Adecuación Curricular 2023 (dimensión socioemocional). La integración de un estudiante nuevo requiere estrategias de acogida, mediación de pares y respeto a los ritmos individuales, no imposición ni diagnósticos apresurados."
    },
    {
        id: 37,
        categoria: "Inclusión",
        pregunta: "En 5to grado, la estudiante Laura tiene epilepsia controlada con medicación. La familia informa que podría tener una crisis en el aula. La maestra se siente insegura. ¿Qué corresponde hacer?",
        opciones: [
            "A) Solicitar a la familia que retire a Laura del centro hasta que esté 'completamente controlada'.",
            "B) Coordinar con la familia y el equipo de salud escolar un protocolo de actuación, capacitarse sobre primeros auxilios básicos, informar al grupo en términos respetuosos y garantizar la plena inclusión.",
            "C) Mantener a Laura alejada de los demás estudiantes para evitar 'accidentes'.",
            "D) No informar a nadie más para 'proteger' la privacidad y que nadie la trate distinto."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024 y Ley 136-03. La inclusión de estudiantes con condiciones de salud crónicas requiere protocolos compartidos con la familia y el centro, formación docente básica y un ambiente sensibilizado. La exclusión o el silencio ponen en riesgo a la estudiante."
    },
    {
        id: 38,
        categoria: "Planificación",
        pregunta: "La maestra de 4to grado planifica su primera semana del año. Un colega le sugiere 'comenzar con la materia de una vez porque el tiempo es oro'. ¿Cuál es el enfoque correcto?",
        opciones: [
            "A) Seguir el consejo del colega y comenzar de inmediato con el primer contenido del libro.",
            "B) Dedicar las primeras sesiones a la construcción del grupo, el diagnóstico inicial, el establecimiento consensuado de acuerdos de convivencia y la activación de saberes previos.",
            "C) Aplicar exámenes escritos de todas las materias el primer día para saber 'cómo vienen'.",
            "D) Dictarles los objetivos del currículo para que los copien en sus cuadernos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023 y Manual de Convivencia. Las primeras semanas son clave para construir vínculos, diagnosticar el grupo y establecer acuerdos participativos, sin los cuales los aprendizajes posteriores se dificultan."
    },
    {
        id: 39,
        categoria: "Convivencia",
        pregunta: "En 6to grado, la maestra descubre que varios estudiantes se burlan recurrentemente de un compañero por su apariencia física. ¿Qué debe hacer?",
        opciones: [
            "A) Pedir al estudiante afectado que 'ignore las burlas' y aprenda a defenderse.",
            "B) Activar el protocolo de convivencia contra el acoso escolar: documentar, contener a la víctima, realizar sesiones de mediación con los agresores, trabajar con el grupo la diversidad y la empatía, involucrar a orientación y familias.",
            "C) Suspender inmediatamente a los estudiantes implicados para que sirva de ejemplo.",
            "D) Cambiar al estudiante afectado de sección para 'alejarlo' del problema."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Convivencia Escolar y Ley 136-03. El acoso escolar (bullying) exige activación del protocolo: contención a la víctima, intervención con los agresores desde una perspectiva restaurativa, trabajo con el grupo y coordinación con orientación. Cambiar a la víctima revictimiza."
    },
    {
        id: 40,
        categoria: "Evaluación",
        pregunta: "La maestra de 1er grado debe reportar los resultados del primer período. Un padre le pregunta 'qué nota obtuvo su hijo en el examen'. ¿Cómo debe responder?",
        opciones: [
            "A) Darle una nota numérica del 1 al 100 para que entienda fácilmente.",
            "B) Explicar que en Primaria se reportan indicadores de logro (L, EP, I) por competencia, mostrar las evidencias del desempeño del niño y orientar sobre los avances y apoyos necesarios.",
            "C) Decirle que 'le fue bien' sin dar mayor detalle.",
            "D) Compararlo con los demás estudiantes para que 'sepa dónde está parado'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. El sistema de evaluación en Primaria utiliza indicadores de logro cualitativos (L, EP, I), no calificaciones numéricas. La comunicación a la familia debe ser formativa, centrada en evidencias y orientada a la mejora, sin comparaciones."
    },

    // ========================================================================
    // BLOQUE 3 (41-80): Casos complejos de Evaluación e Inclusión
    // ========================================================================
    {
        id: 41,
        categoria: "Alfabetización",
        pregunta: "En 2do grado, el estudiante Daniel escribe 'AETE' cuando intenta escribir 'Elefante'. Ha comenzado a usar algunas consonantes además de vocales. ¿En qué nivel se encuentra y cuál es la intervención adecuada?",
        opciones: [
            "A) Nivel alfabético consolidado; trabajar reglas ortográficas complejas.",
            "B) Nivel silábico-alfabético (transición); diseñar actividades que consoliden la correspondencia fonema-grafema mediante escritura significativa y reflexión metalingüística.",
            "C) Nivel presilábico; iniciar desde el reconocimiento de vocales.",
            "D) Estudiante con trastorno del aprendizaje; referir a evaluación clínica."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. El nivel silábico-alfabético es la transición donde el estudiante alterna hipótesis silábicas y alfabéticas. 'AETE' para 'Elefante' muestra esta coexistencia. La intervención debe consolidar la correspondencia fonema-grafema en prácticas significativas."
    },
    {
        id: 42,
        categoria: "Gestión de Aula",
        pregunta: "En 4to grado, la maestra observa que las clases se extienden y no alcanza a cumplir con los contenidos planificados. ¿Cuál es la estrategia correcta?",
        opciones: [
            "A) Acelerar el ritmo de las clases aunque no todos los estudiantes comprendan.",
            "B) Revisar su planificación, priorizar aprendizajes esenciales, ajustar tiempos por situación de aprendizaje y reflexionar sobre la gestión del tiempo didáctico.",
            "C) Asignar más tareas para la casa y avanzar en la siguiente unidad sin consolidar la actual.",
            "D) Culpar al grupo por 'ir lento' y comunicarlo a las familias."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. La gestión del tiempo didáctico requiere priorización de aprendizajes esenciales y reflexión permanente sobre la propia práctica. Esta es una de las claves discursivas del ERP: la auto-revisión docente."
    },
    {
        id: 43,
        categoria: "Inclusión",
        pregunta: "En 3er grado, un estudiante con dislexia presenta dificultades marcadas en lectoescritura. La maestra planifica las evaluaciones. ¿Cuál es la adecuación correcta?",
        opciones: [
            "A) Eximirlo de todas las evaluaciones escritas y evaluarlo solo por observación.",
            "B) Mantener los indicadores de logro pero adecuar el acceso: lectura oral de consignas, tiempo adicional, uso de audio, evaluación diversificada oral/gráfica, todo documentado en la planificación.",
            "C) Entregarle evaluaciones de grados inferiores.",
            "D) No hacer ninguna adecuación para 'no generar diferencias' con los demás."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. Las adecuaciones de acceso (no significativas) eliminan barreras sin modificar los indicadores de logro. La diversificación de formatos de evaluación es un derecho del estudiante, no una concesión."
    },
    {
        id: 44,
        categoria: "Ética",
        pregunta: "La maestra de 6to grado tiene una mala relación con una colega. En la sala de profesores, otras docentes le comentan negativamente sobre ella. ¿Cuál es la actuación éticamente correcta?",
        opciones: [
            "A) Participar en el comentario negativo, pues 'entre docentes se tienen confianza'.",
            "B) Abstenerse de comentarios que deterioren la imagen de la colega, mantener el profesionalismo, y buscar vías institucionales para resolver diferencias si las hay.",
            "C) Grabar los comentarios de las colegas para usarlos más adelante.",
            "D) Enfrentarse públicamente a la colega aludida."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. La ética del servidor docente incluye el respeto entre colegas y la abstención de conductas que afecten el clima laboral. Los conflictos se canalizan institucionalmente."
    },
    {
        id: 45,
        categoria: "Planificación",
        pregunta: "La maestra de 5to grado diseña una unidad de Ciencias de la Naturaleza sobre 'El cuerpo humano'. ¿Cuál es la estrategia más coherente con el enfoque por competencias?",
        opciones: [
            "A) Dictar las definiciones de cada sistema del cuerpo para que los estudiantes las memoricen.",
            "B) Partir de preguntas generadoras y situaciones de aprendizaje (estudio del propio cuerpo, investigación sobre hábitos saludables, experimentos sencillos) que integren la indagación científica y la competencia comunicativa.",
            "C) Mostrar videos durante toda la unidad sin actividades adicionales.",
            "D) Entregar fotocopias del libro para que los estudiantes respondan los ejercicios sin intervención docente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. La enseñanza de las Ciencias de la Naturaleza se sustenta en la indagación científica desde situaciones contextualizadas, no en la transmisión de definiciones memorísticas."
    },
    {
        id: 46,
        categoria: "Evaluación",
        pregunta: "La maestra de 2do grado registra sistemáticamente sus observaciones en el Registro de Grado. Al final del trimestre, debe reportar avances. ¿Qué caracteriza un buen registro pedagógico?",
        opciones: [
            "A) Anotar solo las calificaciones finales de cada prueba escrita.",
            "B) Documentar evidencias diversas (observaciones, producciones, diálogos, rúbricas) a lo largo del período, articuladas con indicadores de logro, que permitan emitir juicios evaluativos fundamentados.",
            "C) Registrar únicamente los problemas de comportamiento de los estudiantes.",
            "D) Guardar los cuadernos de los estudiantes como única evidencia."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. El Registro de Grado debe contener evidencias diversas y sistemáticas que sustenten los indicadores reportados. La evaluación por competencias exige triangulación de información, no una sola fuente."
    },
    {
        id: 47,
        categoria: "Protección Infantil",
        pregunta: "La maestra de 1er grado nota que un estudiante llega frecuentemente sin desayunar, con ropa sucia y muestra signos de abandono. ¿Cuál es la actuación correcta?",
        opciones: [
            "A) Regañar al estudiante por 'no presentarse bien' en la escuela.",
            "B) Notificar a orientación y al equipo de gestión para activar el protocolo de detección de negligencia, coordinar apoyos del centro (desayuno escolar, útiles) y referir a las instancias correspondientes conforme al Código del Menor.",
            "C) Hablar con otros padres para que 'le ayuden' al niño con comida.",
            "D) Asumir que 'así viene de su casa' y continuar con la clase."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 (artículos 12-14). La negligencia es una forma de maltrato infantil que exige notificación y activación del protocolo institucional. El centro debe garantizar los apoyos disponibles y referir cuando corresponda."
    },
    {
        id: 48,
        categoria: "Alfabetización",
        pregunta: "En 1er grado, la maestra planifica la biblioteca de aula. Una colega le sugiere 'usar sólo libros con palabras sencillas de una o dos sílabas'. ¿Cuál es el enfoque correcto?",
        opciones: [
            "A) Seguir el consejo y armar una biblioteca solo con palabras simples.",
            "B) Conformar una biblioteca diversa y rica (cuentos, poesía, textos informativos, libros-álbum) que promueva la lectura por placer, la exploración autónoma y la formación de lectores.",
            "C) Eliminar la biblioteca hasta que todos los estudiantes sepan leer convencionalmente.",
            "D) Permitir el acceso a libros solo como premio por buen comportamiento."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. La biblioteca de aula es un dispositivo pedagógico clave para la formación lectora. Debe ser diversa, abundante y accesible, promoviendo el contacto con textos auténticos desde antes de la lectura convencional."
    },
    {
        id: 49,
        categoria: "Gestión de Aula",
        pregunta: "En 4to grado, la maestra establecerá los acuerdos de convivencia del aula. ¿Cuál es el procedimiento correcto?",
        opciones: [
            "A) Escribir las normas y entregarlas para que los estudiantes las firmen.",
            "B) Facilitar una construcción participativa de los acuerdos con los estudiantes, identificando juntos las conductas que favorecen la convivencia, redactándolos en positivo y revisándolos periódicamente.",
            "C) Aplicar las mismas normas del año pasado sin modificación ni participación.",
            "D) Establecer solo las sanciones para cada tipo de falta."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Convivencia Escolar y Adecuación Curricular 2023. Los acuerdos de convivencia deben construirse participativamente, redactarse en positivo y ser apropiados por los estudiantes. Esta es una práctica de ciudadanía democrática en el aula."
    },
    {
        id: 50,
        categoria: "Inclusión",
        pregunta: "En 5to grado, la estudiante Mariela vive con su abuela porque su madre emigró al extranjero. Ha bajado el rendimiento y se muestra triste. ¿Qué corresponde hacer?",
        opciones: [
            "A) Llamar la atención a la abuela por el bajo rendimiento de Mariela.",
            "B) Acompañar emocionalmente a la estudiante, coordinar con orientación para un apoyo psicosocial, ajustar estrategias de enseñanza a su momento, y trabajar con la familia extendida.",
            "C) Ignorar la situación personal y enfocarse sólo en los contenidos académicos.",
            "D) Compartir la situación familiar con el resto del curso para que 'la comprendan'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 y Ordenanza 05-2024. Las situaciones socioemocionales afectan el aprendizaje. La atención a la diversidad incluye contextos familiares diversos. La acogida emocional y el trabajo interdisciplinar son parte del rol docente."
    },
    {
        id: 51,
        categoria: "Evaluación",
        pregunta: "La maestra de 3er grado aplicó una prueba de Matemática. Al corregir, nota que el 80% del grupo falló en un mismo ítem. ¿Cuál es la conclusión profesional correcta?",
        opciones: [
            "A) Concluir que 'el grupo es flojo' y colocar 'I' generalizado.",
            "B) Revisar su propia práctica docente: posiblemente el contenido no fue bien enseñado, la consigna fue ambigua o la estrategia didáctica no fue la adecuada; rediseñar la enseñanza y ofrecer retroalimentación.",
            "C) Eliminar el ítem del examen y promediar los demás.",
            "D) Aplicar un nuevo examen más fácil para subir las calificaciones."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023 y clave discursiva del ERP: auto-revisión docente. Cuando la mayoría del grupo falla en algo, la primera pregunta profesional es '¿qué debo cambiar yo para que ellos aprendan?'. La evaluación es también un diagnóstico de la enseñanza."
    },
    {
        id: 52,
        categoria: "Planificación",
        pregunta: "La maestra de 6to grado planifica una salida pedagógica a un museo. ¿Cuál es la secuencia didáctica correcta?",
        opciones: [
            "A) Llevar a los estudiantes sin preparación previa y que 'disfruten la experiencia'.",
            "B) Diseñar una secuencia de tres momentos: preparación previa (activación de saberes, guía de observación), experiencia en el museo, y sistematización posterior (producción, reflexión, integración con los contenidos).",
            "C) Pedir que los estudiantes escriban un resumen del paseo al día siguiente como única tarea.",
            "D) Evaluar con examen escrito el contenido del museo al regresar."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. Las experiencias pedagógicas fuera del aula deben integrarse en una secuencia didáctica intencionada (antes-durante-después) articulada con competencias e indicadores específicos."
    },
    {
        id: 53,
        categoria: "Convivencia",
        pregunta: "En 4to grado, dos estudiantes se pelean físicamente en el recreo. La maestra es la primera adulta en llegar. ¿Cuál es la actuación correcta?",
        opciones: [
            "A) Gritarles para que se separen y enviarlos a suspensión inmediata.",
            "B) Separar a los estudiantes con firmeza y calma, atender posibles lesiones, contenerlos emocionalmente en espacios separados, y posteriormente activar el protocolo de mediación con orientación.",
            "C) Dejar que 'resuelvan solos' la situación para que 'aprendan a defenderse'.",
            "D) Obligarlos a pedirse perdón públicamente delante de todos los estudiantes."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Convivencia Escolar y Ley 136-03. La mediación de conflictos físicos exige primero garantizar la seguridad, luego la contención emocional y posteriormente el abordaje restaurativo. El perdón forzado no resuelve el conflicto de fondo."
    },
    {
        id: 54,
        categoria: "Ética",
        pregunta: "La maestra de 2do grado utiliza redes sociales personales donde publica fotos y comentarios sobre su vida. Un día publica imágenes de sus estudiantes sin autorización de las familias. ¿Cuál es la actuación correcta?",
        opciones: [
            "A) Continuar publicando mientras los comentarios sean 'positivos' sobre los estudiantes.",
            "B) Abstenerse de publicar imágenes o información de estudiantes sin consentimiento formal escrito de las familias, diferenciando vida personal y rol profesional.",
            "C) Publicar sólo imágenes de los niños cuyas familias no se hayan 'opuesto' explícitamente.",
            "D) Pedirles a los estudiantes que autoricen ellos mismos las publicaciones."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 (derecho a la imagen e intimidad) y Orden Departamental 22-2023. La imagen de los niños es un derecho protegido. Se requiere consentimiento formal escrito del padre, madre o tutor. La separación entre vida personal y rol docente es una exigencia ética."
    },
    {
        id: 55,
        categoria: "Alfabetización",
        pregunta: "En 1er grado, la maestra realiza un taller de escritura donde los estudiantes producen textos propios con sus hipótesis actuales. Un padre se queja de que 'el niño escribe mal y la maestra no lo corrige'. ¿Cómo debe responder?",
        opciones: [
            "A) Comenzar a corregir cada palabra mal escrita para complacer al padre.",
            "B) Explicar al padre que los 'errores' son hipótesis constructivas que muestran el nivel de pensamiento del niño, y que la intervención pedagógica se diseña para avanzar desde ese nivel, no corrigiendo mecánicamente.",
            "C) Dejar de hacer producción libre y volver a dictados y planas.",
            "D) Ignorar la producción del estudiante y calificar sólo los dictados."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. La comunicación con las familias incluye explicar el enfoque pedagógico. Las hipótesis de escritura no son 'errores' sino evidencias del proceso constructivo. La intervención docente se diseña a partir de esos niveles."
    },
    {
        id: 56,
        categoria: "Inclusión",
        pregunta: "En 6to grado, un estudiante con dificultades específicas del aprendizaje en Matemática (discalculia) se frustra y deja de intentar. ¿Qué estrategia es adecuada?",
        opciones: [
            "A) Insistir en que resuelva las mismas actividades que los demás 'para que se acostumbre'.",
            "B) Diseñar adecuaciones significativas: fragmentar tareas, usar material concreto y visual, partir de sus fortalezas, ofrecer retroalimentación inmediata y trabajar la autoestima matemática en coordinación con orientación.",
            "C) Eximirlo de Matemática y reforzar solo en otras áreas.",
            "D) Asignarle problemas de cursos inferiores sin adecuación formal."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. Las dificultades específicas del aprendizaje requieren adecuaciones significativas documentadas. Partir de las fortalezas, usar material concreto y trabajar el vínculo afectivo con el área son estrategias validadas."
    },
    {
        id: 57,
        categoria: "Planificación",
        pregunta: "La maestra de 3er grado planifica proyectos participativos de aula. ¿Cuál es la característica central de un proyecto de aula según el currículo?",
        opciones: [
            "A) Un conjunto de actividades sueltas agrupadas por tema.",
            "B) Una propuesta intencionada con una situación problema o reto significativo para los estudiantes, producto final concreto, articulación de competencias y evaluación procesual.",
            "C) El desarrollo completo del libro de texto de un área.",
            "D) Una tarea grupal asignada para la casa."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. El proyecto de aula se caracteriza por una situación problema/reto auténtico, producto final concreto, articulación de múltiples competencias y evaluación procesual con protagonismo estudiantil."
    },
    {
        id: 58,
        categoria: "Evaluación",
        pregunta: "En 5to grado, la maestra implementa por primera vez el uso de portafolios. ¿Cuál es el propósito formativo del portafolio?",
        opciones: [
            "A) Guardar las pruebas escritas del trimestre en una carpeta.",
            "B) Sistematizar evidencias seleccionadas del proceso de aprendizaje del estudiante, con reflexiones propias y del docente, que permitan evidenciar avances, procesos y metacognición.",
            "C) Acumular todas las tareas del año sin criterio ni reflexión.",
            "D) Sustituir completamente los exámenes escritos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. El portafolio es un instrumento de evaluación auténtica que sistematiza evidencias seleccionadas con intencionalidad y reflexiones metacognitivas, articulado con indicadores de logro."
    },
    {
        id: 59,
        categoria: "Ética",
        pregunta: "La maestra de 4to grado descubre que una colega está vendiendo materiales didácticos a los padres como 'obligatorios', cuando no lo son. ¿Cuál es la actuación ética correcta?",
        opciones: [
            "A) Hacer lo mismo, ya que 'así todos los docentes mejoran sus ingresos'.",
            "B) Abstenerse de la práctica personalmente y notificar institucionalmente la situación al equipo de gestión, que deberá canalizar conforme al régimen ético del MINERD.",
            "C) Confrontar públicamente a la colega delante de los padres.",
            "D) Ignorar la situación porque 'cada docente hace lo que puede'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. La venta obligada de materiales a las familias es una práctica prohibida que debe canalizarse institucionalmente. La omisión convierte al testigo en cómplice pasivo."
    },
    {
        id: 60,
        categoria: "Gestión de Aula",
        pregunta: "La maestra de 2do grado debe organizar el aula físicamente. ¿Cuál es la disposición más coherente con el enfoque por competencias?",
        opciones: [
            "A) Pupitres en filas rectas mirando al pizarrón, silencio absoluto como norma.",
            "B) Organización flexible (equipos, círculos, estaciones, rincones de aprendizaje) que se ajuste a los tipos de actividad, con espacios funcionales para la interacción, la producción y la exposición de trabajos.",
            "C) Pupitres separados por estudiante para evitar que 'se distraigan entre ellos'.",
            "D) Aula vacía sin materiales visibles para que 'se concentren mejor'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. El aula es un ambiente de aprendizaje cuya organización debe ser flexible, funcional y estimulante, apoyando la interacción, la cooperación y la autonomía. El ambiente físico es parte del currículo."
    },

    // ========================================================================
    // BLOQUE 4 (61-100): Área Lengua Española y Matemática
    // ========================================================================
    {
        id: 61,
        categoria: "Alfabetización",
        pregunta: "En 2do grado, la maestra trabaja el tipo textual 'instructivo' con recetas. Un estudiante pregunta '¿para qué sirve leer recetas si no cocinamos?'. ¿Cuál es la respuesta pedagógica correcta?",
        opciones: [
            "A) 'Porque viene en el libro de texto y hay que estudiarlo'.",
            "B) Contextualizar la pregunta: reconocer la validez del planteamiento, explicar la función social del texto instructivo en la vida cotidiana (recetas, manuales, reglas de juego) y proponer una situación auténtica (elaborar instrucciones reales).",
            "C) Ignorar la pregunta y continuar con el ejercicio del libro.",
            "D) Regañar al estudiante por 'cuestionar' los contenidos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023 y Ordenanza 01-2023. La enseñanza de los tipos textuales debe estar anclada en prácticas sociales del lenguaje. Las preguntas de los estudiantes son oportunidades de sentido y anclaje contextual."
    },
    {
        id: 62,
        categoria: "Planificación",
        pregunta: "La maestra de 5to grado planifica la enseñanza de fracciones en Matemática. ¿Cuál es la secuencia didáctica adecuada?",
        opciones: [
            "A) Definir fracción, mostrar la notación y aplicar ejercicios de operaciones directamente.",
            "B) Partir de situaciones cotidianas (repartos, mediciones, recetas), usar material concreto y representaciones gráficas, construir el concepto progresivamente y llegar a la notación formal con comprensión del sentido.",
            "C) Dictar 50 ejercicios de fracciones para que los estudiantes los resuelvan en silencio.",
            "D) Mostrar un video y aplicar un examen al día siguiente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. La enseñanza de la matemática debe partir de situaciones problema contextualizadas, usar recursos concretos y representacionales, y construir el concepto antes que la notación formal."
    },
    {
        id: 63,
        categoria: "Evaluación",
        pregunta: "La maestra de 1er grado debe evaluar la competencia matemática 'Resuelve problemas sencillos'. ¿Cuál es el instrumento más adecuado en este nivel?",
        opciones: [
            "A) Una prueba escrita con 30 operaciones aritméticas.",
            "B) Una situación de aprendizaje lúdica con material concreto donde el estudiante manipule, explique su estrategia oralmente y represente con dibujos, valorada con registro de observación.",
            "C) Un dictado de números del 1 al 100.",
            "D) La copia repetida de las tablas de sumar."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023 y Adecuación Curricular 2023. En 1er grado, la evaluación debe ser lúdica, con material concreto, permitir la verbalización de estrategias y registrarse mediante observación sistemática."
    },
    {
        id: 64,
        categoria: "Inclusión",
        pregunta: "En 3er grado, un estudiante con mutismo selectivo no habla en el aula aunque habla en casa. La maestra lo pone a exponer frente al grupo y el niño llora. ¿Qué debe hacer?",
        opciones: [
            "A) Insistir en que exponga 'para superar su miedo' frente a los demás.",
            "B) Respetar sus tiempos, buscar formatos alternativos de participación (escritura, dibujo, exposición grabada, en pequeños grupos), coordinar con orientación y la familia un plan gradual.",
            "C) Asumir que 'es tímido' y eximirlo de toda participación.",
            "D) Castigarlo bajando su nota por no participar."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. El mutismo selectivo es una condición que requiere adecuaciones específicas y acompañamiento especializado. Forzar la exposición incrementa el cuadro. La diversificación de formatos de participación es una respuesta inclusiva."
    },
    {
        id: 65,
        categoria: "Alfabetización",
        pregunta: "En 1er grado, la maestra organiza una jornada de lectura diaria. ¿Cuál es el propósito correcto de este espacio?",
        opciones: [
            "A) Que los estudiantes practiquen lectura oral en voz alta como único objetivo.",
            "B) Generar un espacio de encuentro con la lectura en múltiples modalidades (lectura mediada por el docente, exploración de libros, lectura compartida), promoviendo el gusto por leer y la comprensión.",
            "C) Medir la velocidad lectora de cada estudiante semanalmente.",
            "D) Copiar párrafos del libro de texto en el cuaderno."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. La lectura en Primaria tiene múltiples modalidades didácticas (mediada, compartida, por placer, guiada) cuyo propósito es formar lectores competentes y comprometidos, no medir velocidad."
    },
    {
        id: 66,
        categoria: "Gestión de Aula",
        pregunta: "La maestra de 4to grado nota que ciertos estudiantes monopolizan la participación oral. ¿Qué estrategia es adecuada?",
        opciones: [
            "A) Permitir que solo participen los más rápidos porque 'los demás no saben las respuestas'.",
            "B) Implementar estrategias de participación equitativa (turnos, trabajo en parejas antes de plenaria, tarjetas de nombres al azar, tiempo de pensamiento individual) que den voz a todos.",
            "C) Prohibir totalmente la participación oral y solo aceptar respuestas escritas.",
            "D) Llamar la atención públicamente a los estudiantes más callados."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023 y Manual de Convivencia. La participación equitativa es responsabilidad docente. Estrategias como think-pair-share, tarjetas al azar y tiempo de pensamiento garantizan que todas las voces estén en el aula."
    },
    {
        id: 67,
        categoria: "Ética",
        pregunta: "La maestra de 6to grado recibe en redes sociales una solicitud de amistad de un exestudiante menor de edad. ¿Cuál es la actuación ética correcta?",
        opciones: [
            "A) Aceptar la solicitud por cortesía y mantener comunicación informal.",
            "B) No aceptar solicitudes de amistad en redes personales con estudiantes o exestudiantes menores de edad; si hay comunicación necesaria, canalizarla por vías institucionales del centro.",
            "C) Aceptar y publicar mensajes dirigidos específicamente al estudiante.",
            "D) Aceptar sólo si los padres lo autorizan expresamente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023 y Ley 136-03. La relación docente-estudiante se circunscribe al ámbito pedagógico institucional. Las interacciones privadas en redes sociales con menores vulneran límites éticos y pueden configurar situaciones de riesgo."
    },
    {
        id: 68,
        categoria: "Evaluación",
        pregunta: "La maestra de 3er grado diseña la evaluación final del año. Un colega le sugiere aplicar un solo examen sumativo de todas las áreas. ¿Cuál es el enfoque correcto?",
        opciones: [
            "A) Seguir el consejo del colega y aplicar un único examen final sumativo.",
            "B) Evidenciar el desempeño mediante múltiples fuentes acumuladas durante el año (registros, portafolios, producciones, observaciones) articuladas con las competencias del grado, no un único evento final.",
            "C) No hacer ninguna evaluación formal y usar solo la impresión general del año.",
            "D) Aplicar sólo pruebas orales individuales de 2 minutos por estudiante."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La evaluación final integra evidencias recogidas procesualmente durante el año, no se reduce a un examen sumativo. El juicio evaluativo final debe estar fundamentado en múltiples evidencias."
    },
    {
        id: 69,
        categoria: "Protección Infantil",
        pregunta: "La maestra de 5to grado nota que una estudiante, antes sociable, ahora está aislada, descuidada, con bajo rendimiento y ha faltado varios días. ¿Qué debe hacer?",
        opciones: [
            "A) Esperar a que la estudiante 'regrese a su estado normal' por sí sola.",
            "B) Comunicar inmediatamente a orientación y dirección las señales observadas, explorar pedagógicamente si hay factores que afectan a la estudiante, contactar a la familia y activar apoyos según protocolo.",
            "C) Preguntarle directamente al grupo 'qué le pasa' a la estudiante.",
            "D) Bajar la nota por las faltas sin indagar las causas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 y Manual de Convivencia. Los cambios significativos en el comportamiento son señales de alerta que requieren intervención interdisciplinar. El rol docente incluye la detección temprana y la activación de apoyos institucionales."
    },
    {
        id: 70,
        categoria: "Planificación",
        pregunta: "La maestra de 2do grado planifica la integración de las TIC en el aula. Solo cuenta con una tableta del centro. ¿Cuál es el enfoque pedagógico correcto?",
        opciones: [
            "A) No usar TIC porque 'no hay suficientes dispositivos'.",
            "B) Integrar la tableta en estaciones de trabajo rotativas, con propósitos pedagógicos claros (búsqueda, producción, consulta), articulada con otras actividades del aula.",
            "C) Entregar la tableta a los estudiantes 'más avanzados' como premio.",
            "D) Usar la tableta solo para que la maestra proyecte videos al grupo completo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. La integración de las TIC debe responder a propósitos pedagógicos y se organiza según los recursos disponibles, mediante estaciones u otras estrategias que democraticen el acceso."
    },
    {
        id: 71,
        categoria: "Alfabetización",
        pregunta: "En 1er grado, la maestra trabaja el nombre propio como punto de partida para la alfabetización. Un padre pregunta '¿por qué empieza por el nombre y no por el abecedario?'. ¿Cómo debe explicar?",
        opciones: [
            "A) 'Porque así lo indica el libro de texto, hay que seguir el orden'.",
            "B) Explicar que el nombre propio es el primer texto significativo para el niño, que permite identificar constantes (letras), establecer correspondencias y construir sentido, siendo una entrada natural al sistema de escritura.",
            "C) Decirle que no tiene importancia y que 'ya llegará al abecedario'.",
            "D) Enseñar el abecedario de manera paralela para 'tranquilizar' al padre."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. El nombre propio es un texto fundador en la alfabetización inicial. Permite al niño observar constantes, establecer hipótesis sobre el sistema y construir sentido personal con las letras."
    },
    {
        id: 72,
        categoria: "Inclusión",
        pregunta: "En 4to grado hay un estudiante con Trastorno de Ansiedad diagnosticado. Durante los exámenes presenta bloqueo emocional y no logra responder aunque sabe los contenidos. ¿Qué debe hacer la maestra?",
        opciones: [
            "A) Exigirle que responda 'como todos' para que 'supere su ansiedad'.",
            "B) Implementar adecuaciones de acceso (ambiente tranquilo, fraccionar la evaluación, combinar formatos escrito/oral, permitir pausas, reducir estímulos), en coordinación con orientación y la familia.",
            "C) Eximirlo totalmente de las evaluaciones.",
            "D) Ignorar la condición y colocarle 'I' si no responde."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. Los trastornos emocionales son parte de la diversidad que requiere adecuaciones de acceso documentadas. No se trata de eximir ni de ignorar, sino de eliminar barreras que impiden demostrar lo aprendido."
    },
    {
        id: 73,
        categoria: "Convivencia",
        pregunta: "En 5to grado, un grupo de estudiantes excluye sistemáticamente a una compañera en los trabajos grupales. ¿Qué debe hacer la maestra?",
        opciones: [
            "A) Permitir que los estudiantes formen los grupos como quieran porque 'ya son grandes'.",
            "B) Organizar intencionalmente la formación de grupos heterogéneos, trabajar explícitamente competencias socioemocionales, abordar la situación con el grupo sin exponer a la víctima, y articular con orientación.",
            "C) Confrontar públicamente a los estudiantes excluyentes delante del grupo.",
            "D) Cambiar a la estudiante afectada a otra sección."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Convivencia Escolar. La exclusión social es una forma de violencia que requiere intervención pedagógica. La organización intencionada de grupos heterogéneos y el trabajo socioemocional son estrategias preventivas y restaurativas."
    },
    {
        id: 74,
        categoria: "Evaluación",
        pregunta: "La maestra de 6to grado recibe reclamos de varios padres porque sus hijos tienen 'EP' en Lengua Española. Le piden subir las calificaciones 'para que no afecte su ingreso a Secundaria'. ¿Cómo debe actuar?",
        opciones: [
            "A) Acceder a la solicitud porque 'los padres tienen razón en preocuparse'.",
            "B) Mantener la integridad de la evaluación, convocar a reunión para explicar el significado de 'EP', presentar las evidencias del desempeño y el plan de acompañamiento para el avance.",
            "C) Cambiar las calificaciones pero dejar constancia 'oculta' de las dificultades.",
            "D) Rendirse ante la presión y modificar todos los indicadores a 'L'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023 y Orden Departamental 22-2023. La integridad evaluativa es un principio ético. La comunicación con las familias debe ser formativa y basada en evidencias, no cediendo a presiones que distorsionen el juicio evaluativo."
    },
    {
        id: 75,
        categoria: "Ética",
        pregunta: "La maestra de 2do grado lleva tres días sin poder asistir por una emergencia familiar. No ha notificado formalmente al centro. ¿Cuál es la actuación ética correcta?",
        opciones: [
            "A) Continuar ausente sin notificar, pues 'en algún momento volverá'.",
            "B) Notificar inmediatamente al director por los medios disponibles, presentar los justificantes correspondientes, y coordinar para que sus estudiantes no se vean afectados.",
            "C) Pedir a una colega que la 'cubra' sin informar al director.",
            "D) Esperar a reincorporarse para explicar verbalmente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023 y Estatuto del Docente. La puntualidad y asistencia son deberes docentes. Ante imposibilidad, la comunicación inmediata al superior y la presentación de justificantes es una obligación ética y administrativa."
    },
    {
        id: 76,
        categoria: "Planificación",
        pregunta: "La maestra de 3er grado recibe en su grupo a estudiantes con muy diversos niveles de desempeño. ¿Cuál es el enfoque correcto de planificación?",
        opciones: [
            "A) Planificar para un 'estudiante promedio' y dejar que los demás se ajusten.",
            "B) Diseñar una planificación que contemple la diversidad mediante actividades de múltiples niveles de complejidad, diferentes formas de representación y expresión, trabajo cooperativo y apoyos diferenciados.",
            "C) Dividir el grupo en 'los que saben' y 'los que no saben' y enseñarles contenidos distintos.",
            "D) Planificar sólo para el grupo 'más adelantado' para cumplir con el currículo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024 y Adecuación Curricular 2023. La planificación debe contemplar la diversidad desde su origen mediante principios del Diseño Universal para el Aprendizaje: múltiples medios de representación, expresión y motivación."
    },
    {
        id: 77,
        categoria: "Gestión de Aula",
        pregunta: "En 1er grado, la maestra establece rutinas diarias. ¿Cuál es el propósito pedagógico de las rutinas?",
        opciones: [
            "A) Rigidizar el aula para evitar cualquier alteración.",
            "B) Ofrecer previsibilidad y estructura que brinde seguridad emocional, optimice el tiempo didáctico y favorezca la autonomía progresiva de los estudiantes.",
            "C) Ocupar el tiempo cuando la maestra no sabe qué hacer.",
            "D) Controlar a los estudiantes para que 'no se muevan'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. Las rutinas pedagógicas son andamios que estructuran el tiempo del aula, dan seguridad emocional, favorecen la autonomía y liberan tiempo para el aprendizaje significativo."
    },
    {
        id: 78,
        categoria: "Alfabetización",
        pregunta: "En 2do grado, la maestra trabaja la revisión y reescritura de textos producidos por los estudiantes. ¿Cuál es el sentido pedagógico de esta práctica?",
        opciones: [
            "A) Corregir con lápiz rojo todos los errores para que 'no los repitan'.",
            "B) Hacer visible que la escritura es un proceso recursivo, que todos los escritores revisan, y acompañar al estudiante en mejorar su texto según aspectos trabajados (coherencia, cohesión, ortografía según el nivel).",
            "C) Hacer que los estudiantes copien el texto correctamente escrito por la maestra.",
            "D) Evaluar solo la presentación final sin revisar el proceso."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023 y Adecuación Curricular 2023. La escritura es un proceso recursivo que incluye planificación, textualización, revisión y edición. La revisión acompañada es una práctica didáctica central, no una corrección punitiva."
    },
    {
        id: 79,
        categoria: "Inclusión",
        pregunta: "En 4to grado ingresa un estudiante con Síndrome de Down. La maestra se pregunta si debe 'exigirle lo mismo que a los demás'. ¿Cuál es el planteamiento correcto?",
        opciones: [
            "A) Exigirle exactamente lo mismo para 'no hacer diferencias'.",
            "B) Realizar adecuaciones curriculares significativas (modificar indicadores y/o contenidos), construir el plan educativo individualizado con el equipo de orientación y la familia, y valorar los avances en sus propios términos.",
            "C) Eximirlo de los contenidos y enviarle tareas recreativas.",
            "D) Calificarlo con 'L' automáticamente para 'motivarlo'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. Las adecuaciones curriculares significativas modifican indicadores, contenidos o competencias cuando corresponde. El plan educativo individualizado se construye interdisciplinariamente y valora los avances del estudiante en relación a sí mismo."
    },
    {
        id: 80,
        categoria: "Evaluación",
        pregunta: "En 3er grado, la maestra diseña la retroalimentación a sus estudiantes. ¿Cuál es la característica de una retroalimentación formativa de calidad?",
        opciones: [
            "A) Una calificación numérica al final de cada tarea.",
            "B) Información específica, oportuna, descriptiva y orientadora que le permita al estudiante comprender qué logró, qué necesita mejorar y cómo hacerlo, dialogando con sus producciones.",
            "C) Frases generales como 'bien', 'regular', 'mal'.",
            "D) Únicamente marcar con rojo los errores."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La retroalimentación formativa es específica, descriptiva, oportuna y orientada al progreso. Es una de las estrategias de mayor impacto en el aprendizaje y una clave discursiva del ERP."
    },

    // ========================================================================
    // BLOQUE 5 (81-120): Casos de Ciencias Sociales, Naturales y Formación Humana
    // ========================================================================
    {
        id: 81,
        categoria: "Planificación",
        pregunta: "La maestra de 4to grado planifica Ciencias Sociales sobre 'Las regiones geográficas de República Dominicana'. ¿Cuál es la estrategia didáctica más pertinente?",
        opciones: [
            "A) Dictar las características de cada región para que las memoricen.",
            "B) Diseñar una situación de aprendizaje que integre indagación (fuentes diversas), comparación entre regiones, uso de mapas y recursos multimedia, y un producto final que evidencie la comprensión.",
            "C) Mostrar un documental extenso sin actividades de articulación.",
            "D) Entregar una fotocopia resumen para que la copien al cuaderno."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. Las Ciencias Sociales se enseñan mediante indagación, uso de fuentes diversas, comparación y representación espacial, articulando contenidos con las competencias fundamentales."
    },
    {
        id: 82,
        categoria: "Ética",
        pregunta: "La maestra de 5to grado recibe una invitación a un grupo de WhatsApp de 'padres descontentos' con el centro. ¿Cuál es la actuación ética correcta?",
        opciones: [
            "A) Unirse al grupo para 'escuchar' lo que dicen los padres.",
            "B) Declinar la invitación y canalizar las preocupaciones legítimas de las familias por los mecanismos institucionales (Asamblea de Padres, APMAE, reuniones con el director).",
            "C) Unirse al grupo pero solo para defender al centro.",
            "D) Compartir información interna del centro para 'ganarse la confianza' de los padres."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. La participación en grupos informales contra la institución vulnera la ética profesional. Los canales institucionales (APMAE, Asamblea, reuniones) son los espacios legítimos para el diálogo."
    },
    {
        id: 83,
        categoria: "Inclusión",
        pregunta: "En 6to grado, un estudiante manifiesta abiertamente una orientación sexual distinta. Otros compañeros lo molestan. ¿Qué debe hacer la maestra?",
        opciones: [
            "A) Pedirle al estudiante que 'no lo mencione' para evitar molestias.",
            "B) Garantizar un aula respetuosa y libre de discriminación, abordar explícitamente la diversidad y el respeto a la dignidad humana, activar protocolos de convivencia contra la discriminación, y articular con orientación.",
            "C) Ignorar las burlas porque 'son cosas de niños'.",
            "D) Cambiar al estudiante de sección para 'evitarle' las burlas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 (principio de no discriminación), Manual de Convivencia y Ordenanza 05-2024. Todo estudiante tiene derecho a un ambiente escolar libre de discriminación. La intervención docente contra el acoso discriminatorio es obligatoria."
    },
    {
        id: 84,
        categoria: "Evaluación",
        pregunta: "La maestra de 2do grado diseña una evaluación de la competencia 'Pensamiento Lógico, Creativo y Crítico'. ¿Cuál es el enfoque correcto?",
        opciones: [
            "A) Aplicar un test de coeficiente intelectual.",
            "B) Diseñar situaciones auténticas donde los estudiantes resuelvan problemas, argumenten decisiones, generen alternativas y reflexionen sobre su pensamiento, valorado con rúbrica.",
            "C) Aplicar solo pruebas de memorización de contenidos.",
            "D) Calificar únicamente las respuestas 'correctas' sin analizar los procesos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. Las Competencias Fundamentales como el Pensamiento Lógico, Creativo y Crítico se evalúan mediante situaciones auténticas donde se movilizan procesos cognitivos complejos, no con tests o memorización."
    },
    {
        id: 85,
        categoria: "Alfabetización",
        pregunta: "En 1er grado, la maestra introduce la lectura por placer. ¿Cuál es la práctica correcta?",
        opciones: [
            "A) Imponer un libro específico a todos los estudiantes para garantizar 'control'.",
            "B) Ofrecer variedad de textos, permitir la exploración autónoma, modelar la lectura a través de lecturas en voz alta del docente, y socializar las lecturas.",
            "C) Sólo leer cuando los estudiantes 'se lo ganen' por buen comportamiento.",
            "D) Evaluar la comprensión con cuestionarios extensos después de cada lectura."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. La lectura por placer se fomenta mediante variedad, autonomía, modelaje docente y socialización. La lectura no debe ser usada como premio/castigo ni ser objeto de evaluación punitiva."
    },
    {
        id: 86,
        categoria: "Gestión de Aula",
        pregunta: "La maestra de 3er grado tiene un estudiante que constantemente interrumpe la clase hablando en voz alta. ¿Cuál es la estrategia pedagógica correcta?",
        opciones: [
            "A) Enviarlo fuera del aula cada vez que interrumpa.",
            "B) Identificar las causas posibles (necesidades de atención, falta de claridad en las consignas, estilo de aprendizaje), acordar con él señales y estrategias de autorregulación, reforzar positivamente la participación adecuada.",
            "C) Ignorarlo permanentemente para que 'se canse de llamar la atención'.",
            "D) Bajarle la nota cada vez que hable sin permiso."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Convivencia Escolar y Adecuación Curricular 2023. La gestión positiva del aula implica comprender las causas de la conducta, acordar estrategias con el estudiante y reforzar lo positivo, no aplicar sanciones punitivas."
    },
    {
        id: 87,
        categoria: "Protección Infantil",
        pregunta: "Un estudiante de 2do grado cuenta espontáneamente que 'su papá le pega con una correa' cuando lo regaña. ¿Cuál es la obligación de la maestra?",
        opciones: [
            "A) Restarle importancia porque 'es forma de criar' común.",
            "B) Registrar lo informado sin interrogar extensamente al niño, notificar de manera urgente al equipo de orientación y a la dirección para activar el protocolo de referimiento al CONANI, conforme a la Ley 136-03.",
            "C) Llamar al padre para 'conversar' sobre el tema directamente.",
            "D) Pedirle al niño que 'no le cuente a nadie más'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 (artículos 12-14, 48 sobre integridad personal). El castigo corporal es una forma de violencia contra el niño, legalmente prohibida. La notificación al CONANI es obligatoria ante revelaciones de maltrato."
    },
    {
        id: 88,
        categoria: "Planificación",
        pregunta: "La maestra de 5to grado planifica el área de Formación Integral, Humana y Religiosa. Una estudiante es de familia de distinta religión. ¿Cuál es la actuación correcta?",
        opciones: [
            "A) Exigirle participar en las mismas actividades confesionales por 'uniformidad'.",
            "B) Respetar la libertad de conciencia y culto, ofrecer alternativas pedagógicas éticas y formativas coherentes con el currículo, y dialogar con la familia para acordar la participación.",
            "C) Eximirla completamente del área durante todo el año.",
            "D) Presionar a la familia a 'aceptar' la formación del centro."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Constitución de la República, Ley 136-03 (libertad de conciencia) y Ordenanza 05-2024. La libertad religiosa es un derecho fundamental. El currículo de Formación Integral, Humana y Religiosa incluye dimensiones éticas universales compartibles."
    },
    {
        id: 89,
        categoria: "Inclusión",
        pregunta: "La maestra de 2do grado identifica que varios estudiantes presentan signos de dificultades específicas del aprendizaje. ¿Cuál es el procedimiento correcto?",
        opciones: [
            "A) Diagnosticar ella misma las dificultades y actuar conforme a su criterio.",
            "B) Documentar las observaciones sistemáticamente, referir a orientación para evaluación pedagógica, diseñar adecuaciones pertinentes en coordinación con el equipo, y comunicar a las familias.",
            "C) Esperar al siguiente año sin intervenir.",
            "D) Asumir que todos aprenden distinto y no hacer nada específico."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. La detección temprana de dificultades del aprendizaje exige documentación, referimiento a equipos especializados y coordinación interdisciplinar. El diagnóstico clínico no es competencia docente, pero sí la observación pedagógica."
    },
    {
        id: 90,
        categoria: "Evaluación",
        pregunta: "La maestra de 6to grado planifica la evaluación de egreso del Nivel Primario. ¿Cuál es el enfoque correcto?",
        opciones: [
            "A) Un único examen final extenso que decida la promoción.",
            "B) Una valoración integral basada en evidencias acumuladas del grado sobre las Competencias Fundamentales y Específicas, articulada con el proceso formativo del año.",
            "C) Solo las pruebas estandarizadas externas.",
            "D) La impresión general del docente sobre cada estudiante."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La promoción en Primaria se basa en el logro de las competencias del grado, evidenciado a lo largo del año escolar mediante múltiples fuentes, no en un único examen final."
    },
    {
        id: 91,
        categoria: "Ética",
        pregunta: "La maestra de 3er grado necesita ausentarse durante una hora para un trámite personal. Piensa dejar a sus estudiantes solos con una actividad asignada. ¿Cuál es la actuación correcta?",
        opciones: [
            "A) Dejar a los estudiantes solos con la actividad porque 'son obedientes'.",
            "B) Gestionar con el director la autorización y la cobertura de otro docente, garantizando que los estudiantes estén bajo supervisión adulta responsable en todo momento.",
            "C) Pedir a un estudiante mayor 'cuidar' el grupo mientras ella sale.",
            "D) Adelantar el recreo para 'resolver' la ausencia."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 (deber de garante) y Orden Departamental 22-2023. El docente es responsable de la integridad de los estudiantes durante la jornada escolar. Dejar a menores sin supervisión adulta constituye negligencia y vulnera su seguridad."
    },
    {
        id: 92,
        categoria: "Planificación",
        pregunta: "La maestra de 4to grado recibe el libro de texto oficial y una guía de la editorial privada. La guía propone una secuencia distinta a la del currículo. ¿Qué debe hacer?",
        opciones: [
            "A) Seguir la guía de la editorial porque 'tiene más ejercicios'.",
            "B) Priorizar el Diseño Curricular oficial, usar los materiales como recursos subordinados al currículo, y ajustar las secuencias a las competencias, indicadores y situaciones de aprendizaje pertinentes.",
            "C) Alternar una semana la guía privada y otra el currículo oficial.",
            "D) Dejar que los estudiantes escojan cuál material prefieren."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. El Diseño Curricular es el referente obligatorio. Los materiales (libros, guías) son recursos auxiliares que se subordinan a las competencias y a la planificación institucional."
    },
    {
        id: 93,
        categoria: "Alfabetización",
        pregunta: "En 2do grado, la maestra observa que Mario escribe textos con ideas interesantes pero con múltiples errores ortográficos. ¿Cuál es la estrategia correcta?",
        opciones: [
            "A) Bajar la nota por cada error y hacerle repetir el texto.",
            "B) Valorar positivamente la producción de sentido, trabajar progresivamente aspectos ortográficos según el nivel del grado, y fortalecer la revisión como parte del proceso de escritura.",
            "C) Ignorar los errores y no trabajar ortografía en 2do grado.",
            "D) Exigir ortografía perfecta antes de permitirle escribir textos nuevos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. La ortografía se enseña progresivamente según los aspectos propios del grado. El reconocimiento de la producción de sentido y el trabajo sistemático de revisión son estrategias formativas."
    },
    {
        id: 94,
        categoria: "Gestión de Aula",
        pregunta: "En 5to grado, la maestra implementa el trabajo cooperativo. Algunos estudiantes se quejan de que 'otros no trabajan y aprovechan'. ¿Qué debe hacer?",
        opciones: [
            "A) Eliminar el trabajo cooperativo y volver solo al trabajo individual.",
            "B) Estructurar el trabajo cooperativo con roles definidos, responsabilidad individual dentro del grupo, evaluación combinada (grupal e individual) y autoevaluación del equipo.",
            "C) Calificar solo al 'líder' del grupo que asume todo el trabajo.",
            "D) Asignar el mismo grupo todo el año sin rotación."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. El trabajo cooperativo efectivo requiere estructura (roles, interdependencia positiva, responsabilidad individual) y no es simple agrupamiento. La formación en competencias ciudadanas pasa por estas prácticas."
    },
    {
        id: 95,
        categoria: "Inclusión",
        pregunta: "En 3er grado, un estudiante con hipoacusia (pérdida auditiva) usa audífonos. La maestra habla dándole la espalda mientras escribe en el pizarrón. El estudiante pierde el hilo. ¿Qué debe corregir?",
        opciones: [
            "A) Culpar al estudiante por 'no prestar atención'.",
            "B) Ajustar su práctica docente: hablar de frente al estudiante, asegurarse de que su rostro sea visible, apoyar con recursos visuales, ubicarlo estratégicamente, y verificar comprensión frecuentemente.",
            "C) Subir el volumen de voz para gritarle lo que dice.",
            "D) Asumir que 'con audífonos ya está resuelto' sin hacer ajustes."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. Las adecuaciones de acceso para estudiantes con hipoacusia incluyen visibilidad del rostro del docente, apoyos visuales y ubicación estratégica. Los audífonos no sustituyen los ajustes pedagógicos."
    },
    {
        id: 96,
        categoria: "Convivencia",
        pregunta: "En 4to grado, la maestra planifica el trabajo con emociones como parte del desarrollo socioemocional. ¿Cuál es el enfoque correcto?",
        opciones: [
            "A) Hablar de emociones solo cuando surge un conflicto puntual.",
            "B) Integrar de manera sistemática la educación socioemocional en rutinas de aula (rondas de emociones, diario emocional, regulación, resolución de conflictos), articulada con competencias personales y sociales del currículo.",
            "C) Asumir que 'las emociones se aprenden en casa' y no trabajarlas en la escuela.",
            "D) Pedir a los estudiantes que 'guarden' sus emociones durante la clase."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023 (dimensión socioemocional) y Manual de Convivencia. La educación socioemocional es transversal, sistemática y articulada con competencias personales y sociales, no reactiva ni opcional."
    },
    {
        id: 97,
        categoria: "Evaluación",
        pregunta: "La maestra de 1er grado reporta el primer indicador del año. Dos estudiantes han sido ausentistas. ¿Qué debe hacer la maestra respecto a sus indicadores?",
        opciones: [
            "A) Colocar 'I' automáticamente porque 'no asistieron'.",
            "B) Reportar con las evidencias disponibles, registrar la situación de ausentismo, coordinar con orientación y la familia la búsqueda de causas, y articular un plan de acompañamiento y recuperación pedagógica.",
            "C) Inventar indicadores basándose en el comportamiento del año anterior.",
            "D) No reportar nada y dejar los campos en blanco."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023 y Ley 136-03 (derecho a la educación). El ausentismo escolar requiere intervención institucional. Los indicadores se reportan con evidencias disponibles, y la articulación con orientación y familia es obligatoria."
    },
    {
        id: 98,
        categoria: "Planificación",
        pregunta: "La maestra de 6to grado planifica una unidad sobre 'Ecosistemas dominicanos' en Ciencias de la Naturaleza. ¿Cuál es el recurso didáctico más coherente con el enfoque por competencias?",
        opciones: [
            "A) Clases magistrales con la maestra dictando los conceptos.",
            "B) Integración de recursos diversos (salida al entorno local, videos, experimentos sencillos, fuentes escritas, expertos locales), problematización y producción final auténtica.",
            "C) Únicamente el libro de texto y un cuestionario al final.",
            "D) Un documental extenso sin actividades de articulación."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. La enseñanza de las Ciencias requiere recursos diversos y experiencias directas con el entorno, articulando saberes formales con la realidad inmediata del estudiante."
    },
    {
        id: 99,
        categoria: "Alfabetización",
        pregunta: "En 2do grado, la maestra trabaja la conciencia fonológica. ¿Cuál es el propósito y enfoque correcto?",
        opciones: [
            "A) Solo hacer planas de sílabas aisladas.",
            "B) Realizar actividades lúdicas y sistemáticas (rimas, segmentación, identificación de sonidos iniciales/finales, juegos orales) integradas con el trabajo sobre el sistema de escritura y textos significativos.",
            "C) Enseñar el abecedario de memoria en orden.",
            "D) Ignorar la conciencia fonológica porque 'no es importante' en 2do grado."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. La conciencia fonológica es un componente clave de la alfabetización que se trabaja mediante actividades lúdicas integradas con la reflexión sobre el sistema de escritura y el trabajo con textos."
    },
    {
        id: 100,
        categoria: "Ética",
        pregunta: "La maestra de 5to grado observa a un colega fumando dentro del centro educativo en presencia de estudiantes. ¿Cuál es la actuación correcta?",
        opciones: [
            "A) Ignorar la situación porque 'no es mi asunto'.",
            "B) Notificar institucionalmente la situación al director, pues el centro es un espacio libre de humo y el docente es modelo de conducta para los estudiantes.",
            "C) Grabar al colega para exponerlo en redes sociales.",
            "D) Confrontarlo públicamente delante de los estudiantes."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 48-00 (sobre control del tabaco), Orden Departamental 22-2023 y Manual de Convivencia. Los centros educativos son espacios libres de humo. El docente es modelo de comportamiento. La canalización institucional es la vía correcta."
    },

    // ========================================================================
    // BLOQUE 6 (101-140): Casos de mayor complejidad
    // ========================================================================
    {
        id: 101,
        categoria: "Gestión de Aula",
        pregunta: "La maestra de 1er grado tiene 42 estudiantes (grupo grande). Un colega le dice que 'con tantos niños no se puede individualizar'. ¿Cuál es la actuación correcta?",
        opciones: [
            "A) Aceptar la idea del colega y dar clases magistrales uniformes.",
            "B) Organizar el grupo mediante estrategias que faciliten la atención diferenciada: estaciones de trabajo, pares tutores, grupos rotativos, apoyos visuales, observación sistemática registrada.",
            "C) Solicitar la reducción inmediata del grupo como única solución.",
            "D) Enfocarse solo en los 10 estudiantes 'más avanzados' y dejar a los demás."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023 y Ordenanza 05-2024. La atención a la diversidad es posible aun en grupos grandes mediante organización didáctica estratégica. La gestión docente debe buscar alternativas, no justificaciones."
    },
    {
        id: 102,
        categoria: "Evaluación",
        pregunta: "La maestra de 4to grado diseña un instrumento de observación sistemática. ¿Qué característica debe tener para ser un instrumento válido de evaluación?",
        opciones: [
            "A) Ser una lista improvisada de comportamientos generales.",
            "B) Ser una guía con indicadores específicos, observables y articulados con las competencias del grado, que registre evidencias durante situaciones de aprendizaje reales.",
            "C) Solo registrar aspectos de comportamiento disciplinario.",
            "D) Ser una encuesta de opinión a los estudiantes sobre sí mismos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. Los instrumentos de observación sistemática son válidos cuando tienen indicadores específicos, observables y articulados con las competencias, y se aplican en situaciones auténticas de aprendizaje."
    },
    {
        id: 103,
        categoria: "Inclusión",
        pregunta: "En 6to grado, un estudiante con parálisis cerebral (funcional) requiere apoyo de un asistente. El asistente no asiste un día. ¿Qué debe hacer la maestra?",
        opciones: [
            "A) Negar el acceso del estudiante al aula ese día.",
            "B) Garantizar la participación del estudiante activando apoyos alternativos del centro, adecuando las actividades, y notificando formalmente la ausencia del asistente para buscar soluciones sostenibles.",
            "C) Sentarlo en un rincón sin actividades.",
            "D) Asignar a otro estudiante del aula como 'ayudante' permanente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024 y Ley 136-03. El derecho a la educación no puede suspenderse por la ausencia de apoyos previstos. El centro debe garantizar alternativas, adecuaciones y articular soluciones institucionales."
    },
    {
        id: 104,
        categoria: "Alfabetización",
        pregunta: "En 1er grado, la maestra planifica el aprendizaje del nombre propio. ¿Cuál es la secuencia didáctica correcta?",
        opciones: [
            "A) Escribir todos los nombres en el pizarrón y pedir que los copien.",
            "B) Construir progresivamente: identificar el nombre propio entre otros, reconocer su letra inicial, compararlo con otros nombres, analizar cantidad y orden de letras, y usarlo en múltiples situaciones significativas.",
            "C) Enseñar el nombre solo si los estudiantes preguntan.",
            "D) Posponer el trabajo con el nombre hasta que sepan todas las letras."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. El trabajo con el nombre propio es progresivo y multidimensional, usando el nombre como objeto de reflexión y como herramienta de identidad en contextos significativos."
    },
    {
        id: 105,
        categoria: "Ética",
        pregunta: "La maestra de 3er grado escucha a una colega expresar prejuicios raciales hacia estudiantes de su grupo. ¿Cuál es la actuación ética correcta?",
        opciones: [
            "A) Asentir para no generar conflicto con la colega.",
            "B) Manifestar su desacuerdo con respeto pero con firmeza, y notificar institucionalmente los comentarios si se reiteran o afectan la relación pedagógica con los estudiantes, conforme al principio de no discriminación.",
            "C) Compartir los comentarios con los padres del grupo.",
            "D) Ignorar los comentarios por 'respeto' a la colega."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023, Ley 136-03 (principio de no discriminación) y Constitución. El docente debe posicionarse éticamente frente a expresiones discriminatorias. La complicidad silenciosa es una forma de validación."
    },
    {
        id: 106,
        categoria: "Planificación",
        pregunta: "La maestra de 5to grado integra el uso de un huerto escolar en Ciencias de la Naturaleza. ¿Cuál es el enfoque correcto?",
        opciones: [
            "A) Usar el huerto solo como actividad recreativa sin articulación curricular.",
            "B) Integrar el huerto como contexto auténtico de aprendizaje que articula Ciencias de la Naturaleza, Matemática (mediciones), Lengua (registro), Sociales (alimentación) y desarrollo socioemocional, con indicadores claros.",
            "C) Asignar el huerto solo a los estudiantes 'con mal rendimiento' como 'ocupación'.",
            "D) Limitar el trabajo del huerto a los recreos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. Los espacios como el huerto escolar son contextos de aprendizaje integrado que articulan múltiples competencias y áreas curriculares de forma significativa."
    },
    {
        id: 107,
        categoria: "Convivencia",
        pregunta: "La maestra de 2do grado nota que un estudiante menciona repetidamente escenas violentas de un videojuego en sus dibujos y conversaciones. ¿Cuál es la actuación correcta?",
        opciones: [
            "A) Confiscar los dibujos y regañar al estudiante.",
            "B) Registrar las observaciones, conversar con la familia sobre el acceso a contenidos no adecuados para la edad, coordinar con orientación y trabajar con el grupo sobre uso responsable de medios.",
            "C) Exhibir los dibujos en el aula como 'ejemplo' de lo que no se debe hacer.",
            "D) Asumir que es 'normal' en niños y no intervenir."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 (protección ante contenidos inadecuados) y Manual de Convivencia. La exposición a contenidos no apropiados para la edad afecta el desarrollo. La articulación familia-escuela es clave para la protección integral."
    },
    {
        id: 108,
        categoria: "Evaluación",
        pregunta: "La maestra de 6to grado aplica una evaluación formativa intermedia. Descubre que los estudiantes comprendieron parcialmente un contenido clave. ¿Cuál es el uso correcto de esa información?",
        opciones: [
            "A) Registrar las calificaciones y continuar con el siguiente contenido.",
            "B) Rediseñar la enseñanza con nuevas estrategias, ofrecer retroalimentación específica, trabajar los conceptos débiles desde otro ángulo, y verificar nuevamente la comprensión.",
            "C) Enviar el contenido como tarea para la casa.",
            "D) Colocar 'I' a quienes no lo entendieron y avanzar."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La función de la evaluación formativa es informar la enseñanza, no calificar. Cuando detecta vacíos, el docente reflexiona sobre su práctica y rediseña estrategias. Esta es una clave discursiva del ERP."
    },
    {
        id: 109,
        categoria: "Inclusión",
        pregunta: "En 4to grado, una estudiante transgénero solicita ser llamada por su nombre sentido. ¿Cuál es la actuación correcta de la maestra?",
        opciones: [
            "A) Negar el uso del nombre sentido por 'no estar en el registro oficial'.",
            "B) Acoger con respeto la identidad de la estudiante, coordinar con orientación y la familia, garantizar un ambiente libre de discriminación y manejar la situación con los protocolos correspondientes.",
            "C) Llamar la atención públicamente a la estudiante por 'generar problemas'.",
            "D) Compartir la situación con todos los padres del curso."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 (principio de no discriminación e interés superior del niño), Ordenanza 05-2024. La dignidad e identidad de cada niño o niña merecen respeto. La coordinación con orientación y familia es clave para el abordaje pedagógico adecuado."
    },
    {
        id: 110,
        categoria: "Protección Infantil",
        pregunta: "Durante una revisión de mochilas por seguridad, la maestra de 6to grado encuentra un arma blanca en la mochila de un estudiante. ¿Cuál es la actuación correcta?",
        opciones: [
            "A) Confiscar el objeto y devolverlo al final del día sin reportar.",
            "B) Mantener la calma, poner a resguardo el objeto y al estudiante, notificar inmediatamente al director para activar el protocolo de seguridad escolar, contactar a la familia y a las instancias pertinentes.",
            "C) Exhibir el objeto al grupo como advertencia.",
            "D) Expulsar inmediatamente al estudiante sin agotar el proceso."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Convivencia Escolar y Ley 136-03. Las situaciones que ponen en riesgo la integridad de la comunidad escolar exigen activación inmediata de protocolos institucionales, preservando la seguridad y el debido proceso."
    },
    {
        id: 111,
        categoria: "Planificación",
        pregunta: "La maestra de 3er grado planifica la integración de la competencia 'Ética y Ciudadana' transversalmente. ¿Cuál es el enfoque correcto?",
        opciones: [
            "A) Trabajar Ética y Ciudadana solo en Formación Humana.",
            "B) Integrarla transversalmente en todas las áreas mediante situaciones de aprendizaje que impliquen decisiones éticas, participación democrática, respeto a la diversidad y análisis crítico.",
            "C) Dedicar una hora aislada a la semana a 'valores' sin articulación.",
            "D) Asumir que 'se aprende en casa' y no trabajarla en la escuela."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. La competencia Ética y Ciudadana es transversal a todas las áreas. Se desarrolla en situaciones reales de toma de decisiones, participación y análisis crítico, no como contenido aislado."
    },
    {
        id: 112,
        categoria: "Alfabetización",
        pregunta: "En 1er grado, la maestra realiza dictados como evaluación semanal. Una estudiante con hipótesis silábica obtiene siempre 'I'. ¿Cuál es el error pedagógico de la maestra?",
        opciones: [
            "A) No hay error, el dictado es una herramienta objetiva.",
            "B) Usar un instrumento que no es coherente con el nivel de construcción de la estudiante y que no evidencia sus avances; debe diversificar instrumentos, valorar el proceso y trabajar desde el nivel actual.",
            "C) Debe hacer dictados más fáciles.",
            "D) Debe eximir a la estudiante de los dictados."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023 y Ordenanza 04-2023. La evaluación debe ser coherente con el enfoque de enseñanza y el nivel de construcción del estudiante. El dictado como instrumento único invisibiliza los avances reales."
    },
    {
        id: 113,
        categoria: "Gestión de Aula",
        pregunta: "La maestra de 5to grado inicia el año con un grupo que 'tiene mala fama'. ¿Cuál es el enfoque correcto?",
        opciones: [
            "A) Imponer disciplina estricta desde el primer día para 'dominarlos'.",
            "B) Conocer al grupo sin prejuicios, construir vínculos de confianza, establecer participativamente los acuerdos de convivencia, y generar experiencias pedagógicas significativas que reconstruyan la identidad del grupo.",
            "C) Pedir al director que la cambien de grupo.",
            "D) Tratarlos con distancia y frialdad para 'mantener el control'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Convivencia Escolar y Adecuación Curricular 2023. Las etiquetas estigmatizan y reproducen dinámicas negativas. La construcción positiva del grupo desde vínculos, acuerdos y experiencias significativas transforma las dinámicas."
    },
    {
        id: 114,
        categoria: "Evaluación",
        pregunta: "La maestra de 2do grado debe justificar ante el distrito educativo los indicadores asignados. ¿Qué documentación debe presentar?",
        opciones: [
            "A) Solo los exámenes finales de cada trimestre.",
            "B) El Registro de Grado completo con evidencias diversas (producciones, registros de observación, rúbricas, portafolios) que sustenten los indicadores de logro por competencia.",
            "C) Las calificaciones numéricas promediadas.",
            "D) Una lista con apreciaciones generales sin evidencias."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023 y Reglamentos institucionales. Los indicadores asignados deben sustentarse en evidencias sistemáticas documentadas en el Registro de Grado y otros instrumentos. La trazabilidad es una exigencia profesional y ética."
    },
    {
        id: 115,
        categoria: "Ética",
        pregunta: "La maestra de 6to grado presta su cédula a un amigo para un trámite. El amigo la usa de forma indebida y aparece un reporte negativo. ¿Cuál es la lección profesional?",
        opciones: [
            "A) Negar toda responsabilidad ya que 'no fue ella' quien actuó.",
            "B) Asumir que la documentación personal es intransferible, presentar las explicaciones pertinentes ante las instancias, y mantener la debida diligencia en el uso de documentos oficiales.",
            "C) Culpar al amigo ante las autoridades sin admitir haber cedido la cédula.",
            "D) Ignorar el reporte y esperar que 'pase solo'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. La debida diligencia en el uso de documentos oficiales personales es parte de la ética del servidor público. La imprudencia documental tiene consecuencias profesionales y legales."
    },
    {
        id: 116,
        categoria: "Planificación",
        pregunta: "La maestra de 4to grado enseña Matemática. Debe seleccionar la estrategia para enseñar multiplicación. ¿Cuál es la secuencia correcta?",
        opciones: [
            "A) Hacer memorizar las tablas del 1 al 10 antes de trabajar el sentido.",
            "B) Construir el sentido de la multiplicación a partir de situaciones problema (agrupaciones, arreglos rectangulares, proporcionalidad), usar material concreto, progresar a representaciones y luego al algoritmo y memorización contextualizada.",
            "C) Dictar las tablas diariamente durante un mes.",
            "D) Enseñar el algoritmo escrito sin trabajar el sentido."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. La construcción del sentido de las operaciones precede al algoritmo. La memorización de tablas tiene sentido cuando el estudiante ha construido el concepto de multiplicación a partir de situaciones significativas."
    },
    {
        id: 117,
        categoria: "Inclusión",
        pregunta: "En 5to grado, un estudiante proveniente del campo tiene poco contacto con la tecnología. Le asignan una tarea que requiere investigación en internet. ¿Qué debe hacer la maestra?",
        opciones: [
            "A) Bajarle la nota por no cumplir con la tarea.",
            "B) Diversificar las formas de investigación (libros, revistas, entrevistas, fuentes locales), garantizar acceso a recursos en el centro cuando sea posible, y no dar por supuesto el acceso tecnológico domiciliario.",
            "C) Eximirlo de toda investigación hasta que 'aprenda tecnología'.",
            "D) Asignarle un compañero que 'haga la tarea por él'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024 y Ley 136-03 (principio de equidad). Dar por supuesto el acceso tecnológico domiciliario reproduce inequidades. La diversificación de fuentes y el apoyo desde el centro son estrategias inclusivas."
    },
    {
        id: 118,
        categoria: "Convivencia",
        pregunta: "En 3er grado, tras un conflicto entre dos estudiantes, la maestra implementa prácticas restaurativas. ¿Cuál es el propósito de estas prácticas?",
        opciones: [
            "A) Determinar culpables y aplicar sanciones.",
            "B) Restaurar los vínculos afectados, reconocer el daño, elaborar acuerdos de reparación, fortalecer la empatía y reconstruir la convivencia mediante el diálogo y la responsabilidad asumida.",
            "C) Humillar a los involucrados para que 'no repitan'.",
            "D) Ignorar el conflicto y 'dar vuelta a la página'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Convivencia Escolar. Las prácticas restaurativas priorizan la reparación del vínculo sobre el castigo, el reconocimiento del daño, la responsabilidad asumida y la reconstrucción de la convivencia desde la empatía."
    },
    {
        id: 119,
        categoria: "Alfabetización",
        pregunta: "En 2do grado, la maestra realiza un proyecto de producción de cuentos de autoría propia. ¿Cuál es la secuencia didáctica correcta?",
        opciones: [
            "A) Pedirles que escriban un cuento largo sin preparación previa.",
            "B) Trabajar lectura modelo de cuentos del género, analizar sus características, planificar la escritura, textualizar, revisar, editar y publicar/socializar, valorando cada etapa.",
            "C) Dictarles un cuento modelo para que lo copien.",
            "D) Pedirles que inventen un cuento oral sin escribirlo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023 y Adecuación Curricular 2023. La producción textual es un proceso que incluye planificación, textualización, revisión, edición y socialización, precedido por el trabajo con modelos del género."
    },
    {
        id: 120,
        categoria: "Evaluación",
        pregunta: "La maestra de 6to grado integra la autoevaluación como parte del proceso. Un estudiante se autoevalúa con 'L' mientras su desempeño evidencia 'EP'. ¿Cómo debe proceder?",
        opciones: [
            "A) Aceptar la autoevaluación sin diálogo para 'respetar la opinión del estudiante'.",
            "B) Dialogar con el estudiante sobre los criterios, mostrar evidencias concretas de su trabajo, acompañarlo en reconocer sus fortalezas y aspectos a mejorar, construyendo juntos una valoración fundamentada.",
            "C) Descalificar la autoevaluación y decirle que 'no sabe evaluarse'.",
            "D) Asignar la nota que ella considera y desestimar la del estudiante."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La autoevaluación es un proceso formativo que se acompaña docentemente. Las discrepancias son oportunidades de diálogo evaluativo y desarrollo de metacognición, no de descalificación."
    },

    // ========================================================================
    // BLOQUE 7 (121-160): Casos variados
    // ========================================================================
    {
        id: 121,
        categoria: "Planificación",
        pregunta: "La maestra de 1er grado planifica el inicio del año escolar. Muchos estudiantes lloran por la separación. ¿Cuál es el enfoque correcto de esas primeras semanas?",
        opciones: [
            "A) Exigir que 'se comporten como niños grandes' y no lloren.",
            "B) Diseñar un período de adaptación con rutinas claras, actividades lúdicas, acogida afectiva, comunicación con las familias, y progresiva introducción de la cultura escolar.",
            "C) Iniciar con evaluaciones diagnósticas escritas para 'saber qué saben'.",
            "D) Mantener a los estudiantes en silencio absoluto para 'acostumbrarlos'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023 y Ordenanza 01-2023. El período de adaptación en 1er grado es fundamental. La acogida emocional, las rutinas y la articulación familia-escuela son claves para una transición saludable."
    },
    {
        id: 122,
        categoria: "Ética",
        pregunta: "La maestra de 5to grado descubre que un colega copia las planificaciones de otros docentes sin adaptarlas al contexto de su grupo. ¿Cuál es la actuación correcta?",
        opciones: [
            "A) Imitar la práctica del colega para 'ahorrar tiempo'.",
            "B) Mantener su compromiso ético con la planificación contextualizada y, si corresponde, apoyar al colega compartiendo estrategias profesionales de planificación.",
            "C) Reportar al colega públicamente ante los padres.",
            "D) Ignorar la situación y no involucrarse."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023 y Adecuación Curricular 2023. La planificación es una responsabilidad profesional contextualizada. La ética profesional incluye el apoyo colegiado y el modelaje de buenas prácticas."
    },
    {
        id: 123,
        categoria: "Inclusión",
        pregunta: "En 4to grado, la maestra debe adecuar su aula para un estudiante con discapacidad visual (ceguera total). ¿Qué adecuaciones corresponden?",
        opciones: [
            "A) Ninguna adecuación específica, solo 'paciencia' con el estudiante.",
            "B) Adecuaciones de acceso: material en braille o digital adaptado, descripción verbal de imágenes, orientación espacial del aula, apoyo de tiflotecnología, coordinación con equipos especializados del distrito.",
            "C) Eximirlo de todas las actividades visuales.",
            "D) Enviarlo a un centro de educación especial."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. Los estudiantes con discapacidad visual requieren adecuaciones de acceso específicas (materiales adaptados, descripción verbal, tecnologías de apoyo) y coordinación con equipos especializados."
    },
    {
        id: 124,
        categoria: "Gestión de Aula",
        pregunta: "La maestra de 2do grado observa que una estudiante siempre llega tarde al aula. ¿Cuál es la actuación correcta?",
        opciones: [
            "A) Cerrar la puerta y no dejarla entrar cuando llegue tarde.",
            "B) Indagar las causas de la tardanza (posibles dificultades familiares, logísticas), conversar respetuosamente con la familia, y buscar juntos soluciones sin perjudicar a la niña.",
            "C) Avergonzarla públicamente cada vez que llegue tarde.",
            "D) Bajarle la nota por las tardanzas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 (derecho a la educación) y Manual de Convivencia. Las tardanzas pueden tener múltiples causas. La indagación respetuosa y la búsqueda de soluciones con la familia son la vía correcta."
    },
    {
        id: 125,
        categoria: "Evaluación",
        pregunta: "La maestra de 3er grado debe valorar la competencia 'Desarrollo Personal y Espiritual'. ¿Cuál es el enfoque correcto?",
        opciones: [
            "A) Aplicar un examen escrito sobre valores.",
            "B) Valorar mediante observación de actitudes, comportamientos, producciones reflexivas, autoevaluación y coevaluación en situaciones auténticas del aula y la comunidad.",
            "C) No evaluar esta competencia porque 'no es académica'.",
            "D) Asignar 'L' a todos sin evidencia."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023 y Adecuación Curricular 2023. Las competencias personales y espirituales se evidencian en situaciones auténticas mediante observación, reflexión y autoevaluación acompañada."
    },
    {
        id: 126,
        categoria: "Alfabetización",
        pregunta: "En 1er grado, la maestra trabaja la lectura en voz alta del docente como práctica diaria. ¿Cuál es el propósito central de esta práctica?",
        opciones: [
            "A) Hacer que los niños copien las palabras que escuchan.",
            "B) Modelar la lectura fluida y expresiva, introducir a los estudiantes en la cultura letrada, ampliar su vocabulario, enriquecer su imaginario y formar oyentes activos.",
            "C) Ocupar el tiempo cuando no hay actividad planificada.",
            "D) Evaluar la atención de los estudiantes."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. La lectura en voz alta del docente es una práctica didáctica clave de la alfabetización inicial: modela, enriquece, forma comunidad lectora e introduce en la cultura escrita."
    },
    {
        id: 127,
        categoria: "Convivencia",
        pregunta: "En 6to grado, durante la clase, un estudiante imita a la maestra burlonamente mientras ella enseña. El grupo se ríe. ¿Cuál es la reacción profesional correcta?",
        opciones: [
            "A) Gritarle y sacarlo del aula inmediatamente.",
            "B) Mantener la calma, no reaccionar emocionalmente, retomar la clase, y al final abordar la situación con el estudiante y el grupo desde el diálogo y los acuerdos de convivencia.",
            "C) Imitarlo de vuelta para 'darle una lección'.",
            "D) Ignorar permanentemente al estudiante por el resto del año."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Convivencia Escolar y Orden Departamental 22-2023. La regulación emocional docente es parte del profesionalismo. El abordaje dialogado posterior, desde los acuerdos de convivencia, es más eficaz que la reacción inmediata."
    },
    {
        id: 128,
        categoria: "Planificación",
        pregunta: "La maestra de 4to grado planifica el trabajo con el área de Educación Artística integrada. ¿Cuál es el enfoque correcto?",
        opciones: [
            "A) Usar el área solo como 'relleno' para cuando sobre tiempo.",
            "B) Planificar el área con rigor didáctico, articulada con otras áreas cuando corresponda, desarrollando sus competencias específicas (expresión, apreciación, creación) con indicadores claros.",
            "C) Dejar que los estudiantes 'hagan lo que quieran' sin orientación.",
            "D) Sustituir Educación Artística por más horas de Matemática y Lengua."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. La Educación Artística es un área curricular con competencias propias y aporte fundamental al desarrollo integral. Merece planificación rigurosa y valoración profesional."
    },
    {
        id: 129,
        categoria: "Protección Infantil",
        pregunta: "La maestra de 2do grado recibe a un estudiante con claros signos de fatiga extrema que dice 'dormirse en clase'. Al indagar, el niño menciona que 'trabaja en la noche' con sus padres. ¿Qué corresponde hacer?",
        opciones: [
            "A) Permitirle dormir en el aula para 'recuperarse'.",
            "B) Notificar inmediatamente al equipo de orientación y dirección para activar el protocolo ante sospecha de trabajo infantil, conforme a la Ley 136-03 y los convenios internacionales ratificados por el país.",
            "C) Preguntarle más detalles al niño para 'comprender mejor'.",
            "D) Bajarle la nota por su falta de atención."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 (artículos sobre trabajo infantil) y Convenios OIT ratificados. El trabajo infantil que afecta la educación y desarrollo del niño es una forma de vulneración que exige notificación institucional y referimiento al CONANI."
    },
    {
        id: 130,
        categoria: "Inclusión",
        pregunta: "En 5to grado, una estudiante tiene diagnóstico reciente de cáncer infantil y deberá recibir tratamientos que la ausentarán periódicamente. ¿Cuál es la actuación correcta?",
        opciones: [
            "A) Dar por perdido el año académico de la estudiante.",
            "B) Coordinar con la familia y el equipo médico un plan de continuidad pedagógica (atención domiciliaria o hospitalaria cuando aplique), adecuar indicadores y tiempos, garantizar la inclusión social y emocional del grupo.",
            "C) Dejar que la estudiante 'se recupere' y repita el año.",
            "D) Enviarle tareas normales sin ajuste alguno."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024 y Ley 136-03. Los estudiantes con enfermedades crónicas tienen derecho a la continuidad educativa mediante modalidades alternativas (pedagogía hospitalaria, domiciliaria) cuando aplique, y adecuaciones correspondientes."
    },
    {
        id: 131,
        categoria: "Evaluación",
        pregunta: "En 3er grado, la maestra diseña una evaluación oral individual. Un estudiante con ansiedad social presenta bloqueo. ¿Cómo debe adecuar?",
        opciones: [
            "A) Exigir la evaluación oral 'como a todos' para no 'consentirlo'.",
            "B) Ofrecer formatos alternativos (evaluación oral en pequeño grupo, grabación audio/video en su casa, evaluación escrita equivalente) que permitan evidenciar el aprendizaje sin ser bloqueado por la ansiedad.",
            "C) Eximirlo totalmente de la evaluación.",
            "D) Colocarle 'I' por no haber respondido oralmente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024 y Ordenanza 04-2023. Los formatos evaluativos deben diversificarse para eliminar barreras. La evaluación debe permitir evidenciar lo aprendido, no ser una barrera adicional."
    },
    {
        id: 132,
        categoria: "Ética",
        pregunta: "La maestra de 6to grado recibe un regalo de fin de año de sus estudiantes (una colecta voluntaria). ¿Cuál es la actuación ética correcta?",
        opciones: [
            "A) Aceptar sin más el regalo, independientemente de su valor.",
            "B) Valorar el afecto del grupo pero verificar que se trate de un gesto simbólico y colectivo, sin presiones económicas a las familias, y actuar conforme a las normas institucionales sobre obsequios.",
            "C) Exigir que todos los padres aporten la misma cantidad.",
            "D) Rechazar cualquier gesto de afecto por 'profesionalismo extremo'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. Los gestos simbólicos y colectivos pueden ser aceptables. Sin embargo, el docente debe velar porque no haya presiones económicas a las familias ni conflictos con la normativa institucional."
    },
    {
        id: 133,
        categoria: "Planificación",
        pregunta: "La maestra de 1er grado planifica las transiciones entre actividades. ¿Cuál es la importancia de este aspecto?",
        opciones: [
            "A) Ninguna, las transiciones no son parte de la planificación.",
            "B) Las transiciones bien planificadas optimizan el tiempo didáctico, reducen el caos, permiten la autorregulación de los estudiantes y mantienen la continuidad pedagógica.",
            "C) Sólo deben ser consideradas si 'el grupo es indisciplinado'.",
            "D) Las transiciones deben ser rígidas y en silencio absoluto."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. Las transiciones son momentos pedagógicos que requieren intencionalidad, estructura y cuidado. Optimizan tiempo y favorecen autorregulación."
    },
    {
        id: 134,
        categoria: "Alfabetización",
        pregunta: "En 2do grado, la maestra trabaja la diversidad textual. Un estudiante pregunta qué es 'una noticia'. ¿Cuál es la estrategia didáctica correcta?",
        opciones: [
            "A) Dictar una definición para que la memorice.",
            "B) Presentar noticias auténticas, analizar su estructura y función social, proponer la producción propia de una noticia sobre un evento real del aula o la comunidad.",
            "C) Pedirle que lea el diccionario.",
            "D) Ignorar la pregunta y continuar con la actividad del libro."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. La enseñanza de los tipos textuales parte del contacto con textos auténticos, el análisis funcional y la producción propia en contextos significativos."
    },
    {
        id: 135,
        categoria: "Gestión de Aula",
        pregunta: "La maestra de 5to grado observa que en los trabajos grupales, un estudiante siempre asume todo el trabajo y otros se aprovechan. ¿Cuál es la estrategia correcta?",
        opciones: [
            "A) Calificar a todos por igual ya que 'el trabajo es grupal'.",
            "B) Estructurar el trabajo con roles específicos y rotativos, responsabilidad individual evidenciable, coevaluación entre pares y valoración combinada (grupal e individual).",
            "C) Eliminar los trabajos grupales por completo.",
            "D) Calificar solo al estudiante trabajador y castigar a los demás."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. El trabajo cooperativo efectivo requiere estructura con roles, responsabilidad individual y evaluación combinada. Es un aprendizaje que se enseña intencionalmente."
    },
    {
        id: 136,
        categoria: "Inclusión",
        pregunta: "En 4to grado, un estudiante afrodescendiente recibe comentarios discriminatorios sobre su cabello. ¿Qué debe hacer la maestra?",
        opciones: [
            "A) Decirle al estudiante que 'no haga caso' para no 'darle importancia'.",
            "B) Abordar explícitamente la situación desde el principio de no discriminación, trabajar la diversidad étnica y cultural en el aula, intervenir con los estudiantes emisores de comentarios, y activar protocolos de convivencia si se reitera.",
            "C) Pedirle al estudiante que 'se peine diferente' para evitar comentarios.",
            "D) Ignorar la situación porque 'los niños se molestan entre sí'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 (no discriminación), Constitución y Ordenanza 05-2024. El racismo es una forma de discriminación que requiere intervención pedagógica explícita, no minimización ni responsabilización de la víctima."
    },
    {
        id: 137,
        categoria: "Evaluación",
        pregunta: "La maestra de 6to grado planifica la devolución individual de resultados a cada estudiante. ¿Cuál es el enfoque correcto?",
        opciones: [
            "A) Entregar la nota en privado sin comentarios adicionales.",
            "B) Dialogar individualmente sobre el proceso, reconocer avances, identificar conjuntamente aspectos a mejorar, acordar acciones específicas, y promover la autogestión del aprendizaje.",
            "C) Leer las notas en público para que 'todos sepan'.",
            "D) Evitar la devolución para no 'perder tiempo'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La devolución formativa individualizada es una práctica evaluativa de alto impacto. Articula autoconocimiento, metacognición y autorregulación del aprendizaje."
    },
    {
        id: 138,
        categoria: "Convivencia",
        pregunta: "En 3er grado, la maestra crea un 'rincón de la calma' para que los estudiantes regulen emociones difíciles. ¿Cuál es el sentido pedagógico?",
        opciones: [
            "A) Un lugar de castigo donde enviar a los estudiantes 'revoltosos'.",
            "B) Un espacio intencionalmente diseñado para la autorregulación emocional, accesible a los estudiantes cuando lo necesitan, con herramientas (respiración, mandalas, libros, cojín) que favorecen la calma y la reflexión.",
            "C) Un lugar solo para premiar a los estudiantes de buen comportamiento.",
            "D) Un espacio decorativo sin función pedagógica."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023 (dimensión socioemocional) y Manual de Convivencia. El rincón de la calma es un dispositivo pedagógico para la autorregulación, no un espacio de castigo."
    },
    {
        id: 139,
        categoria: "Planificación",
        pregunta: "La maestra de 5to grado recibe una circular del distrito sobre una jornada especial. Debe ajustar su planificación. ¿Cuál es la respuesta profesional correcta?",
        opciones: [
            "A) Desechar la jornada oficial y continuar con lo planificado.",
            "B) Integrar la jornada en la planificación mediante articulaciones pedagógicas coherentes con los contenidos en curso, ajustando tiempos y aprovechando la temática como contexto de aprendizaje.",
            "C) Suspender toda actividad regular 'solo por ese día'.",
            "D) Ignorar la circular por considerarla un 'distractor'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023 y Reglamentos institucionales. Las jornadas oficiales son oportunidades de integración curricular, no distractores. La planificación es flexible e integra estas temáticas con los aprendizajes en curso."
    },
    {
        id: 140,
        categoria: "Ética",
        pregunta: "La maestra de 1er grado descubre que en el centro hay una práctica informal de 'quedarse' con útiles escolares sobrantes de los estudiantes. ¿Cuál es la actuación ética correcta?",
        opciones: [
            "A) Sumarse a la práctica porque 'todos lo hacen'.",
            "B) Abstenerse de la práctica, notificar institucionalmente la situación si corresponde, y promover una cultura de uso correcto de los recursos de los estudiantes y del centro.",
            "C) Denunciar públicamente a las colegas ante los padres.",
            "D) Ignorar la situación para 'llevarse bien' con las colegas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. La apropiación de bienes ajenos, aún pequeños, es una falta ética. El docente debe abstenerse y promover institucionalmente una cultura de integridad."
    },

    // Archivo parcial - 140 preguntas de 400
    // Pendiente: 141-400


  // ========================================================================
    // BLOQUE 8 (141-180): Casos variados
    // ========================================================================
    {
        id: 141,
        categoria: "Planificación",
        pregunta: "La maestra de 2do grado trabaja una unidad sobre 'Los animales'. Un estudiante trae una iguana al aula. ¿Cuál es la mejor decisión pedagógica?",
        opciones: [
            "A) Pedirle que la retire porque 'no está en la planificación'.",
            "B) Aprovechar pedagógicamente el recurso vivo integrándolo como contexto auténtico de observación científica, articulando con los indicadores previstos y enriqueciendo la situación de aprendizaje.",
            "C) Permitir la iguana solo 5 minutos y luego retomar el libro.",
            "D) Llamar a los padres para que retiren al animal del centro."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. La planificación por competencias es flexible e integra los emergentes pedagógicos significativos. Un recurso vivo es una oportunidad auténtica para el aprendizaje indagativo."
    },
    {
        id: 142,
        categoria: "Evaluación",
        pregunta: "La maestra de 4to grado aplica una prueba de Ciencias Sociales. Un estudiante con dislexia no entiende las preguntas por la forma escrita. ¿Qué debe hacer?",
        opciones: [
            "A) Dejar que 'se esfuerce' sin ayuda.",
            "B) Aplicar la adecuación de acceso prevista: leerle las preguntas en voz alta, dar tiempo adicional, permitir respuestas orales si procede, manteniendo los indicadores de logro.",
            "C) Aplicarle una prueba diferente con contenidos más sencillos.",
            "D) Eximirlo de la evaluación."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024 y Ordenanza 04-2023. Las adecuaciones de acceso eliminan barreras sin modificar los indicadores. Son un derecho documentado del estudiante con dificultades específicas."
    },
    {
        id: 143,
        categoria: "Inclusión",
        pregunta: "En 5to grado, un estudiante de familia evangélica se niega a participar en una actividad escolar sobre Carnaval. ¿Qué debe hacer la maestra?",
        opciones: [
            "A) Obligarlo a participar como castigo por 'no integrarse'.",
            "B) Dialogar respetuosamente con la familia, ofrecer alternativas pedagógicas equivalentes que respeten sus convicciones y mantengan el logro de los indicadores (ej. investigación sobre el Carnaval sin participación ritual).",
            "C) Eximirlo del aprendizaje relacionado con el tema.",
            "D) Presentar su decisión ante el grupo como 'falta de integración'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Constitución (libertad de culto), Ley 136-03 y Ordenanza 05-2024. La diversidad religiosa se respeta mediante alternativas pedagógicas equivalentes, no mediante imposición ni exención total."
    },
    {
        id: 144,
        categoria: "Ética",
        pregunta: "La maestra de 6to grado detecta que un estudiante cometió plagio en un trabajo copiando de internet. ¿Cuál es la actuación pedagógicamente correcta?",
        opciones: [
            "A) Colocarle 'I' automáticamente y humillarlo ante el grupo.",
            "B) Conversar en privado con el estudiante sobre la propiedad intelectual y la honestidad académica, enseñarle a citar fuentes, ofrecer una nueva oportunidad de producción auténtica y registrar formativamente la situación.",
            "C) Informar a todos los padres del grupo sobre el caso.",
            "D) Anular todas sus calificaciones del trimestre."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023 y Manual de Convivencia. El plagio es oportunidad formativa para enseñar honestidad académica y manejo ético de la información, no ocasión de humillación pública."
    },
    {
        id: 145,
        categoria: "Alfabetización",
        pregunta: "En 1er grado, la maestra nota que varios estudiantes quieren 'escribir' pero saben que no escriben convencionalmente. ¿Qué debe hacer?",
        opciones: [
            "A) Decirles que 'todavía no pueden escribir' hasta que aprendan las letras.",
            "B) Promover la escritura espontánea con sus hipótesis actuales, legitimar sus producciones, analizar con ellos lo escrito, y diseñar intervenciones para avanzar en los niveles de construcción.",
            "C) Copiarles las palabras para que ellos las calquen.",
            "D) Postergar toda escritura hasta 2do grado."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. La escritura espontánea es una práctica fundamental desde el inicio de 1er grado. Las hipótesis de los estudiantes evidencian sus niveles de construcción y orientan la intervención."
    },
    {
        id: 146,
        categoria: "Gestión de Aula",
        pregunta: "La maestra de 3er grado nota que algunos estudiantes terminan siempre antes y otros se quedan rezagados. ¿Cuál es la estrategia correcta?",
        opciones: [
            "A) Hacer esperar a los que terminan hasta que todos terminen.",
            "B) Diseñar actividades escalonadas (tareas de ampliación para quienes terminan, andamios específicos para quienes necesitan más apoyo), respetando ritmos sin detener avances.",
            "C) Apurar a los rezagados públicamente para que 'se pongan al día'.",
            "D) Dejar salir al recreo a los que terminan primero."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023 y Ordenanza 05-2024. La atención a la diversidad incluye diferentes ritmos de aprendizaje. Las actividades escalonadas respetan esos ritmos sin detener avances ni presionar punitivamente."
    },
    {
        id: 147,
        categoria: "Convivencia",
        pregunta: "En 4to grado, dos grupos del curso se han formado y compiten agresivamente. La tensión afecta el clima. ¿Qué debe hacer la maestra?",
        opciones: [
            "A) Ignorar la situación porque 'los grupos son normales'.",
            "B) Trabajar intencionalmente la cohesión grupal mediante dinámicas, reorganización de equipos heterogéneos rotativos, proyectos que requieran colaboración entre todos, y reflexión sobre la diversidad como valor.",
            "C) Eliminar los recreos hasta que 'se comporten bien'.",
            "D) Sancionar al grupo 'más problemático'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Convivencia Escolar. La cohesión grupal se construye intencionalmente mediante experiencias compartidas y diversificación de interacciones, no mediante sanciones ni indiferencia."
    },
    {
        id: 148,
        categoria: "Protección Infantil",
        pregunta: "Durante una reunión de padres, un padre habla de forma agresiva a la maestra delante del grupo. ¿Cuál es la actuación correcta?",
        opciones: [
            "A) Responder al padre con el mismo tono para 'defenderse'.",
            "B) Mantener la calma profesional, proponer retomar la conversación en privado, si la agresividad persiste pedir apoyo a dirección y documentar formalmente el hecho para su manejo institucional.",
            "C) Llamar a la policía inmediatamente ante el grupo.",
            "D) Ceder a todas las exigencias del padre para 'evitar conflicto'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023 y Manual de Convivencia. El profesionalismo incluye manejo de situaciones difíciles con adultos. La contención, el encuadre privado y el apoyo institucional son las vías correctas."
    },
    {
        id: 149,
        categoria: "Planificación",
        pregunta: "La maestra de 5to grado recibe el listado de estudiantes el primer día. ¿Qué información debe priorizar para su planificación?",
        opciones: [
            "A) Solo las calificaciones del año anterior.",
            "B) Información integral: antecedentes pedagógicos, condiciones de salud relevantes, adecuaciones vigentes, situaciones socioemocionales conocidas, intereses y saberes previos del grupo.",
            "C) Solo los nombres de los estudiantes y nada más.",
            "D) El listado de 'estudiantes problemáticos' de años anteriores."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023 y Ordenanza 05-2024. El conocimiento integral del grupo es base de la planificación pertinente. Se incluyen dimensiones pedagógicas, de salud, socioemocionales y de intereses."
    },
    {
        id: 150,
        categoria: "Evaluación",
        pregunta: "La maestra de 2do grado debe elaborar el informe escrito a las familias al final del trimestre. ¿Cuál es la estructura adecuada?",
        opciones: [
            "A) Solo una tabla con los indicadores (L, EP, I) sin explicación.",
            "B) Un informe descriptivo por competencias que incluya fortalezas, aspectos en proceso, evidencias concretas del desempeño y recomendaciones específicas para el acompañamiento familiar.",
            "C) Un reporte de comportamiento y asistencia únicamente.",
            "D) Comparaciones con otros estudiantes del grupo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. Los informes a familias deben ser descriptivos, centrados en el estudiante, evidenciales y orientadores, promoviendo la corresponsabilidad educativa sin comparaciones."
    },
    {
        id: 151,
        categoria: "Alfabetización",
        pregunta: "En 2do grado, la maestra trabaja producción de textos. Ante la consigna, un estudiante dice 'no sé qué escribir'. ¿Cuál es la estrategia correcta?",
        opciones: [
            "A) Decirle que 'piense mejor' y esperar en silencio.",
            "B) Apoyar el proceso de planificación del texto mediante preguntas orientadoras, lluvia de ideas, modelaje del pensamiento escritor, uso de organizadores gráficos y recuperación de experiencias previas.",
            "C) Dictarle qué debe escribir.",
            "D) Darle el texto ya hecho para que lo copie."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. La planificación textual es una fase del proceso de escritura que se enseña explícitamente mediante andamios y modelaje. El bloqueo es oportunidad didáctica, no problema del estudiante."
    },
    {
        id: 152,
        categoria: "Inclusión",
        pregunta: "En 3er grado hay un estudiante con TDAH que toma medicación. Un día llega sin haberla tomado y muestra alta agitación. ¿Qué debe hacer la maestra?",
        opciones: [
            "A) Regañarlo por su agitación y bajarle la nota.",
            "B) Contactar a la familia para coordinar el manejo, aplicar las estrategias pedagógicas previstas para regular su participación, ajustar las actividades para que pueda aprender, y registrar la situación.",
            "C) Enviarlo a la dirección por 'indisciplina'.",
            "D) Aislarlo del resto del grupo hasta que 'se calme'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. Las condiciones de salud que impactan el aprendizaje requieren coordinación familia-escuela y estrategias pedagógicas específicas, no sanciones por síntomas de la condición."
    },
    {
        id: 153,
        categoria: "Ética",
        pregunta: "La maestra de 6to grado es invitada a un almuerzo pagado por una editorial que busca promover sus textos. ¿Cuál es la actuación correcta?",
        opciones: [
            "A) Aceptar la invitación porque 'es solo un almuerzo'.",
            "B) Declinar la invitación por el potencial conflicto de intereses, informar a la dirección si corresponde, y mantener las decisiones pedagógicas libres de influencias comerciales.",
            "C) Aceptar pero prometer no recomendar los textos.",
            "D) Aceptar e invitar también a otras colegas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. El conflicto de intereses incluye invitaciones que puedan condicionar decisiones profesionales. La independencia de criterio es un valor ético central del servidor docente."
    },
    {
        id: 154,
        categoria: "Planificación",
        pregunta: "La maestra de 1er grado planifica actividades lúdicas integradas. Un supervisor le dice que 'el juego no es serio en la escuela'. ¿Cuál es su respuesta profesional?",
        opciones: [
            "A) Eliminar el juego y hacer solo actividades escritas 'serias'.",
            "B) Fundamentar que el juego es una estrategia didáctica válida y central en el Nivel Primario, especialmente en los primeros grados, y presentar cómo se articula con las competencias e indicadores del currículo.",
            "C) Aceptar la crítica sin argumentos profesionales.",
            "D) Usar el juego solo en el tiempo libre."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023 y Ordenanza 01-2023. El juego es una estrategia didáctica central reconocida por el currículo, especialmente en los primeros grados del Nivel Primario, articulada con todas las competencias."
    },
    {
        id: 155,
        categoria: "Gestión de Aula",
        pregunta: "En 4to grado, varios estudiantes están cansados y distraídos después del almuerzo. ¿Cuál es la estrategia más adecuada?",
        opciones: [
            "A) Exigirles concentración máxima igual que en la primera hora.",
            "B) Diseñar actividades post-almuerzo que activen el cuerpo y la atención (dinámicas, actividades manipulativas, trabajo colaborativo), adaptando la secuencia al ritmo biológico del grupo.",
            "C) Dejarlos 'descansar' sin actividad alguna durante una hora.",
            "D) Castigarlos si se distraen."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. La planificación debe considerar los ritmos biológicos y cognitivos del grupo. Las actividades activas post-almuerzo son estrategias reconocidas de manejo pedagógico."
    },
    {
        id: 156,
        categoria: "Convivencia",
        pregunta: "En 5to grado, la maestra implementa asambleas semanales de aula. ¿Cuál es el propósito central?",
        opciones: [
            "A) Un tiempo para que la maestra dé anuncios.",
            "B) Un espacio democrático donde los estudiantes expresen ideas, analicen situaciones del aula, propongan soluciones y construyan colectivamente la convivencia, desarrollando competencias ciudadanas.",
            "C) Un tiempo para que se quejen 'unos de otros'.",
            "D) Una actividad opcional sin estructura."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023 y Manual de Convivencia. Las asambleas de aula son dispositivos pedagógicos que desarrollan competencias ciudadanas mediante la participación democrática real."
    },
    {
        id: 157,
        categoria: "Evaluación",
        pregunta: "La maestra de 3er grado quiere verificar si sus estudiantes comprendieron un texto leído. ¿Cuál es la estrategia más completa?",
        opciones: [
            "A) Aplicar un cuestionario con preguntas literales al pie de la letra.",
            "B) Combinar preguntas de distinto nivel (literales, inferenciales, críticas), actividades de reelaboración (resumen, mapa conceptual, dibujo explicativo) y diálogo sobre conexiones con su experiencia.",
            "C) Pedirles un resumen largo del texto.",
            "D) Pedirles que memoricen el texto completo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023 y Ordenanza 04-2023. La comprensión lectora implica múltiples niveles (literal, inferencial, crítico) y se evalúa con diversidad de estrategias, no solo cuestionarios literales."
    },
    {
        id: 158,
        categoria: "Protección Infantil",
        pregunta: "La maestra de 4to grado observa que una estudiante lleva semanas con la misma ropa sucia y huele mal. Los compañeros se burlan. ¿Cuál es la actuación correcta?",
        opciones: [
            "A) Llamar la atención a la estudiante públicamente por su higiene.",
            "B) Intervenir con los compañeros contra las burlas, abordar la situación con privacidad y dignidad, coordinar con orientación y la familia para comprender las causas, y activar apoyos institucionales si hay negligencia.",
            "C) Expulsarla temporalmente 'hasta que se presente limpia'.",
            "D) Ignorar la situación porque 'es asunto familiar'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 y Manual de Convivencia. La dignidad del niño se protege. Las condiciones materiales difíciles pueden ser indicio de negligencia y requieren intervención institucional sensible, no exposición pública."
    },
    {
        id: 159,
        categoria: "Alfabetización",
        pregunta: "En 1er grado, una familia pregunta 'cuándo va a saber leer' su hijo. ¿Cuál es la respuesta profesional correcta?",
        opciones: [
            "A) 'En Navidad tiene que saber, si no va a repetir'.",
            "B) Explicar que la alfabetización es un proceso que se extiende a lo largo del Primer Ciclo del Nivel Primario, mostrar el nivel actual del niño, compartir las acciones pedagógicas y sugerir prácticas familiares de alfabetización.",
            "C) 'No se preocupe, eso viene con el tiempo'.",
            "D) 'Usted debería enseñarle en casa con planas'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. La comunicación con las familias debe ser profesional, basada en evidencias, reconocer el carácter procesual de la alfabetización y promover la corresponsabilidad."
    },
    {
        id: 160,
        categoria: "Inclusión",
        pregunta: "En 2do grado, un estudiante es mayor que sus compañeros (9 años) por haber repetido. Se siente diferente y se aísla. ¿Qué debe hacer la maestra?",
        opciones: [
            "A) Tratarlo como 'ejemplo negativo' para que los demás no repitan.",
            "B) Reconocer sus fortalezas, ofrecerle roles que potencien su liderazgo positivo, acompañarlo socioemocionalmente en coordinación con orientación, y trabajar con el grupo la diversidad de trayectorias.",
            "C) Ignorar su aislamiento social.",
            "D) Cambiarlo al grupo de 3ro sin evaluación pedagógica previa."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024 y Ley 136-03. La atención a trayectorias educativas diversas incluye fortalecer la autoestima, ofrecer roles positivos y trabajar la inclusión social en el grupo."
    },
    {
        id: 161,
        categoria: "Planificación",
        pregunta: "La maestra de 6to grado planifica la 'investigación-acción' como estrategia. Un estudiante pregunta 'por qué investigar algo del barrio'. ¿Cuál es la fundamentación correcta?",
        opciones: [
            "A) 'Porque lo dice el libro'.",
            "B) Explicar que la investigación contextualizada conecta los aprendizajes con la realidad, desarrolla competencias ciudadanas, promueve el pensamiento crítico y produce conocimiento con impacto en la comunidad.",
            "C) 'Porque no hay otros temas disponibles'.",
            "D) 'Porque es más fácil que investigar otras cosas'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. La investigación-acción articula aprendizaje, ciudadanía y transformación de la realidad inmediata, coherente con el enfoque por competencias."
    },
    {
        id: 162,
        categoria: "Evaluación",
        pregunta: "La maestra de 5to grado aplica una evaluación y detecta que un estudiante 'regala' respuestas a su compañero durante la prueba. ¿Cuál es la actuación correcta?",
        opciones: [
            "A) Gritarle públicamente y anular su examen.",
            "B) Detener discretamente la práctica en el momento, conversar en privado con ambos estudiantes al finalizar sobre la ética académica, documentar la situación y diseñar una evaluación de reemplazo o complementaria.",
            "C) Prohibir a ambos hablarse durante el resto del año.",
            "D) Informar del hecho en la siguiente reunión de padres delante de todos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Convivencia y Orden Departamental 22-2023. Las situaciones de integridad académica se abordan con discreción, formación ética y oportunidades de corrección, no mediante humillación pública."
    },
    {
        id: 163,
        categoria: "Ética",
        pregunta: "La maestra de 1er grado es invitada por la familia de una estudiante al cumpleaños de la niña. ¿Cuál es la consideración ética correcta?",
        opciones: [
            "A) Aceptar sin reservas, es un gesto social.",
            "B) Valorar el invite pero considerar los límites éticos de la relación docente-familia: distinguir el rol profesional de amistades personales, evitar favoritismos y actuar con transparencia.",
            "C) Aceptar y llevar un regalo muy costoso como reciprocidad.",
            "D) Rechazar cualquier relación con familias por 'extremo profesionalismo'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. La relación docente-familia tiene límites profesionales. Los vínculos personales deben evitarse o manejarse con transparencia para no afectar la imparcialidad."
    },
    {
        id: 164,
        categoria: "Gestión de Aula",
        pregunta: "La maestra de 3er grado tiene un aula con pocos materiales. ¿Cuál es el enfoque correcto frente a esta limitación?",
        opciones: [
            "A) Quejarse con los padres y pedirles todos los materiales.",
            "B) Optimizar los recursos disponibles, generar materiales con objetos del entorno, promover la creatividad en las propuestas, y canalizar institucionalmente las necesidades sin trasladar la carga a las familias.",
            "C) Limitar las actividades y dar solo clases orales.",
            "D) Pedir a los estudiantes que no traigan nada y tampoco hacer nada."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023 y Orden Departamental 22-2023. La gestión pedagógica supera las limitaciones mediante creatividad. Las carencias se canalizan institucionalmente, no transfiriéndose a las familias."
    },
    {
        id: 165,
        categoria: "Convivencia",
        pregunta: "En 4to grado, un estudiante se niega repetidamente a seguir las instrucciones. La maestra pierde la paciencia. ¿Cuál es la regulación profesional correcta?",
        opciones: [
            "A) Castigarlo duramente 'para que aprenda'.",
            "B) Pausar, respirar, no reaccionar desde la emoción, buscar posteriormente en privado las causas de su oposición, reconstruir el vínculo y redefinir acuerdos concretos.",
            "C) Gritarle delante de todos.",
            "D) Expulsarlo del aula permanentemente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Convivencia y Orden Departamental 22-2023. La regulación emocional docente es competencia profesional. La oposición persistente requiere intervención relacional, no sancionatoria."
    },
    {
        id: 166,
        categoria: "Alfabetización",
        pregunta: "En 1er grado, la maestra realiza un registro sistemático del nivel de construcción de escritura de cada estudiante. ¿Cuál es la utilidad de este registro?",
        opciones: [
            "A) Calificar a cada estudiante y ordenarlos del mejor al peor.",
            "B) Fundamentar intervenciones pedagógicas diferenciadas, documentar avances en el proceso, informar a familias y orientación sobre el estado del grupo y cada estudiante.",
            "C) Usar la información como diagnóstico para 'eliminar' a los más rezagados.",
            "D) Solo archivarlo sin utilización pedagógica."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. El registro sistemático del nivel de construcción es herramienta pedagógica para fundamentar intervenciones diferenciadas y comunicar el proceso de alfabetización."
    },
    {
        id: 167,
        categoria: "Inclusión",
        pregunta: "En 6to grado, una estudiante viene de un contexto rural muy diferente. Tiene saberes valiosos sobre medicina tradicional y agricultura. ¿Cómo debe actuar la maestra?",
        opciones: [
            "A) Descartar sus saberes por 'no científicos'.",
            "B) Valorar y visibilizar sus saberes como conocimiento culturalmente legítimo, integrarlos en las situaciones de aprendizaje (Ciencias de la Naturaleza, Ciencias Sociales), promover el diálogo entre saberes.",
            "C) Limitarse a escuchar sus aportes sin integrarlos al currículo.",
            "D) Pedirle que 'no hable más de eso' en clase."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023 y Ordenanza 05-2024. Los saberes culturales y tradicionales son riqueza educativa. El diálogo entre saberes enriquece el aprendizaje y respeta la diversidad cultural."
    },
    {
        id: 168,
        categoria: "Protección Infantil",
        pregunta: "La maestra de 5to grado nota que un estudiante tiene marcas de dientes (mordeduras humanas) en el brazo. El niño dice que fue 'jugando'. ¿Cuál es la actuación correcta?",
        opciones: [
            "A) Aceptar la explicación del niño y no hacer más.",
            "B) Documentar lo observado con respeto y precisión, notificar al equipo de orientación y dirección para activar la evaluación del protocolo correspondiente, resguardando la confidencialidad e integridad del niño.",
            "C) Llamar inmediatamente a los padres para confrontarlos.",
            "D) Fotografiar las lesiones sin consentimiento y divulgarlas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03. Ante signos de posible maltrato, la notificación institucional y la activación del protocolo son obligatorias, aunque el niño ofrezca explicaciones alternativas. Se resguarda la integridad y confidencialidad."
    },
    {
        id: 169,
        categoria: "Planificación",
        pregunta: "La maestra de 2do grado planifica una unidad integrada sobre 'El agua'. ¿Cuál es la estructura correcta de la planificación?",
        opciones: [
            "A) Una lista de contenidos del libro de texto distribuidos en semanas.",
            "B) Situación de aprendizaje contextualizada, competencias específicas seleccionadas, indicadores de logro, experiencias/actividades articuladas, recursos, estrategias de evaluación y previsiones de atención a la diversidad.",
            "C) Solo los títulos de las lecciones y los ejercicios.",
            "D) Una planificación general del año sin secuencias específicas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. La planificación por competencias integra situación de aprendizaje, competencias, indicadores, experiencias, recursos y evaluación, con previsiones de diversidad."
    },
    {
        id: 170,
        categoria: "Evaluación",
        pregunta: "La maestra de 4to grado aplica pruebas cada mes. Un padre se queja de que 'hay demasiadas pruebas'. ¿Cómo debe responder?",
        opciones: [
            "A) Eliminar todas las pruebas por la queja del padre.",
            "B) Explicar que la evaluación en el aula es procesual y cotidiana (observación, producciones, diálogos, rúbricas), y que las 'pruebas' son solo una de muchas fuentes de evidencia sobre el aprendizaje.",
            "C) Hacer pruebas escondidas sin que los padres se enteren.",
            "D) Aumentar las pruebas como desafío al padre."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La evaluación formativa es procesual, cotidiana y multimodal. Las pruebas escritas son una entre múltiples fuentes de evidencia, no el centro del sistema evaluativo."
    },
    {
        id: 171,
        categoria: "Ética",
        pregunta: "La maestra de 6to grado es amiga cercana de la madre de un estudiante. Debe calificar a ese estudiante al final del trimestre. ¿Cuál es la actuación correcta?",
        opciones: [
            "A) Favorecer al estudiante 'por la amistad'.",
            "B) Mantener absoluta transparencia en el proceso, basar la calificación en las mismas evidencias que para el resto del grupo, hacer explícita la situación ante la dirección si lo estima necesario.",
            "C) Pedir que otra colega califique a ese estudiante sin justificación.",
            "D) Ser especialmente dura con el estudiante para 'no parecer parcial'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. La imparcialidad profesional exige mantener criterios uniformes. La amistad personal no debe generar ni favoritismo ni rigor excesivo; la transparencia es el principio rector."
    },
    {
        id: 172,
        categoria: "Gestión de Aula",
        pregunta: "La maestra de 1er grado establecerá el uso del tiempo en el aula. ¿Cuál es el principio correcto?",
        opciones: [
            "A) Dedicar la mayor parte del tiempo a actividades silenciosas de copia.",
            "B) Distribuir el tiempo equilibradamente entre momentos de instrucción directa, trabajo autónomo, colaborativo, lúdico y socioemocional, ajustado a las necesidades del grupo y de los aprendizajes.",
            "C) Priorizar únicamente Lengua y Matemática, reducir las otras áreas.",
            "D) No planificar el tiempo y hacer lo que surja."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. La gestión del tiempo didáctico balancea distintos tipos de experiencias y áreas, respondiendo al desarrollo integral previsto en el currículo."
    },
    {
        id: 173,
        categoria: "Convivencia",
        pregunta: "En 3er grado, la maestra implementa el 'círculo de diálogo' para cerrar la jornada. ¿Cuál es el propósito pedagógico?",
        opciones: [
            "A) Un espacio para dar consejos a los estudiantes.",
            "B) Un ritual pedagógico donde los estudiantes expresan cómo se sintieron, qué aprendieron, qué agradecen y qué proponen, fortaleciendo comunidad, metacognición y desarrollo socioemocional.",
            "C) Un tiempo para que la maestra recapitule los contenidos.",
            "D) Una actividad opcional sin propósito claro."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023 y Manual de Convivencia. Los círculos de diálogo son rituales pedagógicos que fortalecen comunidad, metacognición y regulación emocional en el aula."
    },
    {
        id: 174,
        categoria: "Inclusión",
        pregunta: "En 5to grado, una estudiante está en situación de embarazo adolescente. Algunos docentes sugieren 'que estudie desde su casa'. ¿Cuál es la postura correcta?",
        opciones: [
            "A) Apoyar la sugerencia de 'estudiar desde casa' para evitar molestias.",
            "B) Garantizar su derecho a continuar en el centro regular con las adecuaciones necesarias, articular con servicios de salud y orientación, y trabajar con la comunidad escolar la no estigmatización.",
            "C) Solicitar su expulsión del centro.",
            "D) Cambiarla a un 'turno especial' sin consulta a la familia."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 (derecho a la educación, no discriminación) y Ordenanza 05-2024. La permanencia educativa es un derecho. La estigmatización y exclusión son inaceptables. La articulación con salud y orientación es obligatoria."
    },
    {
        id: 175,
        categoria: "Alfabetización",
        pregunta: "En 2do grado, la maestra realiza sesiones de escritura en parejas. ¿Cuál es el sentido pedagógico?",
        opciones: [
            "A) Que los que saben 'ayuden' a los que no saben.",
            "B) Promover la conceptualización mediante la interacción entre hipótesis diferentes, la verbalización y la argumentación sobre el sistema de escritura, enriqueciendo el proceso constructivo de ambos.",
            "C) Hacer el trabajo más rápido porque son dos niños por tarea.",
            "D) Agrupar por amistad sin criterio pedagógico."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. La escritura en parejas con hipótesis próximas favorece el avance mediante la interacción, la verbalización de hipótesis y la argumentación, no es simple 'ayuda' mecánica."
    },
    {
        id: 176,
        categoria: "Evaluación",
        pregunta: "La maestra de 3er grado debe comunicar a un padre que su hijo está en 'I' en Matemática. ¿Cuál es el enfoque comunicacional correcto?",
        opciones: [
            "A) 'Su hijo es flojo y no pone atención'.",
            "B) Compartir la información con sensibilidad, mostrar evidencias concretas, reconocer las fortalezas del estudiante, explicar el plan de recuperación pedagógica y proponer acciones conjuntas familia-escuela.",
            "C) Comunicar la información por mensaje de texto sin explicación.",
            "D) Anunciar la calificación en reunión grupal de padres."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023 y Ley 136-03. La comunicación evaluativa a familias es sensible, evidencial, constructiva y orientadora. La estigmatización y falta de privacidad vulneran derechos del niño y la ética profesional."
    },
    {
        id: 177,
        categoria: "Protección Infantil",
        pregunta: "La maestra de 6to grado identifica señales de posible adicción en un estudiante (cambios de conducta, olor, pupilas). ¿Cuál es la actuación correcta?",
        opciones: [
            "A) Confrontarlo delante del grupo para que 'reaccione'.",
            "B) Notificar inmediatamente al equipo de orientación y dirección para activar el protocolo de atención, coordinar con la familia de manera sensible y articular con servicios de salud especializados.",
            "C) Hacerle una requisa inmediata en el aula.",
            "D) Expulsarlo del centro sin protocolo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 y Manual de Convivencia. Las adicciones en menores son problemas de salud que requieren abordaje interdisciplinar, articulación con familia y servicios de salud, no sanciones ni confrontaciones."
    },
    {
        id: 178,
        categoria: "Planificación",
        pregunta: "La maestra de 4to grado planifica un proyecto de feria científica. ¿Cuál es el enfoque pedagógico correcto?",
        opciones: [
            "A) Los estudiantes hacen sus proyectos en casa sin orientación y los presentan.",
            "B) Acompañar el proceso completo (identificación de preguntas, diseño de investigación, desarrollo, análisis, presentación), articular con competencias del currículo y evaluar proceso y producto.",
            "C) Solo los estudiantes 'más brillantes' participan.",
            "D) Reducir el proyecto a un cartel ilustrativo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. Las ferias científicas son proyectos pedagógicos que se acompañan didácticamente. Son oportunidades de aprendizaje para todos los estudiantes con adecuaciones apropiadas."
    },
    {
        id: 179,
        categoria: "Ética",
        pregunta: "La maestra de 2do grado encuentra una colega alterando indicadores de logro en el Registro de Grado. ¿Cuál es la actuación correcta?",
        opciones: [
            "A) Callar por lealtad gremial.",
            "B) Notificar formalmente la situación al director del centro, pues la alteración de registros oficiales es una falta grave que debe ser conocida por la instancia responsable.",
            "C) Confrontar a la colega públicamente.",
            "D) Alterar también los propios registros para 'igualar'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023 y Ordenanza 04-2023. Los registros oficiales son documentos con fe pública. Su alteración es falta grave. El deber ético del servidor es notificar institucionalmente."
    },
    {
        id: 180,
        categoria: "Gestión de Aula",
        pregunta: "En 1er grado, la maestra organiza los 'rincones de aprendizaje' en el aula. ¿Cuál es el propósito pedagógico?",
        opciones: [
            "A) Decorar el aula con espacios temáticos sin función.",
            "B) Ofrecer espacios especializados (biblioteca, matemáticas, arte, juego simbólico) donde los estudiantes trabajen de forma autónoma y diferenciada, favoreciendo múltiples formas de aprendizaje simultáneo.",
            "C) Separar a los estudiantes por 'nivel' de forma permanente.",
            "D) Usarlos solo como castigo cuando alguien se porta mal."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. Los rincones de aprendizaje son espacios didácticos especializados que favorecen autonomía, diferenciación y múltiples formas de aprendizaje en simultáneo."
    },

 {
        id: 181,
        categoria: "Convivencia",
        pregunta: "En 5to grado, la maestra detecta un mensaje amenazante escrito en un pupitre dirigido a una compañera. ¿Cuál es la actuación correcta?",
        opciones: [
            "A) Borrarlo y continuar la clase como si no hubiera pasado nada.",
            "B) Documentar la evidencia, proteger a la estudiante afectada, activar el protocolo de convivencia contra el acoso, investigar con orientación y dirección de manera sensible, e intervenir pedagógicamente con el grupo.",
            "C) Interrogar a todos los estudiantes hasta encontrar al culpable.",
            "D) Comunicar solo a la familia de la víctima sin intervención institucional."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Convivencia Escolar y Ley 136-03. Las amenazas son violencia. El protocolo institucional protege a la víctima y aborda integralmente la situación. La omisión es corresponsabilidad."
    },
    {
        id: 182,
        categoria: "Alfabetización",
        pregunta: "En 1er grado, una familia pregunta por qué la maestra no 'enseña sílabas como antes'. ¿Cuál es la explicación profesional correcta?",
        opciones: [
            "A) Decir que 'así es ahora y ya'.",
            "B) Explicar el enfoque psicogenético vigente (Ordenanza 01-2023): los niños construyen el sistema de escritura desde textos con significado, y la reflexión sobre la sílaba emerge dentro de esa construcción, no como punto de partida mecánico.",
            "C) Volver al método silábico tradicional para complacer.",
            "D) Decir 'el MINERD lo obliga y por eso'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. La comunicación profesional con familias incluye explicar los fundamentos pedagógicos del enfoque, no solo referir normativa."
    },
    {
        id: 183,
        categoria: "Inclusión",
        pregunta: "En 4to grado, un estudiante con diabetes tipo 1 necesita medir su glucemia durante la clase. Otro padre se queja de que 'es distractor'. ¿Cuál es la actuación correcta?",
        opciones: [
            "A) Pedirle al estudiante con diabetes que lo haga 'discretamente' fuera del aula.",
            "B) Garantizar el derecho del estudiante a las medidas de salud necesarias, trabajar con el grupo sobre condiciones crónicas y respeto a la diversidad, y dialogar con la familia quejosa para sensibilizar.",
            "C) Sancionar al estudiante con diabetes.",
            "D) Retirar al estudiante del aula en esos momentos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024 y Ley 136-03. La atención a condiciones de salud en el aula es un derecho fundamental que no debe depender de la opinión de terceros. La inclusión incluye sensibilización grupal."
    },
    {
        id: 184,
        categoria: "Evaluación",
        pregunta: "La maestra de 6to grado implementa la evaluación entre pares. Un padre teme que 'otros estudiantes juzguen a su hijo'. ¿Cómo debe responder?",
        opciones: [
            "A) Eliminar la evaluación entre pares por el temor del padre.",
            "B) Explicar que la coevaluación entre pares tiene propósito formativo, se realiza con criterios claros (rúbricas adaptadas a la edad), se acompaña docentemente y complementa (no sustituye) la evaluación docente.",
            "C) Permitir que solo su hijo no participe en la coevaluación.",
            "D) Hacer la coevaluación en secreto."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La coevaluación entre pares es práctica formativa legítima con criterios explícitos y acompañamiento docente. Complementa, no sustituye, la evaluación profesional."
    },
    {
        id: 185,
        categoria: "Planificación",
        pregunta: "La maestra de 3er grado diseña una situación de aprendizaje. ¿Cuál es el elemento más importante que debe contener?",
        opciones: [
            "A) Múltiples ejercicios variados del libro de texto.",
            "B) Un contexto auténtico o reto significativo que movilice competencias, articule indicadores de logro de múltiples áreas y genere oportunidades para movilizar saberes.",
            "C) Un listado largo de contenidos por área.",
            "D) Una cronología detallada de cada minuto del día."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. La situación de aprendizaje se caracteriza por un contexto auténtico/reto significativo que moviliza competencias múltiples, es el eje del diseño didáctico por competencias."
    },
    {
        id: 186,
        categoria: "Protección Infantil",
        pregunta: "Una madre llega agitada y pide a la maestra de 1er grado 'entregarle' al niño a su pareja, que espera afuera. El acta legal de custodia indica que solo la madre puede retirar al niño. ¿Qué debe hacer?",
        opciones: [
            "A) Entregar el niño para evitar conflicto con la madre.",
            "B) Negarse a entregar al niño a persona no autorizada, aunque la madre lo solicite verbalmente, explicar el procedimiento y canalizar con dirección cualquier modificación formal de la autorización.",
            "C) Llamar directamente a la pareja para autorizarse 'personalmente'.",
            "D) Entregar al niño si la madre firma un papel improvisado."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 (protección y custodia del niño). Los procedimientos formales de custodia y autorizaciones se cumplen rigurosamente. La seguridad del niño prevalece sobre conveniencias verbales."
    },
    {
        id: 187,
        categoria: "Ética",
        pregunta: "La maestra de 2do grado recibe comentarios de un padre en redes sociales atacando su desempeño profesional. ¿Cuál es la respuesta correcta?",
        opciones: [
            "A) Responder en redes con la misma agresividad.",
            "B) Abstenerse de responder en redes sociales, documentar los comentarios si son difamatorios, canalizar institucionalmente la situación con la dirección del centro.",
            "C) Denunciar al padre ante todos los demás padres del grupo.",
            "D) Confrontar al padre delante de su hijo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023 y Ley 136-03. Los conflictos docente-familia se canalizan institucionalmente, no en redes sociales. La contención y el encuadre institucional protegen a todas las partes."
    },
    {
        id: 188,
        categoria: "Gestión de Aula",
        pregunta: "En 4to grado, un estudiante constantemente pide permiso para ir al baño durante las clases importantes. ¿Cuál es la actuación pedagógica correcta?",
        opciones: [
            "A) Negarle el permiso hasta que 'aprenda a aguantar'.",
            "B) Garantizar sus necesidades fisiológicas, observar patrones para identificar posibles causas (necesidades reales, evitación de la clase, condición médica) y abordar pedagógica o institucionalmente según corresponda.",
            "C) Avergonzarlo públicamente cada vez que pida permiso.",
            "D) Llamar a los padres para que 'le enseñen en casa'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 (integridad y dignidad del niño) y Manual de Convivencia. Las necesidades fisiológicas son derechos. La observación pedagógica permite comprender y abordar causas sin sancionar."
    },
    {
        id: 189,
        categoria: "Convivencia",
        pregunta: "La maestra de 3er grado se encuentra con que otra docente le pide 'prestarle' su aula durante su hora libre para reuniones personales. ¿Cuál es la actuación correcta?",
        opciones: [
            "A) Prestar el aula sin más, por compañerismo.",
            "B) Aclarar que el aula es espacio pedagógico institucional con usos definidos, y que cualquier uso fuera de horario pedagógico debe canalizarse con dirección.",
            "C) Prestar el aula solo si recibe algo a cambio.",
            "D) Negarse agresivamente sin explicación."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. El uso de los espacios institucionales sigue normativas. La colegialidad no excluye el respeto a los procedimientos institucionales."
    },
    {
        id: 190,
        categoria: "Alfabetización",
        pregunta: "En 2do grado, un estudiante escribe textos con coherencia pero sin usar mayúsculas ni puntos. ¿Cuál es la intervención correcta?",
        opciones: [
            "A) Bajar la nota por cada ausencia de mayúscula y punto.",
            "B) Reconocer la coherencia como logro, trabajar progresivamente los aspectos convencionales (mayúsculas, puntos) mediante situaciones significativas de revisión y edición, articulados con las particularidades del tipo textual.",
            "C) Ignorar los aspectos convencionales en 2do grado.",
            "D) Hacerlo copiar un texto con mayúsculas y puntos cien veces."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. Los aspectos convencionales se trabajan progresivamente, reconociendo logros y enseñándolos mediante revisión y edición en contextos significativos."
    },
    {
        id: 191,
        categoria: "Inclusión",
        pregunta: "En 5to grado, un estudiante en situación de pobreza extrema no cuenta con útiles. ¿Cuál es la actuación correcta?",
        opciones: [
            "A) Excluirlo de actividades que requieran materiales.",
            "B) Activar apoyos institucionales del centro (materiales de reserva, coordinación con entidades solidarias), proteger la dignidad del estudiante, y asegurar su plena participación sin exposición estigmatizante.",
            "C) Humillarlo públicamente por no tener los útiles.",
            "D) Enviarlo a su casa hasta que traiga los materiales."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024 y Ley 136-03. La equidad educativa se garantiza activando apoyos disponibles con respeto a la dignidad. La exclusión o estigmatización vulneran derechos fundamentales."
    },
    {
        id: 192,
        categoria: "Evaluación",
        pregunta: "La maestra de 6to grado debe diseñar una prueba escrita que evalúe la competencia comunicativa. ¿Cuál es la característica correcta?",
        opciones: [
            "A) Preguntas cerradas que solo evalúan memoria.",
            "B) Integrar textos auténticos, preguntas de distinto nivel (literal, inferencial, crítico), producción de textos propios en distintos géneros, y reflexión metacognitiva sobre el proceso comunicativo.",
            "C) Un dictado como única actividad.",
            "D) Preguntas sobre reglas gramaticales aisladas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La evaluación de la competencia comunicativa implica textos auténticos, diversidad de procesos cognitivos, producción real y metacognición, no memorización de reglas aisladas."
    },
    {
        id: 193,
        categoria: "Planificación",
        pregunta: "La maestra de 1er grado planifica la articulación entre Nivel Inicial y 1er grado. ¿Cuál es el enfoque correcto?",
        opciones: [
            "A) Empezar desde cero sin considerar lo hecho en Inicial.",
            "B) Articular con el Nivel Inicial respetando y continuando sus aprendizajes (juego, exploración, autonomía), mantener prácticas consistentes en 1er grado y ampliar progresivamente la cultura escolar.",
            "C) Romper con las prácticas de Inicial porque 'ya no son niños pequeños'.",
            "D) Usar las mismas actividades que en Inicial sin progresión."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. La articulación Inicial-Primario es clave para trayectorias educativas continuas. Se conservan elementos valiosos (juego, exploración) y se amplía progresivamente."
    },
    {
        id: 194,
        categoria: "Ética",
        pregunta: "La maestra de 4to grado recibe una propuesta de un padre: 'pagar' clases particulares extra para su hijo fuera del horario. ¿Cuál es la consideración ética?",
        opciones: [
            "A) Aceptar sin más, son ingresos extra legítimos.",
            "B) Valorar el potencial conflicto de interés (el estudiante es de su grupo), verificar la normativa institucional, y actuar con transparencia; en principio, evitar servicios particulares remunerados a estudiantes propios.",
            "C) Aceptar y prometer 'subirle la nota' al estudiante.",
            "D) Ofrecer el servicio a todo el grupo como negocio."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. El servicio remunerado particular a estudiantes del propio grupo constituye conflicto de intereses potencial. La independencia del juicio evaluativo debe protegerse."
    },
    {
        id: 195,
        categoria: "Gestión de Aula",
        pregunta: "En 3er grado, la maestra nota que los estudiantes se mueven mucho y le cuesta mantener 'el orden'. ¿Cuál es la mirada profesional correcta?",
        opciones: [
            "A) 'El grupo es muy indisciplinado, hay que controlarlos más'.",
            "B) El movimiento es necesidad natural en la infancia; planificar actividades que incluyan movimiento intencional (rincones, estaciones, actividades manipulativas) y no solo sentarse y escuchar.",
            "C) Castigar a los estudiantes que se muevan.",
            "D) Exigir silencio absoluto como indicador de aprendizaje."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. El desarrollo infantil implica movimiento. La planificación incorpora intencionalmente oportunidades de movimiento, no lo reprime como problema de 'disciplina'."
    },
    {
        id: 196,
        categoria: "Convivencia",
        pregunta: "La maestra de 2do grado planifica la celebración del 'Día del Maestro'. Algunos padres proponen regalos costosos. ¿Cuál es la actuación correcta?",
        opciones: [
            "A) Aceptar los regalos costosos sin más.",
            "B) Orientar a los padres hacia gestos simbólicos no económicos (dibujos, cartas, pequeños detalles hechos por los estudiantes), evitando presiones económicas a las familias.",
            "C) Exigir un regalo específico y costoso.",
            "D) Rechazar cualquier gesto como señal de profesionalismo extremo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. Las celebraciones deben construirse desde gestos simbólicos y afectivos, sin generar presiones económicas a las familias que reproduzcan inequidades."
    },
    {
        id: 197,
        categoria: "Alfabetización",
        pregunta: "En 1er grado, la maestra trabaja con los nombres de los estudiantes. Una niña dice que su nombre 'es muy largo'. ¿Cuál es la intervención correcta?",
        opciones: [
            "A) Acortarle el nombre para facilitarle el aprendizaje.",
            "B) Validar la identidad plena del nombre, usarlo como objeto de análisis (cantidad de letras, comparación con otros), celebrarlo como riqueza personal, y trabajar la identidad como dimensión pedagógica.",
            "C) Burlarse de la longitud del nombre para 'aliviar' el tema.",
            "D) Ignorar el comentario."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023 y Ley 136-03 (derecho al nombre e identidad). El nombre es identidad y objeto pedagógico. Su reducción sin consulta familiar es irrespetuosa de la identidad del niño."
    },
    {
        id: 198,
        categoria: "Inclusión",
        pregunta: "En 6to grado, un estudiante con Síndrome de Asperger tiene dificultades para interpretar consignas figuradas y metáforas. ¿Cuál es la actuación correcta?",
        opciones: [
            "A) Insistir en consignas figuradas 'para que aprenda'.",
            "B) Usar lenguaje claro y explícito, explicar las metáforas cuando aparezcan, enseñar sus formas y significados como contenido, coordinar con orientación un plan personalizado coherente con el currículo.",
            "C) Evitar completamente cualquier lenguaje figurado.",
            "D) Eximirlo de actividades con textos literarios."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. Las condiciones del espectro autista requieren ajustes comunicacionales específicos. El lenguaje figurado puede ser enseñado explícitamente como parte del currículo adaptado."
    },
    {
        id: 199,
        categoria: "Evaluación",
        pregunta: "La maestra de 5to grado aplica una evaluación y descubre que los estudiantes tuvieron acceso previo a las preguntas. ¿Cuál es la actuación correcta?",
        opciones: [
            "A) Ignorar el hecho y calificar normalmente.",
            "B) Anular la evaluación comprometida, diseñar una nueva evaluación diferente, reflexionar con el grupo sobre la integridad académica, y mejorar las prácticas de custodia de instrumentos.",
            "C) Sancionar a todo el grupo bajándoles la nota.",
            "D) Expulsar a los sospechosos sin investigación."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023 y Ordenanza 04-2023. La integridad evaluativa exige medidas correctivas. El rediseño, la reflexión formativa y la mejora de prácticas son respuestas profesionales."
    },
    {
        id: 200,
        categoria: "Planificación",
        pregunta: "La maestra de 4to grado planifica la evaluación diagnóstica de inicio de año. ¿Cuál es el propósito central?",
        opciones: [
            "A) Establecer un ranking de estudiantes desde el primer día.",
            "B) Identificar saberes previos, niveles de desarrollo en las distintas competencias, fortalezas y necesidades específicas del grupo, para ajustar la planificación pedagógica subsiguiente.",
            "C) Asignar calificaciones iniciales que cuenten para el primer trimestre.",
            "D) Seleccionar a los 'mejores' y 'peores' estudiantes."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La evaluación diagnóstica identifica el punto de partida para ajustar la enseñanza. No asigna calificaciones ni establece jerarquías entre estudiantes."
    },
    {
        id: 201,
        categoria: "Protección Infantil",
        pregunta: "La maestra de 3er grado escucha a un estudiante decir 'cuando sea grande me voy a matar'. Lo dice aparentemente 'en broma'. ¿Cuál es la actuación correcta?",
        opciones: [
            "A) Ignorar el comentario por ser 'solo una broma'.",
            "B) Tomarlo en serio, acoger al estudiante con sensibilidad, registrar lo dicho, notificar inmediatamente al equipo de orientación para una evaluación psicosocial, comunicar con la familia coordinadamente.",
            "C) Regañarlo para que 'no diga esas cosas'.",
            "D) Comentar el incidente con otros estudiantes."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 (salud mental y protección integral). Toda expresión ideativa suicida, aun 'en broma', debe tomarse en serio y activar el protocolo de salud mental y protección, con acompañamiento especializado."
    },
    {
        id: 202,
        categoria: "Ética",
        pregunta: "La maestra de 1er grado recibe un mensaje del director solicitándole alterar indicadores para mejorar estadísticas del centro. ¿Cuál es la actuación correcta?",
        opciones: [
            "A) Obedecer al director por 'jerarquía'.",
            "B) Declinar respetuosamente, pues la integridad evaluativa es deber profesional que precede la jerarquía; solicitar las instrucciones por escrito y, si la presión persiste, elevar formalmente al distrito educativo.",
            "C) Alterar algunos y otros no para 'complacer a medias'.",
            "D) Aceptar a cambio de beneficios personales."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023 y Constitución (principio de legalidad). La obediencia jerárquica tiene límites éticos. Las instrucciones ilegítimas no obligan al servidor público, y los canales institucionales superiores están disponibles."
    },
    {
        id: 203,
        categoria: "Gestión de Aula",
        pregunta: "La maestra de 2do grado establecerá la gestión del silencio en su aula. ¿Cuál es el enfoque correcto?",
        opciones: [
            "A) Imponer silencio absoluto durante toda la jornada.",
            "B) Distinguir distintos momentos: silencio productivo para concentración, conversación para colaboración, voz alta para plenarias; enseñar a los estudiantes a autorregular sus voces según el tipo de actividad.",
            "C) Prohibir hablar completamente en todas las clases.",
            "D) Dejar que hablen libremente sin estructura alguna."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. El aula no requiere silencio absoluto sino gestión diferenciada de la palabra según el tipo de actividad, enseñando autorregulación como competencia."
    },
    {
        id: 204,
        categoria: "Convivencia",
        pregunta: "En 6to grado, dos estudiantes tienen un conflicto no resuelto. Una quiere mediar la maestra. ¿Cuál es la secuencia correcta de mediación?",
        opciones: [
            "A) Determinar un culpable y sancionarlo.",
            "B) Escuchar a cada parte por separado, propiciar un encuentro en condiciones de calma, facilitar que ambos expresen su perspectiva y emociones, acompañar la búsqueda de acuerdos reparadores y dar seguimiento.",
            "C) Exigir disculpas inmediatas sin comprensión del conflicto.",
            "D) Avisar solo a los padres para que ellos resuelvan."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Convivencia Escolar. La mediación restaurativa sigue etapas: escucha individual, encuentro facilitado, expresión, búsqueda de acuerdos, seguimiento. Supera la lógica culpable/sanción."
    },
    {
        id: 205,
        categoria: "Alfabetización",
        pregunta: "En 2do grado, la maestra organiza el trabajo de revisión textual en el aula. ¿Cuál es la estrategia más coherente?",
        opciones: [
            "A) Que la maestra corrija todo con lápiz rojo.",
            "B) Enseñar estrategias de revisión con aspectos claros por etapa (contenido, organización, convencionalidades), incluir autorrevisión, revisión entre pares y revisión docente como etapas del proceso escritor.",
            "C) Pedir que los padres revisen los textos en casa.",
            "D) Ignorar la revisión y calificar solo la primera versión."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. La revisión textual es etapa del proceso escritor que se enseña explícitamente con aspectos claros, incluyendo autorrevisión, coevaluación entre pares y revisión docente."
    },
    {
        id: 206,
        categoria: "Inclusión",
        pregunta: "En 4to grado, una estudiante repentinamente deja de hablar en clase. La maestra la conocía participativa. ¿Cuál es la actuación correcta?",
        opciones: [
            "A) Ignorar el cambio pues 'es decisión suya no participar'.",
            "B) Observar con sensibilidad, dialogar individualmente para ofrecer escucha, explorar posibles causas (socioemocionales, familiares, grupales), articular con orientación si corresponde.",
            "C) Exigirle participar delante de todos 'para quitarle el silencio'.",
            "D) Bajarle la nota por su falta de participación."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 y Ordenanza 05-2024. Los cambios conductuales significativos son señales de alerta que requieren observación sensible, diálogo y articulación con equipos especializados."
    },
    {
        id: 207,
        categoria: "Evaluación",
        pregunta: "La maestra de 3er grado quiere saber si sus estrategias didácticas son efectivas. ¿Cuál es la práctica profesional correcta?",
        opciones: [
            "A) Asumir que lo son si los estudiantes no se quejan.",
            "B) Reflexionar sistemáticamente sobre su práctica mediante autoevaluación docente, retroalimentación de los estudiantes, análisis de evidencias de aprendizaje, y ajuste continuo de las estrategias.",
            "C) Evaluarse solo por las notas finales de los estudiantes.",
            "D) Confiar únicamente en la opinión del director."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023 y claves discursivas del ERP. La reflexión docente sistemática ('¿qué debo cambiar yo para que ellos aprendan?') es dimensión esencial de la profesionalidad."
    },
    {
        id: 208,
        categoria: "Planificación",
        pregunta: "La maestra de 5to grado planifica la inclusión de las TIC en el aula. ¿Cuál es el enfoque correcto?",
        opciones: [
            "A) Usar las TIC como un área separada sin articulación.",
            "B) Integrar las TIC transversalmente en todas las áreas con propósitos pedagógicos claros (búsqueda crítica de información, producción multimodal, colaboración, publicación), como recurso al servicio del aprendizaje.",
            "C) Usarlas solo para proyectar contenidos.",
            "D) Prohibir completamente su uso por ser 'distractores'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. Las TIC son recursos transversales con propósitos pedagógicos. Su integración crítica al servicio de las competencias es clave de la educación contemporánea."
    },
    {
        id: 209,
        categoria: "Ética",
        pregunta: "La maestra de 6to grado tiene una situación personal que la afecta emocionalmente. ¿Cuál es la actuación profesional correcta?",
        opciones: [
            "A) Desahogarse con los estudiantes compartiendo sus problemas personales.",
            "B) Buscar apoyo profesional apropiado fuera del aula, mantener el profesionalismo frente a los estudiantes, y si es necesario solicitar licencia o acompañamiento institucional.",
            "C) Ignorar la afectación emocional y 'seguir adelante'.",
            "D) Desquitarse con los estudiantes en momentos difíciles."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. El cuidado de la salud mental docente es parte del profesionalismo. Los espacios de apoyo son externos al aula; los estudiantes no son interlocutores de dificultades personales."
    },
    {
        id: 210,
        categoria: "Gestión de Aula",
        pregunta: "En 1er grado, la maestra incorpora el 'calendario' como rutina diaria. ¿Cuál es la intencionalidad pedagógica?",
        opciones: [
            "A) Una actividad decorativa sin propósito pedagógico.",
            "B) Una rutina que integra nociones temporales (días, meses, secuencia), conteo, lectura de palabras, reconocimiento del clima, anticipación de eventos, articulada con competencias matemáticas y lingüísticas.",
            "C) Una actividad para matar tiempo al inicio de la jornada.",
            "D) Un momento para que la maestra pase lista únicamente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023 y Ordenanza 01-2023. Las rutinas como el calendario son dispositivos pedagógicos que articulan múltiples aprendizajes en forma sistemática y significativa."
    },
    {
        id: 211,
        categoria: "Convivencia",
        pregunta: "La maestra de 4to grado organiza una jornada de sensibilización sobre la no violencia. Un padre se opone porque 'endulza' a los niños. ¿Cómo debe responder?",
        opciones: [
            "A) Cancelar la jornada por la oposición del padre.",
            "B) Explicar fundamentadamente que la educación para la paz y la no violencia es parte del currículo oficial dominicano, articulada con competencias ciudadanas e inscrita en la normativa educativa vigente.",
            "C) Discutir públicamente con el padre.",
            "D) Realizar la jornada excluyendo al hijo de ese padre."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023 y Manual de Convivencia. La educación para la paz es parte del currículo oficial. La fundamentación profesional ante cuestionamientos familiares es dimensión del profesionalismo docente."
    },
    {
        id: 212,
        categoria: "Alfabetización",
        pregunta: "En 1er grado, la maestra diseña un rincón de biblioteca. ¿Cuál es el criterio correcto para la selección de libros?",
        opciones: [
            "A) Solo libros escolares con texto gradual.",
            "B) Diversidad de géneros (cuentos, poesía, informativos, libros-álbum, historietas), diversidad cultural, calidad literaria, atractivo visual, y adecuación al desarrollo lector de los estudiantes.",
            "C) Solo libros 'clásicos' aunque no interesen.",
            "D) Libros seleccionados solo por la maestra sin diversidad."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. Las bibliotecas de aula se caracterizan por diversidad de géneros, voces, calidad y atractivo. Son dispositivos para la formación de lectores competentes y comprometidos."
    },
    {
        id: 213,
        categoria: "Inclusión",
        pregunta: "En 5to grado, un estudiante migrante recientemente llegado se siente perdido académicamente. Las temáticas son nuevas para él. ¿Qué debe hacer la maestra?",
        opciones: [
            "A) Ignorar sus diferencias y 'que se ajuste como pueda'.",
            "B) Realizar una evaluación diagnóstica individual sobre sus saberes, implementar adecuaciones de acceso y de contenido progresivas, articular con orientación un plan de acogida, valorar y visibilizar sus aportes culturales.",
            "C) Asignarle actividades de grados inferiores permanentemente.",
            "D) Excluirlo de las evaluaciones hasta que 'se ponga al día'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024 y Ley 136-03. La inclusión de estudiantes migrantes requiere diagnóstico, plan de acogida, adecuaciones progresivas y valoración de su bagaje cultural, no exclusión ni igualación pasiva."
    },
    {
        id: 214,
        categoria: "Evaluación",
        pregunta: "La maestra de 2do grado planifica la evaluación de un proyecto de aula. ¿Cuál es la característica correcta?",
        opciones: [
            "A) Evaluar solo el producto final del proyecto.",
            "B) Evaluar el proceso completo (planificación, desarrollo, producto, socialización) con instrumentos diversos (rúbricas, observación, autoevaluación, coevaluación) articulados con los indicadores de las competencias movilizadas.",
            "C) Calificar según la subjetividad del docente.",
            "D) Evaluar solo con examen escrito al final."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La evaluación de proyectos evalúa proceso y producto con diversidad de instrumentos y articulación con las competencias desarrolladas."
    },
    {
        id: 215,
        categoria: "Planificación",
        pregunta: "La maestra de 6to grado planifica el cierre del año y la articulación con el Nivel Secundario. ¿Cuál es el enfoque correcto?",
        opciones: [
            "A) Asumir que 'ya es cosa de Secundaria' cuando pasen.",
            "B) Consolidar aprendizajes clave, fortalecer competencias para la transición, desarrollar autonomía y autorregulación, acompañar socioemocionalmente el cambio, y articular con el Nivel Secundario cuando sea posible.",
            "C) Relajar los aprendizajes al final del año.",
            "D) Apresurar todos los contenidos faltantes sin consolidación."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. La articulación entre niveles requiere consolidación de aprendizajes clave, desarrollo de autonomía y acompañamiento socioemocional, no apresuramiento ni relajación."
    },
    {
        id: 216,
        categoria: "Ética",
        pregunta: "La maestra de 3er grado hereda un grupo con registros incompletos del docente anterior. ¿Cuál es la actuación correcta?",
        opciones: [
            "A) Asumir los registros tal como están sin verificar.",
            "B) Realizar una evaluación diagnóstica que fundamente el punto de partida propio, documentar formalmente las limitaciones de la información recibida, y coordinar con dirección y con el docente anterior si es posible.",
            "C) Inventar registros para completar lo faltante.",
            "D) Rechazar el grupo hasta que se completen los registros."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023 y Ordenanza 04-2023. La integridad documental requiere fundamentar decisiones con evidencias propias y documentar formalmente las limitaciones, sin inventar información."
    },
    {
        id: 217,
        categoria: "Gestión de Aula",
        pregunta: "La maestra de 4to grado diseña el uso de recompensas y refuerzos. ¿Cuál es el enfoque correcto?",
        opciones: [
            "A) Entregar 'premios materiales' constantemente por cualquier conducta.",
            "B) Priorizar el refuerzo social e intrínseco (reconocimiento específico, valoración de esfuerzos, responsabilidades, autonomía progresiva) sobre las recompensas materiales, construyendo motivación intrínseca.",
            "C) Usar castigos como principal sistema de control.",
            "D) No reforzar conductas positivas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Convivencia Escolar y Adecuación Curricular 2023. El refuerzo positivo intrínseco y social construye motivación duradera, superior a las recompensas materiales constantes que generan dependencia externa."
    },
    {
        id: 218,
        categoria: "Convivencia",
        pregunta: "En 2do grado, la maestra trabaja con los estudiantes la expresión de emociones difíciles. ¿Cuál es el enfoque correcto?",
        opciones: [
            "A) Pedirles que 'no lleven' sus emociones a la escuela.",
            "B) Legitimar todas las emociones como parte del desarrollo humano, enseñar estrategias para reconocerlas, nombrarlas, expresarlas adecuadamente y regularlas, integrando la educación emocional en el currículo.",
            "C) Sancionar las expresiones de tristeza o rabia.",
            "D) Ignorar las emociones y enfocarse solo en lo 'académico'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023 (dimensión socioemocional) y Manual de Convivencia. Todas las emociones son legítimas. La educación emocional enseña reconocerlas, expresarlas y regularlas como competencias para la vida."
    },
    {
        id: 219,
        categoria: "Alfabetización",
        pregunta: "En 1er grado, la maestra planifica la enseñanza de la numeración. ¿Cuál es la secuencia didáctica correcta?",
        opciones: [
            "A) Dictar los números del 1 al 100 para que los copien.",
            "B) Construir el concepto de número mediante situaciones significativas (contar, comparar, ordenar objetos reales), progresar del conteo al reconocimiento de la cantidad, y luego al registro escrito con sentido.",
            "C) Enseñar solo el trazo de los números sin comprensión.",
            "D) Memorizar las tablas de sumar como primer paso."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023 y Ordenanza 01-2023. La construcción del concepto de número parte de situaciones significativas con objetos, progresa del conteo al reconocimiento de cantidades y luego a la representación escrita."
    },
    {
        id: 220,
        categoria: "Protección Infantil",
        pregunta: "La maestra de 5to grado descubre que una familia consume drogas en presencia del estudiante. El niño lo cuenta espontáneamente. ¿Cuál es la actuación correcta?",
        opciones: [
            "A) Ignorar el relato porque 'no es evidencia'.",
            "B) Notificar inmediatamente al equipo de orientación y dirección, activar el protocolo de referimiento al CONANI para evaluación de la situación, acompañar al niño con sensibilidad y resguardar la confidencialidad.",
            "C) Confrontar directamente a la familia.",
            "D) Comentar el caso con otros estudiantes o colegas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 (artículos sobre protección integral). La exposición a consumo de sustancias en el hogar es factor de riesgo que exige evaluación del CONANI. La confidencialidad y la activación institucional protegen al niño."
    },

 {
        id: 221,
        categoria: "Planificación",
        pregunta: "La maestra de 2do grado diseña una unidad sobre 'Nuestros alimentos'. ¿Cuál es el enfoque integrador correcto?",
        opciones: [
            "A) Dar el tema solo en Ciencias de la Naturaleza.",
            "B) Articular el tema con múltiples áreas: Ciencias (nutrición), Matemática (medidas, comparaciones), Lengua (recetas, etiquetas), Sociales (alimentación cultural), Formación Humana (hábitos saludables).",
            "C) Desarrollar el tema solo con fotocopias del libro.",
            "D) Hacer solo un dibujo sobre alimentos sin otra actividad."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. Las unidades integradas articulan múltiples áreas en torno a una temática significativa, movilizando competencias de distintas dimensiones curriculares."
    },
    {
        id: 222,
        categoria: "Evaluación",
        pregunta: "La maestra de 6to grado aplica una rúbrica. Un estudiante cuestiona su calificación. ¿Cuál es la actuación correcta?",
        opciones: [
            "A) Ignorar el cuestionamiento y mantener la nota sin diálogo.",
            "B) Dialogar con el estudiante mostrando la rúbrica y los criterios, analizar la evidencia de su trabajo, reconocer si hay argumentos válidos para ajustar, y explicar el fundamento de la calificación.",
            "C) Bajarle más la nota por 'cuestionar'.",
            "D) Cambiarle la nota sin análisis para 'complacerlo'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La evaluación transparente permite diálogo sobre criterios y evidencias. Los cuestionamientos son oportunidades formativas y pueden llevar a ajustes fundamentados."
    },
    {
        id: 223,
        categoria: "Inclusión",
        pregunta: "La maestra de 3er grado tiene un grupo con gran diversidad cultural. ¿Cuál es el enfoque correcto?",
        opciones: [
            "A) Ignorar las diferencias culturales para 'no hacer distinciones'.",
            "B) Reconocer y valorar explícitamente la diversidad cultural como riqueza, integrarla en las situaciones de aprendizaje, promover el diálogo intercultural y formar en el respeto activo.",
            "C) Resaltar solo la cultura dominante del grupo.",
            "D) Segmentar actividades por origen cultural."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024, Ley 136-03 y Adecuación Curricular 2023. La diversidad cultural es riqueza educativa que debe ser reconocida e integrada activamente, no ignorada ni segmentada."
    },
    {
        id: 224,
        categoria: "Ética",
        pregunta: "La maestra de 1er grado es presionada por una gestión educativa para inflar resultados de pruebas diagnósticas. ¿Cuál es la actuación correcta?",
        opciones: [
            "A) Ceder a la presión para 'mantener la paz'.",
            "B) Mantener la honestidad evaluativa como principio profesional, documentar por escrito la presión recibida, y elevar la situación por los canales institucionales superiores si es necesario.",
            "C) Inflar algunos resultados y otros no.",
            "D) Renunciar silenciosamente sin notificar nada."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023 y Constitución (principio de probidad). La integridad evaluativa es valor irrenunciable. Las presiones irregulares se canalizan institucionalmente superiores."
    },
    {
        id: 225,
        categoria: "Gestión de Aula",
        pregunta: "La maestra de 4to grado diseña un 'contrato de aula' con sus estudiantes. ¿Cuál es la característica correcta?",
        opciones: [
            "A) Normas impuestas por la maestra con sanciones predefinidas.",
            "B) Acuerdos construidos participativamente, redactados en positivo, con consecuencias lógicas reparadoras, revisados periódicamente y articulados con las competencias ciudadanas.",
            "C) Un documento solo firmado sin discusión previa.",
            "D) Una lista de prohibiciones sin explicación."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Convivencia Escolar y Adecuación Curricular 2023. Los contratos de aula se construyen participativamente, en positivo, con consecuencias lógicas, ejerciendo competencias ciudadanas en su elaboración."
    },
    {
        id: 226,
        categoria: "Convivencia",
        pregunta: "La maestra de 5to grado observa que un estudiante rechaza constantemente el contacto físico con otros. ¿Qué debe hacer?",
        opciones: [
            "A) Forzarlo a abrazar a sus compañeros 'para integrarse'.",
            "B) Respetar sus límites corporales, trabajar con el grupo sobre consentimiento y respeto a la corporalidad de cada uno, articular con orientación si hay señales de alerta.",
            "C) Avergonzarlo públicamente por 'antisocial'.",
            "D) Ignorar completamente el comportamiento."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 (integridad personal) y Manual de Convivencia. El respeto a los límites corporales es fundamental. El consentimiento es contenido educativo. Los rechazos persistentes pueden ser señales que requieren articulación especializada."
    },
    {
        id: 227,
        categoria: "Alfabetización",
        pregunta: "En 2do grado, la maestra propone a los estudiantes producir un libro colectivo de cuentos. ¿Cuál es el propósito pedagógico?",
        opciones: [
            "A) Una actividad manual sin propósito de aprendizaje.",
            "B) Articular la comprensión del género narrativo, la escritura con propósito comunicativo auténtico (destinatarios reales), la revisión y edición, y la valoración del rol de autor en los estudiantes.",
            "C) Solo entretener al grupo al final del año.",
            "D) Ocupar tiempo sin planificación."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. La producción colectiva de libros articula múltiples competencias comunicativas con propósito auténtico, destinatarios reales y proceso completo de escritura."
    },
    {
        id: 228,
        categoria: "Evaluación",
        pregunta: "La maestra de 3er grado debe reportar los resultados del área de Educación Física. ¿Cuál es la actuación correcta?",
        opciones: [
            "A) Asignar 'L' a todos los estudiantes sin evidencia.",
            "B) Coordinar con el docente de Educación Física la información pertinente, y si asume esa área, fundamentar los indicadores en evidencias sistemáticas del desempeño motriz, actitudinal y conceptual según los indicadores del grado.",
            "C) Dar notas según el comportamiento general del estudiante.",
            "D) Pedirle al docente de educación física que 'firme' sin información real."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. Cada área tiene indicadores específicos. Los docentes de área aportan las evidencias pertinentes y la articulación entre docentes es parte del trabajo colegiado."
    },
    {
        id: 229,
        categoria: "Planificación",
        pregunta: "La maestra de 6to grado planifica una situación de aprendizaje sobre 'La democracia en mi escuela'. ¿Cuál es el enfoque correcto?",
        opciones: [
            "A) Dictar los conceptos de democracia para que los memoricen.",
            "B) Construir una experiencia democrática auténtica (elección de representantes, asamblea, análisis de decisiones reales) articulada con la investigación sobre democracia como sistema político y forma de convivencia.",
            "C) Solo leer el artículo del libro de texto sobre democracia.",
            "D) Prohibir la discusión política por considerarla 'ideológica'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023 y Constitución. La democracia se aprende haciéndola. La articulación entre experiencia práctica y reflexión conceptual es clave del enfoque por competencias."
    },
    {
        id: 230,
        categoria: "Protección Infantil",
        pregunta: "La maestra de 4to grado observa que un estudiante falta frecuentemente los lunes sin justificación y regresa intranquilo. ¿Cuál es la actuación correcta?",
        opciones: [
            "A) Asumir que 'no quiere venir' y no indagar.",
            "B) Registrar el patrón, dialogar sensiblemente con el estudiante, coordinar con orientación y con la familia para comprender las causas, articular con servicios de protección si hay indicios de riesgo en el hogar.",
            "C) Bajar la nota por inasistencia sin indagar.",
            "D) Regañar al estudiante por las faltas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 (derecho a la educación y protección). Los patrones de ausentismo con señales emocionales son alertas que requieren indagación sensible y articulación con orientación y servicios de protección."
    },
    {
        id: 231,
        categoria: "Inclusión",
        pregunta: "En 2do grado, un estudiante zurdo tiene dificultades con los útiles estandarizados (tijeras, sacapuntas). ¿Qué debe hacer la maestra?",
        opciones: [
            "A) Exigirle usar los útiles 'con la otra mano'.",
            "B) Gestionar útiles adaptados para zurdos, enseñar explícitamente técnicas ajustadas, acomodar su ubicación para favorecer su comodidad y considerar su lateralidad al planificar.",
            "C) Obligarlo a cambiar su lateralidad.",
            "D) Ignorar sus dificultades específicas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. La lateralidad es parte de la diversidad individual. Las adecuaciones (útiles, técnicas, ubicación) son obligatorias. La imposición de cambio de lateralidad es una práctica obsoleta y dañina."
    },
    {
        id: 232,
        categoria: "Ética",
        pregunta: "La maestra de 5to grado se entera de que una decisión del centro educativo podría afectar injustamente a los estudiantes. ¿Cuál es la actuación correcta?",
        opciones: [
            "A) Guardar silencio para no meterse en problemas.",
            "B) Canalizar su preocupación por los mecanismos institucionales (reunión de docentes, equipo de gestión, APMAE, distrito), fundamentando pedagógica y normativamente su planteamiento en beneficio de los estudiantes.",
            "C) Organizar una protesta pública contra el centro.",
            "D) Divulgar la situación en redes sociales."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. El principio rector es el interés superior del niño. La ética profesional incluye el cuestionamiento fundado mediante canales institucionales legítimos."
    },
    {
        id: 233,
        categoria: "Gestión de Aula",
        pregunta: "En 1er grado, la maestra implementa el uso de los 'semáforos emocionales' (verde-amarillo-rojo). ¿Cuál es el propósito pedagógico?",
        opciones: [
            "A) Clasificar a los estudiantes en 'buenos' y 'malos'.",
            "B) Una herramienta visual que facilita a los estudiantes identificar su estado emocional, comunicarlo y elegir estrategias de regulación, desarrollando competencias socioemocionales.",
            "C) Un sistema para sancionar comportamientos.",
            "D) Una decoración sin función pedagógica."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023 (dimensión socioemocional). Los semáforos emocionales son herramientas de identificación, comunicación y regulación emocional, no instrumentos clasificatorios ni sancionatorios."
    },
    {
        id: 234,
        categoria: "Convivencia",
        pregunta: "La maestra de 4to grado detecta un conflicto entre dos familias que se traslada al aula (los hijos se evitan mutuamente). ¿Qué debe hacer?",
        opciones: [
            "A) Obligar a los estudiantes a trabajar juntos 'hasta que se lleven bien'.",
            "B) Generar en el aula un ambiente respetuoso y profesional, no trasladar a los niños el conflicto adulto, trabajar gradualmente la inclusión mutua mediante actividades grupales cuidadosamente diseñadas.",
            "C) Separarlos completamente durante todo el año.",
            "D) Pedirles que 'resuelvan entre ellos' lo que sus padres no pueden."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Convivencia Escolar. Los niños no deben cargar conflictos adultos. El aula genera su propio ambiente profesional y busca la inclusión mutua sin imposición ni separación permanente."
    },
    {
        id: 235,
        categoria: "Alfabetización",
        pregunta: "En 2do grado, un estudiante lee en voz alta con fluidez pero no puede responder sobre el contenido del texto. ¿Cuál es la interpretación correcta?",
        opciones: [
            "A) Dominar la lectura significa leer fluidamente en voz alta.",
            "B) La fluidez oral sin comprensión es lectura mecánica, no lectura comprensiva. Debe trabajar explícitamente estrategias de comprensión (antes, durante y después de la lectura) con textos significativos.",
            "C) Bajarle la nota por no entender.",
            "D) Ignorar la comprensión y solo reforzar la velocidad lectora."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. La lectura es construcción de significado. La fluidez oral sin comprensión es insuficiente. Las estrategias de comprensión se enseñan explícitamente en los tres momentos de la lectura."
    },
    {
        id: 236,
        categoria: "Evaluación",
        pregunta: "La maestra de 6to grado planifica la evaluación de competencias ciudadanas. ¿Cuál es el instrumento más pertinente?",
        opciones: [
            "A) Una prueba escrita sobre definiciones de democracia.",
            "B) Registro de observación sistemática de conductas, dilemas éticos y casos para analizar, proyectos participativos con rúbrica, autoevaluación y coevaluación sobre prácticas ciudadanas reales.",
            "C) Memorizar los deberes y derechos constitucionales.",
            "D) Solo un dibujo sobre la patria."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. Las competencias ciudadanas se evalúan en la práctica de la ciudadanía mediante dilemas, proyectos participativos, observación de conductas y reflexión, no con exámenes memorísticos."
    },
    {
        id: 237,
        categoria: "Planificación",
        pregunta: "La maestra de 3er grado debe planificar la articulación con el Departamento de Orientación y Psicología. ¿Cuál es el enfoque correcto?",
        opciones: [
            "A) Derivar todos los casos difíciles al departamento sin seguimiento.",
            "B) Trabajar colaborativamente con orientación: compartir observaciones, participar en los planes individuales, implementar en el aula las estrategias acordadas, y hacer seguimiento conjunto.",
            "C) Ignorar al departamento por considerarlo 'innecesario'.",
            "D) Solo contactarlos cuando haya problemas graves."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024 y Manual de Convivencia. El trabajo colaborativo con orientación es parte del enfoque integral. La articulación implica información compartida, planes conjuntos y seguimiento mutuo."
    },
    {
        id: 238,
        categoria: "Ética",
        pregunta: "La maestra de 2do grado siente que un contenido que debe enseñar va contra sus creencias personales. ¿Cuál es la actuación correcta?",
        opciones: [
            "A) Omitir el contenido porque va contra sus creencias.",
            "B) Enseñar el contenido curricular oficial de manera profesional e integral, distinguiendo sus creencias personales del rol docente; canalizar cualquier desacuerdo por vías institucionales legítimas.",
            "C) Enseñar el contenido distorsionado según sus creencias.",
            "D) Criticar el currículo oficial ante los estudiantes."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. El servidor docente implementa el currículo oficial con profesionalismo. Los desacuerdos personales se canalizan institucionalmente, no imponiendo criterios personales a los estudiantes."
    },
    {
        id: 239,
        categoria: "Gestión de Aula",
        pregunta: "En 5to grado, varios estudiantes usan celulares a escondidas durante la clase. ¿Cuál es la actuación correcta?",
        opciones: [
            "A) Confiscar los celulares permanentemente.",
            "B) Dialogar con el grupo sobre la normativa del centro respecto a celulares, construir acuerdos sobre su uso pedagógico cuando corresponda, trabajar la autorregulación y la ciudadanía digital.",
            "C) Castigar a todos los que tengan celular.",
            "D) Permitir el uso libre sin ningún acuerdo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Convivencia Escolar. El uso de dispositivos se regula institucionalmente, se construyen acuerdos de uso pedagógico y se forma en ciudadanía digital, más que mediante confiscación punitiva."
    },
    {
        id: 240,
        categoria: "Inclusión",
        pregunta: "En 6to grado, una estudiante con discapacidad auditiva severa usa lengua de señas. La maestra no domina lengua de señas. ¿Qué debe hacer?",
        opciones: [
            "A) Asumir que la estudiante 'se las arregle' como pueda.",
            "B) Solicitar al centro y al distrito los apoyos especializados (intérprete, formación docente, recursos), aprender señas básicas, usar múltiples estrategias de acceso (visual, escrito, gestual) y articular con orientación.",
            "C) Excluir a la estudiante de las clases orales.",
            "D) Pedir su traslado a un centro 'especializado'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024 y Ley 136-03. La inclusión de estudiantes sordos requiere apoyos especializados, formación docente y múltiples estrategias de acceso, gestionados institucionalmente."
    },
    {
        id: 241,
        categoria: "Convivencia",
        pregunta: "La maestra de 3er grado implementa 'palabras mágicas' (por favor, gracias, permiso) como parte del trabajo de convivencia. ¿Cuál es el enfoque correcto?",
        opciones: [
            "A) Obligar a repetirlas mecánicamente sin comprensión.",
            "B) Trabajar su significado, modelarlas auténticamente, generar situaciones donde tengan sentido real, y conectarlas con el valor del respeto y el cuidado mutuo, más que imponerlas como fórmulas vacías.",
            "C) Premiar materialmente cada uso.",
            "D) Castigar cuando no las usen."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023 y Manual de Convivencia. La formación en cortesía auténtica requiere comprensión, modelaje y situaciones significativas, no repetición mecánica ni sistema de premios/castigos."
    },
    {
        id: 242,
        categoria: "Alfabetización",
        pregunta: "En 1er grado, la maestra realiza lectura grupal de cuentos. ¿Cuál es el enfoque correcto durante la lectura?",
        opciones: [
            "A) Leer sin interrupciones y evaluar después con un cuestionario.",
            "B) Modelar lectura expresiva, hacer pausas para anticipar, verificar comprensión, conectar con experiencias, permitir intervenciones, y construir colectivamente el sentido del texto.",
            "C) Solo señalar cada palabra para que los estudiantes la lean.",
            "D) Hacer que los estudiantes lean todos en voz alta a la vez."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. La lectura mediada es una práctica didáctica que modela estrategias de comprensión, genera diálogo y construye colectivamente el sentido, no solo la decodificación."
    },
    {
        id: 243,
        categoria: "Evaluación",
        pregunta: "La maestra de 4to grado diseña una evaluación oral. ¿Cuál es la característica correcta de una evaluación oral formativa?",
        opciones: [
            "A) Preguntas improvisadas sobre temas aleatorios.",
            "B) Propósito claro, criterios explícitos compartidos con el estudiante, situaciones comunicativas auténticas, valoración con rúbrica, retroalimentación específica y ambiente libre de ansiedad.",
            "C) Preguntas trampa para 'confundir' al estudiante.",
            "D) Evaluación sin criterios, basada en 'impresión general'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. Las evaluaciones orales formativas tienen propósito, criterios, autenticidad, rúbrica, retroalimentación y ambiente respetuoso, no son improvisaciones ni trampas."
    },
    {
        id: 244,
        categoria: "Planificación",
        pregunta: "La maestra de 5to grado recibe indicaciones del distrito de incorporar temáticas ambientales. ¿Cuál es el enfoque correcto?",
        opciones: [
            "A) Dar una clase aislada sobre 'cuidado ambiental' el Día de la Tierra.",
            "B) Integrar la educación ambiental transversalmente en situaciones de aprendizaje de múltiples áreas (Ciencias, Sociales, Lengua, Matemática), con proyectos de impacto real en el entorno.",
            "C) Cambiar todo el currículo por temas ambientales.",
            "D) Ignorar las indicaciones por considerarlas 'extras'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. La educación ambiental es transversal en el currículo, integrada en múltiples áreas, con proyectos de impacto auténtico en el entorno."
    },
    {
        id: 245,
        categoria: "Protección Infantil",
        pregunta: "La maestra de 6to grado nota que una estudiante adelgazó visiblemente y rechaza comer. ¿Cuál es la actuación correcta?",
        opciones: [
            "A) Ignorar la situación porque 'es cosa de niñas'.",
            "B) Observar con sensibilidad, registrar lo observado, notificar al equipo de orientación para evaluación, articular con la familia de forma cuidadosa y referir a servicios de salud especializados si procede.",
            "C) Presionar a la estudiante para que coma delante de todos.",
            "D) Comentar el caso con otros estudiantes."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03. Las señales de trastornos alimentarios son de salud y requieren abordaje especializado interdisciplinar (familia, orientación, salud), no presión pública ni exposición."
    },
    {
        id: 246,
        categoria: "Ética",
        pregunta: "La maestra de 1er grado percibe que el centro no dispone adecuadamente de los fondos asignados a material didáctico. ¿Qué corresponde?",
        opciones: [
            "A) Callar para mantener la armonía laboral.",
            "B) Consultar transparentemente la situación con la dirección, y si se confirman irregularidades, canalizar formalmente ante las instancias correspondientes (distrito, regional), documentando con rigor.",
            "C) Denunciar públicamente sin evidencia.",
            "D) Apropiarse de materiales también para 'no quedarse atrás'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. El servidor público tiene deber de denunciar irregularidades en el uso de recursos públicos. El proceso es formal, documentado y por canales institucionales."
    },
    {
        id: 247,
        categoria: "Gestión de Aula",
        pregunta: "En 2do grado, la maestra planifica el uso del tiempo para la recuperación pedagógica de estudiantes en 'EP'. ¿Cuál es el enfoque correcto?",
        opciones: [
            "A) Quitarles el recreo para que 'recuperen'.",
            "B) Integrar las estrategias de apoyo en momentos regulares del aula (estaciones, tutorías entre pares, apoyos diferenciados), coordinar apoyos extras según recursos del centro, respetando el derecho al juego y descanso.",
            "C) Extender la jornada diaria solo para ellos.",
            "D) Enviar las recuperaciones como tareas adicionales a casa."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 (derecho al descanso y juego) y Ordenanza 04-2023. La recuperación pedagógica se integra en el aula regular. No se vulneran derechos fundamentales del niño para 'compensar' dificultades de aprendizaje."
    },
    {
        id: 248,
        categoria: "Inclusión",
        pregunta: "En 4to grado, un estudiante trans (que vive como niño habiendo sido asignado femenino al nacer) solicita usar el baño de varones. La familia lo apoya. ¿Cuál es la actuación correcta?",
        opciones: [
            "A) Negar la solicitud por 'mantener el orden' tradicional.",
            "B) Actuar en coordinación con la familia, el equipo de orientación y la dirección para acompañar la identidad del estudiante conforme al principio del interés superior del niño y al derecho a la no discriminación.",
            "C) Hacer público el caso ante toda la comunidad.",
            "D) Pedir el traslado del estudiante a otro centro."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 (interés superior del niño, no discriminación), Ordenanza 05-2024. La coordinación institucional y el respeto a la identidad del niño en diálogo con la familia son la vía correcta."
    },
    {
        id: 249,
        categoria: "Evaluación",
        pregunta: "La maestra de 6to grado quiere evaluar la capacidad de trabajo colaborativo. ¿Cuál es el instrumento apropiado?",
        opciones: [
            "A) Una prueba escrita individual sobre qué es trabajar en equipo.",
            "B) Observación sistemática con rúbrica sobre roles, responsabilidad individual, aportes al equipo, respeto mutuo, resolución de conflictos y logro de objetivos compartidos, durante situaciones auténticas.",
            "C) Una lista de cotejo de comportamientos superficiales.",
            "D) La nota grupal del producto final únicamente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. Las competencias sociocognitivas se evalúan mediante observación sistemática con rúbrica en situaciones auténticas de colaboración, no con pruebas escritas sobre definiciones."
    },
    {
        id: 250,
        categoria: "Planificación",
        pregunta: "La maestra de 3er grado recibe un estudiante transferido a mitad de año. ¿Cuál es la actuación correcta?",
        opciones: [
            "A) Asumir que se adapte al grupo sin más.",
            "B) Realizar una recepción cálida, diagnosticar sus saberes previos y niveles, revisar registros anteriores, dialogar con la familia, planificar adecuaciones para su incorporación progresiva al currículo en curso.",
            "C) Aplicarle exámenes de los contenidos 'que se perdió'.",
            "D) Ignorar su situación específica."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024 y Adecuación Curricular 2023. La incorporación de un estudiante transferido requiere recepción, diagnóstico, diálogo con familia y adecuaciones para incorporación progresiva."
    },
    {
        id: 251,
        categoria: "Alfabetización",
        pregunta: "En 1er grado, la maestra promueve juegos de palabras, rimas y adivinanzas. ¿Cuál es el propósito pedagógico?",
        opciones: [
            "A) Solo entretener a los estudiantes.",
            "B) Desarrollar conciencia fonológica, disfrute lúdico del lenguaje, memoria verbal, creatividad y sensibilidad poética, todos componentes del desarrollo lingüístico y alfabetizador.",
            "C) Ocupar tiempo cuando no hay actividad.",
            "D) Aprender vocabulario técnico."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. Los juegos verbales desarrollan conciencia fonológica, disfrute del lenguaje y sensibilidad poética, componentes centrales de la alfabetización inicial."
    },
    {
        id: 252,
        categoria: "Convivencia",
        pregunta: "En 5to grado, un estudiante se burla repetidamente del acento de un compañero de otra provincia. ¿Cuál es la actuación correcta?",
        opciones: [
            "A) Ignorar el hecho porque 'son cosas de niños'.",
            "B) Intervenir pedagógicamente abordando la diversidad lingüística como riqueza, trabajar explícitamente el respeto a las variantes dialectales, generar conciencia sobre la discriminación, activar protocolos si persiste.",
            "C) Reírse también del acento para 'normalizar'.",
            "D) Separar al compañero afectado del grupo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024 y Manual de Convivencia. La diversidad lingüística es riqueza. Las burlas por acento son formas de discriminación que requieren intervención pedagógica explícita."
    },
    {
        id: 253,
        categoria: "Inclusión",
        pregunta: "En 2do grado, un estudiante con talento excepcional en música quiere presentar sus canciones. La maestra no es músico. ¿Qué debe hacer?",
        opciones: [
            "A) Negar la oportunidad por 'no ser música'.",
            "B) Abrir espacios para que el estudiante comparta su talento, articular con el docente de Educación Artística, valorar sus aportes como enriquecimiento del aula, y gestionar apoyos externos si es posible.",
            "C) Prohibirle mencionar su interés musical.",
            "D) Limitar sus presentaciones a las fiestas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. Los talentos y altas capacidades requieren espacios de desarrollo. La articulación con especialistas y el reconocimiento en el aula son parte de la inclusión educativa."
    },
    {
        id: 254,
        categoria: "Ética",
        pregunta: "La maestra de 4to grado descubre que un estudiante hizo dibujos con contenido sexual explícito en su cuaderno. ¿Cuál es la actuación correcta?",
        opciones: [
            "A) Castigarlo públicamente por los dibujos.",
            "B) Abordar la situación con sensibilidad, en privado, notificar al equipo de orientación para evaluación (puede indicar exposición inadecuada, riesgo o abuso), coordinar con la familia de forma sensible.",
            "C) Exhibir los dibujos ante el grupo.",
            "D) Ignorar los dibujos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 y Manual de Convivencia. Los contenidos sexuales explícitos en producciones infantiles son señales de alerta que requieren evaluación especializada y protocolo de protección, no castigo ni exposición."
    },
    {
        id: 255,
        categoria: "Gestión de Aula",
        pregunta: "La maestra de 1er grado observa que un estudiante se duerme recurrentemente en clase. ¿Cuál es la actuación correcta?",
        opciones: [
            "A) Castigarlo por dormirse.",
            "B) Indagar sensiblemente posibles causas (sueño insuficiente, condiciones de salud, alimentación, situación familiar), coordinar con la familia, articular con orientación y servicios de salud si corresponde.",
            "C) Gritarle para que se despierte.",
            "D) Bajarle la nota por 'dormir en clase'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 (protección integral). El sueño excesivo en un niño puede indicar problemas de salud, sueño, alimentación o situaciones familiares, que requieren indagación sensible y articulación especializada."
    },
    {
        id: 256,
        categoria: "Planificación",
        pregunta: "La maestra de 6to grado planifica el cierre de una unidad didáctica. ¿Cuál es la función pedagógica del cierre?",
        opciones: [
            "A) Aplicar el examen y terminar con la unidad.",
            "B) Sistematizar aprendizajes, reflexionar metacognitivamente sobre los procesos, socializar producciones, autoevaluar el desempeño personal y grupal, y conectar con aprendizajes futuros.",
            "C) Celebrar con una fiesta sin reflexión pedagógica.",
            "D) Asignar tarea extra para la casa."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. El cierre de unidades sistematiza, reflexiona metacognitivamente, socializa y conecta con aprendizajes futuros, es fase pedagógica intencionalmente diseñada."
    },
    {
        id: 257,
        categoria: "Protección Infantil",
        pregunta: "La maestra de 3er grado ve que un estudiante llega con ropa de adulto muy grande y zapatos rotos. La familia ha quedado en situación de calle. ¿Cuál es la actuación correcta?",
        opciones: [
            "A) Asumir que no puede hacer nada pues es situación familiar.",
            "B) Notificar al equipo de orientación y dirección para activar apoyos institucionales y referimientos a servicios sociales del Estado, proteger la dignidad del estudiante en el aula, articular con la familia de forma sensible.",
            "C) Comentar la situación con otros padres.",
            "D) Excluir al estudiante hasta que 'esté presentable'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03. Las situaciones de vulnerabilidad extrema requieren activación inmediata de apoyos institucionales y referimientos a servicios sociales del Estado. La dignidad del estudiante se protege."
    },
    {
        id: 258,
        categoria: "Evaluación",
        pregunta: "La maestra de 5to grado integra la autoevaluación al finalizar cada unidad. ¿Cuál es la pregunta formativa más valiosa para los estudiantes?",
        opciones: [
            "A) '¿Cuánto te mereces de nota?'",
            "B) '¿Qué aprendí?, ¿Qué me costó?, ¿Qué estrategias usé?, ¿Qué haría diferente la próxima vez?, ¿Cómo me sentí?'",
            "C) '¿Te portaste bien?'",
            "D) '¿Te gustó la unidad?'"
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La autoevaluación formativa desarrolla metacognición mediante preguntas sobre aprendizajes, procesos, estrategias, mejoras y dimensión emocional, no sobre calificaciones o comportamiento."
    },
    {
        id: 259,
        categoria: "Alfabetización",
        pregunta: "En 2do grado, un estudiante escribe con letra muy irregular y desigual. La familia se preocupa. ¿Cuál es la respuesta profesional correcta?",
        opciones: [
            "A) Hacer planas diarias de caligrafía.",
            "B) Considerar que la caligrafía se consolida gradualmente con el desarrollo motriz, trabajar actividades motrices finas articuladas con la producción significativa, descartar posibles dificultades específicas con apoyo de orientación si persisten.",
            "C) Bajar la nota por 'mala letra'.",
            "D) Ignorar completamente la dimensión gráfica."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. La caligrafía es parte del desarrollo motriz fino que se consolida gradualmente. Se trabaja articuladamente con la producción significativa, no con planas aisladas ni sanciones."
    },
    {
        id: 260,
        categoria: "Inclusión",
        pregunta: "La maestra de 4to grado trabaja con un estudiante que tiene un cuidador por condición médica permanente. ¿Cómo articular el trabajo pedagógico?",
        opciones: [
            "A) Delegar en el cuidador toda la atención del estudiante.",
            "B) Mantener la responsabilidad pedagógica principal, coordinar roles con el cuidador, centrar la enseñanza en el estudiante, garantizar su participación plena y las adecuaciones pertinentes.",
            "C) Ignorar al cuidador y tratar al estudiante como 'normal'.",
            "D) Aislarlos juntos del resto del aula."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. La presencia de cuidadores/asistentes apoya la inclusión. La responsabilidad pedagógica permanece con el docente, quien coordina roles y garantiza el protagonismo del estudiante."
    },

 {
        id: 261,
        categoria: "Planificación",
        pregunta: "La maestra de 2do grado debe planificar una unidad donde integra saberes previos de los estudiantes. ¿Cuál es la estrategia correcta?",
        opciones: [
            "A) Asumir que no saben nada sobre el tema.",
            "B) Activar y recoger los saberes previos mediante estrategias diversas (lluvia de ideas, dibujos, diálogos, preguntas generadoras), articularlos con los nuevos aprendizajes y revisarlos al final de la unidad.",
            "C) Solo preguntar al inicio 'quién sabe sobre el tema'.",
            "D) Ignorar los saberes previos e imponer los nuevos contenidos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. La activación de saberes previos es fase pedagógica esencial. Se realiza con estrategias diversas, se articula con los nuevos aprendizajes y se revisa al cierre."
    },
    {
        id: 262,
        categoria: "Convivencia",
        pregunta: "En 1er grado, un estudiante llora porque no quiere ir al recreo. Dice que 'los grandes le dan miedo'. ¿Qué debe hacer la maestra?",
        opciones: [
            "A) Obligarlo a ir al recreo 'para que supere el miedo'.",
            "B) Acoger emocionalmente al estudiante, indagar sensiblemente qué ocurre (posible intimidación), coordinar con los docentes de acompañamiento del recreo, articular con orientación y trabajar con estudiantes mayores sobre convivencia.",
            "C) Dejarlo solo en el aula durante el recreo.",
            "D) Castigarlo por 'no querer integrarse'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Convivencia y Ley 136-03. El miedo persistente puede indicar situaciones de intimidación que requieren atención institucional. La acogida emocional y la articulación interdisciplinar son la vía correcta."
    },
    {
        id: 263,
        categoria: "Evaluación",
        pregunta: "La maestra de 6to grado aplica diferentes tipos de evaluación a lo largo del año. ¿Cuál es la articulación correcta?",
        opciones: [
            "A) Usar solo evaluación sumativa al final de cada trimestre.",
            "B) Combinar evaluación diagnóstica (al inicio), formativa (continua durante el proceso), sumativa (al cierre de unidades/períodos), autoevaluación y coevaluación, articuladas con los indicadores del grado.",
            "C) Aplicar solo un examen final al terminar el año.",
            "D) Basarse solo en la subjetividad personal."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La evaluación por competencias integra momentos (diagnóstica, formativa, sumativa) y agentes (heteroevaluación, autoevaluación, coevaluación), articulados con los indicadores."
    },
    {
        id: 264,
        categoria: "Ética",
        pregunta: "La maestra de 3er grado debe enseñar un tema sobre el cual tiene conocimiento limitado. ¿Cuál es la actuación correcta?",
        opciones: [
            "A) Improvisar con información errada para 'cumplir con el plan'.",
            "B) Prepararse rigurosamente (consultar fuentes confiables, el Diseño Curricular, materiales oficiales, colegas), planificar con base en fuentes verificadas, y reconocer ante los estudiantes cuando algo requiere más indagación conjunta.",
            "C) Saltarse el tema.",
            "D) Pedirle a otro docente que lo enseñe sin razón justificada."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. La formación continua y la preparación rigurosa son deberes profesionales. Reconocer los límites del propio conocimiento e indagar con los estudiantes es práctica honesta y pedagógica."
    },
    {
        id: 265,
        categoria: "Gestión de Aula",
        pregunta: "La maestra de 4to grado establecerá los tiempos de respuesta durante las preguntas en clase. ¿Cuál es el enfoque correcto?",
        opciones: [
            "A) Exigir respuestas inmediatas sin tiempo de pensamiento.",
            "B) Dar 'tiempo de espera' suficiente tras la pregunta, permitir pensar individualmente, ofrecer oportunidades de diálogo en parejas antes de la respuesta grupal, y valorar respuestas reflexivas sobre respuestas rápidas.",
            "C) Siempre llamar al primer estudiante que levante la mano.",
            "D) Preguntar solo a los 'más rápidos'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. El tiempo de espera es estrategia pedagógica que favorece el pensamiento reflexivo, la participación equitativa y el desarrollo cognitivo, superior a la dinámica de respuestas inmediatas."
    },
    {
        id: 266,
        categoria: "Inclusión",
        pregunta: "En 5to grado, una estudiante con discapacidad intelectual leve participa en las clases. Los compañeros tienden a hacer las tareas por ella. ¿Qué debe hacer la maestra?",
        opciones: [
            "A) Permitir que sus compañeros hagan las tareas por ella.",
            "B) Promover su autonomía mediante adecuaciones adecuadas, orientar a los compañeros sobre el rol de apoyo (no sustitución), celebrar sus logros propios, y hacer visibles sus aportes al grupo.",
            "C) Aislarla para 'protegerla' de los demás.",
            "D) Asignarle trabajos totalmente distintos al resto."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. La inclusión busca desarrollar autonomía. La sustitución por pares, aunque bien intencionada, obstaculiza el aprendizaje propio. El rol de apoyo debe diferenciarse de la sustitución."
    },
    {
        id: 267,
        categoria: "Alfabetización",
        pregunta: "En 1er grado, la maestra observa que una estudiante tiene hermano mayor que le 'enseña' en casa de forma mecánica (planas, silabeo). ¿Cuál es la actuación correcta?",
        opciones: [
            "A) Prohibir cualquier intervención familiar en el proceso.",
            "B) Dialogar con la familia explicando el enfoque pedagógico oficial, sugerir formas significativas de apoyo en casa (lectura compartida, juegos verbales, producción auténtica), valorar el interés familiar y reorientarlo.",
            "C) Ignorar la situación.",
            "D) Criticar a la familia por 'enseñar mal'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. La articulación escuela-familia es clave. Se valora el interés familiar reorientándolo hacia prácticas significativas, sin prohibir ni criticar."
    },
    {
        id: 268,
        categoria: "Protección Infantil",
        pregunta: "La maestra de 2do grado observa que un estudiante tiene marcas de cigarrillo en el brazo. Al preguntar, el niño mira al suelo. ¿Cuál es la actuación?",
        opciones: [
            "A) Asumir que fue un accidente y no hacer más.",
            "B) Documentar con precisión la observación, acoger al niño sin interrogarlo extensivamente, notificar urgentemente al equipo de orientación y dirección para activar el protocolo de referimiento al CONANI.",
            "C) Confrontar directamente a la familia.",
            "D) Comentar con otros docentes el caso."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03. Las marcas de cigarrillo son indicadores graves de maltrato físico. La activación inmediata del protocolo institucional y del CONANI es obligatoria, con resguardo de la integridad del niño."
    },
    {
        id: 269,
        categoria: "Planificación",
        pregunta: "La maestra de 6to grado planifica la enseñanza de la geometría. ¿Cuál es la estrategia correcta?",
        opciones: [
            "A) Dictar las definiciones de figuras geométricas para memorizarlas.",
            "B) Partir de la observación y manipulación de formas del entorno, experimentar con materiales concretos, progresar a representaciones gráficas y luego a la conceptualización y generalización formal.",
            "C) Pedir que copien figuras sin análisis.",
            "D) Mostrar un video sin actividades prácticas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. La geometría se enseña desde la experiencia con formas reales, progresando a representaciones y conceptualización, coherente con el desarrollo cognitivo del ciclo."
    },
    {
        id: 270,
        categoria: "Ética",
        pregunta: "La maestra de 5to grado es solicitada para firmar un certificado de buena conducta de un estudiante, cuando sabe que ha tenido conductas preocupantes. ¿Cuál es la actuación correcta?",
        opciones: [
            "A) Firmar el certificado por 'no perjudicarlo'.",
            "B) Expresar con veracidad y profesionalismo lo que consta en los registros oficiales, coordinar con la dirección para el formato adecuado, y no emitir certificaciones falsas.",
            "C) Firmar dejando claro a otros colegas su incomodidad.",
            "D) Rechazar cualquier solicitud de certificación."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. Los documentos oficiales deben reflejar la realidad. Las certificaciones falsas son falta ética y pueden tener implicaciones legales. La honestidad documental es un valor irrenunciable."
    },
    {
        id: 271,
        categoria: "Gestión de Aula",
        pregunta: "En 3er grado, la maestra debe formar los equipos para un proyecto. ¿Cuál es el criterio correcto?",
        opciones: [
            "A) Dejar que los estudiantes se agrupen por amistad únicamente.",
            "B) Formar grupos heterogéneos (género, desempeño, estilos de aprendizaje, lenguas) que enriquezcan la interacción, garantizando equidad y evitando agrupaciones estigmatizantes, con rotación en distintos proyectos.",
            "C) Formar grupos 'homogéneos' por nivel de desempeño.",
            "D) Siempre el mismo agrupamiento durante todo el año."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024 y Adecuación Curricular 2023. La heterogeneidad intencional enriquece el aprendizaje y favorece la inclusión. La rotación diversifica las interacciones a lo largo del año."
    },
    {
        id: 272,
        categoria: "Convivencia",
        pregunta: "La maestra de 4to grado detecta que un estudiante se esconde comida en la mochila porque dice que 'en casa no hay'. ¿Cuál es la actuación correcta?",
        opciones: [
            "A) Castigarlo por 'robar' comida del centro.",
            "B) Acoger la situación con sensibilidad, garantizar acceso digno a la alimentación escolar, notificar al equipo de orientación para evaluar la situación familiar, articular apoyos sociales sin exposición estigmatizante.",
            "C) Exponerlo ante el grupo como 'ladrón'.",
            "D) Ignorar la situación."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 (derecho a la alimentación). La inseguridad alimentaria es vulneración de derechos que exige apoyo institucional y articulación con servicios sociales, no sanción."
    },
    {
        id: 273,
        categoria: "Alfabetización",
        pregunta: "En 2do grado, la maestra observa que un estudiante siempre pregunta '¿cómo se escribe esta palabra?' antes de escribirla. ¿Qué revela esto y qué hacer?",
        opciones: [
            "A) Mala autonomía; castigarlo por preguntar tanto.",
            "B) Puede indicar dependencia excesiva de la maestra; promover la autoconfianza como escritor, permitir escribir con sus hipótesis, revisar después con estrategias de consulta (carteles de aula, diccionario), construir seguridad en la producción.",
            "C) Prohibirle preguntar hasta que 'se arriesgue solo'.",
            "D) Escribir siempre todas las palabras por él."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. La autonomía escritora se construye permitiendo producir con las hipótesis actuales, y ofreciendo estrategias de consulta. La dependencia excesiva se supera con autoconfianza construida pedagógicamente."
    },
    {
        id: 274,
        categoria: "Inclusión",
        pregunta: "En 6to grado, un estudiante tiene padres divorciados con custodia compartida conflictiva. Ambos padres dan indicaciones contradictorias sobre el estudiante. ¿Cuál es la actuación correcta?",
        opciones: [
            "A) Atender solo al padre 'más razonable'.",
            "B) Solicitar documentación legal sobre custodia, aplicar lo que esté legalmente establecido, actuar con equidad hacia ambos padres en lo que le corresponde al centro, priorizar el interés superior del niño.",
            "C) Tomar partido por uno de los padres.",
            "D) Ignorar el conflicto familiar."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 (interés superior del niño). Las situaciones de custodia se manejan con documentación legal. El centro actúa con equidad y según lo legalmente establecido, priorizando siempre el interés del niño."
    },
    {
        id: 275,
        categoria: "Evaluación",
        pregunta: "La maestra de 1er grado aplica la evaluación de salida del primer año escolar. ¿Cuál es el enfoque correcto?",
        opciones: [
            "A) Un examen estandarizado idéntico al que se aplica en Secundaria.",
            "B) Una evaluación integral, contextualizada y lúdica que recoja evidencias de los avances en las competencias del grado, integrando múltiples fuentes del año.",
            "C) Solo evaluar si sabe leer convencionalmente.",
            "D) Basarse solo en una prueba escrita de una hora."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La evaluación de cierre del grado es integral, contextualizada y adaptada al nivel, recogiendo evidencias acumuladas durante el año."
    },
    {
        id: 276,
        categoria: "Planificación",
        pregunta: "La maestra de 4to grado diseña la 'semana cultural' del aula. ¿Cuál es el propósito pedagógico correcto?",
        opciones: [
            "A) Presentar espectáculos sin articulación curricular.",
            "B) Articular aprendizajes de múltiples áreas (lengua, sociales, artes) en torno a manifestaciones culturales significativas, con investigación previa, producción auténtica y socialización con la comunidad.",
            "C) Suspender las clases durante la semana.",
            "D) Realizar actividades sin planificación."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. Las semanas culturales son oportunidades pedagógicas para articular aprendizajes en torno a manifestaciones culturales, con investigación, producción y socialización."
    },
    {
        id: 277,
        categoria: "Ética",
        pregunta: "La maestra de 2do grado usa material didáctico propio que compró con su dinero. Un padre le ofrece 'comprarle' todo el material para que lo regale a los estudiantes. ¿Cómo debe proceder?",
        opciones: [
            "A) Aceptar sin más porque 'son recursos para los estudiantes'.",
            "B) Agradecer y canalizar el apoyo institucionalmente (a través del centro, APMAE), para que beneficie a todos de manera transparente y equitativa, sin generar una relación de deuda personal.",
            "C) Aceptar el dinero directamente para 'administrarlo' ella.",
            "D) Rechazar todo apoyo externo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. Los apoyos a la comunidad educativa se canalizan institucionalmente con transparencia. Las relaciones económicas directas entre familias y docentes generan dependencias éticamente problemáticas."
    },
    {
        id: 278,
        categoria: "Gestión de Aula",
        pregunta: "En 5to grado, la maestra debe establecer los criterios de 'limpieza' del aula. ¿Cuál es el enfoque correcto?",
        opciones: [
            "A) Castigar a los estudiantes por dejar basura.",
            "B) Construir colectivamente los acuerdos de limpieza, establecer rutinas y responsabilidades rotativas, articular con competencias ciudadanas de corresponsabilidad, y educar en el cuidado del espacio común.",
            "C) Limpiar ella misma todo sin involucrar a los estudiantes.",
            "D) Pedir a los padres que limpien el aula."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Convivencia Escolar y Adecuación Curricular 2023. El cuidado del espacio común es aprendizaje ciudadano. Se construye con acuerdos, rutinas y responsabilidades rotativas, no con castigos."
    },
    {
        id: 279,
        categoria: "Inclusión",
        pregunta: "En 3er grado, un estudiante con trastorno del lenguaje tiene dificultades para expresarse oralmente aunque comprende bien. ¿Cuál es la adecuación correcta?",
        opciones: [
            "A) Exigirle que hable 'como los demás'.",
            "B) Ofrecer múltiples formatos de expresión (escrita, gráfica, gestual, tecnológica), tiempo adicional, apoyos comunicacionales, articular con orientación y terapia del lenguaje, valorar la comprensión del estudiante.",
            "C) Excluirlo de toda actividad oral.",
            "D) Bajarle la nota por no participar oralmente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. Los trastornos del lenguaje requieren adecuaciones comunicacionales específicas y múltiples formatos de expresión. La participación se garantiza mediante eliminación de barreras comunicacionales."
    },
    {
        id: 280,
        categoria: "Convivencia",
        pregunta: "La maestra de 6to grado observa el surgimiento de 'grupos' cerrados en el aula que excluyen a otros. ¿Qué debe hacer?",
        opciones: [
            "A) Aceptar la formación de grupos como 'natural'.",
            "B) Intervenir intencionalmente mediante formación rotativa de equipos heterogéneos, actividades que promuevan interacción diversa, trabajo explícito sobre inclusión y análisis crítico de dinámicas grupales.",
            "C) Eliminar todas las actividades grupales.",
            "D) Sancionar a 'los grupos'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Convivencia Escolar. La formación de grupos excluyentes requiere intervención pedagógica intencional para construir cohesión grupal y superar lógicas de exclusión, no aceptación pasiva ni sanción."
    },
    {
        id: 281,
        categoria: "Alfabetización",
        pregunta: "En 1er grado, la maestra usa el ambiente letrado del aula. ¿Cuál es el propósito pedagógico?",
        opciones: [
            "A) Decoración visual sin uso pedagógico.",
            "B) Poner al alcance de los estudiantes textos diversos con funciones claras (carteles de nombres, calendario, días, rutinas, palabras del campo léxico, textos producidos) que sirvan de referente para sus hipótesis.",
            "C) Tapar paredes para que el aula 'se vea llena'.",
            "D) Solo para impresionar a los visitantes."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. El ambiente letrado es recurso pedagógico clave. Textos funcionales al alcance de los estudiantes apoyan la construcción del sistema de escritura y sirven como referentes."
    },
    {
        id: 282,
        categoria: "Protección Infantil",
        pregunta: "La maestra de 4to grado recibe una solicitud no habitual de un padre para 'estar presente' en el aula durante todo el día 'para ver a su hijo'. ¿Cuál es la actuación correcta?",
        opciones: [
            "A) Permitirlo sin consultar nada más.",
            "B) Canalizar la solicitud con la dirección del centro, aplicar los protocolos de visita de familias, indagar los motivos y garantizar la protección y privacidad de todos los estudiantes del aula.",
            "C) Negarle rotundamente la entrada.",
            "D) Permitirle entrar sin autorización institucional."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 y Manual de Convivencia. Las visitas de familias siguen protocolos institucionales para proteger la privacidad y seguridad de todos los estudiantes, no solo de uno."
    },
    {
        id: 283,
        categoria: "Evaluación",
        pregunta: "La maestra de 5to grado registra evidencias de la competencia comunicativa. ¿Cuál es un conjunto apropiado de evidencias?",
        opciones: [
            "A) Solo calificaciones numéricas de exámenes escritos.",
            "B) Producciones escritas en distintos géneros, grabaciones de exposiciones orales, participación en diálogos y debates, lecturas comprensivas documentadas, registros de procesos de escritura y edición.",
            "C) Solo la asistencia y puntualidad.",
            "D) Calificaciones de otras áreas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023 y Ordenanza 01-2023. Las evidencias de la competencia comunicativa son diversas y multimodales: producciones escritas, orales, participaciones, lecturas, procesos."
    },
    {
        id: 284,
        categoria: "Planificación",
        pregunta: "La maestra de 1er grado planifica situaciones de aprendizaje manipulativas. ¿Cuál es el sustento pedagógico?",
        opciones: [
            "A) Entretener a los niños pequeños sin propósito.",
            "B) El aprendizaje en la infancia se construye desde la acción sobre objetos concretos, la manipulación y la experiencia sensorial, base para la progresiva abstracción.",
            "C) Evitar que los niños se aburran.",
            "D) Dejar de enseñar 'contenidos serios'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. La manipulación es fase esencial del desarrollo del pensamiento en la primera infancia. La abstracción se construye sobre la experiencia concreta, no la sustituye."
    },
    {
        id: 285,
        categoria: "Ética",
        pregunta: "La maestra de 2do grado advierte que su vestimenta habitual es cuestionada por un padre como 'inapropiada'. Ella considera que su vestimenta cumple con las normas del centro. ¿Cuál es la actuación correcta?",
        opciones: [
            "A) Ceder a la presión y cambiar su vestimenta personal.",
            "B) Mantener la vestimenta si cumple con las normativas institucionales, canalizar cualquier cuestionamiento por los mecanismos oficiales (dirección, distrito), y no aceptar juicios arbitrarios.",
            "C) Responder agresivamente al padre.",
            "D) Renunciar por el cuestionamiento."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023 y Constitución. El servidor docente cumple las normas institucionales. Los cuestionamientos personales arbitrarios se canalizan institucionalmente, no dando espacio a imposiciones subjetivas."
    },
    {
        id: 286,
        categoria: "Gestión de Aula",
        pregunta: "En 4to grado, la maestra implementa el aprendizaje basado en proyectos. Un estudiante pregunta 'para qué hacer esto si no viene en el examen'. ¿Cómo debe responder?",
        opciones: [
            "A) 'Tienes razón, volvamos a lo que viene en el examen'.",
            "B) Explicar que el aprendizaje tiene valor en sí mismo, que desarrolla competencias para la vida, y que los proyectos son formas auténticas de aprender y demostrar lo aprendido, articulados con la evaluación por competencias.",
            "C) Regañarlo por 'cuestionar'.",
            "D) Ignorar la pregunta."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. El aprendizaje por proyectos desarrolla competencias auténticas. La pregunta del estudiante es oportunidad para explicar el sentido del aprendizaje más allá del examen."
    },
    {
        id: 287,
        categoria: "Inclusión",
        pregunta: "En 6to grado, una estudiante viene de una familia donde 'la educación es para los hombres'. La estudiante está desmotivada. ¿Qué debe hacer la maestra?",
        opciones: [
            "A) Respetar la decisión familiar y no intervenir.",
            "B) Trabajar con sensibilidad cultural la importancia de la educación para todas las personas, articular con orientación para un plan de motivación y diálogo con la familia, promover la autoconfianza de la estudiante.",
            "C) Criticar a la familia frente a la estudiante.",
            "D) Ignorar la motivación de la estudiante."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 (derecho a la educación, no discriminación), Constitución. La educación es derecho universal que trasciende prejuicios. El diálogo respetuoso con la familia y el acompañamiento a la estudiante son la vía."
    },
    {
        id: 288,
        categoria: "Alfabetización",
        pregunta: "En 2do grado, la maestra planifica talleres de lectura. ¿Cuál es la estrategia correcta para promover la lectura?",
        opciones: [
            "A) Imponer un libro obligatorio y evaluar con examen.",
            "B) Ofrecer diversidad de textos, respetar los ritmos y elecciones individuales, generar conversaciones literarias, modelar estrategias lectoras, y celebrar la lectura como experiencia compartida.",
            "C) Castigar a los que no lean.",
            "D) Leer solo para evaluar."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. La formación lectora se logra con diversidad, respeto a ritmos, conversaciones literarias, modelaje y celebración, no con imposición y evaluación punitiva."
    },
    {
        id: 289,
        categoria: "Convivencia",
        pregunta: "La maestra de 3er grado planifica actividades para el 'Día de la Paz'. ¿Cuál es el enfoque correcto?",
        opciones: [
            "A) Una simple ceremonia con cantos sobre la paz.",
            "B) Una jornada que articule reflexión sobre la violencia y la paz, análisis de casos reales del aula y el entorno, producción de acciones concretas de construcción de paz, e integración con competencias ciudadanas.",
            "C) Cancelar las clases ese día.",
            "D) Sustituir las clases regulares con videos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023 y Manual de Convivencia. La educación para la paz es curricular y articula reflexión, análisis, acciones concretas e integración con competencias ciudadanas."
    },
    {
        id: 290,
        categoria: "Evaluación",
        pregunta: "La maestra de 4to grado aplica una evaluación escrita. Un estudiante termina muy rápido y su prueba está perfecta. ¿Qué debe hacer?",
        opciones: [
            "A) Sospechar automáticamente que copió y anularla.",
            "B) Valorar la evidencia según la rúbrica y criterios establecidos; si tiene fundamentos pedagógicos para considerar irregularidad, aplicar mecanismos de verificación (conversación, pregunta complementaria) sin acusaciones injustas.",
            "C) Descontar puntos por terminar rápido.",
            "D) Calificar con 'L' automáticamente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023 y Orden Departamental 22-2023. La evaluación se basa en criterios y evidencias. Las sospechas de irregularidad requieren fundamento y mecanismos respetuosos, no acusaciones injustas."
    },
    {
        id: 291,
        categoria: "Planificación",
        pregunta: "La maestra de 5to grado planifica la articulación de la educación física con otras áreas. ¿Cuál es el enfoque correcto?",
        opciones: [
            "A) Considerar Educación Física como área aislada.",
            "B) Articular cuando corresponda pedagógicamente: movimiento con matemáticas (medidas, patrones), con sociales (juegos tradicionales), con ciencias (cuerpo humano), respetando la especificidad de cada área.",
            "C) Eliminar la Educación Física por 'no académica'.",
            "D) Usarla solo como premio."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. La Educación Física tiene valor propio y puede articularse con otras áreas en proyectos integrados, desarrollando múltiples competencias de manera integral."
    },
    {
        id: 292,
        categoria: "Ética",
        pregunta: "La maestra de 1er grado detecta un error en un documento oficial que ya firmó. ¿Cuál es la actuación correcta?",
        opciones: [
            "A) Ocultar el error para 'no meterse en problemas'.",
            "B) Reportar inmediatamente el error a la dirección, solicitar la corrección formal del documento siguiendo los procedimientos institucionales, y asumir la responsabilidad profesional del ajuste.",
            "C) Alterar el documento sin autorización.",
            "D) Echar la culpa a otro colega."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. Los errores documentales se corrigen por procedimientos formales institucionales. La ocultación o alteración no autorizada son faltas graves. La responsabilidad profesional incluye enmendar errores."
    },
    {
        id: 293,
        categoria: "Gestión de Aula",
        pregunta: "En 2do grado, la maestra implementa el 'responsable del día' entre los estudiantes. ¿Cuál es el propósito?",
        opciones: [
            "A) Tener un 'ayudante' que le ahorre trabajo a la maestra.",
            "B) Desarrollar responsabilidad, autonomía, liderazgo positivo rotativo, sentido de pertenencia y competencias ciudadanas, dando a cada estudiante la experiencia de servir a la comunidad del aula.",
            "C) Premiar solo a los estudiantes 'portados bien'.",
            "D) Seleccionar siempre al mismo estudiante."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023 y Manual de Convivencia. Los roles rotativos desarrollan responsabilidad, autonomía y ciudadanía. Son dispositivos pedagógicos de formación integral, accesibles a todos los estudiantes."
    },
    {
        id: 294,
        categoria: "Inclusión",
        pregunta: "En 4to grado, un estudiante con dificultades económicas graves no puede traer recursos para una actividad. ¿Cuál es la actuación correcta?",
        opciones: [
            "A) Excluirlo de la actividad.",
            "B) Prever recursos del centro disponibles, adaptar la actividad para que no dependa del aporte familiar, articular apoyos discretos, y diseñar actividades accesibles económicamente para todas las familias.",
            "C) Exponerlo ante el grupo por no traer material.",
            "D) Pedir a los compañeros que 'le presten'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024 y Ley 136-03. La equidad educativa exige diseñar actividades accesibles para todas las familias, sin generar exclusión por condición económica ni exposición estigmatizante."
    },
    {
        id: 295,
        categoria: "Convivencia",
        pregunta: "La maestra de 6to grado recibe la noticia de que un estudiante perdió a un familiar cercano. ¿Cuál es la actuación correcta?",
        opciones: [
            "A) Ignorar la situación al regreso del estudiante.",
            "B) Acoger al estudiante con sensibilidad, ofrecer un espacio cálido para expresar sus emociones si lo desea, flexibilizar exigencias académicas temporalmente, articular con orientación y familia, y trabajar el duelo con el grupo si es pertinente.",
            "C) Forzar al estudiante a hablar delante del grupo.",
            "D) Pedirle 'normalidad total' al regreso."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Convivencia Escolar y Adecuación Curricular 2023 (dimensión socioemocional). El duelo requiere acogida sensible, flexibilización, articulación especializada y abordaje grupal cuando sea pertinente."
    },
    {
        id: 296,
        categoria: "Alfabetización",
        pregunta: "En 1er grado, la maestra propone la escritura de listas como práctica. ¿Cuál es el sentido pedagógico?",
        opciones: [
            "A) Un ejercicio sin propósito real.",
            "B) Las listas son un tipo textual funcional que permite trabajar la escritura con propósito auténtico (lista de útiles, invitados, deseos), reflexionar sobre el sistema de escritura y sobre la función social de los textos.",
            "C) Un relleno cuando no hay otra actividad.",
            "D) Solo para practicar el trazo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. Las listas son tipos textuales funcionales que permiten escribir con propósito auténtico desde el inicio del proceso de alfabetización, articulando reflexión sobre el sistema y la función social."
    },
    {
        id: 297,
        categoria: "Protección Infantil",
        pregunta: "La maestra de 3er grado recibe información anónima de que un estudiante es víctima de violencia doméstica. ¿Cuál es la actuación correcta?",
        opciones: [
            "A) Ignorar la información por ser anónima.",
            "B) Registrar formalmente la información, observar al estudiante con sensibilidad pedagógica, notificar al equipo de orientación y dirección para activar protocolo de evaluación conforme al Código del Menor.",
            "C) Llamar a la familia para confrontarla con la información.",
            "D) Divulgar la información entre los otros docentes."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03. La información sobre posible violencia contra un niño, aun anónima, debe activar los protocolos institucionales. La no acción frente a señales de vulneración puede configurar responsabilidad."
    },
    {
        id: 298,
        categoria: "Evaluación",
        pregunta: "La maestra de 5to grado diseña una matriz de evaluación para una unidad. ¿Cuál es la característica correcta?",
        opciones: [
            "A) Solo listar los contenidos.",
            "B) Articular competencias, indicadores de logro, instrumentos, momentos, agentes evaluadores y criterios claros, de forma coherente con la planificación didáctica.",
            "C) Usar solo pruebas escritas.",
            "D) Evaluar por impresión sin matriz."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La matriz de evaluación articula competencias, indicadores, instrumentos, momentos, agentes y criterios de forma coherente y sistemática, planificando la valoración integral."
    },
    {
        id: 299,
        categoria: "Planificación",
        pregunta: "La maestra de 6to grado planifica la articulación con el Nivel Secundario al final del año. ¿Cuál es el enfoque correcto?",
        opciones: [
            "A) Ignorar el Nivel Secundario porque 'no le compete'.",
            "B) Consolidar competencias clave para la transición, desarrollar autonomía, orientar sobre las características del Nivel Secundario, articular con dirección para actividades de acercamiento cuando sea posible.",
            "C) Asustar a los estudiantes con 'lo difícil' que será Secundaria.",
            "D) Suspender el currículo para 'preparar' para el otro nivel."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. La articulación entre niveles requiere consolidación de competencias, orientación y acercamiento progresivo, no generación de ansiedad ni suspensión del currículo."
    },
    {
        id: 300,
        categoria: "Ética",
        pregunta: "La maestra de 1er grado observa que el director del centro tiene prácticas irregulares en la administración de recursos. ¿Cuál es la actuación correcta?",
        opciones: [
            "A) Callar por temor a represalias.",
            "B) Documentar las irregularidades, reportar formalmente a las instancias superiores (distrito, regional, Ministerio) siguiendo los canales establecidos, con protección al denunciante conforme a la normativa pública.",
            "C) Enfrentar públicamente al director.",
            "D) Imitar las prácticas irregulares."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023 y Ley 41-08 (Función Pública). El deber de denuncia de irregularidades es un deber ético del servidor público, que se realiza por canales institucionales superiores con documentación adecuada."
    },


    {
        id: 301,
        categoria: "Alfabetización",
        pregunta: "En una evaluación diagnóstica, una maestra de 2do grado identifica que un estudiante se encuentra en la etapa presilábica, escribiendo pseudoletras sin correspondencia sonora. ¿Cuál es la decisión pedagógica más adecuada para propiciar su avance?",
        opciones: [
            "A) Asignar planas diarias de vocales y consonantes aisladas para que mejore su caligrafía y memorice los trazos.",
            "B) Diseñar actividades lúdicas con su nombre propio y palabras del contexto, promoviendo la reflexión sobre la direccionalidad y los sonidos.",
            "C) Referir al estudiante inmediatamente al equipo de Orientación y Psicología por sospecha de discapacidad cognitiva.",
            "D) Evaluarlo con los mismos indicadores de lectura convencional que al resto del grupo para no hacer diferencias."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. La alfabetización inicial es un proceso constructivo. La enseñanza debe partir de textos significativos (como el nombre propio) para generar conflicto cognitivo y avance hacia la etapa silábica, descartando prácticas mecánicas o derivaciones prematuras sin apoyo pedagógico previo."
    },
    {
        id: 302,
        categoria: "Evaluación",
        pregunta: "Al finalizar el segundo periodo, los padres de un estudiante de 4to grado reclaman que su hijo tiene 'I' (Iniciado) en varios indicadores de Logro de Lengua Española y exigen que se le asigne 'Logrado' porque él completó todas las tareas en el cuaderno. ¿Cómo debe proceder la maestra?",
        opciones: [
            "A) Modificar la valoración a 'EP' (En Proceso) para evitar conflictos con la familia y la dirección del centro.",
            "B) Mostrar a la familia las rúbricas y el portafolio de evidencias continuas, explicando que las tareas son parte del proceso, pero aún falta alcanzar la competencia, y proponer un plan de apoyo conjunto.",
            "C) Promediar las calificaciones de los cuadernos con un examen escrito para obtener un número objetivo que justifique la nota.",
            "D) Informarles que el registro de grado es un documento cerrado y no se admiten reclamaciones sobre las valoraciones."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. El sistema de evaluación es criterial y formativo. Las evidencias (portafolios, rúbricas) justifican el nivel de dominio (L, EP, I). La comunicación con la familia debe ser transparente y orientada a establecer acuerdos para la mejora continua, no a ceder ante presiones."
    },
    {
        id: 303,
        categoria: "Inclusión",
        pregunta: "Un estudiante de 5to grado con diagnóstico de TDAH tiene dificultades para mantener la atención en tareas prolongadas, dejando frecuentemente las producciones escritas a medias. ¿Cuál es el ajuste razonable más pertinente según el enfoque de educación inclusiva?",
        opciones: [
            "A) Eximirlo de las producciones escritas largas para evitar que se frustre y se levante del asiento.",
            "B) Aplicar la estrategia de fragmentación de la tarea (chunking) y permitirle pausas activas breves, evaluando el mismo indicador de logro mediante múltiples medios de expresión.",
            "C) Enviarlo al aula de recursos o a la orientación durante las asignaciones escritas para que no interrumpa al resto del curso.",
            "D) Exigirle que se quede en el recreo hasta que termine la asignación para fomentar su sentido de responsabilidad."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. Los Ajustes Razonables y el DUA (Diseño Universal para el Aprendizaje) buscan derribar barreras sin disminuir la expectativa de aprendizaje. Fragmentar la tarea y permitir pausas responde a su necesidad neurobiológica sin excluirlo ni castigarlo."
    },
    {
        id: 304,
        categoria: "Ética",
        pregunta: "Durante el recreo, dos estudiantes de 6to grado se enfrascan en una pelea física. La maestra interviene y los separa de inmediato sin que haya lesiones graves. Según la normativa disciplinaria, ¿cuál es el siguiente paso correcto?",
        opciones: [
            "A) Expulsarlos del centro educativo por 3 días como medida ejemplarizante para el resto del estudiantado.",
            "B) Garantizar su seguridad física, escuchar a ambas partes mediante un proceso de mediación y remitir el caso al equipo de gestión/orientación para aplicar medidas formativas.",
            "C) Obligarlos a darse un abrazo frente a todos y regresar al aula, restando importancia al incidente para no alterar la planificación.",
            "D) Llamar a la policía escolar para que levante un acta penal, ya que las peleas son delitos tipificados."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 y Manual de Convivencia (OD 22-2023). Se prohíbe la suspensión como primera medida si niega el derecho a la educación (salvo casos gravísimos estipulados). La prioridad es la integridad, el debido proceso (escucha activa), la mediación y las medidas disciplinarias de carácter formativo, no punitivo."
    },
    {
        id: 305,
        categoria: "Planificación",
        pregunta: "Al diseñar una Unidad de Aprendizaje en 3er grado, la maestra debe asegurar la articulación de las áreas. ¿Cuál es el punto de partida normativo para lograr esta integración con el enfoque por competencias?",
        opciones: [
            "A) La tabla de contenidos conceptuales del libro de texto oficial.",
            "B) El diseño de una Situación de Aprendizaje contextualizada que problematice la realidad de los estudiantes y movilice las competencias fundamentales.",
            "C) La selección de los indicadores de logro más fáciles de evaluar en un examen escrito de selección múltiple.",
            "D) Las efemérides del calendario escolar exclusivamente, ignorando el contexto local."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. La Situación de Aprendizaje es la estrategia por excelencia para dar sentido y contexto a los aprendizajes, permitiendo que los estudiantes apliquen saberes de diversas áreas para resolver un problema o alcanzar un producto."
    },
    {
        id: 306,
        categoria: "Evaluación",
        pregunta: "Al finalizar el grado, un estudiante domina conceptualmente un tema de Matemáticas (sabe las reglas de la división), pero procedimentalmente comete errores constantes y actitudinalmente se rinde rápido. ¿Cómo se debe registrar el Indicador de Logro?",
        opciones: [
            "A) Como 'Logrado' (L), porque el saber teórico es el fundamento de las matemáticas.",
            "B) Como 'En Proceso' (EP), ya que la competencia implica la movilización articulada de conceptos, procedimientos y actitudes, la cual aún no es plena.",
            "C) Como 'Iniciado' (I), como medida de castigo por su falta de esfuerzo actitudinal.",
            "D) Solicitar al director que decida la calificación, ya que los promedios no aplican."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. Una competencia no está 'Lograda' si solo se domina la parte conceptual. Requiere saber, saber hacer y saber ser. Al evidenciar dominio parcial, se valora como En Proceso (EP) para continuar el acompañamiento."
    },
    {
        id: 307,
        categoria: "Ética",
        pregunta: "Una maestra nota que un estudiante de 1er grado tiene moretones repetidos en los brazos y el niño comenta con temor que 'se portó mal en casa'. ¿Cuál es el deber ético e inexcusable de la docente?",
        opciones: [
            "A) Confrontar directamente a los padres a la hora de la salida frente a otros representantes.",
            "B) Documentar las observaciones objetivamente y reportar el caso de manera confidencial y urgente al equipo de Orientación y a la Dirección para la activación del protocolo de protección.",
            "C) Citar al niño frente a todo el curso para que explique qué le pasó y generar empatía.",
            "D) Omitir la información, ya que los métodos de crianza familiares son privados y no competen a la escuela."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 (Código del Menor) y protocolos del MINERD. El docente es garante de derechos y tiene la obligación de denunciar sospechas de abuso. Debe hacerse por la vía institucional (Orientación/Dirección) para proteger al menor y evitar revictimización o entorpecimiento legal."
    },
    {
        id: 308,
        categoria: "Gestión del Aprendizaje",
        pregunta: "Durante una clase de Ciencias de la Naturaleza en 4to grado, los estudiantes muestran apatía e indisciplina porque consideran que el tema 'El Sistema Digestivo' es aburrido. ¿Qué acción pedagógica demuestra una gestión efectiva del aprendizaje?",
        opciones: [
            "A) Imponer un reporte escrito de 5 páginas sobre el tema como tarea evaluativa para obligarlos a estudiar.",
            "B) Detener la clase expositiva, dialogar sobre sus intereses e introducir una estrategia activa (ej. simulación del recorrido de los alimentos, uso de modelos o recursos digitales) para reenganchar su motivación.",
            "C) Anotar a todos los estudiantes en el registro anecdótico por falta de respeto a la autoridad docente.",
            "D) Cambiar de tema a uno más fácil para evitar conflictos en el aula."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular (Enfoque Constructivista). El docente es un mediador. La motivación y el clima de aula son responsabilidad compartida. Ante la desmotivación, se debe flexibilizar la estrategia didáctica, promoviendo el rol activo del estudiante."
    },
    {
        id: 309,
        categoria: "Alfabetización",
        pregunta: "Un niño de 3er grado lee de manera silabeante, lo que afecta drásticamente su comprensión lectora. Al evaluar el caso, la maestra decide implementar estrategias de fluidez. ¿Cuál de las siguientes acciones es la correcta?",
        opciones: [
            "A) Hacer que el niño lea textos largos en voz alta frente al grupo para que pierda el miedo.",
            "B) Utilizar lectura compartida (teatro de lectores, lectura en eco) con textos cortos y significativos, modelando la prosodia sin exponerlo al estrés público.",
            "C) Dejar de evaluarle la lectura hasta que logre la fluidez por sí solo con el tiempo.",
            "D) Regresarlo a materiales de 1er grado (cartillas) para que repita las sílabas simples."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023 y enfoque de Prácticas Sociales del Lenguaje. La fluidez se logra mediante el modelaje y la repetición lúdica y con propósito (lectura en eco/teatro). Exponerlo al grupo genera ansiedad y retroceso (filtro afectivo alto)."
    },
    {
        id: 310,
        categoria: "Inclusión",
        pregunta: "En una sección de 6to grado hay un estudiante usuario de silla de ruedas. La clase de Educación Física requiere realizar un circuito de saltos y carreras. ¿Cómo debe proceder el maestro?",
        opciones: [
            "A) Eximir al estudiante de la asignatura y enviarlo a la biblioteca a leer sobre deportes.",
            "B) Adaptar el circuito (DUA) incluyendo estaciones de destreza motriz superior y lanzamientos, permitiendo que el estudiante participe activamente junto a sus compañeros bajo las mismas competencias.",
            "C) Pedirle que sea el árbitro o anotador durante todo el año escolar, ya que no puede ejecutar los ejercicios.",
            "D) Darle la máxima calificación por compasión, sin requerirle ningún esfuerzo físico."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. La inclusión exige participación, no solo presencia o roles pasivos. Adaptar la actividad mediante ajustes razonables garantiza su derecho al aprendizaje motor y a la socialización en igualdad de condiciones."
    },
    {
        id: 311,
        categoria: "Planificación",
        pregunta: "El equipo docente de un centro educativo decide implementar la estrategia de 'Proyectos Participativos de Aula'. ¿Cuál es el rol principal de los estudiantes en el diseño de este tipo de proyecto?",
        opciones: [
            "A) Ejecutar puntualmente las actividades planificadas por el maestro y entregar los recursos a tiempo.",
            "B) Participar activamente en la elección del problema de investigación, la planificación de actividades y la toma de decisiones, guiados por el docente.",
            "C) Evaluar exclusivamente el desempeño del maestro al finalizar la implementación del proyecto.",
            "D) Comprar los materiales necesarios para la feria de cierre de proyecto."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. Los Proyectos Participativos de Aula (PPA) tienen como esencia la agencia del estudiante. Surgen de las necesidades sentidas del grupo, promoviendo ciudadanía, autonomía y competencias fundamentales."
    },
    {
        id: 312,
        categoria: "Evaluación",
        pregunta: "Según la Ordenanza 04-2023, la evaluación de las competencias se fundamenta en la recogida de evidencias. ¿Cuál es la herramienta idónea para organizar y registrar el progreso del estudiante de forma sistemática?",
        opciones: [
            "A) El examen final estandarizado.",
            "B) El portafolio de evidencias y el uso continuo de rúbricas, listas de cotejo o escalas estimativas.",
            "C) La libreta de anotaciones privadas del maestro.",
            "D) El cuaderno de reportes disciplinarios."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La evaluación por competencias exige pluralidad de técnicas e instrumentos. El portafolio recoge las producciones, y las rúbricas/escalas valoran el nivel de desempeño de manera objetiva frente a los indicadores."
    },
    {
        id: 313,
        categoria: "Ética",
        pregunta: "Una maestra observa que un padre retira frecuentemente a su hijo al mediodía para ponerlo a trabajar en un negocio informal, afectando gravemente su asistencia y rendimiento. ¿Qué indica el marco legal dominicano?",
        opciones: [
            "A) Es potestad de la familia decidir sobre el tiempo del menor, la escuela no debe intervenir en asuntos económicos.",
            "B) Constituye una vulneración al derecho a la educación y trabajo infantil. Debe notificarse a Orientación/Dirección para dialogar con la familia e involucrar a CONANI si hay resistencia.",
            "C) Dar de baja al estudiante en el SIGERD por inasistencia recurrente sin más trámites.",
            "D) Bajar las calificaciones del estudiante por faltar a sus responsabilidades escolares."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03. El interés superior del niño y el derecho a la educación priman sobre cualquier autoridad parental. El trabajo infantil que interfiere con la escuela es ilegal y la institución educativa es la primera red legal de protección y alerta."
    },
    {
        id: 314,
        categoria: "Gestión del Aprendizaje",
        pregunta: "Al abordar la comprensión lectora en 5to grado, el docente nota que los niños decodifican bien, pero no logran inferir información implícita en los textos. ¿Qué estrategia es la más efectiva para superar este obstáculo?",
        opciones: [
            "A) Incrementar la cantidad de dictados diarios y copias de textos literarios.",
            "B) Modelar estrategias cognitivas de lectura, haciendo 'preguntas de pensamiento en voz alta' y enseñando a buscar pistas en el texto para conectar ideas.",
            "C) Obligarlos a buscar en el diccionario todas las palabras del texto antes de leer.",
            "D) Asignarles libros más gruesos como tarea para la casa para que practiquen solos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Enfoque Textual, Funcional y Comunicativo. La inferencia no se desarrolla por mecanicismo (copia/dictado), sino enseñando explícitamente estrategias de comprensión (hacer hipótesis, buscar pistas contextuales, dialogar sobre el texto)."
    },
    {
        id: 315,
        categoria: "Alfabetización",
        pregunta: "En el 1er ciclo de primaria, un docente observa que algunos estudiantes invierten las letras al escribir (ej. 'b' por 'd'). Según la normativa y el enfoque psicogenético, ¿cómo debe interpretarse este fenómeno en la etapa de apropiación inicial?",
        opciones: [
            "A) Como un síntoma inequívoco de dislexia severa que requiere medicación.",
            "B) Como un error constructivo común en la fase de apropiación del sistema de escritura, que debe trabajarse con lateralidad y conciencia fonológica.",
            "C) Como una falta de atención por uso excesivo de pantallas en el hogar.",
            "D) Como un déficit visual que impide la asimilación de la forma de las letras."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. En las etapas iniciales de lectura y escritura (1er ciclo), la inversión de grafías (escritura en espejo) es una etapa evolutiva normal que se va superando mediante experiencias ricas en lectoescritura, no patologizando al niño prematuramente."
    },
    {
        id: 316,
        categoria: "Planificación",
        pregunta: "La profesora de Ciencias Sociales de 6to grado decide utilizar el Eje Transversal 'Desarrollo Personal y Profesional' en su planificación. ¿Cómo debe evidenciarse este eje de manera efectiva en la secuencia didáctica?",
        opciones: [
            "A) Colocando el nombre del eje en el encabezado de la planificación como requisito administrativo.",
            "B) Integrando actividades donde los estudiantes reflexionen sobre su proyecto de vida, identidad y rol ciudadano mientras estudian procesos históricos o geográficos.",
            "C) Evaluándolo en un examen separado al final del periodo escolar.",
            "D) Asignando la responsabilidad de este eje exclusivamente a la orientadora del centro."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. Los Ejes Transversales no son temas aislados ni trámites de formato; son grandes problemáticas sociales o temas de desarrollo humano que deben permear y dar contexto a las actividades de aprendizaje de las áreas académicas."
    },
    {
        id: 317,
        categoria: "Convivencia",
        pregunta: "Un grupo de alumnos de 5to grado excluye sistemáticamente a un compañero recién llegado al país, burlándose de su acento. ¿Qué acción docente se alinea con la disciplina positiva y las normas de convivencia?",
        opciones: [
            "A) Castigar al grupo dejándolos sin recreo por una semana para que sientan el rechazo.",
            "B) Implementar círculos de diálogo o asambleas de aula para abordar la diversidad cultural, fomentando la empatía, y establecer acuerdos colectivos de respeto.",
            "C) Cambiar al estudiante nuevo de sección para evitar el conflicto y protegerlo.",
            "D) Ignorar la situación asumiendo que son 'cosas de niños' y se adaptarán solos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Convivencia Escolar. El bullying o acoso por xenofobia requiere intervención proactiva y formativa. El círculo de diálogo (práctica restaurativa) aborda la raíz del problema creando conciencia y empatía grupal, en lugar de evadir (cambiar de aula) o aplicar castigos ineficaces."
    },
    {
        id: 318,
        categoria: "Evaluación",
        pregunta: "Al aplicar la evaluación diagnóstica al inicio del año escolar en 3er grado, la maestra recopila resultados heterogéneos. ¿Cuál es la finalidad normativa principal de esta evaluación?",
        opciones: [
            "A) Asignar la primera calificación del año en el registro de grado para establecer jerarquías académicas.",
            "B) Identificar los saberes previos, ritmos y necesidades del grupo para ajustar la planificación pedagógica y diseñar estrategias de nivelación o enriquecimiento.",
            "C) Demostrar a los padres que los estudiantes no repasaron durante las vacaciones.",
            "D) Seleccionar a los estudiantes que deben ser excluidos del aula regular."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La evaluación diagnóstica tiene carácter estrictamente formativo y orientador (nunca sumativo ni calificador). Su fin es obtener datos para la toma de decisiones pedagógicas y la adaptación de la enseñanza."
    },
    {
        id: 319,
        categoria: "Inclusión",
        pregunta: "Llega al aula de 4to grado un estudiante que presenta mutismo selectivo (habla fluidamente en casa, pero no en la escuela). La planificación exige exposiciones orales individuales. ¿Cómo procede éticamente el docente?",
        opciones: [
            "A) Obligar al estudiante a exponer frente a todos para que rompa su 'timidez'.",
            "B) Proveer formas alternativas de expresión temporalmente (ej. grabar un video en casa o hacer un trabajo escrito) mientras coordina con Orientación un plan progresivo de desensibilización.",
            "C) Reprobarlo en el indicador de expresión oral, ya que el currículo exige la competencia comunicativa en público.",
            "D) Ignorarlo durante todas las clases para no causarle ansiedad."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024 (Ajustes Razonables). Forzar a un estudiante con mutismo selectivo agrava el trastorno por ansiedad. El DUA permite múltiples formas de acción y expresión; el medio (hablar en público) puede ajustarse si se demuestra el conocimiento del tema (grabación), mientras se trabaja el área afectiva paralelamente."
    },
    {
        id: 320,
        categoria: "Comportamiento Profesional",
        pregunta: "Se descubre que una maestra de 2do grado completó los registros de grado inventando valoraciones ('L', 'EP', 'I') al final del año porque no sistematizó la evaluación continua. ¿Qué principio normativo y ético está infringiendo gravemente?",
        opciones: [
            "A) El principio de economía de tiempo, ya que debió delegar esta tarea a los coordinadores.",
            "B) El principio de evaluación procesual, formativa y basada en evidencias, así como la veracidad ética del documento oficial que certifica el progreso del estudiante.",
            "C) El principio de autonomía docente, que le permite evaluar como ella considere pertinente al final del ciclo.",
            "D) Ninguno, si los estudiantes al final lograron ser promovidos de todas formas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023 y Ética Docente. El registro de grado es un documento legal que debe reflejar fielmente un proceso continuo basado en evidencias objetivas recopiladas en el tiempo. La invención de notas falsea el perfil de salida del estudiante y viola la ética profesional."
    },
    
    {
        id: 321,
        categoria: "Evaluación",
        pregunta: "Una estudiante de 2do grado demuestra una excelente fluidez y comprensión lectora al participar en clase de forma oral, pero cuando la maestra le aplica una prueba escrita de comprensión, la niña se bloquea y deja la hoja en blanco. ¿Qué decisión evaluativa procede según la normativa vigente?",
        opciones: [
            "A) Calificarla con 'I' (Iniciado) porque la evidencia escrita es el único medio válido y auditable en el sistema educativo.",
            "B) Valorarla como 'EP' (En Proceso) hasta que logre superar su miedo a las pruebas escritas, que son obligatorias.",
            "C) Validar su comprensión a través de la observación oral, rúbricas de participación y registros anecdóticos, asignándole el 'Logrado' (L) si cumple con el indicador.",
            "D) Aplicarle la misma prueba escrita repetidas veces hasta que se acostumbre al formato y logre completarla."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ordenanza 04-2023. La evaluación por competencias es multimodal y flexible. El docente debe utilizar una diversidad de técnicas e instrumentos. Si el indicador de logro (comprensión) se evidencia oralmente, exigir exclusivamente la vía escrita penaliza el formato, no la competencia."
    },
    {
        id: 322,
        categoria: "Inclusión",
        pregunta: "En una aula de 1er grado, un niño con Trastorno del Espectro Autista (TEA) se tapa los oídos, llora y se esconde debajo de la mesa cada vez que suena el timbre del recreo. ¿Cuál es el ajuste razonable primario que debe implementar la maestra?",
        opciones: [
            "A) Ignorar la conducta para no reforzarla, asumiendo que con el tiempo se habituará al ruido del centro.",
            "B) Solicitar a los padres que lo retiren del centro educativo antes de la hora del recreo para evitarle el sufrimiento.",
            "C) Anticipar el sonido del timbre mediante apoyos visuales y permitirle el uso de audífonos canceladores de ruido antes de que suene.",
            "D) Obligarlo a salir al patio de inmediato para que socialice, ya que el recreo es un derecho inalienable."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ordenanza 05-2024 (Educación Inclusiva). Las personas con TEA suelen presentar hipersensibilidad sensorial. El Diseño Universal para el Aprendizaje (DUA) y los ajustes razonables exigen modificar el entorno o brindar apoyos (audífonos, anticipación) para eliminar la barrera del entorno, garantizando su bienestar sin excluirlo."
    },
    {
        id: 323,
        categoria: "Alfabetización",
        pregunta: "En 3er grado, un estudiante escribe sus producciones mezclando letras de molde (imprenta) y cursivas en la misma palabra. Su letra es legible y sus textos tienen coherencia. ¿Cuál debe ser la intervención de la docente?",
        opciones: [
            "A) Calificar negativamente sus producciones hasta que estandarice un solo tipo de caligrafía.",
            "B) Centrar la retroalimentación en la coherencia, el propósito comunicativo y la legibilidad, permitiendo la hibridación caligráfica mientras el texto sea funcional.",
            "C) Obligarlo a usar cuadernos de doble raya exclusivamente para cursiva durante todo el año.",
            "D) Asignarle planas de caligrafía durante el recreo para corregir el vicio motor."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023 (Alfabetización Inicial). El enfoque es funcional y comunicativo. La prioridad es que el estudiante produzca textos con sentido y propósito. La hibridación de letras (imprenta/cursiva) no es un error conceptual, siempre que la escritura cumpla su función comunicativa y sea legible."
    },
    {
        id: 324,
        categoria: "Planificación",
        pregunta: "Al iniciar el año escolar en 5to grado, la evaluación diagnóstica revela que el 70% del curso no domina la división por una cifra, un pre-requisito para el tema de fracciones contemplado en la primera Unidad de Aprendizaje. ¿Qué debe hacer el maestro?",
        opciones: [
            "A) Avanzar con las fracciones según el diseño curricular, ya que la división debió ser enseñada y aprendida en 4to grado.",
            "B) Derivar al 70% del curso al departamento de Orientación para que reciban tutorías extracurriculares.",
            "C) Suspender el currículo de 5to grado y usar los libros de 3er grado durante el primer semestre completo.",
            "D) Adecuar la planificación de la unidad, integrando actividades de nivelación y recuperación de la división como base para introducir el concepto de fracciones."
        ],
        respuestaCorrecta: 3,
        explicacion: "Base Legal: Adecuación Curricular 2023. La planificación debe ser flexible y contextualizada. Los resultados de la evaluación diagnóstica tienen carácter vinculante para la toma de decisiones pedagógicas, obligando al docente a nivelar los saberes previos antes de introducir mayores niveles de complejidad."
    },
    {
        id: 325,
        categoria: "Ética",
        pregunta: "A finales del año escolar, una madre se acerca a la maestra de 4to grado y le ofrece un 'regalo de agradecimiento' a cambio de que le modifique una valoración de 'EP' a 'L' en Matemáticas a su hijo para que pueda estar en el cuadro de honor. ¿Cómo debe proceder la docente?",
        opciones: [
            "A) Aceptar el regalo pero no cambiar la nota, para no ofender a la madre ni violar el registro.",
            "B) Rechazar el regalo cordialmente, explicar que la valoración refleja evidencias concretas del desempeño del niño y mantener la calificación ética y profesionalmente.",
            "C) Cambiar la calificación si el niño promete esforzarse más el próximo año, ya que el cuadro de honor motiva.",
            "D) Tomar el regalo y denunciar a la madre públicamente en la próxima reunión de padres."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Estatuto del Docente y Ética Profesional. El docente debe mantener una conducta intachable, rechazando cualquier intento de soborno o coerción. La evaluación debe basarse estrictamente en el mérito académico (evidencias del registro de grado) y nunca en favores o compensaciones."
    },
    {
        id: 326,
        categoria: "Gestión del Aprendizaje",
        pregunta: "Durante un trabajo colaborativo en 6to grado, la maestra nota que en un grupo un solo estudiante hace todo el trabajo mientras los demás conversan de otros temas. ¿Qué estrategia pedagógica corrige efectivamente esta dinámica?",
        opciones: [
            "A) Separar al grupo y ponerlos a trabajar de forma individual para evitar la distracción.",
            "B) Calificar con 'L' al estudiante que trabaja y con 'I' a los demás sin mediar palabra.",
            "C) Reestructurar la actividad asignando roles de interdependencia positiva (ej. coordinador, secretario, investigador), donde el producto final dependa del aporte de todos.",
            "D) Regañar al grupo frente a todo el curso para generar vergüenza y obligarlos a trabajar."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Enfoque Constructivista y Competencia de Trabajo Colaborativo (Adecuación Curricular 2023). El trabajo en grupo no es simplemente 'sentarlos juntos'. Requiere estructurar la interdependencia positiva mediante roles claros, fomentando la corresponsabilidad y la participación equitativa."
    },
    {
        id: 327,
        categoria: "Convivencia",
        pregunta: "En 3er grado, un alumno constantemente interrumpe la clase hablando en voz alta sin levantar la mano, lo que desconcentra a sus compañeros. En el marco de la disciplina positiva, ¿cuál es la mejor intervención?",
        opciones: [
            "A) Colocarle una cinta adhesiva en la boca simbólicamente por 5 minutos.",
            "B) Enviar una nota diaria a los padres para que lo castiguen en casa.",
            "C) Establecer con el grupo acuerdos visuales para el turno de la palabra, ignorar (extinguir) la conducta cuando hable sin permiso y reforzar positivamente cuando levante la mano.",
            "D) Sacarlo del aula y dejarlo en el pasillo hasta que decida guardar silencio."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Manual de Convivencia Escolar y OD 22-2023. El conductismo punitivo (humillaciones, exclusión) está prohibido. La disciplina positiva se basa en el establecimiento de rutinas claras, la extinción de conductas disruptivas (no prestando atención al grito) y el refuerzo positivo sistemático de la conducta deseada."
    },
    {
        id: 328,
        categoria: "Evaluación",
        pregunta: "Durante la entrega de informes de progreso (boletines), varios padres de 1er grado expresan molestia porque no entienden las letras (L, EP, I) y exigen calificaciones numéricas del 1 al 100. ¿Cuál es la respuesta institucional de la maestra?",
        opciones: [
            "A) Convertir en una hoja aparte las letras a números para satisfacer a los padres y evitar conflictos.",
            "B) Organizar una reunión para socializar la Ordenanza de evaluación, explicando el sentido formativo de las escalas conceptuales y mostrando el portafolio de evidencias de los niños.",
            "C) Decirles que es una orden del Ministerio y que ella no puede hacer nada al respecto.",
            "D) Sugerirles que inscriban a sus hijos en un colegio privado si prefieren el sistema numérico."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La evaluación en el Nivel Primario es cualitativa y criterial (Logrado, En Proceso, Iniciado). La familia es un actor clave, por lo que el docente tiene el deber pedagógico de formarlos en la comprensión del modelo de evaluación por competencias y el valor de las evidencias."
    },
    {
        id: 329,
        categoria: "Inclusión",
        pregunta: "Una docente de 5to grado tiene en su aula a una estudiante con baja visión severa (no ceguera total). La estudiante se esfuerza, pero no logra copiar a tiempo de la pizarra. ¿Qué ajuste razonable debe aplicarse inmediatamente?",
        opciones: [
            "A) Proporcionarle el material impreso en macrotipo (letra ampliada), ubicarla en la primera fila con buena iluminación y verbalizar en voz alta lo que se escribe en la pizarra.",
            "B) Disminuir la cantidad de indicadores de logro que debe alcanzar, ya que su condición le impide aprender lo mismo que los demás.",
            "C) Asignarle un compañero que le copie todas las clases para que ella solo escuche.",
            "D) Recomendar a la familia su traslado a un centro de educación especial."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Ordenanza 05-2024. Los estudiantes con baja visión se benefician de ajustes de acceso (macrotipos, ubicación, contraste, iluminación) y apoyos verbales (DUA). Reducir los indicadores o derivarla a educación especial vulnera su derecho a una educación regular inclusiva y equitativa."
    },
    {
        id: 330,
        categoria: "Alfabetización",
        pregunta: "En 2do grado, la maestra observa que un estudiante escribe 'elperrocorre' todo junto. Desde la perspectiva de la alfabetización inicial, este fenómeno se conoce como hiposegmentación. ¿Qué actividad ayuda a corregir esto de manera constructiva?",
        opciones: [
            "A) Hacer que copie la oración 50 veces con los espacios correctos marcados en rojo.",
            "B) Restarle puntos en todas las materias hasta que comience a separar las palabras correctamente.",
            "C) Realizar juegos de conciencia léxica, como aplaudir por cada palabra en una oración oral, o usar bloques físicos para representar cada palabra antes de escribirla.",
            "D) Entregarle un diccionario para que busque cómo se escribe cada palabra por separado."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ordenanza 01-2023. La hiposegmentación es común cuando el niño aún no diferencia la cadena hablada (que es continua) de la escrita (que requiere blancos). Las estrategias de conciencia léxica (contar palabras oralmente, usar fichas) ayudan a materializar el concepto de 'palabra' antes del trazo."
    },
    {
        id: 331,
        categoria: "Planificación",
        pregunta: "La maestra de 4to grado desea planificar utilizando el Eje Transversal 'Salud y Bienestar' en el área de Lengua Española. ¿Qué actividad evidencia una correcta integración de este eje según el enfoque por competencias?",
        opciones: [
            "A) Pedir a los estudiantes que dibujen una fruta en su cuaderno de dibujo libre.",
            "B) Analizar textos instructivos (recetas saludables) y luego redactar su propio texto informativo sobre los beneficios de la hidratación para publicarlo en el mural.",
            "C) Dictar una definición de 'salud' extraída de la Organización Mundial de la Salud para que la memoricen.",
            "D) Invitar a un médico a dar una charla mientras los niños se mantienen en silencio escuchando pasivamente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. La integración de los Ejes Transversales debe movilizar las competencias específicas del área. En Lengua Española, el eje debe abordarse produciendo y comprendiendo textos (instructivos, informativos) con propósito y significado."
    },
    {
        id: 332,
        categoria: "Ética",
        pregunta: "Al terminar su jornada, una maestra de 6to grado escucha a un grupo de sus estudiantes planificando una pelea a la salida, a dos cuadras del recinto escolar. ¿Cuál es la responsabilidad de la docente?",
        opciones: [
            "A) Ignorar la situación, ya que el evento ocurrirá fuera del horario escolar y fuera de las instalaciones del centro.",
            "B) Intervenir preventivamente informando de inmediato al equipo de gestión y a la Policía Escolar para disuadir la confrontación y contactar a las familias.",
            "C) Esperar a ver si la pelea ocurre realmente y al día siguiente sancionar a los que lleguen golpeados.",
            "D) Grabar la conversación con su teléfono celular para tener pruebas en caso de que los padres reclamen."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Código del Menor (Ley 136-03) y Manual de Convivencia. El deber de cuidado y la responsabilidad ética del docente no terminan estrictamente en el portón físico si tiene conocimiento previo de un riesgo inminente a la integridad física de sus estudiantes. Debe alertar a las autoridades correspondientes."
    },
    {
        id: 333,
        categoria: "Gestión del Aprendizaje",
        pregunta: "La maestra de 2do grado observa que las transiciones entre las asignaturas (ej. de Matemática a Lengua Española) son caóticas; los niños corren, gritan y tardan 15 minutos en acomodarse. ¿Cuál es la solución pedagógica adecuada?",
        opciones: [
            "A) Amenazar con quitarles el recreo si no se callan de inmediato.",
            "B) Implementar una rutina de transición clara (ej. una canción breve o una dinámica de palmas) que marque el inicio y fin de la actividad, modelándola y practicándola con el grupo.",
            "C) Aumentar el volumen de voz por encima de los gritos de los niños para imponer respeto.",
            "D) Dejar que hagan ruido libremente porque los niños de esa edad necesitan desahogarse."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Criterios de Gestión de Aula. El tiempo pedagógico es valioso. Las transiciones caóticas se deben a la falta de rutinas establecidas. Las dinámicas de anclaje (canciones, conteos) proveen predictibilidad y ayudan a la autorregulación infantil sin recurrir a gritos ni amenazas."
    },
    {
        id: 334,
        categoria: "Evaluación",
        pregunta: "En 5to grado, el profesor aplica una estrategia de coevaluación tras unas exposiciones. Nota que los estudiantes se califican entre ellos con la máxima puntuación ('Logrado') simplemente por amistad, sin importar los errores. ¿Cómo se corrige esta práctica?",
        opciones: [
            "A) Eliminar la coevaluación del sistema de calificación, ya que los niños no son maduros para evaluar objetivamente.",
            "B) Proveer a los estudiantes de una lista de cotejo o rúbrica con criterios simples y específicos observables, modelando primero cómo evaluar constructivamente.",
            "C) Bajarles la calificación a los estudiantes que mientan evaluando a sus amigos.",
            "D) Que la coevaluación se haga de forma secreta y anónima para evitar represalias."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La coevaluación es obligatoria y desarrolla el pensamiento crítico y ético. No funciona si se deja a la subjetividad total; el docente debe andamiar el proceso entregando instrumentos (rúbricas/listas de cotejo) y enseñando a dar retroalimentación basada en evidencias."
    },
    {
        id: 335,
        categoria: "Inclusión",
        pregunta: "Un alumno de 3er grado posee Altas Capacidades (superdotación). Termina las tareas en la mitad del tiempo que sus compañeros y luego comienza a interrumpir la clase por aburrimiento. ¿Qué respuesta educativa corresponde?",
        opciones: [
            "A) Asignarle el doble de la misma tarea (ej. si son 10 sumas, ponerle 20) para mantenerlo ocupado.",
            "B) Promoverlo inmediatamente a 5to grado para que esté con niños de su nivel intelectual.",
            "C) Aplicar estrategias de enriquecimiento curricular, ofreciéndole proyectos de investigación autónomos o asignándole el rol de tutor de pares.",
            "D) Exigirle que se quede en silencio absoluto hasta que el último de sus compañeros termine."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ordenanza 05-2024 (Educación Inclusiva). Las Altas Capacidades también son necesidades específicas de apoyo educativo (NEAE). Repetir la misma tarea no estimula, castiga. El enriquecimiento curricular y las tareas de mayor desafío cognitivo (o tutoría de pares) atienden su ritmo sin aislarlo socialmente."
    },
    {
        id: 3036,
        categoria: "Planificación",
        pregunta: "Una docente de 1er grado tiene 15 años usando un libro de texto que le encanta. El equipo de coordinación le indica que debe planificar por competencias usando la nueva adecuación, pero ella insiste en seguir el índice del libro. ¿Cuál es el rol normativo de los recursos didácticos?",
        opciones: [
            "A) El libro de texto es la guía oficial que dicta la secuencia, por lo tanto, la maestra tiene la razón.",
            "B) El libro de texto es solo un recurso de apoyo. La planificación debe guiarse por las Competencias, Indicadores de Logro y Situaciones de Aprendizaje estipuladas en la Adecuación Curricular vigente.",
            "C) Se debe dividir el año en dos: medio año para el libro y medio año para las competencias.",
            "D) La docente puede apelar al derecho de cátedra para no utilizar el currículo oficial."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. El currículo dominicano es prescriptivo en sus competencias e indicadores. Los libros de texto son medios y recursos de apoyo (mediadores del aprendizaje), pero nunca sustituyen al Diseño Curricular ni determinan la planificación contextualizada."
    },
    {
        id: 337,
        categoria: "Convivencia",
        pregunta: "En el aula de 4to grado se ha perdido un estuche valioso. Un alumno acusa directamente a otro de haberlo robado basándose en rumores. La situación está generando hostilidad grupal. ¿Qué medida asertiva debe tomar el docente?",
        opciones: [
            "A) Revisar públicamente las mochilas de todos los estudiantes para demostrar la culpabilidad o inocencia del acusado.",
            "B) Llamar a los implicados a un diálogo privado, evitar juicios prematuros, investigar los hechos con objetividad y fomentar un clima de restitución y honestidad.",
            "C) Obligar al acusado a reponer el estuche para calmar al resto del curso.",
            "D) Decir que 'lo que se pierde en la escuela no aparece' y prohibir que lleven cosas de valor."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Convivencia Escolar. El cacheo público de mochilas vulnera la dignidad y privacidad del menor. Las acusaciones sin pruebas (difamación) deben manejarse mediante el debido proceso, indagación discreta y mediación, garantizando la presunción de inocencia y el respeto mutuo."
    },
    {
        id: 338,
        categoria: "Alfabetización",
        pregunta: "Para iniciar el proceso de alfabetización, un maestro de 1er grado dedica las primeras semanas exclusivamente a que los niños reconozcan que la palabra 'mariposa' tiene cuatro golpes de voz (ma-ri-po-sa) y busquen rimas. ¿Qué habilidad precursora está desarrollando?",
        opciones: [
            "A) La motricidad fina y el agarre de pinza.",
            "B) La conciencia fonológica (conciencia silábica y rima), indispensable para comprender el principio alfabético.",
            "C) La comprensión lectora de textos complejos.",
            "D) La ortografía visual de palabras trabadas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. La conciencia fonológica (capacidad de identificar y manipular los sonidos del lenguaje oral) es el principal predictor del éxito en la alfabetización inicial. Jugar con rimas y segmentación silábica prepara el cerebro para la decodificación posterior."
    },
    {
        id: 339,
        categoria: "Evaluación",
        pregunta: "Un estudiante de 6to grado de un contexto socioeconómico vulnerable no entregó el informe de investigación final porque requería acceso a internet y su familia no tiene recursos. El resto del curso sí lo entregó. ¿Cómo procede el docente desde un enfoque de equidad?",
        opciones: [
            "A) Colocarle una calificación de 'I' (Iniciado), ya que es su responsabilidad cumplir con las tareas asignadas en la fecha límite.",
            "B) Facilitarle el uso de los equipos tecnológicos de la escuela durante un tiempo extra o adaptar el instrumento para evaluar su aprendizaje mediante fuentes bibliográficas físicas disponibles en el centro.",
            "C) Regalarle la calificación para no afectar su autoestima por ser pobre.",
            "D) Exigirle a los padres que vayan a un centro de internet (ciber) como obligación parental."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023 y principios de Equidad e Inclusión. La evaluación no debe penalizar la desigualdad socioeconómica. Si el estudiante carece de medios en casa, la escuela debe compensar esa brecha garantizando el acceso a los recursos (laboratorio TIC o biblioteca) para que pueda demostrar su competencia."
    },
    {
        id: 340,
        categoria: "Comportamiento Profesional",
        pregunta: "Al entregar una prueba de Matemática corregida en 5to grado, un estudiante levanta la mano y le demuestra al profesor, con respeto y argumentos lógicos, que un problema calificado como incorrecto estaba, en realidad, bien resuelto mediante otro método. ¿Cuál es la actitud ética del docente?",
        opciones: [
            "A) Decirle que el único método válido es el que se enseñó en la pizarra para evitar confusiones en los demás.",
            "B) Reconocer el error abiertamente frente a la clase, felicitar al estudiante por su pensamiento lógico y corregir la calificación en el registro.",
            "C) Cambiar la nota en privado pero decirle frente al grupo que no vuelva a contradecir al maestro.",
            "D) Borrar el problema del examen para todos, invalidando la pregunta."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Perfil del Docente (Estatuto Docente) y Enfoque por Competencias. Promover el pensamiento crítico y la resolución de problemas (Competencia de Resolución de Problemas) implica aceptar la pluralidad de métodos. Un docente ético modela humildad intelectual, reconociendo el acierto del estudiante y valorando el proceso lógico divergente."
    },

    {
        id: 341,
        categoria: "Evaluación",
        pregunta: "Al corregir los cuadernos de 3er grado, la maestra nota que un estudiante ha logrado resolver problemas matemáticos complejos, pero su caligrafía es muy deficiente y hay tachaduras. ¿Cómo debe proceder la valoración del indicador de resolución de problemas según la Ordenanza 04-2023?",
        opciones: [
            "A) Calificar con 'Iniciado' (I) porque la presentación y la caligrafía son parte integral de la formación del estudiante.",
            "B) Valorar el indicador como 'Logrado' (L) basándose en la validez del razonamiento matemático, independientemente de la caligrafía, y tratar la escritura como un aspecto a mejorar en Lengua Española.",
            "C) Restar puntos de la calificación final por cada tachadura encontrada para fomentar el orden.",
            "D) Exigirle que pase todo el cuaderno a limpio antes de asignarle una valoración en el registro."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La evaluación por competencias exige valorar cada competencia según sus propios criterios. Si el indicador evalúa razonamiento lógico-matemático, la caligrafía no debe penalizar ese logro específico; esta última debe ser abordada desde la competencia comunicativa."
    },
    {
        id: 342,
        categoria: "Alfabetización",
        pregunta: "Una maestra de 1er grado implementa la 'Lectura de Etiquetas' de productos comunes que los niños traen de casa. ¿Cuál es el propósito pedagógico fundamental de esta actividad según la Ordenanza 01-2023?",
        opciones: [
            "A) Que los niños aprendan a consumir productos específicos de marcas reconocidas.",
            "B) Aprovechar el contexto y los textos de circulación social para que el niño comprenda que las letras 'dicen algo' y desarrolle la conciencia gráfica.",
            "C) Entretener a los estudiantes con colores llamativos para mantener el orden en el aula.",
            "D) Evitar el uso de libros de texto oficiales porque las etiquetas son más económicas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. El enfoque funcional y comunicativo parte de textos reales. Leer etiquetas permite al niño en etapa inicial hacer predicciones sobre el contenido del texto basándose en el contexto (lectura no convencional), un paso previo vital para la alfabetización."
    },
    {
        id: 343,
        categoria: "Inclusión",
        pregunta: "Un estudiante de 4to grado con discapacidad motora en las manos utiliza un software de dictado por voz para realizar sus producciones de Lengua Española. ¿Cómo debe ser considerada esta acción por el docente?",
        opciones: [
            "A) Como una trampa, ya que el currículo exige que el estudiante escriba de su puño y letra.",
            "B) Como un ajuste razonable de acceso que permite al estudiante demostrar su competencia de producción escrita sin que su limitación física sea una barrera.",
            "C) Como una excepción que solo se permite si el estudiante tiene una certificación médica de un hospital militar.",
            "D) Como una razón para calificarlo siempre con 'EP' (En Proceso), ya que no hace el mismo esfuerzo físico que los demás."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. Los ajustes razonables incluyen el uso de tecnologías de apoyo. La competencia es 'producción escrita' (capacidad de organizar ideas y sintaxis), no el acto motor del trazo, por lo que el dictado por voz es una evidencia válida."
    },
    {
        id: 344,
        categoria: "Ética",
        pregunta: "La dirección del centro le solicita a una maestra de 5to grado que imparta tutorías remuneradas los sábados a sus propios estudiantes que están en riesgo de reprobar. ¿Es esta práctica éticamente correcta según la normativa docente dominicana?",
        opciones: [
            "A) Sí, siempre que el pago se haga a través de la asociación de padres (APMAE).",
            "B) No, el docente no debe recibir pagos directos de sus propios estudiantes o familias por servicios educativos, ya que genera un conflicto de intereses y falta de equidad.",
            "C) Sí, porque el docente tiene libertad de usar su tiempo libre como prefiera.",
            "D) No, a menos que el director del distrito escolar firme una autorización especial."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Código de Ética y Estatuto Docente. El cobro por tutorías a los propios alumnos del docente está prohibido por ética profesional, ya que puede condicionar la evaluación objetiva y crear privilegios basados en la capacidad económica de la familia."
    },
    {
        id: 345,
        categoria: "Planificación",
        pregunta: "Al planificar una unidad sobre 'La Comunidad' en 2do grado, la maestra decide realizar una visita al ayuntamiento local. ¿A qué componente del diseño curricular pertenece esta actividad?",
        opciones: [
            "A) Contenido conceptual.",
            "B) Estrategia de enseñanza y aprendizaje (Recuperación de experiencias previas y descubrimiento).",
            "C) Evaluación diagnóstica sumativa.",
            "D) Competencia fundamental ética únicamente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. Las visitas o excursiones pedagógicas son estrategias didácticas que permiten el aprendizaje por descubrimiento y la inserción del estudiante en el entorno, facilitando el aprendizaje significativo."
    },
    {
        id: 346,
        categoria: "Evaluación",
        pregunta: "Un estudiante de 6to grado ha faltado al 25% de las clases de un periodo por enfermedad justificada, pero ha entregado todos los trabajos. ¿Qué establece la normativa sobre la promoción respecto a la asistencia?",
        opciones: [
            "A) Reprueba automáticamente por no cumplir con el 80% de asistencia mínima.",
            "B) El centro debe analizar la justificación médica y, si el estudiante demuestra el logro de las competencias a través de sus producciones, se puede validar su promoción.",
            "C) Se le deben asignar exámenes extraordinarios de todas las materias independientemente de sus notas.",
            "D) La asistencia no tiene ninguna importancia en el Nivel Primario, solo las notas finales."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. Aunque se requiere un 80% de asistencia, las ausencias justificadas (salud) deben ser tratadas con flexibilidad pedagógica, priorizando la demostración de las competencias sobre el conteo punitivo de días."
    },
    {
        id: 347,
        categoria: "Inclusión",
        pregunta: "En 3er grado hay una estudiante con Albinismo que sufre de fotofobia (sensibilidad extrema a la luz). ¿Cuál es la medida de gestión de aula más adecuada para ella?",
        opciones: [
            "A) Ubicarla en el lugar más oscuro del aula y no dejarla salir al recreo.",
            "B) Permitir el uso de lentes oscuros y gorra dentro del aula, y ubicar su pupitre lejos de las ventanas y del reflejo directo de la pizarra.",
            "C) Exigirle que se adapte a la iluminación estándar del aula para no acostumbrarla a privilegios.",
            "D) Asignarle una maestra sombra que le lea todo el tiempo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. Los ajustes razonables para estudiantes con condiciones visuales específicas incluyen la gestión del entorno (iluminación) y el permiso para usar apoyos personales (lentes/gorra) que garanticen su comodidad y acceso al aprendizaje."
    },
    {
        id: 348,
        categoria: "Gestión del Aprendizaje",
        pregunta: "Un grupo de 5to grado muestra dificultades para trabajar en equipo, terminando siempre en discusiones. La maestra decide implementar la estrategia de 'Mediación de Pares'. ¿Qué busca lograr primordialmente?",
        opciones: [
            "A) Que los estudiantes se castiguen entre ellos sin que la maestra intervenga.",
            "B) Desarrollar la competencia ética y ciudadana, permitiendo que los mismos estudiantes resuelvan sus conflictos mediante el diálogo y el consenso.",
            "C) Identificar quién es el líder más agresivo para suspenderlo.",
            "D) Ahorrar tiempo de clase para poder terminar los contenidos del libro."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Convivencia y Adecuación Curricular (Competencia Ética y Ciudadana). La mediación de pares es una estrategia formativa que empodera a los estudiantes en la cultura de paz y resolución pacífica de conflictos."
    },
    {
        id: 349,
        categoria: "Alfabetización",
        pregunta: "Durante la etapa de escritura silábica-alfabética, un niño escribe 'MAIPOSA' (omitiendo la 'R'). ¿Cómo debe reaccionar la maestra ante este 'error'?",
        opciones: [
            "A) Tacharlo con rojo y escribir 'MAL' al lado para que no lo repita.",
            "B) Realizar una intervención centrada en la conciencia fonológica, pidiéndole que repita la palabra lentamente y note el sonido que le falta, valorando el avance hacia la escritura convencional.",
            "C) Ignorarlo, ya que eventualmente aprenderá a escribir solo al llegar a 6to grado.",
            "D) Mandarlo a repetir la palabra 'Mariposa' 100 veces en casa."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. En la alfabetización inicial, las omisiones son parte del proceso de construcción del sistema de escritura. La retroalimentación debe ser constructiva, promoviendo la reflexión sobre el sonido-grafía (conciencia fonológica) sin penalizar el error como fracaso."
    },
    {
        id: 350,
        categoria: "Planificación",
        pregunta: "Al seleccionar los medios y recursos para una unidad de Ciencias de la Naturaleza, ¿cuál debe ser el criterio principal de la maestra de 4to grado?",
        opciones: [
            "A) Que sean los más costosos y modernos del mercado.",
            "B) Que sean coherentes con el nivel de desarrollo de los estudiantes, promuevan la indagación y faciliten el logro de los indicadores de logro propuestos.",
            "C) Que sean recursos que los estudiantes puedan usar solos sin que el maestro tenga que explicar nada.",
            "D) Que sean exclusivamente digitales, eliminando el uso de materiales concretos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. Los recursos deben servir como mediadores del aprendizaje. Su selección depende de la intención pedagógica y de su capacidad para movilizar competencias de manera efectiva en el contexto específico de los alumnos."
    },
    {
        id: 351,
        categoria: "Evaluación",
        pregunta: "Un docente de 6to grado decide utilizar el 'Registro Anecdótico' para evaluar. ¿Qué tipo de información debe asentar en este instrumento para que sea válido profesionalmente?",
        opciones: [
            "A) Opiniones personales sobre la personalidad de los padres del estudiante.",
            "B) Hechos significativos observables, descritos de forma objetiva, sin juicios de valor, junto con una interpretación pedagógica breve.",
            "C) Una lista de todos los estudiantes que no trajeron la tarea.",
            "D) Comentarios sobre la apariencia física de los estudiantes."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. El registro anecdótico es una técnica de observación. Su validez radica en la objetividad de la descripción del hecho (incidente crítico o avance notable) para luego realizar un análisis pedagógico que oriente la intervención."
    },
    {
        id: 352,
        categoria: "Inclusión",
        pregunta: "Llega un estudiante de 2do grado que habla una lengua extranjera y no domina el español. ¿Cuál es la primera acción que debe tomar la maestra de grado?",
        opciones: [
            "A) Pedir que lo cambien de curso hasta que aprenda español en un instituto privado.",
            "B) Utilizar apoyos visuales, gestuales y el juego como lenguaje universal, mientras solicita apoyo al equipo de orientación para un plan de acogida lingüística.",
            "C) No evaluarlo durante todo el año escolar porque no entiende lo que se le dice.",
            "D) Prohibirle que hable su lengua materna en el aula para que se fuerce a aprender español rápido."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024 y Enfoque de Derechos. La barrera lingüística no debe ser causa de exclusión. El docente debe adaptar su comunicación y fomentar un ambiente de respeto a la identidad cultural del estudiante mientras facilita la adquisición del español."
    },
    {
        id: 353,
        categoria: "Alfabetización",
        pregunta: "En una actividad de 'Escritura Colectiva' en 1er grado, la maestra escribe en la pizarra lo que los niños le dictan sobre un paseo. ¿Qué está modelando principalmente con esta estrategia?",
        opciones: [
            "A) Que ella sabe escribir mejor que ellos.",
            "B) El proceso de planificación, textualización y revisión de un texto, y la correspondencia entre lo que se dice y lo que se escribe.",
            "C) Una forma de mantenerlos callados mientras ella escribe.",
            "D) Que no es necesario que ellos aprendan a escribir si ella lo hace por ellos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. La escritura a través del maestro es una estrategia potente de alfabetización donde el docente actúa como 'escriba', permitiendo que los niños se centren en la composición del mensaje mientras observan las convenciones del sistema escrito."
    },
    {
        id: 354,
        categoria: "Planificación",
        pregunta: "Al diseñar una 'Situación de Aprendizaje', una maestra incluye: el contexto, el problema o reto, la estrategia, las actividades y el producto esperado. ¿Qué elemento falta para que esté completa según la Adecuación Curricular?",
        opciones: [
            "A) La firma de todos los padres de la sección.",
            "B) El punto de llegada o vinculación con las competencias y el para qué se aprende.",
            "C) El precio de los materiales que se van a utilizar.",
            "D) Una lista de castigos para quienes no participen."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. Una Situación de Aprendizaje debe tener una intención pedagógica clara, conectando el reto del contexto con las competencias que se pretenden desarrollar (el 'para qué')."
    },
    {
        id: 355,
        categoria: "Ética",
        pregunta: "Una maestra de 3er grado se da cuenta de que el refrigerio escolar llegó en mal estado (leche cortada). ¿Cuál es su acción inmediata según su rol profesional?",
        opciones: [
            "A) Decirle a los niños que se la tomen rápido para no desperdiciar comida del gobierno.",
            "B) Impedir la distribución del producto, informar inmediatamente a la dirección para que se reporte a INABIE y buscar una alternativa para asegurar la alimentación de los niños ese día.",
            "C) Llevarse la leche para su casa para dársela a sus mascotas.",
            "D) No decir nada para evitarse problemas con el suplidor del almuerzo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 y protocolos de salud escolar. El docente tiene un deber de cuidado sobre la salud física de sus estudiantes. Distribuir alimentos en mal estado es una negligencia grave contra la integridad del menor."
    },
    {
        id: 356,
        categoria: "Evaluación",
        pregunta: "En 4to grado, la maestra utiliza la 'Autoevaluación'. Un estudiante que no trabajó nada se califica con la nota máxima. ¿Qué debe hacer la maestra para que esta estrategia sea efectiva?",
        opciones: [
            "A) Humillarlo frente a todos por mentiroso.",
            "B) Realizar una entrevista de retroalimentación privada donde se contrasten las evidencias del portafolio con su percepción, ayudándole a reflexionar sobre su proceso real.",
            "C) Aceptar la nota que él se puso porque la autoevaluación es subjetiva y no se puede cuestionar.",
            "D) Eliminar la autoevaluación y decidir ella sola la nota de todos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La autoevaluación es un proceso de metacognición. Cuando no coincide con la realidad, el docente debe intervenir como mediador para que el estudiante aprenda a valorar su propio desempeño con honestidad basándose en criterios y evidencias."
    },
    {
        id: 357,
        categoria: "Gestión del Aprendizaje",
        pregunta: "Para trabajar la resolución de conflictos en 6to grado, la maestra propone un 'Juego de Roles' donde los estudiantes representan una discusión por un turno de juego. ¿Cuál es la ventaja pedagógica de esta técnica?",
        opciones: [
            "A) Que los estudiantes se diviertan y pierdan el tiempo de clase.",
            "B) Que puedan experimentar empatía al ponerse en el lugar del otro y ensayar soluciones asertivas en un ambiente seguro.",
            "C) Identificar quién actúa mejor para enviarlo a un casting de televisión.",
            "D) Que los estudiantes se peleen de verdad para luego poder castigarlos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Estrategias de aprendizaje (Adecuación Curricular). El juego de roles es una estrategia de aprendizaje socioemocional que permite el ensayo de conductas sociales y el desarrollo de la competencia comunicativa y ciudadana."
    },
    {
        id: 358,
        categoria: "Inclusión",
        pregunta: "Un estudiante de 1er grado presenta dificultades severas de lenguaje oral (dislalia). Los compañeros se burlan cuando habla. ¿Qué acción debe priorizar la maestra?",
        opciones: [
            "A) Pedirle al estudiante que no hable en clase para que no se burlen de él.",
            "B) Trabajar con el grupo la valoración de la diversidad y el respeto, mientras realiza actividades de estimulación del lenguaje y coordina con la familia la visita a un fonoaudiólogo.",
            "C) Castigar a todos los que se rían con reportes en el registro anecdótico.",
            "D) Grabar al niño hablando para mostrarle lo mal que suena y que así intente mejorar."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024 y Manual de Convivencia. La inclusión implica eliminar barreras actitudinales (la burla) y brindar apoyos específicos. La maestra debe ser modelo de aceptación y facilitadora de apoyos externos necesarios."
    },
    {
        id: 359,
        categoria: "Planificación",
        pregunta: "La maestra de 5to grado integra el uso de tablets proporcionadas por el MINERD para que los estudiantes investiguen sobre el relieve dominicano. ¿Bajo qué competencia fundamental se ampara principalmente esta acción?",
        opciones: [
            "A) Competencia Ética y Ciudadana solamente.",
            "B) Competencia Científica y Tecnológica.",
            "C) Competencia de Desarrollo Personal y Espiritual.",
            "D) Competencia Ambiental y de la Salud únicamente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. El uso de herramientas digitales para la investigación, selección de información y resolución de problemas está directamente vinculado a la Competencia Científica y Tecnológica."
    },
    {
        id: 360,
        categoria: "Evaluación",
        pregunta: "Al finalizar un proyecto sobre 'Plantas Medicinales' en 2do grado, los estudiantes presentan un huerto escolar. ¿Qué tipo de evaluación se está realizando en este momento de cierre?",
        opciones: [
            "A) Evaluación diagnóstica inicial.",
            "B) Evaluación sumativa o de producto final para valorar el nivel de logro de las competencias trabajadas.",
            "C) Evaluación de castigo por no estudiar para el examen.",
            "D) No es evaluación, es solo una actividad recreativa."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La presentación del producto de un proyecto es un hito de evaluación sumativa (integración de aprendizajes) que permite observar el desempeño final de los estudiantes frente a los indicadores de logro."
    },

    {
        id: 361,
        categoria: "Evaluación",
        pregunta: "En 4to grado, un docente utiliza una rúbrica para evaluar una exposición. Un estudiante cumple con el contenido técnico, pero muestra mucha inseguridad y lenguaje corporal retraído. El indicador a evaluar es: 'Expresa sus ideas con claridad y seguridad'. ¿Cuál es la valoración correcta?",
        opciones: [
            "A) 'Logrado' (L), porque lo más importante es que dominaba los conceptos del tema.",
            "B) 'En Proceso' (EP), ya que la competencia comunicativa integra tanto el dominio del contenido como las habilidades expresivas y actitudinales.",
            "C) 'Iniciado' (I), para obligarlo a que practique más su oratoria en la próxima clase.",
            "D) No evaluarlo y pedirle que repita la exposición cuando se sienta más valiente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023 y Ordenanza 04-2023. Las competencias son integrales. Si el indicador especifica 'seguridad', y el estudiante muestra dificultades en ese aspecto, no ha alcanzado el nivel de logro total, por lo que corresponde 'En Proceso' con su debida retroalimentación orientadora."
    },
    {
        id: 362,
        categoria: "Alfabetización",
        pregunta: "Una maestra de 1er grado nota que varios estudiantes escriben de derecha a izquierda y de abajo hacia arriba. Según la Ordenanza 01-2023, ¿cuál es la intervención adecuada?",
        opciones: [
            "A) Remitirlos a terapia ocupacional por posible desorientación espacial grave.",
            "B) Modelar el uso del espacio en la pizarra y el cuaderno, reforzando la direccionalidad de la escritura (izquierda-derecha, arriba-abajo) mediante actividades de seguimiento visual.",
            "C) Ignorar el hecho, puesto que en 1er grado la forma de escribir no es relevante.",
            "D) Prohibirles escribir hasta que memoricen las reglas de direccionalidad de forma oral."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. La direccionalidad es una convención del sistema de escritura que se adquiere mediante la práctica y el modelado del docente en situaciones reales de escritura, no es una patología en las etapas iniciales."
    },
    {
        id: 363,
        categoria: "Inclusión",
        pregunta: "En una clase de 3er grado, un estudiante con discapacidad auditiva parcial (hipoacusia) se pierde constantemente en las explicaciones orales. ¿Qué ajuste de acceso es prioritario?",
        opciones: [
            "A) Sentarlo al final del aula para que no se distraiga con los movimientos de sus compañeros.",
            "B) Ubicarlo cerca del docente, asegurar el contacto visual antes de hablar y apoyar las explicaciones con material visual o lenguaje escrito en la pizarra.",
            "C) Pedirle a un compañero que le grite las instrucciones al oído cada vez que el maestro hable.",
            "D) Eximirlo de todas las actividades que requieran escuchar, dándole tareas de dibujo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. La inclusión efectiva requiere eliminar barreras de comunicación. El apoyo visual y la ubicación estratégica (proximidad al emisor) son ajustes razonables esenciales para estudiantes con dificultades auditivas."
    },
    {
        id: 364,
        categoria: "Ética",
        pregunta: "Un docente de 6to grado recibe un mensaje de WhatsApp de un padre criticando de forma ofensiva su método de enseñanza. ¿Cuál es la respuesta profesional correcta?",
        opciones: [
            "A) Responder al mensaje de la misma forma para defender su honor profesional.",
            "B) Bloquear al padre y no volver a hablar con él durante el resto del año escolar.",
            "C) Mantener la calma, no discutir por chat y citar al padre a una entrevista presencial en el centro, con presencia del coordinador si es necesario, para dialogar bajo las normas de respeto.",
            "D) Publicar la captura de pantalla en sus redes sociales para denunciar el acoso de los padres."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Manual de Convivencia y Estatuto del Docente. El docente debe ser mediador y mantener la compostura ética. Los conflictos con las familias deben resolverse por los canales institucionales presenciales y formales, evitando la escalada de agresión en medios informales."
    },
    {
        id: 365,
        categoria: "Planificación",
        pregunta: "Al planificar el área de Educación Artística en 5to grado, la maestra decide que los estudiantes creen un mural sobre la protección del medio ambiente. ¿Qué estrategia de enseñanza está aplicando?",
        opciones: [
            "A) Estrategia de recuperación de experiencias previas.",
            "B) Estrategia de socialización centrada en actividades grupales y expresión creativa.",
            "C) Descubrimiento e indagación únicamente.",
            "D) Inserción de maestros y el alumnado en el entorno."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. La elaboración de un mural permite la socialización, el trabajo colaborativo y la expresión de saberes a través del arte, conectando con el eje transversal ambiental de forma práctica."
    },
    {
        id: 366,
        categoria: "Evaluación",
        pregunta: "Un niño de 2do grado ha logrado todos los indicadores de Matemáticas, excepto uno relacionado con la resolución de problemas de suma con reagrupación. ¿Qué calificación final debe aparecer en el reporte de progreso?",
        opciones: [
            "A) Logrado (L), porque un solo indicador no debe afectar el promedio general.",
            "B) En Proceso (EP), porque la promoción al grado superior depende del logro de la competencia, y este indicador es fundamental para el siguiente nivel.",
            "C) Iniciado (I), para castigar su falta de atención en ese tema específico.",
            "D) Dejar el espacio en blanco hasta que el niño lo aprenda en las vacaciones."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. El sistema de evaluación en primaria es criterial. Si hay un indicador clave no logrado, la valoración global del periodo refleja que el proceso de aprendizaje aún no se ha completado satisfactoriamente."
    },
    {
        id: 367,
        categoria: "Alfabetización",
        pregunta: "En la fase de alfabetización, un docente utiliza el 'Banco de Palabras' del aula para que los niños de 1er grado comparen palabras largas y cortas (ej. 'sol' vs 'mariposa'). ¿Qué objetivo persigue?",
        opciones: [
            "A) Que aprendan a contar letras para Matemáticas.",
            "B) Desarrollar la conciencia gráfica y la reflexión sobre la longitud de las palabras, ayudándoles a desvincular el tamaño del objeto del tamaño de la palabra escrita.",
            "C) Que se cansen de escribir palabras largas y prefieran las cortas.",
            "D) Memorizar el abecedario en orden alfabético."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. Es común que los niños piensen que objetos grandes deben tener palabras largas (realismo nominal). Comparar palabras ayuda a romper esta idea y a centrarse en las propiedades del sistema de escritura."
    },
    {
        id: 368,
        categoria: "Inclusión",
        pregunta: "Un estudiante de 5to grado suele terminar sus tareas muy rápido y se pone a dibujar de forma excelente, pero se niega a participar en las actividades de grupo de Ciencias Sociales. ¿Cuál es el enfoque correcto?",
        opciones: [
            "A) Prohibirle dibujar en el centro educativo porque no es clase de Arte.",
            "B) Utilizar su talento para el dibujo como un canal para integrarlo al grupo, pidiéndole que sea el ilustrador del proyecto de Ciencias Sociales del equipo.",
            "C) Dejarlo que dibuje solo siempre que quiera para que no moleste a los demás.",
            "D) Bajarle puntos en Artística por dibujar cuando no le toca."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024 (DUA). El docente debe aprovechar los intereses y talentos (fortalezas) del estudiante para motivar su participación en áreas donde muestra resistencia, fomentando la inclusión social a través de su capacidad creativa."
    },
    {
        id: 369,
        categoria: "Gestión del Aprendizaje",
        pregunta: "Durante una actividad de laboratorio en 6to grado, se rompe un instrumento por negligencia de un estudiante que estaba jugando. ¿Cuál es la consecuencia formativa más coherente?",
        opciones: [
            "A) Expulsar al estudiante del laboratorio por el resto del año.",
            "B) Aplicar una medida restaurativa donde el estudiante, junto a su familia, busque una forma de reparar el daño o contribuir al cuidado de los materiales, previo diálogo reflexivo sobre la seguridad.",
            "C) Cobrarle el triple del valor del instrumento como multa económica directa al maestro.",
            "D) Ignorar el hecho para no tener conflictos con los padres."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Convivencia y OD 22-2023. Las medidas disciplinarias deben ser formativas y restaurativas. La sanción debe estar vinculada al hecho y promover la responsabilidad y el cuidado del bien común, no solo el castigo."
    },
    {
        id: 370,
        categoria: "Evaluación",
        pregunta: "Una maestra de 3er grado utiliza la técnica de 'Observación' durante una dinámica grupal. ¿Cuál de estos instrumentos es el más adecuado para registrar el desempeño individual de forma objetiva?",
        opciones: [
            "A) Una hoja en blanco donde escribe lo que se le ocurre al final del día.",
            "B) Una Lista de Cotejo con indicadores de conducta y participación previamente establecidos.",
            "C) El registro de asistencia únicamente.",
            "D) Un cuaderno de quejas para los padres."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La observación sistemática requiere de instrumentos que den rigor a la evaluación. La lista de cotejo permite verificar la presencia o ausencia de rasgos específicos alineados a los indicadores de logro."
    },
    {
        id: 371,
        categoria: "Planificación",
        pregunta: "En la Adecuación Curricular 2023, ¿cuál es la diferencia principal entre una Competencia Fundamental y una Competencia Específica?",
        opciones: [
            "A) Las fundamentales son solo para los maestros y las específicas para los alumnos.",
            "B) Las fundamentales expresan las intenciones educativas de mayor relevancia y validez universal, mientras que las específicas se concretan a partir de las áreas académicas.",
            "C) Las fundamentales se evalúan con números y las específicas con letras.",
            "D) No hay diferencia, son términos intercambiables."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. Las Competencias Fundamentales (ej. Ética y Ciudadana, Comunicativa) atraviesan todo el currículo. Las Específicas son la traducción de esas intenciones al campo del saber de cada asignatura (Lengua Española, Matemática, etc.)."
    },
    {
        id: 372,
        categoria: "Ética",
        pregunta: "Una docente se entera por un rumor que una colega del mismo grado está hablando mal de ella con los padres. ¿Cuál es el paso correcto según el compromiso profesional?",
        opciones: [
            "A) Esperarla a la salida para confrontarla físicamente.",
            "B) Solicitar una reunión privada con la colega y, de ser necesario, con la unidad de mediación del centro para aclarar la situación profesionalmente.",
            "C) Hablar mal de esa colega también con los estudiantes para que vean quién tiene la razón.",
            "D) Renunciar al centro inmediatamente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Estatuto Docente y Código de Ética. Los conflictos entre pares deben manejarse con madurez, respeto y siguiendo las vías de comunicación interna, priorizando siempre la armonía del clima escolar por el bienestar de los alumnos."
    },
    {
        id: 373,
        categoria: "Alfabetización",
        pregunta: "Al enseñar a leer en 1er grado, el docente prioriza que los niños comprendan primero el mensaje de un cuento antes de analizar las letras individuales. ¿A qué enfoque responde esto?",
        opciones: [
            "A) Enfoque fonético tradicional.",
            "B) Enfoque textual, funcional y comunicativo.",
            "C) Enfoque de memorización visual.",
            "D) Enfoque de caligrafía mecánica."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. El MINERD promueve un enfoque donde el texto es la unidad de sentido. Se busca que el niño entienda para qué sirve leer y qué dice el texto antes de pasar al análisis de los componentes mínimos (letras/sílabas)."
    },
    {
        id: 374,
        categoria: "Inclusión",
        pregunta: "Un estudiante de 4to grado tiene dificultades de aprendizaje persistentes que no mejoran con los ajustes razonables del docente. ¿Cuál es el procedimiento administrativo a seguir?",
        opciones: [
            "A) Promoverlo de grado 'por piedad' para que no se sienta mal.",
            "B) Solicitar formalmente una evaluación psicopedagógica al equipo de Orientación y Psicología para determinar si existen necesidades específicas de apoyo educativo (NEAE) más complejas.",
            "C) Decirle a la madre que el niño no sirve para estudiar.",
            "D) Ignorar el caso y centrarse solo en los estudiantes que aprenden rápido."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. Cuando los ajustes de aula no son suficientes, se debe activar la ruta de apoyo institucional para realizar una evaluación profunda y, si aplica, diseñar un Plan de Apoyo a la Diversidad."
    },
    {
        id: 375,
        categoria: "Gestión del Aprendizaje",
        pregunta: "Para una clase sobre 'El Ciclo del Agua', el docente organiza a los niños en semicírculo para ver un experimento. ¿Por qué es importante la organización del espacio físico?",
        opciones: [
            "A) Porque se ve más bonito para las fotos de la dirección.",
            "B) Porque la organización del espacio debe responder a la intención pedagógica, facilitando la visibilidad, la interacción y el control de la actividad.",
            "C) Porque así el maestro puede sentarse y descansar.",
            "D) No tiene ninguna importancia pedagógica."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Criterios de Gestión de Aula. El ambiente de aprendizaje es un 'tercer maestro'. La disposición de los muebles y estudiantes influye directamente en la atención y en el tipo de interacción social que se genera durante la clase."
    },
    {
        id: 376,
        categoria: "Evaluación",
        pregunta: "Según la Ordenanza 04-2023, ¿cuándo debe realizarse la evaluación formativa?",
        opciones: [
            "A) Solo al final de cada trimestre.",
            "B) Durante todo el proceso de enseñanza y aprendizaje, para identificar avances y dificultades y ajustar la intervención de inmediato.",
            "C) Únicamente cuando el director va a supervisar la clase.",
            "D) Al inicio del año escolar solamente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La evaluación formativa es continua y procesual. Su objetivo no es poner una nota, sino ofrecer retroalimentación constante al estudiante y al docente para mejorar el aprendizaje en marcha."
    },
    {
        id: 377,
        categoria: "Alfabetización",
        pregunta: "Un niño de 2do grado escribe 'CASA' como 'KSA'. Desde el punto de vista de la alfabetización inicial, ¿cómo se valora esto?",
        opciones: [
            "A) Es un error ortográfico grave que debe ser castigado.",
            "B) Es una muestra de que el niño tiene conciencia fonológica y está en una etapa silábico-alfabética o alfabética inicial, asociando sonidos a letras aunque no domine aún la ortografía convencional.",
            "C) Es señal de que el niño no sabe nada.",
            "D) Debe repetir 1er grado inmediatamente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. La escritura es un proceso constructivo. El uso de la 'K' por 'C' demuestra que el niño entiende la relación fonema-grafema. La ortografía convencional es una meta posterior que se trabaja con la lectura frecuente de textos."
    },
    {
        id: 378,
        categoria: "Ética",
        pregunta: "Una maestra observa que un colega utiliza castigos físicos (reglazos en la mano) con sus estudiantes. ¿Cuál es su obligación legal?",
        opciones: [
            "A) Guardar silencio por compañerismo profesional.",
            "B) Reportar el hecho inmediatamente a la dirección del centro, ya que el castigo físico está estrictamente prohibido por la Ley 136-03 y el Manual de Convivencia.",
            "C) Pedirle al colega que le enseñe a ella también a dar reglazos.",
            "D) Hablar con los niños para decirles que se porten mejor para que no les peguen."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 y Ordenanza 22-2023. El maltrato físico es una violación a los derechos fundamentales del niño. El docente que presencia o conoce de estos hechos tiene el deber legal de denunciar para proteger la integridad de los menores."
    },
    {
        id: 379,
        categoria: "Planificación",
        pregunta: "Al planificar por competencias, ¿qué papel juegan los 'Contenidos'?",
        opciones: [
            "A) Son el fin último de la educación: el niño debe memorizarlos todos.",
            "B) Son mediadores del aprendizaje que permiten el desarrollo de las competencias.",
            "C) Son elementos opcionales que el docente puede usar o no.",
            "D) Son los títulos de los libros de texto."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. En el enfoque por competencias, los contenidos no se enseñan por sí mismos, sino como herramientas para que el estudiante aprenda a actuar y resolver problemas en la realidad."
    },
    {
        id: 380,
        categoria: "Evaluación",
        pregunta: "En 5to grado, tras un examen, el docente nota que el 90% del curso fracasó en una pregunta específica. ¿Qué debe hacer el docente?",
        opciones: [
            "A) Ignorar el resultado y seguir con el siguiente tema.",
            "B) Analizar si la pregunta estaba mal planteada o si el tema no fue bien enseñado, y realizar una retroalimentación colectiva o re-enseñanza del concepto.",
            "C) Ponerles una nota baja a todos por no estudiar.",
            "D) Culpar a la maestra del grado anterior por no darles buena base."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. Los resultados de la evaluación deben servir para la reflexión docente. Un fracaso masivo en un ítem es un indicador de que el proceso de enseñanza en ese punto falló y requiere una acción correctiva pedagógica."
    },


    {
        id: 381,
        categoria: "Evaluación",
        pregunta: "Un docente de 4to grado aplica una técnica de 'Desempeño' solicitando a los estudiantes que realicen un mapa conceptual sobre el relieve. ¿Qué ventaja ofrece este instrumento frente a una prueba de selección múltiple?",
        opciones: [
            "A) Es más fácil y rápido de corregir para el docente.",
            "B) Permite observar la capacidad del estudiante para jerarquizar conceptos y establecer relaciones lógicas entre ellos.",
            "C) Garantiza que todos los estudiantes obtengan una calificación de 'Logrado'.",
            "D) No requiere que el docente haya impartido el tema previamente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. Los mapas conceptuales son instrumentos de evaluación de desempeño que evidencian procesos cognitivos de alto nivel, como la síntesis y la organización del conocimiento, fundamentales en el enfoque por competencias."
    },
    {
        id: 382,
        categoria: "Alfabetización",
        pregunta: "En 1er grado, durante la 'Lectura Compartida', la maestra señala con el dedo cada palabra mientras lee en voz alta un texto ampliado. ¿Qué convención de la lengua escrita está reforzando?",
        opciones: [
            "A) La entonación y las pausas de los signos de puntuación únicamente.",
            "B) La correspondencia entre lo que se oye y lo que está escrito, y la linealidad de la escritura.",
            "C) La memorización del abecedario de forma visual.",
            "D) Que los niños no deben intentar leer por su cuenta todavía."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. El seguimiento de la lectura con el dedo ayuda a los niños en etapa inicial a comprender que cada segmento de voz corresponde a un segmento escrito (conciencia de la palabra) y refuerza la direccionalidad izquierda-derecha."
    },
    {
        id: 383,
        categoria: "Inclusión",
        pregunta: "Se integra a un aula de 5to grado un estudiante con Trastorno por Déficit de Atención con Hiperactividad (TDAH). ¿Qué estrategia de gestión de aula es más efectiva para apoyar su aprendizaje?",
        opciones: [
            "A) Sentarlo al fondo del aula para que sus movimientos no distraigan a los demás.",
            "B) Fragmentar las tareas largas en pasos cortos y claros, permitir pausas activas y ubicarlo en un lugar con pocas distracciones visuales.",
            "C) Darle una carga doble de ejercicios para que gaste su energía y se quede tranquilo.",
            "D) Pedirle que guarde silencio absoluto durante toda la jornada escolar bajo amenaza de reporte."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. El apoyo a estudiantes con TDAH requiere ajustes en la metodología (instrucciones breves) y en el ambiente (control de estímulos) para facilitar su autorregulación y enfoque en la tarea."
    },
    {
        id: 384,
        categoria: "Ética",
        pregunta: "Un docente observa que un grupo de padres ha creado un grupo de chat donde se difunden noticias falsas sobre las vacunas escolares. ¿Cuál es el rol del docente ante esta situación?",
        opciones: [
            "A) Unirse al grupo y discutir agresivamente para demostrar que tiene la razón.",
            "B) Informar al equipo de gestión y proponer una charla informativa con personal de salud para orientar a las familias con base científica.",
            "C) No intervenir, pues lo que los padres hablen en privado no es asunto de la escuela.",
            "D) Expulsar a los hijos de esos padres hasta que se retracten de lo dicho."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Rol de la Escuela y la Comunidad. El docente es un referente social y promotor de la salud. Ante la desinformación que afecta el bienestar estudiantil, debe propiciar canales institucionales de orientación y diálogo basados en la evidencia científica."
    },
    {
        id: 385,
        categoria: "Planificación",
        pregunta: "Al diseñar una Situación de Aprendizaje, el docente parte de un problema real: 'La acumulación de basura en el patio del centro'. ¿Qué componente curricular se moviliza prioritariamente con este reto?",
        opciones: [
            "A) La Competencia Fundamental Ambiental y de la Salud.",
            "B) El contenido conceptual de la historia dominicana solamente.",
            "C) El uso de la caligrafía artística únicamente.",
            "D) La memorización de las capitales de Europa."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Adecuación Curricular 2023. Las situaciones de aprendizaje vinculadas a problemas del entorno son el escenario ideal para desarrollar competencias transversales, en este caso, la responsabilidad ambiental y el cuidado de la salud."
    },
    {
        id: 386,
        categoria: "Evaluación",
        pregunta: "Un estudiante de 3er grado muestra un excelente desempeño en las actividades diarias, pero en la prueba trimestral escrita se bloquea y reprueba. Según la Ordenanza 04-2023, ¿cuál debe ser la decisión del docente?",
        opciones: [
            "A) Reportar la nota de la prueba como calificación final, ya que es la evidencia más reciente.",
            "B) Considerar la evaluación como un proceso integral, dando peso a las evidencias del proceso (portafolio, observación) y no solo a un instrumento puntual.",
            "C) Obligarlo a tomar una prueba de recuperación más difícil para que aprenda a manejar el estrés.",
            "D) Decirle al estudiante que no tiene capacidad para ese grado."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La evaluación es procesual y continua. Un solo instrumento (la prueba escrita) no puede anular las evidencias acumuladas durante todo el proceso de aprendizaje que demuestran el logro de las competencias."
    },
    {
        id: 387,
        categoria: "Inclusión",
        pregunta: "Una niña de 2do grado presenta una timidez extrema que le impide hablar frente a sus compañeros. ¿Cómo debe evaluarse su competencia comunicativa oral?",
        opciones: [
            "A) Con 'Iniciado' (I), hasta que se decida a hablar como los demás.",
            "B) Buscando formas alternativas, como grabaciones de audio en privado o entrevistas individuales con la maestra, mientras se trabaja gradualmente su confianza.",
            "C) Ignorar su evaluación oral y ponerle la misma nota que saque en los exámenes escritos.",
            "D) Obligarla a subir al escenario en un acto escolar para que pierda el miedo 'a la fuerza'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. Los ajustes razonables también aplican a barreras socioemocionales. El docente debe diversificar los medios para que el estudiante demuestre lo que sabe sin que su condición emocional bloquee la evaluación de la competencia."
    },
    {
        id: 388,
        categoria: "Gestión del Aprendizaje",
        pregunta: "En una clase de 6to grado, los estudiantes están muy inquietos porque es el último periodo del viernes. ¿Qué acción de gestión de aula es más productiva?",
        opciones: [
            "A) Gritar más fuerte que ellos para imponer autoridad.",
            "B) Realizar una dinámica breve de movimiento controlada y luego proponer una actividad de aprendizaje más lúdica o práctica que capture su interés.",
            "C) Sentarse en el escritorio y dejarlos que hagan lo que quieran hasta que suene el timbre.",
            "D) Ponerles una sanción colectiva de quedarse 10 minutos después de la hora de salida."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Estrategias de Gestión de Aula. Un docente efectivo reconoce los ritmos biológicos y niveles de energía del grupo, adaptando la metodología para mantener el enganche pedagógico sin recurrir a medidas punitivas ineficaces."
    },
    {
        id: 389,
        categoria: "Alfabetización",
        pregunta: "Un docente utiliza el 'Nombre Propio' de cada niño para iniciar actividades de lectura y escritura en 1er grado. ¿Por qué es esta una estrategia recomendada por la Ordenanza 01-2023?",
        opciones: [
            "A) Porque es la palabra con mayor carga afectiva y significado para el niño, sirviendo como referente estable de letras y sonidos.",
            "B) Porque así la maestra no confunde a los niños con sus nombres.",
            "C) Porque es la única palabra que los niños están obligados a aprender en todo el año.",
            "D) Porque es más corto que escribir oraciones completas."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Ordenanza 01-2023. El nombre propio es el primer texto que un niño reconoce y desea escribir. Sirve como 'fuente de información' confiable para identificar letras que luego encontrará en otras palabras, facilitando el proceso de alfabetización inicial."
    },
    {
        id: 390,
        categoria: "Planificación",
        pregunta: "Al final de cada unidad, una maestra de 5to grado dedica una sesión a que los estudiantes piensen sobre 'qué aprendieron' y 'cómo lo aprendieron'. ¿Qué proceso está fomentando?",
        opciones: [
            "A) El proceso de calificación sumativa.",
            "B) La metacognición, que es parte esencial del desarrollo de competencias autónomas.",
            "C) La pérdida de tiempo pedagógico.",
            "D) La preparación para un examen nacional."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. La metacognición permite que el estudiante tome conciencia de sus propios procesos de aprendizaje, identifique sus fortalezas y áreas de mejora, lo cual es clave para el 'aprender a aprender'."
    },
    {
        id: 391,
        categoria: "Evaluación",
        pregunta: "Según el registro de grado actual, si un indicador de logro aparece tres veces en diferentes periodos, ¿cómo se determina la valoración final de ese indicador?",
        opciones: [
            "A) Se suman los tres y se divide entre tres (promedio numérico).",
            "B) Se toma la valoración más reciente, ya que refleja el nivel de dominio alcanzado al final del proceso.",
            "C) Se elige la nota más baja para asegurar que el niño siga estudiando.",
            "D) Solo se toma en cuenta la primera vez que se evaluó."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Instructivo del Registro de Grado / Ordenanza 04-2023. La evaluación es sumativa al final del proceso. Lo que importa es el nivel de competencia que el estudiante demuestra al concluir el año o la unidad, valorando su progreso."
    },
    {
        id: 392,
        categoria: "Inclusión",
        pregunta: "En 4to grado hay un estudiante con discapacidad intelectual leve. El grupo está trabajando la división de tres cifras, pero él aún tiene dificultades con la resta. ¿Cómo debe proceder el docente?",
        opciones: [
            "A) Obligarlo a hacer la división de tres cifras igual que todos para que no se sienta discriminado.",
            "B) Realizar una adecuación curricular individualizada, trabajando con él la resta en contextos prácticos mientras el resto avanza, sin excluirlo de la dinámica grupal.",
            "C) Pedirle que salga del aula a la biblioteca cada vez que toque Matemática.",
            "D) Ponerle 'Logrado' aunque no sepa restar para cumplir con la inclusión."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. La inclusión no es que todos hagan lo mismo al mismo tiempo, sino que cada estudiante reciba los apoyos y adaptaciones (ajustes razonables) necesarios para progresar según su nivel y posibilidades."
    },
    {
        id: 393,
        categoria: "Ética",
        pregunta: "Una maestra encuentra a un estudiante llorando porque otro compañero le envió mensajes insultantes por redes sociales durante el fin de semana. ¿Cuál es el protocolo de actuación?",
        opciones: [
            "A) Decirle que como fue el fin de semana y por internet, la escuela no puede intervenir.",
            "B) Tratar el caso como ciberacoso según el Manual de Convivencia, citar a las familias involucradas y realizar acciones de orientación y mediación.",
            "C) Buscar el teléfono del agresor y borrarle la aplicación de redes sociales personalmente.",
            "D) Ignorar el llanto del niño para no fomentar la debilidad emocional."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 22-2023 y Ley 136-03. El ciberacoso es una falta que afecta la convivencia escolar y el bienestar del menor. La institución debe intervenir independientemente de que el origen haya sido digital o fuera de horario."
    },
    {
        id: 394,
        categoria: "Alfabetización",
        pregunta: "Un docente de 2do grado organiza 'Tutorías de Pares' donde niños que ya leen fluidamente ayudan a los que aún están en proceso. ¿Qué beneficio pedagógico tiene esto?",
        opciones: [
            "A) Que la maestra pueda salir del aula a descansar mientras los niños enseñan.",
            "B) Refuerza el aprendizaje de ambos: el tutor consolida su conocimiento al explicarlo y el tutorado recibe apoyo en un lenguaje cercano.",
            "C) Identificar a los niños 'inteligentes' para separarlos de los 'lentos'.",
            "D) No tiene beneficios, los niños solo juegan cuando están juntos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Enfoque Histórico-Cultural (Vygotsky) / Adecuación Curricular. La interacción entre pares en la 'Zona de Desarrollo Próximo' facilita el andamiaje del aprendizaje y promueve valores de colaboración y solidaridad."
    },
    {
        id: 395,
        categoria: "Planificación",
        pregunta: "En la planificación docente, ¿qué diferencia a un 'Recurso' de un 'Medio' didáctico?",
        opciones: [
            "A) No hay diferencia, son sinónimos absolutos.",
            "B) Los medios son diseñados específicamente para educar (libros, láminas), mientras que los recursos son objetos del entorno aprovechados para la enseñanza (piedras, etiquetas).",
            "C) Los medios son digitales y los recursos son físicos.",
            "D) Los recursos los compra el MINERD y los medios los compra el profesor."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Diseño Curricular Dominicano. Es fundamental distinguir que cualquier elemento del contexto puede ser un recurso pedagógico si el docente le da una intención clara para facilitar el aprendizaje."
    },
    {
        id: 396,
        categoria: "Evaluación",
        pregunta: "Un docente de Educación Física nota que un estudiante tiene una condición física que le impide correr largas distancias. ¿Cómo debe evaluar la competencia de aptitud física?",
        opciones: [
            "A) Eximirlo de la materia y ponerle una nota promedio.",
            "B) Adaptar las actividades y los criterios de evaluación a sus posibilidades reales, valorando su esfuerzo y el cumplimiento de metas personales ajustadas.",
            "C) Reprobarlo porque no cumple con los estándares atléticos del grado.",
            "D) Obligarlo a correr hasta que desarrolle la resistencia necesaria."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024 y Enfoque de Derechos. La evaluación en Educación Física debe ser inclusiva. La competencia se mide en relación con el punto de partida y las capacidades del individuo, no por comparación con atletas de alto rendimiento."
    },
    {
        id: 397,
        categoria: "Gestión del Aprendizaje",
        pregunta: "Durante una lluvia intensa, el ruido en el techo de zinc impide que los niños escuchen la explicación. ¿Qué decisión de gestión de aula es la más acertada?",
        opciones: [
            "A) Seguir hablando a gritos para no perder el tiempo de la planificación.",
            "B) Cambiar la actividad a una de trabajo individual silencioso o lectura, que no dependa de la escucha de su voz en ese momento.",
            "C) Mandar a los niños a que salgan a mojarse para que se calmen.",
            "D) Sentarse a esperar que deje de llover sin dar ninguna instrucción."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Flexibilidad Pedagógica. Un buen gestor de aula reacciona ante imprevistos del entorno, ajustando la dinámica para asegurar que el tiempo escolar siga siendo productivo a pesar de las interferencias externas."
    },
    {
        id: 398,
        categoria: "Alfabetización",
        pregunta: "En 1er grado, la maestra utiliza 'Rimas' y 'Trabalenguas' constantemente. ¿Qué dimensión del lenguaje está trabajando principalmente?",
        opciones: [
            "A) La dimensión semántica (el significado de las palabras).",
            "B) La dimensión fonológica (sonidos, rima, aliteración), base para la decodificación escrita.",
            "C) La dimensión caligráfica (el dibujo de las letras).",
            "D) La dimensión histórica de la literatura española."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. El juego con los sonidos del lenguaje (conciencia fonológica) es el paso previo y necesario para que el niño entienda cómo se relacionan los sonidos con las letras (principio alfabético)."
    },
    {
        id: 399,
        categoria: "Ética",
        pregunta: "Un docente se entera de que un estudiante de su curso no está asistiendo porque tiene que cuidar a sus hermanos menores mientras su madre trabaja. ¿Cuál es su deber?",
        opciones: [
            "A) Ponerle faltas en el registro hasta que pierda el año por inasistencia.",
            "B) Reportar el caso a Orientación y Psicología y a la dirección para que se realice una visita domiciliaria y se busque apoyo institucional para garantizar el derecho a la educación del niño.",
            "C) Ir a la casa del niño y regañar a la madre por ser irresponsable.",
            "D) No hacer nada, cada familia resuelve sus problemas como puede."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 y Código del Menor. El docente es garante de derechos. Ante una situación de riesgo social o vulneración del derecho a la educación (trabajo infantil o roles parentales inadecuados), debe activar las alarmas institucionales."
    },
    {
        id: 400,
        categoria: "Evaluación",
        pregunta: "La Adecuación Curricular 2023 establece que la evaluación debe ser 'Criterial'. ¿Qué significa esto?",
        opciones: [
            "A) Que el maestro evalúa según su criterio personal y humor del día.",
            "B) Que el desempeño del estudiante se compara con criterios e indicadores de logro predefinidos en el currículo, no con el desempeño de sus compañeros.",
            "C) Que solo se evalúa a los estudiantes que tienen buen criterio para hablar.",
            "D) Que la evaluación se basa en la cantidad de páginas que el niño escribió en el cuaderno."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023 / Ordenanza 04-2023. La evaluación criterial busca objetividad. El éxito del estudiante se mide por cuánto se acerca al indicador de logro esperado para su grado y edad, eliminando la competencia insana entre pares."
    },

    {
        id: 401,
        categoria: "Gestión del Aprendizaje",
        pregunta: "Durante una actividad de producción escrita en 4to grado, un estudiante interrumpe constantemente haciendo ruidos y levantándose de su asiento, afectando la concentración del grupo. El docente ya ha intentado redireccionarlo sin éxito. ¿Cuál es la decisión pedagógica y de gestión de aula más apropiada según el enfoque restaurativo?",
        opciones: [
            "A) Retirarle el derecho al recreo ese día para que comprenda que sus acciones tienen consecuencias directas sobre sus privilegios.",
            "B) Dialogar con el estudiante en privado para identificar qué necesidad o barrera le impide concentrarse, y asignarle un rol de liderazgo o responsabilidad en la dinámica (ej. monitor de materiales) para canalizar su energía.",
            "C) Referirlo inmediatamente a la unidad de Orientación y Psicología, ya que las interrupciones recurrentes escapan de la responsabilidad pedagógica del maestro de aula.",
            "D) Restarle puntos en el indicador de 'Participación ciudadana' del registro de grado, advirtiéndole frente al grupo para que sirva de escarmiento."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Convivencia (OD 22-2023) y Gestión de Aula. Castigar con el recreo o bajar puntos académicos por disciplina son prácticas prohibidas y punitivas. Derivar a orientación es una evasión del rol docente de primer nivel. La disciplina positiva busca el diálogo, identificar la causa (aburrimiento, TDAH, estilo de aprendizaje) y canalizar la conducta hacia roles positivos."
    },
    {
        id: 402,
        categoria: "Planificación Pedagógica",
        pregunta: "Una maestra de 2do grado desea diseñar una Situación de Aprendizaje para la unidad de 'Los Símbolos Patrios'. Para que sea válida según la Adecuación Curricular 2023, ¿cuál debe ser el punto de partida innegociable en su diseño?",
        opciones: [
            "A) La selección de los contenidos conceptuales exactos tal como aparecen en el libro de texto de Ciencias Sociales.",
            "B) La definición de una problemática, interés o necesidad real o simulada del contexto de los estudiantes que demande la movilización de competencias para resolverse o crear un producto.",
            "C) La redacción de preguntas de selección múltiple que aseguren que los niños memoricen las fechas patrias.",
            "D) La organización de un acto cívico general donde los estudiantes marchen en silencio."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. La Situación de Aprendizaje no parte del contenido (eso es conductismo), sino de un contexto y un reto/problema (ej. 'En la escuela se acercan las efemérides y no tenemos ambientación...'). El contenido es solo el medio para lograr el producto y movilizar la competencia."
    },
    {
        id: 403,
        categoria: "Comportamientos Profesionales",
        pregunta: "A la hora de la salida, un padre aborda a la maestra de 5to grado en el pasillo, gritándole y reclamando airadamente por la calificación de 'Iniciado' (I) que recibió su hijo. El padre amenaza con ir al distrito educativo. ¿Cuál es el proceder ético e institucional del docente?",
        opciones: [
            "A) Defender su autoridad profesional argumentando en voz alta para no mostrar debilidad frente a otros padres y estudiantes que están observando.",
            "B) Ignorar al padre, darle la espalda y subir a su vehículo, ya que su jornada laboral ha terminado.",
            "C) Mantener la calma, invitar al padre a la oficina de coordinación u orientación para garantizar la privacidad, aplicar la escucha activa y mostrar las evidencias (portafolio) que sustentan la valoración.",
            "D) Acceder a cambiar la calificación temporalmente a 'En Proceso' (EP) para calmar al padre y evitar un conflicto mayor en el centro."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Código de Ética Docente y Manual de Convivencia. El docente es un mediador y profesional. Debe desescalar la violencia, garantizar el debido proceso y la confidencialidad, y respaldar sus decisiones evaluativas con las evidencias del proceso, nunca alterando notas por coerción ni respondiendo con agresión."
    },
    {
        id: 404,
        categoria: "Gestión del Aprendizaje",
        pregunta: "En una clase de Matemáticas de 6to grado, la docente introduce el tema de fracciones. Nota que el 75% del grupo no logra comprender las operaciones básicas con fracciones escritas en la pizarra. ¿Qué decisión refleja una gestión efectiva del aprendizaje?",
        opciones: [
            "A) Repetir la explicación en la pizarra utilizando el mismo método, pero hablando más despacio y con voz más alta.",
            "B) Pausar la explicación simbólica y retroceder a la etapa concreta (manipulativa), introduciendo material didáctico tangible (regletas, pizzas de papel) antes de volver al plano abstracto.",
            "C) Avanzar con el tema y asignar tarea extra para la casa, asumiendo que con la práctica y la ayuda de los padres entenderán.",
            "D) Evaluar con un examen escrito al final de la clase para forzarlos a prestar atención."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Enfoque Constructivista (Adecuación Curricular). Cuando hay una barrera generalizada en la comprensión abstracta, repetir el mismo método no funciona. Se debe aplicar la progresión CPA (Concreto-Pictórico-Abstracto), regresando al material manipulativo para garantizar la asimilación del concepto."
    },
    {
        id: 405,
        categoria: "Inclusión",
        pregunta: "Una maestra de 3er grado recibe a un estudiante diagnosticado con Dislexia. El estudiante tiene ideas brillantes de forma oral, pero sus producciones escritas son ininteligibles y se frustra al escribir. Según la Ordenanza 05-2024, ¿cuál es el ajuste razonable correcto para evaluar su comprensión en Ciencias Sociales?",
        opciones: [
            "A) Disminuirle la exigencia académica y evaluarlo con los indicadores de logro de 1er grado.",
            "B) Eximirlo de las pruebas escritas y enviarlo a la biblioteca durante las evaluaciones.",
            "C) Permitirle demostrar el indicador de logro mediante formatos alternativos de expresión (oralidad, exposiciones, dibujos o grabaciones) mientras se le brinda apoyo específico en su lectoescritura.",
            "D) Darle más tiempo en el examen escrito y penalizar sus faltas ortográficas para que se esfuerce en mejorar."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ordenanza 05-2024 (Diseño Universal para el Aprendizaje - DUA). La dislexia afecta la decodificación y escritura, no la inteligencia ni la comprensión social. El ajuste no es bajar el nivel (A) ni excluir (B), sino variar el MEDIO DE EXPRESIÓN para que el estudiante demuestre la competencia sin que el formato escrito sea una barrera."
    },
    {
        id: 406,
        categoria: "Planificación Pedagógica",
        pregunta: "Al planificar el Eje Transversal 'Salud y Bienestar' en 1er grado, un equipo docente debate sobre cómo abordarlo. ¿Cuál de las siguientes acciones demuestra una verdadera integración transversal alineada a la Adecuación Curricular?",
        opciones: [
            "A) Dedicar todos los viernes 15 minutos exclusivos para hablar de salud, separados de las asignaturas regulares.",
            "B) Organizar una charla magistral con un pediatra una vez al mes para todo el centro educativo.",
            "C) Articular el eje a través de un proyecto donde, en Lengua Española, los niños lean y escriban recetas saludables; en Matemáticas, cuenten frutas; y en Naturales, clasifiquen alimentos.",
            "D) Colocar el nombre del Eje Transversal en la portada de la unidad de aprendizaje sin alterar las actividades de los libros de texto."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Adecuación Curricular 2023. La transversalidad no es un evento aislado (charla) ni un mero requisito de formato. Consiste en permear las áreas curriculares (matemática, lengua, naturales) dotándolas de un contexto común que aborde una problemática social o de desarrollo personal."
    },
    {
        id: 407,
        categoria: "Evaluación",
        pregunta: "Al finalizar el primer trimestre en 4to grado, un maestro observa que un estudiante, a pesar de participar y asistir, no ha logrado movilizar los saberes para resolver problemas matemáticos, obteniendo 'Iniciado' (I). ¿Cuál es la implicación normativa y pedagógica de esta valoración?",
        opciones: [
            "A) Que el estudiante carece de aptitudes matemáticas y debe ser referido a una escuela especial.",
            "B) Que el estudiante debe repetir el grado inmediatamente sin esperar al final del año.",
            "C) Que el proceso de aprendizaje no se ha completado, lo que obliga al docente a diseñar e implementar un Plan de Apoyo y Recuperación Pedagógica adaptado a sus necesidades para el siguiente trimestre.",
            "D) Que la familia es responsable de pagar un tutor privado para que el niño alcance el nivel del grupo."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ordenanza 04-2023. La valoración 'I' o 'EP' no es un dictamen de fracaso definitivo, es una alerta temprana de la evaluación formativa. Institucionalmente, obliga al docente y al centro a brindar intervenciones oportunas (tutorías, ajustes, planes de recuperación) antes de que finalice el año escolar."
    },
    {
        id: 408,
        categoria: "Comportamientos Profesionales",
        pregunta: "Una docente de 1er ciclo nota que su planificación no está dando los resultados esperados, ya que los estudiantes no avanzan en su proceso de alfabetización. Sus colegas de grado sí están logrando avances. ¿Qué acción demuestra un comportamiento profesional orientado a la mejora continua?",
        opciones: [
            "A) Solicitar una reunión de Comunidad de Aprendizaje (CAP) con sus colegas y el coordinador para analizar reflexivamente sus prácticas, pedir retroalimentación e integrar nuevas estrategias a su planificación.",
            "B) Justificarse argumentando que le tocó el grupo de estudiantes con mayor déficit del sector.",
            "C) Pedir a la dirección que le asigne otro grado el próximo año porque no tiene vocación para la alfabetización inicial.",
            "D) Copiar la planificación de sus compañeras exactamente igual y aplicarla sin considerar las particularidades de su grupo."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Estándares Profesionales y del Desempeño (Dimensión de Desarrollo Profesional y Trabajo Colaborativo). El docente efectivo no se aísla ni se justifica. Utiliza la reflexión sobre su propia práctica y el aprendizaje entre pares (Grupos Pedagógicos / CAP) para mejorar su desempeño."
    },
    {
        id: 409,
        categoria: "Gestión del Aprendizaje",
        pregunta: "Al iniciar una unidad didáctica, el docente de 5to grado proyecta un video corto y luego hace una serie de preguntas abiertas como: '¿Qué creen que pasaría si...?' y '¿Alguna vez han visto algo similar?'. ¿Qué propósito pedagógico principal persigue esta acción en la secuencia didáctica?",
        opciones: [
            "A) Evaluar sumativamente el conocimiento de los estudiantes para asignar la primera calificación del mes.",
            "B) Recuperar los saberes previos, generar conflicto cognitivo y conectar emocionalmente al estudiante con el nuevo objeto de aprendizaje.",
            "C) Mantener a los estudiantes entretenidos para poder terminar de escribir la planificación en el registro.",
            "D) Cumplir con el requisito de usar la tecnología en el aula según lo pide el MINERD."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Enfoque Constructivista (Adecuación Curricular 2023). El inicio de toda secuencia didáctica requiere la activación de saberes previos y el 'enganche' motivacional. El aprendizaje significativo de Ausubel exige que el nuevo contenido se ancle en las estructuras cognitivas preexistentes del estudiante."
    },
    {
        id: 410,
        categoria: "Alfabetización",
        pregunta: "En una evaluación diagnóstica en 1er grado, la maestra pide a un niño que escriba 'MARIPOSA'. El niño escribe 'M I O A' (cada letra corresponde a una sílaba y usa vocales o consonantes correctas de la palabra). ¿En qué nivel de conceptualización de la escritura se encuentra y qué significa esto?",
        opciones: [
            "A) Nivel Presilábico; significa que el niño no comprende nada del sistema de escritura y solo hace garabatos.",
            "B) Nivel Silábico con valor sonoro convencional; significa que el niño ha descubierto que las letras representan partes sonoras de la palabra (sílabas) y está en un proceso normal de construcción.",
            "C) Nivel Alfabético; significa que el niño ya está listo para leer textos largos sin ayuda.",
            "D) Es un nivel de retraso del aprendizaje; significa que necesita ser derivado a educación especial."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023 (Fascículos de Alfabetización Inicial). Bajo el enfoque psicogenético (Ferreiro y Teberosky), escribir una grafía por cada sílaba sonora (ej. M-I-O-A para ma-ri-po-sa) es el hito del nivel Silábico. Demuestra un gran avance cognitivo, no un retraso."
    },
    {
        id: 411,
        categoria: "Evaluación",
        pregunta: "Una maestra de 6to grado utiliza la técnica de 'Portafolio' para la evaluación. Al final del periodo, revisa la carpeta de un estudiante que contiene todos los trabajos, pero el estudiante solo los guardó sin orden y sin reflexionar sobre ellos. ¿Cuál fue el error metodológico de la maestra en la gestión de este instrumento?",
        opciones: [
            "A) Permitir que el estudiante eligiera qué guardar; la maestra debió guardar todo ella misma.",
            "B) No establecer criterios claros (rúbricas) ni propiciar momentos de reflexión (metacognición) donde el estudiante analizara sus propios avances y dificultades a través de las evidencias.",
            "C) No calificar cada hoja del portafolio con números en color rojo.",
            "D) Usar un portafolio físico en lugar de uno digital."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. Un portafolio no es un simple archivo o 'folder' de acumulación de tareas. Su valor como instrumento de evaluación por competencias radica en la selección deliberada de evidencias y en la reflexión metacognitiva del estudiante sobre su propio proceso de aprendizaje."
    },
    {
        id: 412,
        categoria: "Planificación Pedagógica",
        pregunta: "El equipo docente de 4to grado decide implementar un 'Proyecto de Intervención de Aula' para abordar el problema de la mala alimentación en el recreo. En este tipo de proyecto, ¿quiénes son los principales responsables de proponer soluciones y ejecutar las acciones?",
        opciones: [
            "A) El departamento de Orientación y Psicología en conjunto con la Dirección.",
            "B) Los estudiantes, asumiendo un rol protagónico en la investigación, propuesta y ejecución de soluciones, bajo la mediación del docente.",
            "C) El docente, quien elabora un plan estricto y asigna tareas a los estudiantes para que las cumplan.",
            "D) Las familias y la Asociación de Padres, Madres y Amigos de la Escuela (APMAE)."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023 (Estrategias de Planificación). La naturaleza de los Proyectos de Intervención y Proyectos Participativos de Aula es el desarrollo de la agencia, autonomía y ciudadanía activa del estudiante (Competencia Ética y Ciudadana y Resolución de Problemas). El docente facilita, pero el alumno lidera."
    },
    {
        id: 413,
        categoria: "Comportamientos Profesionales",
        pregunta: "Durante una jornada extendida, un docente presencia a dos colegas discutiendo acaloradamente con insultos frente a un grupo de estudiantes en el patio. ¿Cuál es el deber profesional del docente observador?",
        opciones: [
            "A) Intervenir poniéndose del lado del colega que tenga la razón para solucionar el conflicto rápido.",
            "B) Grabar la situación para tener pruebas y enviarlo al grupo de WhatsApp del centro.",
            "C) Intervenir pacíficamente para separar a los colegas, proteger la integridad emocional de los estudiantes alejándolos del área, e informar inmediatamente al equipo de gestión.",
            "D) Hacerse de la vista gorda argumentando que no es su problema y regresar a su aula."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Estatuto Docente y Manual de Convivencia. El docente tiene un rol de cuidado frente a los estudiantes. Presenciar violencia (incluso entre adultos) afecta el clima escolar. Debe detenerse la exposición de los menores al conflicto y reportar a las autoridades del centro (Dirección) para la aplicación del régimen disciplinario institucional."
    },
    {
        id: 414,
        categoria: "Inclusión",
        pregunta: "Llega un niño de nuevo ingreso a 2do grado que utiliza lenguaje de señas para comunicarse. La maestra no conoce la lengua de señas dominicana. ¿Cuál es la primera decisión pedagógica correcta que garantiza la inclusión?",
        opciones: [
            "A) Rechazar la inscripción argumentando que la escuela no está preparada para recibir estudiantes sordos.",
            "B) Ubicar al niño en primera fila, utilizar abundante apoyo visual y corporal, fomentar que los compañeros interactúen con él mediante gestos y solicitar formalmente apoyo al Distrito Educativo (atención a la diversidad / intérprete).",
            "C) Sentarlo con un compañero para que este le escriba todo lo que el maestro dice oralmente.",
            "D) Aislarlo en el área de informática para que vea videos interactivos toda la mañana."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley General de Educación 66-97 y Ordenanza 05-2024. Las escuelas regulares tienen el mandato de ser inclusivas. Ningún niño puede ser rechazado. Mientras se gestiona el apoyo especializado (intérprete/modelo lingüístico), el docente debe maximizar los canales visuales de comunicación (DUA) y crear un clima de acogida."
    },
    {
        id: 415,
        categoria: "Gestión del Aprendizaje",
        pregunta: "La maestra de 3er grado propone una dinámica donde los estudiantes leen el borrador de un cuento escrito por su compañero y le hacen sugerencias para mejorarlo antes de entregarlo. ¿Qué estrategia está aplicando?",
        opciones: [
            "A) La evaluación diagnóstica de la unidad.",
            "B) La coevaluación en el proceso de revisión de la producción escrita.",
            "C) La delegación de su trabajo de corrección a los estudiantes.",
            "D) Una actividad de castigo por cometer errores ortográficos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023 y Enfoque Textual Funcional. La revisión entre pares (coevaluación) es fundamental en el proceso de escritura. Desarrolla el pensamiento crítico, la colaboración y la comprensión de que la escritura es un proceso perfectible (borradores), no un producto inmediato."
    },
    {
        id: 416,
        categoria: "Planificación Pedagógica",
        pregunta: "Al diseñar los indicadores de logro para una unidad, ¿cuál debe ser la fuente principal y normativa de la cual el docente debe extraerlos?",
        opciones: [
            "A) Crearlos por sí mismo basándose en el nivel del grupo.",
            "B) Del Diseño Curricular y la Adecuación Curricular vigente, ya que son normativos, prescriptivos y aseguran el perfil de egreso.",
            "C) Del índice del libro de texto que utilizará durante el año.",
            "D) Del manual de pruebas nacionales pasadas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023 y Ordenanza 04-2023. Los indicadores de logro no se inventan ni se cambian a discreción; son el referente oficial, legal y prescriptivo que establece el Estado Dominicano para garantizar la equidad y calidad en los aprendizajes de todos los niños del país."
    },
    {
        id: 417,
        categoria: "Alfabetización",
        pregunta: "Durante una actividad en 1er grado, la maestra escribe en papelógrafos las normas del aula acordadas por los niños y las deja pegadas en la pared todo el año. ¿Qué propósito específico de la alfabetización cumple esta ambientación?",
        opciones: [
            "A) Decorar el aula para que se vea bonita durante las visitas de supervisión.",
            "B) Proveer un ambiente alfabetizador (textos de circulación social y funcional) que sirva como fuente de información segura para que los niños consulten letras y palabras cuando intenten escribir de forma autónoma.",
            "C) Cumplir con un requisito administrativo del cuaderno de planificación.",
            "D) Mantener a los niños callados mirando la pared."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. El ambiente alfabetizador no es decorativo, es funcional. Carteles con sentido, nombres y normas actúan como 'bancos de datos'. Si un niño no recuerda cómo hacer la 'T', puede ir al cartel que dice 'Tirar la basura' y observar el trazo, fomentando la autonomía."
    },
    {
        id: 418,
        categoria: "Comportamientos Profesionales",
        pregunta: "La Dirección del centro convoca a los docentes un sábado para una jornada de capacitación sobre el nuevo Sistema de Evaluación. Un docente se niega a asistir argumentando que ya conoce su materia y no necesita aprender nada nuevo. ¿Qué estándar del desempeño profesional se está vulnerando?",
        opciones: [
            "A) El derecho a la libre asociación.",
            "B) El estándar de Desarrollo Profesional, que exige una actitud de actualización permanente, apertura al aprendizaje y compromiso con las políticas y normativas educativas del MINERD.",
            "C) Ninguno, porque el sábado no es un día laborable.",
            "D) El estándar de gestión de aula."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Estándares de Desempeño Profesional Docente. La actualización continua no es opcional en la carrera docente. Las capacitaciones oficiales sobre normativas (como la evaluación) son de carácter obligatorio para asegurar la correcta implementación de las políticas del Estado."
    },
    {
        id: 419,
        categoria: "Evaluación",
        pregunta: "Al evaluar la Competencia Científica en 5to grado, el profesor utiliza una Rúbrica para calificar el experimento sobre la germinación. ¿Cuál es el principal beneficio de compartir la Rúbrica con los estudiantes ANTES de realizar el experimento?",
        opciones: [
            "A) Para que los estudiantes puedan copiar las respuestas correctas.",
            "B) Promover la transparencia y la autorregulación, ya que el estudiante conoce de antemano qué se espera de él y cuáles son los criterios de excelencia que guiarán su desempeño.",
            "C) Para asustarlos y que se esfuercen más por miedo a reprobar.",
            "D) Para ahorrarle tiempo al maestro al momento de explicar las instrucciones."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La evaluación por competencias es transparente y participativa. Conocer los criterios de evaluación a priori (mediante rúbricas) orienta el esfuerzo del estudiante y elimina la subjetividad, transformando la evaluación en una herramienta de aprendizaje."
    },
    {
        id: 420,
        categoria: "Gestión del Aprendizaje",
        pregunta: "En una clase de 4to grado sobre 'El clima local', el docente pide a los estudiantes que salgan al patio, observen el cielo, sientan la temperatura y anoten sus percepciones antes de abrir el libro de texto. ¿Qué principio pedagógico está favoreciendo?",
        opciones: [
            "A) La memorización mecánica de conceptos meteorológicos.",
            "B) El aprendizaje basado en la experiencia directa y el contacto con el entorno como puente para construir conocimientos significativos.",
            "C) El desgaste de tiempo para llenar la hora de clase.",
            "D) La sustitución total del conocimiento científico por el conocimiento empírico informal."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Estrategias de Inserción en el Entorno (Adecuación Curricular). El contacto con la realidad vivencial es una estrategia didáctica poderosa. La experiencia directa despierta la curiosidad y facilita que el posterior análisis teórico en el libro adquiera un sentido real para el niño."
    },

    {
        id: 421,
        categoria: "Inclusión",
        pregunta: "En una clase de 4to grado, una estudiante con baja visión no logra copiar los esquemas de la pizarra a tiempo, aunque se sienta en la primera fila. Se acerca la evaluación de Ciencias de la Naturaleza. ¿Cuál es el ajuste razonable correcto según la Ordenanza 05-2024?",
        opciones: [
            "A) Eximir a la estudiante de la evaluación escrita y calificarla solo por su asistencia y participación oral esporádica.",
            "B) Entregarle la evaluación impresa en macrotipo (letra ampliada y alto contraste) y permitirle más tiempo, asegurando que se evalúe el mismo indicador de logro.",
            "C) Asignarle un compañero permanente para que le dicte las preguntas durante la prueba y escriba las respuestas por ella.",
            "D) Bajar el nivel de exigencia de la prueba, evaluándola con los indicadores de logro correspondientes a 2do grado."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. La inclusión exige realizar 'Ajustes de Acceso' (como el macrotipo y control de iluminación) sin disminuir las expectativas de aprendizaje ni alterar los indicadores de logro del grado, garantizando equidad en la evaluación."
    },
    {
        id: 422,
        categoria: "Evaluación",
        pregunta: "Durante una reunión de padres en 3er grado, una madre se queja de que el docente no aplica exámenes mensuales tradicionales y exige ver una prueba escrita con puntos. El docente utiliza rúbricas, listas de cotejo y portafolios. ¿Cuál es la respuesta pedagógica e institucional correcta?",
        opciones: [
            "A) Imprimir un examen tradicional de inmediato para complacer a la madre y evitar una queja formal en la dirección.",
            "B) Explicar que la Ordenanza 04-2023 prohíbe los exámenes y que los padres no deben intervenir en la metodología docente.",
            "C) Mostrar el portafolio y las rúbricas de la estudiante, explicando que la evaluación por competencias es continua, formativa y basada en múltiples evidencias, no en una sola prueba memorística.",
            "D) Promediar las notas de las rúbricas para convertirlas a una escala de 0 a 100 y así la madre lo entienda mejor."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ordenanza 04-2023. La evaluación en el Nivel Primario es criterial y cualitativa. El docente tiene el deber de educar a las familias sobre el modelo formativo, demostrando cómo los instrumentos de evaluación sistemática (rúbricas/portafolio) evidencian el nivel de logro real (L, EP, I) mejor que una prueba memorística."
    },
    {
        id: 423,
        categoria: "Planificación Pedagógica",
        pregunta: "Al diseñar una Unidad de Aprendizaje en 5to grado, el equipo docente debe integrar el Eje Transversal 'Ciudadanía y Convivencia'. ¿Cuál es la forma normativamente correcta de evidenciar esta integración en la práctica de aula?",
        opciones: [
            "A) Copiar la definición del eje transversal en la portada de la planificación para cumplir con el esquema solicitado por el coordinador.",
            "B) Asignar a los estudiantes la copia de un texto sobre la convivencia pacífica durante la clase de Formación Integral Humana y Religiosa.",
            "C) Articular actividades en diversas áreas (ej. debatir un conflicto histórico en Sociales y redactar normas de aula en Lengua Española) que conecten los saberes con la resolución de problemas ciudadanos.",
            "D) Realizar un acto a la bandera más largo los viernes para fomentar el civismo."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Adecuación Curricular 2023. Los Ejes Transversales no son contenidos aislados ni requisitos burocráticos. Son grandes temas sociales que deben permear las áreas curriculares, dándoles contexto y obligando a los estudiantes a movilizar competencias para reflexionar y actuar sobre su realidad."
    },
    {
        id: 424,
        categoria: "Ética",
        pregunta: "Una maestra de 1er grado se siente muy orgullosa del trabajo de sus alumnos en una feria científica. Toma fotos de los niños exponiendo y las publica en su cuenta pública de Instagram y TikTok con el uniforme del centro. ¿Qué principio legal está vulnerando?",
        opciones: [
            "A) Ninguno, ya que las fotos resaltan el trabajo educativo positivo y dan buena imagen a la escuela.",
            "B) La Ley 136-03, que prohíbe la difusión de imágenes de menores de edad que permitan su identificación pública sin el consentimiento expreso y por escrito de sus tutores legales.",
            "C) El manual de uso de uniformes escolares, ya que los niños podrían estar mal peinados en la foto.",
            "D) El derecho de autor, porque los proyectos científicos pertenecen al centro educativo y no a ella."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 (Código para el Sistema de Protección de Niños, Niñas y Adolescentes). El derecho a la intimidad y a la imagen del menor es inviolable. La publicación de fotos sin autorización formal en redes sociales (incluso con fines 'positivos') es una falta ética y legal grave."
    },
    {
        id: 425,
        categoria: "Alfabetización",
        pregunta: "En el segundo trimestre, un niño de 2do grado presenta inversiones sistemáticas al escribir, confundiendo la 'b' con la 'd' y la 'p' con la 'q'. El resto de su lectura avanza con normalidad. Según el enfoque de alfabetización inicial, ¿cómo debe actuar la docente?",
        opciones: [
            "A) Diagnosticar dislexia y solicitar al centro que lo transfiera a una escuela de educación especial.",
            "B) Tacharle las letras invertidas con bolígrafo rojo y hacerle repetir la palabra 50 veces para crear memoria muscular.",
            "C) Comprender que es una etapa transitoria común relacionada con la direccionalidad, e implementar juegos de lateralidad y apoyo visual con referentes estables en el aula.",
            "D) Restarle un nivel en su calificación de Lengua Española para que preste más atención al trazo."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ordenanza 01-2023 y Enfoque Psicogenético. Las inversiones grafomotrices (escritura en espejo) en el primer ciclo son fenómenos evolutivos normales asociados a la maduración de la lateralidad espacial, no un trastorno definitivo. Castigar o patologizar genera aversión a la escritura."
    },
    {
        id: 426,
        categoria: "Gestión del Aprendizaje",
        pregunta: "La maestra de 6to grado organiza un trabajo colaborativo. Observa que en el grupo de Juan, él investiga, escribe y expone todo, mientras los otros tres miembros conversan y no aportan. ¿Qué estrategia corrige esta disfunción pedagógica?",
        opciones: [
            "A) Ponerle calificación de 'L' a Juan y de 'I' a los demás para hacer justicia.",
            "B) Separar el grupo y ordenar que todos trabajen de forma individual en silencio.",
            "C) Diseñar la actividad con interdependencia positiva, asignando roles rotativos (ej. coordinador, secretario, relator, investigador) y evaluando tanto el producto como el proceso grupal.",
            "D) Llamar la atención del grupo frente a toda el aula para avergonzarlos y que se pongan a trabajar."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Estrategias Pedagógicas (Adecuación Curricular 2023). El trabajo colaborativo no ocurre mágicamente por sentar alumnos juntos. El docente debe estructurar la actividad garantizando la interdependencia positiva (el éxito de uno depende del éxito de todos) mediante roles claros y evaluables."
    },
    {
        id: 427,
        categoria: "Inclusión",
        pregunta: "Un alumno de 1er grado ingresa al centro ya leyendo con fluidez y resolviendo sumas complejas, terminando las actividades en 5 minutos y luego aburriéndose e interrumpiendo. ¿Cuál es el procedimiento normativo para atender sus Necesidades Específicas de Apoyo Educativo (NEAE)?",
        opciones: [
            "A) Ascenderlo automáticamente a 3er grado en el primer mes de clases.",
            "B) Asignarle que haga caligrafías adicionales para mantenerlo ocupado y en silencio.",
            "C) Solicitar evaluación por Orientación para confirmar Altas Capacidades y aplicar un programa de enriquecimiento curricular con retos de mayor profundidad cognitiva.",
            "D) Dejarlo salir a jugar al patio cuando termine para no entorpecer el ritmo de los demás."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ordenanza 05-2024. Las Altas Capacidades son consideradas NEAE. La respuesta educativa no es dar 'más de lo mismo' (caligrafías) ni aislar, sino el enriquecimiento curricular (profundización, proyectos de investigación, tutoría de pares) para mantener el desafío cognitivo dentro de su grupo etario."
    },
    {
        id: 428,
        categoria: "Evaluación",
        pregunta: "Durante las primeras tres semanas del año escolar en 4to grado, el profesor aplica varias actividades diagnósticas. Obtiene resultados muy bajos en matemáticas. ¿Qué debe hacer administrativamente con estos resultados según el currículo?",
        opciones: [
            "A) Asignar estas valoraciones en el primer periodo del Registro de Grado como primera calificación.",
            "B) Registrar las deficiencias y realizar una nivelación de 4 semanas, adaptando su planificación para cubrir estas lagunas antes de avanzar a los temas de 4to grado.",
            "C) Convocar a los padres para que firmen un acta asumiendo la culpa del bajo rendimiento de sus hijos.",
            "D) Ignorar los resultados ya que la evaluación diagnóstica no tiene valor legal."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La evaluación diagnóstica tiene una función estrictamente orientadora y predictiva, nunca sumativa (no va al registro como calificación). Su propósito es obligar al docente a ajustar su planificación y ejecutar planes de nivelación si los pre-requisitos no están consolidados."
    },
    {
        id: 429,
        categoria: "Planificación Pedagógica",
        pregunta: "Una docente está elaborando una Situación de Aprendizaje y redacta lo siguiente: 'Los estudiantes de 5to grado, ante la contaminación del río cercano, investigarán sobre el ciclo del agua guiados por la maestra para desarrollar la competencia científica'. Según la estructura del MINERD, ¿qué elemento clave le falta?",
        opciones: [
            "A) Las fechas exactas en que se realizará la investigación.",
            "B) El producto final o punto de llegada (ej. para elaborar una campaña de concientización y presentarla a la comunidad).",
            "C) Los nombres de todos los estudiantes que participarán.",
            "D) El presupuesto de los materiales a utilizar."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. Toda Situación de Aprendizaje debe contar con: contexto/problema, roles, estrategias, pero fundamentalmente un PRODUCTO FINAL o punto de llegada que evidencie la movilización de las competencias y dé sentido a la investigación."
    },
    {
        id: 430,
        categoria: "Ética",
        pregunta: "Una maestra observa marcas de golpes y quemaduras en los brazos de un estudiante de 2do grado. Al preguntarle sutilmente, el niño dice que 'su tío lo castiga con un cable'. ¿Cuál es el proceder obligatorio e inmediato de la docente?",
        opciones: [
            "A) Citar al tío al día siguiente y amenazarlo con llamar a la policía si vuelve a hacerlo.",
            "B) Levantar un informe escrito confidencial y entregarlo de inmediato a la Dirección y al departamento de Orientación para la activación del protocolo de protección a través del CONANI/Ministerio Público.",
            "C) Esperar unas semanas para ver si el abuso se repite antes de acusar a la familia injustamente.",
            "D) Recomendarle al niño que se porte bien para que no lo castiguen."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 y Protocolos del MINERD. El docente es un garante de derechos. La omisión de denuncia en casos de maltrato infantil es un delito grave. La acción debe ser institucional, inmediata y articulada con Orientación/Dirección para no revictimizar al niño ni alertar al agresor indebidamente."
    },
    {
        id: 431,
        categoria: "Alfabetización",
        pregunta: "En 1er grado, la maestra realiza diariamente la estrategia de 'Lectura en Voz Alta por parte del docente' utilizando cuentos con vocabulario rico. ¿Qué competencia fundamental de la alfabetización temprana se busca desarrollar con esto si los niños aún no saben decodificar?",
        opciones: [
            "A) Ninguna, es solo para relajarlos antes del recreo.",
            "B) Desarrollar habilidades de comprensión oral, incrementar el léxico, modelar la prosodia y acercar al niño a la estructura del lenguaje escrito y literario.",
            "C) Forzarlos a memorizar la historia para luego evaluarlos con un examen.",
            "D) Enseñarles exclusivamente las reglas de ortografía de manera teórica."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023 (Fascículos de Alfabetización). Leerle a los niños todos los días es indispensable. Aunque no decodifiquen, escuchando literatura desarrollan vocabulario avanzado, sintaxis compleja, imaginación y el deseo de aprender a leer (motivación), precursores absolutos de la comprensión lectora."
    },
    {
        id: 432,
        categoria: "Gestión del Aprendizaje",
        pregunta: "La maestra de 3er grado nota que pierde hasta 20 minutos de clase cada vez que los niños regresan del recreo; entran sudados, gritando y se niegan a sacar sus cuadernos. ¿Cuál es la estrategia de gestión de aula más asertiva?",
        opciones: [
            "A) Dejarlos sin recreo toda la semana siguiente para que valoren el tiempo.",
            "B) Gritar más fuerte que ellos y golpear el escritorio para recuperar la atención.",
            "C) Establecer y modelar una rutina de transición (ej. entrar en calma, hacer 2 minutos de respiración guiada profunda o leer un cuento corto) para bajar la energía y marcar el reinicio pedagógico.",
            "D) Anotar a todos en el registro anecdótico por indisciplina colectiva."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Disciplina Positiva y Gestión del Tiempo. Las transiciones caóticas roban tiempo pedagógico. Sancionar un estado fisiológico (alta energía post-recreo) no funciona. Se requiere una rutina de anclaje (respiración/mindfulness/lectura) que ayude a la autorregulación infantil y restablezca el clima de aula."
    },
    {
        id: 433,
        categoria: "Evaluación",
        pregunta: "Para evaluar las maquetas sobre el relieve en 5to grado, el profesor aplica la Coevaluación. Los estudiantes intercambian trabajos y todos se asignan una calificación de 'Logrado' (L) porque son amigos. ¿Cuál es el fallo en el diseño de esta evaluación?",
        opciones: [
            "A) Usar la coevaluación, ya que los niños de primaria no tienen capacidad ética para evaluarse.",
            "B) No haber provisto una rúbrica o lista de cotejo con criterios objetivos claros, ni haber modelado primero cómo dar retroalimentación formativa y constructiva.",
            "C) Que las maquetas deben evaluarse exclusivamente con pruebas escritas.",
            "D) Que la coevaluación solo sirve para restar puntos por mala conducta."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La coevaluación es un proceso metacognitivo obligatorio, pero no puede dejarse a la subjetividad. Requiere andamiaje: el docente debe enseñar a usar instrumentos (rúbricas) para que la valoración se base en evidencias del producto y no en afinidades personales."
    },
    {
        id: 434,
        categoria: "Planificación Pedagógica",
        pregunta: "En la estructura de la Adecuación Curricular 2023, ¿cuál es la relación correcta entre las Competencias Fundamentales y las Competencias Específicas al momento de planificar?",
        opciones: [
            "A) Son independientes; en algunas unidades se usan las Fundamentales y en otras las Específicas.",
            "B) Las Fundamentales expresan las grandes intenciones (ej. Ética), y las Específicas son la traducción de esas intenciones a los saberes propios de cada asignatura (ej. argumentar en Lengua Española).",
            "C) Las Específicas evalúan a los estudiantes y las Fundamentales evalúan al maestro.",
            "D) Las Fundamentales reemplazaron a los indicadores de logro en el nuevo registro."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. Las Competencias Fundamentales (7) atraviesan todo el currículo. Las Específicas las operativizan en el área. Por ejemplo, la competencia comunicativa (fundamental) se vuelve específica en matemáticas al pedirle al niño que 'comunique matemáticamente un proceso'."
    },
    {
        id: 435,
        categoria: "Comportamientos Profesionales",
        pregunta: "Una maestra de 4to grado recibe quejas de que varios de sus estudiantes están creando memes ofensivos y burlándose de un compañero en un grupo de WhatsApp los sábados. ¿Cuál es su grado de responsabilidad institucional?",
        opciones: [
            "A) Ninguna, porque el uso de WhatsApp y el tiempo de fin de semana competen exclusiva y legalmente a los padres.",
            "B) Intervenir pedagógicamente al enterarse, ya que el ciberacoso impacta directamente la convivencia, la salud mental y el rendimiento del estudiante en el entorno escolar, reportando a Orientación.",
            "C) Revisar los teléfonos personales de todos los estudiantes el lunes para borrar los memes.",
            "D) Suspender a los implicados indefinidamente hasta que cierren el grupo de WhatsApp."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 y Manual de Convivencia Escolar (OD 22-2023). El ciberacoso, aunque ocurra fuera del horario y recinto físico, tiene un efecto expansivo en la escuela. La institución tiene el deber ético y legal de actuar de forma formativa y orientadora para restituir derechos y el clima escolar pacífico."
    },
    {
        id: 436,
        categoria: "Alfabetización",
        pregunta: "Al iniciar el año escolar en 1er grado, el profesor realiza diariamente el 'Juego de los Aplausos', donde los niños aplauden por cada golpe de voz que escuchan en palabras como 'E-LE-FAN-TE'. ¿Qué habilidad crítica está desarrollando?",
        opciones: [
            "A) La motricidad gruesa para educación física.",
            "B) La conciencia silábica, una sub-habilidad de la conciencia fonológica indispensable para que comprendan cómo el lenguaje oral se segmenta y se traduce a lenguaje escrito.",
            "C) El aprendizaje del abecedario de memoria.",
            "D) El control de la disciplina, usando los aplausos para que guarden silencio."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. La conciencia fonológica es el mayor predictor del éxito lector. Un niño no puede entender que la 'L' suena /l/ si primero no es capaz de aislar los sonidos más grandes del lenguaje oral (las sílabas) mediante estrategias corporales como aplausos o saltos."
    },
    {
        id: 437,
        categoria: "Gestión del Aprendizaje",
        pregunta: "Para llevar a cabo un debate sobre 'Los derechos de los niños' en 6to grado, la maestra decide romper la organización tradicional de pupitres en filas y los organiza en un gran círculo o asamblea. ¿Qué sustento pedagógico tiene esta decisión?",
        opciones: [
            "A) Solo busca que el aula se vea diferente para la foto institucional.",
            "B) Enviar a los estudiantes más indisciplinados al centro del círculo para vigilarlos mejor.",
            "C) Modificar el espacio (ambiente como 'tercer educador') para propiciar el contacto visual pleno, la escucha activa, la equidad en la participación y el desarrollo de la competencia comunicativa.",
            "D) Que la maestra pueda sentarse en su escritorio a calificar sin tener niños en frente."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Gestión del Ambiente (Adecuación Curricular). Las filas promueven una comunicación vertical (maestro-alumno) pasiva. Un debate exige comunicación horizontal y dialógica. El mobiliario debe ajustarse a la intención pedagógica; el círculo democratiza la palabra y fomenta la ciudadanía."
    },
    {
        id: 438,
        categoria: "Inclusión",
        pregunta: "Llega a la sección de 5to grado un estudiante de nacionalidad haitiana. Aunque comprende español básico, no logra redactar textos en este idioma. ¿Cómo debe evaluarse su producción escrita según el enfoque de equidad?",
        opciones: [
            "A) Ponerle 'I' en todas las materias hasta que domine perfectamente la gramática del español.",
            "B) Prohibirle usar el creole en la escuela para forzar una inmersión total rápida.",
            "C) Aplicar ajustes razonables, permitiéndole expresarse oralmente o con apoyos visuales/bilingües para evaluar sus saberes sobre las áreas (ej. Ciencias), mientras recibe apoyo progresivo de inmersión en español.",
            "D) Darlo por aprobado automáticamente en Lengua Española por consideración a su situación migratoria."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ordenanza 05-2024 y Enfoque de Derechos. La barrera idiomática no puede confundirse con una deficiencia cognitiva. El estudiante tiene derecho a demostrar sus saberes de las demás áreas sin que el dominio perfecto del español sea un filtro excluyente, requiriendo adaptaciones curriculares y de acceso temporales."
    },
    {
        id: 439,
        categoria: "Evaluación",
        pregunta: "Un docente está redactando un Registro Anecdótico sobre un incidente en el aula de 4to grado. Escribe: 'Hoy Pedro se portó pésimo, como siempre es muy agresivo y golpeó a Carlos por maldad'. ¿Cuál es el error profesional en esta redacción según la técnica de evaluación?",
        opciones: [
            "A) Olvidó poner la fecha exacta del incidente.",
            "B) Utiliza juicios de valor, adjetivos subjetivos y etiquetas ('pésimo', 'agresivo', 'por maldad') en lugar de describir el hecho observable de manera neutral y objetiva.",
            "C) Que el registro anecdótico solo debe usarse para hechos positivos, nunca para conflictos.",
            "D) Que no obligó a Pedro a firmar el cuaderno debajo del reporte."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La técnica de observación (Registro Anecdótico) exige neutralidad. Un registro ético y profesional describe la acción exacta: 'Durante el recreo, Pedro empujó a Carlos tras discutir por un balón'. Los juicios subjetivos estigmatizan al estudiante y carecen de validez pedagógica."
    },
    {
        id: 440,
        categoria: "Comportamientos Profesionales",
        pregunta: "Un maestro de 6to grado con 20 años de servicio se niega a utilizar el nuevo Registro de Grado basado en las valoraciones L, EP, I, argumentando que él siempre ha evaluado con números (0-100) y que le da mejores resultados. Pasa sus notas en una libreta personal. ¿Qué falta normativa comete?",
        opciones: [
            "A) Ninguna, el Estatuto Docente ampara su libertad de cátedra y autonomía metodológica.",
            "B) Incurre en un incumplimiento grave de sus deberes profesionales, ya que el Registro de Grado es el único documento oficial, auditable y legal que certifica los procesos bajo las normas del MINERD.",
            "C) Falta leve de formato, siempre y cuando al final del año él convierta sus números a letras para la dirección.",
            "D) Vulneración del derecho de los padres a recibir notas claras en números."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023 y Estatuto Docente. La libertad de cátedra aplica a las estrategias, no a la normativa estatal de evaluación y certificación oficial. La no utilización del Registro de Grado invalida administrativamente los aprendizajes, siendo una falta disciplinaria y ética frente al sistema y al estudiante."
    },

    {
        id: 441,
        categoria: "Gestión del Aprendizaje",
        pregunta: "Durante una actividad de resolución de problemas en 5to grado, el docente nota que un grupo de estudiantes ha llegado a una respuesta incorrecta siguiendo un procedimiento lógico pero incompleto. ¿Cuál es la intervención pedagógica que mejor fomenta el aprendizaje significativo?",
        opciones: [
            "A) Señalarles inmediatamente el error en la pizarra para evitar que el resto de la clase aprenda un concepto equivocado.",
            "B) Realizar preguntas reflexivas que lleven al grupo a revisar su propio proceso, identificar la inconsistencia y ajustar su estrategia de manera autónoma.",
            "C) Asignarles una calificación de 'En Proceso' (EP) y pedirles que copien la solución correcta del libro de texto.",
            "D) Pedir a un estudiante que ya resolvió bien el problema que pase a la pizarra y les explique cómo se hace paso a paso."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023 (Enfoque Orientado a la Acción). El error es una oportunidad de aprendizaje. La intervención docente debe mediar el pensamiento crítico (metacognición) en lugar de dar la respuesta correcta, permitiendo que el estudiante sea protagonista de su propia corrección."
    },
    {
        id: 442,
        categoria: "Planificación Pedagógica",
        pregunta: "En la planificación de una Unidad de Aprendizaje de 3er grado, la docente incluye el uso de tabletas para investigar sobre 'Los seres vivos'. ¿Qué criterio técnico justifica prioritariamente el uso de este recurso según el currículo?",
        opciones: [
            "A) La necesidad de modernizar el aula para cumplir con los estándares tecnológicos del centro educativo.",
            "B) Que el uso de la tecnología facilita el control de la disciplina, ya que los niños se mantienen concentrados en las pantallas.",
            "C) La intención pedagógica de potenciar la competencia de Pensamiento Lógico, Crítico y Creativo a través de la curación y análisis de información digital.",
            "D) Que el Ministerio de Educación ha distribuido dispositivos y es obligatorio utilizarlos en cada sesión de clase."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Estándares Profesionales (Dimensión Curricular). El uso de las TIC no es un fin en sí mismo ni un adorno. Debe estar subordinado a una intención pedagógica clara que movilice competencias específicas, en este caso, la investigación y el análisis crítico de la información."
    },
    {
        id: 443,
        categoria: "Comportamientos Profesionales",
        pregunta: "Un docente de 4to grado observa que el equipo de gestión del centro no está aplicando correctamente los protocolos de registro de inasistencias en el sistema de gestión escolar. ¿Cuál es su deber según el marco de ética y eficiencia profesional?",
        opciones: [
            "A) Ignorar el hecho, ya que las tareas administrativas del equipo de gestión no son responsabilidad del docente de aula.",
            "B) Comunicar la observación de manera constructiva y formal al coordinador o director, ofreciendo su apoyo para asegurar la veracidad de los datos que impactan en los indicadores del centro.",
            "C) Quejarse con los padres de familia sobre la desorganización administrativa del centro para que ellos exijan mejoras.",
            "D) Realizar su propio registro en una libreta privada y no entregar reportes hasta que el sistema general funcione bien."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Instructivo ERP (Comportamientos Profesionales). El docente forma parte de una comunidad educativa y debe demostrar compromiso con la mejora institucional y la integridad de los procesos administrativos y pedagógicos del centro."
    },
    {
        id: 444,
        categoria: "Evaluación",
        pregunta: "Al evaluar la producción oral en 2do grado, el docente utiliza una 'Escala de Estimación'. Nota que un estudiante ha logrado los criterios de fluidez y coherencia, pero no los de entonación. ¿Cómo debe asentar esta valoración parcial en el proceso formativo?",
        opciones: [
            "A) Promediar los criterios logrados con los no logrados para obtener una nota numérica única.",
            "B) Identificar la dificultad específica de entonación para diseñar una actividad de apoyo pedagógico puntual, manteniendo el registro de los avances logrados.",
            "C) Esperar hasta que el estudiante logre todos los criterios antes de hacer cualquier anotación en el registro.",
            "D) Reprobar la actividad oral completa, ya que la competencia se considera lograda solo si se cumplen todos los criterios al 100%."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La evaluación es procesual. Identificar qué aspectos del indicador de logro se han alcanzado y cuáles no, permite una intervención pedagógica diferenciada (retroalimentación formativa), que es el corazón de la evaluación por competencias."
    },
    {
        id: 445,
        categoria: "Inclusión",
        pregunta: "En una sección de 6to grado hay un estudiante con trastorno del espectro autista (TEA) que presenta sensibilidad sensorial ante ruidos fuertes. La escuela ha planeado una celebración de cumpleaños con música alta. ¿Qué acción docente garantiza la inclusión?",
        opciones: [
            "A) Pedir a la madre que no envíe al niño ese día para evitarle un mal momento de estrés.",
            "B) Realizar la actividad de manera normal, asumiendo que el niño debe aprender a adaptarse al entorno social de sus compañeros.",
            "C) Coordinar con el grupo y la familia ajustes ambientales (bajar el volumen, espacios de calma o uso de auriculares) y preparar al estudiante visualmente para la actividad.",
            "D) Obligar al estudiante a permanecer en el centro de la fiesta para que trabaje su tolerancia sensorial 'a la fuerza'."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ordenanza 05-2024. Los ajustes razonables incluyen modificaciones al entorno físico y social. Anticipar la situación y adaptar el ambiente permite que el estudiante participe en igualdad de condiciones sin vulnerar su bienestar emocional."
    },
    {
        id: 446,
        categoria: "Alfabetización",
        pregunta: "En 1er grado, durante la actividad de 'Lectura de textos que circulan en el ambiente', un niño identifica la palabra 'JUGOS' en un envase, pero al pedirle que lea la letra 'J' aislada, no sabe cuál es. ¿Qué evidencia este comportamiento según la etapa de alfabetización?",
        opciones: [
            "A) Que el niño no sabe leer y está adivinando por el dibujo del envase.",
            "B) Que el niño está en una etapa de lectura global/contextual, reconociendo el texto como una unidad con significado antes de analizar sus partes (letras).",
            "C) Que el niño tiene problemas de memoria visual a corto plazo.",
            "D) Que el docente debe dejar de usar envases y enfocarse exclusivamente en enseñar el abecedario de la A a la Z."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. En la alfabetización inicial, el reconocimiento de 'textos estables' (marcas, nombres) es un paso fundamental. El niño otorga significado al texto antes de dominar el código alfabético, lo cual es parte del proceso normal de construcción del sistema de escritura."
    },
    {
        id: 447,
        categoria: "Planificación Pedagógica",
        pregunta: "Al momento de planificar el horario escolar en el Nivel Primario, el docente debe asegurar que el tiempo dedicado a las Áreas Curriculares sea flexible. ¿Qué justifica esta flexibilidad normativa?",
        opciones: [
            "A) Que el maestro pueda salir más temprano si termina los contenidos rápido.",
            "B) La necesidad de extender el tiempo de una actividad si el interés de los estudiantes y la profundidad del aprendizaje lo requieren para lograr la competencia.",
            "C) Que el director pueda cambiar las clases según las visitas de técnicos que reciba el centro.",
            "D) Que los estudiantes no se aburran de estar mucho tiempo haciendo la misma tarea."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. El tiempo pedagógico está al servicio del aprendizaje, no de la burocracia. Si una investigación o debate está en su punto máximo de construcción de conocimiento, la flexibilidad permite agotar el proceso sin cortes arbitrarios."
    },
    {
        id: 448,
        categoria: "Comportamientos Profesionales",
        pregunta: "Un docente recibe una retroalimentación de su coordinador pedagógico indicando que sus criterios de evaluación no son claros para los estudiantes. ¿Cuál es la actitud profesional esperada según el ERP?",
        opciones: [
            "A) Sentirse ofendido y argumentar que tiene muchos años de experiencia para ser cuestionado.",
            "B) Analizar las evidencias de su práctica junto al coordinador, identificar los puntos de mejora y ajustar sus instrumentos de evaluación para que sean más transparentes.",
            "C) Ignorar la sugerencia y seguir evaluando como siempre, ya que el registro es responsabilidad del docente.",
            "D) Pedir un cambio de centro educativo donde se respete más su autonomía docente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Instructivo ERP / Estándares Profesionales. La reflexión sobre la práctica y la apertura a la supervisión pedagógica son dimensiones esenciales del desempeño. El docente profesional utiliza la retroalimentación para crecer y garantizar el derecho de los estudiantes a una evaluación justa."
    },
    {
        id: 449,
        categoria: "Gestión del Aprendizaje",
        pregunta: "Para trabajar la resolución de conflictos en 4to grado, la docente utiliza el 'Círculo de Diálogo' tras una pelea en el patio. ¿Cuál es el objetivo principal de esta técnica de gestión?",
        opciones: [
            "A) Identificar al culpable para imponerle una sanción ejemplar frente a todos.",
            "B) Restaurar los vínculos afectados, permitiendo que las partes expresen cómo se sintieron y lleguen a acuerdos de reparación consensuados.",
            "C) Evitar que los niños jueguen en el patio durante el próximo recreo.",
            "D) Llenar el tiempo de la clase de Formación Humana con una actividad dinámica."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Convivencia (OD 22-2023). El enfoque restaurativo busca la sanación de la relación y la responsabilidad personal, alejándose del modelo puramente punitivo/expulsivo para fomentar una cultura de paz."
    },
    {
        id: 450,
        categoria: "Evaluación",
        pregunta: "En 5to grado, el docente decide evaluar la competencia comunicativa mediante un debate. ¿Qué instrumento es el más coherente para valorar desempeños complejos y variados durante este proceso?",
        opciones: [
            "A) Un examen de selección múltiple sobre las reglas del debate.",
            "B) Una Rúbrica Analítica que describa niveles de logro para criterios como argumentación, respeto al turno y uso del léxico.",
            "C) Una lista de cotejo que solo diga 'Sí' o 'No' participó en el debate.",
            "D) La observación general sin registro, asignando una nota al final por percepción."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. Para evaluar competencias (saber hacer en contexto), la rúbrica es el instrumento ideal porque permite desglosar la complejidad del desempeño en niveles descriptivos, facilitando una valoración objetiva y formativa."
    },
    {
        id: 451,
        categoria: "Gestión del Aprendizaje",
        pregunta: "En una aula de 4to grado, durante un trabajo en equipos, el ruido se eleva a un nivel que impide la comunicación. El docente utiliza un 'Semáforo de Ruido' y, al llegar al rojo, detiene la actividad. ¿Cuál es el fundamento de esta técnica en la gestión efectiva?",
        opciones: [
            "A) Imponer el silencio absoluto como norma principal de conducta en el aula.",
            "B) Desarrollar la autorregulación grupal mediante una señal visual que permite a los estudiantes monitorear y ajustar su propio volumen de trabajo.",
            "C) Suspender la actividad de forma punitiva para que los estudiantes sientan la pérdida del tiempo de juego.",
            "D) Demostrar que el docente tiene el control total de los dispositivos tecnológicos y las señales del aula."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Estrategias de Gestión de Aula. El enfoque de competencias busca la autonomía. El semáforo no es un castigo, sino un recurso de autorregulación que ayuda a los niños a entender los niveles de ruido permitidos según la tarea (voz de equipo vs. voz de asamblea)."
    },
    {
        id: 452,
        categoria: "Comportamientos Profesionales",
        pregunta: "Un docente de 5to grado identifica que un grupo de sus estudiantes utiliza términos despectivos sobre la orientación sexual de un compañero. ¿Cuál es la acción docente correcta según los estándares de desempeño?",
        opciones: [
            "A) Ignorar los comentarios si no hay agresión física, para no darle importancia a 'cosas de niños'.",
            "B) Abordar la situación de inmediato como una oportunidad pedagógica para trabajar la Competencia Ética y Ciudadana, promoviendo el respeto a la dignidad humana y la diversidad.",
            "C) Castigar a los estudiantes con una falta grave en el registro sin explicarles el motivo.",
            "D) Llamar a los padres del niño afectado para sugerirles que lo cambien de centro para evitarle sufrimientos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 y Constitución Dominicana. El docente debe garantizar un ambiente libre de discriminación y violencia. El hostigamiento verbal por prejuicios es una vulneración de derechos que debe ser intervenida desde la formación en valores y el cumplimiento de las normas de convivencia."
    },
    {
        id: 453,
        categoria: "Planificación Pedagógica",
        pregunta: "Al planificar una unidad sobre 'La nutrición' en 3er grado, la docente decide integrar a los padres para que compartan recetas saludables de la comunidad. ¿Qué dimensión de la planificación docente se está fortaleciendo?",
        opciones: [
            "A) La dimensión administrativa de control de la comunidad.",
            "B) La relación Escuela-Comunidad, reconociendo el contexto familiar como una fuente de saberes que enriquece el aprendizaje significativo.",
            "C) La delegación de la enseñanza de contenidos a personas externas para reducir la carga docente.",
            "D) El cumplimiento formal de un requisito del Programa de Alimentación Escolar (PAE)."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Diseño Curricular (Relación Escuela-Comunidad). La educación no ocurre en el vacío. Integrar a la familia en los procesos de aprendizaje valida los saberes locales y fortalece el vínculo afectivo y social necesario para el desarrollo de competencias."
    },
    {
        id: 454,
        categoria: "Evaluación",
        pregunta: "En 6to grado, un docente aplica una 'Prueba de Desempeño' donde los estudiantes deben simular un noticiero sobre el cambio climático. ¿Cuál es el criterio principal para calificar esta actividad?",
        opciones: [
            "A) El estudiante que mejor sepa actuar o que tenga el disfraz más costoso.",
            "B) La capacidad del estudiante para integrar los conceptos científicos, comunicarlos con claridad y proponer soluciones basadas en evidencias.",
            "C) La cantidad de tiempo que duró la presentación frente al grupo.",
            "D) Que el estudiante no haya cometido ningún error de dicción durante la grabación."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. En una evaluación de desempeño, el foco está en la integración de saberes (ser, saber, hacer). Se valora la competencia técnica (ciencia) y la transversal (comunicación/ciudadanía), no elementos superficiales como la vestimenta."
    },
    {
        id: 455,
        categoria: "Inclusión",
        pregunta: "Un docente nota que un estudiante con discapacidad motora no puede participar en la clase de Educación Física que consiste en jugar béisbol. ¿Qué acción refleja un compromiso con la inclusión?",
        opciones: [
            "A) Dejar al estudiante en el aula haciendo una tarea de lengua española mientras los demás juegan.",
            "B) Sentar al estudiante en las gradas para que sea el anotador oficial de los puntos del juego.",
            "C) Adaptar las reglas del juego o los materiales (ej. batear desde una base fija o usar pelotas sonoras/más grandes) para que el estudiante participe activamente según su posibilidad.",
            "D) Eximirlo de la calificación de la materia de forma definitiva."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ordenanza 05-2024. La inclusión efectiva no es solo 'estar presente' o hacer tareas pasivas (anotador), sino garantizar la PARTICIPACIÓN. Los ajustes razonables en Educación Física implican adaptar la actividad para que el reto sea posible para todos."
    },
    {
        id: 456,
        categoria: "Alfabetización",
        pregunta: "La maestra de 1er grado utiliza 'El libro viajero', donde cada niño se lleva un cuaderno a casa para escribir con su familia algo que sucedió el fin de semana. ¿Qué proceso de alfabetización se fomenta?",
        opciones: [
            "A) La copia mecánica de textos para mejorar la caligrafía.",
            "B) El uso funcional de la lengua escrita como herramienta para comunicar vivencias y la vinculación afectiva con la lectura y escritura.",
            "C) La evaluación de la ortografía de los padres de familia.",
            "D) La sustitución de los libros de texto oficiales por cuadernos hechos en casa."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. La alfabetización inicial debe ser significativa. Escribir sobre la propia vida ('textos de circulación social') ayuda al niño a entender para qué sirve escribir, superando la etapa de ver las letras como simples dibujos sin sentido."
    },
    {
        id: 457,
        categoria: "Gestión del Aprendizaje",
        pregunta: "En una clase de 5to grado, surge un debate imprevisto sobre una noticia de actualidad que apasiona a los estudiantes. El docente decide posponer la actividad planificada de matemáticas por 20 minutos para mediar el debate. ¿Cómo se califica esta acción?",
        opciones: [
            "A) Como una falta de planificación y pérdida de tiempo pedagógico.",
            "B) Como una gestión flexible y oportuna del aprendizaje que aprovecha el 'momento pedagógico' para desarrollar la competencia comunicativa y el pensamiento crítico.",
            "C) Como una falta grave al cumplimiento del horario oficial del MINERD.",
            "D) Como una estrategia para trabajar menos contenidos en el mes."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. Un docente profesional no es un esclavo del cronómetro, sino un gestor del aprendizaje. Aprovechar el interés genuino de los alumnos para desarrollar competencias transversales es una práctica de excelencia pedagógica."
    },
    {
        id: 458,
        categoria: "Evaluación",
        pregunta: "Un docente de 4to grado devuelve un trabajo de investigación a un estudiante con la única nota de '60/100'. ¿Qué principio de la evaluación formativa se está ignorando?",
        opciones: [
            "A) El principio de la justicia numérica.",
            "B) La retroalimentación cualitativa, que es la que explica al estudiante qué logró, qué le faltó y cómo puede mejorar en el futuro.",
            "C) El principio de ahorro de papel al no escribir comentarios largos.",
            "D) La obligación de que los padres firmen cada nota numérica."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La calificación sin retroalimentación es 'muerta'. En el enfoque por competencias, el estudiante necesita saber los criterios detrás de la nota para poder aprender del proceso y superar sus dificultades."
    },
    {
        id: 459,
        categoria: "Comportamientos Profesionales",
        pregunta: "El equipo de gestión del centro solicita a los docentes que entreguen una autoevaluación de su desempeño. Un docente decide marcar 'Excelente' en todo sin reflexionar seriamente. ¿Qué impacto tiene esto en su desarrollo profesional?",
        opciones: [
            "A) Es positivo, ya que asegura que recibirá mejores incentivos económicos.",
            "B) Es negativo, porque anula la posibilidad de identificar necesidades reales de capacitación y estanca su crecimiento profesional.",
            "C) Es indiferente, ya que la autoevaluación no tiene peso en la calificación final del ERP.",
            "D) Es una muestra de alta autoestima, necesaria para la labor docente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Instructivo ERP / Estándares Profesionales. La autocrítica y la reflexión sobre la práctica son motores del desarrollo profesional. La honestidad en la autoevaluación permite al MINERD y al docente diseñar rutas de mejora efectivas."
    },
    {
        id: 460,
        categoria: "Planificación Pedagógica",
        pregunta: "Al seleccionar los recursos para una unidad de 2do grado sobre 'La comunidad', el docente prefiere usar un mapa dibujado por los niños y una caminata por el sector en lugar de solo mostrar una foto en el libro. ¿Qué criterio pedagógico prima aquí?",
        opciones: [
            "A) La economía, al no querer gastar tiza o recursos digitales.",
            "B) El uso de recursos del entorno y la construcción de aprendizajes desde lo cercano y concreto hacia lo abstracto.",
            "C) La improvisación ante la falta de libros de texto suficientes.",
            "D) El cumplimiento de las horas de salida fuera del aula por recreación."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. Los recursos del entorno (la comunidad misma) son los más potentes en los primeros grados de primaria para generar conceptos geográficos y sociales sólidos y vivenciales."
    },
    {
        id: 461,
        categoria: "Gestión del Aprendizaje",
        pregunta: "Una maestra de 4to grado utiliza la técnica de 'La Caja de las Dudas', donde los estudiantes depositan papeles con preguntas que no se atrevieron a hacer en público. ¿Qué aspecto del clima de aula está fortaleciendo?",
        opciones: [
            "A) La inseguridad de los estudiantes al no querer hablar frente a otros.",
            "B) Un ambiente de seguridad emocional y confianza que reconoce que el no saber es parte del proceso de aprendizaje y reduce la ansiedad por el error.",
            "C) El anonimato para evitar que el maestro identifique quién no estudia.",
            "D) La falta de comunicación directa entre maestro y alumno."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Estándares Profesionales (Dimensión de Gestión de Aula). Un clima de aula efectivo es aquel donde el error se despenaliza. Esta técnica fomenta la participación de estudiantes tímidos y garantiza que ninguna duda se quede sin respuesta pedagógica."
    },
    {
        id: 462,
        categoria: "Comportamientos Profesionales",
        pregunta: "Durante una asamblea de la APMAE, un grupo de padres critica duramente a la directora del centro. Un docente presente interviene diciendo: 'Ella es así, nunca escucha a nadie, yo también tengo problemas con ella'. ¿Cuál es la falta ética en este comportamiento?",
        opciones: [
            "A) Ninguna, el docente tiene derecho a la libre expresión de sus sentimientos.",
            "B) Vulneración del compromiso institucional y la lealtad profesional, ya que los conflictos internos deben dirimirse en los canales correspondientes y no ventilarlos para socavar la autoridad frente a la comunidad.",
            "C) Una falta de solidaridad con sus compañeros docentes.",
            "D) Un exceso de honestidad que ayuda a los padres a entender la realidad del centro."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Código de Ética Docente / Estatuto. El docente debe proyectar una imagen de unidad institucional frente a la comunidad externa. Las críticas a la gestión deben realizarse en reuniones técnicas o mediante los organismos de participación interna, no en espacios públicos que debiliten la institucionalidad."
    },
    {
        id: 463,
        categoria: "Evaluación",
        pregunta: "En 5to grado, para evaluar el indicador 'Utiliza estrategias de cálculo mental', el docente propone un juego de tienda escolar. Observa que una niña usa los dedos para sumar. ¿Cuál es la valoración correcta en ese momento?",
        opciones: [
            "A) Logrado (L), porque al final llegó al resultado correcto.",
            "B) En Proceso (EP), porque aunque resuelve el problema, todavía depende de una estrategia concreta y no ha alcanzado la abstracción del cálculo mental requerido por el indicador.",
            "C) Iniciado (I), porque usar los dedos es de niños de primer grado.",
            "D) Reprobada, por no seguir la instrucción de no usar las manos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Instructivo del Registro de Grado. La valoración 'EP' indica que el estudiante muestra avances pero requiere mediación para alcanzar el nivel de dominio técnico o abstracto esperado. El docente debe ahora proponer actividades que la ayuden a soltar el apoyo físico."
    },
    {
        id: 464,
        categoria: "Alfabetización",
        pregunta: "Un docente de 2do grado nota que un estudiante lee palabra por palabra, sin respetar los puntos ni las comas, lo que le impide entender el sentido del texto. ¿En qué debe enfocarse la intervención?",
        opciones: [
            "A) En la velocidad lectora, cronometrando cuántas palabras lee por minuto.",
            "B) En la fluidez y prosodia (entonación y ritmo), mediante lecturas modeladas y teatro de lectores para conectar la puntuación con el significado.",
            "C) En enseñarle más vocabulario difícil de diccionarios.",
            "D) En que copie el texto diez veces para que se lo aprenda de memoria."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. La comprensión lectora depende de la fluidez. Si el niño gasta toda su energía cognitiva en decodificar sílabas, no puede procesar el significado. Leer con entonación (prosodia) ayuda a segmentar las ideas correctamente en el cerebro."
    },
    {
        id: 465,
        categoria: "Planificación Pedagógica",
        pregunta: "El currículo dominicano actual se define como 'abierto, flexible y participativo'. ¿Cómo aplica un docente la característica de 'participativo' en su planificación de aula?",
        opciones: [
            "A) Dejando que los estudiantes decidan qué días no quieren tener clase.",
            "B) Involucrando a los estudiantes en la selección de temas de interés para proyectos y en la negociación de algunos criterios de evaluación.",
            "C) Permitiendo que los padres de familia dicten los contenidos que ellos consideran importantes.",
            "D) Haciendo que todos los estudiantes hablen al mismo tiempo durante la clase."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Bases de la Revisión y Actualización Curricular. Lo participativo implica democratizar el proceso de aprendizaje. Cuando el alumno tiene voz en su formación (ej. elegir el tema de un Proyecto de Aula), aumenta su compromiso y motivación intrínseca."
    },
    {
        id: 466,
        categoria: "Inclusión",
        pregunta: "Un estudiante extranjero se incorpora a 3er grado a mitad de año. Sus compañeros lo excluyen de los juegos por su acento. El docente decide organizar una 'Feria de las Culturas' donde cada niño investigue y valore el origen de sus familias. ¿Qué está trabajando el docente?",
        opciones: [
            "A) Solo un contenido de Ciencias Sociales sobre geografía.",
            "B) El clima inclusivo y la Competencia Ética y Ciudadana, utilizando la diversidad como un valor pedagógico para prevenir el acoso escolar (bullying).",
            "C) Una actividad recreativa para que los niños no se aburran en el aula.",
            "D) Una estrategia para que el estudiante extranjero se sienta obligado a cambiar su acento."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024 y Manual de Convivencia. La inclusión no es solo para discapacidades; es para toda la diversidad (cultural, étnica, lingüística). El docente debe ser un agente activo que desarticule prejuicios mediante la educación en valores."
    },
    {
        id: 467,
        categoria: "Gestión del Aprendizaje",
        pregunta: "Un docente de 6to grado utiliza 'Rúbricas de Autoevaluación' después de cada proyecto. Un estudiante se pone 'Excelente' en todo, pero el docente sabe que no trabajó. ¿Cuál es la respuesta educativa correcta?",
        opciones: [
            "A) Tacharle la autoevaluación y ponerle un cero por mentiroso.",
            "B) Sostener una entrevista individual de retroalimentación, pidiéndole al estudiante que muestre las evidencias que sustentan su valoración y ayudándole a reflexionar sobre su honestidad y compromiso.",
            "C) Ignorar la autoevaluación y poner la nota que el maestro considere.",
            "D) Llamar a los padres para informarles que el niño tiene problemas morales."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La autoevaluación es un proceso de aprendizaje. Si el estudiante no es honesto, es porque aún no ha desarrollado la capacidad reflexiva. El papel del docente es mediar esa reflexión mediante el diálogo y la confrontación con las evidencias reales."
    },
    {
        id: 468,
        categoria: "Comportamientos Profesionales",
        pregunta: "Un docente es asignado a un centro educativo muy lejano a su residencia. Durante los primeros meses, llega tarde frecuentemente alegando problemas de transporte. ¿Cómo afecta esto su evaluación de desempeño?",
        opciones: [
            "A) No le afecta, ya que es una causa justificada por la distancia.",
            "B) Le afecta negativamente en la dimensión de Compromiso Ético y Profesional, ya que la puntualidad es un deber básico y debe gestionar alternativas para cumplir con su horario.",
            "C) El Ministerio debe ponerle un transporte privado para que no llegue tarde.",
            "D) Se compensa si el docente se queda más tiempo después de la hora de salida."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Estatuto Docente y Reglamento de Carrera. El cumplimiento del horario es una obligación contractual y ética. Aunque la distancia sea un reto, el docente profesional debe buscar soluciones o realizar los trámites de traslado correspondientes, pero no vulnerar el tiempo de aprendizaje de los niños."
    },
    {
        id: 469,
        categoria: "Evaluación",
        pregunta: "En 4to grado, el profesor de Educación Física nota que un niño tiene miedo a saltar el obstáculo. En lugar de forzarlo, le pide que realice un salto más bajo y que explique la técnica. ¿Qué está evaluando?",
        opciones: [
            "A) Nada, porque el niño no cumplió con el estándar del salto alto.",
            "B) El componente actitudinal y el conocimiento procedimental de la competencia motriz, valorando el progreso individual y la gestión del miedo.",
            "C) Que el niño es flojo y no tiene aptitud física.",
            "D) Una falta de disciplina por no obedecer la instrucción original."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La evaluación en Educación Física bajo el enfoque por competencias no es 'olímpica'. Se valoran los procesos, la conciencia corporal y la disposición, permitiendo que cada estudiante avance según su ritmo biológico y emocional."
    },
    {
        id: 470,
        categoria: "Planificación Pedagógica",
        pregunta: "Al final de la jornada en jornada extendida, los docentes de un centro se reúnen 30 minutos para coordinar las actividades del día siguiente. ¿Cómo se denomina técnicamente este espacio?",
        opciones: [
            "A) Tiempo de descanso docente.",
            "B) Comunidad de Aprendizaje o Espacio de Planificación Colaborativa, vital para asegurar la coherencia pedagógica del centro.",
            "C) Reunión de chismes pedagógicos.",
            "D) Tiempo perdido que debería usarse con los estudiantes."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Calendario Escolar / Jornada Extendida. La planificación colaborativa es un estándar de calidad. Permite que lo que pasa en matemáticas tenga sentido con lo que pasa en lengua española y que el centro educativo funcione como una unidad pedagógica y no como islas aisladas."
    },
    {
        id: 471,
        categoria: "Planificación Pedagógica",
        pregunta: "Al desarrollar una secuencia didáctica en 5to grado, el docente nota que el tiempo planificado fue insuficiente y está a punto de sonar el timbre de salida sin haber realizado la actividad de cierre. ¿Qué acción pedagógica procede según el modelo por competencias?",
        opciones: [
            "A) Dejar que los estudiantes salgan al recreo y comenzar la clase siguiente exactamente donde se quedó.",
            "B) Asignar la actividad de cierre como tarea para la casa, asegurando así que el currículo se cumpla a tiempo.",
            "C) Acelerar la explicación y dictar un resumen rápido en la pizarra para que los niños lo copien antes de irse.",
            "D) Reajustar la temporalización, pausar la actividad de desarrollo y priorizar un cierre breve (metacognición) para consolidar lo aprendido en la sesión."
        ],
        respuestaCorrecta: 3,
        explicacion: "Base Legal: Adecuación Curricular 2023. El cierre pedagógico (la metacognición y síntesis) es innegociable en la secuencia didáctica, pues es donde el estudiante da sentido a lo que aprendió. Es preferible acortar el desarrollo que omitir el cierre o enviarlo como tarea."
    },
    {
        id: 472,
        categoria: "Inclusión",
        pregunta: "En una evaluación de matemáticas en 3er grado, la maestra nota que un estudiante con discalculia severa diagnosticada no puede realizar el cálculo escrito de la resta, aunque comprende verbalmente la lógica del problema. ¿Cuál es el ajuste razonable primario para evaluar su competencia de resolución de problemas?",
        opciones: [
            "A) Proveerle apoyos tangibles (ábacos, material base 10) o permitirle el uso de calculadora para el proceso mecánico, evaluando su capacidad de razonamiento lógico frente al problema.",
            "B) Calificarlo con 'En Proceso' (EP) hasta que logre dominar el cálculo manual sin ayuda de herramientas.",
            "C) Eximirlo de las evaluaciones de matemáticas y evaluarlo únicamente en Lengua Española y Artística.",
            "D) Darle una prueba de un nivel inferior (de 1er grado) para que no se frustre al no poder restar."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Ordenanza 05-2024. La discalculia afecta la mecánica del cálculo, no la inteligencia ni la lógica. La competencia a evaluar es 'Resolución de Problemas', no el acto de restar a mano. El DUA permite el uso de herramientas tecnológicas o físicas para sortear la barrera del cálculo sin bajar la expectativa del grado."
    },
    {
        id: 473,
        categoria: "Evaluación",
        pregunta: "Durante la entrega de boletines, un padre se muestra inconforme porque su hija de 2do grado obtuvo 'En Proceso' (EP) en varios indicadores y exige una nota numérica. El docente intenta manejar la situación. ¿Cuál respuesta demuestra el correcto dominio del sistema de evaluación?",
        opciones: [
            "A) Indicarle que él solo sigue las reglas del MINERD y que si tiene quejas, debe dirigirse a la dirección del centro.",
            "B) Hacer una equivalencia no oficial (ej. EP equivale a 70 puntos) para que el padre se vaya tranquilo y sin dudas.",
            "C) Explicar el sentido cualitativo y formativo de la escala, mostrando el portafolio de la niña para evidenciar qué ha logrado, qué le falta y cómo trabajarán juntos para alcanzar el 'Logrado'.",
            "D) Sugerir al padre que pague una tutoría privada, ya que el 'EP' significa que la niña está reprobando el año escolar."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ordenanza 04-2023. La evaluación en el Nivel Primario es cualitativa y criterial. Convertir letras a números desvirtúa el enfoque. El docente debe empoderar e informar a la familia utilizando evidencias (portafolios, rúbricas) para que comprendan la naturaleza formativa de la evaluación."
    },
    {
        id: 474,
        categoria: "Gestión del Aprendizaje",
        pregunta: "Una maestra de 6to grado quiere implementar la estrategia de 'Aula Invertida' (Flipped Classroom) en Ciencias Sociales. ¿Qué dinámica de aula debe establecer para ejecutar correctamente esta estrategia?",
        opciones: [
            "A) Explicar el tema en la pizarra de forma tradicional y dejar que los niños hagan los ejercicios de práctica en sus casas.",
            "B) Asignar el consumo del material teórico (videos o lecturas) en casa, y utilizar el valioso tiempo de aula para debates, análisis y resolución de problemas mediado por la maestra.",
            "C) Que los estudiantes impartan las clases todos los días mientras la maestra se sienta al fondo a evaluarlos.",
            "D) Asignar trabajos grupales exclusivamente para que los hagan los fines de semana en casa de un compañero."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Estrategias de Aprendizaje (Adecuación Curricular 2023). El aula invertida delega el aprendizaje pasivo (conocer teoría) al espacio extraclase, reservando el aula para el aprendizaje activo (analizar, aplicar, crear) donde la mediación del docente es más necesaria."
    },
    {
        id: 475,
        categoria: "Alfabetización",
        pregunta: "La maestra de 1er grado nota que sus estudiantes se aburren y se distraen rápidamente al copiar sílabas repetitivas de la pizarra (ma-me-mi-mo-mu). Según el enfoque funcional de la enseñanza de la lengua, ¿cómo debe rediseñar la actividad?",
        opciones: [
            "A) Reducir la cantidad de sílabas a copiar a la mitad para que no se cansen tan rápido.",
            "B) Prometerles pegatinas o premios a los que copien sin levantar la cabeza de la libreta.",
            "C) Aplicar sanciones a los que se distraigan, colocándolos de pie al final del salón.",
            "D) Sustituir la copia mecánica por el análisis de textos de circulación social (envases, afiches, nombres propios) para que interactúen con el lenguaje escrito dotado de significado real."
        ],
        respuestaCorrecta: 3,
        explicacion: "Base Legal: Ordenanza 01-2023. El enfoque textual, funcional y comunicativo desecha el método silábico mecanicista (plana y copia sin sentido). Los niños aprenden a leer y escribir interactuando con textos auténticos que cumplen una función social real."
    },
    {
        id: 476,
        categoria: "Ética",
        pregunta: "La directiva de la APMAE se acerca a un maestro y le ofrece entregarle directamente una cuota de dinero mensual recolectada por los padres para que él compre materiales y 'mejore su salón' a su gusto. ¿Cuál debe ser el proceder ético del docente?",
        opciones: [
            "A) Rechazar la administración directa de los fondos, agradeciendo la iniciativa pero indicando que las compras y el manejo financiero corresponden exclusivamente a la APMAE y a la Dirección.",
            "B) Aceptar el dinero, guardarlo en una cuenta personal y llevar todos los recibos al final de mes para demostrar transparencia.",
            "C) Aceptar el dinero solo si todos los padres firman una carta donde conste que fue una donación voluntaria.",
            "D) Tomar el dinero y usarlo en su propio beneficio, ya que el salario docente no alcanza para comprar materiales del aula."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Estatuto Docente y Reglamento de las APMAE. El docente tiene prohibido administrar, cobrar o manejar fondos monetarios directos provenientes de las familias o estudiantes. Esto evita conflictos de interés, suspicacias y mantiene la relación estrictamente en el plano pedagógico."
    },
    {
        id: 477,
        categoria: "Convivencia",
        pregunta: "Durante un trabajo grupal en 4to grado, tres estudiantes se niegan abiertamente a incluir a un compañero argumentando que 'él es muy lento y siempre les baja la nota'. ¿Qué intervención formativa debe aplicar el docente?",
        opciones: [
            "A) Aceptar la decisión del grupo y poner al estudiante excluido a trabajar solo para evitar discusiones.",
            "B) Obligarlos a aceptarlo amenazándolos con quitarles 10 puntos de la calificación final del proyecto.",
            "C) Sostener un diálogo reflexivo con el grupo sobre la equidad y la empatía, y estructurar roles dentro del equipo (DUA) para que el estudiante excluido pueda aportar desde sus fortalezas.",
            "D) Cambiar al estudiante a otro grupo donde haya niños 'más buenos' que no se quejen."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ordenanza 22-2023 (Manual de Convivencia) y Educación Inclusiva. La exclusión académica entre pares es una forma de violencia psicológica. Obligar o castigar no resuelve el prejuicio. Se debe mediar mediante el diálogo (práctica restaurativa) y garantizar una interdependencia estructurada donde todos brillen."
    },
    {
        id: 478,
        categoria: "Evaluación",
        pregunta: "Un docente está escribiendo un reporte anecdótico sobre un estudiante de 5to grado. Su apunte dice: 'Hoy María estuvo insoportable, siempre quiere llamar la atención y molesta a sus compañeros a propósito'. Según los criterios técnicos de evaluación, ¿cómo se califica este instrumento?",
        opciones: [
            "A) Excelente, porque resume perfectamente el perfil psicológico y la actitud negativa de la estudiante.",
            "B) Adecuado, porque permite a los padres ver exactamente cómo se porta su hija sin rodeos.",
            "C) Incompleto, porque le falta agregar la sanción que se le impuso a la estudiante.",
            "D) Inválido y carente de ética, ya que el registro anecdótico debe limitarse a describir los hechos observables objetivamente, desprovisto de juicios de valor, adjetivos estigmatizantes y suposiciones."
        ],
        respuestaCorrecta: 3,
        explicacion: "Base Legal: Ordenanza 04-2023. La técnica de observación sistemática requiere objetividad. Describir a un niño como 'insoportable' o asumir que hace las cosas 'a propósito' es una interpretación subjetiva y patologizante que viola la ética de la evaluación formativa."
    },
    {
        id: 479,
        categoria: "Planificación Pedagógica",
        pregunta: "Un equipo docente de 6to grado decide trabajar un Proyecto Participativo de Aula (PPA) sobre 'El rescate de las áreas verdes del sector'. Sin embargo, dudan sobre cómo integrar todas las materias. ¿Cuál es el lineamiento normativo para esta articulación?",
        opciones: [
            "A) Se deben forzar todas las materias, sin importar si encajan o no, para cumplir con el esquema curricular del mes.",
            "B) La articulación debe ser natural y pertinente; solo se integrarán las áreas y competencias específicas que realmente aporten a la solución y comprensión del problema central del proyecto.",
            "C) Se debe dividir el proyecto en horarios: los lunes para Matemáticas, los martes para Sociales, sin que se mezclen.",
            "D) En los PPA solo participa el maestro del área de Ciencias de la Naturaleza."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023 (Estrategias de Articulación). La articulación de las áreas no debe ser artificial ni forzada. Un PPA convoca a las áreas cuyas competencias son necesarias para abordar el problema. Si un área no se conecta de forma lógica, se trabaja en paralelo mediante otra estrategia."
    },
    {
        id: 480,
        categoria: "Gestión del Aprendizaje",
        pregunta: "En una clase de 2do grado, un estudiante brillante termina sus ejercicios de matemáticas en 10 minutos, mientras el resto del curso requiere 30 minutos. Tras terminar, comienza a jugar y a distraer a otros. ¿Cuál es la estrategia pedagógica de gestión idónea?",
        opciones: [
            "A) Implementar 'Zonas de Enriquecimiento' o 'Rincones de Aprendizaje' en el aula con desafíos autónomos (lectura, rompecabezas lógicos) donde los alumnos rápidos puedan ir sin interrumpir a los demás.",
            "B) Enviarlo al patio a jugar como recompensa por haber terminado rápido.",
            "C) Ponerle a borrar la pizarra y limpiar los pupitres de sus compañeros.",
            "D) Obligarlo a quedarse cruzado de brazos y en silencio absoluto hasta que termine el último estudiante."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Gestión de Aula y DUA. Los ritmos de aprendizaje difieren en el aula. Castigar al que termina rápido con inactividad (D) genera indisciplina. Las estaciones de enriquecimiento (A) proporcionan una extensión del aprendizaje, respetando su ritmo y fomentando la autonomía."
    },
    {
        id: 481,
        categoria: "Alfabetización",
        pregunta: "Al revisar el cuaderno de un estudiante de 2do grado que escribe de forma autónoma, la maestra nota que escribe 'caMioNeta' mezclando mayúsculas y minúsculas sin regla aparente. ¿Cómo debe interpretarse esto pedagógicamente?",
        opciones: [
            "A) Como una indisciplina visual, el estudiante debe ser penalizado para que escriba bonito.",
            "B) Como un trastorno grave de disgrafía que requiere la intervención de un psicólogo externo.",
            "C) Como una etapa normal y constructiva en el desarrollo de la escritura (alternancia grafémica), donde el niño prueba y estabiliza el trazo; el enfoque debe estar en la intención comunicativa y el mensaje.",
            "D) Como una deficiencia de la maestra de 1er grado que no le enseñó bien las vocales."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ordenanza 01-2023. En las etapas tempranas, la hibridación de fuentes (mayúsculas, minúsculas, imprenta, cursiva) es parte de la exploración del sistema gráfico. La corrección ortográfica estricta llegará más adelante; la prioridad es que produzca sentido y logre comunicarse."
    },
    {
        id: 482,
        categoria: "Inclusión",
        pregunta: "En el centro educativo se ha matriculado una niña usuaria de silla de ruedas. La maestra de Educación Física debe impartir una unidad sobre 'Expresión Corporal y Danza'. ¿Cómo se aborda la inclusión en esta clase específica?",
        opciones: [
            "A) Exigirle que realice los mismos pasos de baile que los demás estudiantes de pie para no hacer distinciones discriminatorias.",
            "B) Eximirla de la actividad física y ponerla a investigar la historia de la danza dominicana en la biblioteca.",
            "C) Ponerla como jurado calificador de sus compañeros, ya que ella no puede bailar.",
            "D) Adaptar la coreografía enfocándose en la expresividad del tronco superior, brazos y rostro, asegurando su protagonismo y participación activa junto al resto del grupo."
        ],
        respuestaCorrecta: 3,
        explicacion: "Base Legal: Ordenanza 05-2024. El DUA establece la adaptación de la tarea a las posibilidades motrices del estudiante. La expresión corporal no requiere el uso de piernas exclusivamente. Modificar la coreografía garantiza su derecho al juego, al arte y a la inclusión real, sin roles pasivos (jurado/investigadora)."
    },
    {
        id: 483,
        categoria: "Comportamientos Profesionales",
        pregunta: "Un maestro observa que un colega de otra sección somete constantemente a sus alumnos a humillaciones públicas, llamándoles 'brutos' y 'fracasados' frente a la clase. ¿Cuál es el compromiso ético y normativo ineludible del maestro observador?",
        opciones: [
            "A) Informar el caso inmediatamente al equipo de gestión (Director/Orientador) exigiendo el respeto al debido proceso, ya que la humillación es violencia psicológica y una vulneración grave de los derechos del menor.",
            "B) Mantener el silencio por lealtad profesional y espíritu de cuerpo institucional ('entre bomberos no nos pisamos la manguera').",
            "C) Enfrentar físicamente al colega delante de los niños para demostrarles a los alumnos que alguien los defiende.",
            "D) Publicar la situación anónimamente en redes sociales para que el escarnio público haga cambiar al maestro."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Ley 136-03 y Código de Ética Docente. La violencia psicológica (tratos humillantes) está tipificada como delito. El maestro es garante de derechos, y el encubrimiento lo hace cómplice por omisión. Debe seguir la vía jerárquica institucional (nunca la vía violenta o redes sociales) para proteger al menor."
    },
    {
        id: 484,
        categoria: "Evaluación",
        pregunta: "Al término de una Unidad en 4to grado, el docente observa que 10 de sus 30 estudiantes no han logrado la competencia comunicativa escrita ('Iniciado'). Ante esto, el docente decide seguir adelante con la siguiente unidad porque 'ya se acabó el tiempo'. ¿Qué principio normativo está incumpliendo?",
        opciones: [
            "A) El principio de evaluación sumativa estricta.",
            "B) La obligación de implementar estrategias de Recuperación Pedagógica Inmediata y continua, ajustando su planificación para no dejar rezagados a esos estudiantes antes de avanzar a temáticas más complejas.",
            "C) El principio de delegación, ya que debió enviar a esos 10 niños al coordinador pedagógico.",
            "D) El derecho de los niños a repetir el año por su propia cuenta."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La evaluación tiene un carácter formativo. Dejar a un 30% del aula con vacíos curriculares (rezago escolar) y avanzar ciegamente incumple el deber docente de garantizar el aprendizaje. La recuperación pedagógica debe ser en proceso, no al final del año."
    },
    {
        id: 485,
        categoria: "Planificación Pedagógica",
        pregunta: "Al diseñar una 'Situación de Aprendizaje', la docente debe redactar un escenario inicial. ¿Cuál de las siguientes redacciones corresponde a un verdadero CONTEXTO según la Adecuación Curricular?",
        opciones: [
            "A) 'Aprender a multiplicar fracciones usando el método cruzado y simplificando resultados'.",
            "B) 'Los estudiantes deberán presentar un examen final sobre la Revolución de Abril de 1965 para aprobar la asignatura de Sociales'.",
            "C) 'En la escuela los índices de dengue han aumentado debido a los criaderos de mosquitos en el patio trasero después de las lluvias'.",
            "D) 'Utilizar el libro de texto en las páginas 45 a 50 durante tres semanas consecutivas'."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Adecuación Curricular 2023. El 'contexto' en una Situación de Aprendizaje es el escenario real, simulado o problematizado del cual surge la necesidad de aprender. No es un listado de contenidos (A), ni un examen (B), ni un recurso (D), es una situación vital (C)."
    },
    {
        id: 486,
        categoria: "Convivencia",
        pregunta: "Un alumno de 5to grado, al ser corregido por hablar durante la clase, se levanta, tira su silla al suelo y desafía a gritos a la maestra frente a todos. ¿Cuál es la reacción inmediata más profesional, basada en la gestión de conflictos?",
        opciones: [
            "A) Gritarle más fuerte y exigirle que recoja la silla inmediatamente para no perder la autoridad.",
            "B) Aplicar fuerza física y expulsarlo del aula empujándolo hacia el pasillo.",
            "C) Llamar a los demás niños para que se burlen de él y vea lo ridículo que se ve.",
            "D) Mantener la calma absoluta, no entrar en lucha de poder, solicitar el apoyo del orientador o coordinador para retirar al estudiante del foco de tensión, salvaguardando la seguridad del grupo y aplicando el protocolo a posteriori."
        ],
        respuestaCorrecta: 3,
        explicacion: "Base Legal: Manual de Convivencia (OD 22-2023). Ante un 'secuestro amigdalar' (crisis de ira), el adulto debe mantener la regulación emocional. Entrar en lucha de poder (gritar) o agredir físicamente agrava la crisis y constituye una falta grave. Se desescala separando al niño del grupo con apoyo institucional."
    },
    {
        id: 487,
        categoria: "Alfabetización",
        pregunta: "En 3er grado, la maestra está leyendo 'Caperucita Roja' y pregunta: '¿Qué opinan ustedes de que Caperucita haya desobedecido a su mamá al irse por el bosque?'. ¿Qué nivel de comprensión lectora está estimulando?",
        opciones: [
            "A) Nivel Crítico (Valorativo), ya que exige al estudiante emitir un juicio de valor o postura personal frente al texto.",
            "B) Nivel Literal, ya que la respuesta está escrita textualmente en el cuento.",
            "C) Nivel Inferencial, porque deben deducir el camino que tomó el lobo.",
            "D) Nivel de Caligrafía, ya que luego deberán copiar la respuesta."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Enfoque Textual, Funcional y Comunicativo (Diseño Curricular). La pregunta exige emitir un juicio ('¿Qué opinan...?') basándose en el análisis de las acciones de un personaje, lo cual corresponde al nivel de pensamiento crítico, el nivel más alto de la comprensión lectora."
    },
    {
        id: 488,
        categoria: "Inclusión",
        pregunta: "La escuela diagnostica que un niño necesita adaptaciones significativas y apoyo especializado (posible maestra sombra/tutor). Los padres niegan la condición, se ofenden y rechazan cualquier ayuda externa. ¿Qué debe hacer el docente?",
        opciones: [
            "A) Expulsar al niño hasta que los padres traigan un certificado médico y acepten la realidad.",
            "B) Ignorar las necesidades del niño y tratarlo como a cualquier otro, ya que sin autorización de los padres no se puede hacer nada.",
            "C) Aplicar de oficio los ajustes razonables dentro de su aula (DUA) para asegurar su aprendizaje, documentar el caso y trabajar de la mano con Orientación para sensibilizar gradualmente a la familia sin generar rupturas.",
            "D) Reprobar al estudiante sistemáticamente para demostrarle a los padres que estaban equivocados."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ordenanza 05-2024. El derecho a la educación del niño prima sobre la negación (duelo) de la familia. El docente no puede condicionar la inclusión a la aceptación de los padres; debe aplicar ajustes en su ámbito de acción pedagógica (aula) y dejar la intervención psicosocial al área de Orientación."
    },
    {
        id: 489,
        categoria: "Gestión del Aprendizaje",
        pregunta: "Durante una clase expositiva en 6to grado, la maestra hace una pregunta abierta. Al ver que nadie responde en los primeros dos segundos, ella misma da la respuesta inmediatamente y sigue hablando. ¿Cuál es el error en la gestión de esta técnica de preguntas?",
        opciones: [
            "A) Ninguno, la maestra demostró dominio del tema y evitó que la clase cayera en silencios incómodos.",
            "B) No haber respetado el 'Tiempo de Espera' (Wait Time) necesario para que los estudiantes procesen cognitivamente la pregunta, busquen información y formulen una respuesta estructurada.",
            "C) Haber hecho una pregunta abierta; solo se deben hacer preguntas de 'Sí' o 'No'.",
            "D) No haber castigado a los estudiantes que se quedaron en silencio por no haber estudiado."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Estrategias Socráticas / Constructivismo. El 'tiempo de espera' es vital. Al responder su propia pregunta de inmediato, la docente fomenta la pasividad y el conformismo en el alumno, eliminando la oportunidad del esfuerzo cognitivo e invalidando el propósito de la pregunta."
    },
    {
        id: 490,
        categoria: "Comportamiento Profesional",
        pregunta: "Un profesor de 5to grado faltó varios días por una licencia médica. Al reincorporarse, nota que está atrasado en el cronograma curricular oficial. Faltan tres semanas para los exámenes del periodo. ¿Cuál es la decisión técnica correcta?",
        opciones: [
            "A) Pedir a los niños que se lleven los libros de texto a casa y lean solos todos los temas que no se impartieron.",
            "B) Ignorar los temas faltantes y evaluar a los niños únicamente con lo que se dio, aunque no logren las competencias del grado.",
            "C) Dar los temas de manera superficial y acelerada (dictados rápidos) para garantizar que todo el programa quede plasmado en el cuaderno de los estudiantes.",
            "D) Priorizar y readecuar su planificación, seleccionando los indicadores de logro y competencias imprescindibles, integrando áreas donde sea posible para garantizar aprendizajes profundos en el tiempo restante."
        ],
        respuestaCorrecta: 3,
        explicacion: "Base Legal: Flexibilidad Curricular (Adecuación 2023). Cubrir el programa a toda prisa (C) o delegarlo a casa (A) no genera aprendizaje. El docente profesional prioriza, adecúa e integra saberes, prefiriendo la profundidad y el dominio de competencias clave sobre la cobertura exhaustiva y superficial de temas."
    },

    {
        id: 491,
        categoria: "Alfabetización",
        pregunta: "En 2do grado, la docente desea evaluar la competencia de Producción Escrita. ¿Cuál de las siguientes actividades corresponde al enfoque textual, funcional y comunicativo de la lengua?",
        opciones: [
            "A) Dictar un párrafo del libro de Ciencias Naturales para evaluar la ortografía y la limpieza del trazo.",
            "B) Hacer que los estudiantes copien de la pizarra la lección sobre los sustantivos tres veces.",
            "C) Solicitar a los niños que escriban planas de palabras trabadas (bra, bre, bri) para soltar la mano.",
            "D) Pedir a los estudiantes que redacten una invitación real (con borradores previos) para que sus padres asistan a la presentación de su proyecto escolar."
        ],
        respuestaCorrecta: 3,
        explicacion: "Base Legal: Ordenanza 01-2023. La producción escrita no se desarrolla copiando o mediante dictados mecánicos. Se logra cuando el estudiante escribe con un propósito real y un destinatario específico (enfoque comunicativo), viviendo el proceso de planificación, redacción y revisión."
    },
    {
        id: 492,
        categoria: "Evaluación",
        pregunta: "Un padre se presenta a la escuela exigiendo saber por qué su hijo tiene una calificación de 'En Proceso' (EP) en Ciencias de la Naturaleza. ¿Cuál debe ser la intervención del docente basándose en la evaluación criterial?",
        opciones: [
            "A) Mostrarle al padre la rúbrica y las evidencias del portafolio del estudiante, señalando los criterios específicos que ya alcanzó y aquellos que aún requieren apoyo para llegar al nivel 'Logrado'.",
            "B) Indicarle que es una exigencia del nuevo registro del MINERD y que no hay nada que él pueda hacer al respecto.",
            "C) Promediar matemáticamente las tareas del cuaderno para demostrarle que el número equivale a un 'EP'.",
            "D) Evadir la conversación diciendo que el niño se porta mal y por eso no saca 'Logrado'."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Ordenanza 04-2023. La evaluación criterial requiere transparencia. Las letras no son un promedio subjetivo, sino el reflejo de un nivel de dominio evidenciado a través de instrumentos (rúbricas) y producciones. El docente debe retroalimentar a la familia con pruebas objetivas."
    },
    {
        id: 493,
        categoria: "Inclusión",
        pregunta: "Se inscribe en 5to grado un estudiante con hipoacusia moderada (pérdida parcial de la audición). No utiliza lenguaje de señas y lee los labios. ¿Qué ajuste razonable de acceso es obligatorio implementar de inmediato en el aula?",
        opciones: [
            "A) Sentarlo al final del aula para que no se sienta presionado por las miradas de sus compañeros.",
            "B) Hablarle exageradamente lento y gritando durante toda la jornada escolar.",
            "C) Ubicarlo en la primera fila, garantizar contacto visual al hablar de frente (sin taparse la boca) y apoyar las explicaciones verbales con material visual o escrito en la pizarra.",
            "D) Eximirlo de las exposiciones orales y evaluarlo solo con exámenes escritos."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ordenanza 05-2024. Los ajustes de acceso buscan eliminar las barreras del entorno. Para un estudiante que realiza lectura labiofacial, la ubicación estratégica, la buena iluminación del rostro del docente y el soporte visual constante (DUA) son medidas que garantizan su aprendizaje sin segregarlo."
    },
    {
        id: 494,
        categoria: "Ética",
        pregunta: "Una maestra de 3er grado decide vender dulces y meriendas dentro del aula a sus propios estudiantes durante la hora de recreo, argumentando que el dinero será usado para comprar material didáctico para el curso. ¿Es correcta esta práctica?",
        opciones: [
            "A) Sí, siempre y cuando ella demuestre con facturas que el dinero se invirtió en el salón de clases.",
            "B) No, constituye una falta ética y un conflicto de interés. El docente no debe realizar actividades comerciales con sus alumnos, y las recaudaciones corresponden a la APMAE bajo los debidos protocolos.",
            "C) Sí, porque fomenta la competencia de Resolución de Problemas y el emprendimiento en los estudiantes.",
            "D) No, a menos que el director del centro le dé un permiso verbal."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley General de Educación 66-97 y Estatuto Docente. El docente no puede ejercer actos de comercio con sus estudiantes ni manejar efectivo directamente. Esto desvirtúa el rol pedagógico y genera inequidad. Las necesidades del aula se canalizan institucionalmente."
    },
    {
        id: 495,
        categoria: "Gestión del Aprendizaje",
        pregunta: "Para realizar un proyecto de investigación en 6to grado, el docente decide formar los grupos de trabajo. Según los principios del constructivismo y la Zona de Desarrollo Próximo, ¿cuál es el criterio más efectivo para agrupar a los estudiantes?",
        opciones: [
            "A) Dejar que los estudiantes elijan por afinidad para que no haya peleas.",
            "B) Agrupar a todos los estudiantes de alto rendimiento juntos, y a los de bajo rendimiento en otro grupo.",
            "C) Separarlos por género: niñas con niñas y niños con niños.",
            "D) Conformar grupos heterogéneos, mezclando diferentes niveles de habilidades y talentos para fomentar el andamiaje, el aprendizaje entre pares y la tutoría mutua."
        ],
        respuestaCorrecta: 3,
        explicacion: "Base Legal: Adecuación Curricular 2023 (Estrategias de Socialización). La heterogeneidad es clave en el aprendizaje colaborativo. Permite que estudiantes con mayor dominio en un área sirvan de 'andamio' (Vygotsky) para los demás, desarrollando a la vez competencias sociales y empatía."
    },
    {
        id: 496,
        categoria: "Comportamientos Profesionales",
        pregunta: "Un docente convocado a la Etapa V (ERP) llega al Centro Sede con un bulto grande y su teléfono celular en la mano. Según las instrucciones oficiales del Instructivo del ERP, ¿qué debe suceder?",
        opciones: [
            "A) Puede entrar con el celular siempre que lo ponga en modo vibración y no lo use.",
            "B) Se le permite tener el bulto en el piso junto a su asiento.",
            "C) No se le permitirá el acceso con dispositivos electrónicos ni bultos grandes al aula, debiendo acatar las normas de seguridad del proceso.",
            "D) El aplicador debe guardarle el celular en su propio bolsillo."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Instructivo para la Etapa V ERP 2026[cite: 215, 216]. Las normas de seguridad y organización establecen claramente que no se permite llevar bultos ni carteras grandes, ni se permite el acceso con dispositivos electrónicos para garantizar la integridad del proceso."
    },
    {
        id: 497,
        categoria: "Convivencia",
        pregunta: "En 4to grado, un estudiante trae a escondidas un juguete electrónico, lo enciende durante la clase y distrae a varios compañeros. ¿Cuál es la intervención adecuada desde la disciplina positiva?",
        opciones: [
            "A) Retener temporalmente el objeto sin humillar al estudiante, recordarle las normas del aula y devolvérselo al final del día o a sus padres, dialogando sobre el momento adecuado para jugar.",
            "B) Tirar el juguete a la basura para que aprenda que en la escuela solo se estudia.",
            "C) Bajarle 10 puntos en la calificación de Matemáticas por falta de atención.",
            "D) Dejarlo jugar si ya terminó de copiar la clase de la pizarra."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Manual de Convivencia (OD 22-2023). La disciplina positiva establece consecuencias lógicas y proporcionadas, no humillantes. Retener el objeto distractor hasta el final de la jornada es una consecuencia lógica; botarlo o bajar puntos académicos son medidas abusivas y prohibidas."
    },
    {
        id: 498,
        categoria: "Planificación Pedagógica",
        pregunta: "El equipo docente de primaria debe integrar el Eje Transversal 'Desarrollo Sostenible'. ¿Qué acción metodológica evidencia correctamente su aplicación transversal?",
        opciones: [
            "A) Impartir una charla sobre reciclaje en el patio durante la hora de recreo.",
            "B) Diseñar una Situación de Aprendizaje donde los estudiantes elaboren un plan de reducción de plásticos en la escuela, integrando cálculos matemáticos (estadísticas) y redacción de ensayos (lengua española).",
            "C) Pegar carteles verdes en todas las paredes del aula al inicio del año.",
            "D) Evaluar la definición de 'Sostenibilidad' en un examen de Ciencias Sociales."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. La transversalidad requiere que las áreas curriculares trabajen en conjunto para abordar una temática social mediante la movilización de competencias (ej. usando matemáticas y lengua para resolver un problema ambiental), y no como una actividad decorativa o paralela."
    },
    {
        id: 499,
        categoria: "Alfabetización",
        pregunta: "Antes de leer un cuento a sus estudiantes de 1er grado, la maestra les muestra la portada, les lee el título y les pregunta: '¿De qué creen que tratará esta historia?'. ¿Qué estrategia de comprensión lectora está aplicando?",
        opciones: [
            "A) Evaluación sumativa del vocabulario.",
            "B) Medición de la velocidad lectora.",
            "C) Estrategia de anticipación (hipótesis) para activar saberes previos e involucrar cognitivamente al niño con el texto.",
            "D) Identificación de la ortografía convencional de las palabras."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Fascículos de Alfabetización Inicial / Enfoque Comunicativo. La comprensión lectora consta de tres momentos: antes, durante y después de la lectura. Las preguntas de anticipación (antes) activan conocimientos previos y generan hipótesis, lo que predispone positivamente el cerebro para comprender el texto."
    },
    {
        id: 500,
        categoria: "Evaluación",
        pregunta: "Tras aplicar la evaluación diagnóstica en septiembre, una maestra de 5to grado descubre que sus alumnos ya dominan los conceptos que ella había planificado para la primera unidad. ¿Cuál es el propósito legal y pedagógico de este hallazgo?",
        opciones: [
            "A) Modificar inmediatamente su planificación, elevando el nivel de complejidad y avanzando hacia nuevos indicadores de logro, ajustándose al nivel real del grupo.",
            "B) Impartir la unidad tal como estaba planificada porque no se puede alterar el currículo.",
            "C) Asignarles a todos un 'Logrado' (L) automático en el registro y dejarlos jugar ese mes.",
            "D) Pedir a la dirección que promueva a los estudiantes a 6to grado por ser muy inteligentes."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Ordenanza 04-2023. La evaluación diagnóstica sirve para tomar decisiones pedagógicas. Si los estudiantes ya poseen el saber, enseñar lo mismo provoca desmotivación. El currículo es flexible, permitiendo al docente adaptar la intervención a la Zona de Desarrollo Próximo del grupo."
    },
    {
        id: 501,
        categoria: "Inclusión",
        pregunta: "Un estudiante de 4to grado presenta una discapacidad visual severa (ceguera). Durante la clase de Ciencias, la maestra utilizará imágenes del sistema solar. ¿Qué ajuste razonable es obligatorio para garantizar el Diseño Universal para el Aprendizaje (DUA)?",
        opciones: [
            "A) Exigirle que se imagine el sistema solar basándose solo en lo que recuerda.",
            "B) Dejarlo exento de la clase de Ciencias de la Naturaleza.",
            "C) Asignarle un examen más fácil donde no tenga que identificar planetas.",
            "D) Proveerle de materiales táctiles (modelos 3D de los planetas) y ofrecer descripciones verbales ricas y detalladas durante la exposición visual."
        ],
        respuestaCorrecta: 3,
        explicacion: "Base Legal: Ordenanza 05-2024. Los ajustes para estudiantes con ceguera deben compensar la falta de input visual mediante otros canales sensoriales (táctil, auditivo). El DUA promueve múltiples formas de representación, asegurando que el estudiante adquiera el mismo conocimiento a través de un medio accesible."
    },
    {
        id: 502,
        categoria: "Gestión del Aprendizaje",
        pregunta: "Para una clase de debate en Ciencias Sociales, el docente organiza los pupitres del aula en forma de 'U' en lugar de las tradicionales filas indias. ¿Qué intención pedagógica justifica esta decisión de gestión del ambiente?",
        opciones: [
            "A) Vigilar mejor a los estudiantes para que no utilicen sus teléfonos celulares.",
            "B) Favorecer el contacto visual entre todos los estudiantes, promover la escucha activa y facilitar una participación equitativa en el diálogo horizontal.",
            "C) Cumplir con una norma de ornato que exige cambiar el aula todos los viernes.",
            "D) Ahorrar espacio en el aula para poder guardar materiales de limpieza."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Estrategias de Gestión de Aula (Adecuación Curricular). La organización espacial debe ser coherente con la estrategia didáctica. Un debate en filas indias dificulta la interacción, ya que los niños se hablan a las espaldas. La disposición en 'U' o círculo fomenta la comunicación dialógica."
    },
    {
        id: 503,
        categoria: "Comportamientos Profesionales",
        pregunta: "Durante la realización del Ejercicio de Rendimiento Profesional (ERP), un docente presenta una dificultad técnica y nota que su plataforma se ha congelado. Según las instrucciones oficiales, ¿qué debe hacer?",
        opciones: [
            "A) Reiniciar la computadora por su cuenta y volver a entrar.",
            "B) Abandonar el centro sede porque la prueba ya no será válida.",
            "C) Notificar la incidencia oportunamente al personal aplicador en el centro sede para que quede registrada y se brinde la asistencia requerida.",
            "D) Sacar su celular y llamar al Ministerio de Educación."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Instructivo para la Etapa V ERP 2026[cite: 275]. El instructivo señala claramente que ante una dificultad técnica, se debe notificar oportunamente al personal responsable (centro de ayuda al docente/aplicador) para registrar la incidencia el mismo día."
    },
    {
        id: 504,
        categoria: "Planificación Pedagógica",
        pregunta: "Al planificar su clase, un docente inexperto confunde los términos 'Estrategia' y 'Actividad'. ¿Cuál de las siguientes afirmaciones establece la diferencia técnica correcta según el currículo dominicano?",
        opciones: [
            "A) Son sinónimos y pueden usarse indistintamente en la malla curricular.",
            "B) La actividad es lo que hace el maestro en la pizarra, y la estrategia es lo que hace el estudiante en su cuaderno.",
            "C) La estrategia es el recurso didáctico, y la actividad es la evaluación final.",
            "D) La estrategia es el conjunto de acciones pedagógicas intencionadas (ej. Indagación dialógica), y la actividad es la acción concreta y medible que ejecuta el estudiante (ej. Entrevistar a un experto)."
        ],
        respuestaCorrecta: 3,
        explicacion: "Base Legal: Adecuación Curricular 2023. La estrategia es el 'cómo' metodológico general diseñado por el docente. Las actividades son las tareas concretas y operativas que realizan los estudiantes en un tiempo determinado para materializar esa estrategia."
    },
    {
        id: 505,
        categoria: "Alfabetización",
        pregunta: "En 3er grado, un estudiante comprende perfectamente lo que lee en silencio (lectura silenciosa), pero al pedirle que lea en voz alta, tartamudea, suda y se equivoca. ¿Cuál es la decisión docente más asertiva?",
        opciones: [
            "A) Priorizar la comprobación de la comprensión silenciosa, y trabajar la fluidez oral gradualmente mediante modelado y lecturas dramatizadas sin forzarlo al estrés de leer frente a todo el grupo.",
            "B) Evaluarlo con 'Iniciado' (I) porque la lectura en voz alta es obligatoria en 3er grado.",
            "C) Obligarlo a leer el párrafo más largo del texto frente a la clase hasta que pierda el miedo.",
            "D) Mandarlo a 1er grado durante las horas de Lengua Española para que repase."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Enfoque Comunicativo y Psicopedagogía. La lectura en voz alta bajo presión eleva el 'filtro afectivo', bloqueando al estudiante (ansiedad). Si comprende en silencio, el objetivo central de la lectura se cumple. La prosodia se trabaja con andamiaje y confianza, no con exposición forzada."
    },
    {
        id: 506,
        categoria: "Ética",
        pregunta: "En tiempos de campaña electoral, un candidato político local, que es familiar de un estudiante, le pide al docente repartir volantes de su candidatura a los niños al finalizar la clase. ¿Qué procede ética y legalmente?",
        opciones: [
            "A) Repartirlos discretamente a la hora de la salida para no ofender al familiar.",
            "B) Aceptar solo si el candidato pertenece al partido de gobierno actual.",
            "C) Negarse rotundamente y de forma cortés, explicando que la escuela es un recinto apartidista y el proselitismo político estudiantil está estrictamente prohibido por la ley educativa.",
            "D) Pedir permiso a los padres a través del grupo de WhatsApp antes de repartirlos."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ley General de Educación 66-97 y Estatuto Docente. Los recintos escolares son espacios neutrales destinados a la educación. El proselitismo político y religioso está prohibido para salvaguardar la integridad institucional y los derechos de los menores a un entorno libre de coerción ideológica."
    },
    {
        id: 507,
        categoria: "Evaluación",
        pregunta: "Según el Sistema de Evaluación de los Aprendizajes (Ordenanza 04-2023), ¿cuál es la función central del 'Indicador de Logro'?",
        opciones: [
            "A) Indicar el tema específico que se va a tratar en la semana.",
            "B) Servir como pista, señal o rasgo observable que permite evidenciar en qué medida el estudiante ha desarrollado una competencia específica.",
            "C) Definir la calificación numérica exacta que el estudiante obtendrá al final del trimestre.",
            "D) Establecer la sanción que recibirá el estudiante si no hace la tarea."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. Las competencias son constructos amplios (ej. Resolución de problemas). Para saber si se ha logrado, el docente necesita evidencias medibles: los indicadores de logro son esos descriptores concretos que 'indican' si la competencia se está movilizando o no."
    },
    {
        id: 508,
        categoria: "Inclusión",
        pregunta: "Un estudiante de 2do grado diagnosticado con TDAH presenta hiperactividad motora; le es imposible permanecer sentado durante los 45 minutos de la clase. ¿Qué ajuste en la gestión de aula favorece su inclusión sin interrumpir al resto?",
        opciones: [
            "A) Solicitar a la familia que lo mantenga medicado o que no lo envíen a la escuela.",
            "B) Castigarlo dejándolo de pie en la esquina del aula.",
            "C) Colocarle una mesa especial lejos de todos para que no moleste.",
            "D) Incorporar pausas activas para todo el grupo y asignarle tareas motoras con propósito (ej. recoger cuadernos, borrar la pizarra) que canalicen su necesidad de movimiento."
        ],
        respuestaCorrecta: 3,
        explicacion: "Base Legal: Ordenanza 05-2024. El TDAH requiere adaptaciones conductuales preventivas. Canalizar la hiperactividad mediante roles lícitos en el aula (repartir materiales) valida su necesidad biológica de movimiento sin penalizarlo y evita que la conducta se convierta en disrupción."
    },
    {
        id: 509,
        categoria: "Convivencia",
        pregunta: "Se descubre que un alumno de 6to grado tomó sin permiso el dinero del estuche de un compañero. ¿Cuál es el abordaje correcto según el Manual de Convivencia?",
        opciones: [
            "A) Abordar el hecho en privado, indagar los motivos sin etiquetar al niño de 'ladrón', promover la devolución del dinero y establecer un compromiso formativo (práctica restaurativa), notificando a Orientación.",
            "B) Revisar públicamente todas las mochilas del curso y avergonzar al culpable para que sirva de escarmiento.",
            "C) Expulsarlo del centro educativo inmediatamente por cometer un acto delictivo.",
            "D) Suspenderle el recreo por un mes consecutivo."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Manual de Convivencia Escolar (OD 22-2023). La falta no se ignora, pero el abordaje debe ser formativo. Etiquetar o humillar públicamente es violencia psicológica. La restitución del daño (devolver lo tomado) y el diálogo privado preservan la dignidad y logran un verdadero cambio conductual."
    },
    {
        id: 510,
        categoria: "Gestión del Aprendizaje",
        pregunta: "La maestra de 5to grado realiza preguntas abiertas a la clase. Cuando nadie responde en los primeros tres segundos, selecciona siempre a los dos estudiantes más rápidos para que contesten. ¿Qué impacto negativo tiene esta práctica en el aprendizaje grupal?",
        opciones: [
            "A) Ninguno, ya que mantiene el ritmo acelerado y eficiente de la clase.",
            "B) Que los estudiantes rápidos se aburrirán si la maestra no les pregunta.",
            "C) Impide que el resto del grupo procese la información (falta de 'tiempo de espera' o wait time), generando pasividad y exclusión cognitiva en los estudiantes de ritmo de aprendizaje más lento.",
            "D) Que se gastan muy rápido las preguntas de la planificación."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Estrategias Constructivistas. El 'tiempo de espera' (3 a 5 segundos) es crucial. Si el docente siempre recurre a los más rápidos, los demás aprenden que no necesitan esforzarse cognitivamente porque alguien más lo hará por ellos, anulando la participación equitativa."
    }

];

// Exportar (opcional según necesidad)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = bancoPrimaria;
}   