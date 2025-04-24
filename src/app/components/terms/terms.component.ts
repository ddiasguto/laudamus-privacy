import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="container">
      <header class="header">
        <img src="assets/logo.png" alt="Logo" class="logo">
        <h1>Terms of Use</h1>
      </header>

      <main>
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>

        <h2>2. Use License</h2>
        <p>Permission is granted to temporarily download one copy of the materials (information or software) on our website for personal, non-commercial transitory viewing only.</p>

        <h2>3. Disclaimer</h2>
        <p>The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

        <h2>4. Limitations</h2>
        <p>In no event shall we or our suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website.</p>

        <h2>5. Revisions and Errata</h2>
        <p>The materials appearing on our website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on our website are accurate, complete or current.</p>
      </main>

      <footer class="footer">
        <div class="nav-buttons">
          <a routerLink="/privacy">Privacy Policy</a>
          <a routerLink="/delete-data">Delete Data</a>
        </div>
      </footer>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      min-height: 100vh;
    }
  `]
})
export class TermsComponent {}
