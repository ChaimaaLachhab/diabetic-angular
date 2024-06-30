import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {ActivatedRoute, Router, RouterOutlet} from '@angular/router';
import { GlycemieService } from '../glycemie/service/glycemie-service.service';
import { Glycemie } from '../glycemie/model/glycemie';
import {DiabeticService} from "../diabetic/service/diabetic-service.service";

@Component({
  selector: 'app-glycemie-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterOutlet
  ],
  templateUrl: './glycemie-form.component.html',
  styleUrl: './glycemie-form.component.css',
})
export class GlycemieFormComponent  implements OnInit {
  glycemieForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private glycemieService: GlycemieService
  ) {
    this.glycemieForm = this.fb.group({
      value: ['', Validators.required],
      date: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.glycemieForm.valid) {
      this.glycemieService.save(this.glycemieForm.value).subscribe(() => {
        this.router.navigate(['/glycemies']);
      });
    }
  }

}
