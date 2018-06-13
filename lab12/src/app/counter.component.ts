import { Component, OnInit , Input, Output , EventEmitter} from '@angular/core';


@Component({
  selector: 'app-counter',
  template: `
    <p>
      Counter Component
    <button (click)="add()">+ </button> {{counterValue}} <button (click)="sub()">-</button>
    </p>
  `,
  styles: []
})
export class CounterComponent implements OnInit {
  @Input() counterValue :number;
  @Output() counterChange:EventEmitter<number>;
  constructor() { 
    
    this.counterValue = 0;
    this.counterChange = new EventEmitter();
  }

  ngOnInit() {
  }
  add() : void{
    this.counterValue = this.counterValue + 1;
    this.counterChange.emit(this.counterValue);
   
  }
  sub(): void{
    this.counterValue = this.counterValue - 1;
    this.counterChange.emit(this.counterValue);
  
  }
}
