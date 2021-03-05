import { Component, Input } from '@angular/core';
import { Brewery } from 'src/app/data/brewery.model';

@Component({
  selector: 'brewery-search-result',
  templateUrl: './brewery-search-result.component.html',
  styleUrls: ['./brewery-search-result.component.scss'],
})
export class BrewerySearchResultComponent {
  @Input() queryParam: string = '';
  @Input() results!: Brewery[];
}
