import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class ContactComponent {

  contacts = [

    {
      icon: "📧",
      title: "Email",
      value: "jasobantasahoo8623@gmail.com",
      link: "mailto:jasobantasahoo8623@gmail.com"
    },

    {
      icon: "📱",
      title: "Phone",
      value: "+91 8249522792",
      link: "tel:+918249522792"
    },

    {
      icon: "💻",
      title: "GitHub",
      value: "github.com/yourusername",
      link: "https://github.com/yourusername"
    },

    {
      icon: "💼",
      title: "LinkedIn",
      value: "linkedin.com/in/yourusername",
      link: "https://linkedin.com/in/yourusername"
    }

  ];

}