import { Link } from "react-router-dom";
import { ContactButtonPropsTypes } from "./contactBtn.types";

const ContactButton: React.FC<ContactButtonPropsTypes> = ({
  isWhite,
  withContact,
}) => {
  return (
    <div style={{ display: withContact ? "block" : "none" }}>
      <Link to="/contact">
        <button
          className={`hidden xl:inline-block text-xs font-roboto ${
            isWhite ? "text-white" : "text-black"
          } w-28 h-10 absolute left-1/2 -translate-x-1/2 xl:bottom-2.5 bottom-4 max-sm opacity-100 border-[#CDC152] border-2`}
        >
          contact us
        </button>
      </Link>
    </div>
  );
};

export default ContactButton;
