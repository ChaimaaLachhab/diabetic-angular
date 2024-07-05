import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import {Glycemie} from "../glycemie/model/glycemie";
import {GlycemieService} from "../glycemie/service/glycemie-service.service";
import {ChartComponent} from "../chart/chart.component";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-glycemie-list',
  templateUrl: './glycemie-list.component.html',
  styleUrl: './glycemie-list.component.css',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, ChartComponent, MatSlideToggleModule, MatIcon]
})
export class GlycemieListComponent implements OnInit {
  glycemies: Glycemie[] = [];

  constructor(private glycemieService: GlycemieService) { }

  ngOnInit(): void {
    this.glycemieService.findAll().subscribe(data => {
      this.glycemies = data.map(item => ({
        ...item,
        date: new Date(item.date)
      }));
      console.log(this.glycemies);
    });
  }

  deleteGlycemie(id: number): void {
    this.glycemieService.deleteGlycemie(id).subscribe(() => {
      this.glycemies = this.glycemies.filter(glycemie => glycemie.id !== id);
    });
  }
}
