import { useRef, useContext } from "react";
import classes from './css/NewTodo.module.css';
import { TodosContext } from "../store/todosContext";

const NewTodos: React.FC = () => {
    
    const todosCtx = useContext(TodosContext);
    const todoTextInputRef = useRef<HTMLInputElement>(null);
    
    // handler
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = todoTextInputRef.current?.value;

        if(enteredText == null || enteredText.trim().length === 0) {
            return;
        }

        todosCtx.addTodo(enteredText);
    };
    
    
    //input form
    return (
    <form onSubmit={submitHandler} className={classes.form}>
        <label htmlFor="text">Todo Text</label>
        <input type="text" id="text" ref={todoTextInputRef}/>
        <button>Add Todo</button>
    </form>
    );
}

export default NewTodos;