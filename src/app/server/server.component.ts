import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {
  // STEP_02: We're going to hardcode these data outputted in html template as two different properties:
  serverId = 10; // type: number - it oculd be assigned as "serverId: number = 10" but it's inferred (obvious by the fact of the value) so not necessary to write it explicitly;
  serverStatus = 'offline'; // type: string

  // For the string interpolation working with methods we declare methods here:
  addition(x:any, y:number) {
    return x+y;
  }

  getServerStatus() {
    return this.serverStatus;
  }
}
