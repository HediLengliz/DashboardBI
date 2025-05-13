import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalAmountByYearComponentComponent } from './total-amount-by-year-component.component';

describe('TotalAmountByYearComponentComponent', () => {
  let component: TotalAmountByYearComponentComponent;
  let fixture: ComponentFixture<TotalAmountByYearComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalAmountByYearComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalAmountByYearComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
