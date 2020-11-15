import React from "react";
import { useContext } from "react";
import Modal from "react-modal";
import Contexts from "../Contexts";

const modalStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    border: "gray 2px solid",
    transform: "translate(-50%, -50%)",
  },
};
const btnStyle = {
  float: "right",
  marginTop: "20px",
  marginRight: "5px",
  border: "solid 1px red",
};

Modal.setAppElement("#root");

const BuyCarts = () => {
  const { totalPrice, closeDialog, isDialogOpen, handleClear } = useContext(
    Contexts
  );
  let subtitle;
  function afterOpenModal() {
    subtitle.style.color = "black";
  }

  return (
    <div>
      <Modal
        isOpen={isDialogOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeDialog}
        style={modalStyle}
        contentLabel="Example Modal"
      >
        <h4
          className="mdl-dialog__title"
          ref={(_subtitle) => (subtitle = _subtitle)}
        >
          Please confirm your purchase...😃
        </h4>
        <h3 className="mdl-dialog__title">Total Price : ${totalPrice}</h3>

        <button className="mdl-button" style={btnStyle} onClick={handleClear}>
          Confirm
        </button>
        <button className="mdl-button" style={btnStyle} onClick={closeDialog}>
          Cancel
        </button>
      </Modal>
    </div>
  );
};
export default BuyCarts;
