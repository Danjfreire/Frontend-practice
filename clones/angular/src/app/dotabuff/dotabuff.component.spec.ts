import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotabuffComponent } from './dotabuff.component';

describe('LayoutComponent', () => {
  let component: DotabuffComponent;
  let fixture: ComponentFixture<DotabuffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DotabuffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DotabuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
