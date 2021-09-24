import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRefinementsComponent } from './product-refinements.component';

describe('ProductRefinementsComponent', () => {
  let component: ProductRefinementsComponent;
  let fixture: ComponentFixture<ProductRefinementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductRefinementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductRefinementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
