import styled from "styled-components";

const Countiner = styled.div`
background : #fefeef;
padding: 0 70px;
`;

const WrapperTopBlock = styled.div`
padding-left: 200px;
`;
const BlockquoteStyled = styled.div`
  font-family: Helvetica,Arial , sans-serif;
  font-size: 17px;
  line-height: 1.35;
  text-align: left;
  color: #4e4e4e;
  position: relative;
`;

const WrapperMidBlock = styled.div`
display: flex;
flex-direction: row;
background: white;
padding:80px;
align-items:center;
justify-content:center;
height: 950px;
`;

const CoutStyled = styled.div`
width:0;
position: relative;
`;
const WrapperRowOfButtomStyled = styled.div`
display: flex;
margin: 30px 0;
`;

const FooterBlockStyeld = styled.div`
width: 241.6px;
  height: 503.6px;
  opacity: 0.85;
  background-color: #ffe60f;
`;

export {
    Countiner,
    WrapperTopBlock,
    BlockquoteStyled,
    WrapperMidBlock,
    CoutStyled,
    WrapperRowOfButtomStyled,
    FooterBlockStyeld
}