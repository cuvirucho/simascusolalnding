import React, { useState } from "react";


const Alert = ({ message, onClose }) => {
  return (
    <div className="alert-container">
      <div className="alert">
        <p>{message}</p>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default Alert;
