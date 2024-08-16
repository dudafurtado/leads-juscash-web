import './styles.css';
import IconTitleMoney from '../../assets/money-icon-title.png';

export default function Title() {
  return (
    <div className='title'>
      <img src={IconTitleMoney} alt="Icone de dinheiro dentro de uma engrenagem" />
      <h1>JusCash</h1>
    </div>
  );
}
