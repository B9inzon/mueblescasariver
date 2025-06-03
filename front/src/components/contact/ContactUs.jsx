"use client";

import React, { useRef } from "react";
import { useContactForm } from "@/hooks/useContactForm";
import { ContactInfo } from "./ContactInfo";
import { ContactForm } from "./ContactForm";

export const ContactUs = () => {
  const formRef = useRef();

  const {
    form,
    errors,
    isSubmitting,
    submitStatus,
    handleInputChange,
    handleSubmit,
  } = useContactForm(formRef);

  return (
    <section className="flex flex-col lg:flex-row items-center justify-center pt-28 lg:pt-36 px-8 md:px-[9vw] lg:px-[6vw] xl:px-[14vw]  min-h-screen  ">
      <ContactInfo />
      <ContactForm
        ref={formRef}
        form={form}
        errors={errors}
        isSubmitting={isSubmitting}
        submitStatus={submitStatus}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
      />
    </section>
  );
};
