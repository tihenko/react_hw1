import { Todos } from "./components/Todos";
import { CreateTodoForm } from "./components/CreateTodoForm";

export const App = () => {
  return (
      <div>
        <CreateTodoForm/>
        <Todos/>
      </div>
  );
}
