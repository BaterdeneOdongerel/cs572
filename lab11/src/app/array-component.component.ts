import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-array-component',
  template: `
    <p>
      Lab 12
      Array Component
    </p>
  Upper Directive   
  <ul appUpper>
    <li appMycolor (myemiiter)="myemiiter($event)" *ngFor="let item of array; let i = index">{{item}}</li>
  </ul>
  <div appMyvisibility myvisibility='true' >My visibility directive</div>
  <h1 > last emitted Color is {{lastColor}}</h1>
  `,
  styles: []
})
export class ArrayComponentComponent implements OnInit {
  @Input() array : Array<string>
  @Input('myvisibility') vis = "gggggggggg";
  @Input() lastColor : string;
  constructor() { 
    this.array = new Array();
    this.array.push(" color directive Apple");
    this.array.push(" color directive Lemon");
    this.array.push(" color directive Orange");
    this.array.push(" color directive Peel");
    this.array.push(" color directive Cherry");
  }

  ngOnInit() {

  }
  myemiiter(e): void{
    console.log("========>" + e);
    this.lastColor = e;
  }
}
