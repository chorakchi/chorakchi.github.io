import React from "react"
import styled from 'styled-components'
import LogoSVG from './../asset/icon/logo.svg'

const Header = styled.div`
position: fixed;
width: 100%;
height: 0;
overflow: visible;
`;

const InerHeader = styled.div`
position: relative;
height: 100px;
background-color: rgba(255,255,0,0.9);
`;

const ContainerHeader = styled.div`
position: relative;
display: flex;
align-items: center;
height: 100%;
margin: 0 10% ;
`;

const Logo = styled.img`
width: 80px;
`;

const ContaineLink = styled.ul`
position: relative;
display: flex;
flex-flow: row nowrap;
justify-content: space-between;
align-items: left;
margin-left: auto;
`;

const ItemLink = styled.li`
display: flex;
align-items: center;
justify-content: center;
margin: 5px;
padding: 5px 15px;
cursor: pointer;
height: 31px;
transition: background .2s;
&:hover{
background-color: #fff;
}
`;

const Link = styled.a`
text-decoration: none;
color: black;
`;


class HeaderOfPage extends React.Component {
    render(){
        return (
            <Header>
            <InerHeader>
                <ContainerHeader>
                    <Logo src={LogoSVG}/>
                    <ContaineLink>
                        <ItemLink ><Link href="email:m.chorakchi@gmail.com"  target="_blank" >Contact</Link></ItemLink>
                        <ItemLink>Portfolio</ItemLink>
                        <ItemLink><Link href="https://github.com/chorakchi"  target="_blank" >Github</Link></ItemLink>
                        <ItemLink><Link href="./blog">Blog</Link></ItemLink>
                        <ItemLink><Link href="https://chorakchi.github.io/">Home</Link></ItemLink>
                        </ContaineLink>
                    </ContainerHeader>
                </InerHeader>
            </Header>
        )
    }
}

export default HeaderOfPage