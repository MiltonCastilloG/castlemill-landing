import type { TranslationObj } from "../../features/translation";

export const curriculumFrontTranslations: TranslationObj = {
  section1Title: {
    en: "Academic Vision",
    es: "Vision Academica",
  },
  section1Description: {
    en: "A clear overview of the educational direction, purpose, and long-term outcomes.",
    es: "Una vista clara de la direccion educativa, su proposito y los resultados a largo plazo.",
  },
  section1Tag1: {
    en: "Mission",
    es: "Mision",
  },
  section1Tag2: {
    en: "Structure",
    es: "Estructura",
  },
  section1Tag3: {
    en: "Impact",
    es: "Impacto",
  },
  section2Title: {
    en: "Learning Routes",
    es: "Rutas de Aprendizaje",
  },
  section2Description: {
    en: "Multiple paths for different profiles, pacing, and levels of prior experience.",
    es: "Multiples caminos para diferentes perfiles, ritmos y niveles de experiencia previa.",
  },
  section2Tag1: {
    en: "Beginner",
    es: "Inicial",
  },
  section2Tag2: {
    en: "Intermediate",
    es: "Intermedio",
  },
  section2Tag3: {
    en: "Advanced",
    es: "Avanzado",
  },
  section3Title: {
    en: "Projects and Practice",
    es: "Proyectos y Practica",
  },
  section3Description: {
    en: "Hands-on workspaces designed for practical application and portfolio-ready results.",
    es: "Espacios de trabajo practicos para aplicar conocimientos y lograr resultados de portafolio.",
  },
  section3Tag1: {
    en: "Labs",
    es: "Laboratorios",
  },
  section3Tag2: {
    en: "Case Studies",
    es: "Casos",
  },
  section3Tag3: {
    en: "Mentorship",
    es: "Mentoria",
  },
  section4Title: {
    en: "Resources and Materials",
    es: "Recursos y Materiales",
  },
  section4Description: {
    en: "A curated collection of references, guides, templates, and support resources.",
    es: "Una coleccion curada de referencias, guias, plantillas y recursos de apoyo.",
  },
  section4Tag1: {
    en: "Guides",
    es: "Guias",
  },
  section4Tag2: {
    en: "Templates",
    es: "Plantillas",
  },
  section4Tag3: {
    en: "Documentation",
    es: "Documentacion",
  },
  section5Title: {
    en: "Progress and Evaluation",
    es: "Progreso y Evaluacion",
  },
  section5Description: {
    en: "Consistent checkpoints to review progress, reinforce competencies, and identify growth.",
    es: "Puntos de control constantes para revisar avances y reforzar competencias clave.",
  },
  section5Tag1: {
    en: "Milestones",
    es: "Hitos",
  },
  section5Tag2: {
    en: "Feedback",
    es: "Retroalimentacion",
  },
  section5Tag3: {
    en: "Rubrics",
    es: "Rubricas",
  },
  section6Title: {
    en: "Community and Collaboration",
    es: "Comunidad y Colaboracion",
  },
  section6Description: {
    en: "Space for discussions, peer interaction, and collaborative development opportunities.",
    es: "Un espacio para conversaciones, interaccion entre pares y oportunidades de creacion conjunta.",
  },
  section6Tag1: {
    en: "Network",
    es: "Red",
  },
  section6Tag2: {
    en: "Workshops",
    es: "Talleres",
  },
  section6Tag3: {
    en: "Shared Goals",
    es: "Metas Compartidas",
  },
  footerNote: {
    en: "This front is a baseline design and can be expanded with more sections, new variants, and real content.",
    es: "Este front es un diseno base y se puede ampliar con mas secciones, nuevas variantes y contenido real.",
  },
};

export type CurriculumFrontKey = keyof typeof curriculumFrontTranslations;

type SectionBlueprint = {
  titleKey: CurriculumFrontKey;
  descriptionKey: CurriculumFrontKey;
  tagKeys: [CurriculumFrontKey, CurriculumFrontKey, CurriculumFrontKey];
};

export const curriculumFrontSections: SectionBlueprint[] = [
  {
    titleKey: "section1Title",
    descriptionKey: "section1Description",
    tagKeys: ["section1Tag1", "section1Tag2", "section1Tag3"],
  },
  {
    titleKey: "section2Title",
    descriptionKey: "section2Description",
    tagKeys: ["section2Tag1", "section2Tag2", "section2Tag3"],
  },
  {
    titleKey: "section3Title",
    descriptionKey: "section3Description",
    tagKeys: ["section3Tag1", "section3Tag2", "section3Tag3"],
  },
  {
    titleKey: "section4Title",
    descriptionKey: "section4Description",
    tagKeys: ["section4Tag1", "section4Tag2", "section4Tag3"],
  },
  {
    titleKey: "section5Title",
    descriptionKey: "section5Description",
    tagKeys: ["section5Tag1", "section5Tag2", "section5Tag3"],
  },
  {
    titleKey: "section6Title",
    descriptionKey: "section6Description",
    tagKeys: ["section6Tag1", "section6Tag2", "section6Tag3"],
  },
];
