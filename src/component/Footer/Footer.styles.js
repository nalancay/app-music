import styled from "styled-components";

export const ContainerFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  font-family: "Quicksand";
  font-style: normal;
  background: ${({ theme }) => theme.colors.RedPrincipal};
  color: ${({ theme }) => theme.colors.white};

  .BtnIcon {
    background: ${({ theme }) => theme.colors.RedPrincipal};
    border: none;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    margin: 5px;
  }

  .volumen {
    height: 6px;
    width: 100px;
    border-radius: 100px;
    accent-color: #ffffff;
  }

  input[type="range"] {
    cursor: pointer;
    -webkit-appearance: none;
    background-color: #ffffff;
  }
`;

export const ConatinerInfoMusic = styled.div`
  display: flex;
  .InfoBrand {
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    p {
      font-weight: 700;
      font-size: 14px;
      line-height: 18px;
    }

    span {
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;
    }
  }
`;
