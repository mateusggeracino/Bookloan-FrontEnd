import { Component, OnInit, AfterViewInit, ElementRef, ViewChildren } from '@angular/core';
import { Login } from './models/Login';
import { FormGroup, FormBuilder, Validators, FormControlName } from '@angular/forms';
import { LoginService } from './login.services';
import { Router } from '@angular/router';
import { GenericValidator } from 'src/app/utils/generic.form.validator';
import { Observable, merge, fromEvent } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

  loginForm: FormGroup;
  login: Login;
  errors: string[];
  genericValidator: GenericValidator;
  displayMessage: { [key: string]: string } = {};
  validationMessages: { [key: string]: { [key: string]: string } };

  constructor(private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router) { 

      this.validationMessages = {
        socialNumber: {
          required: "O campo CPF é obrigatório"
        },
        password: {
          required: "O campo Senha é obrigatório"
        }
      }

      this.genericValidator = new GenericValidator(this.validationMessages);
    }

    
  ngOnInit() {
    this.loginForm = this.fb.group({
      socialNumber: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngAfterViewInit() {
    let controlBlurs: Observable<any>[] = this.formInputElements.map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

    merge(...controlBlurs).subscribe(value => {
      this.displayMessage = this.genericValidator.processMessages(this.loginForm);
    })
  }
  
  Login(){
    if(this.loginForm.valid && this.loginForm.dirty){
      let login = Object.assign({}, this.login, this.loginForm.value);

      this.loginService.Login(login).subscribe(
        result => {this.onSaveComplete(result)},
        fail => {this.onError(fail)}
      );
    }
  }

  onSaveComplete(response: any){
    this.loginForm.reset();
    
    localStorage.setItem('bookLoan.Token', JSON.parse(response).token);
    localStorage.setItem('bookLoan.UserName', JSON.parse(response).name)

    this.router.navigate(['index'])
  }

  onError(fail: any){
    this.errors = [fail.error];
  }
}
