import { Module, Testimonial, FAQItem, Bonus } from "./types";

export const MODULES_DATA: Module[] = [
  {
    id: 1,
    number: "MÓDULO 1",
    title: "¿POR QUÉ NO PUEDES DEJAR DE PENSAR?",
    subtitle: "Comprende la neurociencia detrás de tu cerebro hiperactivo",
    duration: "15 min de lectura aproximada",
    bullets: [
      "La ciencia del 'hiperarousal' o estado de alerta cerebral.",
      "La diferencia crítica entre pensamiento voluntario y rumiación automática.",
      "Por qué el agotamiento físico no es suficiente para apagar un cerebro estresado."
    ],
    iconName: "Brain",
    deepDescription: "Vas a adentrarte de forma muy sencilla en los mecanismos biológicos que encienden la 'televisión mental' y el ruido constante. Entenderás exactamente por qué tu cerebro cree que debe estar analizando pendientes continuamente y cómo el sistema nervioso simpático boicotea activamente tu deseo de calma y descanso."
  },
  {
    id: 2,
    number: "MÓDULO 2",
    title: "LAS TRAMPAS QUE MANTIENEN TU MENTE ENCENDIDA",
    subtitle: "Detecta y desarma los ladrones invisibles de tu paz mental",
    duration: "20 min de lectura aproximada",
    bullets: [
      "La trampa de las pantallas: por qué el scroll infinito reprograma tu cerebro para la alerta.",
      "El bucle del 'tengo que resolver esto ahora' y cómo romperlo en el acto.",
      "Los 3 disparadores cotidianos de cortisol que inoculas a tu rutina diaria sin saberlo."
    ],
    iconName: "Flame",
    deepDescription: "Identificaremos y eliminaremos los sutiles errores que cometes en tu planeación y uso del tiempo. Desvelaremos cómo la estimulación digital masiva y las falsas tareas urgentes secuestran tus ondas cerebrales alfa impidiéndote recuperar el enfoque y la paz interior."
  },
  {
    id: 3,
    number: "MÓDULO 3",
    title: "EL MÉTODO ATC: APAGA TU CABEZA EN 15 MINUTOS",
    subtitle: "El corazón del método paso a paso para silenciar el parloteo interior",
    duration: "35 min de lectura aproximada",
    bullets: [
      "**A**ceptar e Identificar: La técnica física de vaciado del disco duro mental.",
      "**T**ransicionar el Foco: Ejercicios guiados de atención focal pasiva.",
      "**C**almar la Biología: El reset autónomo instantáneo mediante respiración síncrona."
    ],
    iconName: "Zap",
    deepDescription: "Este es el núcleo práctico del eBook. Aprenderás a dominar el método ATC, una secuencia de 3 pasos milimétricos diseñados para desactivar por completo los pensamientos intrusivos en tiempo récord. No requiere meditar durante años: son ejercicios anatómicos y cognitivos que funcionan de forma inmediata."
  },
  {
    id: 4,
    number: "MÓDULO 4",
    title: "APAGAR LA CABEZA AL FINAL DE LA JORNADA",
    subtitle: "La rampa de desaceleración definitiva para liberar la rumiación",
    duration: "18 min de lectura aproximada",
    bullets: [
      "Cómo diseñar un puente de tranquilidad de tan solo 15 minutos al finalizar tus labores.",
      "La técnica de descompresión escrita rápida para trasladar pendientes al papel.",
      "Anclajes físicos y ambientales que ordenan a tu mente apagarse de forma condicionada."
    ],
    iconName: "Moon",
    deepDescription: "Nadie puede ir a 120 km/h por la autopista de la productividad y detenerse a 0 en seco al instante. En este módulo creamos tu 'zona de frenado': un ritual sumamente minimalista, adaptable e infalible para soltar progresivamente el control y desconectar de inmediato."
  },
  {
    id: 5,
    number: "MÓDULO 5",
    title: "REDUCIR LA ANSIEDAD EN EL DÍA A DÍA",
    subtitle: "Evita que la bola de nieve del estrés se acumule",
    duration: "22 min de lectura aproximada",
    bullets: [
      "Micro-pausas somáticas de 60 segundos que puedes realizar trabajando o manejando.",
      "La dieta de info-toxicidad y configuración de límites digitales sanos durante la jornada.",
      "Cómo procesar emociones incómodas 'en caliente' antes de que se vuelvan fatiga mental y fatiga mental crónica."
    ],
    iconName: "ShieldAlert",
    deepDescription: "La saturación acumulada al final del día se gesta y alimenta a las 11:00 AM. Aprenderás un catálogo de micro-herramientas que liberan la presión residual de tu cerebro a lo largo de tu día para asegurarte de que tu cuota de estrés acumulado sea prácticamente nula."
  },
  {
    id: 6,
    number: "MÓDULO 6",
    title: "REPROGRAMA TU MENTE PARA LA CALMA",
    subtitle: "Entrena un cerebro sereno a prueba de crisis y ruidos cotidianos",
    duration: "15 min de lectura aproximada",
    bullets: [
      "Cómo eliminar el círculo vicioso de la rumiación y la tensión intelectual constante.",
      "Re-encuadre cognitivo: reescribe los relatos de catástrofe que fabrica la fatiga.",
      "El mapa semanal para el mantenimiento de un cerebro tranquilo a largo plazo."
    ],
    iconName: "Compass",
    deepDescription: "Finalmente, aprenderás a construir resiliencia mental. Descubrirás cómo quitarle la carga dramática a las jornadas difíciles, disminuyendo de forma definitiva el temor a la sobrecarga y educando a tu mente para que regrese de manera natural y confiada al sosiego."
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 1,
    name: "Mateo Ruiz",
    role: "Abogado Asociado",
    age: 34,
    avatarText: "MR",
    rating: 5,
    text: "Llevaba meses sufriendo de rumiación obsesiva y rigidez mental por el estrés de los juicios. Estaba escéptico, pero desde la primera vez que apliqué el Método ATC sentí una relajación y claridad mental absoluta en menos de 10 minutos. Poder desconectarme del trabajo de verdad y limpiar el parloteo interminable ha transformado mi productividad y mi calidad de vida por completo.",
    verified: true,
    highlightText: "¡Resultados de relajación mental en menos de 10 minutos!"
  },
  {
    id: 2,
    name: "Valentina Gómez",
    role: "Directora de Marketing",
    age: 29,
    avatarText: "VG",
    rating: 5,
    text: "Lo que más valoro es la extrema facilidad de aplicación del método ATC. No requiere horas de meditación guiada ni intentar poner la mente en blanco, cosas que siempre me habían frustrado. Son instrucciones biológicas simples de 3 pasos que cualquiera puede hacer en cualquier sitio en un instante. Mi tranquilidad mejoró un 100% desde el primer día de uso y mi nivel de estrés diario ha caído drásticamente.",
    verified: true,
    highlightText: "Extrema facilidad de aplicación y calma instantánea."
  },
  {
    id: 3,
    name: "Dr. Felipe Castro",
    role: "Médico Cardiólogo",
    age: 45,
    avatarText: "FC",
    rating: 5,
    text: "Buscaba una solución con base científica, libre de misticismo, para manejar el agotamiento cognitivo secundario a mis guardias hospitalarias. El Método ATC actúa de inmediato sobre el sistema autónomo estimulando de forma puramente mecánica el nervio vago. Su efectividad es rotunda, es facilísimo de implementar y los resultados son inmediatos. Mi bienestar diario y vitalidad general han dado un vuelco asombroso.",
    verified: true,
    highlightText: "Efectivo, científico y de acción inmediata."
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: 1,
    question: "¿Este libro es físico o digital?",
    answer: "Es un eBook 100% digital en formato PDF de altísima calidad de maquetación y compatible con dispositivos EPUB. Lo recibirás de forma instantánea en tu correo electrónico tras completar el pago para que puedas empezar a aplicarlo de inmediato."
  },
  {
    id: 2,
    question: "¿Cuánto tardaré en notar los primeros resultados?",
    answer: "Muchos lectores reportan resultados de calma inmediata desde la primera vez que aplican el Método ATC (Módulo 3). El método está diseñado para desencadenar una respuesta biológica autónoma, por lo que actúa inmediatamente sobre el sistema nervioso estresado."
  },
  {
    id: 3,
    question: "No tengo experiencia meditando o haciendo yoga, ¿me servirá?",
    answer: "Totalmente. Esto no es un libro sobre yoga ni requiere posturas complejas ni disciplinas esotéricas. Son herramientas de estimulación vagal y cognitivo-conductuales prácticas que cualquier persona puede llevar a cabo en la comodidad de su hogar."
  },
  {
    id: 4,
    question: "¿Es seguro realizar el pago?",
    answer: "Absolutamente seguro. El pago se procesa bajo protocolos de encriptación SSL certificados que resguardan el 100% de tus datos personales e información de tarjeta. Es tan seguro como comprar en Amazon o suscribirse a Netflix."
  },
  {
    id: 5,
    question: "¿Cuánto tiempo me tomará aprender el método?",
    answer: "El método está diseñado para ser directo y ultra-práctico. Se lees en unos 45 minutos y los ejercicios de calma toman tan solo de 3 a 5 minutos en realizarse. Puedes empezar a aplicarlo y notar descanso neurológico desde hoy mismo."
  }
];
