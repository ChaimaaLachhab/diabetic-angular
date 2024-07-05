import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatIconModule} from "@angular/material/icon";
import {HeaderComponent} from "./header/header.component";
import {HeroComponent} from "./hero/hero.component";
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";
import {FooterComponent} from "./footer/footer.component";
import {GlycemieListComponent} from "./glycemie-list/glycemie-list.component";
import {ServiceComponent} from "./service/service.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatIconModule, HeaderComponent, HeroComponent, AboutComponent, ContactComponent, FooterComponent, GlycemieListComponent, ServiceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'diabetic_angular';
}
