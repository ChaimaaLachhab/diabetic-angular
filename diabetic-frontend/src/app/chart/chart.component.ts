import {Component, AfterViewInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import { Chart, LinearScale, registerables } from 'chart.js';
import {Glycemie} from "../glycemie/model/glycemie";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements AfterViewInit, OnChanges {
  @Input() glycemies: Glycemie[] = [];
  private chartInstance: Chart<'bar'> | undefined;

  constructor() {
    Chart.register(...registerables);
    Chart.register(LinearScale);

    this.chartInstance = undefined;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['glycemies'] && !changes['glycemies'].firstChange) {
      this.updateChart();
    }
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
    console.log('glycemies:', this.glycemies);
    this.updateChart();
  }

  private updateChart() {
    console.log('Updating chart...');
    console.log('glycemies:', this.glycemies);

    const SEVERE_HYPOGLYCEMIA = 54;
    const MODERATE_HYPOGLYCEMIA = 70;
    const LOW_NORMAL = 90;
    const NORMAL = 110;
    const HIGH_NORMAL = 140;
    const MODERATE_HYPERGLYCEMIA = 180;

    const backgroundColors = this.glycemies.map(g => {
      if (g.value < SEVERE_HYPOGLYCEMIA) {
        return 'rgba(255, 99, 132, 0.2)'; // Severe Hypoglycemia
      } else if (g.value < MODERATE_HYPOGLYCEMIA) {
        return 'rgba(255, 159, 64, 0.2)'; // Moderate Hypoglycemia
      } else if (g.value < LOW_NORMAL) {
        return 'rgba(54, 162, 235, 0.2)'; // Low Normal
      } else if (g.value < NORMAL) {
        return 'rgba(75, 192, 192, 0.2)'; // Normal
      } else if (g.value < HIGH_NORMAL) {
        return 'rgba(153, 102, 255, 0.2)'; // High Normal
      } else if (g.value < MODERATE_HYPERGLYCEMIA) {
        return 'rgba(255, 206, 86, 0.2)'; // Moderate Hyperglycemia
      } else {
        return 'rgba(255, 99, 132, 0.2)'; // Severe Hyperglycemia
      }
    });

    const borderColors = this.glycemies.map(g => {
      if (g.value < SEVERE_HYPOGLYCEMIA) {
        return 'rgba(255, 99, 132, 1)'; // Severe Hypoglycemia
      } else if (g.value < MODERATE_HYPOGLYCEMIA) {
        return 'rgba(255, 159, 64, 1)'; // Moderate Hypoglycemia
      } else if (g.value < LOW_NORMAL) {
        return 'rgba(54, 162, 235, 1)'; // Low Normal
      } else if (g.value < NORMAL) {
        return 'rgba(75, 192, 192, 1)'; // Normal
      } else if (g.value < HIGH_NORMAL) {
        return 'rgba(153, 102, 255, 1)'; // High Normal
      } else if (g.value < MODERATE_HYPERGLYCEMIA) {
        return 'rgba(255, 206, 86, 1)'; // Moderate Hyperglycemia
      } else {
        return 'rgba(255, 99, 132, 1)'; // Severe Hyperglycemia
      }
    });

    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    if (this.chartInstance) {
      this.chartInstance.destroy();
    }

    this.chartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.glycemies.map(g => g.date.toISOString()),
        datasets: [{
          label: 'Valeurs de glycémie',
          backgroundColor: backgroundColors,
          borderColor: borderColors,
          data: this.glycemies.map(g => g.value),
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
