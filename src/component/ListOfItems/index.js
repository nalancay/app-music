import Item from "component/Item";
import { ListOfItemsContainer } from "./ListOfItems.styles";

const ListOfItems = ({ items = [] }) => {
  return (
    <ListOfItemsContainer>
      {items.slice(0, 10).map((singleItem) => (
        <Item key={`ItemGif-${singleItem.id}`} singleItem={singleItem} />
      ))}
    </ListOfItemsContainer>
  );
};

export default ListOfItems;
