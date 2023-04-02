import styled from "styled-components";

export const ItemContainer = styled.div`
  height: 211px;
  width: 160px;
  font-family: "Quicksand";
  font-style: normal;

  img {
    width: 100%;
    height: 160px;
    object-fit: contain;
    margin: 0;
  }

  div {
    p {
      font-weight: 700;
      font-size: 14px;
      line-height: 18px;
      color: ${({ theme }) => theme.colors.Gray1};
      margin: 0;
      margin-top: 8px;
    }

    span {
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;
      color: ${({ theme }) => theme.colors.Gray};
    }
  }

  div {
    position: relative;
    .IconFaPlay {
      position: absolute;
      right: 64px;
      top: 62px;
      color: #ffffff;
      font-size: 36px;
    }

    .IconFaEllipsis {
      position: absolute;
      right: 10px;
      top: 10px;
      color: #ffffff;
    }
  }
`;
