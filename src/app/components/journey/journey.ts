import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-journey',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './journey.html',
  styleUrls: ['./journey.scss']
})
export class JourneyComponent {

  timeline = [

    {
      year: "2020",
      title: "Started B.Tech",
      description: "Began Computer Science Engineering at CV Raman Global University."
    },

    {
      year: "2022",
      title: "Started Web Development",
      description: "Learned HTML, CSS, JavaScript and built frontend applications."
    },

    {
      year: "2023",
      title: "Research Work",
      description: "Blockchain based secure online voting research."
    },

    {
      year: "2024",
      title: "Full Stack Development",
      description: "Built projects using PHP, MySQL and modern web technologies."
    },

    {
      year: "2025",
      title: "GenAI Journey",
      description: "Learning RAG, LLMs, LangChain, Docker, Kubernetes and AI Engineering."
    }

  ];

}