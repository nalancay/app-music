import styled from "styled-components";

export const ListOfItemsContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(5, minmax(15%, 160px));
  grid-gap: 22px;
  margin-bottom: 80px;
  @media (max-width: 1116px) {
    grid-template-columns: repeat(auto-fit, minmax(15%, 160px));
  }
`;
