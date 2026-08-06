import Image from "next/image";

interface ApproachCard {
  title: string;
  icon?: string;
  iconSize?: number;
  heading: string;
  description: string;
  badges: { text: string; color?: "white" | "grey" }[];
  backgroundColor: string;
  titleColor: string;
  paddingTop: string;
  paddingBottom: string;
}

// On mobile the icons share a fixed-width slot, so the card titles start at the same x
// regardless of which icon sits beside them. Above md the slot collapses to the icon's
// own width, preserving the original desktop layout.
const ICON_SLOT = "w-[116px] md:w-auto";

const APPROACH_CARDS: ApproachCard[] = [
  {
    title: "The Solar Spiral",
    icon: "/assets/sun-icon.svg",
    iconSize: 116,
    heading: "7 Preparation Capacities",
    description:
      "The capacities that help you arrive ready — grounded, receptive, and resourced before the experience begins.",
    badges: [
      { text: "Ground", color: "white" },
      { text: "+ 6 more", color: "grey" },
    ],
    backgroundColor: "#7C3537",
    titleColor: "#F56E71",
    paddingTop: "pt-[40px]",
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
    paddingTop: "pt-[40px]",
    paddingBottom: "pb-[24px]",
  },
];

export default function ApproachCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[61px] md:gap-[140px] mb-[70px] md:mb-[113px] relative">
      {APPROACH_CARDS.map((card) => (
        <div
          key={card.title}
          className={`rounded ${card.paddingTop} ${card.paddingBottom} px-8 md:px-[65px]`}
          style={{ backgroundColor: card.backgroundColor }}
        >
          <div className="flex items-center gap-5 mb-4">
            {card.icon && (
              <span className={`shrink-0 flex items-center ${ICON_SLOT}`}>
                <Image
                  src={card.icon}
                  alt=""
                  aria-hidden
                  width={90}
                  height={90}
                  style={{ width: card.iconSize ?? 96, height: card.iconSize ?? 96 }}
                  className="-mt-[15px]"
                />
              </span>
            )}
            <h3
              className="font-[family-name:var(--font-gordon)] tracking-[0.06em] text-[28px] md:text-[31px] leading-[1.2]"
              style={{ color: card.titleColor }}
            >
              {card.title}
            </h3>
          </div>
          <p className="font-[family-name:var(--font-gordon)] uppercase tracking-[0.14em] text-[21px] text-white mb-[24px]">
            {card.heading}
          </p>
          <p className="font-[family-name:var(--font-noto-serif)] text-white text-body mb-[28px]">
            {card.description}
          </p>
          <div className="flex flex-wrap gap-3">
            {card.badges.map((badge) => (
              <span
                key={badge.text}
                className="font-[family-name:var(--font-gordon)] uppercase tracking-[0.1em] text-[13px] rounded-full px-[16px] py-[9px] border"
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
