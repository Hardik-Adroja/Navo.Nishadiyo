import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Trial02Component } from './trial02.component';

describe('Trial02Component', () => {
  let component: Trial02Component;
  let fixture: ComponentFixture<Trial02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Trial02Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Trial02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
