import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrls: ['./about.scss']
})
export class AboutComponent {

  stats = [
    {
      title: 'CGPA',
      value: '9.03'
    },
    {
      title: 'Projects',
      value: '2+'
    },
    {
      title: 'Research',
      value: '1'
    },
    {
      title: 'Technologies',
      value: '10+'
    }
  ];

}