import ToDoForm from "./components/ToDoForm";
// import UserFormWithReduce from "./components/UserFormWithReduce";
import ToDoProvider from "./contex/ToDoProvider";
import ShowToDo from './components/ShowToDo'
// import UserInFoWithState from "./components/UserInFoWithState";

const App = () => {
  return (
    <ToDoProvider>
      <div>
        {/* <UserFormWithReduce></UserFormWithReduce> */}
        {/* <UserInFoWithState></UserInFoWithState> */}
        <ToDoForm></ToDoForm>
        <ShowToDo></ShowToDo>
      </div>
    </ToDoProvider>
  );
};

export default App;
