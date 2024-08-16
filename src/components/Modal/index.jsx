import './styles.css';
import toast from 'react-hot-toast';
import { nanoid } from 'nanoid';
import Input from '../../components/Input';
import Button from '../../components/Button';
import CloseIcon from '../../assets/close.png';
import Checkbox from '../Checkbox';
import useMyContext from '../../context/useMyContext';
import { validateFieldsNewLead } from '../../validation/validateFields';

export default function Modal() {
  const {
    newLead,
    setNewLead,
    showLead,
    leads,
    setLeads,
    setOpenModalNewLead,
    openModalLeadExist,
    setOpenModalLeadExist,
  } = useMyContext();

  function handleSubmit(e) {
    e.preventDefault();

    const { ok } = validateFieldsNewLead(newLead);

    if (!ok) {
      return toast.error('Tente refazer o formulário com as informações fornecidas.');
    }

    setLeads([
      ...leads,
      {
        ...newLead,
        id: nanoid(),
        status: 'potencial-client',
      },
    ]);
    setOpenModalNewLead(false);
    clearForm();
  }

  function clearForm() {
    setNewLead({
      name: '',
      email: '',
      phone: '',
      status: '',
      opportunities: {
        all: false,
        succumbedFees: false,
        contractualFees: false,
        dativeFees: false,
        authorCredit: false,
      },
    });
  }

  function handleCloseModal() {
    setOpenModalNewLead(false);
    setOpenModalLeadExist(false);
  }

  return (
    <article className="modal">
      <section className="modal-box">
        <div className="modal-title">
          <h1>{openModalLeadExist ? 'Lead' : 'Novo Lead'}</h1>
          <img
            src={CloseIcon}
            alt="Icone que simboliza o fechamento do modal aberto"
            onClick={() => handleCloseModal()}
          />
        </div>
        <h2>Dados do Lead</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <Input
            label={'Nome Completo'}
            type={'text'}
            name={'name'}
            value={openModalLeadExist ? showLead.name : newLead.name}
            page={'new-lead'}
          />
          <Input
            label={'E-mail'}
            type={'text'}
            name={'email'}
            value={openModalLeadExist ? showLead.email : newLead.email}
            page={'new-lead'}
          />
          <Input
            label={'Telefone'}
            type={'text'}
            name={'phone'}
            value={openModalLeadExist ? showLead.phone : newLead.phone}
            page={'new-lead'}
          />
          <Checkbox />
          {!openModalLeadExist && (
            <div className="modal-buttons">
              <Button
                content={'Cancelar'}
                style={{ style: 'button-cancel' }}
                type={'button'}
                modal={true}
              />
              <Button
                content={'Salvar'}
                style={{ style: 'button-save' }}
                type={'submit'}
              />
            </div>
          )}
        </form>
      </section>
    </article>
  );
}
