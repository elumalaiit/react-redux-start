import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { displayTitle } from "../actions";

function App() {
  const title = useSelector(state => state.rootState.title);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(displayTitle("Hello World!"));
  }, []);

  return <div className="title">{title}</div>;
}

export default App;
