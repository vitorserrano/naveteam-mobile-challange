import React, { useState, useRef } from 'react';
import { TextInput } from 'react-native';

import { Formik } from 'formik';
import * as Yup from 'yup';

import { useAuth } from '../../context/auth';

import { Input, Modal, Button } from '../../components';

import blackLogoLogoImage from '../../assets/img/blackLogo.png';
import { Container, Logo } from './styles';

import { IModal } from '../../types';
import { IForm, User } from './interface';

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
      <Logo source={blackLogoLogoImage} />

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
              isLoading={loading}
              title="Entrar"
              onPress={formik.handleSubmit}
              disabled={loading || !formik.isValid}
            />
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
