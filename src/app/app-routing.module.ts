import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellDashboardComponent } from './shell-dashboard/shell-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: ShellDashboardComponent },
  {
    path: 'service',
    loadChildren: async () => {
      const m = await loadRemoteModule({
        type: 'manifest',
        remoteName: 'angular-service',
        exposedModule: './ServiceModule',
      });
      return m.ServiceModule;
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
