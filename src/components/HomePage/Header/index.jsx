import "./index.css";

import { Logo } from "./Logo";
import { RedirectIndex } from "./RedirectIndex";

export const Header = ({ setHomePage }) => {
  return (
    <header className="headerPage">
      <div className="container">
        <Logo />
        <RedirectIndex setHomePage={setHomePage} />
      </div>
    </header>
  );
};
