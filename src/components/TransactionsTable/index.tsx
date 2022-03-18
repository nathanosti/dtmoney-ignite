import { FC } from "react";
import { Container, Table, TBodyContent } from "./styles";

export const TransactionsTable: FC = () => {
  interface ISummaryItems {
    title: string;
    price: number;
    isPositive: boolean;
    category: string;
    date: string;
  }

  const today = new Date().toLocaleDateString();

  const tableDataArr: ISummaryItems[] = [
    {
      title: "Desenvolvimento de Site",
      price: 1099.99,
      isPositive: true,
      category: "Venda",
      date: today,
    },
    {
      title: "Desenvolvimento de Site",
      price: 50,
      isPositive: false,
      category: "Compra",
      date: today,
    },
  ];

  return (
    <>
      <Container>
        <Table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Preço</th>
              <th>Categoria</th>
              <th>Data</th>
            </tr>
          </thead>

          <tbody>
            {tableDataArr.map((item, index) => (
              <tr key={index}>
                <TBodyContent>{item.title}</TBodyContent>
                <TBodyContent textColor={item.isPositive ? 'var(--green)' : 'var(--red)'}>
                  {item.price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
                </TBodyContent>
                <TBodyContent>{item.category}</TBodyContent>
                <TBodyContent>{item.date}</TBodyContent>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};
