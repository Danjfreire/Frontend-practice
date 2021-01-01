import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumActivityComponent } from './forum-activity.component';

describe('ForumActivityComponent', () => {
  let component: ForumActivityComponent;
  let fixture: ComponentFixture<ForumActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
