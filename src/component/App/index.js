import Category from "component/Category";
import Footer from "component/Footer";
import Header from "component/Header";
import { CategoryLibrary, CategoryPlaylist } from "./App.constants";
import {
  AppMain,
  ContainerCategory,
  AppSections,
  ContainerImg,
} from "./App.styles";
import { Routes, Route } from "react-router-dom";
import ItemDetail from "component/ItemDetail";
import { useContext } from "react";
import SongContext from "context/songContext";
import Home from "page/Home";
import LazySearchResult from "component/SearchResult";

function App() {
  const { song, isPlaying, setIsPlaying, musica, setMusica } =
    useContext(SongContext);

  return (
    <>
      <AppMain>
        <ContainerCategory>
          <ContainerImg>
            <img src="/img/foxbel-music.png" alt={""} />
          </ContainerImg>
          <Category name="Mi Librería" options={CategoryLibrary} />
          <Category name="Playlist" options={CategoryPlaylist} />
        </ContainerCategory>
        <AppSections>
          <Header />
          <ItemDetail
            song={song}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search/:keyword" element={<LazySearchResult />} />
          </Routes>
        </AppSections>
      </AppMain>
      <Footer
        song={song}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        musica={musica}
        setMusica={setMusica}
      />
    </>
  );
}

export default App;
