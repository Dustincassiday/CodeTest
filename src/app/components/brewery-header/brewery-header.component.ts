import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'brewery-header',
  templateUrl: './brewery-header.component.html',
  styleUrls: ['./brewery-header.component.scss'],
})
export class BreweryHeaderComponent implements OnInit {
  toggleSearch: boolean = false;
  searchQuery: string = '';
  @Input() queryParam!: string;
  @Output() onSearchChange = new EventEmitter<string>();
  @ViewChild('searchbar') searchbar!: ElementRef;

  public ngOnInit(): void {
    this._setSearchQuery(this.queryParam);
  }
  public openSearchbar(): void {
    this.toggleSearch = true;
    this.searchbar.nativeElement.focus();
  }

  public closeSearchbar(): void {
    this.toggleSearch = false;
    this.searchQuery = '';
  }

  public handleSearch(value: string): void {
    this.onSearchChange.emit(value);
  }

  private _setSearchQuery(value: string) {
    this.toggleSearch = !!value;
    this.searchQuery = value;
  }
}
