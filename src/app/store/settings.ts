import {TaskActions, TaskState, taskReducer} from './tasks';
import {ActionReducerMap} from '@ngrx/store';


export interface CoreState {
  taskState: TaskState;
}

export const CoreActionsTypes = {
  taskActions: TaskActions
};

export const CoreReducers: ActionReducerMap<CoreState> = {
  taskState: taskReducer
};


