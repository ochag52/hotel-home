export interface SectionItem {
  id: number;
  title: string;
  titleEnabled?: boolean;
  subtitle?: string;
  subtitleEnabled?: boolean;
  nav: string;
  navEnabled: string;
  enabled?: boolean;
}

export interface PreviewItem {
  active?: boolean;
  id?: number;
  order?: number;
  title: string;
  subtitle: string;
  img?: ImageItem;
  enabled?: boolean;
}

export interface ImageItem {
  id?: number;
  url: string;
  enabled?: boolean;
}

export interface ServItem {
  id?: number;
  order?: number;
  title: string;
  description: string;
  icon: string;
  enabled?: boolean;
}

export interface RoomItem {
  id?: number;
  order?: number;
  title: string;
  description: string;
  cost?: number;
  img?: ImageItem;
  imgs?: ImageItem[];
  enabled?: boolean;
}

export interface LeisureItem {
  id?: number;
  order?: number;
  title: string;
  description: string;
  img?: ImageItem;
  imgs?: ImageItem[];
  enabled?: boolean;
}

export interface FeedbackItem {
  active?: boolean;
  id?: number;
  order?: number;
  description: string;
  name: string;
  location: string;
  enabled?: boolean;
}

export enum ContactType {
  email = 'EMAIL',
  phone = 'PHONE',
  social = 'SOCIAL'
}

export interface ContactItem {
  id?: number;
  order?: number;
  title: string;
  value: string;
  type: ContactType;
  enabled?: boolean;
}

export interface MenuAction {
  link: string;
  active: boolean;
  title: string;
}

export interface Slide {
  image: string;
  title: string;
  subtitle: string;
  active?: boolean;
}
