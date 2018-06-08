import React from "react"
import styled, {css} from 'styled-components'
import LogoSVG from './../asset/icon/logo.svg'

const Header = styled.div`
position: fixed;
width: 100%;
height: 0;
overflow: visible;
`;

const InerHeader = styled.div`
position: relative;
transition: all 0.5s ease;
height: 100px;
background-color: rgba(255,255,0,0.8);
${props => props.scrolled && css`
height: 70px;
background-color: rgba(255,255,0,0.99);
`}
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
font-weight: bold;
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

${props => props.primary && css`
    background: rgba(255,255,255,1);
    color: white;
    &:hover{
background-color: rgba(255,255,255,0.8);
}
  `}
`;

const Link = styled.a`
text-decoration: none;
color: black;
`;



class HeaderOfPage extends React.Component {
    state = {
        scrolled: false
    }
    componentDidMount() {
        window.addEventListener('scroll', ()  => {
            if(window.pageYOffset != 0){
                this.setState({scrolled : true})
            } else {
                this.setState({scrolled : false})
            }
        });
    }

    render(){
        let style = { transform: 'translateY(0px)' };

    
        return (
            <Header>
            <InerHeader scrolled = {this.state.scrolled}>
                <ContainerHeader>
                    <Logo src={LogoSVG}/>
                    <ContaineLink>
                        <ItemLink ><Link href="email:m.chorakchi@gmail.com"  target="_blank" >Contact</Link></ItemLink>
                        <ItemLink>Portfolio</ItemLink>
                        <ItemLink><Link href="https://github.com/chorakchi"  target="_blank" >Github</Link></ItemLink>
                        <ItemLink><Link href="./blog">Blog</Link></ItemLink>
                        <ItemLink primary><Link href="https://chorakchi.github.io/">Home</Link></ItemLink>
                        </ContaineLink>
                    </ContainerHeader>
                </InerHeader>
            </Header>
        )
    }
}

export default HeaderOfPage