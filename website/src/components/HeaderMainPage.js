import React from 'react'
import BackgroundPic from "./../asset/image/background1.jpg"
import styled from 'styled-components'

const ContainerHeaderPage = styled.div`
width: 100%;
height: ${window.innerHeight - 200 + 'px'}; 
background-image: url(${BackgroundPic});
display: flex;
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


class HeaderMainPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <ContainerHeaderPage>
                    <ContainerTitle>
                        <Title style={{fontSize:37.5 }}>JAVASCRIPT FULL-STAKER</Title>
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
                    </ContainerTitle>
                </ContainerHeaderPage>
            </React.Fragment>
        )
    }
}

export default HeaderMainPage