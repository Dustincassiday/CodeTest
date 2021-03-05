import { Component, Input } from '@angular/core';

@Component({
  selector: 'brewery-error',
  templateUrl: './brewery-error.component.html',
  styleUrls: ['./brewery-error.component.scss'],
})
export class BreweryErrorComponent {
  @Input() error: string = '';
}
