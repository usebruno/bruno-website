import { createGlobalStyle } from 'styled-components';

/**
 * Reponsive Breakpoints
 * - Extra small devices (portrait phones, less than 576px)
 * - Small devices (landscape phones, 640px and up)
 * - Medium devices (tablets, 768px and up)
 */
 
const GlobalStyle = createGlobalStyle`
  @keyframes rotateClockwise {
    0% {
      transform: scaleY(-1) rotate(0deg);
    }
    100% {
      transform: scaleY(-1) rotate(360deg);
    }
  }

  @keyframes rotateCounterClockwise {
    0% {
      transform: scaleY(-1) rotate(360deg);
    }
    100% {
      transform: scaleY(-1) rotate(0deg);
    }
  }

  html, body {
    margin: 0;
    padding: 0;
    font-size: 1rem;
    color: var(--color-text-primary);
    background-color: var(--color-body-bg);

    font-kerning: none;
    text-rendering: optimizeSpeed;
    letter-spacing: normal;

    min-width: 320px;
    min-height: 100vh;

    &.overflow-y-hidden {
      overflow-y: hidden;
    }
  }
  
  header {
    background-color: var(--color-body-bg);
  } 

  .font-inter {
    font-family: Inter;
  }
  
  a.link {
    color: rgb(0, 87, 188);
    cursor: pointer;
  
    &:hover {
      text-decoration: underline;
    }
  }

  div.container.root {
    width: 100%;
    min-height: 100vh;
    min-width: 320px;
    max-width: 100%;
    padding-left: 0;
    padding-right: 0;
  }

  div.about-page {
    p {
      margin-bottom: 1rem
    }
  }

  div.downloads-page {
    .react-tabs__tab--selected {
      background-color: rgb(217, 119, 6);
      color: white;
      border-radius: 0.375rem;
      user-select: none;

      .icon {
        stroke: white;
      }

      &:focus {
        outline: none;
      }
    }

    .react-tabs__tab-panel {
      border: none;
      padding-left: 0;
      padding-top: 1.5rem;
    }
  }

  main.privacy-page, main.terms-page {
    h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
      margin-bottom: .5rem;
      font-weight: 500;
      line-height: 1.2;
    }

    h1 {
      font-size: 1.5rem;
      margin-top: 1.5rem;

      &:first-of-type {
        margin-top: 0rem;
      }
    }

    p {
      margin-top: 0;
      margin-bottom: 1rem;
    }

    h2 {
      font-size: 1.25rem;
      margin-top: 1.2rem;
    }

    ul {
      margin-top: 0;
      margin-bottom: 1rem;

      display: block;
      list-style-type: disc;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      padding-inline-start: 40px;

      li {
        display: list-item;
        list-style-type: disc;
      }
    }
  }

  div.buy-golden-edition-page {
    .loading-icon {
      transform: scaleY(-1);
      animation: rotateCounterClockwise 1s linear infinite;
    }
  }
`;
 
export default GlobalStyle;