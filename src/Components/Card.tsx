import { AriaAttributes, DOMAttributes, HTMLAttributes, useContext, useRef } from "react";
import { TasksContext } from "../Contexts/tasksContext";
import { TaskType as Task } from "../Types/taskType";

interface CardProps {
    cardNumber: number
}

const Card = ({cardNumber}: CardProps) => {
    const taskContext = useContext(TasksContext)
    const inputRef = useRef<HTMLInputElement | null>(null)
    function addTask (event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === 'Enter' && inputRef.current?.value == ''){
            event.preventDefault()
        }
        else if (event.key === 'Enter' && inputRef.current?.value !== undefined) {
            
            let newTask: Task = {cardNumber: cardNumber, taskName: inputRef.current.value}
            taskContext?.handleAddTask(newTask)
            inputRef.current.value = ''
        }

        
        
    }
    function handleDoneTask (event: React.MouseEvent<HTMLLIElement>) {
        const target = event.target as Element
        target.classList.add('line-through') 
        console.log(target.classList)
        target.classList.forEach(e => {
            if (e.includes('text')){
                target.classList.remove(e)
                
                target.classList.add('text-gray')

            }
            if (e.includes('bg')) {
                target.classList.remove(e)
                target.classList.add('bg-black')
            }
        })
        console.log(target.classList)
    }
    return ( 
        <div className="shrink border border-white rounded-lg ms-2 mt-2 bg-black" style={{flexBasis: "100px", minHeight: "200px", maxHeight: "fit-content"}}>
            <input ref={inputRef} onKeyDown={addTask} type="text" className="bg-black rounded-lg focus:outline-0 focus:bg-darkgray text-white p-1 m-2" placeholder="Enter The Task Name..." />
            <hr className="text-white" />
            <ul className="p-2.5">
                {taskContext?.tasks.map((e: Task) => {
                    if (e.cardNumber === cardNumber) {
                        return <li onClick={handleDoneTask} className="text-white cursor-pointer bg-darkgray rounded-lg p-1.5 mb-2">{e.taskName}</li>
                    }
                    
                })}
            </ul>
        </div>
     );
}
 
export default Card;