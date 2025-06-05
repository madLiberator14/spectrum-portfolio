import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav class="navbar">
      <a routerLink="/" routerLinkActive="active" class="brand">Home</a>
      <div class="nav-links">
        <a routerLink="/about" routerLinkActive="active">About</a>
        <a routerLink="/projects" routerLinkActive="active">Projects</a>
        <a routerLink="/skills" routerLinkActive="active">Skills</a>
        <a routerLink="/contact" routerLinkActive="active">Contact</a>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: #181c2f;
      padding: 0.75rem 2rem;
      box-shadow: 0 2px 8px rgba(0,0,0,0.18);
    }
    .brand {
      font-size: 1.5rem;
      font-weight: bold;
      color: #ffd700;
      letter-spacing: 1px;
      text-decoration: none;
      transition: color 0.2s;
    }
    .brand:hover {
      color: #ff6600;
    }
    .nav-links {
      display: flex;
      gap: 1.5rem;
    }
    .nav-links a {
      color: #e0e0e0;
      text-decoration: none;
      font-size: 1.1rem;
      font-weight: 500;
      padding-bottom: 2px;
      border-bottom: 2px solid transparent;
      transition: color 0.2s, border-bottom 0.2s;
    }
    .nav-links a.active, .nav-links a:hover {
      color: #ffd700;
      border-bottom: 2px solid #ffd700;
    }
    @media (max-width: 600px) {
      .navbar {
        flex-direction: column;
        align-items: flex-start;
        padding: 1rem;
      }
      .nav-links {
        flex-direction: column;
        gap: 0.75rem;
        width: 100%;
      }
      .brand {
        margin-bottom: 0.5rem;
      }
    }
  `]
})
export class NavbarComponent {}
