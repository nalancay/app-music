import { useContext, useEffect, useState } from "react";
import getSongs from "api/songs";
import SongsContext from "context/songsContext";

export function useSongs({ keyword = "tini" }) {
  const [loading, setLoading] = useState(false);
  const [errorState, setErrorState] = useState({ hasError: false });
  const { songs, setSongs } = useContext(SongsContext);

  const handleError = (err) =>
    setErrorState({ hasError: true, message: err.message });

  const keywordToUse =
    localStorage.getItem("lastKeyword") !== undefined
      ? localStorage.getItem("lastKeyword")
      : keyword;

  useEffect(() => {
    setLoading(true);

    getSongs({ keyword: keywordToUse })
      .then((songs) => {
        setSongs(songs);
        setLoading(false);
        localStorage.setItem("lastKeyword", keyword);
      })
      .catch(handleError);
  }, [keyword, keywordToUse]);

  return { songs, loading, errorState };
}
