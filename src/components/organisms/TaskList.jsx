import TaskItem from "../molecules/TaskItem";

export default function TaskList({tasks, onDeleteTask}){
    
    return(
        <div id="columnastareas">
            {tasks.map((task)=>(
                <TaskItem
                    key={task.id}
                    id={`task-${task.id}`}
                    label={task.text}
                    onDeleteTask={()=> onDeleteTask(task.id)}
                />
            ))}
        </div>
    )
}