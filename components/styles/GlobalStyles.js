/* eslint-disable no-shadow */
import styled, { createGlobalStyle } from 'styled-components';

// Define what props.theme will look like
export const theme = {
  green: '#96ce66',
  black: '#393939',
  grey: '#E1E1E1',
  maxWidth: '1200px',
  radius: '10px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
  primary: '#ff9d00',
  primaryRGBA: 'rgba(0, 0, 0, 0.3)',
  darkGrey: '#5f5e5e',
  white: '#fff',
  mainTransition: 'all 0.3s ease-in-out',
  mainSpacing: '0.3rem',
  smallWidth: '300vw',
};

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'JetBrains Mono';
    src: url('/JetBrainsMono-Medium.woff2') format('woff2');
    font-weight: medium;
    font-style: medium;
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.7rem;
    line-height: 2;
    font-family: 'JetBrains Mono';
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
  button {  font-family: 'JetBrains Mono'; }

  .text-title {
  font-family: "JetBrains Mono", sans-serif;
  font-weight: bold;
  letter-spacing: ${({ theme }) => theme.mainSpacing};
  text-transform: capitalize;
}
.text-main {
  color: ${({ theme }) => theme.primary};
}
.main-link {
padding: 0.5rem 1rem;
/* display: inline-block; */
background: ${({ theme }) => theme.primary};
color: ${({ theme }) => theme.white};
text-transform: uppercase;
letter-spacing: ${({ theme }) => theme.mainSpacing};
outline: 2px solid ${({ theme }) => theme.primary};
outline-offset:5px;
border:none;
transition: ${({ theme }) => theme.mainTransition};
&:hover {
  background: ${({ theme }) => theme.green};
 /* color: ${({ theme }) => theme.primary}; */
  outline-color: ${({ theme }) => theme.green};
}
}
`;
export const Inner = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

export const StyledPage = styled.div`
  background: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.black};
`;
