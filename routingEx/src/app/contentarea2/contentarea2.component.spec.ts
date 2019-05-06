import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Contentarea2Component } from './contentarea2.component';

describe('Contentarea2Component', () => {
  let component: Contentarea2Component;
  let fixture: ComponentFixture<Contentarea2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Contentarea2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Contentarea2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
