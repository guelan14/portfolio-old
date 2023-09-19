import React, { useState } from "react";
import "../../styles/modal.css";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Open
      </button>

      <div className="modal">
        <div className="overlay"> </div>
        <div className="modal-content">
          <h2 className="text-light"> Hello Modal</h2>
          <p>asdaOASJDOIAUJSDOASIJDOASIJDOASIJDAOSIDJ</p>
          <button onClick={toggleModal}>Close</button>
        </div>
      </div>
    </>
  );
}
