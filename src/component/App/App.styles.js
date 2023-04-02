import styled from "styled-components";

export const AppMain = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const ContainerCategory = styled.div`
  width: 24%;
  background: ${({ theme }) => theme.colors.DarkRedSecondary};

  @media (max-width: 750px) {
    width: 35%;
  }
`;

export const AppSections = styled.div`
  width: 76%;
  @media (max-width: 750px) {
    width: 65%;
  }
`;

export const ContainerImg = styled.div`
  margin-top: 50px;
  display: flex;
  padding-left: 10px;
  padding-right: 10px;
  img {
    width: 100%;
    height: 59px;
    object-fit: contain;
  }
`;
