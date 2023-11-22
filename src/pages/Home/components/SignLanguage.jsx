import meanImage from '../../../assets/images/mean.png';
import { useEffect, useRef } from 'react';
import HeaderTitle from './HeaderTitle';

const SignLanguage = () => {
  const targetRef = useRef(null);

  const handleIntersect = (entries, observer) => {
    if (targetRef.current) {
      if (entries[0].isIntersecting) {
        targetRef.current.style.opacity = 1;
        observer.unobserve(entries[0].target);
      }
    }
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }
  }, []);


  return (
    <div className="sign-language" ref={targetRef}>
      <HeaderTitle
        title="수어의 의미"
        subTitle="아름다운 언어, 수어의 의미는?"
      />

      <div className="sign-content">
      <div className="image-wrapper hover-scale">
          <img src={meanImage} alt="이미지" />
        </div>

        <div>
          <h3>
          청각장애인들은 소리로 말을 배울 수 없어서 ‘보이는 언어’를 사용합니다. 이 ‘보이는 언어’가 바로 ‘수어 (手語, Sign language)’입니다.
          
          </h3>
          <br></br>
          <h3>
          ‘한국수화언어법’에 따르면 ‘한국수어’는 ‘한국수화언어’를 줄인 말로, 한국어나 영어처럼 독립된 언어라는 의미를 담고 있습니다.
          </h3>
          {/* <p>Courtney Henry -Marketing Coordinator</p> */}
        </div>
      </div>
    </div>
  );
};

export default SignLanguage;
