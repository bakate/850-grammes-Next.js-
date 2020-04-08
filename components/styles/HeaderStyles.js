import styled from 'styled-components';

const HeaderStyles = styled.div`
  .bar {
    border-bottom: 7px solid ${props => props.theme.black};
    /* padding-bottom: 2rem; */
    display: grid;
    gap: 0.5rem;
    margin-top: 2rem;
    grid-template-columns: auto 1fr 1fr;
    justify-content: space-evenly;
    align-items: center;
    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
`;

const LogoStyles = styled.div`
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  transform: skew(-7deg);
  a {
    text-decoration: none;
    transition: ${({ theme }) => theme.mainTransition};
    .span1 {
      color: ${({ theme }) => theme.green};
      font-size: 2.5rem;
    }
    .span2 {
      color: ${({ theme }) => theme.primary};
      font-size: 2.5rem;
    }
    .span3 {
      display: block;
    }
    &:hover {
      text-transform: uppercase;
      font-size: 2.5rem;
      font-weight: bold;
    }
  }
  @media (max-width: 1300px) {
    margin: 0;
    text-align: center;
  }
`;

export { HeaderStyles, LogoStyles };
