import { FC } from "react";
import { Container, SummaryCard } from "./styles";

import { Income, Outcome, Total } from "../../assets";

interface ISummaryItems {
  type: string;
  title: string;
  iconSrc: string;
  value: number;
}

export const Summary: FC = () => {
  const summaryItems: ISummaryItems[] = [
    { type: "income", title: "Entrada", iconSrc: Income, value: 0 },
    { type: "outcome", title: "Saida", iconSrc: Outcome, value: 0 },
    { type: "total", title: "Entrada", iconSrc: Total, value: 0 },
  ];

  return (
    <>
      <Container>
        {summaryItems.map((card, index) => (
          <SummaryCard key={index} type={card.type}>
            <header>
              <span>{card.title}</span>
              <img src={card.iconSrc} alt="Card Icon" />
            </header>

            <h1>R$ {card.value}</h1>
          </SummaryCard>
        ))}
      </Container>
    </>
  );
};
