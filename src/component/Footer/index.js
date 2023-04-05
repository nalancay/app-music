import { ContainerFooter, ConatinerInfoMusic } from "./Footer.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlay,
  faStop,
  faForwardStep,
  faBackwardStep,
  faVolumeOff,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import useSound from "use-sound";

const Footer = ({ song, isPlaying, setIsPlaying, musica, setMusica }) => {
  const imgArtist = song?.artist?.picture;
  const [volume, setVolume] = useState(1);

  const handleClickVolumen = (ev) => {
    const valueVolumen = ev.target.value;
    setVolume(valueVolumen);
  };

  const handleClick = () => {
    setIsPlaying(!isPlaying);
  };

  const [play, { stop }] = useSound(musica, {
    volume,
  });

  useEffect(() => {
    const handleToggler = () => {
      setMusica(musica);
    };
    document.addEventListener("click", handleToggler);

    if (isPlaying) {
      play();
    } else {
      stop();
    }
    return () => document.removeEventListener("click", handleToggler);
  }, [setMusica, musica, isPlaying]);

  return (
    <ContainerFooter>
      <ConatinerInfoMusic>
        <img
          style={{ width: "100px", height: "100px" }}
          src={imgArtist}
          alt=""
        />
        <div className="InfoBrand">
          <p>Canción</p>
          <span>Artista- Álbum</span>
        </div>
      </ConatinerInfoMusic>
      <div style={{ display: "flex" }}>
        <button className="BtnIcon">
          <span>
            <FontAwesomeIcon className="IconSearch" icon={faBackwardStep} />
          </span>
        </button>
        <button className="BtnIcon" onClick={handleClick}>
          <span>
            <FontAwesomeIcon
              icon={isPlaying ? faStop : faCirclePlay}
              fontSize={40}
            />
          </span>
        </button>
        <button className="BtnIcon">
          <span>
            <FontAwesomeIcon icon={faForwardStep} />
          </span>
        </button>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <input
          type="range"
          max="1"
          min="0"
          step="0.1"
          className="volumen"
          onClick={handleClickVolumen}
        />
        <span style={{ paddingLeft: "10px", paddingRight: "10px" }}>
          <FontAwesomeIcon icon={faVolumeOff} />
        </span>
      </div>
    </ContainerFooter>
  );
};

export default Footer;
