// script.js
const courses = {
  // Semestre I
  "Introducción Al Campo Ocupacional": { unlocks: ["Problemáticas Psicosociales Y Políticas Públicas"] },
  "Procesos Cognitivos Y Afectivos I": { unlocks: ["Psicología Social 1 Cognición Social"] },
  "Historización De La Psicología": { unlocks: ["Enfoques Psicológicos I", "Enfoques Psicológicos II"] },
  "Fundamentos De Filosofía": { unlocks: ["Análisis De La Realidad Y Pensamiento Crítico"] },
  "Taller De Análisis Y Comprensión De Textos En Ciencias Sociales": { unlocks: ["Análisis De La Realidad Y Pensamiento Crítico"] },
  "Taller De Habilidades Interpersonales Para El Ejercicio Profesional (I)": {},
  "Inglés Instrumental": { unlocks: ["Inglés Instrumental Para Psicología"] },
  
  // Semestre II
  "Procesos Cognitivos Y Afectivos II": {},
  "Psicología Del Ciclo Vital: Infancia Y Niñez": { unlocks: ["Psicología Del Ciclo Vital: Adolescencia Y Juventud"] },
  "Psicobiologia": { unlocks: ["Psicología De La Salud"] },
  "Diversidad Y Derechos Humanos": { unlocks: ["Problemáticas Psicosociales Y Políticas Públicas"] },
  "Gestión Del Conocimiento Y Uso De Tics": { unlocks: ["Taller De Comunicación Efectiva"] },
  "Taller De Habilidades Interpersonales Para Ejercicio Profesional (II)": { unlocks: ["Fundamentos De Medición Y Evaluación", "Intervención En Grupos Y Equipos"] },

  // Semestre IV
  "Enfoques Psicológicos II": { unlocks: ["Familias Y Contextos Socioculturales", "Psicología De La Personalidad Y Diferencias Individuales"] },
  "Psicología Social 2 Procesos Grupales": { unlocks: ["Psicología De La Salud", "Intervención En Grupos Y Equipos"] },
  "Psicología Del Ciclo Vital: Adulto Y Adulto Mayor": { unlocks: ["Psicopatología Y Psiquiatría", "Familias Y Contextos Socioculturales"] },
  "Introducción A La Investigación En Ciencias Sociales": { unlocks: ["Diseños y Análisis en Investigación Metodológica Cuantitativas", "Diseños y Análisis en Investigación Metodológica Cualitativas"] },
  "Problemáticas Psicosociales Y Políticas Públicas": { unlocks: ["Ética Profesional"] },
  "Análisis De La Realidad Y Pensamiento Crítico": { unlocks: ["Psicología Crítica"] },
  "Practica Inicial": {},

  // Semestre V
  "Psicología De La Salud": {},
  "Psicopatología Y Psiquiatría": { unlocks: ["Evaluación Psicológica"] },
  "Fundamentos De Medición Y Evaluación": { unlocks: ["Evaluación Psicológica"] },
  "Familias Y Contextos Socioculturales": { unlocks: ["Introducción A La Psicología Educacional"] },
  "Psicología De La Personalidad Y Diferencias Individuales": { unlocks: ["Fundamentos En Psicología Clínica Y Psicoterapia"] },
  "Ética Profesional": { unlocks: ["Taller De Desarrollo Personal Y Autogestión Del Aprendizaje: Ejercicio Profesional"] },

  // Semestre VI
  "Intervención En Grupos Y Equipos": { unlocks: ["Introducción A La Psicología Laboral- Organizacional"] },
  "Evaluación Psicológica": { unlocks: ["Fundamentos En Psicología Clínica Y Psicoterapia"] },
  "Diseño Y Evaluación De Intervenciones Psicológicas": {},
  "Psicología Crítica": { unlocks: ["Introducción A La Psicología Comunitaria"] },
  "Diseños y Análisis en Investigación Metodológica Cuantitativas": { unlocks: ["E.F.P: Electivo Profundización en Investigación"] },
  "Seminarios De Profundización Temática": { unlocks: ["Trabajo Final de Grado Sistematización de Experiencias"] },

  // Semestre VII
  "Introducción A La Psicología Laboral- Organizacional": { unlocks: ["Práctica Formativa: Psicología Laboral- Organizacional"] },
  "Introducción A La Psicología Comunitaria": { unlocks: ["Práctica Formativa: Psicología Comunitaria"] },
  "Introducción A La Psicología Educacional": { unlocks: ["Práctica Formativa: Psicología Educacional"] },
  "Fundamentos En Psicología Clínica Y Psicoterapia": { unlocks: ["Práctica Formativa: Psicología Clínica, Psicoterapia y Psicología de la Salud"] },
  "Diseños y Análisis en Investigación Metodológica Cualitativas": { unlocks: ["E.F.P: Electivo Profundización en Investigación"] },
  "Taller De Desarrollo Personal Y Autogestión Del Aprendizaje: Ejercicio Profesional": { unlocks: ["Socialización Laboral"] },

  // Semestre VIII
  "Práctica Formativa: Psicología Laboral- Organizacional": {},
  "Práctica Formativa: Psicología Comunitaria": {},
  "E.F.P: Electivo Profundización en Investigación": { unlocks: ["Seminario de Investigación I"] },
  "Socialización Laboral": {},

  // Semestre IX
  "Práctica Formativa: Psicología Educacional": {},
  "Práctica Formativa: Psicología Clínica, Psicoterapia y Psicología de la Salud": {},
  "Seminario de Investigación I": { unlocks: ["Seminario de Investigación II"] },

  // Semestre X
  "Actividad de Titulación: Práctica Profesional": {},
  "Trabajo Final de Grado Sistematización de Experiencias": {},
  "Seminario de Investigación II": {}
};

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("grid");
  const state = {};

  function createCell(name) {
    const div = document.createElement("div");
    div.className = "cell blocked";
    div.textContent = name.replace(/\s\(I\)|\s\(II\)/g, "");
    div.onclick = () => toggleCourse(name);
    grid.appendChild(div);
    state[name] = { element: div, approved: false };
  }

  function toggleCourse(name) {
    const course = state[name];
    if (!course || course.element.classList.contains("blocked")) return;

    course.approved = !course.approved;
    course.element.classList.toggle("approved", course.approved);
    course.element.classList.toggle("not-approved", !course.approved);

    updateLocks();
  }

  function updateLocks() {
    for (const key in courses) {
      const prerequisites = Object.keys(courses).filter(k => courses[k].unlocks?.includes(key));
      const unlocked = prerequisites.every(p => state[p]?.approved);
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
    for (const name in courses) {
      createCell(name);
    }
    for (const name in courses) {
      const hasPrerequisites = Object.keys(courses).some(k => courses[k].unlocks?.includes(name));
      if (!hasPrerequisites) {
        state[name].element.classList.remove("blocked");
        state[name].element.classList.add("not-approved");
      }
    }
  }

  initializeGrid();
});
