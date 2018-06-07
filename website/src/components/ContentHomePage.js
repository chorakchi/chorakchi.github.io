import React from 'react'
import styled from 'styled-components'
import ReactLogo from './../asset/icon/react-logo.svg'

const Container = styled.div`
background-color: rgba(220,220,220,1);
padding: 50px 20% ;
`;
const Title  = styled.h1`
margin: 10px;
font-weight: 100;
`;

const CardSkill  = styled.div`
display: flex;
max-width: 400px;
flex-direction:;
border: 1px solid black;
background-color: rgba(255,255,255,0.1);
padding: 10px;
margin: 10px;
`;

const Icon = styled.img`
width:50px;
padding: 5px;
margin: 5px;
background-color: white;
`;



class ContentHomePage extends React.Component {
    render(){
        return(
            <Container>
                <Title>SKILLS</Title>
                <CardSkill>
                    React, Redux,Rxjs
                    <be/>
                    React-Router, Jest(TDD, BDD method), Enzym.js,
                    <br/>
                    HOC, Error Boundaries, styled-components, Container-Presentianl Methode, SSR,
                    <br/>
                    React-Fiber, PReact, ReactVR, PWA 
                    <Icon src={ReactLogo}/>
                </CardSkill>
                <CardSkill>
                    JavaScript, ECMAScript, ES5,6~8, Babel
                    <br/>
                    JSS,JSX,FLow.js, TypeScript,
                    <br/>
                    Functinal, Stateless, Async, and Reactive Programing
                    <br/>
                </CardSkill>
            </Container>
        )
    }
}

export default ContentHomePage