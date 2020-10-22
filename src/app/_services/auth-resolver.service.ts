import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthResolverService implements Resolve<any> {

  constructor(private authService: AuthService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.user$
      .pipe(map(data => data)).subscribe(result => {
        route.data['userRoles'] = result['http://karlsen.prometheus.net/roles'] || [];
      });
  }
}
