import NewTodos from './components/NewTodos';
import Todos from './components/Todos';
import TodosContextProvider from './store/todosContext';

function App() {
  return (
    <TodosContextProvider>
      <NewTodos />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
