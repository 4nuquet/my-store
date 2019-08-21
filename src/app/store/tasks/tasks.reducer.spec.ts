import { TestBed } from '@angular/core/testing';
import { Store, StoreModule   } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import * as fromTasks from './tasks.reducer';
import { TaskState } from './tasks.state';
import * as TaskActions from './tasks.actions';

describe('A Task Reducer', () => {

  let store: MockStore<TaskState>;

  const{ initialState } = fromTasks;

  const mockTask = {
    id: 1,
    title: 'Task 4',
    info: 'MockTest',
    done: false
  };


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({task: fromTasks.taskReducer})
      ],
      providers: [
        provideMockStore({initialState})
      ],
    });

    store = TestBed.get(Store);
  });

  it('should Return initialState', () => {
    let action = {type: 'ANY'} as any;
    let state = fromTasks.taskReducer(undefined, action);

    expect(state).toBe(initialState);
  });

  it('shoul Create new Task', () => {
    let action = new TaskActions.CreateTask(mockTask);
    let state = fromTasks.taskReducer(initialState, action);

    expect(state.tasks.length).toBeGreaterThan(initialState.tasks.length);
    expect(state.tasks.pop()).toEqual(mockTask);
  });
  it('should Delete a Task', () => {
    let action = new TaskActions.DeleteTask(1);
    let state = fromTasks.taskReducer(initialState, action);

    expect(state.tasks.length).toBeLessThan(initialState.tasks.length);
  });

  it('should Return edited Task', () => {

    let action  = new TaskActions.EditTask(mockTask);
    let state = fromTasks.taskReducer(initialState, action);
    expect(state.tasks).toContain(jasmine.objectContaining(mockTask));
  });

  it('should Return Done Task', () => {
    let action = new TaskActions.DoneTask(1);
    let state = fromTasks.taskReducer(initialState, action);

    expect(state.tasks[0].done).toEqual(true);
  });

});
