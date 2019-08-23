import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'main-login',
    templateUrl: './main-login.component.html'
})

export class MainLoginComponent{

    public token;
    public userName;

    constructor(private router: Router){}


    user(): boolean{
        this.token = localStorage.getItem('bookLoan.Token');
        this.userName = localStorage.getItem('bookLoan.UserName');

        return this.token !== null;
    }

    logout(){
        localStorage.removeItem('bookLoan.Token');
        localStorage.removeItem('bookLoan.UserName');
        this.router.navigate(['/book'])
    }
}
