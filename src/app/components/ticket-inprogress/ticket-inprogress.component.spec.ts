import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketInprogressComponent } from './ticket-inprogress.component';

describe('TicketInprogressComponent', () => {
  let component: TicketInprogressComponent;
  let fixture: ComponentFixture<TicketInprogressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketInprogressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketInprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
