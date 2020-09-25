
import { map, switchMap } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OwnerAuthGaurdService implements CanActivate {

  constructor(private auth: AuthService) { }

  canActivate(): Observable<boolean> {
    return this.auth.user$
      .pipe(switchMap(user => this.auth.get(user.uid)))
      .pipe(map(appUser => appUser.isOwner));
  }
}