import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { WrapperComponent } from './wrapper/wrapper.component';



@NgModule({
  declarations: [HeaderComponent, NavComponent, ContentComponent, FooterComponent, WrapperComponent],
  imports: [
    CommonModule
  ],
  exports: [WrapperComponent] 
})
export class WrapperModule { }
