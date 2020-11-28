import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloComponent } from './hello/hello.component';
import { WorldComponent } from './world/world.component';



@NgModule({
  declarations: [HelloComponent, WorldComponent],
  imports: [
    CommonModule
  ],
  exports:[HelloComponent,WorldComponent]
})
export class HelloWorldModule { }
