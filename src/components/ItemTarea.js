import React from 'react';

const ItemTarea = (props) => {
    return (
        <li className="list-group-item d-flex justify-content-between">{props.nombreTarea}
        <button className='btn btn-danger' onClick={()=> props.borrarTarea(props.nombreTarea)}>Borrar</button></li>
    );
};

export default ItemTarea;