import './styles.css';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import useMyContext from '../../context/useMyContext';
import Title from '../../components/Title';
import Input from '../../components/Input';
import Button from '../../components/Button';
import SignRoute from '../../components/SignRoute';
import { getItem, setItem } from '../../utils/storage';
import validateLogin from '../../validation/validateLogin';

export default function Login() {
  const { login, setLogin } = useMyContext();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const userExist = getItem('user');
    const userParsed = JSON.parse(userExist);

    const { ok: validationLogin } = validateLogin(login, userParsed);

    if (!validationLogin) {
      return toast.error('Tente refazer o formulário com as informações fornecidas.');
    }

    setItem('authToken', 'authorized');
    toast.success('Usuário logado com sucesso.');
    navigate('/home');
    clearForm();
  }

  function clearForm() {
    setLogin({
      email: '',
      password: '',
    });
  }

  return (
    <>
      <article className="login">
        <main>
          <Title />
          <form onSubmit={(e) => handleSubmit(e)}>
            <Input
              label={'E-mail'}
              type={'text'}
              name={'email'}
              value={login.email}
              page={'login'}
            />
            <Input
              label={'Senha'}
              type={'password'}
              name={'password'}
              value={login.password}
              page={'login'}
            />
            <SignRoute content={'Faça aqui o cadastro.'} type={'new-account'} />
            <Button
              content={'Entrar'}
              style={{ style: 'button-login' }}
              type={'submit'}
            />
          </form>
        </main>
        <aside></aside>
      </article>
    </>
  );
}
