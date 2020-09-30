import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketCompletedComponent } from './ticket-completed.component';

describe('TicketCompletedComponent', () => {
  let component: TicketCompletedComponent;
  let fixture: ComponentFixture<TicketCompletedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketCompletedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
