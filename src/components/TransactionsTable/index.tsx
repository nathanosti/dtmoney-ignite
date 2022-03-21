import { FC, useContext } from "react";
import { Container, Table, TBodyContent } from "./styles";
import { formatDate, formatCurrency } from "../../utils/formaters";

import { transactionContext } from "../../context/transactionContext";

export const TransactionsTable: FC = () => {
  const { transactions, errorMessage } = useContext(transactionContext);

  return (
    <>
      <Container>
        {transactions.length > 0 ? (
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
              {transactions.map((item: any, index: any) => (
                <tr key={index}>
                  <TBodyContent>{item.title}</TBodyContent>
                  <TBodyContent
                    textColor={item.isPositive ? "var(--green)" : "var(--red)"}
                  >
                    {formatCurrency(item.price)}
                  </TBodyContent>
                  <TBodyContent>{item.category}</TBodyContent>
                  <TBodyContent>
                    {formatDate(item.createdAt ? item.createdAt : "00/00/00")}
                  </TBodyContent>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <span>{errorMessage}</span>
        )}
      </Container>
    </>
  );
};
