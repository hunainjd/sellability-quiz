// src/data/questions.js

export const landingContent = {
  headline: "How Sellable Is Your Business?",
  subheading:
    "Discover how attractive your business is to potential buyers based on the operational factors that influence valuation, buyer interest, and a successful sale.",
  description:
    "When purchasing a business, buyers look for a business that is organized, scalable, and capable of operating without constant owner involvement. This assessment evaluates the key operational drivers that influence how market-ready your business is and identifies the areas that can increase its value before you sell.",
};

export const maxScore = 150;

export const questions = [
  {
    id: 1,
    theme: "Owner Independence",
    prompt: "If you stepped away from the business for 30 days...",
    choices: [
      { text: "Operations would stop", score: 0 },
      { text: "Major problems would occur", score: 5 },
      { text: "The business would continue with occasional calls", score: 8 },
      { text: "The business would operate normally", score: 10 },
    ],
  },
  {
    id: 2,
    theme: "Owner Independence",
    prompt: "Who makes most operational decisions?",
    choices: [
      { text: "Me", score: 0 },
      { text: "Mostly me", score: 5 },
      { text: "Managers with my approval", score: 8 },
      { text: "Managers independently", score: 10 },
    ],
  },
  {
    id: 3,
    theme: "Owner Independence",
    prompt: "If your top employee resigned tomorrow...",
    choices: [
      { text: "Operations would seriously suffer", score: 0 },
      { text: "There would be noticeable disruption", score: 5 },
      { text: "We could manage", score: 8 },
      { text: "Someone else could immediately step in", score: 10 },
    ],
  },
  {
    id: 4,
    theme: "Systems & Processes",
    prompt: "Are your core operating procedures documented?",
    choices: [
      { text: "None", score: 0 },
      { text: "Some", score: 5 },
      { text: "Most", score: 8 },
      { text: "All critical processes", score: 10 },
    ],
  },
  {
    id: 5,
    theme: "Systems & Processes",
    prompt: "Could a new employee learn their role without relying on one specific person?",
    choices: [
      { text: "No", score: 0 },
      { text: "Somewhat", score: 5 },
      { text: "Mostly", score: 8 },
      { text: "Yes", score: 10 },
    ],
  },
  {
    id: 6,
    theme: "Systems & Processes",
    prompt: "How standardized are your daily operations?",
    choices: [
      { text: "Everyone has their own way", score: 0 },
      { text: "Some consistency", score: 5 },
      { text: "Mostly standardized", score: 8 },
      { text: "Fully standardized with regular updates", score: 10 },
    ],
  },
  {
    id: 7,
    theme: "Financial Control",
    prompt: "Can you explain why profits changed last quarter?",
    choices: [
      { text: "No", score: 0 },
      { text: "Generally", score: 5 },
      { text: "Mostly", score: 8 },
      { text: "Yes, with supporting reports", score: 10 },
    ],
  },
  {
    id: 8,
    theme: "Financial Control",
    prompt: "How quickly can you produce accurate financial and operational reports?",
    choices: [
      { text: "Several days", score: 0 },
      { text: "One day", score: 5 },
      { text: "A few hours", score: 8 },
      { text: "Within minutes", score: 10 },
    ],
  },
  {
    id: 9,
    theme: "Financial Control",
    prompt: "Do you regularly track KPIs that drive the business?",
    choices: [
      { text: "Rarely", score: 0 },
      { text: "Occasionally", score: 5 },
      { text: "Monthly", score: 8 },
      { text: "Continuously with dashboards", score: 10 },
    ],
  },
  {
    id: 10,
    theme: "Leadership",
    prompt: "Are roles and responsibilities clearly defined?",
    choices: [
      { text: "No", score: 0 },
      { text: "Somewhat", score: 5 },
      { text: "Mostly", score: 8 },
      { text: "Completely", score: 10 },
    ],
  },
  {
    id: 11,
    theme: "Leadership",
    prompt: "When mistakes happen...",
    choices: [
      { text: "People blame each other", score: 0 },
      { text: "Ownership is inconsistent", score: 5 },
      { text: "Usually someone owns the issue", score: 8 },
      { text: "We have a formal improvement process", score: 10 },
    ],
  },
  {
    id: 12,
    theme: "Leadership",
    prompt: "When an important decision needs to be made...",
    choices: [
      { text: "It depends entirely on the owner's judgment", score: 0 },
      { text: "We discuss it as a team but there is no standard approach", score: 5 },
      { text: "We review data and follow established guidelines", score: 8 },
      { text: "We use documented decision frameworks supported by reliable data", score: 10 },
    ],
  },
  {
    id: 13,
    theme: "Customer Stability",
    prompt: "If your largest customer left tomorrow, what would happen?",
    choices: [
      { text: "It would seriously threaten the business", score: 0 },
      { text: "It would have a major financial impact", score: 5 },
      { text: "It would be difficult but manageable", score: 8 },
      { text: "The business would continue with minimal disruption", score: 10 },
    ],
  },
  {
    id: 14,
    theme: "Customer Stability",
    prompt: "Could another employee manage your biggest customer relationships?",
    choices: [
      { text: "No", score: 0 },
      { text: "Only partially", score: 5 },
      { text: "Mostly", score: 8 },
      { text: "Easily", score: 10 },
    ],
  },
  {
    id: 15,
    theme: "Business Direction",
    prompt:
      "Does your management team and employees understand where the business is headed over the next 3–5 years?",
    choices: [
      { text: "No", score: 0 },
      { text: "Somewhat", score: 5 },
      { text: "Mostly", score: 8 },
      { text: "Completely", score: 10 },
    ],
  },
];

// Not scored — shown after the 15 graded questions, purely informational.
export const bonusQuestion = {
  id: "bonus",
  theme: "Ending Impression",
  prompt: "If you sold your business tomorrow, what would the new owner struggle with first?",
  choices: [
    { text: "Understanding how the business operates" },
    { text: "Making day-to-day decisions" },
    { text: "Managing employees" },
    { text: "Maintaining customer relationships" },
    { text: "Understanding our financial performance" },
    { text: "Something else" },
  ],
};

// Raw score bounds are out of 150 (15 questions x max 10 pts). Not normalized.
export const resultTiers = [
  {
    label: "High Owner Dependence",
    min: 0,
    max: 38,
    text: "Your business relies heavily on the owner. Buyers would likely view the business as high risk, reducing interest and valuation.",
  },
  {
    label: "Building a Foundation",
    min: 39,
    max: 75,
    text: "Your business has strengths but still depends on key people and undocumented knowledge. Improving systems and delegation could significantly increase its attractiveness.",
  },
  {
    label: "Market Ready",
    min: 76,
    max: 112,
    text: "Many of the systems buyers expect are already in place. Addressing a handful of operational gaps could increase buyer confidence and reduce transition risk.",
  },
  {
    label: "Highly Sellable",
    min: 113,
    max: 150,
    text: "Your business demonstrates many of the qualities buyers look for: documented systems, operational independence, and leadership beyond the owner. You're well positioned for an exit, though a formal assessment may uncover additional opportunities to maximize value.",
  },
];

// Helper: given a raw score, return the matching tier object.
export function getResultTier(rawScore) {
  return (
    resultTiers.find((tier) => rawScore >= tier.min && rawScore <= tier.max) ??
    resultTiers[0]
  );
}