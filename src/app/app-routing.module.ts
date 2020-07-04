import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { DirectiveComponent } from './dashboard/directive/directive.component'

import { from } from 'rxjs';



const routes: Routes = [
	{ path: 'login', component: LoginComponent },
	{ path: 'nav', component: NavigationBarComponent },
	{ path: 'dashboard', component: DashboardComponent},
	{ path: 'dashboard/directive', component: DirectiveComponent},
	{ path: '**', component: LoginComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
