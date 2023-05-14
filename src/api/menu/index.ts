import api from "..";
import { MENU } from "./menu.enum";
import { MenuList } from "./menu.types";

export const getMenuList = () => {
  return api.get<MenuList>(MENU.list);
};
