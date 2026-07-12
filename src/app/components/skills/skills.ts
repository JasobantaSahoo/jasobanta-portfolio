import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.scss']
})
export class SkillsComponent {

  skillCategories = [

    {
      title: 'Programming',
      skills: [
        'Java',
        'Python',
        'C'
      ]
    },

    {
      title: 'Frontend',
      skills: [
        'HTML',
        'CSS',
        'Angular'
      ]
    },

    {
      title: 'Backend',
      skills: [
        'PHP',
        'MySQL'
      ]
    },

    {
      title: 'Technologies',
      skills: [
        'Blockchain',
        'Cloud',
        'Hadoop',
        'Git',
        'GitHub'
      ]
    }

  ];

}