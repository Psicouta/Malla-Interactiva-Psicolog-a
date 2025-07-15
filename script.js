const semesters = {
  "Semestre I": [
    "Introducción Al Campo Ocupacional",
    "Procesos Cognitivos Y Afectivos I",
    "Historización De La Psicología",
    "Fundamentos De Filosofía",
    "Taller De Análisis Y Comprensión De Textos En Ciencias Sociales",
    "Taller De Habilidades Interpersonales Para El Ejercicio Profesional (I)",
    "Inglés Instrumental"
  ],
  "Semestre II": [
    "Procesos Cognitivos Y Afectivos II",
    "Psicología Del Ciclo Vital: Infancia Y Niñez",
    "Psicobiologia",
    "Diversidad Y Derechos Humanos",
    "Gestión Del Conocimiento Y Uso De Tics",
    "Taller De Habilidades Interpersonales Para Ejercicio Profesional (II)"
  ],
  "Semestre III": [
    "Enfoques Psicológicos I",
    "Psicología Social 1 Cognición Social",
    "Psicología Del Ciclo Vital: Adolescencia Y Juventud",
    "Epistemología De Las Ciencias Sociales",
    "Alfabetización Estadística",
    "Taller De Comunicación Efectiva",
    "Inglés Instrumental Para Psicología"
  ],
  "Semestre IV": [
    "Enfoques Psicológicos II",
    "Psicología Social 2 Procesos Grupales",
    "Psicología Del Ciclo Vital: Adulto Y Adulto Mayor",
    "Introducción A La Investigación En Ciencias Sociales",
    "Problemáticas Psicosociales Y Políticas Públicas",
    "Análisis De La Realidad Y Pensamiento Crítico",
    "Practica Inicial"
  ],
  "Semestre V": [
    "Psicología De La Salud",
    "Psicopatología Y Psiquiatría",
    "Fundamentos De Medición Y Evaluación",
    "Familias Y Contextos Socioculturales",
    "Psicología De La Personalidad Y Diferencias Individuales",
    "Ética Profesional"
  ],
  "Semestre VI": [
    "Intervención En Grupos Y Equipos",
    "Evaluación Psicológica",
    "Diseño Y Evaluación De Intervenciones Psicológicas",
    "Psicología Crítica",
    "Diseños y Análisis en Investigación Metodológica Cuantitativas",
    "Seminarios De Profundización Temática"
  ],
  "Semestre VII": [
    "Introducción A La Psicología Laboral- Organizacional",
    "Introducción A La Psicología Comunitaria",
    "Introducción A La Psicología Educacional",
    "Fundamentos En Psicología Clínica Y Psicoterapia",
    "Diseños y Análisis en Investigación Metodológica Cualitativas",
    "Taller De Desarrollo Personal Y Autogestión Del Aprendizaje: Ejercicio Profesional"
  ],
  "Semestre VIII": [
    "Práctica Formativa: Psicología Laboral- Organizacional",
    "Práctica Formativa: Psicología Comunitaria",
    "E.F.P: Electivo Profundización en Investigación",
    "Socialización Labor"
  ],
  "Semestre IX": [
    "Práctica Formativa: Psicología Educacional",
    "Práctica Formativa: Psicología Clínica, Psicoterapia y Psicología de la Salud",
    "Seminario de Investigación I"
  ],
  "Semestre X": [
    "Actividad de Titulación: Práctica Profesional",
    "Trabajo Final de Grado Sistematización de Experiencias",
    "Seminario de Investigación II"
  ]
};

// Prerrequisitos: qué ramos desbloquean otros
const courses = {
  "Introducción Al Campo Ocupacional": { unlocks: ["Problemáticas Psicosociales Y Políticas Públicas"] },
  "Procesos Cognitivos Y Afectivos I": { unlocks: ["Psicología Social 1 Cognición Social"] },
  "Historización De La Psicología": { unlocks: ["Enfoques Psicológicos I", "Enfoques Psicológicos II"] },
  "Fundamentos De Filosofía": { unlocks: ["Análisis De La Realidad Y Pensamiento Crítico"] },
  "Taller De Análisis Y Comprensión De Textos En Ciencias Sociales": { unlocks: ["Análisis De La Realidad Y Pensamiento Crítico"] },
  "Inglés Instrumental": { unlocks: ["Inglés Instrumental Para Psicología"] },

  "Psicología Del Ciclo Vital: Infancia Y Niñez": { unlocks: ["Psicología Del Ciclo Vital: Adolescencia Y Juventud"] },
  "Psicobiologia": { unlocks: ["Psicología De La Salud"] },
  "Diversidad Y Derechos Humanos": { unlocks: ["Problemáticas Psicosociales Y Políticas Públicas"] },
  "Gestión Del Conocimiento Y Uso De Tics": { unlocks: ["Taller De Comunicación Efectiva"] },
  "Taller De Habilidades Interpersonales Para Ejercicio Profesional (II)": { unlocks: ["Fundamentos De Medición Y Evaluación", "Intervención En Grupos Y Equipos"] },

  "Enfoques Psicológicos I": { unlocks: ["Psicología De La Personalidad Y Diferencias Individuales"] },
  "Psicología Social 1 Cognición Social": { unlocks: ["Psicología Social 2 Procesos Grupales"] },

  "Enfoques Psicológicos II": { unlocks: ["Familias Y Contextos Socioculturales", "Psicología De La Personalidad Y Diferencias Individuales"] },
  "Psicología Social 2 Procesos Grupales": { unlocks: ["Psicología De La Salud", "Intervención En Grupos Y Equipos"] },
  "Psicología Del Ciclo Vital: Adulto Y Adulto Mayor": { unlocks: ["Psicopatología Y Psiquiatría", "Familias Y Contextos Socioculturales"] },
  "Introducción A La Investigación En Ciencias Sociales": { unlocks: ["Diseños y Análisis en Investigación Metodológica Cuantitativas", "Diseños y Análisis en Investigación Metodológica Cualitativas"] },

  "Problemáticas Psicosociales Y Políticas Públicas": { unlocks: ["Ética Profesional"] },
  "Análisis De La Realidad Y Pensamiento Crítico": { unlocks: ["Psicología Crítica"] },

  "Practica Inicial": { unlocks: [] }, // Para desbloquearse se necesita aprobar todo semestre 1-3, manejaremos en updateLocks

  "Psicopatología Y Psiquiatría": { unlocks: ["Evaluación Psicológica"] },
  "Fundamentos De Medición Y Evaluación": { unlocks: ["Evaluación Psicológica"] },

  "Familias Y Contextos Socioculturales": { unlocks: ["Introducción A La Psicología Educacional"] },
  "Psicología De La Personalidad Y Diferencias Individuales": { unlocks: ["Fundamentos En Psicología Clínica Y Psicoterapia"] },

  "Ética Profesional": { unlocks: ["Taller De Desarrollo Personal Y Autogestión Del Aprendizaje: Ejercicio Profesional"] },

  "Intervención En Grupos Y Equipos": { unlocks: ["Introducción A La Psicología Laboral- Organizacional"] },
  "Evaluación Psicológica": { unlocks: ["Fundamentos En Psicología Clínica Y Psicoterapia"] },

  "Psicología Crítica": { unlocks: ["Introducción A La Psicología Comunitaria"] },

  "Diseños y Análisis en Investigación Metodológica Cuantitativas": { unlocks: ["E.F.P: Electivo Profundización en Investigación"] },
  "Seminarios De Profundización Temática": { unlocks: ["Trabajo Final de Grado Sistematización de Experiencias"] },

  "Diseños y Análisis en Investigación Metodológica Cualitativas": { unlocks: ["E.F.P: Electivo Profundización en Investigación"] },

  "Introducción A La Psicología Laboral- Organizacional": { unlocks: ["Práctica Formativa: Psicología Laboral- Organizacional"] },
  "Introducción A La Psicología Comunitaria": { unlocks: ["Práctica Formativa: Psicología Comunitaria"] },
  "Introducción A La Psicología Educacional": { unlocks: ["Práctica Formativa: Psicología Educacional"] },
  "Fundamentos En Psicología Clínica Y Psicoterapia": { unlocks: ["Práctica Formativa: Psicología Clínica, Psicoterapia y Psicología de la Salud"] },
  "Taller De Desarrollo Personal Y Autogestión Del Aprendizaje: Ejercicio Profesional": { unlocks: ["Socialización Labor"] },

  // No pongo prerrequisitos para prácticas y titulación por simplicidad
};

const state = {};

function toggleCourse(name) {
  const course = state[name];
  if (!course || course.element.classList.contains("blocked")) return;

  course.approved = !course.approved;
  course.element.classList.toggle("approved", course.approved);
  course.element.classList.toggle("not-approved", !course.approved);

  updateLocks();
}

function updateLocks() {
  // Validar desbloqueo de Practica Inicial (semestres I a III)
  const sem1to3 = [
    ...semesters["Semestre I"],
    ...semesters["Semestre II"],
    ...semesters["Semestre III"],
  ];

  const allApprovedSem1to3 = sem1to3.every(ramo => state[ramo]?.approved);

  // Recorremos todos los cursos para actualizar bloqueo
  for (const key in courses) {
    const prerequisites = Object.keys(courses).filter(k => courses[k].unlocks?.includes(key));
    let unlocked = prerequisites.every(p => state[p]?.approved);

    // Agregar excepción Practica Inicial
    if (key === "Practica Inicial") {
      unlocked = allApprovedSem1to3;
    }

    if (state[key]) {
      if (unlocked && !state[key].approved) {
        state[key].element.classList.remove("blocked");
        state[key].element.classList.add("not-approved");
      } else if (!state[key].approved) {
        state[key].element.classList.add("blocked");
        state[key].element.classList.remove("not-approved");
      }
    }
  }
}

function initializeGrid() {
  const container = document.getElementById("semesters");

  for (const [semestre, cursos] of Object.entries(semesters)) {
    const section = document.createElement("section");
    const title = document.createElement("h2");
    const grid = document.createElement("div");

    title.textContent = semestre;
    grid.className = "grid";

    cursos.forEach(nombre => {
      const div = document.createElement("div");
      div.classList.add("cell", "blocked");
      div.textContent = nombre.replace(/\s\(I\)|\s\(II\)/g, "");
      div.onclick = () => toggleCourse(nombre);
      grid.appendChild(div);
      state[nombre] = { element: div, approved: false };
    });

    section.appendChild(title);
    section.appendChild(grid);
    container.appendChild(section);
  }

  // Desbloquear ramos sin prerrequisitos
  for (const name in courses) {
    const hasPrereq = Object.keys(courses).some(k => courses[k].unlocks?.includes(name));
    if (!hasPrereq && state[name]) {
      state[name].element.classList.remove("blocked");
      state[name].element.classList.add("not-approved");
    }
  }

  updateLocks();
}

initializeGrid();
