import styled from 'styled-components'

const CountinerStyled = styled.div`
display: flex;
flex-direction: row;
`;

const LogoCountinerStyled = styled.div`
  background-color: #ffe60f;
  padding: 36px;
  width: fit-content;
  padding-top: 50px;
  padding-bottom: 180px;
`;

const NavItemCountinerStyled = styled.div`
padding-top: 104px;
display: flex;
flex-direction: row;
`;

const NavItemStyled = styled.div`
  font-family: Helvetica;
  font-size: 20px;
  line-height: 1.2;
  text-align: left;
  color: #2b2e34;
  padding-left: 25px;
`;

export {
    CountinerStyled,
    LogoCountinerStyled,
    NavItemStyled,
    NavItemCountinerStyled
}