import styled from 'styled-components';

const FooterStyles = styled.footer`
  background: ${({ theme }) => theme.grey};
  color: ${({ theme }) => theme.black};
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
  .logos {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .icon {
    font-size: 2rem;
    cursor: pointer;
    color: ${({ theme }) => theme.black};
    transition: ${({ theme }) => theme.mainTransition};
    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }

  @media (max-width: 700px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

export default FooterStyles;
