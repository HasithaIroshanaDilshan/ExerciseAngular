import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class LoginService {
	constructor() { }

	/**
	 * check email and password to login
	 * @param email 
	 * @param password 
	 */
	loginValidate(email: string, password: string): boolean {
		if (email == 'example@email.com' && password == 'example#123') {
			this.setLogStatus('true')
			return true
		}
		return false
	}

	/**
	 * set loggin status to session storage
	 */
	setLogStatus(satatus: string) {
		sessionStorage.setItem('loggedIn', satatus);
	}
}
