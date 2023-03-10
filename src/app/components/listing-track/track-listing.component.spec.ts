import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TrackListingComponent} from './track-listing.component';

describe('TrackListingComponent', () => {
  let component: TrackListingComponent;
  let fixture: ComponentFixture<TrackListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrackListingComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TrackListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
