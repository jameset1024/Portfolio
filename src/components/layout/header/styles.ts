import styled, { css } from "styled-components";

export const ETHeader = styled.header<{$scrollDirection: string;}>`
  padding: 15px 0;
  border-bottom: solid thin lighten(black, 95%);
  background-color: white;
  position: fixed;
  width: 100vw;
  top:0;
  z-index: 999999;
  height: 60px;
  transition: transform linear 0.4s;
  
  @media only screen and (max-width: 767px) {
    padding: 15px;
  }
  
  ${props => 
          props.$scrollDirection === 'up' &&
          css`
            transform: translateY(0)
          `}

  ${props =>
          props.$scrollDirection === 'down' &&
          css`
            transform: translateY(-60px)
          `}
`;
