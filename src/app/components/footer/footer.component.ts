// src/app/components/footer/footer.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  standalone: false
  // THIS COMPONENT IS NOT STANDALONE
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}