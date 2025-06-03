import { useState } from "react";
import { formValidation,  } from "@/utils/formValidation";
import { sendContactEmail } from "@/services/emailService";

const INITIAL_FORM_STATE = {
  username: "",
  email: "",
  number: "",
  message: "",
};

export const useContactForm = (formRef) => {
  const [form, setForm] = useState(INITIAL_FORM_STATE);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const resetForm = () => {
    setForm(INITIAL_FORM_STATE);
    setErrors({});
    setSubmitStatus(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validation = formValidation(form);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }
    setIsSubmitting(true);
    setSubmitStatus(null);

    const result = await sendContactEmail(formRef);

    if (result.success) {
      setForm(INITIAL_FORM_STATE);
      setSubmitStatus("success");
    } else {
      setSubmitStatus("error");
    }
    setIsSubmitting(false);
  };

  return {
    form,
    errors,
    isSubmitting,
    submitStatus,
    handleInputChange,
    handleSubmit,
    resetForm,
  };
};
