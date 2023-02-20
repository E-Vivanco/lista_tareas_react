import { useState } from 'react';
import {TiDelete} from 'react-icons/ti';
import './App.css';

function App() {
const [tareas,setTareas]=useState([]);
const [addTarea,setAddTarea]=useState();

const handleInputTarea=(e)=>{
  setAddTarea((e.target.value))
}

const newTarea=(e)=>{
    e.preventDefault()
    const tareaObj={
      label: addTarea,
      done: false,
      id: tareas.length +1
    }
    setTareas(tareas.concat(tareaObj))
    setAddTarea("")
}

const deletTarea=(id)=>{
   let result= tareas.filter(tarea => tarea.id !== id)
   setTareas(result)
}

  return (
    <div className="App">
      <div className='base-lista w-50 container'>
      <h1>Lista-Tareas</h1>
        <div className='formulario'>
          <form onSubmit={newTarea}>
            <input placeholder='Ingresar tarea' onChange={handleInputTarea} value={addTarea}/>
            <button className='btn btn-secondary' type='submit'>add</button>
            <div className='lista-tareas'>
              {tareas.map(tarea=>
                <li key={tarea.id}>{tarea.label}
                <button className='mx-2 btn btn-success' onClick={()=>deletTarea(tarea.id)}><TiDelete className='icono' /></button>
                </li>
                )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
