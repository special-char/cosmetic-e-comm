import React from "react";
import Button from "../common/Button";
import { ContactDetailType } from "@/utils/types";
import style from "./contactdetail.module.css";

const ContactDetail = ({ data }: ContactDetailType) => {
  const Icon = data.icon;
  return (
    <div key={data.id} className={style.contactDetails}>
      <Button variant="fill" color="green" className={style.icon}>
        <Icon className={"h-4"} />
      </Button>
      <p className={style.description}>{data.description}</p>
    </div>
  );
};

export default ContactDetail;
