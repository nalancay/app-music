import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerItemDetail = styled.div`
  display: flex;
  justify-content: space-between;
  height: 250px;
  font-family: "Quicksand";
  font-style: normal;
  color: ${({ theme }) => theme.colors.white};
  margin-left: 40px;
  margin-right: 40px;

  @media (max-width: 900px) {
    margin: 0px;
  }
`;

export const ConstainerArtist = styled.div`
  width: 34.4%;
  position: relative;
  .IconFaPlay {
    position: absolute;
    left: 93px;
    top: 89px;
    color: #ffffff;
    font-size: 72px;
  }

  @media (max-width: 900px) {
    visibility: hidden;
    position: absolute;
  }
`;

export const ContainerDetail = styled.div`
  background: linear-gradient(0deg, rgba(167, 0, 0, 0.7), rgba(167, 0, 0, 0.7)),
    url("${({ imgen }) => imgen}");
  background-size: cover;
  opacity: 0.6;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 33px;
  margin-right: 21px;
  margin-top: 40px;

  h4 {
    font-weight: 700;
    font-size: 22px;
    line-height: 28px;
    margin: 0;
  }

  .textDetail {
    display: flex;
    align-items: center;
    gap: 16px;
    font-weight: 400;
    margin-bottom: 20px;
    span {
      font-size: 14px;
      line-height: 18px;
    }

    p {
      font-size: 10px;
      line-height: 12px;
      color: red;
    }
  }
`;

export const ButtonList = styled.ul`
  display: flex;
  gap: 20px;
`;

export const ButtonListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  width: 117px;
  height: 31px;
  border-radius: 100px;
`;

export const ButtonLink = styled(Link)`
  text-decoration: none;
  font-size: 14px;
  color: #ffffff;
`;
