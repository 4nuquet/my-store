import { Component, OnInit, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { Task } from 'src/app/models/Task';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {


  @Input() task;
  @Output() eventSubmitForm: EventEmitter<Task> = new EventEmitter<Task>();
  @ViewChild('formTask') formTask: NgForm;

  taskForm = new FormGroup({
      title: new FormControl(''),
      info: new FormControl(''),
      done: new FormControl(''),
      id: new FormControl('')
  });

  constructor() {
  }

  ngOnInit() {
    if (!this.task) {
      this.task = {
        title: '',
        info: '',
        done: '',
        id: ''
      };
    }
  }

  submitTask() {
    this.taskForm.setValue({
      title: this.taskForm.get('title').value || this.task.title,
      info: this.taskForm.get('info').value || this.task.info,
      done: this.task.done,
      id: this.task.id ? this.task.id : Math.floor(Math.random() * (99 - 1) + 1)
    });
    this.eventSubmitForm.emit(this.taskForm.value);
    this.formTask.reset();
  }

}
