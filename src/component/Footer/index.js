import { ContainerFooter, ConatinerInfoMusic } from "./Footer.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlay,
  faStop,
  faForwardStep,
  faBackwardStep,
  faVolumeOff,
} from "@fortawesome/free-solid-svg-icons";
import { usePlay } from "hooks/usePlay";

const Footer = ({ song }) => {
  const imgArtist = song?.artist?.picture;
  const audioURL =
    song?.preview ||
    "https://cdns-preview-8.dzcdn.net/stream/c-87eb6231a6d465c3923592b208232f31-3.mp3";
  const { togglePlay, isPlaying, setVolume } = usePlay({ audioURL });

  const handleClickVolumen = (ev) => {
    const valueVolumen = ev.target.value;
    setVolume(valueVolumen);
  };

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
        <button className="BtnIcon" onClick={togglePlay}>
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
