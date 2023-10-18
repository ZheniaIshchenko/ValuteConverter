import { Component } from '@angular/core';
import { Rate } from 'src/app/interfaces/rate';
import { CurrentRatesService } from 'src/app/services/current-rates.service';

@Component({
  selector: 'app-valutes-rate',
  templateUrl: './valutes-rate.component.html',
  styleUrls: ['./valutes-rate.component.less']
})
export class ValutesRateComponent {
  rates: Rate[];
  usdRate: number;
  euroRate: number;
  constructor(ratesAPI: CurrentRatesService){
    ratesAPI.rates.subscribe(rates => {
      this.rates = rates
      this.usdRate = ratesAPI.usdRate
      this.euroRate = ratesAPI.euroRate
    })
  }
}
