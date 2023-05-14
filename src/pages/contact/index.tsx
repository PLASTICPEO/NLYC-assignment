import ContactForm from "../../components/contact/contactForm";
import ContactInfo from "../../components/contact/contactInfo";
import { useContact } from "./hooks/useContact";

const Contact: React.FC = () => {
  const { formData, handleSubmit, handleChange } = useContact();

  return (
    <div className="w-full h-screen bg-[#B9AD27]">
      <ContactForm
        formData={formData}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      <ContactInfo />
    </div>
  );
};

export default Contact;
