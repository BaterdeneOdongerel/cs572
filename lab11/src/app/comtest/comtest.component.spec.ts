import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComtestComponent } from './comtest.component';

describe('ComtestComponent', () => {
  let component: ComtestComponent;
  let fixture: ComponentFixture<ComtestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComtestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
