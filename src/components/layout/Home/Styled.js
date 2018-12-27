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
position: fixed;
left: 340px;
top:0;
padding-left: 30px;
padding-top: 85px;
display: flex;
`;

const ItemHeader = styled.div`
color: #2B2E34;
font-size: 23px;
padding: 15px;
font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
border-top-right-radius: 30px;
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
position:fixed;
right: 0;
bottom: 10px;
width:172px;
`;

const MainLogo = styled.img`
position:fixed;
top: 30%;
right: 20%;
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
    ItemHeader
}
