import { Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { HomeComponent } from './home/home.component';
import { ThankuComponent } from './thanku/thanku.component';

export const routes: Routes = [
    { path:'', component:HomeComponent},
    { path: 'contact', component: AuthenticationComponent },
    {path:'thank-you', component:ThankuComponent}
]
