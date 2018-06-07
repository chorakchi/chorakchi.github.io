import React from 'react'
import styled from 'styled-components'
import ReactLogo from './../asset/icon/react-logo.svg'
import JsLogo from './../asset/icon/js-logo.svg'

const Container = styled.div`
background-color: rgba(220,220,220,1);
padding: 10px 20% 50px 20% ;
display: flex;
flex-direction: row;
flex-wrap: wrap;
`;
const Title  = styled.h1`
font-weight: 100;
width: 100%;
padding: 50px 20% 10px 20% ;
border-left: 20px solid black;
background-color: rgba(220,220,220,1);
margin: 0;
`;

const Card  = styled.div`
max-width: 600px;
border: 1px solid black;
background-color: rgba(255,255,255,0.1);
padding: 10px;
margin: 10px;
`;

const TitleOfCard = styled.div`
font-weight:bold;
flex-direction:  row;
margin-bottom: 10px;
`;

const ContentOfCard = styled.div`
display: flex;
flex-direction:  row;
`;

const Icon = styled.img`
align-self: flex-end;
width:50px;
padding: 5px;
margin: 5px;
`;

const Tag = styled.div`
display: inline;
width: -moz-fit-content;
background: rgb(200,200,200);
color: black;
border-radius: 0px;
padding:10px;
margin: 10px;
`;

const Content = styled.div`
font-size: 20px;
color: black;

`;

const Quot = styled.span`
font-size: 60px;
line-height: 10px;
color: rgba(230,230,0,0.9);
position: relative;
top: 22px;
`;



class ContentHomePage extends React.Component {
    render(){
        return(
               <React.Fragment>
                    <Title>SKILLS</Title>
            <Container>
                <Card>
                    <TitleOfCard>
                    React, Redux,Rxjs
                    </TitleOfCard>
                    <ContentOfCard>
                    React-Router, Jest(TDD, BDD method), Enzym.js,
                    <br/>
                    HOC, Error Boundaries, styled-components, Container-Presentianl Methode, SSR,
                    <br/>
                    React-Fiber, PReact, ReactVR, PWA 
                    <Icon src={ReactLogo}/>
                    </ContentOfCard>
                </Card>
                <Card>
                    <TitleOfCard>
                    JavaScript, ECMAScript, ES5,6~8, Babel
                    </TitleOfCard>
                    <ContentOfCard>
                    JSS,JSX,FLow.js, TypeScript,
                    <br/>
                    Functinal, Stateless, Async, and Reactive Programing
                    <br/>
                    <Icon src={JsLogo}/>
                    </ContentOfCard>
                </Card>
                <Card>
                    <TitleOfCard>
                    React-Native
                    </TitleOfCard>
                    <ContentOfCard>
                    Mobile Application (ios, Android)
                    <br/>
                    expo, Nuclid, Ignit
                    <br/>
                    <Icon src={ReactLogo}/>
                    </ContentOfCard>
                </Card>
                <br/>
                <Card>
                    <TitleOfCard>
                    Nodejs
                    </TitleOfCard>
                    <ContentOfCard>
                    Express, MongoDB, Docker
                    <br/>
                    LoopBack, Meteor, Fraphcool,
                    <br/>
                    <Icon src={JsLogo}/>
                    </ContentOfCard>
                </Card>
            </Container>
            <Container>
                <Tag>HTML</Tag>
                <Tag>CSS</Tag>
                <Tag>SVG</Tag>
                <Tag>SASS</Tag>
                <Tag>NPM</Tag>
                <Tag>Webpack</Tag>
                <Tag>Styled-Components</Tag>
                <Tag>Angular 1 / 2~6</Tag>
                <Tag>Electron.jS</Tag>
                <Tag>PWA</Tag>
                </Container>
                <Container>

                <Content>
                            <Quot>"</Quot> "

 Flux Pattern (State management) Event Driven Programming,
<br/>
Reactive Programming GraphQL (the query language for API)
<br/>
Git, Git-flow, Atlassian stack, TFS, Agile, Scrum
<br/>
familiar with DI/IOC concept, CI/CD Flow Data Visualization, Visual Analytics, Interactive Visual Interfaces
<br/>
  Material Design, kendoUI, D3Js, highchart, . . . 
<Quot>"</Quot>
                        </Content>
            </Container>
               </React.Fragment>
        )
    }
}

export default ContentHomePage