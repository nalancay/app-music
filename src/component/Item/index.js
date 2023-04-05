import React, { useContext, useEffect, useState } from "react";
import { ItemContainer } from "./Item.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStop, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import SongContext from "context/songContext";

export default function Item({ singleItem, isSelectSong, setIsSelectSong }) {
  const { setSong, isPlaying, setIsPlaying, setMusica } =
    useContext(SongContext);
  const { id, artist, title_short: title, preview } = singleItem;
  const { picture_medium: url, name } = artist;
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setIsPlaying(false);
    setIsSelectSong(id);
    setSong(singleItem);
    setToggle(!toggle);
    setMusica(preview);
  };

  useEffect(() => {
    setIsPlaying(isSelectSong === id && toggle);
  }, [toggle]);

  return (
    <ItemContainer>
      <div>
        <img loading="lazy" alt={title} src={url} />
        <Link onClick={handleClick}>
          <FontAwesomeIcon
            className="IconFaPlay"
            icon={isSelectSong === id && isPlaying ? faStop : faPlay}
          />
        </Link>
        <FontAwesomeIcon className="IconFaEllipsis" icon={faEllipsisV} />
      </div>
      <div>
        <p>{title?.length > 21 ? `${title.substring(0, 21)}...` : title}</p>
        <span>{name?.length > 28 ? `${name.substring(0, 28)}...` : name}</span>
      </div>
    </ItemContainer>
  );
}
