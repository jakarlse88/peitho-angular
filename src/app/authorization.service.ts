import { Injectable, OnDestroy } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { BehaviorSubject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  private rolesKey: string = 'http://karlsen.prometheus.net/roles';
  private subscription: Subscription;
  public userIsAdmin$: BehaviorSubject<boolean>;


  constructor(private authService: AuthService) {
    console.log("init");

    this.userIsAdmin$ = new BehaviorSubject(false);

    this.subscription = this.authService.user$.subscribe((data: any) => {
      this.userIsAdmin$.next(this.userHasRole('admin', data[this.rolesKey]));
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private userHasRole(role: string, userRoles: string[]): boolean {
    if (role.length >= 1 && userRoles && userRoles.length >= 1) {
      return userRoles
        .map(role => role.toLowerCase())
        .indexOf(role.toLowerCase()) > -1;
    }

    return false;
  }
}
