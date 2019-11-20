import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {confrmPassword} from './confrmpass.component';

describe('ConfrmpassComponent', () => {
  let component: confrmPassword;
  let fixture: ComponentFixture<confrmPassword>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ confrmPassword ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(confrmPassword);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
