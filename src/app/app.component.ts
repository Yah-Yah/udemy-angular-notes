import { Component } from '@angular/core';

@Component({
// 01-Basics_01_STEP_02 here is selector that loads component to wherever it's called
  selector: 'app-root',
  templateUrl: './app.component.html',
  // 01-Basics_05_STEP_01 It's 'Urls' plural bc we could add pointers to other stylesheets
  // styleUrls: ['./app.component.css', './app.component2.css']

  // 01-Basics_05_STEP_02 We can also set up another property with inline styles
  styles: [`
    h1 {
      color: goldenrod;
    }
  `]
})
export class AppComponent {
  title = 'Welcome to Servers!';
}
