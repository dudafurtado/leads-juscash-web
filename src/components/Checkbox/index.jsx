import './styles.css';
import useMyContext from '../../context/useMyContext';

export default function Checkbox() {
  const { newLead, setNewLead, openModalLeadExist, showLead } = useMyContext();
  const currentLead = openModalLeadExist ? showLead : newLead;
  const options = [
    {
      name: 'all',
      label: 'Todos',
      checked: currentLead.opportunities.all,
    },
    {
      name: 'succumbedFees',
      label: 'Honorários Sucumbenciais',
      checked: currentLead.opportunities.succumbedFees,
    },
    {
      name: 'contractualFees',
      label: 'Honorários Contratuais',
      checked: currentLead.opportunities.contractualFees,
    },
    {
      name: 'dativeFees',
      label: 'Honorários Dativos',
      checked: currentLead.opportunities.dativeFees,
    },
    {
      name: 'authorCredit',
      label: 'Crédito do autor',
      checked: currentLead.opportunities.authorCredit,
    },
  ];

  function handleCheckboxChange(e) {
    const { name, checked } = e.target;

    if (name === 'all') {
      setNewLead((prevState) => ({
        ...prevState,
        opportunities: {
          all: checked,
          succumbedFees: checked,
          contractualFees: checked,
          dativeFees: checked,
          authorCredit: checked,
        },
      }));
    } else {
      setNewLead((prevState) => ({
        ...prevState,
        opportunities: {
          ...prevState.opportunities,
          [name]: checked,
          all: checked
            ? Object.values({ ...prevState.opportunities, [name]: checked }).every(
                (v) => v === true
              )
            : false,
        },
      }));
    }
  }

  return (
    <section className="checkbox">
      <legend>Oportunidades:</legend>
      {options.map((item) => (
        <div className="checkbox-item" key={item.name}>
          <input
            key={item.name}
            type="checkbox"
            id={item.name}
            name={item.name}
            checked={item.checked}
            onChange={(e) => handleCheckboxChange(e)}
            disabled={openModalLeadExist}
          />
          <label htmlFor={item.name}>{item.label}</label>
        </div>
      ))}
    </section>
  );
}
