import { FormEvent, useContext, useState } from "react";
import { ToDoContext } from "../contex/ToDoProvider";

const ToDoForm = () => {
  const { state, dispatch } = useContext(ToDoContext);

    console.log(state);

  const [task, setTask] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // const todoTask :string = e?.target?.todo?.value;
    const todo = {
      id: Math.random().toString(36).substring(2, 7),
      title: task,
      isConpleted: false,
    };
    // console.log(todo);
    dispatch({type:'addTodo',payload:todo})
  };

  return (
    <div>
      <h1 className="">Add ToDo</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="todo">Task</label>
        <input
          type="text"
          name="todo"
          id="todo"
          onBlur={(e) => setTask(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default ToDoForm;
