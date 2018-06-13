import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<h1> Lab 12 Angular</h1>' +
  '<app-array-component> </app-array-component>' ,
  styles: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(){
  }
}
