import {
  HERO_DATA,
  ABOUT_DATA,
  SKILLS_DATA,
  EXPERIENCE_DATA,
  EDUCATION_CERTS_DATA,
  PROJECTS_DATA,
  ADDITIONAL_INFO
} from '../data';

const STOP_WORDS = new Set([
  'a',
  'an',
  'and',
  'are',
  'as',
  'at',
  'be',
  'by',
  'for',
  'from',
  'has',
  'he',
  'his',
  'i',
  'in',
  'is',
  'it',
  'me',
  'my',
  'of',
  'on',
  'or',
  'satyam',
  'that',
  'the',
  'to',
  'what',
  'with',
  'you'
]);

const stripFrontendOnlyFields = (value) => {
  if (Array.isArray(value)) {
    return value.map(stripFrontendOnlyFields);
  }

  if (value && typeof value === 'object') {
    return Object.entries(value).reduce((clean, [key, item]) => {
      if (['icon', 'color', 'image'].includes(key)) return clean;
      clean[key] = stripFrontendOnlyFields(item);
      return clean;
    }, {});
  }

  return value;
};

const valueToText = (value) => {
  if (Array.isArray(value)) {
    return value.map(valueToText).join(' ');
  }

  if (value && typeof value === 'object') {
    return Object.entries(value)
      .map(([key, item]) => `${key}: ${valueToText(item)}`)
      .join(' ');
  }

  return value ? String(value) : '';
};

const tokenize = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9+#.]+/g, ' ')
    .split(/\s+/)
    .filter((token) => token.length > 1 && !STOP_WORDS.has(token));

const vectorize = (text) => {
  const vector = new Map();

  tokenize(text).forEach((token) => {
    vector.set(token, (vector.get(token) || 0) + 1);
  });

  return vector;
};

const cosineSimilarity = (left, right) => {
  let dotProduct = 0;
  let leftMagnitude = 0;
  let rightMagnitude = 0;

  left.forEach((count, token) => {
    leftMagnitude += count * count;
    dotProduct += count * (right.get(token) || 0);
  });

  right.forEach((count) => {
    rightMagnitude += count * count;
  });

  if (!leftMagnitude || !rightMagnitude) return 0;
  return dotProduct / (Math.sqrt(leftMagnitude) * Math.sqrt(rightMagnitude));
};

const createDocument = (id, title, section, content) => {
  const cleanedContent = stripFrontendOnlyFields(content);
  const text = `${title}. ${valueToText(cleanedContent)}`;

  return {
    id,
    title,
    section,
    text,
    metadata: cleanedContent
  };
};

const createPortfolioDocuments = () => [
  createDocument('profile', 'Portfolio owner profile', 'profile', HERO_DATA),
  createDocument('about', 'About Satyam', 'about', ABOUT_DATA),
  ...SKILLS_DATA.map((skillGroup) =>
    createDocument(`skill-${skillGroup.category}`, `${skillGroup.category} skills`, 'skills', skillGroup)
  ),
  ...EXPERIENCE_DATA.map((experience) =>
    createDocument(
      `experience-${experience.id}`,
      `${experience.title} at ${experience.company}`,
      'experience',
      experience
    )
  ),
  ...EDUCATION_CERTS_DATA.education.map((education) =>
    createDocument(`education-${education.id}`, education.title, 'education', education)
  ),
  ...EDUCATION_CERTS_DATA.certifications.map((certification) =>
    createDocument(`certification-${certification.id}`, certification.title, 'certifications', certification)
  ),
  ...PROJECTS_DATA.map((project) => createDocument(`project-${project.id}`, project.name, 'projects', project)),
  ...ADDITIONAL_INFO.map((info) => createDocument(`additional-${info.title}`, info.title, 'additional', info))
];

const PORTFOLIO_VECTOR_DB = createPortfolioDocuments().map((document) => ({
  ...document,
  vector: vectorize(document.text)
}));

export const retrieveRelevantPortfolioContext = (question, limit = 5) => {
  const queryVector = vectorize(question);

  const matches = PORTFOLIO_VECTOR_DB.map((document) => ({
    id: document.id,
    title: document.title,
    section: document.section,
    score: cosineSimilarity(queryVector, document.vector),
    text: document.text
  }))
    .sort((left, right) => right.score - left.score)
    .slice(0, limit);

  const usefulMatches = matches.some((match) => match.score > 0)
    ? matches.filter((match) => match.score > 0)
    : PORTFOLIO_VECTOR_DB.slice(0, 3).map((document) => ({
        id: document.id,
        title: document.title,
        section: document.section,
        score: 0,
        text: document.text
      }));

  return {
    matches: usefulMatches.map(({ id, title, section, score }) => ({
      id,
      title,
      section,
      score: Number(score.toFixed(3))
    })),
    contextText: usefulMatches
      .map((match) => `[${match.section}] ${match.title}\n${match.text}`)
      .join('\n\n---\n\n')
  };
};
