import { Component } from '@angular/core';

@Component({
// 01-Basics_01_STEP_02 here is selector that loads component to wherever it's called
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Servers!';
}
