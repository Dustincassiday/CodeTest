import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.scss'],
})
export class SearchContainerComponent {
  constructor(private _router: Router, public route: ActivatedRoute) {}

  public handleSearch(value: string): void {
    this._router.navigate(['/breweries'], {
      queryParams: { query: value },
    });
  }
}
