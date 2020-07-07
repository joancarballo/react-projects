import React from "react";
import arrayInsultos from "../../insultos";

function Body() {
  let insulto;
  if (arrayInsultos) {
    var randomNum = Math.random() * 10;
    console.log(Math.floor(randomNum));
    insulto = arrayInsultos[Math.floor(randomNum)];
  }

  return (
    <div className="Body">
      <h4>Hay que ser </h4>
      <h2>{insulto}</h2>
      <h4>para pensar que esto es una buena idea</h4>
    </div>
  );
}

export default Body;
