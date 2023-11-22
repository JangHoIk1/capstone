import './index.css';

import ImageContainer from '../../components/ImageContainer';
import SignLanguage from './components/SignLanguage';
import Features from './components/Features';

const title = '수화로 만나는 더 큰 세상';
const subTitle =
  'We love to create Sign Language';

const Home = () => {
  return (
    <div className="home-contaienr">
      <ImageContainer title={title} subTitle={subTitle} />

      <main>
        <SignLanguage />
        <Features />
      </main>
    </div>
  );
};

export default Home;
