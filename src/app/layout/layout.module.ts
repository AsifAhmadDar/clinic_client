import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { DocLayoutComponent } from './doc-layout/doc-layout.component';
import { DocSidebarComponent } from './doc-sidebar/doc-sidebar.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AppLayoutComponent,
    DocLayoutComponent,
    DocSidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[AppLayoutComponent,DocLayoutComponent]
})
export class LayoutModule { }
