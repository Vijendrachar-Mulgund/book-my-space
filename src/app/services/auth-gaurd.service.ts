import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { take, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate(route, state: RouterStateSnapshot) {
    return this.auth.user$.pipe(
      take(1),
      map(user => !!user), // <-- map to boolean
      tap(loggedIn => {
        if (!loggedIn) {
          console.log('access denied');
          this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        }
      })
    )
  }
}
