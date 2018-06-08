import React from 'react'
import BackgroundPic from "./../asset/image/background1.jpg"
import styled from 'styled-components'

const ContainerHeaderPage = styled.div`
width: 100%;
min-height: ${window.innerHeight - 400 + 'px'}; 
background-image: url(${BackgroundPic});
background-attachment: fixed;
background-size: cover;
background-position: bottom;
display: flex;
padding-top: 180px;
align-items: center;
`;

const ContainerTitle = styled.div`
`;

const Title = styled.div`
padding: 0 10px;
padding-left: 20%;
border-left: 20px solid black;
font-size: 40px;
line-height: 60px;
width: -moz-fit-content;
`;

const Title2 = styled.div`
margin: 5px;
background-color: black;
color: white;
padding: 0 10px;
margin-left: 21%;
font-size: 40px;
width: -moz-fit-content;
`;

const Content = styled.div`
font-size: 20px;
color: black;
width: 50%;
padding-left: 21%;
`;

const Quot = styled.span`
font-size: 60px;
line-height: 10px;
color: rgba(230,230,0,0.9);
position: relative;
top: 22px;
`;

const Btn = styled.a`
color: black;
text-decoration: none;
background-color: yellow;
margin: 10px;
font-weight: bold;
padding: 10px 30px;
display: flex;
margin: 10px 21%;
border: 5px solid yellow;
width: -moz-fit-content;
float:right;
cursor: pointer;
&:hover{
    background-color: rgba(255,255,255,0.7);
}
`;

class HeaderMainPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <ContainerHeaderPage>
                    <ContainerTitle>
                        <Title style={{fontSize:36 }}>JAVASCRIPT FULL-STACKER</Title>
                        <Title style={{ fontWeight: 'bold' }}>FRONT-END DEVELOPER</Title>
                        <br/>
                        <br/>
                        <Title2>MOHAMMAD</Title2>
                        <Title2>CHORAKCHI</Title2>
                        <br />
                        <Content>
                            <Quot>"</Quot> Implement modular and scalable web application in JavaScript.
                            Front-end DevOps, mindset and experience building big single page applications.
                            Self-motivation, evolving and improving the tools in use.
                             researching and implementing new UI technologies, and exploring future trends. <Quot>"</Quot>
                        </Content>
                        <Btn href="./CV-Chorakchi.pdf">Download CV .pdf</Btn>
                    </ContainerTitle>
                </ContainerHeaderPage>
            </React.Fragment>
        )
    }
}

export default HeaderMainPage