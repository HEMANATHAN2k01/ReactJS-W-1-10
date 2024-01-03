import { useState } from "react";
import TodoForm from "./RefactorTodo";

export default function Refactor() {
    const [todos, setTodos] = useState([
        {
            text: 'Learn react',
            isCompleted : false
        },
        {
            text : 'meet friend for lunch',
            isCompleted : false
        },
        {
            text : 'build toda app',
            isCompleted : false
        }
    ])

    const addTodo = (text) => 
    {
        const newTodos = [...todos,{text:text, isCompleted:false}]
        setTodos(newTodos)
    }

    const removeTodo = (e) =>
    {
        var index = Number(e.target.id)
        let temp = [...todos]
        temp.splice(index, 1)
        setTodos(temp)
    }
    
    return(
        <div>
            {todos.map((todo, i)=>(
                <div className="toda" key={i} id={i} onClick={removeTodo}>
                    {todo.text}
                </div>

                
            ))}
            <div><TodoForm addTodo={addTodo} /></div>
        </div>
        
    )
}