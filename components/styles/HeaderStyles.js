import styled from 'styled-components';

const HeaderStyles = styled.div`
  border-bottom: 7px solid ${props => props.theme.black};
  padding-bottom: 1.5rem;
  display: grid;
  gap: 0.5rem;
  margin-top: 2rem;
  grid-template-columns: auto 1fr 1fr;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    justify-content: center;
    border-bottom: 4px solid ${({ theme }) => theme.black};
  }
`;

const LogoStyles = styled.section`
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  transform: skew(-9deg);
  .logo{
    .span1 {
      color: ${({ theme }) => theme.green};
      font-size: 1.8rem;
    }
    .span2 {
      color: ${({ theme }) => theme.primary};
      font-size: 1.8rem;
    }
    .span3 {
      display: block;
    }
     }
    &:hover {
      text-transform: uppercase;
      font-size: 1.9rem;
      font-weight: bold;
    }

  @media (max-width: 1200px) {
    margin: 1rem 0;
    text-align: center;
    .logo {
  .span1 {
    font-size: 3rem;
  }
  .span2 {
    font-size: 3rem;
    }
    .span3 {
      display: none;
    }
  }
`;

export { HeaderStyles, LogoStyles };

