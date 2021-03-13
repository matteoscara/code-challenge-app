import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MonthList} from '../../../model/month.model';

@Injectable({
  providedIn: 'root'
})
export class DocumentStatsService {
  url = 'http://staccah.fattureincloud.it/testfrontend/data.json';

  constructor(private httpClient: HttpClient) {}

  getData(): Observable<MonthList> {
    return this.httpClient.get<MonthList>(this.url);
  }
}
