import "./index.css";

export const RedirectIndex = ({ setHomePage }) => {
  const handleRedirect = () => {
    return setHomePage(false);
  };
  return (
    <button type="button" onClick={handleRedirect} className="buttonRedirect">
      Início
    </button>
  );
};
