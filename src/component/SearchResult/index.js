import ListOfItems from "component/ListOfItems";
import { useSongs } from "hooks/useSongs";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const StylesH3 = styled.h3`
  font-family: "Quicksand";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  color: #e86060;
  margin-top: 40px;
  margin-bottom: 20px;
  margin-left: 40px;
`;

const SearchResult = () => {
  let { keyword } = useParams();
  const { songs, loading, errorState } = useSongs({ keyword });

  return (
    <>
      {errorState.hasError && <span>{errorState.message}</span>}
      {loading && !errorState.hasError ? (
        <span>Cargando...</span>
      ) : (
        <div>
          <StylesH3 className="App-title">Resultados</StylesH3>
          <ListOfItems items={songs} />
        </div>
      )}
    </>
  );
};

export default SearchResult;
