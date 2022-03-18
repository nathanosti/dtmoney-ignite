import { FC } from "react";
import { Logo as LogoSrc } from "../../assets";
import { Container, Content, Logo, Button } from "./styles";

export const Header: FC = () => {
  return (
    <>
      <Container>
        <Content>
          <Logo src={LogoSrc} alt="Logo DtMoney" />

          <Button>Nova Transação</Button>
        </Content>
      </Container>
    </>
  );
};
