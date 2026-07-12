import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theme-toggle.html',
  styleUrls: ['./theme-toggle.scss']
})
export class ThemeToggleComponent implements OnInit {

  darkMode = true;

  ngOnInit(): void {

    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'light') {
      this.darkMode = false;
      document.body.classList.add('light-theme');
    }

  }

  toggleTheme(): void {

    this.darkMode = !this.darkMode;

    document.body.classList.toggle('light-theme');

    localStorage.setItem(
      'theme',
      this.darkMode ? 'dark' : 'light'
    );

  }

}