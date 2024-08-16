import toast from 'react-hot-toast';

const phoneRegex = /^(?:\(?\d{2}\)?\s?)?(?:\d{4,5}-?\d{4})$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const hasSpaces = /\s/;

export function validateFieldsNewAccount({ name, email, password, confirmPassword }) {
  if (!name || !email || !password || !confirmPassword) {
    toast.error('Todos os campos são obrigatórios.');
    return { ok: false };
  }

  if (hasSpaces.test(email) || hasSpaces.test(password)) {
    toast.error('Os campos email e senha não devem conter espaçamento.');
    return { ok: false };
  }

  if (!emailRegex.test(email)) {
    toast.error('É necessário inserir um email válido.');
    return { ok: false };
  }

  return { ok: true };
}

export function validateFieldsNewLead({ name, email, phone }, type) {
  if (!name || !email || !phone) {
    toast.error('Todos os campos são obrigatórios.');
    return { ok: false };
  }

  if (hasSpaces.test(email)) {
    toast.error('O campo email não deve conter espaçamento.');
    return { ok: false };
  }

  if (!emailRegex.test(email)) {
    toast.error('É necessário inserir um email válido.');
    return { ok: false };
  }

  if (!phoneRegex.test(phone)) {
    toast.error(
      'É necessário inserir um telefone válido. (11) 98765-4321, 11987654321, 987654321 ou 1234-5678, por exemplo.'
    );
    return { ok: false };
  }

  return { ok: true };
}
