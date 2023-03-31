import React from "react";
import { ItemContainer } from "./Item.styles";

export default function Item({ url, title, name }) {
  return (
    <ItemContainer>
      <img loading="lazy" alt={title} src={url} />
      <div>
        <p>{title?.length > 21 ? `${title.substring(0, 21)}...` : title}</p>
        <span>{name?.length > 28 ? `${name.substring(0, 28)}...` : name}</span>
      </div>
    </ItemContainer>
  );
}
