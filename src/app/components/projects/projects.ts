import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
})
export class ProjectsComponent {

  projects = [

    {
      id:1,
      title:"PG-Life Accommodation Finder",
      image:"assets/projects/pglife.jpg",
      technologies:[
        "HTML",
        "CSS",
        "JavaScript",
        "PHP",
        "MySQL"
      ],
      description:"Find affordable PG accommodations based on budget and location."
    },

    {
      id:2,
      title:"Hostel Record Management System",
      image:"assets/projects/hostel.jpg",
      technologies:[
        "C",
        "File Handling"
      ],
      description:"Desktop application to manage hostel student records."
    }

  ];

}