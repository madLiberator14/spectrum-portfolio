import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../core/project-data.service';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="project">
      <h3>{{ project.title }}</h3>
      <p>{{ project.description }}</p>
      <div *ngIf="project.technologies?.length" class="tech-list">
        <span *ngFor="let tech of project.technologies" class="tech">{{ tech }}</span>
      </div>
      <a *ngIf="project.github" [href]="project.github" class="github-link" target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>
      <img *ngIf="project.image" [src]="project.image" alt="Project image" class="project-img" />
    </div>
  `,
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  @Input() project!: Project;
}
