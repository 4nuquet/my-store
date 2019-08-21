import { TaskState } from './tasks.state';
import { TaskActions, Types } from './tasks.actions';

export const initialState = {
  tasks: [
    {
      id: 1,
      title: 'Task 1',
      info: 'Run',
      done: false
    },
    {
      id: 2,
      title: 'Task 2',
      info: 'Swim',
      done: false
    },
    {
      id: 3,
      title: 'Task 3',
      info: 'Climb',
      done: true
    }
  ]
};


export function  taskReducer(state: TaskState = initialState, actions: TaskActions) {
  switch (actions.type) {
    case Types.CreateTask:
      return Object.assign({}, state, {
        tasks: [].concat(state.tasks, actions.payload)
      });
    case Types.EditTask:
      return Object.assign({}, state, {
        tasks: state.tasks.map((task, index) => {
          if (task.id === actions.payload.id) {
            return Object.assign({}, task, {
              title: actions.payload.title,
              info: actions.payload.info,
              done: actions.payload.done
            });
          }
          return task;
        })
      });
    case Types.DeleteTask:
      return Object.assign({}, state, {
        tasks: state.tasks.filter((task, index) => task.id !== actions.payload)
      });
    case Types.DoneTask:
      return Object.assign({}, state, {
        tasks: state.tasks.map((task, index) => {
          if (task.id === actions.payload) {
            return Object.assign({}, task, {
              done: !task.done
            });
          }
          return task;
        })
      });
    default:
    return state;
  }
}
