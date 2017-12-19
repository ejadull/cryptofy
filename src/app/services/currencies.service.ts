import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Currency } from '../interfaces/currency';

@Injectable()
export class CurrenciesService {

  readonly API_ENDPOINT = 'https://api.coinmarketcap.com/v1/ticker/?limit=51';

  constructor(public _HttpClient: HttpClient) { }

  getCurrencies(): Observable<Currency>{
    return this._HttpClient.get<Currency>(this.API_ENDPOINT);
  }

}
