import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chatbot.html',
  styleUrls: ['./chatbot.scss']
})
export class ChatbotComponent {

  isOpen = false;

  userMessage = "";

  messages = [

    {
      sender: "bot",
      text: "👋 Hi! I'm Jasobanta's AI Assistant."
    },

    {
      sender: "bot",
      text: "AI integration is coming soon. Feel free to explore the portfolio!"
    }

  ];

  toggleChat() {
    this.isOpen = !this.isOpen;
  }

  sendMessage() {

    if (!this.userMessage.trim()) return;

    this.messages.push({
      sender: "user",
      text: this.userMessage
    });

    this.userMessage = "";

    setTimeout(() => {

      this.messages.push({
        sender: "bot",
        text: "🚀 AI Assistant is under development."
      });

    }, 500);

  }

}