import { useState, type PropsWithChildren } from "react";

import Modal from "react-modal";

import "../styles/AppModal.css";

interface AppModalProps extends PropsWithChildren {
  title: string;
}

Modal.setAppElement("#root");

const AppModal = function ({ title, children }: AppModalProps) {
  const [isOpen, setIsOpen] = useState(true);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <Modal
      className="app-modal-content"
      overlayClassName="app-modal-background"
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      contentLabel={title}
      closeTimeoutMS={200}
    >
      <h1>{title}</h1>
      <div className="app-modal-divider"></div>
      {children}
    </Modal>
  );
};

export default AppModal;
