import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesRoutingModule } from './countries-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { CountryTableComponent } from './components/country-table/country-table.component';

@NgModule({
  declarations: [ByCapitalPageComponent,CountryTableComponent],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    SharedModule
  ]
})
export class CountriesModule { }
