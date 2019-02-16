import styled from 'styled-components';


const CountinerStyled = styled.div`

padding-top: 60px;
display: flex;
`;

const ItemStyled = styled.div`
padding: 15px;
border-top-right-radius: 20px;
cursor: pointer;
transition: all 500ms ease-in-out;
&:hover{
    background: linear-gradient(0deg, rgba(224,224,224,1) 0%, rgba(255,230,15,1) 100%);
}
`;


export {
  CountinerStyled, ItemStyled
};
