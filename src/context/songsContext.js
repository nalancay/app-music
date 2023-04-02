import React, { useState } from "react";

const Context = React.createContext({});

export function SongsContextProvider({ children }) {
  const [songs, setSongs] = useState([]);

  return (
    <Context.Provider value={{ songs, setSongs }}>{children}</Context.Provider>
  );
}

export default Context;
