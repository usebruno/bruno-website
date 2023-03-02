import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  margin-top: 4rem;

  footer {
    border-top: solid 1px rgba(0, 0, 0, 0.1);
  }

  a {
    font-size: 1rem;
    color: #6b7280;

    &:hover {
      color: #4b5563;
      text-decoration: underline;
    }
  }
`;

export default Wrapper;
