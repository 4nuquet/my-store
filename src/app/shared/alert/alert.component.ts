import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  @Input() data;
  @Output() eventDeleteTask = new EventEmitter<number>();
  @Output() eventDoneTask = new EventEmitter<number>();
  @Output() eventEditTask = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }
}
