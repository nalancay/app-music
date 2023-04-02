import { useState } from "react";
import {
  CategoryLink,
  CategoryList,
  CategoryListItem,
  CategoryStyled,
} from "./Category.styles";

const Category = ({ name, options = [] }) => {
  const [selectedItem, setSelectedItem] = useState();

  return (
    <CategoryStyled>
      <h4>{name}</h4>
      <CategoryList>
        {options.map((singleOption, index) => (
          <CategoryListItem
            key={`CategoryListItem-${index}`}
            onClick={() => setSelectedItem(singleOption)}
            checked={singleOption === selectedItem}
          >
            <CategoryLink checked={singleOption === selectedItem}>
              {singleOption}
            </CategoryLink>
          </CategoryListItem>
        ))}
      </CategoryList>
    </CategoryStyled>
  );
};

export default Category;
