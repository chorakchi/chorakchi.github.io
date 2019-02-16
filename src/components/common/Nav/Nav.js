import React from 'react';
import {Typography} from './../../common'
import { CountinerStyled, ItemStyled } from './Styled';

const Nav = ({ ...props}) => (
  <CountinerStyled
    {...props}
  >
                        <ItemStyled onClick={() => props.onChangeRoute("/home")}><Typography variant="h5" >Home</Typography></ItemStyled>
                        <ItemStyled onClick={() => props.onChangeRoute("/home/Portfolio")}><Typography variant="h5">Portfolio</Typography></ItemStyled>
                        <ItemStyled onClick={() => props.onChangeRoute("/blog")}><Typography variant="h5" >Blog</Typography></ItemStyled>
                        <ItemStyled onClick={() => props.onChangeRoute("/home/projects")}><Typography variant="h5" >Projects</Typography></ItemStyled>
                        <ItemStyled onClick={() => props.onChangeRoute("/home/Portfolio/contact")}><Typography variant="h5" >Contact</Typography></ItemStyled>
  </CountinerStyled>
);

export  {
  Nav
};
  
