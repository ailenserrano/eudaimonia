import React from "react";
import Greeting from "./Greeting";

function ItemListContainer() {
  let title = "Bienvenida a Eudaimonia";
  let subtitle = "Lencería de la mejor calidad";

  return <Greeting title={title} subtitle={subtitle} />;
}

export default ItemListContainer;