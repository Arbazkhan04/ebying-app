import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAnalysticComponent } from './product-analystic.component';

describe('ProductAnalysticComponent', () => {
  let component: ProductAnalysticComponent;
  let fixture: ComponentFixture<ProductAnalysticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductAnalysticComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductAnalysticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
