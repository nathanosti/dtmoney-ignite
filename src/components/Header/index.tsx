import { FC, useContext } from "react";
import { modalContext } from "../../context/modalContext";
import { Logo as LogoSrc } from "../../assets";
import { Container, Content, Logo, Button } from "./styles";

export const Header: FC = () => {
  const { toggleModal } = useContext(modalContext);
  return (
    <>
      <Container>
        <Content>
          <Logo src={LogoSrc} alt="Logo DtMoney" />

          <Button onClick={toggleModal}>Nova Transação</Button>
        </Content>
      </Container>
    </>
  );
};
