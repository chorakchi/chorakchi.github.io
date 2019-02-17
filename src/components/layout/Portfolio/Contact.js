import React from 'react'
import {
    BlockContent,
    TitleSidebar,
    Bold,
    Content,
    Image,
} from './Styled'

import { PopUp, Icon } from "./../../common"
class Contact extends React.Component {
    state = {
        show: true
    }
    render() {
        return <React.Fragment>
            <BlockContent>
                <TitleSidebar color="rgba(0,0,0,0.3)" size="big">
                    CONTACT
                         </TitleSidebar>
                <Content>
                    <Bold>m.chorakchi@gmail.com</Bold>
                    <br />
                    +98-903-123-7730
                         </Content>
                <Content>
                    <Bold>Skype: (live:m.chorakchi)</Bold>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                </Content>
            </BlockContent>
        </React.Fragment>
    }
}
export default Contact 