import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HitSectionComponent } from './hit-section.component';

describe('HitSectionComponent', () => {
  let component: HitSectionComponent;
  let fixture: ComponentFixture<HitSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HitSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HitSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
