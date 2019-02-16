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
padding-right: 20%;
overFLow: auto;
`;

const TitlePost = styled.div`
padding: 100px 364px 30px 65px;
`;

const ContentPost = styled.div`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
background-color: #a2a2a21a;
padding: 24px;
&>h1{
    padding: 100px 364px 30px 15px;
    background: white;
    font-size: 40px;
    font-weight: lighter;
    margin: -24px;
    margin-bottom: 24px;
};
`;

const ItemList = styled.div`
padding: 20px;
margin:19px;
cursor: pointer;
background: linear-gradient(0deg, rgba(218, 218, 218, 0.4) 0%, rgb(210, 210, 210) 100%);
border-radius: 8px;
&:hover{
    background: #dfd166aa;
}
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
    ContentCountiner,
    TitlePost,
    ContentPost,
    ItemList
}
