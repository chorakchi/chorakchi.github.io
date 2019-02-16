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
background: linear-gradient(0deg, rgb(221, 208, 106) 0%, rgb(255, 230, 15) 100%);
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

const NavWrapper = styled.div`
position: fixed;
left: 340px;
top:30px;
padding-left: 30px;
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
    NavWrapper
}
