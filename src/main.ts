import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { Routes, provideRouter } from '@angular/router';
import { PrivacyPolicyComponent } from './app/components/privacy-policy/privacy-policy.component';
import { TermsComponent } from './app/components/terms/terms.component';
import { DeleteAccountComponent } from './app/components/delete-account/delete-account.component';

const routes: Routes = [
  { path: '', component: PrivacyPolicyComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'delete-account', component: DeleteAccountComponent },
  { path: '**', redirectTo: '' }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
}).catch(err => console.error(err));
