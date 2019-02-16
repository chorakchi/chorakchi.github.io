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
background: rgb(255, 255, 255);
top:0;
bottom: 0;
right:0;
left:0;
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
width: 100%;

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
const Title = styled.span`
font-weight: 700;
padding:15px;
color : ${props => props.color ? props.color : "#333"};
`;
const Description = styled.span`
padding:15px;
`;


const CountinerContent = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap ;
overflow: auto;
position: absolute;
bottom: 0 ;
top: 0px;

`;

const Content = styled.div`
font-size:20px;
margin:1%;
display: flex;
width: 42%;
background : ${props => props.color ? props.color+"11" : "#fff1"};
border-radius: 8px;
color: rgba(0,0,0,0.7);
transition: all 200ms ease-in-out;
border: 1px solid #dbdbdb;
cursor: pointer;
&:hover{
    background : ${props => props.color ? props.color+"33" : "#fff3"};
}
`;
const CloseBTN = styled.div`
position:absolute;
right:0;
top:0;
margin:40px;
cursor: pointer;
`;

const IconBLock = styled.div`
padding:5px;
margin:20px;
position:relative;
height: 57px;
width: 62px;
z-index:1;

&:before{
    filter: blur(20px);
    position:absolute;
    background: rgb(170,57,57);
    /* background : ${props => props.color ? props.color : "#333"}; */
box-shadow: 0 0 10px 3px #000;
background: rgb(170,57,57);
background: linear-gradient(76deg, rgba(170,57,57,1) 0%, rgba(178,210,116,1) 39%, rgba(105,242,238,1) 75%, rgba(255,230,15,1) 100%); 
    top:20px;
    right:10px;
    left:10px;
    z-index:-1;
    bottom: -10px;
    transition: all 500ms ease-in-out;
    content:" ";
}

&:after{
    border-radius: 12px;
    position:absolute;
    background : white;
    top:0;
    right:0;
    left:0;
    z-index:-1;
    bottom: 0;
content:" ";
}
`;

export {
    Countiner,
    MainBlock,
    Sidebar,
    BlockContent,
    TitleSidebar,
    ListItem,
    Divider,
    Title,
    Content,
    CloseBTN,
    IconBLock,
    Description,
    CountinerContent
}
