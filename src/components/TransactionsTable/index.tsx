import { FC, useEffect, useState } from "react";
import { Container, Table, TBodyContent } from "./styles";
import { api } from "../../services/api";

import { ITransactionsItems } from "../../utils/types";
import { formatDate, formatCurrency } from "../../utils/formaters";

export const TransactionsTable: FC = () => {
  const [transactions, setTransactions] = useState<ITransactionsItems[]>([]);

  useEffect(() => {
    const getData = async () => {
      await api.get("/transactions").then((res) => {
        setTransactions(res.data);
      });
    };
    getData();
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
            {transactions.map((item) => (
              <tr key={item._id}>
                <TBodyContent>{item.title}</TBodyContent>
                <TBodyContent
                  textColor={item.isPositive ? "var(--green)" : "var(--red)"}
                >
                  {formatCurrency(item.price)}
                </TBodyContent>
                <TBodyContent>{item.category}</TBodyContent>
                <TBodyContent>{formatDate(item.createdAt)}</TBodyContent>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};
