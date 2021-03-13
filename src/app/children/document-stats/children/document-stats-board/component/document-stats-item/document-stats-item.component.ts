import {Component, Input, OnInit} from '@angular/core';
import {Month} from '../../../../../../../model/month.model';

@Component({
  selector: 'app-document-stats-item',
  templateUrl: './document-stats-item.component.html',
  styleUrls: ['./document-stats-item.component.scss']
})
export class DocumentStatsItemComponent implements OnInit {
  @Input() month: Month;
  @Input() max: number;
  @Input() min: number;

  constructor() { }

  ngOnInit(): void {
  }

  calcHeight(): number {
    return this.month.importo * 90 / this.max;
  }
}
