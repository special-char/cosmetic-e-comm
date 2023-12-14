import React from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import style from "./contactform.module.css";

const ContactForm = () => {
  async function contactFormSubmit(formData: FormData) {
    "use server";

    const rawFormData = {
      firstname: formData.get("firstname"),
      lastname: formData.get("lastname"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    console.log("formdata", rawFormData);

    // mutate data
    // revalidate cache
  }
  return (
    <form className={style.form} action={contactFormSubmit}>
      <div className={style.formInput}>
        <div className={style.nameInput}>
          <Input name="firstname" label="First name" />
          <Input name="lastname" label="Last name" />
        </div>
        <Input
          name="email"
          label="Email"
          type="email"
          wrapperClassName="col-span-2"
        />
        <Input
          as="textarea"
          name="message"
          label="Message"
          rows={5}
          wrapperClassName="col-span-2"
        />
      </div>
      <div>
        <Button variant="fill" color="black" title="send message">
          Send Message
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
