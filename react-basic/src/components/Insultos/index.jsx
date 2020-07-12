import React from "react";

const Insulto = ({ insulto, guardados, agregarInsultos, insultos }) => {
  const { id, nombre, ofensa } = insulto;

  // Guardar Insulto
  const guardarInsulto = (id) => {
    const insulto = insultos.filter((insulto) => insulto.id === id)[0];
    agregarInsultos([...guardados, insulto]);
  };
  return (
    <div>
      <h4>{nombre}</h4> <p>Ofensa: {ofensa} puntos</p>
      <button type="button" onClick={() => guardarInsulto(id)}>
        Guardar
      </button>
    </div>
  );
};

export default Insulto;
