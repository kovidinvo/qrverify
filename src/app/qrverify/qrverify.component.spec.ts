import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrverifyComponent } from './qrverify.component';

describe('QrverifyComponent', () => {
  let component: QrverifyComponent;
  let fixture: ComponentFixture<QrverifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrverifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QrverifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
