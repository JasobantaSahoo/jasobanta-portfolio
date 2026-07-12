import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './achievements.html',
  styleUrls: ['./achievements.scss']
})
export class AchievementsComponent {

  achievements = [

    {
      title: 'B.Tech CGPA',
      value: '9.03',
      icon: '🎓',
      description: 'Maintained excellent academic performance.'
    },

    {
      title: 'Research Work',
      value: 'Blockchain Voting',
      icon: '📚',
      description: 'Worked on secure online voting using Blockchain.'
    },

    {
      title: 'Projects',
      value: '2+',
      icon: '💻',
      description: 'Academic and Full Stack Development projects.'
    },

    {
      title: 'Learning',
      value: 'GenAI',
      icon: '🤖',
      description: 'Currently exploring RAG, LLMs and AI Engineering.'
    }

  ];

}