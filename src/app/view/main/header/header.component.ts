import { Component, HostListener } from '@angular/core';
import { NAV_MENU } from '../../../app.data';
import { MenuAction } from '../../../app.interfaces';
import { BookModalComponent } from '../modals/book-modal/book-modal.component';
import { ModalService } from '../modals/modal.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent {

  public menu!: MenuAction[];
  public menuCollapsed!: boolean;
  public floatHeader!: boolean;


  constructor(
    private readonly modal: ModalService) {

    this.menuCollapsed = true;
    this.menu = NAV_MENU;
  }


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


  public onOpenBook(): void {
    this.modal.open(BookModalComponent);
  }
}
