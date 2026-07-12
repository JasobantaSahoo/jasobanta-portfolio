import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollProgress } from './scroll-progress';

describe('ScrollProgress', () => {
  let component: ScrollProgress;
  let fixture: ComponentFixture<ScrollProgress>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollProgress]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollProgress);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
