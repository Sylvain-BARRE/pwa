import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnDestroy {

  private isAuth: boolean;
  private isAuthSubscription: Subscription;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.isAuthSubscription = this.authService.isAuthSubject.subscribe(
      (isAuth: boolean) => {
        this.isAuth = isAuth;
      }
    );
  }

  ngOnDestroy(): void {

    this.isAuthSubscription.unsubscribe();
  }

  onSignOut() {
    this.authService.signOut();
    this.router.navigate(['/accueil']);
  }

}
