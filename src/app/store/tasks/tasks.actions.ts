import { Action } from '@ngrx/store';
import { Task } from '../../models/Task';

const NAMESPACE = '[TASK-ACTION]';

export const Types = {
  CreateTask: `${NAMESPACE} - Create a new task`,
  EditTask: `${NAMESPACE} - Edit a task`,
  DeleteTask: `${NAMESPACE} - Delete a task`,
  DoneTask: `${NAMESPACE} - Checked as done task`
};

export class CreateTask implements Action {
  readonly type = Types.CreateTask;
  constructor(public payload: Task) {}
}

export class EditTask implements Action {
  readonly type = Types.EditTask;
  constructor(public payload: any) {}
}

export class DeleteTask implements Action {
  readonly type = Types.DeleteTask;
  constructor(public payload: number) {}
}

export class DoneTask implements Action {
  readonly type = Types.DoneTask;
  constructor(public payload: number) {}
}

export type TaskActions = CreateTask | EditTask | DeleteTask | DoneTask;
