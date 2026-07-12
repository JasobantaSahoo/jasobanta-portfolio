import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-featured-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './featured-project.html',
  styleUrls: ['./featured-project.scss']
})
export class FeaturedProjectComponent {

  project = {

    title: 'PG-Life Accommodation Finder',

    subtitle: 'Featured Project',

    image: 'assets/projects/pglife-banner.jpg',

    description:
      'A full-stack web application that helps users find affordable PG accommodations based on budget and location. The application provides user authentication, property listings, search functionality, and responsive design.',

    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'PHP',
      'MySQL'
    ],

    github: '#',

    liveDemo: '#'

  };

}