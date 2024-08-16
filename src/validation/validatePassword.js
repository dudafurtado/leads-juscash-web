import toast from 'react-hot-toast';
import cryptoJs from 'crypto-js';

export default function validatePassword(password, confirmPassword) {
  const minLength = 8;
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;
  const hasNumber = /[0-9]/;
  const hasAlpha = /[a-zA-Z]/;

  if (password !== confirmPassword) {
    toast.error('As senhas devem ter valores semelhantes.');
    return { ok: false };
  }

  if (password.length < minLength) {
    toast.error('A senha deve ter pelo menos 8 caracteres.');
    return { ok: false };
  }
  if (!hasSpecialChar.test(password)) {
    toast.error('A senha deve conter pelo menos um caractere especial.');
    return { ok: false };
  }
  if (!hasNumber.test(password)) {
    toast.error('A senha deve conter pelo menos um número.');
    return { ok: false };
  }
  if (!hasAlpha.test(password)) {
    toast.error('A senha deve conter pelo menos uma letra.');
    return { ok: false };
  }

  return {
    ok: true,
    encryptedPassword: cryptoJs.AES.encrypt(password, 'dudinha123').toString(),
  };
}
