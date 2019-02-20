import styled from 'styled-components'

const Countiner = styled.div`

background-color: withe;
`;

const Nav = styled.div`
position: fixed;
z-index: 10px;  
width: 100%;
height: 76px;
background-color: rgba(0, 0, 0, 0.32);
display: flex;
flex-direction: row;
background: ${props => props.bgColor ? props.bgColor : '#666'};
`;

const NavLogo = styled.img`
`;


const Header = styled.div`
  width: 100%;
height: 700px;
background: ${props => props.color ? props.color : '#666'};
display: flex;
align-items:center;
justify-content: center;
border-bottom: 8px solid #ffffff55;
`;
const ItemNav = styled.div`
font-family: Roboto, SegoeUI, Arial, Helvetica, sans-serif, ;
font-size: 1rem;
flex: ${props => props.flex ? props.flex : 'unset'};
font-weight: normal;
font-style: normal;
font-stretch: normal;
line-height: 75px;
padding: 0 20px;
letter-spacing: normal;
text-align: left;
cursor: ${props => props.onCLick ? 'pointer' : 'default'};
color: ${props => props.version ? props.color : "#ffffff99"};
&:hover{
    
    background-color: ${props => props.onCLick ? '#ffffff11' : 'none'};
}
`;

const DescriptionHeader = styled.div`
font-family: Roboto, SegoeUI, Arial, Helvetica, sans-serif;
font-size: 22px;
font-weight: normal;
font-style: normal;
font-stretch: normal;
line-height: 1.33;
letter-spacing: normal;
text-align: left;
color: #d5e7f0;
padding:16px;
`;
const BTNsHeader = styled.div`
display:flex;
flex-direction: row;
`;
const Button = styled.div`
width: ${props => props.width ? props.width : 'unset'};
height: 56.3px;
border-radius: 8px;
box-shadow: ${props => props.shadow ? '0 3px 60px 0' + props.bgColor + '88' : 'none'};
background: ${ props => props.bgColor ? props.bgColor : '#ff8dff'};
margin: 14px;
font-weight: bold;
display:flex;
align-items:center;
justify-content:center;
border: 1px solid #fff2;
color: ${ props => props.color ? props.color : '#bfbfbf'};
cursor: pointer;
&:hover{
  opacity: 0.9;
}
`;

const NameHeader = styled.div`
font-family: Roboto, SegoeUI, Arial, Helvetica, sans-serif;
font-size: 75px;
font-weight: normal;
font-style: normal;
font-stretch: normal;
line-height: 1.33;
letter-spacing: normal;
text-align: left;
color: ${ props => props.color ? props.color : '#bfbfbf'};
`;

const LogoHeader = styled.div`
height:176px;
`;

const Title = styled.div`
font-family: Roboto, SegoeUI, Arial, Helvetica, sans-serif;
font-size: 1.25rem;
font-weight: bold;
font-style: normal;
font-stretch: normal;
line-height: 1.32;
letter-spacing: normal;
text-align: left;
color: ${props => props.color ? props.color : "#666"};
padding: 20px;
padding: 20px;
`;

const Text = styled.div`
font-family: Roboto, SegoeUI, Arial, Helvetica, sans-serif;
font-size: 1rem;
font-weight: normal;
font-style: normal;
font-stretch: normal;
line-height: 1.36;
letter-spacing: normal;
text-align: left;
color: #2b0e33;
padding: 20px;
`;

const LogoCountiner = styled.div`
position:relative;
display:flex;
width:fit-content;
flex-direction: column;
align-items:center;
justify-items: center;
margin-top: 200px;
`;

const Column = styled.div`
display: flex;
width: ${props =>
    props.grid == 1 ? '8.33%' :
    props.grid == 2 ? '16.66%' :
    props.grid == 3 ? '25%' :
    props.grid == 4 ? '33.33%' :
    props.grid == 5 ? "41.66%" :
    props.grid == 6 ? "50%" :
    props.grid == 7 ? "58.33%" :
    props.grid == 8 ? "66.66%" :
    props.grid == 9 ? "75%" :
    props.grid == 10 ? "83.33%" :
    props.grid == 11 ? "91.66%" :
    props.grid == 12 ? "100%" :
        "100%"};
flex-wrap: wrap;
flex-direction: column;
`;
const Row = styled.div`
display:flex;
flex-direction: row;
`;

const BlockContent = styled.div`
padding: 20px;
margin: 40px;
margin-top: 60px;
background: rgba(100,100,100,0.05);
`;

const ContentCountiner = styled.div`
`;

const SidebarStyled = styled.div`

height: 100%;
background: ${props => props.color ? props.color : "#666"};
& > div {
  padding: 50px;
  padding-top: 100px;
height: 100%;
background: rgba(255,255,255,0.8);
content: "";
}
`;
const ItemStyled = styled.div`
color: ${props => props.color ? props.color : "#666"};
font-size: 19px;
line-height: 39px;
cursor: pointer;
&:hover{
  color: #999;

}
`;

export {
  Countiner,
  Nav,
  NavLogo,
  Header,
  ItemNav,
  LogoCountiner,
  Title,
  Text,
  LogoHeader,
  NameHeader,
  DescriptionHeader,
  BTNsHeader,
  Button,
  ContentCountiner,
  Column,
  Row,
  BlockContent,
  SidebarStyled,
  ItemStyled
}
