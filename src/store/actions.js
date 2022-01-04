import * as actionTypes from "./actionTypes";

export const taskCompleted = (taskId) => {
  return {
    type: actionTypes.taskUpdated,
    payload: { id: taskId, completed: true },
  };
};

export const titleChanged = (taskId) => {
  return {
    type: actionTypes.taskUpdated,
    payload: { id: taskId, title: `New title for ${taskId}` },
  };
};

export const taskDeleted = (itemId) => {
  return {
    type: actionTypes.taskDeleted,
    payload: { id: itemId },
  };
};
