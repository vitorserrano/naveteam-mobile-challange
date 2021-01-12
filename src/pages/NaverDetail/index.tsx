import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { Loader, Modal } from '../../components';

import api from '../../services/api';

import {
  Wrapper,
  Container,
  Image,
  Name,
  Title,
  Description,
  Footer,
  Button,
  ButtonTitle,
} from './styles';

import { INaver, IModal } from '../../types';
import { IParams } from './interface';
import { formatDateDifference } from '../../helpers';

import { colors } from '../../theme/colors';

const NaverDetail: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const routeParams = route.params as IParams;

  const [naver, setNaver] = useState<INaver>({} as INaver);
  const [modal, setModal] = useState<IModal>({ isVisible: false });
  const [loading, setLoading] = useState(true);

  const handleShowNaver = async () => {
    setLoading(true);

    try {
      const { data } = await api.get(`/navers/${routeParams.id}`);

      setNaver(data);
    } catch (error) {
      setModal({
        isVisible: true,
        title: 'Erro',
        message: 'Não foi possível visualizar este naver.',
      });
    }

    setTimeout(() => setLoading(false), 1000);
  };

  const handleDeleteNaver = async (id: string) => {
    setModal({ isVisible: false });

    try {
      await api.delete(`/navers/${id}`);

      setModal({
        isVisible: true,
        title: 'Naver excluído',
        message: 'Naver excluído com sucesso!',
      });

      setTimeout(() => {
        setModal({
          isVisible: false,
        });

        navigation.navigate('Navers');
      }, 2000);
    } catch (error) {
      setModal({
        isVisible: true,
        title: 'Erro',
        message: 'Não foi possível excluir esse naver.',
      });
    }
  };

  const handleNavigateToFormNaver = (currentNaver: INaver) => {
    navigation.navigate('FormNaver', currentNaver);
  };

  useEffect(() => {
    handleShowNaver();

    const unsubscribe = navigation.addListener('focus', () => {
      handleShowNaver();
    });

    return unsubscribe;
  }, [routeParams.id]);

  if (loading) {
    return <Loader size={60} color={colors.primary} container />;
  }

  return (
    <Wrapper>
      <Image source={{ uri: naver.url }} />

      <Container>
        <Name>{naver.name}</Name>
        <Description>{naver.job_role}</Description>

        <Title>Idade</Title>
        <Description>
          {formatDateDifference(naver.birthdate, 'birthdate')}
        </Description>

        <Title>Tempo de empresa</Title>
        <Description>
          {formatDateDifference(naver.admission_date, 'admission_date')}
        </Description>

        <Title>Projetos que participou</Title>
        <Description>{naver.project}</Description>

        <Footer>
          <Button
            transparent
            onPress={() =>
              setModal({
                isVisible: true,
                title: 'Excluir naver',
                message: 'Tem certeza que deseja excluir este naver?',
                type: 'delete',
                onSubmit: () => handleDeleteNaver(naver.id),
              })
            }
          >
            <FontAwesome5 name="trash" size={18} color={colors.primary} />
            <ButtonTitle dark>Excluir</ButtonTitle>
          </Button>

          <Button onPress={() => handleNavigateToFormNaver(naver)}>
            <FontAwesome5
              name="pencil-alt"
              size={18}
              color={colors.secondary}
            />
            <ButtonTitle>Editar</ButtonTitle>
          </Button>
        </Footer>

        <Modal
          isVisible={modal.isVisible}
          title={modal.title}
          message={modal.message}
          type={modal.type}
          onSubmit={modal.onSubmit}
          onRequestClose={() => setModal({ isVisible: false })}
        />
      </Container>
    </Wrapper>
  );
};

export default NaverDetail;
