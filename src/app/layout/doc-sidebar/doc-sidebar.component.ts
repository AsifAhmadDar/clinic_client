import { Component } from '@angular/core';

@Component({
  selector: 'app-doc-sidebar',
  templateUrl: './doc-sidebar.component.html',
  styleUrls: ['./doc-sidebar.component.scss']
})
export class DocSidebarComponent {
  sidebarCollapse: boolean = false;
  toogleSideBar() {
    this.sidebarCollapse = !this.sidebarCollapse;
    const section = document.getElementById('section') as HTMLElement;
    this.sidebarCollapse ? section.classList.add('expand') : section.classList.remove('expand')
  }
}


