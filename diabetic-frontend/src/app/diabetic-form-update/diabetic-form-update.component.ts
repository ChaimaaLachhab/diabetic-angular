import { Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {ActivatedRoute, Router, RouterOutlet} from '@angular/router';
import { DiabeticService } from '../diabetic/service/diabetic-service.service';
import { Diabetic } from '../diabetic/model/diabetic';

@Component({
  selector: 'app-diabetic-form-update',
  templateUrl: './diabetic-form-update.component.html',
  styleUrl: './diabetic-form-update.component.css',
  standalone: true,
  imports: [FormsModule, RouterOutlet, ReactiveFormsModule]
})
export class DiabeticFormUpdateComponent  implements OnInit {
  diabeticForm: FormGroup;
  id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private diabeticService: DiabeticService
  ) {
    this.diabeticForm = this.fb.group({
      name: ['', Validators.required],
      weight: ['', Validators.required],
      height: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      picture: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      this.id = idParam !== null ? +idParam : 0;
      this.loadUserDetails(this.id);
    });
  }

  loadUserDetails(id: number): void {
    this.diabeticService.getDiabetic(id).subscribe((data) => {
      this.diabeticForm.patchValue(data);
    });
  }

  onSubmit(): void {
    if (this.diabeticForm.valid) {
      this.diabeticService.updateDiabetic(this.id, this.diabeticForm.value).subscribe(() => {
        this.router.navigate(['/diabetics']);
      });
    }
  }
}
