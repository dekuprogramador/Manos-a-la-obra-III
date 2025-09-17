import Checkbox from "../atoms/Checkbox";
import Button from "../atoms/Button";

export default function TaskItem({id, label, onDeleteTask}){
    return(
        <div className="tareas">
            <div className="tareastexto">
                <Checkbox id={id} label={label} />
            </div>
            <Button type="button" className="botonbasura" onClick={onDeleteTask} >
                🗑
            </Button>
        </div>
    )
}