import Menu from "../../components/menu";
import ContactButton from "../../components/contact/contactButton";
import { layoutPropTypes } from "./layout.type";

const DefaultLayout: React.FC<layoutPropTypes> = ({
  withContact = false,
  isWhite = false,
  children,
}) => {
  return (
    <div>
      <Menu isWhite={isWhite} />
      <ContactButton withContact={withContact} isWhite={isWhite} />
      {children}
    </div>
  );
};

export default DefaultLayout;
