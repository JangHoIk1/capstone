import './index.css';

import Contact from './components/Contact';
import QuickLinks from './components/QuickLinks';
import SignLanguage from './components/SignLanguage';

const Footer = () => {
  return (
    <footer>
      <SignLanguage />
      <QuickLinks />
      <Contact />
    </footer>
  );
};

export default Footer;
