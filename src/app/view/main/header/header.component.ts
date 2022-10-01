import { Component, HostListener, OnInit } from '@angular/core';
import { NAV_MENU } from '../../../app.data';
import {MenuAction} from "../../../app.interfaces";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent implements OnInit {

  public menu!: MenuAction[];
  public menuCollapsed!: boolean;
  public floatHeader!: boolean;

  constructor() {
    this.menuCollapsed = true;
    this.menu = NAV_MENU;
  }

  public ngOnInit(): void { }

  @HostListener('window:scroll')
  public onScrollWindow() {
    const headerHeight = 136;
    this.floatHeader = window.pageYOffset > headerHeight;
  }

  public onMenu(item: MenuAction): void {
    this.menu.forEach(i => i.active = false);
    item.active = true;
    this.menuCollapsed = true;
  }

  public onScroll($event: Event): void {
    console.log($event);
  }
}
