export const validateEmail = (email: string): string => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    return "El correo electrónico es obligatorio";
  }
  if (!emailRegex.test(email)) {
    return "Ingrese un correo electrónico válido";
  }
  return "";
};

export const validatePassword = (password: string): string => {
  if (!password) {
    return "La contraseña es obligatoria";
  }
  if (password.length < 6) {
    return "La contraseña debe tener al menos 6 caracteres";
  }
  return "";
};

export const validatePhone = (phone: string): string => {
  if (!phone) {
    return "El teléfono es obligatorio";
  }
  if (phone.length !== 10) {
    return "El teléfono debe tener 10 dígitos";
  }
  if (!/^\d+$/.test(phone)) {
    return "El teléfono solo debe contener números";
  }
  return "";
};

export const validateName = (name: string, field: string): string => {
  if (!name) {
    return `El ${field} es obligatorio`;
  }
  if (/\d/.test(name)) {
    return `El ${field} no debe contener números`;
  }
  return "";
};

export const validateText = (name: string, field: string): string => {
  if (!name) {
    return `El ${field} es obligatorio`;
  }
  return "";
};

export const validateTime = (time: string, field: string): string => {
  if (!time) {
    return `La ${field} es obligatoria`;
  }
  if (!/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(time)) {
    return `Ingrese una ${field} válida`;
  }
  return "";
};

export const validatePrice = (price: string, field: string): string => {
  if (!price) {
    return `El ${field} es obligatorio`;
  }
  if (!/^\d+$/.test(price)) {
    return "El precio solo debe contener números";
  }
  return "";
};

export const validateImage = (imageUri: string): string => {
  if (imageUri === "") {
    return "La imagen es obligatoria";
  }
  return "";
};
