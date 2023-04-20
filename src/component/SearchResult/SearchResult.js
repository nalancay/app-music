import ListOfItems from "component/ListOfItems";
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

const SearchResult = ({ songs }) => (
  <div>
    {songs.length > 0 && (
      <>
        <StylesH3 className="App-title">Resultados</StylesH3>
        <ListOfItems items={songs} />
      </>
    )}
  </div>
);

export default SearchResult;
