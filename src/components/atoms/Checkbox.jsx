export default function Checkbox({id, label, ...props}){
    return(
        <div>
            <input type="checkbox" id={id} {...props}/>
            <label htmlFor={id}>{label}</label>
        </div>
    )
}