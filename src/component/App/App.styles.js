import styled from "styled-components";

export const AppMain = styled.div`
  display: flex;
  flex-direction: initial;
  align-items: flex-start;
`;

export const ContainerCategory = styled.div`
  width: 330px;
  height: 1087px;
  background: ${({ theme }) => theme.colors.DarkRedSecondary};

  img {
    width: 250px;
    height: 59px;
    margin: 50px 40px 0px 40px;
  }
`;
