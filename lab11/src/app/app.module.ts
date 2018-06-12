import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComtestComponent } from './comtest/comtest.component';
import { CounterComponent } from './counter.component';

@NgModule({
  declarations: [
    AppComponent,
    ComtestComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
