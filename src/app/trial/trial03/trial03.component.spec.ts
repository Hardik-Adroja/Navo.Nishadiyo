import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Trial03Component } from './trial03.component';

describe('Trial03Component', () => {
  let component: Trial03Component;
  let fixture: ComponentFixture<Trial03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Trial03Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Trial03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
