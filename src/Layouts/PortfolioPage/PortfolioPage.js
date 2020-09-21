import React from "react";
import { NavBar, PageCountiner } from "../../shared";
import {
  TabStyled,
  TabContent,
  TabNavigator,
  TabNavigatorItem,
  TitleStyle,
} from "./styled";
import { Experience } from "./Experience";

const data = {
  tabs: [
    {
      label: "EXPERIENCE",
      content: {
        card: [
          {
            title: "Front-end Developer",
            date: "Oct 2019 to present",
            company: "akelius GmbH",
            city: "Berlin",
            description: "",
            lastpositionFlag: true,
          },
          {
            title: "Front-end Developer",
            date: "Jun 2018 to jan 2019",
            company: " at Convose",
            city: "Berlin Remotely",
            description: "",
            lastpositionFlag: false,
          },
          {
            title: "Front-end Developer",
            date: "Apr 2016 to Aug 2019",
            company: "at Mofid Securities and Mofid Entekhab",
            city: "Tehran",
            description: "",
            lastpositionFlag: false,
          },
          {
            title: "Front-end Developer",
            date: "Sep 2015 to Mar 2016",
            company: "Hero Holding",
            city: "Tehran",
            description: "",
            lastpositionFlag: false,
          },
          {
            title: "Front-end Developer",
            date: "2015 - 2016",
            company: "Freelance",
            city: "",
            description: "",
            lastpositionFlag: false,
          },
        ],
      },
    },
  ],
};

export const PortfolioPage = () => {
  return (
    <PageCountiner>
      <NavBar />
      <TitleStyle>PORTFOLIO</TitleStyle>
      <TabStyled>
        <TabNavigator>
          <TabNavigatorItem active>EXPERIENCE</TabNavigatorItem>
          {/* <TabNavigatorItem>PROJECTS</TabNavigatorItem> */}
          {/* <TabNavigatorItem>SKILLS</TabNavigatorItem> */}
        </TabNavigator>
        <TabContent>
          <Experience data={data.tabs[0].content} />
        </TabContent>
      </TabStyled>
    </PageCountiner>
  );
};
