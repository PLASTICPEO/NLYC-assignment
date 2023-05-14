import closeBtn from "../../assets/images/menuCloseBtn.svg";
import facebookIcon from "../../assets/images/facebookIcon.svg";
import instagramIcon from "../../assets/images/instagramIcon.svg";
import { Link } from "react-router-dom";
import { useMenu } from "./hooks/useMenu";
import { MenuPropsTypes } from "./menu.types";

const Menu: React.FC<MenuPropsTypes> = ({ isWhite }) => {
  const { isMenuOpen, handleToggle, menuItems, socialItems, menuText } =
    useMenu();

  return (
    <div>
      {isMenuOpen ? (
        <div className="absolute right-0 xl:h-screen h-screen xl:w-80 w-full bg-[#CDC152] z-40">
          <button onClick={handleToggle}>
            <img src={closeBtn} className="absolute right-1 top-1" />
          </button>
          <div className="flex flex-col ">
            <ul className="absolute top-[20%] left-[50%] -translate-x-1/2 ">
              {menuItems?.map((item, index) => {
                return (
                  <Link
                    key={index}
                    to={item.href === "contact" ? "/contact" : item.href}
                  >
                    <li
                      onClick={handleToggle}
                      className=" font-roboto active:font-bold text-3xl mt-5"
                    >
                      {item.label}
                    </li>
                  </Link>
                );
              })}
            </ul>
            <p className="font-roboto text-xs mt-24 absolute bottom-[20%] left-[50%] -translate-x-1/2 ">
              {menuText}
            </p>
            <div className="text-center">
              <div className="flex absolute bottom-[5%] left-[50%] -translate-x-1/2">
                {socialItems.map((socialItem) => {
                  return (
                    <a key={socialItem.label} href={socialItem.href}>
                      <img
                        className="m-2.5"
                        src={
                          socialItem.icon === "facebook"
                            ? facebookIcon
                            : instagramIcon
                        }
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="absolute top-1 right-1 border-yellow-300">
          <button onClick={handleToggle}>
            <span
              className={`material-symbols-outlined text-4xl ${
                isWhite ? "material-icons" : ""
              }`}
            >
              drag_handle
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Menu;
