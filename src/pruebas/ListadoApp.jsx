import React, { useState } from "react";
import { AgregarTarea } from "./AgregarTarea";

const Item = ({ nombre, visto }) => {
  return (
    <li>
      {nombre}
      {visto ? "✔" : "❌"}
    </li>
  );
};

export const ListadoApp = () => {
  const addTask = () => {
    setArreglo([...arreglo, { nombre: "nuevo", visto: "false" }]);
  };
  let listadoSecciones = [
    { id: 1, nombre: "Instalaciones necesarias", visto: true },
    { id: 2, nombre: "Uso de vite", visto: false },
    { id: 3, nombre: "Componentes", visto: true },
    { id: 4, nombre: "Variables en JSX", visto: true },
    { id: 5, nombre: "Props", visto: false },
    { id: 6, nombre: true },
  ];

  const [arreglo, setArreglo] = useState(listadoSecciones);

  const onAgregarTarea = (val) => {
    const envio = {
      id: arreglo.length + 1,
      nombre: val,
      visto: false,
    };
    setArreglo([...arreglo, envio]);
  };
  return (
    <>
      <h1>Listado de Temas del Curso</h1>
      <AgregarTarea agregarTarea={onAgregarTarea}></AgregarTarea>
      <ol>
        {arreglo.map((item) => (
          <Item key={item.id} nombre={item.nombre} visto={item.visto}></Item>
        ))}
      </ol>
    </>
  );
};
