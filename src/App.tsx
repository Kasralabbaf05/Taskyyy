import React from 'react';
import { TasksContext } from './Contexts/tasksContext';
import { TaskType as Task } from './Types/taskType';
import Card from './Components/Card';
import { useState } from 'react';

function App() {
  function handleAddTask (newTask: Task) {
    setTasks([...Tasks,newTask])
  }
  function handleRemoveTask () {}
  function handleAddCard () {
      addCard([...cards,<Card cardNumber={cards.length + 1}/>])
  }
  const [Tasks, setTasks ]= useState<Task[]>([])
  const [cards, addCard] = useState([<Card cardNumber={1}/>])
  return (
    <div className="flex flex-wrap">
      <TasksContext.Provider value={{
        tasks: Tasks,
        handleAddTask: handleAddTask,
        handleRemoveTask: handleRemoveTask
      }}>
        {cards}
        <button onClick={handleAddCard} className='self-start py-2 px-4 ms-5 mt-2 text-white border rounded-3xl transition-all duration-300 hover:bg-blue hover:border-blue '>Add Card</button>
      </TasksContext.Provider>
    </div>
  );
}

export default App;
