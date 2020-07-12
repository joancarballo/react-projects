import React from "react";

function Header({ titulo }) {
  return (
    <div>
      <p>
        Hoy en "cosas que me arrepiento de hacer después de haberles dedicado un
        buen rato" os presento...
      </p>
      <h1 className="encabezado">{titulo}</h1>
    </div>
  );
}

export default Header;
