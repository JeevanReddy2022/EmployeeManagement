import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateReportComponent } from './certificate-report.component';

describe('CertificateReportComponent', () => {
  let component: CertificateReportComponent;
  let fixture: ComponentFixture<CertificateReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificateReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificateReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
