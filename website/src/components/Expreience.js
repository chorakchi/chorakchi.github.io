import React from 'react'
import styled from 'styled-components'
import ReactLogo from './../asset/icon/react-logo.svg'
import JsLogo from './../asset/icon/js-logo.svg'

const Container = styled.div`
background-color: rgba(240,240,240,1);
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
background-color: rgba(240,240,240,1);
margin: 0;
`;

const Card  = styled.div`
display: flex;
width: 100%;
background-color: rgba(255,255,255,0.5);
margin: 10px;
`;

const SummerPartCard = styled.div`
padding: 10px;
background-color: rgba(255,255,0,0.6);
color: black;
width: 300px;
text-align: right;


`;

const TitleOfCard = styled.div`
font-weight:bold;
flex-direction:  row;
margin-bottom: 10px;
`;

const ContentOfCard = styled.div`
padding: 10px;
display: flex;
flex-direction:  row;
height: 100px;
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



class Expreience extends React.Component {
    render(){
        return(
               <React.Fragment>
                    <Title>Experiences</Title>
            <Container>
                <Card>
                <SummerPartCard>
                    <TitleOfCard>Front-end Developer</TitleOfCard>
                    Apr 2016 to Present
                    <br/>
                    <br/>
                    <TitleOfCard>At Mofid Securities <br/>and Mofid Entekhab</TitleOfCard>
                   </SummerPartCard>
                    <ContentOfCard>
                    • development in JS, ES6, React, Redux, Rx.js, GraphQL <br/>
                    • Test development, BDD <br/>
                    • CSS, HTML and JS <br/>
                    • highChart, kendo-UI, d3js, Material design<br/>
                    </ContentOfCard>
                </Card>
                <Card>
                <SummerPartCard>
                    <TitleOfCard>Java & Web Design</TitleOfCard>
                    May 2016 to Apr 2016
                    <br/>
                    <br/>
                    <TitleOfCard>IEEE <br/>Tehran University</TitleOfCard>
                   </SummerPartCard>
                    <ContentOfCard>
                        Teaching
                    <br/>
                    <br/>
                    • Open Courses java for Android <br/>
                    • Open Courses Web Design
                    </ContentOfCard>
                </Card>
                <Card>
                <SummerPartCard>
                    <TitleOfCard>Front-end Developer</TitleOfCard>
                    Sep 2015 to May 2016
                    <br/>
                    <br/>
                    <TitleOfCard>Hero Holding</TitleOfCard>
                   </SummerPartCard>
                    <ContentOfCard>
                    Pinus startup project(Live sports score, Sports news) <br/>• HTML, CSS, JS, Angular
                    </ContentOfCard>
                </Card>
                <Card>
                <SummerPartCard>
                    <TitleOfCard>Web Designer</TitleOfCard>
                    2011 to May 2014
                    <br/>
                    <br/>
                    <TitleOfCard>Freelance</TitleOfCard>
                   </SummerPartCard>
                    <ContentOfCard>
                    Design - Multimedia - web <br/>• Photoshop, corelDraw, Indesign <br/>• HTML, CSS

                    </ContentOfCard>
                </Card>
            </Container>
                <Container>
            </Container>
               </React.Fragment>
        )
    }
}

export default Expreience