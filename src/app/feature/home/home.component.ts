import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { CoreState } from 'src/app/store/settings';
import { Task } from 'src/app/models/Task';
import { CreateTask, DeleteTask, DoneTask, EditTask } from 'src/app/store/tasks/tasks.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  todos$: Observable<any>;
  data: object;

  constructor(private store: Store<CoreState>) {
    this.todos$ = this.store.select( state => state.taskState.tasks);
  }

  ngOnInit() {
    this.todos$.subscribe(task => console.log(task));
  }

  createNewTask(newTask: Task) {
    this.store.dispatch( new CreateTask(newTask));
  }
  deleteTask(index: number) {
    this.store.dispatch(new DeleteTask(index));
  }
  doneTask(index: number) {
    this.store.dispatch(new DoneTask(index));
  }

  editTask(task) {
    this.store.dispatch(new EditTask(task));
  }

}
