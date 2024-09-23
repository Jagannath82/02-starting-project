import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProject from "./components/NoProject";
import SideBar from "./components/SideBar";
import SelectedProject from "./components/SelectedProject";

function App() {

  const [projects, setProjects] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  function handleStartNewProject() {
    setProjects(prevState => {
      return {
        ...prevState,
        selectedProjectId: null
      }
    })
  }

  function handleAddProject(projectData) {
    setProjects(prevState => {
      const newProject = {
        ...projectData,
        projectId: Math.random(),
        tasks:[]
      };

      return {
        ...prevState,
        projects: [...prevState.projects, newProject]
      };
    });
  }

  function handleSelectedProject(id) {
    console.log(id);
    setProjects(prevState => {
      return {
        ...prevState,
        selectedProjectId: id,
      }
    })
  }

  function handleAddTask(newTaskText){
    const newTask = {
      taskId: Math.random(),
      text: newTaskText
    }
    selectedProject.tasks = [...selectedProject.tasks, newTask];
    setProjects(prevState => {
      const projects = [...prevState.projects];
      for(const proj of projects){
        if(proj.projectId === projects.selectedProjectId){
          proj.tasks.push(newTask);
        }
      }
      return{
        ...prevState,
        projects:projects
      }
    })
  }

  function handleClearTask(taskId){
    setProjects(prevState => {
      const tempProjects = [...prevState.projects];
      const selectedProject = tempProjects.find(project => project.projectId === projects.selectedProjectId);
      const filteredTask = selectedProject.tasks.filter(task => task.taskId !== taskId);
      selectedProject.tasks = filteredTask;
      return{
        ...prevState,
        projects:tempProjects
      }
    })
  }


  const selectedProject = projects.projects.find(project => project.projectId === projects.selectedProjectId);
  console.log(selectedProject);
  let content = <SelectedProject selectedProject={selectedProject} onAddTask={handleAddTask} onClearTask={handleClearTask}/>
  if (projects.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} />
  } else if (projects.selectedProjectId === undefined) {
    content = <NoProject onStartNewProject={handleStartNewProject} />;
  }
  return (
    <main className="h-screen my-8 flex gap-2">
      <SideBar onStartNewProject={handleStartNewProject} projects={projects.projects} onSelectedProject={handleSelectedProject} selectedProjectId={projects.selectedProjectId} />
      {content}
    </main>
  );
}

export default App;
