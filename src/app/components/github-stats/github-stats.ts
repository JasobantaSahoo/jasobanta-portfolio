import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-github-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './github-stats.html',
  styleUrls: ['./github-stats.scss']
})
export class GithubStatsComponent {

  stats = [

    {
      title:'Repositories',
      value:'Coming Soon',
      icon:'📁'
    },

    {
      title:'Commits',
      value:'Coming Soon',
      icon:'🚀'
    },

    {
      title:'Stars',
      value:'Coming Soon',
      icon:'⭐'
    },

    {
      title:'Languages',
      value:'Coming Soon',
      icon:'💻'
    }

  ];

}