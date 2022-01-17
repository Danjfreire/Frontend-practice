import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerActivity } from './player-activity.component';

describe('PlayerActivityComponent', () => {
  let component: PlayerActivity;
  let fixture: ComponentFixture<PlayerActivity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerActivity ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerActivity);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
