import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdToolbarModule, MdIconModule, MdButtonModule, MdIconRegistry } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { loadSvgResources } from './utils/svg.utils';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    HttpModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parent: CoreModule, ir: MdIconRegistry, ds: DomSanitizer ) {
    if (parent) {
      throw new Error('模块已经存在，不能再次加载！');
    }
    loadSvgResources(ir, ds);
  }
 }
