import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ActivatedRoute, Router, RouterOutlet} from '@angular/router';
import { DiabeticService } from '../diabetic-service.service';
import { Diabetic } from '../../model/diabetic';

@Component({
  selector: 'app-user-form',
  templateUrl: './diabetic-form.component.html',
  styleUrls: ['./diabetic-form.component.css'],
  standalone: true,
  imports: [FormsModule, RouterOutlet]
})
export class DiabeticFormComponent {
  diabetic: Diabetic;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private diabeticService: DiabeticService
  ) {
    this.diabetic = new Diabetic();
  }

  onSubmit() {
    this.diabeticService.save(this.diabetic).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/diabrtics']);
  }
}
