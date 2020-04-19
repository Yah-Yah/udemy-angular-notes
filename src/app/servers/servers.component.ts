import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
// 01-Basics_04 IMPORTANT: You have to ahve at least one template for your component!
// 01-Basics_04_STEP_01 Change external template file for inline template:
  // template: `
  //   <div>
  //     <h3>Hi. I'm inline template</h3>
  //   </div>
  // `,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

// 1. External template:
// templateUrl: './servers.component.html',

// 2. Inline template:
// template: '<app-server></app-server>',
