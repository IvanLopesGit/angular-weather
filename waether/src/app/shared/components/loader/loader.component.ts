import { Component } from '@angular/core';

@Component({
  selector: 'weather-loader',
  template: `
    <div class="spinner">
      <div class="double-bounce1"></div>
      <div class="double-bounce2"></div>
    </div>
  `,
})
export class LoaderComponent {}
