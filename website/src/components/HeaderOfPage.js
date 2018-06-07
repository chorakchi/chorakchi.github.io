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


class HeaderOfPage extends React.Component {
    render(){
        return (
            <Header>
            <InerHeader>
                <ContainerHeader>
                    <Logo src={LogoSVG}/>
                    <ContaineLink>
                        <ItemLink>Contact</ItemLink>
                        <ItemLink>Portfolio</ItemLink>
                        <ItemLink>Github</ItemLink>
                        <ItemLink>Blog</ItemLink>
                        <ItemLink>Home</ItemLink>
                        </ContaineLink>
                    </ContainerHeader>
                </InerHeader>
            </Header>
        )
    }
}

export default HeaderOfPage