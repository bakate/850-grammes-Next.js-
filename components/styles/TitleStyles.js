import styled from 'styled-components';

const TitleStyles = styled.div`
  padding: 0 1.5rem 1rem 1.5rem;
  display: grid;
  /* align-items: center; */
  grid-template-columns: repeat(auto-fit, minmax(75px, 1fr));
  margin: 0 1rem;
  /* margin: 0.1rem; */
  div {
    text-align: ${props => (props.centerTitle ? 'center' : 'left')};
    h1,
    h2 {
      text-transform: capitalize;
      font-size: 2rem;
    }
    hr {
      height: ${props => (props.hr ? '0.4rem' : '0')};
      width: ${props => (props.hr ? '8rem' : '0')};
      background: ${props => (props.hr ? props.theme.primary : 'none')};
      margin: ${props => (props.centerTitle ? '0 auto' : '0')};
    }
  }
`;

export default TitleStyles;
