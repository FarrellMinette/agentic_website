import { TestBed } from '@angular/core/testing';
import { ResidentialGalleryComponent } from './residential-gallery.component';

describe('ResidentialGalleryComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResidentialGalleryComponent]
    }).compileComponents();
  });

  it('cycles images with next and prev', () => {
    const fixture = TestBed.createComponent(ResidentialGalleryComponent);
    const comp = fixture.componentInstance;

    expect(comp.index()).toBe(0);
    comp.next();
    expect(comp.index()).toBe(1);
    comp.prev();
    expect(comp.index()).toBe(0);
  });
});
