import './index.css';

import Logo from '../Logo';
import Contact from './components/Contact';
import QuickLinks from './components/QuickLinks';
import SignLanguage from './components/SignLanguage';

const Footer = () => {
  return (
    <footer>
      <SignLanguage />
      <QuickLinks />
      <Contact />

      <Logo />
    </footer>
  );
};

export default Footer;
