import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedataComponent } from './savedata.component';

describe('SavedataComponent', () => {
  let component: SavedataComponent;
  let fixture: ComponentFixture<SavedataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
