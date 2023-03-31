import styled from "styled-components";

export const ItemContainer = styled.div`
  border: 1px solid red;
  height: 211px;
  width: 160px;

  img {
    width: 100%;
    height: 160px;
    object-fit: contain;
    margin: 0;
  }

  div {
    p {
      font-family: "Quicksand";
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 18px;
      color: ${({ theme }) => theme.colors.Gray1};
      margin: 0;
      margin-top: 8px;
    }

    span {
      font-family: "Quicksand";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;
      color: ${({ theme }) => theme.colors.Gray};
    }
  }
`;
