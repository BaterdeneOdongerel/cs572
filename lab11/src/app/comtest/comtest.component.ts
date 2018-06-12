import { Component, OnInit , Input, EventEmitter, Output, ViewChild} from '@angular/core';


@Component({
  selector: 'app-comtest',
  template: '<p> my new component ---- {{msg}} ----- {{value}}</p>' + 
  '<button (click)="decrease()"> - </button> <button (click)="start()"> Start </button>' + 
  '<input type="text" #myinput /> <button (click)="f(myinput)"></button>',
  styles: [' p{ color :red}']
})


export class ComtestComponent implements OnInit {
  @Input() msg : string;
  @Input() value:number;
  @Output() emitter:EventEmitter<string>;
  @ViewChild('myinput') MyInput;
  constructor() { 
    this.emitter = new EventEmitter();
  }

  ngOnInit() {
  }
  start() :void {
    this.emitter.emit("WWWWWWW EHEHEHEHEHEHHe WWW");
  }

  decrease(){
    this.value = this.value - 1;
    return false;

  }
  f(e){
    console.log(e.value);
  }


}
