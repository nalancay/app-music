import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faPlay, faStop } from "@fortawesome/free-solid-svg-icons";
import {
  ButtonLink,
  ButtonList,
  ButtonListItem,
  ContainerDetail,
  ContainerItemDetail,
  ContainerInfo,
  ConstainerArtist,
} from "./ItemDetail.styles";
import { Link } from "react-router-dom";
import { usePlay } from "hooks/usePlay";

const SingleItemDetail = ({ song }) => {
  const audioURL = song.preview;
  const { togglePlay, isPlaying } = usePlay({ audioURL });

  return (
    <ConstainerArtist>
      <Link onClick={togglePlay}>
        <img
          src={song.artist?.picture_medium}
          alt={""}
          style={{ width: "250px", height: "250px" }}
        />
        <FontAwesomeIcon
          className="IconFaPlay"
          icon={isPlaying ? faStop : faPlay}
        />
      </Link>
    </ConstainerArtist>
  );
};

const ItemDetail = ({ song }) => {
  return (
    <ContainerItemDetail>
      {song && <SingleItemDetail song={song} />}
      <ContainerDetail imgen={song?.artist?.picture_big}>
        <ContainerInfo>
          <h4>{song?.artist?.name}</h4>
          <div className="textDetail">
            <span>Lo mejor de {song?.artist?.name}</span>
            <p>321,123 seguidores</p>
          </div>
          <div>
            {song?.artist?.name} (Tottenham, Londres, Inglaterra, 5 de mayo de
            1988), conocida simplemente como {song?.artist?.name}, es una
            cantante, compositora y multinstrumentista británica.8​
          </div>
        </ContainerInfo>
        <ButtonList className="buttonSection">
          <ButtonListItem style={{ background: "#E86060" }}>
            <ButtonLink>Reproducir</ButtonLink>
          </ButtonListItem>
          <ButtonListItem style={{ border: "1px solid #eb5757" }}>
            <ButtonLink>Seguir</ButtonLink>
          </ButtonListItem>
          <ButtonListItem style={{ marginLeft: "-35px" }}>
            <ButtonLink>
              <FontAwesomeIcon icon={faEllipsis} />
            </ButtonLink>
          </ButtonListItem>
        </ButtonList>
      </ContainerDetail>
    </ContainerItemDetail>
  );
};

export default ItemDetail;
