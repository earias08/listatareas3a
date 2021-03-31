import React from "react";
import ItemTarea from "./ItemTarea";

const Lista = (props) => {
  return (
    <ul className="list-group">
        {
            props.arregloTareas.map((dato,indice)=><ItemTarea nombreTarea={dato} key={indice} borrarTarea={props.borrarTarea}></ItemTarea>)
        }
    </ul>
  );
};

export default Lista;
