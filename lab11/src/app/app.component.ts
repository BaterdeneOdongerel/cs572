import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<h1> Lab 11 Angular</h1>' +
  '<app-counter (counterChange)="counterC($event)" ></app-counter>' + 
  ' Component Counter Value ={{componentCounterValue}} ',
  styles: ['./app.component.css'],
  inputs: ['msg']
})
export class AppComponent {
  title = 'app';
  mymessage = "mymessage yahoo";
  msg : string;
  value : number;
  componentCounterValue : string;
  constructor(){
    this.msg = "WWWWWWWWWw";
    this.value = 0;
  }

  increase(){
    this.value = this.value + 1;
    return false;
  }

  emitter(e :string){
    console.log(e);
  }

  counterC(e:string){
    console.log(e);
    this.componentCounterValue = e;
  }


}
