import { useEffect, useState } from "react";
import { getMenuList } from "../../../api/menu";
import { MenuItems, Social } from "../../../api/menu/menu.types";

export const useMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const [menuItems, setMenuItems] = useState<MenuItems>([]);
  const [menuText, setMenuText] = useState<string>("");
  const [socialItems, setSocialItems] = useState<Social>([]);

  useEffect(() => {
    getMenuList().then((res) => {
      setMenuItems(res.data.data.items);
      setMenuText(res.data.data.text);
      setSocialItems(res.data.data.social);
    });
  }, []);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return {
    isMenuOpen,
    menuItems,
    menuText,
    socialItems,
    handleToggle,
  };
};
