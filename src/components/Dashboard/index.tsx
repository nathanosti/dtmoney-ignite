import { FC } from "react";

import { Container } from "./styles";
import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";

export const Dashboard: FC = () => {
  return (
    <>
      <Container>
        <Summary />
        <TransactionsTable />
      </Container>
    </>
  );
};
