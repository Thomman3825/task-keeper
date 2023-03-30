import logo from './logo.svg';
import './App.css';
import  Button  from './Button';
import { useState } from 'react';
import Tasks from './Tasks';

function App() {
  const [tasks, setTask]=useState([
    {
      id:1,
    tname: 'A',
    trem: true
    },
    {
      id:2,
      tname: 'B',
      trem: true
    },
    {
      id:3,
      tname: 'Chjjij',
      trem: false
    }

  ])
  const setReminder = (id) =>{
    setTask(tasks.map((task) => task.id === id?{...tasks, trem:!task.trem}:task))
  }
  const onDelete = (id)=>{
    setTask(tasks.filter((task) => (task.id !== id)))

  }
  const addTask = () =>{

  }
  return (
    <div className="mainContainer">
    
        <h1>Task Keeper</h1>
     
        <Tasks tasks={tasks} onClick={onDelete} onReminder={setReminder}></Tasks>
       <Button color='blue' text="Add Task"></Button>

      
    </div>
  );
}

export default App;
