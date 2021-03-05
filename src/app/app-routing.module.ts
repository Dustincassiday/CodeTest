import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchContainerComponent } from './components';
import { DetailResolver, SearchResolver } from './resolvers';

const routes: Routes = [
  {
    path: 'breweries/:id',
    component: SearchContainerComponent,
    resolve: { detail: DetailResolver },
    runGuardsAndResolvers: 'pathParamsOrQueryParamsChange',
  },
  {
    path: 'breweries',
    component: SearchContainerComponent,
    resolve: { search: SearchResolver },
    runGuardsAndResolvers: 'pathParamsOrQueryParamsChange',
  },
  { path: '', redirectTo: 'breweries', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
