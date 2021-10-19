import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Trial01Component } from './trial01.component';

describe('Trial01Component', () => {
  let component: Trial01Component;
  let fixture: ComponentFixture<Trial01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Trial01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Trial01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
