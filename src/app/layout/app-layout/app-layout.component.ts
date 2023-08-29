import { Component } from '@angular/core';
import {NgwWowService } from 'ngx-wow'
@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent {
constructor(private wowService:NgwWowService){
this.wowService.init()
}
}
