import Todos from './components/Todos';
import Todo from './models/todo';

function App() {

  const todoItems = [
    new Todo('learn react'),
    new Todo('learn typescript')
  ];

  return (
    <div>
      <Todos items={todoItems} />
    </div>
  );
}

export default App;
