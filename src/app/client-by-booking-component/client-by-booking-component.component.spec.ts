import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientByBookingComponentComponent } from './client-by-booking-component.component';

describe('ClientByBookingComponentComponent', () => {
  let component: ClientByBookingComponentComponent;
  let fixture: ComponentFixture<ClientByBookingComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientByBookingComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientByBookingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
