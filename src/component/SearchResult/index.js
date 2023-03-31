import ListOfItems from "component/ListOfItems";
import { useSongs } from "hooks/useSongs";
import { useParams } from "react-router-dom";

const SearchResult = () => {
  let { keyword } = useParams();
  const { songs, loading, errorState } = useSongs({ keyword });

  return (
    <>
      {loading ? (
        <span>Cargando...</span>
      ) : (
        <div>
          <h3 className="App-title">
            Resultado de tu busqueda: {decodeURI(keyword) || "Recientes"}
          </h3>
          <ListOfItems items={songs} />
        </div>
      )}
    </>
  );
};

export default SearchResult;
