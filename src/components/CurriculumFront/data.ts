import type { Translations } from "../../features/translation";

export type CurriculumFrontKey =
  | "heroTitle"
  | "heroSubtitle"
  | "section1Title"
  | "section1Description"
  | "section1Tag1"
  | "section1Tag2"
  | "section1Tag3"
  | "section2Title"
  | "section2Description"
  | "section2Tag1"
  | "section2Tag2"
  | "section2Tag3"
  | "section3Title"
  | "section3Description"
  | "section3Tag1"
  | "section3Tag2"
  | "section3Tag3"
  | "section4Title"
  | "section4Description"
  | "section4Tag1"
  | "section4Tag2"
  | "section4Tag3"
  | "section5Title"
  | "section5Description"
  | "section5Tag1"
  | "section5Tag2"
  | "section5Tag3"
  | "section6Title"
  | "section6Description"
  | "section6Tag1"
  | "section6Tag2"
  | "section6Tag3"
  | "footerNote";

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

export const curriculumFrontTranslations: Translations<CurriculumFrontKey> = {
  en: {
    heroTitle: "castlemill",
    heroSubtitle: "Milton Castillo Hub",
    section1Title: "Academic Vision",
    section1Description:
      "A clear overview of the educational direction, purpose, and long-term outcomes.",
    section1Tag1: "Mission",
    section1Tag2: "Structure",
    section1Tag3: "Impact",
    section2Title: "Learning Routes",
    section2Description:
      "Multiple paths for different profiles, pacing, and levels of prior experience.",
    section2Tag1: "Beginner",
    section2Tag2: "Intermediate",
    section2Tag3: "Advanced",
    section3Title: "Projects and Practice",
    section3Description:
      "Hands-on workspaces designed for practical application and portfolio-ready results.",
    section3Tag1: "Labs",
    section3Tag2: "Case Studies",
    section3Tag3: "Mentorship",
    section4Title: "Resources and Materials",
    section4Description:
      "A curated collection of references, guides, templates, and support resources.",
    section4Tag1: "Guides",
    section4Tag2: "Templates",
    section4Tag3: "Documentation",
    section5Title: "Progress and Evaluation",
    section5Description:
      "Consistent checkpoints to review progress, reinforce competencies, and identify growth.",
    section5Tag1: "Milestones",
    section5Tag2: "Feedback",
    section5Tag3: "Rubrics",
    section6Title: "Community and Collaboration",
    section6Description:
      "Space for discussions, peer interaction, and collaborative development opportunities.",
    section6Tag1: "Network",
    section6Tag2: "Workshops",
    section6Tag3: "Shared Goals",
    footerNote:
      "This front is a baseline design and can be expanded with more sections, new variants, and real content.",
  },
  es: {
    heroTitle: "castlemill",
    heroSubtitle: "Milton Castillo Hub",
    section1Title: "Vision Academica",
    section1Description:
      "Una vista clara de la direccion educativa, su proposito y los resultados a largo plazo.",
    section1Tag1: "Mision",
    section1Tag2: "Estructura",
    section1Tag3: "Impacto",
    section2Title: "Rutas de Aprendizaje",
    section2Description:
      "Multiples caminos para diferentes perfiles, ritmos y niveles de experiencia previa.",
    section2Tag1: "Inicial",
    section2Tag2: "Intermedio",
    section2Tag3: "Avanzado",
    section3Title: "Proyectos y Practica",
    section3Description:
      "Espacios de trabajo practicos para aplicar conocimientos y lograr resultados de portafolio.",
    section3Tag1: "Laboratorios",
    section3Tag2: "Casos",
    section3Tag3: "Mentoria",
    section4Title: "Recursos y Materiales",
    section4Description:
      "Una coleccion curada de referencias, guias, plantillas y recursos de apoyo.",
    section4Tag1: "Guias",
    section4Tag2: "Plantillas",
    section4Tag3: "Documentacion",
    section5Title: "Progreso y Evaluacion",
    section5Description:
      "Puntos de control constantes para revisar avances y reforzar competencias clave.",
    section5Tag1: "Hitos",
    section5Tag2: "Retroalimentacion",
    section5Tag3: "Rubricas",
    section6Title: "Comunidad y Colaboracion",
    section6Description:
      "Un espacio para conversaciones, interaccion entre pares y oportunidades de creacion conjunta.",
    section6Tag1: "Red",
    section6Tag2: "Talleres",
    section6Tag3: "Metas Compartidas",
    footerNote:
      "Este front es un diseno base y se puede ampliar con mas secciones, nuevas variantes y contenido real.",
  },
};
