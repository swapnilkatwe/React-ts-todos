import { useState } from 'react';
import NewTodos from './components/NewTodos';
import Todos from './components/Todos';
import Todo from './models/todo';

function App() {

  const [todoItem, setTodoItem] = useState<Todo[]>([]);

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

  return (
    <div>
      <NewTodos onAddTodo={addTodoHandler}/>
      <Todos items={todoItem} onClickHandler={deleteTodosOnClick} />
    </div>
  );
}

export default App;
