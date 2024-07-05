import { Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {ActivatedRoute, Router, RouterOutlet} from '@angular/router';
import { DiabeticService } from '../diabetic/service/diabetic-service.service';
import { Diabetic } from '../diabetic/model/diabetic';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-diabetic-form',
  templateUrl: './diabetic-form.component.html',
  styleUrls: ['./diabetic-form.component.css'],
  standalone: true,
  imports: [FormsModule, RouterOutlet, ReactiveFormsModule, NgOptimizedImage]
})
export class DiabeticFormComponent  implements OnInit {
  diabeticForm: FormGroup;
  imgPreview: string = 'http://bootdey.com/img/Content/avatar/avatar1.png';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private diabeticService: DiabeticService
  ) {
    this.diabeticForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      type: ['', Validators.required],
      weight: ['', Validators.required],
      height: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      picture: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  updateImagePreview(): void {
    this.imgPreview = this.diabeticForm.get('picture')?.value || 'http://bootdey.com/img/Content/avatar/avatar1.png';
  }

  onSubmit(): void {

      this.diabeticService.save(this.diabeticForm.value).subscribe(() => {
        this.router.navigate(['/diabetics']);
      });

  }
}
