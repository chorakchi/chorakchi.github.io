import React from 'react'
import { NavBar, Buttom } from './../../Common'
import {
    Countiner,
    WrapperTopBlock,
    BlockquoteStyled,
    WrapperMidBlock,
    WrapperRowOfButtomStyled
} from './Styled'
import { TopBlock } from './TopBlock'
import myPicture from './myPicture1.svg'
import {Cout} from './Cout'
import { Path1 } from "./Path1";
import { Path2 } from "./Path2";
import {Github, Linkedin, Xing, Skype, Facebook, Twitter} from './SocialIcon'

const MainPage = () => (
    <Countiner>
        <NavBar />
        <WrapperTopBlock>
            <TopBlock />
            <WrapperRowOfButtomStyled>
                <Buttom><Github/></Buttom>
                <Buttom><Linkedin/></Buttom>
                <Buttom><Xing/></Buttom>
                <Buttom><Skype/></Buttom>
                <Buttom><Facebook/></Buttom>
                <Buttom><Twitter/></Buttom>
            </WrapperRowOfButtomStyled>
            <Path1 style={{marginBottom: 110}}/>
        </WrapperTopBlock>
        <WrapperMidBlock>
        <img width={355} src={myPicture} style={{paddingRight:110}} />
        <Cout style={{left: -20, top: -220}}/>
        <Cout style={{top: -50, left:500}}/>
        <BlockquoteStyled>Technical architect for agile development.
<br />Data/Content modeling and thinking in a reusable component-oriented way.
<br />Rapid prototype with React from scratch
<br />JAMstack, Isomorphic Server Side Rendering, static PWA generation.
<br />TDD/ BDD method, Flux Pattern in State management & stateless functional programming,
<br />Event Driven/ Reactive Programming.
<br />Git, git-flow, CI/CD Flow, Atlassian stack, Agile, Scrum
<br />Material Design, kendoUI, D3Js, Highchart, AMChart . . .
<br />Data Visualization, Visual Analytics, Interactive Visual Interfaces
<br />Familiar with Adobe XD, Zeplin, Sketch and other Design Tools <br/>
<br/>
<br/>
<br/>
<Path2 style={{marginBottom: 110}}/>
        </BlockquoteStyled>
        </WrapperMidBlock>
    </Countiner>
)

export { MainPage }