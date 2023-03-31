import styled from "styled-components";
import { Link } from "react-router-dom";

export const CategoryStyled = styled.div`
  margin-top: 30px;
  h4 {
    padding-left: 40px;
    font-family: "Quicksand";
    font-style: normal;
    font-weight: 700;
    font-size: 1.375rem;
    line-height: 28px;
    margin: 0px 0px 4px 0px;
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const CategoryList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
`;

export const CategoryListItem = styled.li`
  list-style: none;
  margin-bottom: 8px;
  padding-left: ${({ checked }) => (checked ? "35px" : "40px")};
  border-left: ${({ theme, checked }) =>
    checked ? `5px solid ${theme.colors.RedPrincipal}` : ""};
`;

export const CategoryLink = styled(Link)`
  font-size: 1rem;
  color: ${({ theme, checked }) =>
    checked ? theme.colors.RedPrincipal : theme.colors.white};
  font-size: 1em;
  text-decoration: none;
  font-family: "Quicksand";
  font-style: normal;
  line-height: 20px;
  font-weight: ${({ checked }) => (checked ? 700 : 400)};
`;
