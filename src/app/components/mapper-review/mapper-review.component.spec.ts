import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapperReviewComponent } from './mapper-review.component';

describe('MapperReviewComponent', () => {
  let component: MapperReviewComponent;
  let fixture: ComponentFixture<MapperReviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapperReviewComponent]
    });
    fixture = TestBed.createComponent(MapperReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
