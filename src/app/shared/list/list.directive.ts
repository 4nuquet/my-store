import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appList]'
})
export class ListDirective {

  constructor(public tpl: TemplateRef<any>) { }

}
