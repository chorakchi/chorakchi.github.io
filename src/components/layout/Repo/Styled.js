import styled from 'styled-components'

const Countiner = styled.div`
position: fixed;
top: 0;
bottom: 0;
right: 0;
left: 0;
background-color: withe;
background-size: cover;
`;

const Background = styled.div`
position: relative;
height: 100%;
width: 100%;
background-image:${props => props.bgImage ?  "url("+props.bgImage+")" : "none" };
background-size: cover;
opacity: 0.1;
`;

const TopLogoCountiner = styled.div`
background-color: #ffe60f;
position:fixed;
top:0;
left:180px;
padding: 50px 35px 131px 35px;
`;

const TopLogo = styled.img`
width: 100px;
`;

const BarcodeCountiner = styled.div`

position:fixed;
top:0;
left:0px;
padding: 47px 35px 47px;
 `;

const Barcode = styled.img`
width: 85px;
`;

const Header = styled.div`

padding-top: 85px;
display: flex;
`;

const ItemHeader = styled.div`
padding: 15px;
border-top-right-radius: 20px;
cursor: pointer;
&:hover{
    background-color: #ffe60f;
}
`;

const Path1 = styled.img`
position:fixed;
left: 0;
top: 255px;
width:210px;                          
`;

const Path2 = styled.img`
position:absolute;
right: 0px;
bottom: 10px;
width:172px;
`;

const MainLogo = styled.img`
position:fixed;
top: 100px;
right: 30px;
width:300px;
`;

const ContentCountiner = styled.div`
position: fixed;
left: 340px;
right:0;
top:0;
bottom: 0px;
padding: 30px;
padding-right: 340px;
overFLow: auto;
`;

const TitlePost = styled.div`
padding: 100px 364px 30px 65px;

`;
const ContentPost = styled.div`
background-color: #f8f8f8;
padding: 41px;
`;


export {
    Countiner,
    Background,
    TopLogoCountiner,
    TopLogo,
    BarcodeCountiner,
    Barcode,
    Path1,
    Path2,
    MainLogo,
    Header,
    ItemHeader,
    ContentCountiner,
    TitlePost,
    ContentPost
}
