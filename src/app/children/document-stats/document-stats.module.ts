import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentStatsBoardComponent } from './children/document-stats-board/document-stats-board.component';
import {DocumentStatsRoutingModule} from './document-stats-routing.module';
import {FlexModule} from '@angular/flex-layout';
import { DocumentStatsItemComponent } from './children/document-stats-board/component/document-stats-item/document-stats-item.component';
import { DocumentStatsSelectedComponent } from './children/document-stats-board/component/document-stats-selected/document-stats-selected.component';



@NgModule({
  declarations: [DocumentStatsBoardComponent, DocumentStatsItemComponent, DocumentStatsSelectedComponent],
  imports: [
    CommonModule,
    DocumentStatsRoutingModule,
    FlexModule,
  ]
})
export class DocumentStatsModule { }
