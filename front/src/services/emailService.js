import emailjs from "@emailjs/browser";

const EMAIL_CONFIG = {
  serviceId: "service_g3a2tji",
  templateId: "template_rox2jm2",
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
};

export const sendContactEmail = async (formRef) => {
  try {
    const result = await emailjs.sendForm(
      EMAIL_CONFIG.serviceId,
      EMAIL_CONFIG.templateId,
      formRef.current,
      EMAIL_CONFIG.apiKey
    );
    console.log("Email enviado:", result.text);
    return { success: true, data: result };
  } catch (error) {
    console.error("Error al enviar el mensaje:", error);
    return { success: false, error };
  }
};
