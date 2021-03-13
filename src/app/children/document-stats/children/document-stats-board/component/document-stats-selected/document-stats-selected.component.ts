import {Component, Input, OnInit} from '@angular/core';
import {Month} from '../../../../../../../model/month.model';

@Component({
  selector: 'app-document-stats-selected',
  templateUrl: './document-stats-selected.component.html',
  styleUrls: ['./document-stats-selected.component.scss']
})
export class DocumentStatsSelectedComponent implements OnInit {
  @Input() selectedMonths: Month[];

  constructor() { }

  ngOnInit(): void {
  }

}
