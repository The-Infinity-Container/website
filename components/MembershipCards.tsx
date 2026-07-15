interface MembershipCard {
  label: string;
  heading: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  backgroundColor: "red" | "blue";
}

interface MembershipCardsProps {
  cards: MembershipCard[];
}

export default function MembershipCards({ cards }: MembershipCardsProps) {
  const getColors = (bg: "red" | "blue") => {
    if (bg === "red") {
      return {
        bgColor: "#F56F71",
        text: "text-black",
        buttonBgColor: "black",
        buttonText: "text-white",
      };
    }
    return {
      bgColor: "#1948A8",
      text: "text-white",
      buttonBgColor: "white",
      buttonText: "text-[#1948A8]",
    };
  };

  return (
    <div className="grid md:grid-cols-2 gap-[44px] max-w-[920px] mx-auto">
      {cards.map((card) => {
        const colors = getColors(card.backgroundColor);
        return (
          <div
            key={card.label}
            className={`${colors.text} px-[32px] py-[44px] rounded`}
            style={{ backgroundColor: colors.bgColor }}
          >
            <p
              className="font-[family-name:var(--font-gordon)] text-[16px] uppercase tracking-[0.12em] mb-[24px]"
              style={{ letterSpacing: "0.12em" }}
            >
              {card.label}
            </p>
            <h3 className="font-[family-name:var(--font-gordon)] text-[32px] uppercase tracking-[0.02em] mb-[24px] font-normal leading-[1.3]">
              {card.heading}
            </h3>
            <p className="font-[family-name:var(--font-noto-serif)] text-[18px] leading-[1.7] mb-[32px]">
              {card.description}
            </p>
            <a
              href={card.buttonHref}
              className={`${colors.buttonText} font-[family-name:var(--font-gordon)] text-[14px] uppercase px-[24px] py-[16px] block text-center hover:opacity-70 transition-opacity`}
              style={{ backgroundColor: colors.buttonBgColor, letterSpacing: "0.06em" }}
            >
              {card.buttonText}
            </a>
          </div>
        );
      })}
    </div>
  );
}
