import React from "react";
import { NavBar, Buttom, Icons } from "../../share";
import {
  Countiner,
  WrapperTopBlock,
  BlockquoteStyled,
  WrapperMidBlock,
  WrapperRowOfButtomStyled,
  InlineBlock,
} from "./Styled";
import { TopBlock } from "./TopBlock";
import myPicture from "./shape/myPicture1.svg";
import { Cout } from "./shape/Cout";
import { Path1 } from "./shape/Path1";
import { Path2 } from "./shape/Path2";
import { DownloadCV } from "../../module/DownloadCV/DownloadCV";
// import { Github, Linkedin, Xing } from "./SocialIcon";
const { Github, Linkedin, Xing } = Icons;
const MainPage = () => (
  <Countiner>
    <NavBar />
    <InlineBlock>
      <WrapperTopBlock>
        <TopBlock />
        <WrapperRowOfButtomStyled>
          <Buttom>
            <Linkedin />
          </Buttom>
          <Buttom>
            <Xing />
          </Buttom>
          <Buttom>
            <Github />
          </Buttom>
        </WrapperRowOfButtomStyled>
        <Path1 style={{ marginBottom: 110 }} />
      </WrapperTopBlock>
      <DownloadCV />
    </InlineBlock>
    <WrapperMidBlock>
      <img width={355} src={myPicture} style={{ paddingRight: 110 }} />
      <Cout style={{ left: -20, top: -220 }} />
      <Cout style={{ top: -50, left: 500 }} />
      <BlockquoteStyled>
        Technical architect for agile development.
        <br />
        Data/Content modeling and thinking in a reusable component-oriented way.
        <br />
        Rapid prototype with React from scratch
        <br />
        JAMstack, Isomorphic Server Side Rendering, static PWA generation.
        <br />
        TDD/ BDD method, Flux Pattern in State management & stateless functional
        programming,
        <br />
        Event Driven/ Reactive Programming.
        <br />
        Git, git-flow, CI/CD Flow, Atlassian stack, Agile, Scrum
        <br />
        Material Design, kendoUI, D3Js, Highchart, AMChart . . .
        <br />
        Data Visualization, Visual Analytics, Interactive Visual Interfaces
        <br />
        Familiar with Adobe XD, Zeplin, Sketch and other Design Tools <br />
        <br />
        <br />
        <br />
        <Path2 style={{ marginBottom: 110 }} />
      </BlockquoteStyled>
    </WrapperMidBlock>
  </Countiner>
);

export { MainPage };
