import cryptoJs from 'crypto-js';
import toast from 'react-hot-toast';

export default function validateLogin(login, userParsed) {
  const decryptedPassword = cryptoJs.AES.decrypt(
    userParsed.password,
    'dudinha123'
  ).toString(cryptoJs.enc.Utf8);

  if (login.email !== userParsed.email || login.password !== decryptedPassword) {
    toast.error(
      'Os valores inseridos não correspondem com o usuário que foi criado anteriormente.'
    );

    return { ok: false };
  }

  return { ok: true };
}
