import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class LoginService {
	private loggedIn: boolean = false
	constructor() { }
	@Output() logged: EventEmitter<any> = new EventEmitter();
	
	/**
	 * check email and password to login
	 * @param email 
	 * @param password 
	 */
	loginValidate(email: string, password: string): boolean{
		if(email == 'example@email.com' && password == 'example#123'){
			this.loggedIn = true
			this.loggingEvent()
			return true
		}
		return false
	}

	/**
	 * logging succuses and log out evetns
	 */
	public loggingEvent() {
		this.logged.emit(
			{status: this.loggedIn}
		);
	}

	/**
	 * returng logging status
	 */
	getLoggingStatus() {
		return this.logged;
	}
}
