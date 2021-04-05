import React, { useState, useEffect } from "react";
import Lista from "./Lista";

const FormTarea = () => {
  // aqui escribo codigo de js
  
  let tareasLS= JSON.parse(localStorage.getItem('listaTareas'));
  // vamos a crear 2 state
  const [tarea, setTarea] = useState("");
  const [listaTareas, setListaTareas] = useState(tareasLS);

  // uso useeffect solo en el montaje
  // useEffect(()=>{
  //   // aqui va la logica a ejecutar
  //   console.log('ejecutando el ciclo de vida de un componente');
  // },[]);

  useEffect(()=>{
    // aqui va la logica a ejecutar
    if(tareasLS){
      console.log('aqui quiero actualizar el localstorage');
      localStorage.setItem('listaTareas', JSON.stringify(listaTareas));
    }else{
      console.log('en localstorage no existe la key listatareas');
      localStorage.setItem('listaTareas', JSON.stringify([]));
    }
  });

  // const guardarTarea = (e) =>{
  //     // console.log(e.target.value);
  //     // guardar dentro del state tarea
  //     setTarea(e.target.value);
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("desde la funcion handleSubmit");
    // agregar la tarea en el state listatareas
    // let variable = [...listatareas,nuevovalor]
    setListaTareas([...listaTareas, tarea]);
    // limpiar el valor del state tarea
    setTarea("");
  };

  const borrarTarea = (nombre) =>{
    // funcion para eliminar un item del state listatareas
    let arregloFiltrado = listaTareas.filter((elemento)=> elemento !== nombre) 
    setListaTareas(arregloFiltrado);
  }

  return (
    //   aqui tambien puedo agregar js
    <div className="container my-5">
      {/* agregar aqui el HTML */}
      <form className="W-75" onSubmit={handleSubmit}>
        <div className="d-flex mt-3">
          <input
            type="text"
            placeholder="Ingrese una tarea"
            className="form-control"
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
          />
          <button className="btn btn-outline-light" type="submit">
            Agregar
          </button>
        </div>
      </form>
      <article className="my-5">
        <Lista arregloTareas={listaTareas} borrarTarea={borrarTarea}></Lista>
      </article>
    </div>
  );
};

export default FormTarea;
