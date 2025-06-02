"use client";

import React, { useRef, useState } from "react";

import emailjs from "@emailjs/browser";
import { WhatsappIcon } from "./icons/WhatsappIcon";
import { MailIcon } from "./icons/MailIcon";
import Link from "next/link";
import { PhoneIcon } from "./icons/PhoneIcon";

export const ContactUs = () => {
  const refForm = useRef();
  const [form, setForm] = useState({
    username: "",
    email: "",
    number: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const username = form.username.trim();
  const email = form.email.trim();
  const number = form.number.trim();
  const message = form.message;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{10}$/;

  const validateForm = () => {
    const newErrors = {};

    if (!username) {
      newErrors.username = "El nombre es requerido.";
    } else if (form.username.length < 2) {
      newErrors.username = "El nombre debe tener al menos dos caracteres";
    }

    if (!email) {
      newErrors.email = "El email es requerido.";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Ingresa un email válido.";
    }

    if (!number) {
      newErrors.number = "El número de celular es requerido.";
    } else if (!phoneRegex.test(number.replace(/\s/g, ""))) {
      newErrors.number = "Ingresa un número válido de 10 dígitos.";
    }

    if (!message) {
      newErrors.message = "El mensaje es requerido.";
    } else if (message.length < 10) {
      newErrors.message = "El mensaje debe tener al menos 10 caracteres.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    const serviceId = "service_g3a2tji";
    const templateId = "template_rox2jm2";
    const apiKey = "JpiuMNyeOtIh_3Fmd"

    try {
      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        refForm.current,
        apiKey
      );
      console.log("Email enviado:", result.text);

      setForm({
        username: "",
        email: "",
        number: "",
        message: "",
      });

      setSubmitStatus("success");
    } catch (error) {
      console.log("Error al enviar el mensaje:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="flex flex-col lg:flex-row items-center justify-center pt-28 lg:pt-36 px-8 md:px-[9vw] lg:px-[6vw] xl:px-[14vw]  min-h-screen  ">
      <div className=" flex flex-col gap-4 py-4 lg:pr-12  justify-center w-full h-auto lg:w-1/2 items-center   ">
        <h1 className="text-3xl w-full lg:text-4xl mb-2 lg:mb-6 font-semibold text-[#3c3a36]  ">
          Contáctanos
        </h1>
        <p className=" w-full text-justify mb-4 text-[#3c3a36]  ">
          Nuestra prioridad es la satisfacción de nuestros clientes, por lo que
          nos comprometemos a brindar una atención personalizada que les permita
          elegir, con total confianza, el mueble perfecto para su hogar. Si
          tienes preguntas o quieres información más detallada, no dudes en
          contactarnos por estos medios.
        </p>
        <Link
          href="https://wa.link/0nego0"
          target="_blank"
          rel=" noopener noreferrer "
          aria-label=" Escríbenos al WhatsApp "
          className="flex items-center w-full lg:text-xl gap-2  "
        >
          <WhatsappIcon width={30} height={30} />
          <span className="text-[#3c3a36]">+57 301 315 1460</span>
        </Link>
        <p className="flex items-center w-full lg:text-xl gap-4 text-[#3c3a36]  ">
          <PhoneIcon height={30} width={30} /> +57 301 315 1460
        </p>
        <p className="flex items-center w-full lg:text-xl gap-4 text-[#3c3a36]   ">
          <MailIcon height={30} width={30} /> mueblescasariver@gmail.com
        </p>
      </div>
      <div className="h-auto w-full lg:w-1/2  ">
        <form
          ref={refForm}
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center gap-6 py-4 lg:px-10 xl:px-14 w-full h-full text-[#3c3a36]  "
        >
          <fieldset className="flex flex-col items-start w-full">
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleInputChange}
              placeholder="Nombre completo o empresa *"
              className={`w-full h-12 pl-4 border border-[#3c3a36]/30 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#3c3a36]/30 ${
                errors.username ? "border-red-500" : "border-gray-400"
              } `}
            />
            {errors.username && (
              <span className="text-red-500 text-sm mt-1">
                {errors.username}
              </span>
            )}
          </fieldset>

          <fieldset className="flex flex-col items-start w-full">
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleInputChange}
              placeholder="Email *"
              className={`w-full h-12 pl-4 border border-[#3c3a36]/30 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#3c3a36]/30 ${
                errors.email ? "border-red-500" : "border-gray-400"
              } `}
            />
            {errors.email && (
              <span className="text-red-500 text-sm mt-1">{errors.email}</span>
            )}
          </fieldset>

          <fieldset className="flex flex-col items-start w-full">
            <input
              type="text"
              inputMode="tel"
              name="number"
              value={number}
              onChange={handleInputChange}
              placeholder="Celular *"
              className={` w-full h-12 pl-4 border border-[#3c3a36]/30 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#3c3a36]/30 ${
                errors.number ? "border-red-500" : "border-gray-400"
              } `}
            />
            {errors.number && (
              <span className="text-red-500 text-sm mt-1">{errors.number}</span>
            )}
          </fieldset>

          <fieldset className="flex flex-col items-start w-full">
            <textarea
              name="message"
              value={message}
              onChange={handleInputChange}
              autoComplete="off"
              spellCheck="true"
              cols="50"
              rows="5"
              maxLength="500"
              placeholder="Mensaje *"
              className={` w-full pl-4 pt-3 border border-[#3c3a36]/30 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#3c3a36]/30 resize-none ${
                errors.message ? "border-red-500" : "border-gray-400"
              }  `}
            />
            {errors.message && (
              <span className="text-red-500 text-sm mt-1">
                {" "}
                {errors.message}{" "}
              </span>
            )}
            <span className="text-[#3c3a36]/60 text-sm mt-1">
              {form.message.length}/500 caracteres{" "}
            </span>
          </fieldset>
          <button
            type="submit"
            disabled={isSubmitting}
            className={` w-full sm:w-auto px-8 h-12 text-[#eeece9] font-semibold rounded-lg cursor-pointer transition-all duration-300 bg-[#3c3a36]/80 hover:bg-[#3c3a36]/60 ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#3c3a36] hover:bg-[#3c3a36]/80 hover:scale-105"
            } `}
          >
            {isSubmitting ? 'Enviado': 'Enviar'}
          </button>

          {submitStatus === 'success' && (
            <div className="w-full p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
              ¡Mensaje enviado con éxito! Te contactaremos pronto.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="w-full p-4 bg-red-100 border-red-400 text-red-700 rounded-lg ">
              Hubo un error al enviar el mensaje. Por favor intenta nuevamente.
            </div>
          )}
        </form>
      </div>
    </section>
  );
};
