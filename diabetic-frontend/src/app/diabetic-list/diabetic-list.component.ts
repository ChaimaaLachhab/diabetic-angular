import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiabeticService } from '../diabetic/service/diabetic-service.service';
import { Diabetic } from '../diabetic/model/diabetic';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-diabetic-list',
  templateUrl: './diabetic-list.component.html',
  styleUrls: ['./diabetic-list.component.css'],
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink]
})
export class DiabeticListComponent implements OnInit {
  diabetics: Diabetic[] = [];

  constructor(private diabeticService: DiabeticService) { }

  ngOnInit(): void {
    this.diabeticService.findAll().subscribe(data => {
      this.diabetics = data;
    });
  }

  deleteDiabetic(id: number): void {
    this.diabeticService.deleteDiabetic(id).subscribe(() => {
      this.diabetics = this.diabetics.filter(user => user.id !== id);
    });
  }
}
