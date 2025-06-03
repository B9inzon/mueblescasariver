export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const phoneRegex = /^[0-9]{10}$/;

export const formValidation = (form) => {
  const errors = {};

  const username = form.username.trim();
  const email = form.email.trim();
  const number = form.number.trim();
  const message = form.message;

  if (!username) {
    errors.username = "El nombre es requerido.";
  } else if (form.username.length < 2) {
    errors.username = "El nombre debe tener al menos dos caracteres";
  }

  if (!email) {
    errors.email = "El email es requerido.";
  } else if (!emailRegex.test(email)) {
    errors.email = "Ingresa un email válido.";
  }

  if (!number) {
    errors.number = "El número de celular es requerido.";
  } else if (!phoneRegex.test(number.replace(/\s/g, ""))) {
    errors.number = "Ingresa un número válido de 10 dígitos.";
  }

  if (!message) {
    errors.message = "El mensaje es requerido.";
  } else if (message.length < 10) {
    errors.message = "El mensaje debe tener al menos 10 caracteres.";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  }
};
