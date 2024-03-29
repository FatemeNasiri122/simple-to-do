import './App.css';
import Container from "./component/Container";
import {TodoProvider} from "./context/TodoContext";

function App() {
  return (
      <TodoProvider>
          <Container />
      </TodoProvider>
  );
}

export default App;
