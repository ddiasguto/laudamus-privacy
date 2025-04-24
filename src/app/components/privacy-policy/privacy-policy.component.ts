import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="container">
      <header class="header">
        <img src="assets/logo.png" alt="Logo" class="logo">
        <h1>Privacy Policy</h1>
      </header>

      <main>
        <h2>1. Introduction</h2>
        <p>Welcome to our Privacy Policy. This document explains how we collect, use, and protect your personal information.</p>

        <h2>2. Information We Collect</h2>
        <p>We collect information that you provide directly to us, including:</p>
        <ul>
          <li>Name and contact information</li>
          <li>Account credentials</li>
          <li>Payment information</li>
        </ul>

        <h2>3. How We Use Your Information</h2>
        <p>We use the collected information to:</p>
        <ul>
          <li>Provide and maintain our services</li>
          <li>Process your transactions</li>
          <li>Send you important updates</li>
        </ul>

        <h2>4. Data Protection</h2>
        <p>We implement appropriate security measures to protect your personal information.</p>

        <h2>5. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access your personal data</li>
          <li>Correct inaccurate data</li>
          <li>Request deletion of your data</li>
        </ul>
      </main>

      <footer class="footer">
        <div class="nav-buttons">
          <a routerLink="/terms">Terms of Use</a>
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
export class PrivacyPolicyComponent {}
