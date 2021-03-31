import React, {useState} from "react";

const FormTarea = () => {
// aqui escribo codigo de js
// vamos a crear 2 state
const [tarea,setTarea] = useState('');
const [listaTareas, setListaTareas] = useState([]);

// const guardarTarea = (e) =>{
//     // console.log(e.target.value);
//     // guardar dentro del state tarea
//     setTarea(e.target.value);
// }

  return (
    //   aqui tambien puedo agregar js
    <div className='container my-5'>
        {/* agregar aqui el HTML */}
      <form className='W-75'>
        <div className='d-flex mt-3'>
          <input
            type="text"
            placeholder="Ingrese una tarea"
            className="form-control"
            onChange={(e) => setTarea(e.target.value)}
          />
          <button className='btn btn-outline-light'>Agregar</button>
        </div>
      </form>
    </div>
  );
};

export default FormTarea;
