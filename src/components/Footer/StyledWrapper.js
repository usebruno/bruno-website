import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  margin-top: 4rem;

  footer {
    border-top: solid 1px rgba(0, 0, 0, 0.1);

    ul.links {
      color: ${props => props.theme.colors.black2};
    }
  }
`;

export default Wrapper;
