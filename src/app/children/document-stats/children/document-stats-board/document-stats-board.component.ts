import {Component, HostListener, OnInit} from '@angular/core';
import {DocumentStatsService} from '../../document-stats.service';
import {Month, MonthList} from '../../../../../model/month.model';

@Component({
  selector: 'app-document-stats-board',
  templateUrl: './document-stats-board.component.html',
  styleUrls: ['./document-stats-board.component.scss']
})
export class DocumentStatsBoardComponent implements OnInit {
  monthList: MonthList;
  monthsSelected: Month[] = [];
  labelList: string[] = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];

  max = 0;
  min = 0;

  selectEnd = false;
  selecting = false;

  constructor(private documentStatsService: DocumentStatsService) {
  }

  @HostListener('mouseup')
  onMouseup(): void {
    this.selectEnd = true;
    this.selecting = false;
  }

  ngOnInit(): void {
    this.documentStatsService.getData().subscribe(res => {
      this.monthList = res;
      // Aggiungo il nome del mese all'oggetto che contiene i valori
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

  selectMonth(month: Month): void {
    this.selecting = true;
    if (this.selectEnd) {
      this.monthsSelected = [];
      this.selectEnd = false;
    }
    if (!this.monthIsSelected(month)) {
      this.monthsSelected.push(month);
    }
  }

  monthIsSelected(month: Month): boolean {
    return !!this.monthsSelected.find(m => m.nome === month.nome);
  }

  onMouseOver(ev, item: Month): void {
    if (ev.buttons !== 1) {
      return;
    }
    if (ev.type === 'mouseenter') {
      this.selectMonth(item);
      return;
    }
  }
}
