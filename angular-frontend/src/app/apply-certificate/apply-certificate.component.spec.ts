import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyCertificateComponent } from './apply-certificate.component';

describe('ApplyCertificateComponent', () => {
  let component: ApplyCertificateComponent;
  let fixture: ComponentFixture<ApplyCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyCertificateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplyCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
