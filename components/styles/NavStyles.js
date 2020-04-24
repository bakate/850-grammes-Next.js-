import styled from 'styled-components';

const NavStyles = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-self: end;
  font-size: 1.5rem;
  a,
  button {
    padding: 1rem;
    display: flex;
    align-items: center;
    position: relative;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 1em;
    background: none;
    border: 0;
    cursor: pointer;
    color: ${({ theme }) => theme.black};
    font-weight: 800;
    @media (max-width: 768px) {
      font-size: 10px;
      padding: 0 5px;
    }
    &:before {
      content: '';
      /* width: 2px;
      background: ${({ theme }) => theme.grey};
      height: 100%;
      left: 0;
      position: absolute;
      transform: skew(-20deg);
      top: 0;
      bottom: 0; */
    }
    &:after {
      height: 2px;
      background: ${({ theme }) => theme.primary};
      content: '';
      width: 0;
      position: absolute;
      transform: translateX(-50%);
      transition: width 0.4s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
      left: 50%;
      margin-top: 2.3rem;
    }
    &:hover,
    &:focus {
      outline: none;
      &:after {
        width: calc(100% - 60px);
      }
    }
  }

  @media (max-width: 1200px) {
    border-top: 1px solid ${props => props.theme.grey};
    width: 100%;
    justify-content: center;
  }
  @media (min-width: 1201px) {
    align-items: center;
   a,button {
    padding: 1rem;
  }
  }
`;
const OptionStyles = styled.div`
button {
  padding: .5rem 1rem;
}

  .categories {
    position: absolute;
    z-index: 5;
  }
  .drops {
    display: none;
    color: ${({ theme }) => theme.primary};
    opacity: 0;

    li {
      list-style-type: none;
      a {
      transition: ${({ theme }) => theme.mainTransition};
      background: ${({ theme }) => theme.primary};
      text-transform: lowercase;
      padding-top: 0;
      width: 100%;

      &:hover {
        background: ${({ theme }) => theme.green};
        text-transform: uppercase;
        padding-left: 1rem;
        box-shadow: ${({ theme }) => theme.bs};
        /* border-radius: ${({ theme }) => theme.radius}; */
        margin: 1rem;
      }
             &:active {
                outline: none;
                    }
          }
    }
  }

  &:hover .drops {
    display: block;
    opacity: 1;
  }
  @media (max-width: 768px) {
    button {
      padding: 1.4rem 0;
    }
  .drops{
    a {
     &:hover {
        padding: 0 .5rem;

    }
  }
  }
}
  @media (max-width: 1200px) {
    button {
      padding-top: 1.5rem;
    }
  .drops{
    a {
     &:hover {
        padding: 0 1rem;

    }
  }
  }
}
`;
export { NavStyles, OptionStyles };

