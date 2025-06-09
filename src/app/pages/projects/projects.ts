import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectDataService, Project } from '../../core/project-data.service';
import { ProjectCardComponent } from '../../shared/project-card.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class ProjectsComponent {
  projects: Project[] = [];

  constructor(private projectService: ProjectDataService) {
    this.projectService.getProjects().subscribe((projects) => {
      this.projects = projects;
    });
  }
}
