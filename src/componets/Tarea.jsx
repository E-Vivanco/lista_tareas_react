import {TiDelete} from 'react-icons/ti';
import '../styles/Tarea.css';
import React from 'react';

const Tarea = ({tareas,setTareas}) => {

    const deletTarea=(id)=>{
      
        let result= tareas.filter(tarea => tarea.id !== id)
        setTareas(result)
     }

  return (
    <div className='lista-tareas'>
    { tareas !== "" ?
    tareas.map(tarea=>
      <li key={tarea.id}>{tarea.label}
      <button className='mx-2 btn btn-secondary' onClick={()=>deletTarea(tarea.id)}><TiDelete className='icono' /></button>
      </li>
      )
      : null
    }
      
  </div>
  )
}

export default Tarea