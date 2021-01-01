import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroActivityComponent } from './hero-activity.component';

describe('HeroActivityComponent', () => {
  let component: HeroActivityComponent;
  let fixture: ComponentFixture<HeroActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
