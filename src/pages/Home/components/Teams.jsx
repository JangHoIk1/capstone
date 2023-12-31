import HeaderTitle from './HeaderTitle';

import image02 from '../../../assets/images/image_02.jpeg';

const Teams = () => {
  return (
    <div className="teams">
      <HeaderTitle
        title="팀 소개"
        subTitle="플랫폼 개발에 함께한 팀원을 소개합니다."
      />

      <div className="members">
        <div className="member-card">
          <div className="member-profile">
            <img src={image02} alt="" />
          </div>
          <div className="member-text">
            <div className="member-name">장호익</div>
            <div className="member-mobile">010-1111-1111</div>
            <div className="member-email">skadnwls@naver.com</div>
          </div>
        </div>

        <div className="member-card">
          <div className="member-profile">
            <img src={image02} alt="" />
          </div>
          <div className="member-text">
            <div className="member-name">남우진</div>
            <div className="member-mobile">010-1111-1111</div>
            <div className="member-email">skadnwls@naver.com</div>
          </div>
        </div>

        <div className="member-card">
          <div className="member-profile">
            <img src={image02} alt="" />
          </div>
          <div className="member-text">
            <div className="member-name">유해동</div>
            <div className="member-mobile">010-1111-1111</div>
            <div className="member-email">skadnwls@naver.com</div>
          </div>
        </div>

        <div className="member-card">
          <div className="member-profile">
            <img src={image02} alt="" />
          </div>
          <div className="member-text">
            <div className="member-name">최하린</div>
            <div className="member-mobile">010-1111-1111</div>
            <div className="member-email">skadnwls@naver.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
