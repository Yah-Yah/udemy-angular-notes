import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  // STEP_05 Create new property (that will be binded to and will controll
  // the 'disabled' attribute in html) and set it to false
  disallowNewServer = true; // type boolean is inferred so no need to add explicit type

  // STEP_06 Add function that changes value of a property created earlier
  // constructor is a method executed at the time that this component is created by angular
  constructor() {
  // STEP_07 This will mimic delay of server response in enabling button after
  // loading the page:
    setTimeout(() => {
      this.disallowNewServer = false;
    }, 2000);
  }

  ngOnInit() {
  }

}

