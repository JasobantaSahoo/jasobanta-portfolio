import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.html',
  styleUrls: ['./education.scss']
})
export class EducationComponent {

  education = [

    {
      year: "2020 - Present",
      degree: "B.Tech in Computer Science Engineering",
      institute: "C.V. Raman Global University",
      score: "CGPA : 9.03"
    },

    {
      year: "2017 - 2019",
      degree: "Higher Secondary (PCM + IT)",
      institute: "Government Higher Secondary School",
      score: "74.5%"
    },

    {
      year: "2017",
      degree: "Secondary Education",
      institute: "Chinmaya Vidyalaya",
      score: "83%"
    }

  ];

}