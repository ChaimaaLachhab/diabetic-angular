import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiabeticFormUpdateComponent } from './diabetic-form-update.component';

describe('DiabeticFormUpdateComponent', () => {
  let component: DiabeticFormUpdateComponent;
  let fixture: ComponentFixture<DiabeticFormUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiabeticFormUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiabeticFormUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
