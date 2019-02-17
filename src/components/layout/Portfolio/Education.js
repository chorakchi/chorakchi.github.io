import React from 'react'
import {
    BlockContent,
    TitleSidebar,
    Bold,
    Content,
    Image,
} from './Styled'

import { PopUp, Icon } from "./../../common"
class Education extends React.Component {
    state = {
        show: true
    }
    render() {
        return <React.Fragment>
            <BlockContent>
                <TitleSidebar color="rgba(0,0,0,0.3)" size="big">
                    EDUCATION
                         </TitleSidebar>
                <Content>
                    <Bold>  Bachelor's degree</Bold>
                    <br />
                    Computer software engineering
                    <br />
                    Azad arak university  2009 - 2012
                         </Content>
                <Content>
                    <Bold>FreeCodeCamp</Bold>
                    <br />
                    Full Stack Developer Certificate
                    <br />
                    2017 - in study
                </Content>
                <Content>
                    <Bold>LANGUAGE</Bold>
                    <br />
                    English -  efficiently for work and communicate fluently about technical topics
                    <br />
                    Germany - in study
                </Content>
            </BlockContent>
        </React.Fragment>
    }
}
export default Education 