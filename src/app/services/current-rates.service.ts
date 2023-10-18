import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rate } from '../interfaces/rate';

@Injectable({
  providedIn: 'root'
})
export class CurrentRatesService {
  rates: Observable<Rate[]>;
  usdRate: number;
  euroRate: number;

  constructor(private http: HttpClient) {
    this.rates = this.http.get<Rate[]>("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json");

    this.rates.subscribe((data: Rate[]) => {
      const usdRateInfo = data.find(valuteInfo => valuteInfo.cc === "USD");
      if (usdRateInfo) {
        this.usdRate = usdRateInfo.rate;
      }

      const euroRateInfo = data.find(valuteInfo => valuteInfo.cc === "EUR");
      if (euroRateInfo) {
        this.euroRate = euroRateInfo.rate;
      }
    });
  }
}
