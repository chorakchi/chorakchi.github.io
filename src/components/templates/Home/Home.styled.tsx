import styled, { css } from "styled-components";
import { HomeProps } from "./Home.interface";

export const ResumeStyled = styled.div<HomeProps>`
  background-color: white;
  width: 100%;
  min-height: 100%;


  @page:right{ 

  @bottom-left {
    margin: 10pt 0 30pt 0;
    border-top: .25pt solid #666;
    content: "My book";
    font-size: 9pt;
    color: #333;
  }
}
background: #f1f1f1;
background: linear-gradient(
90deg
, rgb(131 58 180 / 19%) 0%, rgb(253 29 29 / 11%) 50%, rgb(252 176 69 / 31%) 100%);
    display: flex;

      @media (max-width: 768px) {
        padding: 0;
      }

  .contact {
    position: absolute;
    left: 42px;
    @media screen {
      @media (max-width: 768px) {
        position: relative;
        /* width: 100%; */
        left: 0px;
        padding: 80px 40px;
      }
    }
  }
  ${({ theme }) => theme.RightBlockCV && theme.RightBlockCV.root};
`;

export const RightBlockCVStyled = styled.div`
  background-color: #f8f8f8;
  padding: 80px 0;
  width: 50%;
  @media screen {
    @media (max-width: 768px) {
      width: 100%;
      padding: 40px 0;
    }
  }
  min-height: 100%;
  margin-left: 8px;

  padding-top: 120px;

  padding-right: 40px;
  .logo {
    padding-left: 55px;
    /* padding-top: 80px; */
  }
  ${({ theme }) => theme.RightBlockCV && theme.RightBlockCV.root};
`;

export const LeftBlockCVStyled = styled.div`
  background-color: white;
  padding: 80px 0;
  width: 50%;
  @media screen {
    @media (max-width: 768px) {
      width: 100%;
      padding: 40px 70px;
    }
  }
  padding-top: 120px;
  padding-left: 40px;
  padding-right: 40px;
  .logo {
    padding-left: 55px;
    /* padding-top: 80px; */
  }
  ${({ theme }) => theme.RightBlockCV && theme.RightBlockCV.root};
`;

export const ContainerStyled = styled.div`
  display: flex;
  position: relative;
  background-color: white;
  width: 100%;
  @media screen {
    @media (max-width: 768px) {
      flex-direction: column-reverse;
    }
    max-width: 794px;
    min-height: 1123px;
    position: relative;
    margin: auto;
    @media (min-width: 768px) {
    border-radius: 38px;
    }
    overflow: hidden;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  }
`;

export const PrintButtonStyled = styled.div`
  @media print {
    display: none;
  }
  width: 60px;
  height: 60px;
  border-radius: 100px;
  cursor: pointer;
  position: absolute;
  bottom: 20px;
  right: 20px;
  background-color: #619ff1;
  transition: all 200ms ease-in-out;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  fill: white;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    background-color: #4a79b6;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  }
  @media (max-width: 768px) {
    position: fixed;
    bottom: 10px;
    right: 10px;
  }
`;
