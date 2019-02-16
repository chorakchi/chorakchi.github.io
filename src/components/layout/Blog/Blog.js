import React from 'react'
import {
    Countiner,
    TopLogoCountiner,
    TopLogo,
    Path1,
    Path2,
    MainLogo,
    ContentCountiner,
    ContentPost,
    ItemList
} from './Styled';
import marked from "marked";
import Markdown from "react-markdown"
import { Typography, Nav } from "./../../common";
import picture from './../../../asset/image/hamburg-main.jpg';
import logo from './../../../asset/image/logo.svg';
import barcode from './../../../asset/image/barcode.svg';
import path1 from './../../../asset/image/path-1.svg';
import path2 from './../../../asset/image/path-2.svg';
import mainLogo from './../../../asset/image/block-logo.svg';
import post from './post1.md'
import { Title } from '../Projects/Styled';

class Blog extends React.Component {
    state={
        post: ""
    }

    render() {
        return <div>
            <Countiner>
                <TopLogoCountiner>
                    <TopLogo src={logo} />
                </TopLogoCountiner>
                <Path2 src={path2} />
                <ContentCountiner>
                    <Nav  onChangeRoute={ data=> this.props.onChangeRoute(data)}/>
                    <ContentPost>
                        <h1>Posts:</h1>
                        {this.props.data.map(items => <ItemList onClick={ data=> this.props.onChangeRoute('blog/'+items.path)}>{items.title}</ItemList>)}
                    </ContentPost>
                </ContentCountiner>
                <MainLogo src={mainLogo} />
                <Path1 src={path1} />
            </Countiner>
        </div>
    }
}
export { Blog }