import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiabeticService } from '../diabetic-service.service';
import { Diabetic } from '../../model/diabetic';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink]
})
export class DiabeticListComponent implements OnInit {
  diabetics: Diabetic[] = [];

  constructor(private userService: DiabeticService) { }

  ngOnInit(): void {
    this.userService.findAll().subscribe(data => {
      this.diabetics = data;
    });
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(() => {
      this.diabetics = this.diabetics.filter(user => user.id !== id);
    });
  }
}
