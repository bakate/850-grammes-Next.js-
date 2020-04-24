import styled from 'styled-components';

const FormStyles = styled.form`
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  background: rgba(0, 0, 0, 0.02);
  border: 5px solid white;
  padding: 20px;
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 600;
  label {
    display: block;
    margin-bottom: 1rem;
  }
  input,
  textarea {
    width: 100%;
    padding: 0.7rem;
    font-size: 1.5rem;
    border: 1px solid black;
    &:focus {
      outline: 0;
      border-color: ${props => props.theme.primary};
    }
  }
  button,
  input[type='submit'] {
    width: auto;
    background: ${({ theme }) => theme.primary};
    color: white;
    border: 0;
    font-size: 2rem;
    font-weight: 700;
    cursor: pointer;
    padding: 0.5rem 1.2rem;
  }
  fieldset {
    border: 0;
    padding: 0;

    &::before {
      height: 10px;
      content: '';
      display: block;
      background-image: linear-gradient(
        to right,
        #fee140 0%,
        #ff9d00 100% /* #fa709a 100% */
      );
    }
  }
  .form-empty {
    text-align: center;
    color: #ff9d00;
  }
`;

export default FormStyles;
