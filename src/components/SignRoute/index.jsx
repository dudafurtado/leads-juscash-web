import { useNavigate } from 'react-router-dom';
import './styles.css';

export default function SignRoute({ content, type }) {
  const navigate = useNavigate();

  const handleClick = () => {
    const path = type === 'login' ? '/login' : '/new-account';
    navigate(path);
  };

  return (
    <span className="sign-route text-blue" onClick={() => handleClick()}>
      {content}
    </span>
  );
}
