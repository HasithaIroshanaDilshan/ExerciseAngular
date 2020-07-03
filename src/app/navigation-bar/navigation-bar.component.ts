import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service'
@Component({
	selector: 'app-navigation-bar',
	templateUrl: './navigation-bar.component.html',
	styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

	public isCollapsed: boolean = true;
	private subscription: any;
	public showLinks: boolean = false;

	constructor(private loginService: LoginService) { }

	ngOnInit(): void {
		this.subscription = this.loginService.getLoggingStatus().subscribe(
			status => this.showOptions(status)
		);
	}

	showOptions(status: any) {
		console.log("status");
		console.log(status);
		if(status.status == true){
			this.showLinks = true;
		}else{
			this.showLinks = false;
		}	
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}
