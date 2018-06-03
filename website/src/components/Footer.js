import React from "react"
import styled from 'styled-components';

const classNamees = {
    header: {
        color: 'red'

    }
}

const Icons = styled.ul`
position: relative;
left: -10px;
display: flex;
flex-flow: row nowrap;
max-width: 300px;
justify-content: space-between;
align-items: center;
`;
const Title = styled.h1`
  font-size: 1.5em;
  text-aIcongn: center;
  color: palevioletred;
`;

const Container = styled.div`
position: relative;
width: 100%;
background-color:#e7f0f7;
padding:100px 3.5%;
display: flex;
font-size: 14px;
`;
const Icon = styled.li`
display: flex;
align-items: center;
justify-content: center;
width: 31px;
height: 31px;
border-radius: 50%;
transition: background .2s;
&:hover{
background-color: #fff;
}
`;
const Contacts = styled.div`
position: relative;
display: flex;
flex-flow: column nowrap;
justify-content: flex-start;
height: 100%;
flex: 0 0 310px;
`;
const MenuWrap = styled.div`
flex: 0 0 66.6666666%;
display: flex;
justify-content: space-between;
align-items: flex-start;
flex-flow: row nowrap;
`;

const Email = styled.a`
color: #8a97ab;
font-size: 12px;
font-weight: 400;
line-height: 2;
margin-top: 10px;
align-self: flex-start;
text-decoration: none;
`; 
const Description = styled.p`
color: #8a97ab;
line-height: 1.5;
font-weight: 300;
font-family: Open Sans,sans-serif;
font-size: inherit;
margin-bottom: 20px;
`;
const TradeMark = styled.p`
color: #8a97ab;
line-height: 1.5;
margin: 0;
padding: 0;
font-weight: 300;
font-size: inherit;
`;



class Footer extends React.Component {
    render() {
        // const {classNamees } = this
        return (
            <React.Fragment>
                <Container>
                {/* https://kickcity.io/ */}
                    <div className="styles__kc-wrap___1WfJ4">
   <Description>
      Chorakchi is&nbsp;a&nbsp;decentraIconzed event platform and marketing protocol which is&nbsp;using the Blockchain technology to&nbsp;reward their users for promoting events and buying tickets.
   </Description>
   <TradeMark>©&nbsp;2018&nbsp;</TradeMark>
</div>
<MenuWrap>
   <Contacts>
      <Icons className="styles__social-Iconnks___2pu6z">
         <Icon>
            <a href="https://www.facebook.com/">
               <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14">
                  <path fill="#8A9AAB" fill-rule="nonzero" d="M7.699.003L5.779 0C3.625 0 2.232 1.352 2.232 3.445v1.589H.301A.294.294 0 0 0 0 5.32V7.62c0 .158.135.286.302.286H2.23v5.808c0 .157.135.285.302.285H5.05a.294.294 0 0 0 .302-.285V7.907h2.255a.294.294 0 0 0 .302-.286L7.91 5.32a.278.278 0 0 0-.088-.202.31.31 0 0 0-.214-.084H5.352V3.687c0-.647.163-.975 1.054-.975h1.292A.294.294 0 0 0 8 2.425V.288a.294.294 0 0 0-.301-.285z"></path>
               </svg>
            </a>
         </Icon>
         <Icon>
            <a href="https://twitter.com/">
               <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"  viewBox="0 0 512 512">
                  <g fill="none" fill-rule="evenodd">
                     <path fill="#8A9AAB" fill-rule="nonzero" d="M512,97.3c-18.8,8.4-39.1,14-60.3,16.5c21.7-13,38.3-33.6,46.2-58.1c-20.3,12-42.8,20.8-66.7,25.5 c-19.2-20.4-46.4-33.2-76.7-33.2c-58,0-105,47-105,105c0,8.2,0.9,16.3,2.7,23.9c-87.3-4.4-164.7-46.2-216.5-109.7 c-9.1,15.5-14.2,33.5-14.2,52.8c0,36.4,18.6,68.6,46.7,87.4c-17.2-0.6-33.4-5.3-47.6-13.2v1.3c0,50.9,36.2,93.3,84.2,103 c-8.8,2.4-18.1,3.7-27.7,3.7c-6.8,0-13.3-0.7-19.8-2c13.4,41.8,52.2,72.1,98.1,72.9c-35.9,28.2-81.2,44.9-130.4,44.9 c-8.5,0-16.8-0.5-25.1-1.4c46.5,29.9,101.7,47.3,161,47.3c193.2,0,298.8-160,298.8-298.8l-0.4-13.6 C480.1,136.8,498,118.3,512,97.3z"></path>
                  </g>
               </svg>
            </a>
         </Icon>
         <Icon>
            <a href="https://t.me/">
               <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12">
                  <path fill="#8A9AAB" fill-rule="nonzero" d="M.247 5.754l3.226 1.185 1.249 3.953c.08.254.394.347.603.18l1.798-1.444a.543.543 0 0 1 .654-.018l3.243 2.318c.224.16.54.04.596-.226L13.992.452a.378.378 0 0 0-.51-.426L.245 5.054a.373.373 0 0 0 .003.7zm4.274.554l6.304-3.822c.113-.069.23.082.133.17L5.755 7.419c-.183.168-.301.392-.335.636l-.177 1.293c-.023.172-.27.19-.318.022l-.682-2.358a.62.62 0 0 1 .278-.703z"></path>
               </svg>
            </a>
         </Icon>
         <Icon>
            <a href="https://github.com/">
               <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12">
                  <g fill="#8A9AAB" fill-rule="evenodd">
                     <path fill-rule="nonzero" d="M12.83 3.298c.152-.46.228-.935.228-1.428a4.13 4.13 0 0 0-.429-1.854c-.599 0-1.128.11-1.587.332-.459.22-.982.564-1.57 1.028a9.838 9.838 0 0 0-2.351-.272c-.907 0-1.772.1-2.595.298C3.927.926 3.398.576 2.94.352 2.48.128 1.95.016 1.344.016A4.13 4.13 0 0 0 .915 1.87c0 .498.076.98.227 1.445C.381 4.216 0 5.338 0 6.68c0 1.18.173 2.117.52 2.814.185.369.426.695.723.978.296.283.635.513 1.016.689.38.175.764.321 1.15.438a7.37 7.37 0 0 0 1.28.254 18.68 18.68 0 0 0 2.432.132c.515 0 .982-.013 1.402-.038.42-.025.9-.088 1.44-.187.54-.099 1.016-.234 1.428-.404.411-.17.806-.413 1.184-.73.378-.318.673-.695.886-1.131.341-.703.512-1.641.512-2.815 0-1.349-.38-2.476-1.142-3.383zm-1.007 6.185c-.179.37-.406.663-.68.875a3.23 3.23 0 0 1-1.024.51c-.41.128-.8.212-1.176.251-.375.04-.792.06-1.251.06H6.28c-.459 0-.876-.02-1.251-.06a6.106 6.106 0 0 1-1.176-.25 3.23 3.23 0 0 1-1.024-.51 2.404 2.404 0 0 1-.68-.876c-.18-.372-.27-.807-.27-1.305 0-.68.194-1.259.58-1.735.387-.476.91-.714 1.57-.714.241 0 .787.06 1.638.179.398.062.837.093 1.318.093.482 0 .921-.03 1.319-.093.862-.12 1.408-.179 1.637-.179.66 0 1.184.238 1.57.714.387.476.58 1.054.58 1.735 0 .498-.09.934-.269 1.305z"></path>
                     <path d="M4.908 6.834a.788.788 0 0 0-.609-.289.788.788 0 0 0-.609.29 1.68 1.68 0 0 0-.36.645c-.07.238-.106.47-.106.698 0 .226.035.459.105.697.07.238.19.453.361.646.171.192.374.289.61.289a.788.788 0 0 0 .608-.29c.17-.192.291-.407.361-.645.07-.238.105-.47.105-.697 0-.227-.035-.46-.105-.698a1.68 1.68 0 0 0-.36-.646zM10.282 6.834a.788.788 0 0 0-.608-.289.788.788 0 0 0-.61.29c-.17.192-.29.407-.36.645-.07.238-.105.47-.105.698 0 .226.035.459.105.697.07.238.19.453.36.646.172.192.375.289.61.289a.788.788 0 0 0 .608-.29c.171-.192.291-.407.361-.645.07-.238.105-.47.105-.697 0-.227-.035-.46-.104-.698a1.684 1.684 0 0 0-.362-.646z"></path>
                  </g>
               </svg>
            </a>
         </Icon>
         <Icon>
            <a href="https://www.instagram.com/">
               <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                  <g fill="none" fill-rule="evenodd">
                     <path fill="#8A9AAB" fill-rule="nonzero" d="M1.54 0h8.92C11.307 0 12 .627 12 1.54v8.92c0 .913-.693 1.54-1.54 1.54H1.54C.693 12 0 11.373 0 10.46V1.54C0 .627.693 0 1.54 0zm7.202 1.333a.542.542 0 0 0-.54.54v1.294c0 .297.242.54.54.54h1.356c.297 0 .54-.243.54-.54V1.874a.542.542 0 0 0-.54-.54H8.742zm1.902 3.742H9.588c.1.326.154.672.154 1.03 0 1.995-1.67 3.613-3.73 3.613S2.281 8.1 2.281 6.104c0-.358.054-.703.154-1.03H1.334v5.07c0 .262.214.477.477.477h8.356a.478.478 0 0 0 .477-.477v-5.07zM6.01 3.639c-1.33 0-2.41 1.045-2.41 2.335s1.08 2.335 2.41 2.335c1.331 0 2.41-1.045 2.41-2.335s-1.078-2.335-2.41-2.335z"></path>
                  </g>
               </svg>
            </a>
         </Icon>
      </Icons>
      <Email className="styles__email___2Qi9V" href="mailto:info@kickcity.io">m.chorakchi@gmail.com</Email>
   </Contacts>
</MenuWrap>
                </Container>
            </React.Fragment>
        )
    }
}

export default Footer