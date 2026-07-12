import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseGlow } from './mouse-glow';

describe('MouseGlow', () => {
  let component: MouseGlow;
  let fixture: ComponentFixture<MouseGlow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MouseGlow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MouseGlow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
