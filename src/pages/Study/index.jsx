import "./index.css";

import testImage from "../../assets/images/test.png";
import { useNavigate } from "react-router-dom";

const Study = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="header-title">
        <div>
          <p>Rhoncus, accumsan dictum</p>
          <h1>수화 학습 기능</h1>
        </div>
      </div>

      <div className="list-container">
        <div
          className="item hover-scale"
          onClick={() => navigate("/study/consonant")}
        >
          <img src={testImage} alt="" />
          <h2>1단계 자음 모음 학습</h2>
        </div>

        <div
          className="item hover-scale"
          onClick={() => navigate("/study/word")}
        >
          <img src={testImage} alt="" />
          <h2>2단계 단어 학습</h2>
        </div>

        <div
          className="item hover-scale"
          onClick={() => navigate("/study/sentence")}
        >
          <img src={testImage} alt="" />
          <h2>3단계 문장 학습</h2>
        </div>
      </div>
    </div>
  );
};

export default Study;
