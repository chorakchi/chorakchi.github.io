import React, { useState } from "react";
import { NavBar, Buttom, Icons, PageCountiner } from "../../shared";
import {
  WrapperTopBlock,
  BlockquoteStyled,
  WrapperMidBlock,
  WrapperRowOfButtomStyled,
  BlockStyled,
  EndBlockStyled,
  WrapperFooterShapeStyled,
} from "./Styled";
import { TopBlock } from "./TopBlock";
import myPicture from "./shape/myPicture1.svg";
import graphicShape1 from "./shape/graphicShape1.svg";
import qrcodeContact from "./shape/qrcodeContact.svg";
import { Cout } from "./shape/Cout";
import { Path1 } from "./shape/Path1";
import { Path2 } from "./shape/Path2";
import { Path3 } from "./shape/Path3";
import { DownloadCV } from "../../module/DownloadCV/DownloadCV";
import { ContactBlockFooter } from "../../module/ContactBlockFooter/ContactBlockFooter";
import { ContactPopUp } from "../../module/ContactPopUp/ContactPopUp";
const { Github, Linkedin, Xing } = Icons;
const MainPage = () => {
  const [showContact, setShowContact] = useState(false);

  return (
    <PageCountiner>
      <NavBar showContact={() => setShowContact(true)} />
      <BlockStyled>
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
                window.open(
                  "https://www.xing.com/profile/mohammad_chorakchi/cv"
                );
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
      </BlockStyled>
      <WrapperMidBlock>
        <img
          alt="Picture1"
          width={355}
          src={myPicture}
          style={{ paddingRight: 110 }}
        />
        <Cout style={{ left: -20, top: -220 }} />
        <Cout style={{ top: -50, left: 500 }} />
        <BlockquoteStyled>
          Technical architect for agile development.
          <br />
          Data/Content modeling and thinking in a reusable component-oriented
          way.
          <br />
          Rapid prototype with React from scratch
          <br />
          JAMstack, Isomorphic Server Side Rendering, static PWA generation.
          <br />
          TDD/ BDD method, Flux Pattern in State management & stateless
          functional programming,
          <br />
          Event Driven/ Reactive Programming.
          <br />
          Git, git-flow, CI/CD Flow, Atlassian stack, Agile, Scrum
          <br />
          Material Design, kendoUI, D3Js, Highchart, AMChart . . .
          <br />
          Data Visualization, Visual Analytics, Interactive Visual Interfaces
          <br />
          Familar with Adobe XD, Zeplin, Sketch and other Design Tools <br />
          <br />
          <br />
          <br />
          <Path2 style={{ marginBottom: 110 }} />
        </BlockquoteStyled>
      </WrapperMidBlock>
      <EndBlockStyled>
        <WrapperFooterShapeStyled>
          <img
            alt="shape"
            width={511}
            src={graphicShape1}
            style={{ marginBottom: 100 }}
          />
          <Path3 style={{ marginBottom: 110 }} />
        </WrapperFooterShapeStyled>
        <ContactBlockFooter qrcode={qrcodeContact} />
      </EndBlockStyled>
      <ContactPopUp
        qrcode={qrcodeContact}
        show={showContact}
        onClose={() => setShowContact(false)}
      />
    </PageCountiner>
  );
};

export { MainPage };
