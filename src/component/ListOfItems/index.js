import Item from "component/Item";
import { useState } from "react";
import { ListOfItemsContainer } from "./ListOfItems.styles";

const ListOfItems = ({ items = [] }) => {
  const [isSelectSong, setIsSelectSong] = useState();

  return (
    <ListOfItemsContainer>
      {items.slice(0, 10).map((singleItem) => (
        <Item
          key={`ItemGif-${singleItem.id}`}
          singleItem={singleItem}
          isSelectSong={isSelectSong}
          setIsSelectSong={setIsSelectSong}
        />
      ))}
    </ListOfItemsContainer>
  );
};

export default ListOfItems;
