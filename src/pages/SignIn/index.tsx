import React, { useState, useRef } from 'react';
import { TextInput } from 'react-native';

import { Formik } from 'formik';
import * as Yup from 'yup';

import { useAuth } from '../../context/auth';

import Input from '../../components/Input';
import Modal from '../../components/Modal';
import Loader from '../../components/Loader';

import blackLogo from '../../assets/img/blackLogo.png';
import { colors } from '../../theme/colors';
import { Container, Logo, Button, Title } from './styles';

interface IForm {
  email: string;
  password: string;
}

type User = {
  email: string;
  password: string;
};

interface IModal {
  isVisible: boolean;
  title?: string;
  message?: string;
}

const SignIn: React.FC = () => {
  const initialValues: IForm = { email: '', password: '' };

  const [modal, setModal] = useState<IModal>({ isVisible: false });

  const [loading, setLoading] = useState(false);

  const passwordInputRef = useRef<TextInput>(null);

  const userSchema: Yup.SchemaOf<User> = Yup.object().shape({
    email: Yup.string()
      .email('E-mail inválido.')
      .required('E-mail é um campo obrigatório.'),
    password: Yup.string().required('Senha é um campo obrigatório.'),
  });

  const { signIn } = useAuth();

  const handleOnSubmit = async (values: User) => {
    setLoading(true);

    try {
      const { email, password } = values;

      await signIn(email, password);
    } catch (error) {
      setModal({
        isVisible: true,
        title: 'Erro',
        message: 'Credendicais incorretas!',
      });
      setLoading(false);
    }
  };

  return (
    <Container>
      <Logo source={blackLogo} />

      <Formik
        initialValues={initialValues}
        validationSchema={userSchema}
        onSubmit={values => handleOnSubmit(values)}
      >
        {formik => (
          <>
            <Input
              name="email"
              label="E-mail"
              placeholder="E-mail"
              returnKeyType="next"
              onSubmitEditing={() => passwordInputRef.current?.focus()}
              {...formik}
            />

            <Input
              ref={passwordInputRef}
              name="password"
              label="Senha"
              placeholder="Senha"
              blurOnSubmit={false}
              onSubmitEditing={formik.handleSubmit}
              secureTextEntry
              {...formik}
            />

            <Button
              onPress={formik.handleSubmit}
              disabled={loading || !formik.isValid}
            >
              {loading && <Loader size={22} color={colors.secondary} />}
              {!loading && <Title>Entrar</Title>}
            </Button>
          </>
        )}
      </Formik>

      <Modal
        isVisible={modal.isVisible}
        title={modal.title}
        message={modal.message}
        onRequestClose={() => setModal({ isVisible: false })}
      />
    </Container>
  );
};

export default SignIn;
