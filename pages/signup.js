import styled from 'styled-components';
import Signup from '../components/Signup';
import Signin from '../components/Signin';

const Column = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 20px;
`;

const signup = () => (
  <Column>
    <Signup />
    <Signin />
  </Column>
);

export default signup;
