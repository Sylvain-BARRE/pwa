import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth = false;
  isAuthSubject = new Subject<boolean>();

  signIn(licence: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        setTimeout(() => {
            this.isAuth = true;
            resolve(this.isAuth);
            this.emitIsAuth();
          }, 100
        );
      }
    );
  }

  signOut() {
    this.isAuth = false;
    this.emitIsAuth();
  }

  emitIsAuth() {
    this.isAuthSubject.next(this.isAuth);
  }
}
