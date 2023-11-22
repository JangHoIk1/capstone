import "./index.css";

import IconLogo from "../../assets/icons/icon_logo.svg";

const Logo = () => {
  return (
    <div className="logo">
      {/* <IconLogo /> */}
      <img src={IconLogo} />
      <span>플랫폼</span>
    </div>
  );
};

export default Logo;
