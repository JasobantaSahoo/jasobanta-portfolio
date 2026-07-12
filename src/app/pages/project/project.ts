import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './project.html',
  styleUrls: ['./project.scss']
})
export class ProjectComponent {

  projectId!: number;
  project: any;

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

      overview:
      "PG-Life helps users search affordable PG accommodations based on location and budget.",

      features:[
        "Location Search",
        "Budget Filter",
        "User Login",
        "Property Details",
        "Responsive Design"
      ],

      challenges:
      "Building dynamic filtering and maintaining database consistency.",

      future:
      "Payment Gateway, Maps Integration and AI Recommendation."
    },

    {
      id:2,

      title:"Hostel Record Management System",

      image:"assets/projects/hostel.jpg",

      technologies:[
        "C",
        "File Handling"
      ],

      overview:
      "Desktop application to maintain hostel records.",

      features:[
        "Student Records",
        "Search",
        "Update",
        "Delete"
      ],

      challenges:
      "Efficient file handling.",

      future:
      "Database version with GUI."
    }

  ];

  constructor(private route:ActivatedRoute){

    this.projectId = Number(
      this.route.snapshot.paramMap.get('id')
    );

    this.project =
      this.projects.find(
        x=>x.id===this.projectId
      );

  }

}