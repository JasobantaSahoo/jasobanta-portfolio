import {
  Component,
  Input,
  OnInit
} from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-animated-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animated-counter.html',
  styleUrls: ['./animated-counter.scss']
})
export class AnimatedCounterComponent implements OnInit {

  @Input() target = 100;

  @Input() duration = 2000;

  @Input() suffix = '';

  count = 0;

  ngOnInit(): void {

    const interval = 20;

    const steps = this.duration / interval;

    const increment = this.target / steps;

    const timer = setInterval(() => {

      this.count += increment;

      if (this.count >= this.target) {

        this.count = this.target;

        clearInterval(timer);

      }

    }, interval);

  }

}