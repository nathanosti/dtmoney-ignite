import { FC, createContext, useState, useEffect } from "react";
import { api } from "../services/api";

import { ITransactionsItems } from "../utils/types";

interface ITransactionContext {
  transactions: ITransactionsItems[];
  createTransaction: (formData: ITransactionsItems) => any;
  errorMessage: string;
}

const transactionContext = createContext<ITransactionContext>(
  {} as ITransactionContext
);

const TransactionProvider: FC = ({ children }) => {
  const [transactions, setTransactions] = useState<ITransactionsItems[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>(
    "Algo de errado não está certo"
  );

  //Primeira busca ao entrar na página:
  useEffect(() => {
    api
      .get("/transactions")
      .then((res) => {
        switch (res.status) {
          case 200:
            const { data } = res;
            console.log(res);

            setTransactions(data);
            return true;
          case 204:
            setErrorMessage("OPSS... NADA LOCALIZADO!");
            break;
          default:
            setErrorMessage("Verifica API");
        }
      })
      .catch((err) => {
        return console.log(err);
      });
  }, []);

  // Criando uma nova transação:
  const createTransaction = (formData: ITransactionsItems) => {
    api
      .post("/transactions", formData)
      .then((res) => {
        const { data } = res;
        if (data.status === "ok") {
          setTransactions([...transactions, formData]);

          return console.log("Cadastrado com sucesso", formData);
        }
      })
      .catch((err) => {
        return console.log("Erro ao cadastrar nova transação", err);
      });
  };

  return (
    <transactionContext.Provider
      value={{
        transactions,
        createTransaction,
        errorMessage,
      }}
    >
      {children}
    </transactionContext.Provider>
  );
};

export { TransactionProvider, transactionContext };
