import Button from "./Button";

export default function SideBar({onStartNewProject, projects, onSelectedProject, selectedProjectId}) {
    return <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 rounded-r-xl">
        <h1 className="mb-8 uppercase font-bold md:text-xl text-stone-200">Your Project</h1>
        <div>
            <Button onClick={onStartNewProject}>+ Add Project</Button>
        </div>
        <ul className="mt-8">
            {projects.map((project) => {
                let css = "w-full text-left py-1 pl-2 hover:text-stone-200 hover:bg-stone-800";
                if(project.projectId === selectedProjectId){
                    css += " bg-stone-800 text-stone-200";
                }else{
                    css += " text-stone-400";
                }
                return (<li key={project.projectId}>
                    <button onClick={()=>onSelectedProject(project.projectId)} className={css}>{project.title}</button>
                </li>)
            })}
        </ul>
    </aside>
}