import useMyContext from '../../context/useMyContext';
import './styles.css';

export default function Button({ content, style, type, icon, modal }) {
  const { openModalNewLead, setOpenModalNewLead } = useMyContext();

  return (
    <button
      type={type}
      className={`${style.style} button`}
      onClick={() => modal && setOpenModalNewLead(!openModalNewLead)}
    >
      {icon && '+  '}
      {content}
    </button>
  );
}
