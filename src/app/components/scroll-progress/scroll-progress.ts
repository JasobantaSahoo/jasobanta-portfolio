import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scroll-progress',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scroll-progress.html',
  styleUrls: ['./scroll-progress.scss']
})
export class ScrollProgressComponent {

  progress = 0;

  @HostListener('window:scroll')
  onScroll() {

    const scrollTop = window.scrollY;

    const height =
      document.documentElement.scrollHeight - window.innerHeight;

    this.progress = (scrollTop / height) * 100;

  }

}