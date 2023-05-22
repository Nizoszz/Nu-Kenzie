import "./index.css";

import { DescriptionContent } from "../Index/DescriptionContent";
import { ImgContent } from "../Index/ImgContent";

export const Index = ({ setHomePage }) => {
  return (
    <div className="background">
      <div className="contentContainer">
        <DescriptionContent setHomePage={setHomePage} />
        <ImgContent />
      </div>
    </div>
  );
};
