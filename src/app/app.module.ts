import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ValutesRateComponent } from './components/valutes-rate/valutes-rate.component';
import { ConverterComponent } from './components/converter/converter.component';
import { CurrentRatesService } from './services/current-rates.service';

@NgModule({
  declarations: [
    AppComponent,
    ValutesRateComponent,
    ConverterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CurrentRatesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
