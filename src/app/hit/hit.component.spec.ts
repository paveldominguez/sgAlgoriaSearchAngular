import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HitComponent } from './hit.component';

describe('HitComponent', () => {
  let component: HitComponent;
  let fixture: ComponentFixture<HitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
