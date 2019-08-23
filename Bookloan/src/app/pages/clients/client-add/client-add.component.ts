import { ClientService } from './../client.service';
import { Component, OnInit, AfterViewChecked, AfterViewInit, ViewChild, ViewChildren, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControlName } from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from '../models/client';
import { GenericValidator } from 'src/app/utils/generic.form.validator';
import { Observable, fromEvent, merge  } from 'rxjs';

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html'
})
export class ClientAddComponent implements OnInit, AfterViewInit  {
  
  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

  subscribeForm: FormGroup;
  client: Client;
  validationMessages: { [key: string]: { [key: string]: string } };
  genericValidator: GenericValidator;
  errors: string[] = [];
  displayMessage: {[key: string]: string} = {};

  constructor(private fb: FormBuilder,
    private clientService: ClientService,
    private router: Router) {

    this.validationMessages = {
      name: {
        required: "O campo Nome é obrigatório",
        minlength: "O campo Nome precisa ter no mínimo 2 caracteres",
        maxlength: "O campo Nome precisa ter no máximo 80 caracteres",
      },
      lastName: {
        required: "O campo Sobrenome é um campo obrigatório",
        minlength: "O campo Sobrenome deve ter no mínimo 2 caracteres",
        maxlength: "O campo Sobrenome deve ter no mínimo 100 caracteres"
      },
      socialNumber: {
        required: "O campo CPF é um campo obrigatório",
        minlength: "O campo CPF deve ter no mínimo 2 caracteres",
        maxlength: "O campo CPF deve ter no mínimo 100 caracteres"
      },
      email:{
        required: "O campo Email é um campo obrigatório",
        minlength: "O campo Email deve ter no mínimo 2 caracteres",
        maxlength: "O campo Email deve ter no mínimo 100 caracteres"
      },
      phone:{
        required: "O campo Telefone é um campo obrigatório",
        minlength: "O campo Telefone deve ter no mínimo 2 caracteres",
        maxlength: "O campo Telefone deve ter no mínimo 100 caracteres"
      }
    }

    this.genericValidator = new GenericValidator(this.validationMessages);
  }

  ngOnInit() {
    this.subscribeForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(80)]],
      lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      socialNumber: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      email: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      phone: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
    });
  }

  ngAfterViewInit() {
    let controlBlurs: Observable<any>[] = this.formInputElements.map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

    merge(...controlBlurs).subscribe(value => {
      this.displayMessage = this.genericValidator.processMessages(this.subscribeForm);
    })
  }

  addClient() {
    if (this.subscribeForm.valid && this.subscribeForm.dirty) {
      let client = Object.assign({}, this.client, this.subscribeForm.value);

      this.clientService.AddClient(client).subscribe(
        result => { this.onSaveComplete(result) },
        fail => { this.onError(fail) });
    }
  }

  onSaveComplete(response: any) {
    this.subscribeForm.reset();
    this.errors = [];

    // para adicionar o token no localstore do navegador.
    // localStorage.setItem('bookLoan.token', response.result.access_token);
    // localStorage.setItem('bookLoan.user', JSON.stringify(response.result.user));

    this.router.navigate(['client'])
  }

  onError(fail: any) {
    this.errors = fail.error;
  }
}
