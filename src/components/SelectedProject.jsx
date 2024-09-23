import Button from "./Button"
import Task from "./Task"

export default function SelectedProject({ selectedProject, onAddTask, onClearTask }) {
    const formattedDUeDate = new Date(selectedProject.dueDate).toLocaleDateString("us-EN", {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    })

    

    return <div className="w-[35rem] mt-16">
        <header className="pb-4 mb-4 border-b-2 border-stone-400">
            <div className="flex item-center justify-between">
                <h1 className="text-3xl text-stone-800">{selectedProject.title}</h1>
                <Button>Delete</Button>
            </div>
            <p className="text-stone-400 mb-4">{formattedDUeDate}</p>
            <p className="text-stone-400 mb-4 whitespace-pre-wrap">{selectedProject.description}</p>
        </header>
        <Task onAdd={onAddTask} tasks={selectedProject.tasks} onClearTask={onClearTask}/>
    </div>
}