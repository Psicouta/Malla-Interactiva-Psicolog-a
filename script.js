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
}
