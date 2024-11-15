import { CompanyAddressComponent } from "@/components/contactCompo/company-address";
import { ContactFormComponent } from "@/components/contactCompo/contact-form";
import React from "react";

const ContactPage = () => {
  return (
    <>
      <ContactFormComponent />
      <CompanyAddressComponent />
    </>
  );
};

export default ContactPage;
