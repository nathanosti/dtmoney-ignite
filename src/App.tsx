import { GlobalStyle } from "./styles/global";

import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { AddTransactionsModal } from "./components/Modal";

import { ModalProvider } from "./context/modalContext";

function App() {
  return (
    <>
      <ModalProvider>
        <GlobalStyle />
        <Header />
        <Dashboard />
        <AddTransactionsModal />
      </ModalProvider>
    </>
  );
}

export default App;
