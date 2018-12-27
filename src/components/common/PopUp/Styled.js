import styled, {css} from 'styled-components'


const Container = styled.div` 
position:fixed;
top:0;
z-index: 9999;
left:0;
width:100%;
height:100%;
background-color: rgba(66, 66, 66, 0.7);
z-index:9999999999;
display:flex;
${props => !props.showBg && css`
display:none
`}
${props => props.show && css`
@keyframes showPopupCountainerStyledAnimaet {
  from {
    opacity:0;
    backdrop-filter: none;
}
to {
    opacity:1;
    backdrop-filter: blur(5px) contrast(.8);
}
}
animation: showPopupCountainerStyledAnimaet 300ms ease ;
animation-fill-mode: forwards;
`}
${props => props.show == false && css`

@keyframes hidePopupCountainerStyledAnimaet {
    from {
        opacity:1;
        backdrop-filter: blur(5px) contrast(.8);
    }
    to {
        opacity:0;
        backdrop-filter: none;
  }
}
animation: hidePopupCountainerStyledAnimaet 300ms ease ;
animation-fill-mode: forwards;
`}
`;
const Popup = styled.div`
position: relative;
${props => props.width && css`
width: ${props.width};
`}
${props => props.height && css`
height: ${props.height};
`}
/* border-bottom: 5px solid #272757; */
border-radius: 8px;
@media (max-width: 900px) {
      ${ css`
      width: 100%;
height: 100%;
      ` }
    }
margin: auto;
box-shadow: 0 1px 3px 0 rgba(60, 64, 67, 0.3), 0 4px 8px 3px rgba(60, 64, 67, 0.15);
background-color:white;
${props => props.show && css`
@keyframes DrawerStyledAnimaet {
  from {
    transform: translate(0, 50px);
  }
  to {
    transform: translate( 0, 0);
  }
}
animation: DrawerStyledAnimaet 300ms ease ;
animation-fill-mode: forwards;
`}
${props => props.show == false && css`

@keyframes hideDrawerStyledAnimaet {
  from {
    transform: translate( 0, 0);
    opacity:1;
  }
  to {
    transform: translate(0, 50px);
    opacity:0;
  }
}
animation: hideDrawerStyledAnimaet 300ms ease ;
animation-fill-mode: forwards;
`}
`;


export {Container, Popup }