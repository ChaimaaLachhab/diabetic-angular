import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiabeticFormComponent } from '../diabetic-form/diabetic-form.component';

describe('DiabeticFormComponent', () => {
  let component: DiabeticFormComponent;
  let fixture: ComponentFixture<DiabeticFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiabeticFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiabeticFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
