import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductListComponent } from './add-product-list.component';

describe('AddProductListComponent', () => {
  let component: AddProductListComponent;
  let fixture: ComponentFixture<AddProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddProductListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
