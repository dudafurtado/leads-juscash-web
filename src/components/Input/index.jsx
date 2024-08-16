import './styles.css';
import { useState } from 'react';
import toast from 'react-hot-toast';
import OpenEye from '../../assets/open-eye.png';
import ClosedEye from '../../assets/closed-eye.png';
import useMyContext from '../../context/useMyContext';

export default function Input({ label, type, name, value, page }) {
  const [eye, setEye] = useState('closed');
  const {
    newAccount,
    setNewAccount,
    login,
    setLogin,
    newLead,
    setNewLead,
    openModalLeadExist,
  } = useMyContext();

  function handleDenySpace(e) {
    const key = e.keyCode;
    if (key === 32) {
      return toast.error('Não é permitido usar o espaçamento no campo email e senha');
    }
  }

  function handleChange(e) {
    if (page === 'new-account') {
      setNewAccount({ ...newAccount, [name]: e.target.value });
    }

    if (page === 'login') {
      setLogin({ ...login, [name]: e.target.value });
    }

    if (page === 'new-lead') {
      setNewLead({ ...newLead, [name]: e.target.value });
    }
  }

  return (
    <section className="input">
      <label htmlFor={label} className="text-blue-bold">
        {label} <span>*</span>
      </label>
      <div>
        <input
          id={label}
          type={eye === 'closed' ? type : 'text'}
          name={name}
          value={value}
          onChange={(e) => handleChange(e)}
          onKeyDown={(e) => name !== 'name' && handleDenySpace(e)}
          disabled={openModalLeadExist}
        />
        {type === 'password' && (
          <img
            src={eye === 'closed' ? ClosedEye : OpenEye}
            alt="Ícone de olho que representa se a senha é visível ou não."
            onClick={() => setEye(eye === 'closed' ? 'open' : 'closed')}
            className="eye-icon"
          />
        )}
      </div>
    </section>
  );
}
