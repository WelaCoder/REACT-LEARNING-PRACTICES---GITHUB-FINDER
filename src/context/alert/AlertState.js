import React, { useReducer } from "react";
import { SET_ALERT } from "../types";
import AlertContext from "./AlertContext";
import AlertReducer from "./AlertReducer";
const AlertState = props => {
  const initialState = {
    alert: null
  };
  const [state, dispatch] = useReducer(AlertReducer, initialState);
  const SetAlert = (msg, type) => {
    const alert = {
      msg,
      type
    };
    dispatch({
      type: SET_ALERT,
      payload: alert
    });
    setTimeout(() => {
      dispatch({
        type: SET_ALERT,
        payload: null
      });
    }, 4000);
  };
  return (
    <AlertContext.Provider value={{ alert: state.alert, SetAlert }}>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
