import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import * as actions from "./store/actions";
import { initiateStore } from "./store/store";

const store = initiateStore();

const App = () => {
  const [state, setState] = useState(store.getState());

  useEffect(() => {
    store.subscribe(() => setState(store.getState()));
  }, []);

  const completeTask = (taskId) => {
    store.dispatch(actions.taskCompleted(taskId));
  };

  const changeTitle = (taskId) => {
    store.dispatch(actions.titleChanged(taskId));
  };

  const deleteTask = (itemId) => {
    store.dispatch(actions.taskDeleted(itemId));
  };

  return (
    <React.Fragment>
      <h1>APP</h1>
      <ul>
        {state.map((el) => (
          <li key={el.id}>
            <p>{el.title}</p>
            <p>{`Completed: ${el.completed}`}</p>
            <button onClick={() => completeTask(el.id)}>Completed</button>
            <button onClick={() => changeTitle(el.id)}>Change Title</button>
            <button onClick={() => deleteTask(el.id)}>Delete task</button>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
