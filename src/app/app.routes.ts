import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ClientByBookingComponentComponent} from './client-by-booking-component/client-by-booking-component.component';
import {
  TotalAmountByYearComponentComponent
} from './total-amount-by-year-component/total-amount-by-year-component.component';
import {LoyaltyComponent} from './loyalty/loyalty.component';
import {ExtraComponent} from './extra/extra.component';



export const routes: Routes = [
  { path: '', component: LoginComponent }, // Default route for login
  {
    path: 'dashboard',
    component: DashboardComponent},
  { path: 'dashboard/client-by-booking', component: ClientByBookingComponentComponent },
  { path: 'dashboard/total-amount-by-year', component:  TotalAmountByYearComponentComponent },
  {path : 'dashboard/loyalty', component: LoyaltyComponent },
  {path : 'dashboard/extra', component: ExtraComponent },



];
