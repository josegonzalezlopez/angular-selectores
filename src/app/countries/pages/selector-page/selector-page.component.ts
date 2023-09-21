import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/country.interface';
import { switchMap } from 'rxjs';

@Component({
  templateUrl: './selector-page.component.html',
  styles: [
  ]
})
export class SelectorPageComponent implements OnInit {

  public mainForm: FormGroup = this.formBuilder.group({
    region: ['', [Validators.required]],
    country: ['', [Validators.required]],
    borders: ['', [Validators.required]],
  })

  constructor( private formBuilder: FormBuilder,
                private countriesService: CountriesService ){}
  ngOnInit(): void {
    this.regionOnSelect();
    
  }

  get regions(): Region[]{
    return this.countriesService.region;
  }

  private regionOnSelect(){
      this.mainForm.get('region')!.valueChanges
      .pipe( 
        switchMap( response => this.countriesService.getCoutries(response) )
      ).subscribe( response => console.log(response) ); 
  }

}
