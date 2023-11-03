import { ImageStatus, ImageType } from "../../types";

import recomend_mask from "../../assets/images/recommended-mask.png";
import required_mask from "../../assets/images/required-mask.png";
import recomend_towel from "../../assets/images/recommended-towel.png";
import required_towel from "../../assets/images/required-towel.png";
import partial_fountain from "../../assets/images/partial-fountain.png"
import forbidden_fountain from "../../assets/images/forbidden-fountain.png";
import required_lockerroom from "../../assets/images/required-lockerroom.png";
import forbidden_lockerroom from "../../assets/images/forbidden-lockerroom.png";
import partial_lockerroom from "../../assets/images/partial-lockerroom.png";

const Image = ({ type, status } : { type: ImageType, status: ImageStatus }) => {
  const getImageSrc = () => {
    const imageMap: Record<ImageType, Record<ImageStatus, string>> = {
      mask: {
        recommended: recomend_mask,
        required: required_mask,
        partial: "",
        not_allowed: "",
        allowed: "",
        closed: "",
      },
      towel: {
        recommended: recomend_towel,
        required: required_towel,
        partial: "",
        not_allowed: "",
        allowed: "",
        closed: "", 
      },
      fountain: {
        partial: partial_fountain,
        not_allowed: forbidden_fountain,
        recommended: "",
        required: "",
        allowed: "",
        closed: "",
      },
      locker_room: {
        allowed: required_lockerroom,
        closed: forbidden_lockerroom,
        partial: partial_lockerroom,
        recommended: "",
        required: "",
        not_allowed: "",
      },
    };

    return imageMap[type][status] || "";
  }

  return <img src={getImageSrc()} alt={`${type} image`} />
}

export default Image;