import { Alert, AlertIcon, Button } from '@chakra-ui/core';
import { signupUser } from '../lib/api';
import useForm from '../lib/useForm';
import FormInputs from './chakra/FormInputs';
import { useInfos } from './context';
import Formify from './Form';

const Signin = () => {
  const { userLogin } = useInfos();

  const { inputs, handleChange } = useForm({
    email: '',
    password: '',
  });

  const isEmpty = !inputs.email || !inputs.password;

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await signupUser(inputs);
    await userLogin(res);
  };
  return (
    <form method="post" onSubmit={handleSubmit}>
      <Formify txtHelper="Nous sommes RGPD compliant, enfin je crois">
        {isEmpty && (
          <Alert status="warning">
            <AlertIcon />
            Pense &agrave; remplir tous les champs
          </Alert>
        )}
        <FormInputs
          iconName="email"
          label="email"
          type="email"
          placeholder="machin@gmail.com?"
          value={inputs.email}
          onChange={handleChange}
        />
        <FormInputs
          iconName="lock"
          label="password"
          type="password"
          placeholder="************"
          value={inputs.password}
          onChange={handleChange}
        />
        {!isEmpty && (
          <Button
            boxShadow="lg"
            mt={2}
            type="submit"
            mx="auto"
            variant="solid"
            variantColor="orange"
            _active={{ boxShadow: 'lg' }}
          >
            Se Connecter
          </Button>
        )}
      </Formify>
    </form>
  );
};
export default Signin;
