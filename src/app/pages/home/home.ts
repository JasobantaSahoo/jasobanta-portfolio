import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrollProgressComponent } from '../../components/scroll-progress/scroll-progress';
import { NavbarComponent } from '../../components/navbar/navbar';
import { HeroComponent } from '../../components/hero/hero';
import { AboutComponent } from '../../components/about/about';
import { SkillsComponent } from '../../components/skills/skills';
import { EducationComponent } from '../../components/education/education';
import { JourneyComponent } from '../../components/journey/journey';
import { ProjectsComponent } from '../../components/projects/projects';
import { ContactComponent } from '../../components/contact/contact';
import { Footer } from '../../components/footer/footer';
import { ChatbotComponent } from '../../components/chatbot/chatbot';
import { AchievementsComponent } from '../../components/achievements/achievements';
import { TechStackComponent } from '../../components/tech-stack/tech-stack';
import { FeaturedProjectComponent } from '../../components/featured-project/featured-project';
import { GithubStatsComponent } from '../../components/github-stats/github-stats';
import { ProfileLinksComponent } from '../../components/profile-links/profile-links';
import { ThemeToggleComponent } from '../../components/theme-toggle/theme-toggle';
import { MouseGlowComponent } from '../../components/mouse-glow/mouse-glow';

@Component({
  selector: 'app-home',
  imports: [CommonModule,NavbarComponent,HeroComponent,AboutComponent,SkillsComponent,EducationComponent
    ,JourneyComponent,ProjectsComponent,ContactComponent,Footer,ChatbotComponent,AchievementsComponent
    ,TechStackComponent,FeaturedProjectComponent,GithubStatsComponent,ProfileLinksComponent,ScrollProgressComponent
    ,ThemeToggleComponent,MouseGlowComponent
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
