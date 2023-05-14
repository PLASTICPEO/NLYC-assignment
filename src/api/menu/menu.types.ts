export interface MenuList {
  data: {
    items: MenuItems;
    text: string;
    social: Social;
  };
}

export type Social = {
  label: string;
  icon: string;
  href: string;
}[];

export type MenuItems = {
  label: string;
  href: string;
}[];
