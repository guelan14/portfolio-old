import React, { useState } from "react";

export const AgregarTarea = ({ agregarTarea }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    agregarTarea(inputValue); //mandamos el objeto
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Ingrese tarea"
        value={inputValue}
        onChange={(event) => {
          onInputChange(event);
        }}
      />
    </form>
  );
};
