import './index.css';

import ImageContainer from '../../components/ImageContainer';
import testImage from '../../assets/images/test.png';
import { useNavigate } from 'react-router-dom';

const LiveCall = () => {
  const navigate = useNavigate();

  return (
    <main>
      <div className="header-title">
        <div>
          <p>Rhoncus, accumsan dictum</p>
          <h1>실시간 수화 번역 기능</h1>
        </div>
      </div>

      <div className="grid-container">
        <div className="grid-item first">
          <h2>동작 및 기능 방식 및 설명</h2>
          <span>Neque, pulvinar vestibulum non aliquam.</span>
          <div>
            <img src={testImage} alt="" />
          </div>
        </div>

        <div className="grid-item second">
          <ul>
            {list.map(content => (
              <li key={content.id}>
                <span>{content.id}</span>
                <div>
                  <h3>{content.title}</h3>
                  <p>{content.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ImageContainer
        title="실시간 통화 시작하기"
        onClick={() => navigate('/live-call/login')}
      />
    </main>
  );
};

export default LiveCall;

const list = [
  {
    id: 1,
    title: '~~이러한 방식을 사용',
    detail:
      'Et hendrerit turpis habitant cursus semper ultrices in nunc. Erat eget etiam senectus vestibulum risus.',
  },
  {
    id: 2,
    title: 'Elementum enim tempus',
    detail:
      'At tristique elementum metus blandit id sed vel eu a. Diam sed feugiat diam nisi est. Dictumst elit.',
  },
  {
    id: 3,
    title: 'Tempor egestas augue',
    detail:
      'Eu metus, at orci dui sapien. Semper fames est ut gravida. Neque pellentesque risus ut odio.',
  },
  {
    id: 4,
    title: 'Nulla ac lacinia',
    detail:
      'Molestie faucibus amet sed ut gravida iaculis sed venenatis. Pulvinar id lacus condimentum ut. Non.',
  },
  {
    id: 5,
    title: 'Velit nibh a',
    detail:
      'Ac morbi integer orci justo lobortis elementum, massa pulvinar quisque. Porttitor sit convallis quis.',
  },
];
