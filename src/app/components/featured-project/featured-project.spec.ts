import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedProjectComponent } from './featured-project';

describe('FeaturedProject', () => {
  let component: FeaturedProjectComponent;
  let fixture: ComponentFixture<FeaturedProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
