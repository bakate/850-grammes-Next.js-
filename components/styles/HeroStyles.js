import styled from 'styled-components';

export const HeroStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  place-content: center;
  place-items: center;
  text-align: center;
  min-height: ${props => (props.max ? '100vh' : '60vh')};
  background: url(${props => props.img}) center/cover no-repeat;
  color: ${props => (props.color ? props.theme.black : props.theme.white)};
  border-radius: ${({ theme }) => theme.radius};
  h1,
  h2 {
    padding-top: 2rem;
    font-size: 3.5rem;
    box-shadow: 7px 4px 2px rgba(0, 0, 0, 0.2);
    text-transform: uppercase;
    letter-spacing: ${({ theme }) => theme.mainSpacing};
  }
`;
