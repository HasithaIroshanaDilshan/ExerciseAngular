import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'ExerciseAngular';
	
	constructor(
		private router: Router) { }

	ngOnInit() {
		let pathname = window.location.pathname
		console.log(pathname)
		//check user logged in or not
		let status = sessionStorage.getItem('loggedIn')
		if(status != 'true'){
			this.router.navigate(['login']);
		}
	}

}
