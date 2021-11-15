import * as t from './types'
import React, { useReducer, createContext } from "react";
export const DataContext = createContext();

const initialState = {
  result: [],
  data:false,
  loading:true ,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case t.RESULT:
      return {
          ...state,
        result: [...state.result, ...action.payload]
      };
    case t.DATA:
      return {
        ...state,
        data: action.payload
      };
    case t.LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case t.ERROR:
      return {
        ...state,
        error: action.payload
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