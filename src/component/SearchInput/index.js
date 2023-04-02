import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass as SearchIcon } from "@fortawesome/free-solid-svg-icons";
import {
  FormStyled,
  InputStyled,
  ButtonStyled,
  ConatinerSearchStyled,
} from "./SearchInput.styles";
import useForm from "hooks/useForm";

export default function SearchBar({ initialKeyword = "" }) {
  const navigate = useNavigate();

  const { keyword, changeKeyword } = useForm({
    initialKeyword,
  });

  const handleChange = (evt) => {
    changeKeyword({ keyword: evt.target.value });
  };

  const onSubmit = ({ keyword }) => {
    if (keyword !== "") {
      navigate(`/search/${keyword}`);
    } else navigate("/search");
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit({ keyword });
  };

  return (
    <ConatinerSearchStyled>
      <FormStyled onSubmit={handleSubmit}>
        <InputStyled
          type="text"
          id="search"
          placeholder="Buscar"
          onChange={handleChange}
          value={keyword}
        />
        <ButtonStyled>
          <FontAwesomeIcon
            className="FASearchIcon"
            icon={SearchIcon}
            style={{ color: "#BDBDBD" }}
          />
        </ButtonStyled>
      </FormStyled>
    </ConatinerSearchStyled>
  );
}
