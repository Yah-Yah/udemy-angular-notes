import { Component, OnInit } from '@angular/core';

@Component({
  // 01-Basics_06_STEP_01 this property value is now set to same selector as we use in css,
  // but we can use different types of selectors
  // selector: 'app-servers',

  // 01-Basics_06_STEP_02 We can use an 'attribute selector'
  // selector: '[app-servers]',

  // 01-Basics_06_STEP_03 We can use an 'class selector'
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

// @Component property is a pair of "key: value", first 'key' is selector. Its
// value is usually set to a name of a css selector:
// 1. css selector: 'app-servers' it's used in html file as <app-servers> tag
// 2. Attribute selector: '[app-servers]' it's used in html file as <div app-servers> attribute added to a tag
// 3. Class selector: '.app-servers'

