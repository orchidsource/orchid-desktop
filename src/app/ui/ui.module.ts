/**
 * Component that contains user interface things
 */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ToggleComponent } from './toggle/toggle.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ToggleComponent],
  exports: [ToggleComponent]
})
export class UiModule { }
