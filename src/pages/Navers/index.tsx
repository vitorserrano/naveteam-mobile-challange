import React, { useState, useEffect } from 'react';

import { useNavigation } from '@react-navigation/native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import api from '../../services/api';

import Loader from '../../components/Loader';
import Modal from '../../components/Modal';

import {
  LoaderContainer,
  Container,
  Header,
  Title,
  Button,
  ButtonTitle,
  Content,
  NaversList,
  Image,
  Description,
  Name,
  JobRole,
  Actions,
} from './styles';

import { colors } from '../../theme/colors';

interface INavers {
  id: string;
  name: string;
  admission_date: string;
  job_role: string;
  user_id: string;
  project: string;
  birthdate: string;
  url: string;
}

interface INaverEdit {
  id?: string;
  name?: string;
  admission_date?: string;
  job_role?: string;
  project?: string;
  birthdate?: string;
  url?: string;
}

interface IModal {
  isVisible: boolean;
  title?: string;
  message?: string;
  type?: string;
  onSubmit?(): void;
}

const Navers: React.FC = () => {
  const navigation = useNavigation();

  const [navers, setNavers] = useState<INavers[]>([]);
  const [modal, setModal] = useState<IModal>({ isVisible: false });
  const [loading, setLoading] = useState(true);
  const [isDeleted, setIsDeleted] = useState(false);

  const handleLoadNavers = async () => {
    try {
      const { data } = await api.get('/navers');

      setNavers(data);
    } catch (error) {
      setModal({
        isVisible: true,
        title: 'Erro',
        message: 'Não foi possível carregar os navers.',
      });
    }

    setLoading(false);
  };

  const handleDeleteNaver = async (id: string) => {
    setModal({ isVisible: false });
    setIsDeleted(true);

    try {
      await api.delete(`/navers/${id}`);

      setModal({
        isVisible: true,
        title: 'Naver excluído',
        message: 'Naver excluído com sucesso!',
      });
    } catch (error) {
      setModal({
        isVisible: true,
        title: 'Erro',
        message: 'Não foi possível excluir esse naver.',
      });
    }

    setIsDeleted(false);
  };

  const handleNavigateToNaverDetail = (id: string) => {
    navigation.navigate('NaverDetail', { id });
  };

  const handleNavigateToFormNaver = (naver: INaverEdit) => {
    navigation.navigate('FormNaver', naver);
  };

  useEffect(() => {
    handleLoadNavers();

    const unsubscribe = navigation.addListener('focus', () => {
      handleLoadNavers();
    });

    return unsubscribe;
  }, [isDeleted, navigation]);

  if (loading) {
    return (
      <LoaderContainer>
        <Loader size={60} color={colors.primary} />
      </LoaderContainer>
    );
  }

  return (
    <Container>
      <Header>
        <Title>Navers</Title>

        <Button onPress={() => handleNavigateToFormNaver({} as INaverEdit)}>
          <ButtonTitle>Adicionar naver</ButtonTitle>
        </Button>
      </Header>

      <NaversList<any>
        data={navers}
        keyExtractor={(naver: INavers) => String(naver.id)}
        howsVerticalScrollIndicator
        onEndReached={handleLoadNavers}
        onEndReachedThreshold={0.5}
        numColumns={2}
        columnWrapperStyle={{
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
        renderItem={({ item: naver }: any) => (
          <Content onPress={() => handleNavigateToNaverDetail(naver.id)}>
            <Image source={{ uri: naver.url }} />

            <Description>
              <Name>{naver.name}</Name>
              <JobRole>{naver.job_role}</JobRole>
            </Description>

            <Actions>
              <FontAwesome5
                name="trash"
                size={18}
                color={colors.primary}
                onPress={() =>
                  setModal({
                    isVisible: true,
                    title: 'Excluir naver',
                    message: 'Tem certeza que deseja excluir este naver?',
                    type: 'delete',
                    onSubmit: () => handleDeleteNaver(naver.id),
                  })
                }
              />
              <FontAwesome5
                name="pencil-alt"
                size={18}
                color={colors.primary}
                onPress={() => handleNavigateToFormNaver(naver)}
              />
            </Actions>
          </Content>
        )}
      />

      <Modal
        isVisible={modal.isVisible}
        title={modal.title}
        message={modal.message}
        type={modal.type}
        onSubmit={modal.onSubmit}
        onRequestClose={() => setModal({ isVisible: false })}
      />
    </Container>
  );
};

export default Navers;
