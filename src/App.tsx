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

  return (
    <div>
      <NewTodos onAddTodo={addTodoHandler}/>
      <Todos items={todoItem} />
    </div>
  );
}

export default App;
