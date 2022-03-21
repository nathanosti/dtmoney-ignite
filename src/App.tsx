import { GlobalStyle } from "./styles/global";

import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { AddTransactionsModal } from "./components/Modal";

import { ModalProvider } from "./context/modalContext";
import { TransactionProvider } from "./context/transactionContext";

function App() {
  return (
    <>
      <TransactionProvider>
        <ModalProvider>
          <GlobalStyle />
          <Header />
          <Dashboard />
          <AddTransactionsModal />
        </ModalProvider>
      </TransactionProvider>
    </>
  );
}

export default App;
