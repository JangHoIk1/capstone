import { useState } from "react";

import CameraButtonImg from "../../../../assets/images/camera.svg";
import CameraButtonImgOff from "../../../../assets/images/cameraOff.svg";
import * as webRTCHandler from "../../../../utils/webRTCHandler";

const CameraButton = () => {
  const [isLocalVideoDisabled, setIsLocalVideoDisabled] = useState(false);

  const handleCameraButtonPressed = () => {
    webRTCHandler.toggleCamera(isLocalVideoDisabled);

    setIsLocalVideoDisabled(!isLocalVideoDisabled);
  };

  return (
    <div className="video_button_container">
      <img
        src={isLocalVideoDisabled ? CameraButtonImgOff : CameraButtonImg}
        className="video_button_image"
        onClick={handleCameraButtonPressed}
      />
    </div>
  );
};

export default CameraButton;
