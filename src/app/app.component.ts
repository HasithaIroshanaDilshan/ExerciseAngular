import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from './login/login.service'


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'ExerciseAngular';
	
	constructor(
		private loginService: LoginService,
		private route: ActivatedRoute,
		private router: Router) { }

	ngOnInit() {
		let pathname = window.location.pathname
		console.log(pathname)
		//check user logged in or not
		let status = sessionStorage.getItem('loggedIn')
		if(status != 'true'){
			this.router.navigateByUrl('login');
		}
	}

}
