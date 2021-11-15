
import React, { useReducer, createContext } from "react";
export const DataContext = createContext();

const initialState = {
  result: [],
  loading: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "RESULT":
      return {
          ...state,
        result: [...state.result, ...action.payload]
      };
    case "LOADING":
      return {
        ...state,
        loading: action.payload
      };
    case "ERROR":
      return {
        ...state,
        error: 'An Error occurred ... '
      };
    default:
      throw new Error();
  }
};

export const DataContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <DataContext.Provider value={{state, dispatch}}>
      {props.children}
    </DataContext.Provider>
  );
};