import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  width: 570px;

  h1 {
    color: var(--title);
    font-size: 1.5rem;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: 0;
  outline: none;

  position: absolute;

  right: 21px;
  top: 21px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    -moz-appearance: textfield;
  }
`;

export const Input = styled.input`
  background: #e7e9ee;

  margin-bottom: 1rem;

  border: 1px solid #d7d7d7;
  border-radius: 5px;

  outline: none;

  padding: 1rem 1.4rem;

  color: var(--title);
`;

export const SubmitButton = styled.button`
  background: var(--green);

  margin-bottom: 1rem;

  border: none;
  border-radius: 5px;

  outline: none;

  padding: 1rem 1.4rem;

  font-weight: 600;
  font-size: 1.1rem;
  color: #fff;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const SelectTransactionTypeContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 1rem;
`;

export const TransactionTypeButton = styled.button<ITransactionTypeButton>`
  width: 49%;
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.background};

  border: 1px solid #d7d7d7;
  border-radius: 5px;

  padding: 1rem 1.4rem;

  img {
    margin-right: 1rem;
  }

  span {
    color: var(--title);
    font-size: 1rem;
  }

  &:hover {
    border-color: ${darken(0.1, "#d7d7d7")};
  }
`;

interface ITransactionTypeButton {
  background: string;
}
