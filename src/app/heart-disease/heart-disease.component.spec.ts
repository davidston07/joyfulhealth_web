import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeartDiseaseComponent } from './heart-disease.component';

describe('HeartDiseaseComponent', () => {
  let component: HeartDiseaseComponent;
  let fixture: ComponentFixture<HeartDiseaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeartDiseaseComponent]
    });
    fixture = TestBed.createComponent(HeartDiseaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
