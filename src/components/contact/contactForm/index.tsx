import { ContactFormPropsTypes } from "./contactForm.types";

const ContactForm: React.FC<ContactFormPropsTypes> = ({
  formData,
  handleChange,
  handleSubmit,
}) => {
  return (
    <div className="xl:pt-[0] xl:pt-12  pt-7">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center xl:w-1/2 xl:absolute xl:top-[10%]  xl:left-[3%] "
      >
        <input
          onChange={handleChange}
          className="border-2 border-neutral-950 p-1.5 outline-none m-1.5 placeholder-gray-900 placeholder:roboto  bg-transparent"
          type="text"
          name="name"
          value={formData.name}
          placeholder="Name*"
        />
        <input
          onChange={handleChange}
          className="border-2 border-neutral-950 p-2.5 outline-none m-1.5 placeholder-gray-900 placeholder:roboto bg-transparent "
          type="text"
          name="company"
          value={formData.company}
          placeholder="Company*"
        />
        <input
          onChange={handleChange}
          className="border-2 border-neutral-950 p-2.5 outline-none m-1.5 placeholder-gray-900 placeholder:roboto bg-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          type="number"
          name="number"
          value={formData.number}
          placeholder="Mobile*"
        />
        <input
          onChange={handleChange}
          className="border-2 border-neutral-950 p-2.5 outline-none m-1.5 placeholder-gray-900 placeholder:roboto bg-transparent "
          type="text"
          name="email"
          value={formData.email}
          placeholder="Email*"
        />
        <textarea
          onChange={handleChange}
          value={formData.question}
          name="question"
          className="border-2 border-neutral-950 p-2.5 outline-none m-1.5 placeholder-gray-900 placeholder:roboto  resize-none bg-transparent overflow-hidden "
          placeholder="Question*"
        />
        <button
          type="submit"
          className="border-2 border-neutral-950 p-2.5 outline-none m-1.5 mr-[60%]"
        >
          SEND
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
