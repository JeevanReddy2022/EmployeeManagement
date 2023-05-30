import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveRejectCertificateComponent } from './approve-reject-certificate.component';

describe('ApproveRejectCertificateComponent', () => {
  let component: ApproveRejectCertificateComponent;
  let fixture: ComponentFixture<ApproveRejectCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproveRejectCertificateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApproveRejectCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
