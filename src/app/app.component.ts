import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div style="padding: 50px">
    <router-outlet></router-outlet>
  </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'code-challenge-app';
}
