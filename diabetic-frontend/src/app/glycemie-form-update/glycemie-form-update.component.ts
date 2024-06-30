import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute, Router, RouterOutlet} from "@angular/router";
import {GlycemieService} from "../glycemie/service/glycemie-service.service";

@Component({
  selector: 'app-glycemie-form-update',
  standalone: true,
    imports: [
        ReactiveFormsModule,
        RouterOutlet
    ],
  templateUrl: './glycemie-form-update.component.html',
  styleUrl: './glycemie-form-update.component.css'
})
export class GlycemieFormUpdateComponent implements OnInit {
  glycemieForm: FormGroup;
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private glycemieService: GlycemieService
  ) {
    this.glycemieForm = this.fb.group({
      value: ['', Validators.required],
      date: ['', Validators.required],
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
    this.glycemieService.getGlycemie(id).subscribe((data) => {
      this.glycemieForm.patchValue(data);
    });
  }

  onSubmit(): void {
    if (this.glycemieForm.valid) {
      this.glycemieService.updateGlycemie(this.id, this.glycemieForm.value).subscribe(() => {
        this.router.navigate(['/glycemies']);
      });
    }
  }
}
