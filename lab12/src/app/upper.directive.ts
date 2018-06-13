import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appUpper]'
})
export class UpperDirective {

  constructor(private e: ElementRef, private r: Renderer) { 
    //e.nativeElement.style.fontSize = '22px'
    r.setElementStyle(e.nativeElement, 'font-size', '14px')
    r.setElementStyle(e.nativeElement , 'text-transform', 'uppercase');
  }
}
