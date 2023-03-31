import Item from "component/Item";
import { ListOfItemsContainer } from "./ListOfItems.styles";

const ListOfItems = ({ items = [] }) => {
  return (
    <ListOfItemsContainer>
      {items.slice(0, 10).map((singleItem) => {
        const { id, artist, title_short } = singleItem;
        const { picture_medium, name } = artist;
        return (
          <Item
            key={`ItemGif-${id}`}
            url={picture_medium}
            title={title_short}
            name={name}
          />
        );
      })}
    </ListOfItemsContainer>
  );
};

export default ListOfItems;
