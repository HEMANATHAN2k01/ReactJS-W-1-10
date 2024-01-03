import { useState } from "react";

export default function TodoForm({addTodo}) {
    const [value, setValue] = useState('')

    const handleSubmit = (e) =>
    {
        e.preventDefault()
        if(!value) return
        addTodo(value)
        setValue('')
    }

    return(
        <form action="" onSubmit={handleSubmit}>
            <input type="text" name="" id="" className="input" value={value}  onChange={e=>setValue(e.target.value)}/>
        </form>
    )
}