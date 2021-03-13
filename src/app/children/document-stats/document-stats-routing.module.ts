import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DocumentStatsBoardComponent} from './children/document-stats-board/document-stats-board.component';

const routes: Routes = [
  {
    path: '',
    component: DocumentStatsBoardComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class DocumentStatsRoutingModule {}
