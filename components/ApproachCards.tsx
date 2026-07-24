import Image from "next/image";

interface ApproachCard {
  title: string;
  icon?: string;
  heading: string;
  description: string;
  badges: { text: string; color?: "white" | "grey" }[];
  backgroundColor: string;
  titleColor: string;
  paddingTop: string;
  paddingBottom: string;
}

const APPROACH_CARDS: ApproachCard[] = [
  {
    title: "The Solar Spiral",
    icon: "/assets/sun-icon.svg",
    heading: "7 Preparation Capacities",
    description:
      "The capacities that help you arrive ready — grounded, receptive, and resourced before the experience begins.",
    badges: [
      { text: "Ground", color: "white" },
      { text: "+ 6 more", color: "grey" },
    ],
    backgroundColor: "#7C3537",
    titleColor: "#F56E71",
    paddingTop: "pt-[61px]",
    paddingBottom: "pb-[24px]",
  },
  {
    title: "The Lunar Spiral",
    icon: "/assets/moon-icon.svg",
    heading: "13 Integration Capacities",
    description:
      "The capacities that help you weave what you find into who you are becoming — a little at a time.",
    badges: [
      { text: "Weave", color: "white" },
      { text: "Conduct", color: "white" },
      { text: "+ 11 more", color: "grey" },
    ],
    backgroundColor: "#236C7F",
    titleColor: "#D6D06C",
    paddingTop: "pt-[61px]",
    paddingBottom: "pb-[24px]",
  },
];

export default function ApproachCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[140px] mb-[56px] relative">
      {APPROACH_CARDS.map((card) => (
        <div
          key={card.title}
          className={`rounded ${card.paddingTop} ${card.paddingBottom} px-8 md:px-[65px]`}
          style={{ backgroundColor: card.backgroundColor }}
        >
          <div className="flex items-center gap-5 mb-4">
            {card.icon && (
              <Image
                src={card.icon}
                alt=""
                aria-hidden
                width={90}
                height={90}
                className="w-[70px] h-[70px] md:w-[90px] md:h-[90px] shrink-0"
              />
            )}
            <h3
              className="font-[family-name:var(--font-gordon)] tracking-[0.06em] text-[31px]"
              style={{ color: card.titleColor }}
            >
              {card.title}
            </h3>
          </div>
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
