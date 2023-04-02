import styled from "styled-components";

export const ConatinerSearchStyled = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  @media (max-width: 750px) {
    width: 55%;
  }
`;

export const FormStyled = styled.form`
  height: 36px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.Gray};
  border-radius: 100px;
  overflow: hidden;
  font-size: 18px;
  display: flex;
  flex-flow: row nowrap;
`;

export const InputStyled = styled.input`
  background: ${({ theme }) => theme.colors.white};
  border: none;
  outline: none;
  padding: 1em;
  width: 100%;
`;

export const ButtonStyled = styled.button`
  font-size: 1.5rem;
  padding-right: 0.5em;
  color: ${({ theme }) => theme.colors.Gray};
  display: flex;
  align-items: center;
  background-color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  .FASearchIcon {
    font-weight: 900;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.RedPrincipal};
  }

  span {
    margin-left: 12px;
    font-family: "Quicksand";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #4f4f4f;
  }
`;
