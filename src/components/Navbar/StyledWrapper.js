import styled from 'styled-components';

const Wrapper = styled.div`
  a {
    margin-left: 1rem;
  }

  &:after {
    content: "";
    position: absolute;
    left: 0px;
    right: 0px;
    height: 4px;
  }

  button.toggle {
    outline: none !important;
    box-shadow: none !important;

    &:focus, &:active {
      outline: none !important;
      box-shadow: none !important;
    }

    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }

  nav {
    display: flex;
    flex-direction: column;
    position: absolute;
    background: white;
    width: 100%;
    top: 5rem;
    left: 0;
    align-items: flex-start;
    padding-top: 0.8rem;
    border-bottom: solid 1px white;
    z-index: 100;
    box-shadow: rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 10%) 0px 4px 6px -1px, rgb(0 0 0 / 6%) 0px 2px 4px -1px;

    &.hidden {
      display: none !important;
    }

    a {
      margin-bottom: 0.8rem;
    }

    @media (min-width: 640px) {
      position: relative;
      top: 0;
      align-items: center;
      width: initial;
      border-bottom: none;
      box-shadow: none;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      flex-direction: row;

      a {
        margin-bottom: initial;
      }
    }
  }
`;

export default Wrapper;
