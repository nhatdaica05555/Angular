/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GlosbeComponent } from './glosbe.component';

describe('GlosbeComponent', () => {
  let component: GlosbeComponent;
  let fixture: ComponentFixture<GlosbeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlosbeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlosbeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
