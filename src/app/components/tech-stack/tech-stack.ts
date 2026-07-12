import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tech-stack.html',
  styleUrls: ['./tech-stack.scss']
})
export class TechStackComponent {

  technologies = [

    {
      name:'Angular',
      icon:'fab fa-angular'
    },

    {
      name:'Java',
      icon:'fab fa-java'
    },

    {
      name:'Python',
      icon:'fab fa-python'
    },

    {
      name:'HTML5',
      icon:'fab fa-html5'
    },

    {
      name:'CSS3',
      icon:'fab fa-css3-alt'
    },

    {
      name:'Git',
      icon:'fab fa-git-alt'
    },

    {
      name:'Github',
      icon:'fab fa-github'
    },

    {
      name:'Database',
      icon:'fas fa-database'
    },

    {
      name:'Cloud',
      icon:'fas fa-cloud'
    },

    {
      name:'Docker',
      icon:'fab fa-docker'
    },

    {
      name:'AI',
      icon:'fas fa-robot'
    },

    {
      name:'Blockchain',
      icon:'fas fa-link'
    }

  ];

}