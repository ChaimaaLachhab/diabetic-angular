import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {Glycemie} from "../glycemie/model/glycemie";

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {

  protected readonly RouterLink = RouterLink;
  protected readonly Glycemie = Glycemie;
}
