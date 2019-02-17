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
class Skils extends React.Component {
    state = {
        show: true
    }
    render() {
        return <React.Fragment>
            <BlockContent>
                <TitleSidebar color="rgba(0,0,0,0.3)" size="big">SKILS</TitleSidebar>
                <Content>
                    <Bold>FRONT-END DEVELOPER</Bold>
                    
                    <br /> 
                    Implement modular and scalable web application in JavaScript.
Front-end DevOps, mindset and experience building big single page applications.
Self-motivation, evolving and improving the tools in use.
<br/>
researching and implementing new UI technologies, and exploring future trends.
                         </Content>
                <Content>
                    <Bold>ReactJS, Redux, RxJS</Bold>
                    <br />
                    React-Router, Jest(TDD, BDD method), Enzym.js HOC, Error Boundaries, Styled Component, container- presentatinal method , ServerSide Rendering, PWA, React-Fiber, PReact, ReactVR, storybook and addons
                         </Content>
                <Content>
                    <Bold>JavaScript, ECMAscript, ES5,6~8, Babel</Bold>
                    <br />
                    JSS, JSX, flow.js, TypeScript, ESLint(Airbanb config ...) Functianal, Stateless, Async and Reactive programing
                             <Image src={picture} />
                </Content>
            </BlockContent>
        </React.Fragment>
    }
}
export default Skils 