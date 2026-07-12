import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-links',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-links.html',
  styleUrls: ['./profile-links.scss']
})
export class ProfileLinksComponent {

  links = [

    {
      title:'Resume',
      subtitle:'Download Resume',
      icon:'📄',
      url:'assets/resume/JASOBANTA_SAHOO_RESUME.pdf'
    },

    {
      title:'GitHub',
      subtitle:'View My Projects',
      icon:'💻',
      url:'https://github.com/yourusername'
    },

    {
      title:'LinkedIn',
      subtitle:'Lets Connect',
      icon:'💼',
      url:'https://linkedin.com/in/yourusername'
    },

    {
      title:'Email',
      subtitle:'Get In Touch',
      icon:'📧',
      url:'mailto:jasobantasahoo8623@gmail.com'
    }

  ];

}