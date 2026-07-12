import { Component, signal , OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import AOS from 'aos';
import { LoaderComponent } from './components/loader/loader';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule,
    RouterOutlet,
    LoaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit{
  protected readonly title = signal('jasobanta-portfolio');

   ngOnInit(): void 
   {
    this.aos_thing();
    this.loading_func();
   
  }

  loading=true;

  private aos_thing(): void
  {
     AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out'
    });
  }

  private loading_func(): void
  { 
    setTimeout(()=>{

    this.loading=false;

    },2500);

  }
  
}
