import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveRejectTrainingComponent } from './approve-reject-training.component';

describe('ApproveRejectTrainingComponent', () => {
  let component: ApproveRejectTrainingComponent;
  let fixture: ComponentFixture<ApproveRejectTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproveRejectTrainingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApproveRejectTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
