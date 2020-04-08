import styled from 'styled-components';

const Item = styled.div`
  background: ${({ theme }) => theme.white};
  border: 1px solid ${({ theme }) => theme.grey};
  border-radius: ${({ theme }) => theme.radius};
  box-shadow: ${({ theme }) => theme.bs};
  transition: ${({ theme }) => theme.mainTransition};
  position: relative;
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    transition: ${({ theme }) => theme.mainTransition};
  }
  p span {
    font-size: 14px;
    line-height: 2;
    font-weight: 400;
    flex-grow: 1;
    padding: 0 3rem;
    font-size: 1.5rem;
  }
  .buttonList {
    display: grid;
    width: 100%;
    border-top: 1px solid ${props => props.theme.grey};
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-gap: 1px;
    background: ${props => props.theme.grey};
    & > * {
      background: white;
      border: 0;
      font-family: 'JetBrains Mono';
      font-size: 1rem;
      padding: 1rem;
    }
  }
  &:hover img {
    opacity: 0.6;
  }
`;

export default Item;
