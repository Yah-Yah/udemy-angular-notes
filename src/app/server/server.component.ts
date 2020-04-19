// 01-Basics_02_STEP_01 Create new component manually:
// angular component is a class, but with special abilities

// 01-Basics_02_STEP_04 in order for decorator to be recognised by typescript it
// needs to be imported so it can be parsed and compiled into javascript. This
// gives us an access to Component stored in 'core' package from angualr packages:
import { Component } from '@angular/core';

// 01-Basics_02_STEP_03 Add a Component decorator:
@Component({
// 01-Basics_02_STEP_05 Pass a javascript object into this decorator to configure
// it. These informations are stored as metadata for the class, it'll tell
// angular what to do with this class.
// 01-Basics_02_STEP_06 selector is an html tag that alows to use THIS component
// in other components
  selector: 'app-server', // typically selector of component comes with an 'app-' prefix and a unique name of the component
  templateUrl: './server.component.html', // this relative path points to an external template file html
})
export class ServerComponent {
  // 01-Basics_02_STEP_02 Make angular know that this is not a regular class:
  // Add a 'Component' decorator before export class (above)
}

// 1. Create class
// 2. Add @Component decorator
// 3. Import { Component }
// 4. Pass a javascript object into the decorator to configure it
