import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
@Input() role:number=-1;
sticky:boolean = false;

@HostListener('window:scroll')
onScroll(){
  if(window.scrollY > 300){
    this.sticky = true;
    return
  }
  this.sticky = false;
}

}
