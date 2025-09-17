import { useState } from "react"
import TaskForm from "../molecules/TaskForm"
import TaskList from "../organisms/TaskList"
import Button from "../atoms/Button";

export default function TaskTemplate(){
    const [tasks, setTasks]= useState([
        {id:1, text:"TAREA N"},
        {id:2, text:"TAREA N-1"},
        {id:3, text:"TAREA K"}
    ]);
    const [newTask, setNewTask]= useState("");
    const [nextId, setNextId]= useState(4);
    const [isReversed, setIsReversed]= useState(false); //para saber si la lista esta invertida

    const handleInputChange= (event) =>{ //actualiza estado
        setNewTask(event.target.value);
    };

    const handleAddTask = (event) =>{
        event.preventDefault(); //Evita que la pagina se recargue al mandar el form
        if(newTask.trim()!==""){ //Asegura campo no este vacio
            setTasks([...tasks, {id:nextId, text:newTask}]); //agrega un objeto que seria la tarea
            setNewTask(""); //Limpia el input del form
            setNextId(nextId +1); //incrementa valor del contador id
        }
    };

    const handleDeleteTask= (idToDelete) =>{ //recibe el id de la tarea que quiero eliminar
        const newTasks = tasks.filter(task => task.id !== idToDelete); //crea un nuevo arreglo de tareas con las tareas filtrando para no incluir la tarea con el id a eliminar
        setTasks(newTasks); //actualiza
    }

    const handleReverseTasks= () =>{
        const reversedTasks= [...tasks].reverse();
        setTasks(reversedTasks);
        setIsReversed(!isReversed) //cambia de estado
    };

    let taskListContent;
    if(tasks.length===0){
        taskListContent= <p id="textonada">No tienes ninguna tarea, empieza agregando una!</p>;
    }
    else{
        taskListContent=(
            <TaskList tasks={tasks} onDeleteTask={handleDeleteTask}/> //TaskList
        );
    }

    return(
        <section>
            <article>
                <h2>LISTA DE TAREAS DE SANTIAGO</h2>
                <TaskForm value={newTask} onChange={handleInputChange} onSubmit={handleAddTask} isDisabled={isReversed}/>
                <div className="containertareasboton">
                    {/* <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} /> se sustituye por lo de abajo*/}
                    {taskListContent}
                    <Button id="botoninvertirtareas" onClick={handleReverseTasks}>⟲</Button>
                </div>
            </article>
        </section>
    )
}