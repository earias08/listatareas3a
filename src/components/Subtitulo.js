import React from 'react';

const Subtitulo = (props) => {
    return (
        <div>
            <h3 className='text-light text-center'>Tareas de la comision {props.comision}</h3>
        </div>
    );
};

export default Subtitulo;