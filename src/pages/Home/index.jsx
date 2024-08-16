import './styles.css';
import Title from '../../components/Title';
import Modal from '../../components/Modal';
import Button from '../../components/Button';
import Table from '../../components/Table';
import useMyContext from '../../context/useMyContext';
import LogoutIcon from '../../assets/logout.png';
import { useNavigate } from 'react-router-dom';
import { clearAll, getItem } from '../../utils/storage';

export default function Home() {
  const { openModalNewLead, openModalLeadExist, setLeads } = useMyContext();
  const navigate = useNavigate();
  const userExist = getItem('user');
  const userParsed = JSON.parse(userExist);
  const firstName = userParsed.name.split(' ')[0];

  function logout() {
    clearAll();
    navigate('/login');
    setLeads([]);
  }

  return (
    <>
      <article className="home">
        <header>
          <Title />
          <h1 className="home-user-name"> Olá, {firstName}!</h1>
        </header>
        <Button
          content={'Novo Lead'}
          style={{ style: 'button-new-lead' }}
          type={'button'}
          icon={true}
          modal={true}
        />
        <Table />
        <img
          src={LogoutIcon}
          alt="Icone que simboliza o encerramento da sessão daquele usuário logado"
          className="logout-icon"
          onClick={() => logout()}
        />
      </article>
      {openModalNewLead && <Modal />}
      {openModalLeadExist && <Modal />}
    </>
  );
}
