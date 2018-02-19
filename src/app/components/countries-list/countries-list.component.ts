import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../models/country';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent implements OnInit {

  constructor(private countryService : CountryService) { }

  ngOnInit() {
    this.getCountries();
  }

  settings = {
    actions: false,
    columns: {
      name: {
        title: 'Name',
        valuePrepareFunction: (value) => { return value.toUpperCase() }
      },
      capital: {
        title: 'Capital'
      },
      region: {
        title: 'Region'
      },
      subregion: {
        title: 'Sub Region'
      },
      population : {
        title: 'Population'
      },
      area : {
        title: 'Area'
      }
    }
  };

  private countries: Country[];

  getCountries() {
    return this.countryService.getCountries()
      .subscribe(
      data => {
        if (data){
          this.countries = data;
        }
        return null;
      }, 
      error => console.log(`Retrieval error: ${error}`)
      )
  }

}
