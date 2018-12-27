import React from 'react'
import {
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
} from './Styled';
import {Typography } from "./../../common";
import picture from './../../../asset/image/hamburg-main.jpg';
import logo from './../../../asset/image/logo.svg';
import barcode from './../../../asset/image/barcode.svg';
import path1 from './../../../asset/image/path-1.svg';
import path2 from './../../../asset/image/path-2.svg';
import mainLogo from './../../../asset/image/block-logo.svg';
class Home extends React.Component {
    render() {
        return <div>
            <Countiner>
            <Background bgImage = {picture}/>
            <TopLogoCountiner>
                <TopLogo src={logo}/>
            </TopLogoCountiner>
            <BarcodeCountiner>
                <Barcode src={barcode}/>
            </BarcodeCountiner>
            <Header>
                <ItemHeader><Typography variant="h5" >Home</Typography></ItemHeader>
                <ItemHeader onClick={()=> this.props.onChangeRoute("/home/Portfolio", {parentFilter: true})}><Typography variant="h5">Portfolio</Typography></ItemHeader>
                <ItemHeader><Typography variant="h5" >Blog</Typography></ItemHeader>
                <ItemHeader><Typography variant="h5" >Github</Typography></ItemHeader>
                <ItemHeader><Typography variant="h5" >Contact</Typography></ItemHeader>
            </Header>
            <Path1 src={path1}/>
            <Path2 src={path2}/>
            <MainLogo src={mainLogo}/>
            </Countiner>
        </div>
    }
}
export { Home }