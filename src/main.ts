import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
// 01-Basics_01_STEP_04 This is the first code that is going to be executed at the page load. This is a bootstrap that passes our app.module to the application.

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
