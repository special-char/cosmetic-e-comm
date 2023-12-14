import React from "react";
import { contactDetails } from "@/lib/data";
import ContactDetail from "@/components/ContactDetail";
import ContactForm from "@/components/ContactForm";
import style from "./contact.module.css";

const Contact = () => {
  return (
    <section>
      <div className={style.contactContainer}>
        <div className={style.contactDetailWrapper}>
          {contactDetails &&
            contactDetails.map((item) => {
              return <ContactDetail key={item.id} data={item} />;
            })}
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
