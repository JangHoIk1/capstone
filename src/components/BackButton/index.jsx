import './index.css';

import { ReactComponent as IconBack } from '../../assets/icons/icon_back.svg';

const BackButton = ({ text = 'Get Started', onClick }) => {
  return (
    <button className="back-button-component" onClick={onClick}>
      <IconBack width={20} height={20} fill="#3563e9" /> {text}
    </button>
  );
};

export default BackButton;