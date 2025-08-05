// src/app/app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false // Required for NgModule-based components in Angular v19+
})
export class AppComponent {
  title = 'iQueTechnology-Client';
}