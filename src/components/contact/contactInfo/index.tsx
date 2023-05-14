import facebookicon from "../../../assets/images/facebookIcon.svg";
import instagramicon from "../../../assets/images/instagramIcon.svg";

const ContactInfo: React.FC = () => {
  return (
    <div className="text-end font-roboto xl:absolute xl:right-[2%] xl:bottom-[10%] xl:bottom-[5%] m-5 mt-4">
      <p className="text-5xl font-bold flex flex-col">
        Just be <span>Yourself!</span>
      </p>
      <div>
        <p className="w-full mt-5">
          Contact us: +1 (533) 6454 45454 12/53 Towers Ave., 19726, California,
          USA
        </p>
        <p className="font-bold">info@booreykoo.com</p>
        <div className="flex justify-end items-center w-full mt-5">
          <img src={facebookicon} className="mr-6 " />
          <img src={instagramicon} />
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
