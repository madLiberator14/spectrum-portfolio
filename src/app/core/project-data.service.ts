import { Injectable } from '@angular/core';

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies?: string[];
  github?: string;
  image?: string;
}

@Injectable({ providedIn: 'root' })
export class ProjectDataService {
  private projects: Project[] = [
    {
      id: '1',
      title: 'Project One',
      description: 'Project for Remote Doctor Appointment.',
      technologies: ['React', 'Firebase'],
      github: 'https://github.com/madLiberator14/careconnect',
      image: ''
    },
    {
      id: '2',
      title: 'Project Two',
      description: 'Another cool thing I built using TypeScript and Bootstrap.',
      technologies: ['TypeScript', 'Bootstrap'],
      github: 'https://github.com/your/repo2',
      image: ''
    }
  ];

  getProjects() {
    return {
      subscribe: (cb: (projects: Project[]) => void) => cb(this.projects)
    };
  }
}
