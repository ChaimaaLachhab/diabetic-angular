import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlycemieFormUpdateComponent } from './glycemie-form-update.component';

describe('GlycemieFormUpdateComponent', () => {
  let component: GlycemieFormUpdateComponent;
  let fixture: ComponentFixture<GlycemieFormUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlycemieFormUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GlycemieFormUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
