import React from 'react'
import {
    BlockContent,
    TitleSidebar,
    Bold,
    Content,
    Image,
} from './Styled'

import { PopUp, Icon } from "./../../common"
import picture from './../../../asset/image/hamburg-main.jpg'
class Experiences extends React.Component {
    state = {
        show: true
    }
    render() {
        return <React.Fragment>
            <BlockContent>
                <TitleSidebar color="rgba(0,0,0,0.3)" size="big">
                    EXPERIENCES
                         </TitleSidebar>
                <Content>
                    <Bold>Front-end Developer</Bold>
                    <br />
                    Jun 2018 to Present
                    <br />
                    at Convose Startup in Berlin Remotly
                         </Content>
                <Content>
                    <Bold>Front-end Developer</Bold>
                    <br />
                    Apr 2016 to Present
                    <br />
                    at Mofid Securities and Mofid Entekhab in Tehran
                         </Content>
                <Content>
                    <Bold>Java & Web Design</Bold>
                    <br />
                    2015 - 2016
                    <br />
                    IEEE, Tehran University
                         </Content>
                <Content>
                    <Bold>Front-end Developer</Bold>
                    <br />
                    2015 - 2016
                    <br />
                    Hero Holding
                         </Content>
                <Content>
                    <Bold>Web Designer</Bold>
                    <br />
                    2015 - 2016
                    <br />
                    Freelance
                         </Content>
            </BlockContent>
        </React.Fragment>
    }
}
export default Experiences 