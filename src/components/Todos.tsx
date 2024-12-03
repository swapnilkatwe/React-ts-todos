import React from "react";
import Todo from "../models/todo";
import ListItem from "./ListItem";

type props = { items: Todo[]}

const Todos: React.FC<React.PropsWithChildren<props>> = (props) => {
   
   return (<ul>
        {
            props.items.map((item) => (
                <ListItem key={item.id} text= {item.text}/>
                // <ListItem item={item}/>
            ))
        }
    </ul>
    );
};

export default Todos;