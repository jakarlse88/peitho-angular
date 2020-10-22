import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';

import { AdminComponent } from './admin/admin.component';
import { TechniqueOverviewComponent } from './technique-overview/technique-overview.component';

import { AuthResolverService } from './_services/auth-resolver.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'admin/technique', component: TechniqueOverviewComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard], resolve: [AuthResolverService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
