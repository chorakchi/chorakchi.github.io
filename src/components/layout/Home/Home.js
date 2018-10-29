import React from 'react'
import {
    Countiner,
    MainBlock,
    Sidebar,
    BlockContent,
    TitleSidebar,
    ListItem,
    Divider,
    Bold,
    Content,
    Image
} from './Styled'
import picture from './../../../asset/image/hamburg-main.jpg'
class Home extends React.Component {
    render() {
        return <div>
            <Countiner>
                <MainBlock>
                    <Sidebar>
                        <TitleSidebar>
                            PORTFOLIO
                         </TitleSidebar>

                         <ListItem>SKILS</ListItem>
                         <ListItem>WORKS</ListItem>
                         <ListItem>EXPERIENCES</ListItem>
                         <Divider/>
                         <ListItem>CONTACT</ListItem>
                         <ListItem>BLOG</ListItem>
                         <ListItem>GALLERE</ListItem>
                    </Sidebar>
                    <BlockContent>
                    <TitleSidebar color="rgba(0,0,0,0.3)" size= "big">
                            SKILS
                         </TitleSidebar>
                         <Content>
                         <Bold>ReactJS, Redux, RxJS</Bold>
                             <br/>
                         React-Router, Jest(TDD, BDD method), Enzym.js HOC, Error Boundaries, Styled Component, container- presentatinal method , ServerSide Rendering, PWA, React-Fiber, PReact, ReactVR, storybook and addons 
                         </Content>
                         <Content>
                         <Bold>JavaScript, ECMAscript, ES5,6~8, Babel</Bold>
                             <br/>
                             JSS, JSX, flow.js, TypeScript, ESLint(Airbanb config ...) Functianal, Stateless, Async and Reactive programing
                             <Image src={picture}/>
                         </Content>
                         </BlockContent>
                </MainBlock>
            </Countiner>
        </div>
    }
}
export { Home }