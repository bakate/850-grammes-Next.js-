import { Alert, AlertIcon, Button } from '@chakra-ui/core';
import { signupUser } from '../lib/api';
import useForm from '../lib/useForm';
import FormInputs from './chakra/FormInputs';
import { useInfos } from './context';
import Formify from './Form';

const Signup = () => {
  const { userLogin } = useInfos();

  const { inputs, handleChange } = useForm({
    username: '',
    email: '',
    password: '',
  });

  const isEmpty = !inputs.email || !inputs.username || !inputs.password;

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await signupUser(
      inputs.username,
      inputs.email,
      inputs.password
    );
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
          iconName="info-outline"
          label="Username"
          type="text"
          placeholder="Comment est-ce qu'on doit t'appeler"
          value={inputs.username}
          onChange={handleChange}
        />
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
          placeholder="&ccedil;a reste secret"
          value={inputs.password}
          onChange={handleChange}
        />
        {!isEmpty && (
          <Button
            boxShadow="lg"
            type="submit"
            mt={2}
            mx="auto"
            variant="solid"
            variantColor="orange"
            _active={{ boxShadow: 'lg' }}
          >
            S'Inscrire
          </Button>
        )}
      </Formify>
    </form>
  );
};
export default Signup;
