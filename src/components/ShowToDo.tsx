import React, { useContext } from "react";
import { ToDoContext } from "../contex/ToDoProvider";
// import ToDoContext from '../contex/ToDoProvider'

const ShowToDo = () => {
  const { state,dispatch } = useContext(ToDoContext);
  console.log(state);
  return (
    <div>
      {state?.map((item) => {
        return <li onClick={()=>dispatch({type:'todoId',payload:item.id})}>{item?.title}</li>;
      })}
    </div>
  );
};

export default ShowToDo;
