import React from "react";
import { NavBar, Buttom, Icons } from "../../share";
import { Link } from "react-router-dom";
import {
  Countiner,
  WrapperTopBlock,
  BlockquoteStyled,
  WrapperMidBlock,
  WrapperRowOfButtomStyled,
  InlineBlock,
  EndBlockStyled,
} from "./Styled";
import { TopBlock } from "./TopBlock";
import myPicture from "./shape/myPicture1.svg";
import graphicShape1 from "./shape/graphicShape1.svg";
import { Cout } from "./shape/Cout";
import { Path1 } from "./shape/Path1";
import { Path2 } from "./shape/Path2";
import { Path3 } from "./shape/Path3";
import { DownloadCV } from "../../module/DownloadCV/DownloadCV";
import { ContactBlockFooter } from "../../module/ContactBlockFooter/ContactBlockFooter";
// import { Github, Linkedin, Xing } from "./SocialIcon";
const { Github, Linkedin, Xing } = Icons;
const MainPage = () => (
  <Countiner>
    <NavBar />
    <InlineBlock>
      <WrapperTopBlock>
        <TopBlock />
        <WrapperRowOfButtomStyled>
          <Buttom
            onClick={(event) => {
              window.open("https://www.linkedin.com/in/chorakchi/");
            }}
          >
            <Linkedin />
          </Buttom>
          <Buttom
            onClick={(event) => {
              window.open("https://www.xing.com/profile/mohammad_chorakchi/cv");
            }}
          >
            <Xing />
          </Buttom>
          <Buttom
            onClick={(event) => {
              window.open("https://github.com/chorakchi");
            }}
          >
            <Github />
          </Buttom>
        </WrapperRowOfButtomStyled>
        <Path1 style={{ marginBottom: 110 }} />
      </WrapperTopBlock>
      <DownloadCV style={{ marginTop: -100 }} />
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
    <EndBlockStyled>
      <div
        style={{
          marginTop: 100,
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <img
          width={355}
          src={graphicShape1}
          style={{ paddingLeft: 110, marginBottom: 100 }}
        />
        <Path3 style={{ marginBottom: 110 }} />
      </div>
      <ContactBlockFooter />
    </EndBlockStyled>
  </Countiner>
);

export { MainPage };
