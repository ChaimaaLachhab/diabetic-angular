import { Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {ActivatedRoute, Router, RouterOutlet} from '@angular/router';
import { DiabeticService } from '../diabetic/service/diabetic-service.service';
import { Diabetic } from '../diabetic/model/diabetic';

@Component({
  selector: 'app-diabetic-form',
  templateUrl: './diabetic-form.component.html',
  styleUrls: ['./diabetic-form.component.css'],
  standalone: true,
  imports: [FormsModule, RouterOutlet, ReactiveFormsModule]
})
export class DiabeticFormComponent  implements OnInit {
  diabeticForm: FormGroup;

  constructor(
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

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.diabeticForm.valid) {
      this.diabeticService.save(this.diabeticForm.value).subscribe(() => {
        this.router.navigate(['/diabetics']);
      });
    }
  }
}
