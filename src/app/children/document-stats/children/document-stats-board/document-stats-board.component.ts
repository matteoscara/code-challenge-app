import {Component, OnInit} from '@angular/core';
import {DocumentStatsService} from '../../document-stats.service';
import {Month, MonthList} from '../../../../../model/month.model';

@Component({
  selector: 'app-document-stats-board',
  templateUrl: './document-stats-board.component.html',
  styleUrls: ['./document-stats-board.component.scss']
})
export class DocumentStatsBoardComponent implements OnInit {
  monthList: MonthList;
  labelList: string[] = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
  max = 0;
  min = 0;

  constructor(private documentStatsService: DocumentStatsService) {
  }

  ngOnInit(): void {
    this.documentStatsService.getData().subscribe(res => {
      this.monthList = res;
      // Aggiungo il nome del mese all'oggetto che contiene i valori (Non mi piace che non sia indicato il nome)
      this.monthList.mesi.map((value: Month, index: number) => {
        value.nome = this.labelList[index];
      });
      this.calcMaxAndMin();
    });
  }

  calcMaxAndMin(): void {
    this.max = this.monthList.mesi.reduce((max, m) => m.importo > max.importo ? m : max).importo;
    this.min = this.monthList.mesi.reduce((min, m) => m.importo > min.importo ? m : min).importo;
  }
}
