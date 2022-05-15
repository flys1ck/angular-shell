import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellDashboardComponent } from './shell-dashboard/shell-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: ShellDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
