import styled from 'styled-components'

const Countiner = styled.div`
position: fixed;
top: 0;
bottom: 0;
right: 0;
left: 0;
/* background-color: rgb(250, 247, 236); */
background-color: rgba(0, 0, 0, 0.51);
`;

const MainBlock = styled.div`
position: absolute;
display:flex;
background: rgb(243, 201, 55);
top:0;
bottom: 0;
right:0;
left:0;
border-radius:8px;
overflow: hidden;
transition: all 0.3s cubic-bezier(.25,.8,.25,1);
box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
`;

const Sidebar = styled.div`
background-color: rgb(48, 48, 48);
height: 100%;
`;

const TitleSidebar = styled.div`
font-size:${props => props.size == "big" ? "60px" : props.size == "ultra-big" ? "80px" : "37px"};
padding: 20px 70px;
padding-top: 100px;
color: ${props => props.color ? props.color : "rgb(243, 201, 55)" };

font-weight: bold;
font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
`;
const Divider = styled.div`
margin: 10px 30px;
border-top: 1px solid rgba(255,255,255, 0.1);
`;

const ListItem = styled.div`
font-size:20px;
padding: 20px 70px;
color: rgb(243, 201, 55);
font-weight: 600;
transition: all 0.1s ease-in-out;
cursor: pointer;
border-left: 5px solid rgba(122, 181, 239, 0);
&:hover{
    background-color: rgba(122, 181, 239, 0.2);
    border-left: 5px solid rgba(122, 181, 239, 0.5);
}
font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
`;

const BlockContent = styled.div`
position: relative;
flex:1;

`;
const Bold = styled.span`
font-weight: 700;
`;

const Content = styled.div`
font-size:20px;
margin:70px;
line-height: 35px;
width:600px;
color: rgba(0,0,0,0.7);
`;

const Image = styled.img`
position:absolute;
bottom: 100px;
right: 120px;
width:500px;
height: 500px;
/* filter: grayscale(100%); */
filter: sepia(1);
opacity:0.9;
border-right: 5px solid rgb(255, 100, 0);
border-bottom: 5px solid rgb(255, 100, 0);
box-shadow: 0 14px 48px rgba(0,0,0,0.25), 0 10px 100px rgba(0,0,0,0.22);
`;

const CloseBTN = styled.div`
position:absolute;
right:0;
top:0;
`;


export {
    Countiner,
    MainBlock,
    Sidebar,
    BlockContent,
    TitleSidebar,
    ListItem,
    Divider,
    Bold,
    Content,
    Image,
    CloseBTN
}
