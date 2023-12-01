import { createGlobalStyle } from 'styled-components';

/**
 * Reponsive Breakpoints
 * - Extra small devices (portrait phones, less than 576px)
 * - Small devices (landscape phones, 640px and up)
 * - Medium devices (tablets, 768px and up)
 */
 
const GlobalStyle = createGlobalStyle`
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

  body {
    font-size: 1.125rem;
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
`;
 
export default GlobalStyle;