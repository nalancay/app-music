import Category from "component/Category";
import Footer from "component/Footer";
import Header from "component/Header";
import ItemSong from "component/ItemSong";
import SearchResult from "component/SearchResult";
import { CategoryLibrary, CategoryPlaylist } from "./App.constants";
import { AppMain, ContainerCategory } from "./App.styles";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <AppMain>
        <ContainerCategory>
          <img src="/img/foxbel-music.png" alt={""} />
          <Category name="Mi Librería" options={CategoryLibrary} />
          <Category name="Playlist" options={CategoryPlaylist} />
        </ContainerCategory>
        <div>
          <Header />
          <ItemSong />
          <Routes>
            <Route path="/search/:keyword" element={<SearchResult />} />
          </Routes>
        </div>
      </AppMain>
      <Footer />
    </>
  );
}

export default App;
