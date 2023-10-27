import styled, { css } from "styled-components";

export const SiteWrapper = styled.div<{$theme: string;}>`  
  ${props => 
          props.$theme === 'light' &&
          css`
            color: #3f3f3f;
            --et-grey: #ececec;
            --et-blue: #49a0d9;
            --et-blue-rgb: 73, 160, 217;
            --et-dark-blue: #2579b1;
            --et-darker-blue: #0f3147;
            --et-light-font: #d9d9d9;
            --et-navigation: 255, 255, 255;
            --et-navigation-border: #fafafa;
            --et-navigation-links: black;
            --et-work-description: #0f3147;
            --et-button: black;
            --et-light-grey: #fafafa;
            --et-light-grey-rgb: 250, 250, 250;
            --et-header-rgb: 250, 250, 250;
            --et-form-background: var(--et-navigation);
            --et-dark-grey: #797979;
            --et-site-bg: #fafafa;
          `}

  ${props =>
          props.$theme === 'dark' &&
          css`
            background-color: #0f3147;
            color: #fafafa;
            --et-grey: #ececec;
            --et-blue: #49a0d9;
            --et-blue-rgb: 73, 160, 217;
            --et-dark-blue: #2579b1;
            --et-darker-blue: #0f3147;
            --et-light-font: #d9d9d9;
            --et-navigation: 22, 52, 77;
            --et-navigation-border: #0f3147;
            --et-navigation-links: var(--et-light-font);
            --et-work-description: var(--et-blue);
            --et-button: var(--et-light-font);
            --et-light-grey: #fafafa;
            --et-light-grey-rgb: 250, 250, 250;
            --et-header-rgb: 15, 49, 71;
            --et-form-background: 3, 40, 58;
            --et-dark-grey: #797979;
            --et-site-bg: #0f3147;
          `}
`;

export const HideForLoading = styled.div<{$loading: boolean;}>`
  display: none
  
  ${props => !props.$loading &&
    css`
      display: block;
    `}
`;
