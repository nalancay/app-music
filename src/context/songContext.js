import React, { useContext, useEffect, useState } from "react";
import SongsContext from "./songsContext";

const Context = React.createContext({});

export function SongContextProvider({ children }) {
  const { songs } = useContext(SongsContext);

  const defaultSong = songs[0];
  const defaultMusic = songs[0]?.preview;
  const [song, setSong] = useState();
  const [isPlaying, setIsPlaying] = useState(false);
  const [musica, setMusica] = useState(
    "https://cdns-preview-8.dzcdn.net/stream/c-87eb6231a6d465c3923592b208232f31-3.mp3"
  );

  useEffect(() => {
    setSong(defaultSong);
    setMusica(defaultMusic);
  }, [defaultSong, defaultMusic]);

  return (
    <Context.Provider
      value={{ song, setSong, isPlaying, setIsPlaying, musica, setMusica }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;
