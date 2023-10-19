import { Component } from '@angular/core';
import { CurrentRatesService } from 'src/app/services/current-rates.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.less']
})
export class ConverterComponent {
  usdRate: number;
  euroRate: number;

  firstInput: number;
  secondInput: number;

  currentFirstValuteK: number;
  currentSecondValuteK: number;

  firstInputLabel: string = "USD";
  secondInputLabel: string = "UAH";
  
  constructor(ratesAPI: CurrentRatesService){
    ratesAPI.rates.subscribe(() => {
      this.usdRate = ratesAPI.usdRate
      this.euroRate = ratesAPI.euroRate
      this.currentFirstValuteK = this.usdRate
      this.currentSecondValuteK = 1
    })
    
    
  }
  
  recountRate(isFirst: boolean){
    if(isFirst){
      this.secondInput = parseFloat((this.currentFirstValuteK/this.currentSecondValuteK * this.firstInput).toFixed(2))
    } else{
      this.firstInput = parseFloat((this.currentSecondValuteK/this.currentFirstValuteK * this.secondInput).toFixed(2))
    }
  }
  setValute(isFirst:boolean, target: any){
    if(isFirst){
      switch(target.value){
        case ("USD"):
          this.currentFirstValuteK = this.usdRate
          this.firstInputLabel = "USD"
          break;
        case ("EUR"):
          this.currentFirstValuteK = this.euroRate
          this.firstInputLabel = "EUR"
          break;
        case ("UAH"):
          this.currentFirstValuteK = 1
          this.firstInputLabel = "UAH"
          break;
      }
      this.recountRate(false)
    } else {
      switch(target.value){
        case ("USD"):
          this.currentSecondValuteK = this.usdRate
          this.secondInputLabel = "USD"
          break;
        case ("EUR"):
          this.currentSecondValuteK = this.euroRate
          this.secondInputLabel = "EUR"
          break;
        case ("UAH"):
          this.currentSecondValuteK = 1
          this.secondInputLabel = "UAH"
          break;
      }
      this.recountRate(true)
    }
  }
}
