import Button from "../atoms/Button";
import Input from "../atoms/Input";

export default function TaskForm({value, onChange, onSubmit, isDisabled}){
    return(
        <form onSubmit={onSubmit}>
            <Input
                id="nombretarea"
                name="nombretarea"
                value={value} 
                onChange={onChange}
                placeholder="Escribe la nueva tarea..."
                disabled={isDisabled}
            />
            <Button type="submit" disabled={isDisabled} id="botonañadir">ADD</Button>
        </form>
    )
}