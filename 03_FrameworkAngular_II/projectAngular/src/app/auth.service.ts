import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  private loggedInSubject = new BehaviorSubject<boolean>(false);

  loggedIn$: Observable<boolean> = this.loggedInSubject.asObservable();

  login ( username: string, password: string ): Observable<boolean> {

    // TODO: FAZER A API DE AUTENTICAÇÃO AQUI
    const isAuthenticated = username === 'teste' && password === '123';
    if (isAuthenticated) {
      this.loggedInSubject.next(true);
    return this.loggedIn$;
  }

  logout(): void {
    this.loggedInSubject
  }
}
