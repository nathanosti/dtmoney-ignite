import { FC, createContext, useState } from "react";

interface IModalContext {
  isOpen: boolean;
  toggleModal?: () => void;
}

const modalContext = createContext<IModalContext>({} as IModalContext);

const ModalProvider: FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean | any>(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <modalContext.Provider
      value={{
        isOpen,
        toggleModal,
      }}
    >
      {children}
    </modalContext.Provider>
  );
};

export { ModalProvider, modalContext };
