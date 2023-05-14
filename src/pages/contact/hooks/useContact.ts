import { useState } from "react";
import { formTypes } from "../../../components/contact/contactForm/contactForm.types";

export const useContact = () => {
  const [formData, setFormData] = useState<formTypes>({
    name: "",
    company: "",
    number: "",
    email: "",
    question: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormData({
      name: "",
      company: "",
      number: "",
      email: "",
      question: "",
    });
    console.log("Form data ...", formData);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return {
    formData,
    handleChange,
    handleSubmit,
  };
};
