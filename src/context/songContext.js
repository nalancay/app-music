import React, { useContext, useEffect, useState } from "react";
import SongsContext from "./songsContext";

const Context = React.createContext({});

export function SongContextProvider({ children }) {
  const { songs } = useContext(SongsContext);
  const defaultSong = songs[0];
  const [song, setSong] = useState({});

  useEffect(() => setSong(defaultSong), [defaultSong]);

  return (
    <Context.Provider value={{ song, setSong }}>{children}</Context.Provider>
  );
}

export default Context;
