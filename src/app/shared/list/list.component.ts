import { Component, ContentChildren, QueryList } from '@angular/core';
import { ListDirective } from './list.directive';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @ContentChildren(ListDirective) items: QueryList<ListDirective>;
}
