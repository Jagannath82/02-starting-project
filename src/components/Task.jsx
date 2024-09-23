import NewTask from "./NewTask";

export default function Task({ onAdd, tasks, onClearTask }) {
    return <section>
        <h2 className="text-2xl font-bold mb-4 text-stone-800">New Task</h2>
        <NewTask onAdd={onAdd} />
        {tasks.length === 0 ? <p className="text-stone-600 my-4" >No task has been added yet</p> : 
        <ul>
            {tasks.map((task) => 
                <li key={task.taskId} className="flex justify-between my-4 gap-4">
                    <span className="text-stone-600">{task.text}</span>
                    <button onClick = {()=> onClearTask(task.taskId)} className="text-stone-600 hover:text-stone-800 rounded-sm">Delete</button>
                </li>
            )} 
        </ul>}
    </section>
}