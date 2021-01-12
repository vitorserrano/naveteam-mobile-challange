import React, { useState, useRef } from 'react';
import { TextInput } from 'react-native';

import { useRoute } from '@react-navigation/native';

import { Formik } from 'formik';
import * as Yup from 'yup';

import api from '../../services/api';

import { Input, Modal, Button } from '../../components';

import { Container, Title, Form } from './styles';

import { IModal } from '../../types';
import { IForm, INaverSchema } from './interface';
import { formatDate } from '../../helpers';

const FormNaver: React.FC = () => {
  const route = useRoute();
  const routeParams = route.params as IForm;

  const [modal, setModal] = useState<IModal>({ isVisible: false });
  const [loading, setLoading] = useState(false);

  const initialValues: IForm = {
    name: '' || routeParams?.name,
    job_role: '' || routeParams?.job_role,
    birthdate: routeParams.birthdate ? formatDate(routeParams?.birthdate) : '',
    admission_date: routeParams.admission_date
      ? formatDate(routeParams?.admission_date)
      : '',
    project: '' || routeParams?.project,
    url: '' || routeParams?.url,
  };

  const dateRegex = /^\d{2}([./-])\d{2}\1\d{4}$/;

  const naverSchema: Yup.SchemaOf<INaverSchema> = Yup.object().shape({
    name: Yup.string().required('Nome é um campo obrigatório'),
    job_role: Yup.string().required('Cargo é um campo obrigatório'),
    birthdate: Yup.string()
      .matches(dateRegex, 'Data com formato inválido (00/00/0000)')
      .required('Data de aniversário é um campo obrigatório'),
    admission_date: Yup.string()
      .matches(dateRegex, 'Data com formato inválido (00/00/0000)')
      .required('Data de admissão é um campo obrigatório.'),
    project: Yup.string().required('Projetos é um campo obrigatório'),
    url: Yup.string().required('Url é um campo obrigatório'),
  });

  const jobRoleInputRef = useRef<TextInput>(null);
  const birthdateInputRef = useRef<TextInput>(null);
  const admissionDateInputRef = useRef<TextInput>(null);
  const projectInputRef = useRef<TextInput>(null);
  const urlInputRef = useRef<TextInput>(null);

  const handleOnSubmit = async (values: IForm) => {
    setLoading(true);

    try {
      if (routeParams.id) {
        await api.put(`/navers/${routeParams.id}`, values);

        setModal({
          isVisible: true,
          title: 'Naver editado',
          message: 'Naver editado com sucesso!',
        });

        setLoading(false);

        return;
      }

      await api.post('/navers', values);

      setModal({
        isVisible: true,
        title: 'Naver adicionado',
        message: 'Naver adicionado com sucesso!',
      });

      setLoading(false);
    } catch (error) {
      setModal({
        isVisible: true,
        title: 'Erro',
        message: `Não foi possível ${
          routeParams?.id ? `editar` : `adicionar`
        } o naver.`,
      });

      setLoading(false);
    }
  };

  return (
    <Container>
      <Title>{`${routeParams?.id ? `Editar` : `Adicionar`} naver`}</Title>

      <Formik
        initialValues={initialValues}
        validationSchema={naverSchema}
        onSubmit={(values, { resetForm }) => {
          handleOnSubmit(values);

          if (!routeParams.id) {
            resetForm({
              values: {
                name: '',
                job_role: '',
                birthdate: '',
                admission_date: '',
                project: '',
                url: '',
              },
            });
          }
        }}
      >
        {formik => (
          <Form>
            <Input
              name="name"
              label="Nome"
              placeholder="Nome"
              returnKeyType="next"
              onSubmitEditing={() => jobRoleInputRef.current?.focus()}
              {...formik}
            />

            <Input
              ref={jobRoleInputRef}
              name="job_role"
              label="Cargo"
              placeholder="Cargo"
              returnKeyType="next"
              onSubmitEditing={() => birthdateInputRef.current?.focus()}
              {...formik}
            />

            <Input
              ref={birthdateInputRef}
              name="birthdate"
              label="Data de aniversário"
              placeholder="Data de aniversário (00/00/0000)"
              returnKeyType="next"
              onSubmitEditing={() => admissionDateInputRef.current?.focus()}
              {...formik}
            />

            <Input
              ref={admissionDateInputRef}
              name="admission_date"
              label="Data de admissão"
              placeholder="Data de admissão (00/00/0000)"
              returnKeyType="next"
              onSubmitEditing={() => projectInputRef.current?.focus()}
              {...formik}
            />

            <Input
              ref={projectInputRef}
              name="project"
              label="Projetos que participou"
              placeholder="Projetos que participou"
              returnKeyType="next"
              onSubmitEditing={() => urlInputRef.current?.focus()}
              {...formik}
            />

            <Input
              ref={urlInputRef}
              name="url"
              label="Url da foto do naver"
              placeholder="Url da foto do naver"
              blurOnSubmit={false}
              onSubmitEditing={formik.handleSubmit}
              {...formik}
            />

            <Button
              isLoading={loading}
              title="Salvar"
              onPress={formik.handleSubmit}
              disabled={loading || !formik.isValid}
            />
          </Form>
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

export default FormNaver;
