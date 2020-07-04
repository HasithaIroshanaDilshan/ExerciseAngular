import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, RequiredValidator } from '@angular/forms';
import { LoginService } from './login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	submitted: boolean = false;
	invalidLogin: boolean = false;

	constructor(
		private loginservice: LoginService,
		private route: ActivatedRoute,
		private router: Router
	) { }

	loginForm = new FormGroup({
		email: new FormControl('', [Validators.required, Validators.email]),
		password: new FormControl('', [Validators.required])
	});

	fc = this.loginForm.controls;


	ngOnInit(): void {
	}

	/**
	 * sign in button click
	 */
	signIn() {
		this.submitted = true;
		if (this.loginForm.valid) {
			let email = this.loginForm.get('email').value
			let password = this.loginForm.get('password').value
			if (this.loginservice.loginValidate(email, password)) {
				console.log('logging suc')
				this.router.navigateByUrl('dashboard');
			} else {
				console.log('logging false')
				this.invalidLogin = true;
			}
		} else {
			return
		}

	}

	/**
	 * hide error messages showed for form inputs
	 */
	closeAlert() {
		console.log('close alert')
		this.submitted = false;
		this.invalidLogin = false;
	}

	/**
	 * close invalid logging alert
	 */
	invalidLoginAlert() {
		this.invalidLogin = false;
	}

}


