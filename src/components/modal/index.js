import React from "react";
import { Modal } from "react-bootstrap";

export default function index(props) {
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <h4>post id: {props.modalInfo.id}</h4>
        </Modal.Header>
        <Modal.Body>
          <h4 className="text-center">{props.modalInfo.title}</h4>
          <p className="text-center">{props.modalInfo.body}</p>
        </Modal.Body>
      </Modal>
    </div>
  );
}
