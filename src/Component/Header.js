import { useLocation } from "react-router-dom";

const Header = ({ onAdd, showAdd }) => {
  const location = useLocation();

  return (
    <header className="header">
      <h1>TASK TRACKER</h1>
      {location.pathname === "/" && (
        <button
          onClick={onAdd}
          style={{ backgroundColor: showAdd ? "red" : "green" }}
          className="btn"
        >
          {showAdd ? "Close" : "Add"}
        </button>
      )}
    </header>
  );
};

export default Header;
