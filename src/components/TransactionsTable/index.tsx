import { FC, useEffect, useState } from "react";
import { Container, Table, TBodyContent } from "./styles";
import { api } from "../../services/api";

import { ITransactionsItems } from "../../utils/types";

export const TransactionsTable: FC = () => {
  const [transactions, setTransactions] = useState<ITransactionsItems[]>([]);

  useEffect(() => {
    api.get("/transactions").then((res) => {
      setTransactions(res.data);
    });
  }, []);

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
            {transactions.map((item, index) => (
              <tr key={index}>
                <TBodyContent>{item.title}</TBodyContent>
                <TBodyContent
                  textColor={item.isPositive ? "var(--green)" : "var(--red)"}
                >
                  {item.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </TBodyContent>
                <TBodyContent>{item.category}</TBodyContent>
                <TBodyContent>{item.createdAt}</TBodyContent>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};
