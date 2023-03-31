import { ContainerDetail, ContainerItemSong } from "./ItemSong.styles";

const ItemSong = () => {
  return (
    <ContainerItemSong>
      <img src="" alt={""} />
      <ContainerDetail>
        <h4>Adele 21</h4>
        <div>
          {" "}
          <p>Lo mejor de Adele</p>
          <span>321, 123 seguidores</span>
        </div>
        <div>
          Adele Laurie Blue Adkins (Tottenham, Londres, Inglaterra, 5 de mayo de
          1988), conocida simplemente como Adele, es una cantante, compositora y
          multinstrumentista británica.8​
        </div>
        <div>
          <button>Reproducir</button>
          <button>Seguir</button>
          <button>...</button>
        </div>
      </ContainerDetail>
    </ContainerItemSong>
  );
};

export default ItemSong;
