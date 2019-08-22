import { HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';

export abstract class ServiceBase {

  protected UrlServices: string = 'https://bookloan.azurewebsites.net/'
  // protected UrlServices: string = 'http://localhost:5000/'

  protected GetHeaderJson() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  protected extractData(response: any) {
    return response || {};
  }

  protected GetAuthHeaderJson() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.getTokenClient()}`
      })
    };
  }

  protected getTokenClient(): string {
    return localStorage.getItem('bookLoan.Token');
  }

  public getNameClient() {
    return JSON.parse(localStorage.getItem('bookLoan.UserName'));
  }


  protected serviceError(error: Response | any) {
    let errorMessage: string;

    if (error instanceof Response) {
      errorMessage = `${error.status} - ${error.statusText || ''}`
    } else {
      errorMessage = error.message ? error.message : error.ToString();
    }
    console.log(errorMessage);
    return throwError(error);
  }
}