import { Component, OnInit } from '@angular/core';
import { CurrenciesService } from '../../services/currencies.service';
import { Currency } from '../../interfaces/currency';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.scss'],
  providers: [CurrenciesService]
})
export class CurrenciesComponent implements OnInit {

  currencies: any = [];
  currentSecond: number = 1;
  loading: boolean = true;
  constructor(public _CurrenciesService: CurrenciesService) { }

  ngOnInit() {
    this._CurrenciesService.getCurrencies().subscribe(data => {
      this.currencies = data;
      this.updateCurrencies();
      this.loading = false;
    });
  }

  updateCurrencies(){
    setInterval(() => {
      (this.currentSecond == 10) ? this.currentSecond = 1 : this.currentSecond++;
    }, 1000);

    setInterval(() => {
      this._CurrenciesService.getCurrencies().subscribe(data => {
        this.currencies = data;
      });
    }, 10000);
  }

}
