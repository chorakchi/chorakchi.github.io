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
                    <Bold>ReactJS, Redux, RxJS</Bold>
                    <br />
                    React-ddons
                         </Content>
                <Content>
                    <Bold>JavaScript, ECMAscript, ES5,6~8, Babel</Bold>
                    <br />
                    JSS, 
                </Content>
            </BlockContent>
        </React.Fragment>
    }
}
export default Experiences 