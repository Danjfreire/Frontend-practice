import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionsMenuComponent } from './subscriptions-menu.component';

describe('SubscriptionsMenuComponent', () => {
  let component: SubscriptionsMenuComponent;
  let fixture: ComponentFixture<SubscriptionsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriptionsMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
