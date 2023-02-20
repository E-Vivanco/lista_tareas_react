import { useState } from 'react';
import './App.css';
import Formulario from './componets/Formulario';
import Tarea from './componets/Tarea';

function App() {
const [tareas,setTareas]=useState([]);
const [addTarea,setAddTarea]=useState();


  return (
    <div className="App">
      <div className='base-lista w-50 container my-2'>
      <h1>Todo</h1>
        <div className='formulario'>
          <Formulario setAddTarea={setAddTarea} setTareas={setTareas} addTarea={addTarea} tareas={tareas}/>
          <Tarea tareas={tareas} setTareas={setTareas}/>
        </div>
      </div>
    </div>
  );
}

export default App;
