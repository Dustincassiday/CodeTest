import { Component, Input } from '@angular/core';
import { Brewery } from 'src/app/data/brewery.model';

@Component({
  selector: 'brewery-detail',
  templateUrl: './brewery-detail.component.html',
  styleUrls: ['./brewery-detail.component.scss'],
})
export class BreweryDetailComponent {
  @Input() detail!: Brewery;
  @Input() queryParam: string = '';
  constructor() {}
}
