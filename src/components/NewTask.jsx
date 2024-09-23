import { useState } from "react"

export default function NewTask({onAdd}){
    const [enteredTask, setEnteredTask] = useState('');

    function handleEnteredTask(event){
        const newTask = event.target.value;
        setEnteredTask(newTask);
    }

    function handleAddTask(){
        onAdd(enteredTask);
        setEnteredTask('');
    }
    return <div className="flex items-center gap-4">
        <input type="text" value={enteredTask} className="w-64 text-stone-700 bg-stone-200 p-1" onChange={handleEnteredTask}/>
        <button onClick={handleAddTask} className="text-stone-700 hover:text-stone-600 rounded-sm">Add New Task</button>
    </div>
}