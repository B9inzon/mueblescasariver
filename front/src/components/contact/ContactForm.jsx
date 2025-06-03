import React from "react";

export const ContactForm = ({
  ref: formRef,
  form,
  errors,
  isSubmitting,
  submitStatus,
  onInputChange,
  onSubmit,
}) => {
  return (
    <div className="h-auto w-full lg:w-1/2  ">
      <form
        ref={formRef}
        onSubmit={onSubmit}
        className="flex flex-col justify-center items-center gap-6 py-4 lg:px-10 xl:px-14 w-full h-full text-[#3c3a36]  "
      >
        <fieldset className="flex flex-col items-start w-full">
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={onInputChange}
            placeholder="Nombre completo o empresa *"
            className={`w-full h-12 pl-4 border border-[#3c3a36]/30 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#3c3a36]/30 ${
              errors.username ? "border-red-500" : "border-gray-400"
            } `}
          />
          {errors.username && (
            <span className="text-red-500 text-sm mt-1">{errors.username}</span>
          )}
        </fieldset>

        <fieldset className="flex flex-col items-start w-full">
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={onInputChange}
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
            value={form.number}
            onChange={onInputChange}
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
            value={form.message}
            onChange={onInputChange}
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
          {isSubmitting ? "Enviado" : "Enviar"}
        </button>

        {submitStatus === "success" && (
          <div className="w-full p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            ¡Mensaje enviado con éxito! Te contactaremos pronto.
          </div>
        )}

        {submitStatus === "error" && (
          <div className="w-full p-4 bg-red-100 border-red-400 text-red-700 rounded-lg ">
            Hubo un error al enviar el mensaje. Por favor intenta nuevamente.
          </div>
        )}
      </form>
    </div>
  );
};
