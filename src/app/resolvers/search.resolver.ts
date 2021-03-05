import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Brewery, BreweryService } from '../data';

@Injectable({
  providedIn: 'root',
})
export class SearchResolver implements Resolve<Observable<Brewery[]>> {
  constructor(private _api: BreweryService, private _router: Router) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this._api.findBreweries(route.queryParams.query).pipe(
      catchError((error) => {
        this._router.navigate(['breweries'], {
          queryParams: { error: error.status },
        });
        return EMPTY;
      })
    );
  }
}
