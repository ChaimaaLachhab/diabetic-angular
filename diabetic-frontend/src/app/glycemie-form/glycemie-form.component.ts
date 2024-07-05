import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router, RouterOutlet} from '@angular/router';
import { GlycemieService } from '../glycemie/service/glycemie-service.service';

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
    console.log(this.glycemieForm.value); // Vérifiez la sortie dans la console du navigateur
    if (this.glycemieForm.valid) {
      this.glycemieService.save(this.glycemieForm.value).subscribe(() => {
        this.router.navigate(['/glycemies']);
      });
    }
  }
}
