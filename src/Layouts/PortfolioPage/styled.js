import styled from "styled-components";

export const Countiner = styled.div`
  padding: 0 170px;
`;
export const TitleStyle = styled.div`
  position: relative;
  font-family: Helvetica;
  font-size: 50px;
  font-weight: bold;
  line-height: 1.2;
  text-align: left;
  color: #ffe60f;
  top: -30px;
  left: 190px;
`;

export const TabStyled = styled.div`
  display: flex;
`;

export const TabContent = styled.div`
  background-color: #f4f4f4;
  padding-left: 34px;
  padding-top: 45px;
  padding-bottom: 45px;
  padding-right: 350px;
`;
export const TabNavigator = styled.div`
  padding-top: 100px;
  width: 260px;
`;
export const TabNavigatorItem = styled.div`
background-color: ${(props) => (props.active ? "#f4f4f4" : "none")};
font-family: Helvetica;
  font-size: 21px;
  font-weight: bold;
  line-height: 1.19;
  text-align: left;
  color: #2b2e34;
  padding: 16px;
  padding-left: 46px;
}
`;
