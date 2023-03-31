import SearchBar from "component/SearchInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { ButtonStyled } from "component/SearchInput/SearchInput.styles";
import { ConatinerStyled } from "./Header.styles";

const Header = () => {
  return (
    <ConatinerStyled>
      <SearchBar />
      <ButtonStyled
        style={{ display: "flex", gap: "12px", alignItems: "center" }}
      >
        <FontAwesomeIcon className="FASearchIcon" icon={faUser} />
        <span>Natalia A.</span>
      </ButtonStyled>
    </ConatinerStyled>
  );
};

export default Header;
