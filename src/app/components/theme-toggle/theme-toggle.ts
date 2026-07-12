import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theme-toggle.html',
  styleUrls: ['./theme-toggle.scss']
})
export class ThemeToggleComponent {

  darkMode = true;

  toggleTheme() {

    this.darkMode = !this.darkMode;

    document.body.classList.toggle('light-theme');

  }

}