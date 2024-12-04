import React, { PropsWithChildren, useState } from "react";
import Todo from "../models/todo";

type todoContextType = {
    items: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void
}

export const TodosContext = React.createContext<todoContextType>({
    items: [],
    addTodo: () => {},
    removeTodo: (id: string) => {}
});

const TodosContextProvider: React.FC<PropsWithChildren> = (props) => {

    const [todoItems, setTodoItem] = useState<Todo[]>([]);

    // callback handler
    const addTodoHandler = (text: string) => {
        const newTodo = new Todo(text);
  
        setTodoItem((prevTodos) => {
            return prevTodos.concat(newTodo); // new array using concat.
        });
    }
  
    const deleteTodosOnClick = (todoItemId: string) => {
        setTodoItem((prevTodos) => {
          return prevTodos.filter(todos => todos.id !== todoItemId);
        });
    }
  
    const contextValue: todoContextType = {
        items: todoItems,
        addTodo: addTodoHandler,
        removeTodo: deleteTodosOnClick
    }

    return <TodosContext.Provider value={contextValue}>
        {props.children}
    </TodosContext.Provider>;
}

export default TodosContextProvider;