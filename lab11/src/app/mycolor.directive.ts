import { Directive, HostListener, ElementRef, Renderer, Input, Output, EventEmitter } from '@angular/core';
import { EmitterVisitorContext } from '@angular/compiler';

@Directive({
  selector: '[appMycolor]'
})

export class MycolorDirective {
  
  color: Array<string> = ['red', 'green' , 'yellow' , 'black' , 'blue'];
  @Output('myemiiter') myemiiter : EventEmitter<string>;

  constructor(private e: ElementRef, private r: Renderer) { 
    this.myemiiter = new EventEmitter(); 
  }

  @HostListener('click') foo(){ 
    let id:number = Math.floor(Math.random() * 5) ;
    this.myemiiter.emit(this.color[id]);
    this.e.nativeElement.style.color = this.color[id];
  }
  
}
