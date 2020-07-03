import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'ExerciseAngular';
	constructor(
		private route: ActivatedRoute,
		private router: Router  ) {}
		
	ngOnInit() {
		let pathname = window.location.pathname
		console.log(pathname)
		// if(pathname == '/login' || pathname == '/'){
		// 	this.router.navigateByUrl('login');
		// }else{
		// 	// this.router.navigate([pathname, { id: 'itemId' }])
		// 	this.router.navigateByUrl(pathname)
		// }
		
	}
	



}
