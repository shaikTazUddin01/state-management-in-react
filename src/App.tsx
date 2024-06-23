import ToDoForm from "./components/ToDoForm";
// import UserFormWithReduce from "./components/UserFormWithReduce";
import ToDoProvider from "./contex/ToDoProvider";
// import UserInFoWithState from "./components/UserInFoWithState";

const App = () => {
  return (
    <ToDoProvider>
      <div>
        {/* <UserFormWithReduce></UserFormWithReduce> */}
        {/* <UserInFoWithState></UserInFoWithState> */}
        <ToDoForm></ToDoForm>
      </div>
    </ToDoProvider>
  );
};

export default App;
