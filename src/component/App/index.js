import Category from "component/Category";
import Footer from "component/Footer";
import Header from "component/Header";
import SearchResult from "component/SearchResult";
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

function App() {
  const { song } = useContext(SongContext);

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
          <ItemDetail song={song} />
          <Routes>
            <Route path="/" element={<SearchResult />} />
            <Route path="/search/:keyword" element={<SearchResult />} />
          </Routes>
        </AppSections>
      </AppMain>
      <Footer song={song} />
    </>
  );
}

export default App;
