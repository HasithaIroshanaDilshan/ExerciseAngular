import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, transition, animate, style } from '@angular/animations';
@Component({
	selector: 'app-navigation-bar',
	animations: [
		trigger('changBgColor', [
			state('Yellow', style({
				backgroundColor: 'Yellow',
			})),
			state('Lime', style({
				backgroundColor: 'Lime',
			})),
			transition('* => *', [
				animate('2s')
			]),
		]),

	],
	templateUrl: './navigation-bar.component.html',
	styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

	isCollapsed: boolean = true;
	showLinks: boolean = false;
	isYellow = true;

	constructor(
		private router: Router
	) { }

	ngOnInit(): void {
		let status = sessionStorage.getItem('loggedIn')
		if (status == 'true') {
			this.showLinks = true;
		}
	}

	/**
	 * log out 
	 * clear session storage
	 */
	logout() {
		console.log('logout')
		this.router.navigateByUrl('login');
		sessionStorage.setItem('loggedIn', 'false')
	}

	/**
	 * show dashboard and directive links after logged in
	 * @param status 
	 */
	showOptions(status: any) {
		if (status.status == true) {
			this.showLinks = true;
		} else {
			this.showLinks = false;
		}
	}

	/**
	 * toggle nav bar color to animate
	 * @param event 
	 */
	toggle(event) {
		this.isYellow = !this.isYellow;
	}

}
