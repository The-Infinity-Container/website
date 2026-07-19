interface ApproachCard {
  title: string;
  heading: string;
  description: string;
  badges: { text: string; color?: "white" | "grey" }[];
  backgroundColor: string;
  titleColor: string;
  paddingY: string;
}

const APPROACH_CARDS: ApproachCard[] = [
  {
    title: "The Solar Spiral",
    heading: "7 Preparation Capacities",
    description:
      "The capacities that help you arrive ready — grounded, receptive, and resourced before the experience begins.",
    badges: [
      { text: "Ground", color: "white" },
      { text: "+ 6 more", color: "grey" },
    ],
    backgroundColor: "#7C3537",
    titleColor: "#F56E71",
    paddingY: "py-[61px]",
  },
  {
    title: "The Lunar Spiral",
    heading: "13 Integration Capacities",
    description:
      "The capacities that help you weave what you find into who you are becoming — a little at a time.",
    badges: [
      { text: "Weave", color: "white" },
      { text: "Conduct", color: "white" },
      { text: "+ 11 more", color: "grey" },
    ],
    backgroundColor: "#236C7F",
    titleColor: "#0A0E10",
    paddingY: "py-[81px]",
  },
];

export default function ApproachCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[61px] mb-[56px] relative">
      {APPROACH_CARDS.map((card) => (
        <div
          key={card.title}
          className={`rounded ${card.paddingY} px-8 md:px-[65px]`}
          style={{ backgroundColor: card.backgroundColor }}
        >
          <h3
            className="font-[family-name:var(--font-gordon)] tracking-[0.06em] text-[31px] mb-4"
            style={{ color: card.titleColor }}
          >
            {card.title}
          </h3>
          <p className="font-[family-name:var(--font-gordon)] uppercase tracking-[0.14em] text-[21px] text-white mb-[40px]">
            {card.heading}
          </p>
          <p className="font-[family-name:var(--font-noto-serif)] text-white text-[20px] leading-[1.8] mb-[48px]">
            {card.description}
          </p>
          <div className="flex flex-wrap gap-4">
            {card.badges.map((badge) => (
              <span
                key={badge.text}
                className="font-[family-name:var(--font-gordon)] uppercase tracking-[0.1em] text-[13px] rounded-full px-[23px] py-[12px] border"
                style={{
                  borderColor:
                    badge.color === "white" ? "white" : "#7B7B7A",
                  color: badge.color === "white" ? "white" : "#7B7B7A",
                }}
              >
                {badge.text}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
