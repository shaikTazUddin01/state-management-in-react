import { ChangeEvent, useReducer } from "react";

const UserFormWithReduce = () => {
  const initialState = {
    name: "",
    age: "",
    hobbie: [] as string[],
  };
  type TAction = {
    type: string;
    payload: string;
  };
  const reducer = (currentState: typeof initialState, action: TAction) => {
    switch (action.type) {
      case "addName":
        return { ...currentState, name: action.payload };
      case "addAge":
        return { ...currentState, age: action.payload };
      case "hobbie":
        return {
          ...currentState,
          hobbie: [...currentState.hobbie, action.payload],
        };

      default:
        currentState;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  //   console.log(state);

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          onChange={(e) =>
            dispatch({ type: "addName", payload: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="age"
          onChange={(e) =>
            dispatch({ type: "addAge", payload: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="hobbie"
          onBlur={(e) => dispatch({ type: "hobbie", payload: e.target.value })}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default UserFormWithReduce;
