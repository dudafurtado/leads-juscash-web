import './styles.css';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import useMyContext from '../../context/useMyContext';
import Title from '../../components/Title';
import Input from '../../components/Input';
import Button from '../../components/Button';
import SignRoute from '../../components/SignRoute';
import { validateFieldsNewAccount } from '../../validation/validateFields';
import validatePassword from '../../validation/validatePassword';
import { clearAll, getItem, setItem } from '../../utils/storage';

export default function CreateAccount() {
  const { newAccount, setNewAccount } = useMyContext();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (getItem('user')) {
      clearAll();
    }

    const { ok: validationField } = validateFieldsNewAccount(newAccount);

    if (!validationField) {
      return toast.error('Tente refazer o formulário com as informações fornecidas.');
    }

    const { ok: validationPassword, encryptedPassword } = validatePassword(
      newAccount.password,
      newAccount.confirmPassword
    );

    if (!validationPassword) {
      return toast.error('Tente refazer o formulário com as informações fornecidas.');
    }

    setItem(
      'user',
      JSON.stringify({
        name: newAccount.name,
        email: newAccount.email,
        password: encryptedPassword,
      })
    );
    toast.success('Conta criada com sucesso.');
    navigate('/login');
    clearForm();
  }

  function clearForm() {
    setNewAccount({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  }

  return (
    <>
      <article className="create-account">
        <main>
          <Title />
          <form onSubmit={(e) => handleSubmit(e)}>
            <Input
              label={'Seu nome completo'}
              type={'text'}
              name={'name'}
              value={newAccount.name}
              page={'new-account'}
            />
            <Input
              label={'E-mail'}
              type={'text'}
              name={'email'}
              value={newAccount.email}
              page={'new-account'}
            />
            <Input
              label={'Senha'}
              type={'password'}
              name={'password'}
              value={newAccount.password}
              page={'new-account'}
            />
            <Input
              label={'Confirmar sua senha'}
              type={'password'}
              name={'confirmPassword'}
              value={newAccount.confirmPassword}
              page={'new-account'}
            />
            <SignRoute
              content={'Já possui uma conta? Clique aqui para Login.'}
              type={'login'}
            />
            <Button
              content={'Criar conta'}
              style={{ style: 'button-new-account' }}
              type={'submit'}
            />
          </form>
        </main>
      </article>
    </>
  );
}
