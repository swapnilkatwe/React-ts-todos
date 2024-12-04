import React, {useContext} from "react";
import ListItem from "./ListItem";
import { TodosContext } from "../store/todosContext";
import classes from "../components/css/Todos.module.css";

const Todos: React.FC<React.PropsWithChildren> = () => {
   
const todosCtx = useContext(TodosContext);

    return (<ul className= {classes.todos}>
        {
            todosCtx.items.map((item) => (
                <ListItem key={item.id} text= {item.text} onClickHandler={todosCtx.removeTodo.bind(null,item.id)}/>
            ))
        }
    </ul>
    );
};

export default Todos;