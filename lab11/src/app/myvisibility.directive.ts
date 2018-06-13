import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appMyvisibility]'
})
export class MyvisibilityDirective {
  @Input('myvisibility') myvisibility;
  constructor( ) { 
    console.log("---->" + this.myvisibility);
  }

}
