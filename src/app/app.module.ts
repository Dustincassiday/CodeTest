import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PhonePipe } from './pipes/PhonePipe';
import { AppComponent } from './app.component';
import {
  BreweryDetailComponent,
  BreweryErrorComponent,
  BreweryHeaderComponent,
  BrewerySearchResultComponent,
  SearchContainerComponent,
} from './components';

@NgModule({
  declarations: [
    AppComponent,
    SearchContainerComponent,
    PhonePipe,
    BreweryDetailComponent,
    BrewerySearchResultComponent,
    BreweryHeaderComponent,
    BreweryErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
