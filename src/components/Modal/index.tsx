import { FC, useContext } from "react";
import Modal from "react-modal";
import { modalContext } from "../../context/modalContext";

Modal.setAppElement("#root");

export const AddTransactionsModal: FC = () => {
  const { isOpen } = useContext(modalContext);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  return (
    <>
      <Modal isOpen={isOpen} style={customStyles}>
        <div>teste</div>
      </Modal>
    </>
  );
};
