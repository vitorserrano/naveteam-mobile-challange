import React, { useState, useRef } from 'react';
import { TextInput, Platform } from 'react-native';

import { useRoute } from '@react-navigation/native';

import { Formik } from 'formik';
import * as Yup from 'yup';

import api from '../../services/api';

import {
  Input,
  Modal,
  Button,
  ButtonDatePicker,
  DatePicker,
} from '../../components';

import { Container, Title, Form } from './styles';

import { IModal } from '../../types';
import { IForm, INaverSchema } from './interface';
import { formatDate, isRequiredDate } from '../../helpers';

const FormNaver: React.FC = () => {
  const route = useRoute();
  const routeParams = route.params as IForm;

  const [modal, setModal] = useState<IModal>({ isVisible: false });
  const [loading, setLoading] = useState(false);

  const [birthdate, setBirthdate] = useState<Date | string>(
    routeParams.birthdate ? new Date(routeParams?.birthdate) : '',
  );
  const [showDateBirthdate, setShowDatePickerBirthdate] = useState(false);

  const [admissionDate, setAdmissionDate] = useState<Date | string>(
    routeParams.admission_date ? new Date(routeParams?.admission_date) : '',
  );
  const [showDateAdmissionDate, setShowDatePickerAdmissionDate] = useState(
    false,
  );

  const initialValues: IForm = {
    name: '' || routeParams?.name,
    job_role: '' || routeParams?.job_role,
    project: '' || routeParams?.project,
    url: '' || routeParams?.url,
  };

  const naverSchema: Yup.SchemaOf<INaverSchema> = Yup.object().shape({
    name: Yup.string().required('Nome é um campo obrigatório'),
    job_role: Yup.string().required('Cargo é um campo obrigatório'),
    project: Yup.string().required('Projetos é um campo obrigatório'),
    url: Yup.string().required('Url é um campo obrigatório'),
  });

  const jobRoleInputRef = useRef<TextInput>(null);
  const projectInputRef = useRef<TextInput>(null);
  const urlInputRef = useRef<TextInput>(null);

  const handleOnSubmit = async (values: IForm) => {
    setLoading(true);

    try {
      isRequiredDate(!!birthdate, 'Data de nascimento');
      isRequiredDate(!!admissionDate, 'Data de admissão');

      const data = {
        ...values,
        birthdate: formatDate(birthdate),
        admission_date: formatDate(admissionDate),
      };

      if (routeParams.id) {
        await api.put(`/navers/${routeParams.id}`, data);

        setModal({
          isVisible: true,
          title: 'Naver editado',
          message: 'Naver editado com sucesso!',
        });

        setLoading(false);

        return;
      }

      await api.post('/navers', data);

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
        message:
          error.message ||
          `Não foi possível ${
            routeParams?.id ? `editar` : `adicionar`
          } o naver.`,
      });

      setLoading(false);
    }
  };

  const handleOnChangeBirthdate = (event?: any, selectedDate?: Date) => {
    const currentDate = selectedDate || birthdate;
    setShowDatePickerBirthdate(Platform.OS === 'ios');
    setBirthdate(currentDate);
  };

  const handleOnChangeAdmissionDate = (event?: any, selectedDate?: Date) => {
    const currentDate = selectedDate || admissionDate;
    setShowDatePickerAdmissionDate(Platform.OS === 'ios');
    setAdmissionDate(currentDate);
  };

  return (
    <Container>
      <Title>{`${routeParams?.id ? `Editar` : `Adicionar`} naver`}</Title>

      <Formik
        initialValues={initialValues}
        validationSchema={naverSchema}
        onSubmit={values => handleOnSubmit(values)}
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
              onSubmitEditing={() => setShowDatePickerBirthdate(true)}
              {...formik}
            />

            <ButtonDatePicker
              label="Data de nascimento"
              onPress={() => setShowDatePickerBirthdate(true)}
              date={birthdate}
              isColor={!!birthdate}
            />

            {showDateBirthdate && (
              <DatePicker
                value={birthdate}
                onChange={handleOnChangeBirthdate}
              />
            )}

            <ButtonDatePicker
              label="Data de admissão"
              onPress={() => setShowDatePickerAdmissionDate(true)}
              date={admissionDate}
              isColor={!!admissionDate}
            />

            {showDateAdmissionDate && (
              <DatePicker
                value={admissionDate}
                onChange={handleOnChangeAdmissionDate}
              />
            )}

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
