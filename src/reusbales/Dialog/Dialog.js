import React from "react";
import Modal from "react-bootstrap/Modal";

const ReusableDialog = (props) => {
  return (
    <>
      <Modal
        className="aqua-dialog text-light"
        show={props.show}
        onHide={props.handleClose}
        centered
      >
        <Modal.Body>{props.children}</Modal.Body>
      </Modal>
    </>
  );
};

export default ReusableDialog;
