import styled from "styled-components";

export const FormStyled = styled.form`
  width: 524px;
  height: 36px;
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
  width: 524px;
`;

export const ButtonStyled = styled.button`
  width: 15%;
  font-size: 1.5rem;
  padding-right: 0.5em;
  color: ${({ theme }) => theme.colors.Gray};
  display: grid;
  place-content: center;
  background-color: #fff;
  border: none;
  outline: none;

  .FASearchIcon {
    font-size: 18px;
    color: ${({ theme }) => theme.colors.Gray};
  }
`;
