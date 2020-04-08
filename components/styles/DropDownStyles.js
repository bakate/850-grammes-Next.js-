import styled from 'styled-components';

const DropDown = styled.div`
  position: absolute;
  width: 100%;
  z-index: 2;
  border: 1px solid ${({ theme }) => theme.grey};
`;

const DropDownItem = styled.div`
  border-bottom: 2px solid ${({ theme }) => theme.grey};
  background: ${props => (props.highlighted ? props.theme.grey : 'white')};
  padding: 1rem;
  transition: ${({ theme }) => theme.mainTransition};
  ${props => (props.highlighted ? 'padding-left: 2rem;' : null)};
  display: flex;
  /* justify-content: center; */
  align-items: center;
  border-left: 10px solid
    ${props => (props.highlighted ? props.theme.darkGrey : 'white')};
  cursor: ${props => (props.highlighted ? 'pointer' : null)};
  img {
    margin-right: 15px;
  }
`;
export { DropDown, DropDownItem };
