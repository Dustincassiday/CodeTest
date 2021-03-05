import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreweryErrorComponent } from './brewery-error.component';

describe('BreweryErrorComponent', () => {
  let component: BreweryErrorComponent;
  let fixture: ComponentFixture<BreweryErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreweryErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreweryErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
