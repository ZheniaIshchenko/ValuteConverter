import { Component } from '@angular/core';
import { CurrentRatesService } from 'src/app/services/current-rates.service';

@Component({
  selector: 'app-valutes-rate',
  templateUrl: './valutes-rate.component.html',
  styleUrls: ['./valutes-rate.component.less']
})
export class ValutesRateComponent {
  usdRate: number;
  euroRate: number;
  constructor(ratesAPI: CurrentRatesService){
    ratesAPI.rates.subscribe(() => {
      this.usdRate = ratesAPI.usdRate
      this.euroRate = ratesAPI.euroRate
    })
  }
}
