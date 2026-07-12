import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mouse-glow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mouse-glow.html',
  styleUrls: ['./mouse-glow.scss']
})
export class MouseGlowComponent {

  x = 0;
  y = 0;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {

    this.x = event.clientX;

    this.y = event.clientY;

  }

}