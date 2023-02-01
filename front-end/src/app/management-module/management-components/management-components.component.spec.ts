import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementComponentsComponent } from './management-components.component';

describe('ManagementComponentsComponent', () => {
  let component: ManagementComponentsComponent;
  let fixture: ComponentFixture<ManagementComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
