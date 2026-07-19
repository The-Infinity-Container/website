import type { Question, QuizScores, ResultType, ResultContent } from "./types";

export const TOTAL_QUESTIONS = 7;

export const questions: Question[] = [
  {
    id: 0,
    text: "What brings you to The Infinity Container?",
    subtext: "Select all that apply",
    multiSelect: true,
    options: [
      { text: "I'm navigating a psychedelic experience — before, during, or after", score: "p" },
      { text: "I'm going through a major life transition and need support", score: "p" },
      { text: "I support others through transformation and need my own container", score: "pr" },
      { text: "I'm curious about integration and want to explore", score: "f" },
    ],
  },
  {
    id: 1,
    text: "How do you relate to your own integration practice right now?",
    multiSelect: false,
    options: [
      { text: "I'm not sure what integration means — I'm here to find out", score: "f" },
      { text: "I know what it is but I'm just getting started with a real practice", score: "p" },
      { text: "I have some practices but I'm looking for more structure and support", score: "p" },
      { text: "I have an active practice and I want to deepen it in community", score: "p" },
      { text: "I integrate for myself and also hold space for others doing the same", score: "pr" },
    ],
  },
  {
    id: 2,
    text: "What does your relationship to psychedelics or expanded states look like?",
    multiSelect: false,
    options: [
      { text: "This isn't part of my path — I'm here to integrate life experiences", score: "p" },
      { text: "I'm curious but haven't had an experience yet", score: "f" },
      { text: "I've had experiences and I'm working with what came up", score: "p" },
      { text: "I work with medicines regularly as part of my path", score: "p" },
      { text: "I support clients or community members in this work", score: "pr" },
    ],
  },
  {
    id: 3,
    text: "How do you feel about being in a community practice space?",
    multiSelect: false,
    options: [
      { text: "Honestly, I prefer working alone — community isn't really my thing", score: "p" },
      { text: "I'm not sure — I've never done anything like this", score: "f" },
      { text: "I'm open to it and a little nervous", score: "p" },
      { text: "I've been in groups before and I know I benefit from them", score: "p" },
      { text: "Community practice is central to how I work and grow", score: "pr" },
    ],
  },
  {
    id: 4,
    text: "Which of these feels most true about where you are right now?",
    multiSelect: false,
    options: [
      { text: "I need to feel things out before I commit to anything", score: "f" },
      { text: "I'm ready for consistent support and a framework to work within", score: "p" },
      { text: "I want tools I can use in my own life and bring to others", score: "pr" },
      { text: "I want to be part of something that holds me while I hold others", score: "pr" },
    ],
  },
  {
    id: 5,
    text: "What matters most to you in a community container?",
    multiSelect: false,
    options: [
      { text: "Low pressure — I want to show up when I can", score: "f" },
      { text: "Consistency — I want something to count on each week", score: "p" },
      { text: "Depth — I want real practice, not just talking about practice", score: "p" },
      { text: "Professional relevance — I want it to inform my work with clients", score: "pr" },
    ],
  },
  {
    id: 6,
    text: "When you imagine the right fit, what do you see?",
    multiSelect: false,
    options: [
      { text: "A free monthly call to drop into when it's right", score: "f" },
      { text: "A weekly practice community I can grow with over time", score: "p" },
      { text: "A practitioner-level space that holds both my personal and professional development", score: "pr" },
      { text: "I'm honestly not sure yet — I need to feel it out", score: "f" },
    ],
  },
];

export function calculateResult(scores: QuizScores): ResultType {
  let f = 0;
  let p = 0;
  let pr = 0;

  Object.entries(scores).forEach(([questionIndex, answer]) => {
    const options = questions[Number(questionIndex)].options;
    if (Array.isArray(answer)) {
      answer.forEach((optionIndex) => {
        const v = options[optionIndex].score;
        if (v === "f") f += 0.5;
        else if (v === "p") p += 0.5;
        else if (v === "pr") pr += 0.5;
      });
    } else {
      const v = options[answer].score;
      if (v === "f") f++;
      else if (v === "p") p++;
      else if (v === "pr") pr++;
    }
  });

  if (pr > p + 1) return "practitioner";
  if (p >= 3 || (p >= 2 && f < 3)) return "practice";
  return "free";
}

// CTA hrefs are Mighty Network onboarding URLs, one plan per membership tier.
export const results: Record<ResultType, ResultContent> = {
  free: {
    eyebrow: "Your result",
    badgeLabel: "Free Membership",
    badgeClassName: "bg-tic-grey text-black",
    heading: "Start with the Community Call.",
    body: "You're in an exploratory place — and that's exactly right. The free membership gives you monthly access to our Community Call: a 90-minute live session with teaching, embodied practice, and real community. No commitment. No pressure. Just a real taste of the work.",
    ctaLabel: "Join the Free Membership →",
    ctaHref: "https://the-infinity-container.mn.co/users/onboarding/plans/1484020",
    otherOptionsHeading: "Other paths worth knowing about",
    otherCards: [
      {
        title: "Practice Membership",
        body: "Weekly Friday practice sessions and monthly integration themes. For when you're ready for consistency.",
        href: "https://the-infinity-container.mn.co/users/onboarding/plans/1898747",
      },
      {
        title: "Practitioner Membership",
        body: "Everything in Practice, plus professional tools and a peer community for the work you hold.",
        href: "https://the-infinity-container.mn.co/users/onboarding/plans/1483936",
      },
    ],
  },
  practice: {
    eyebrow: "Your result",
    badgeLabel: "Practice Membership",
    badgeClassName: "bg-tic-salmon text-black",
    heading: "You're ready for a weekly practice.",
    body: "You're not just curious about integration — you're ready to do the work consistently. The Practice Membership gives you weekly Friday sessions, monthly integration themes, and a community moving through the Solar-Lunar Framework together. The framework holds the rhythm so you don't have to.",
    ctaLabel: "Explore the Practice Membership →",
    ctaHref: "https://the-infinity-container.mn.co/users/onboarding/plans/1898747",
    otherOptionsHeading: "Also worth considering",
    otherCards: [
      {
        title: "Free Membership",
        body: "Just the monthly Community Call. A good starting point if you want to feel the container before committing.",
        href: "https://the-infinity-container.mn.co/users/onboarding/plans/1484020",
      },
      {
        title: "Practitioner Membership",
        body: "Everything in Practice, plus professional tools for the helpers and space-holders.",
        href: "https://the-infinity-container.mn.co/users/onboarding/plans/1483936",
      },
    ],
  },
  practitioner: {
    eyebrow: "Your result",
    badgeLabel: "Practitioner Membership",
    badgeClassName: "bg-tic-blue text-white",
    heading: "You hold a lot. This holds you.",
    body: "You're here for your own integration and for the people you hold. The Practitioner Membership includes everything in Practice — weekly sessions, monthly themes, the full library — plus professional frameworks, practitioner-focused teaching, and a peer community doing their own work alongside their client work.",
    ctaLabel: "Explore the Practitioner Membership →",
    ctaHref: "https://the-infinity-container.mn.co/users/onboarding/plans/1483936",
    otherOptionsHeading: "Also worth considering",
    otherCards: [
      {
        title: "Practice Membership",
        body: "Weekly practice without the professional layer. A solid starting point if you want to ease in.",
        href: "https://the-infinity-container.mn.co/users/onboarding/plans/1898747",
      },
      {
        title: "Free Membership",
        body: "Just the monthly Community Call — free, no commitment, a real taste of TIC.",
        href: "https://the-infinity-container.mn.co/users/onboarding/plans/1484020",
      },
    ],
  },
};
