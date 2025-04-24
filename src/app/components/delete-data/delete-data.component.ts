import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-delete-data',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  template: `
    <div class="container">
      <header class="header">
        <img src="assets/logo.png" alt="Logo" class="logo">
        <h1>Delete Data</h1>
      </header>

      <main>
        <div class="warning-section">
          <h2>Warning</h2>
          <p>This action will permanently delete all your data from our servers. This process cannot be undone.</p>
        </div>

        <div class="confirmation-section">
          <h2>Confirm Deletion</h2>
          <p>To confirm that you want to delete your data, please type "DELETE" in the box below:</p>
          <input 
            type="text" 
            [(ngModel)]="confirmationText" 
            placeholder="Type DELETE to confirm"
            class="confirmation-input"
          >
          <button 
            (click)="onDelete()" 
            [disabled]="confirmationText !== 'DELETE'"
            class="delete-button"
          >
            Delete My Data
          </button>
        </div>

        <div class="info-section">
          <h2>What Will Be Deleted</h2>
          <ul>
            <li>Your account information</li>
            <li>Your personal data</li>
            <li>Your usage history</li>
            <li>All associated preferences and settings</li>
          </ul>
        </div>
      </main>

      <footer class="footer">
        <div class="nav-buttons">
          <a routerLink="/privacy">Privacy Policy</a>
          <a routerLink="/terms">Terms of Use</a>
        </div>
      </footer>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      min-height: 100vh;
    }

    .warning-section {
      background-color: #fff3cd;
      border: 1px solid #ffeeba;
      padding: 1rem;
      margin-bottom: 2rem;
      border-radius: 4px;
    }

    .confirmation-section {
      margin-bottom: 2rem;
    }

    .confirmation-input {
      width: 100%;
      padding: 0.5rem;
      margin: 1rem 0;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    .delete-button {
      background-color: #dc3545;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;
    }

    .delete-button:disabled {
      background-color: #6c757d;
      cursor: not-allowed;
    }

    .info-section ul {
      list-style-type: disc;
      margin-left: 1.5rem;
    }
  `]
})
export class DeleteDataComponent {
  confirmationText: string = '';

  onDelete() {
    if (this.confirmationText === 'DELETE') {
      // TODO: Implement actual data deletion logic
      console.log('Data deletion requested');
    }
  }
} 