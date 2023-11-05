import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkinsonComponent } from './parkinson.component';

describe('ParkinsonComponent', () => {
  let component: ParkinsonComponent;
  let fixture: ComponentFixture<ParkinsonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParkinsonComponent]
    });
    fixture = TestBed.createComponent(ParkinsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
