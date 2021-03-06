import { FC, FormEvent, useContext, useState } from "react";
import Modal from "react-modal";
import { modalContext } from "../../context/modalContext";
import { transactionContext } from "../../context/transactionContext";

import {
  Container,
  CloseButton,
  Form,
  Input,
  SelectTransactionTypeContainer,
  TransactionTypeButton,
  SubmitButton,
} from "./styles";

import { Close, Income, Outcome } from "../../assets";

Modal.setAppElement("#root");

export const AddTransactionsModal: FC = () => {
  const { isOpen, toggleModal } = useContext(modalContext);
  const { createTransaction } = useContext(transactionContext);

  const [title, setTitle] = useState<string>("");
  const [value, setValue] = useState<number>(0);
  const [isPositive, setIsPositive] = useState<boolean>(true);
  const [category, setCategory] = useState<string>("");

  const customStyles = {
    overlay: {
      backgroundColor: "#00000090",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "2rem",
      borderRadius: "5px",
      backgroundColor: "#fff",
    },
  };

  const handleCreateNewTransaction = (event: FormEvent) => {
    event.preventDefault();

    const data = {
      title,
      price: value,
      isPositive,
      category,
      createdAt: new Date(),
    };

    createTransaction(data);
  };

  return (
    <>
      <Modal isOpen={isOpen} style={customStyles}>
        <Container>
          <CloseButton>
            <img src={Close} alt="Close" onClick={toggleModal} />
          </CloseButton>
          <h1>Cadastrar transação</h1>

          <Form onSubmit={handleCreateNewTransaction}>
            <Input
              placeholder="Título"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <Input
              placeholder="valor"
              onChange={(e) => setValue(Number(e.target.value))}
              type="number"
            />

            <SelectTransactionTypeContainer>
              <TransactionTypeButton
                background={isPositive ? "#12A45440" : "#fff"}
                type="button"
                onClick={() => setIsPositive(true)}
              >
                <img src={Income} alt="Entrada" />
                <span>Entrada</span>
              </TransactionTypeButton>

              <TransactionTypeButton
                background={!isPositive ? "#E52E4D40" : "#fff"}
                type="button"
                onClick={() => setIsPositive(false)}
              >
                <img src={Outcome} alt="Saida" />
                <span>Saida</span>
              </TransactionTypeButton>
            </SelectTransactionTypeContainer>

            <Input
              placeholder="Categoria"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />

            <SubmitButton>Cadastrar</SubmitButton>
          </Form>
        </Container>
      </Modal>
    </>
  );
};
