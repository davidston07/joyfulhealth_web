import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuicideModComponent } from './suicide-mod.component';

describe('SuicideModComponent', () => {
  let component: SuicideModComponent;
  let fixture: ComponentFixture<SuicideModComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuicideModComponent]
    });
    fixture = TestBed.createComponent(SuicideModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
