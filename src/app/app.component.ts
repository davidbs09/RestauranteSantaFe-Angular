import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {
  title = 'santa-fe-front';
}
