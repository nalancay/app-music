import styled from "styled-components";

export const ListOfItemsContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(5, minmax(17%, 160px));
  grid-gap: 22px;

  @media (max-width: 805px) {
    grid-template-columns: repeat(auto-fit, minmax(17%, 160px));
  }
`;
