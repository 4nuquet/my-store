import { Component, OnInit, Input, Output, ViewChild, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {


  @Input() data: object;
  @Output() eventSubmitModal: EventEmitter<object> = new EventEmitter<object>();
  @ViewChild('btnCloseModal') btnCloseModal: ElementRef;

  constructor() {

  }

  ngOnInit() {
  }

  submitModal(submittedTask: object): void {
    this.eventSubmitModal.emit(submittedTask);
    this.btnCloseModal.nativeElement.click();
  }


}
