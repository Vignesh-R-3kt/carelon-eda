import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapperViewComponent } from './mapper-view.component';

describe('MapperViewComponent', () => {
  let component: MapperViewComponent;
  let fixture: ComponentFixture<MapperViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapperViewComponent]
    });
    fixture = TestBed.createComponent(MapperViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
