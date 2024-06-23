import { ReactNode, createContext, useReducer } from "react";

export const ToDoContext = createContext<
  { state: TToDo[]; dispatch: React.Dispatch<TAction> } | undefined
>(undefined);

type TToDo = {
  id: string;
  title: string;
  isConpleted: boolean;
};

type TAction = {
  type: string;
  payload: TToDo;
};

const initialState: TToDo[] = [];

const reducer = (currentState: TToDo[], action: TAction) => {
  switch (action.type) {
    case "addTodo":
      return [...currentState, action.payload];

    default:
      return currentState;
  }
};

type ToDoProviderPrope = {
  children: ReactNode;
};

const ToDoProvider = ({ children }: ToDoProviderPrope) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  const values = {
    state,
    dispatch,
  };

  return <ToDoContext.Provider value={values}>{children}</ToDoContext.Provider>;
};

export default ToDoProvider;
