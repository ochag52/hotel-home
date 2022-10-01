import {MenuAction} from "./app.interfaces";

export const NAV_MENU: MenuAction[] = [
  {link: '#services', active: true, title: 'УСЛУГИ'},
  {link: '#rooms', active: false, title: 'НОМЕРА'},
  {link: '#gallery', active: false, title: 'ГАЛЕРЕЯ'},
  {link: '#leisure', active: false, title: 'ДОСУГ'},
  {link: '#feedback', active: false, title: 'ОТЗЫВЫ'},
  {link: '#contacts', active: false, title: 'КОНТАКТЫ'}
];
