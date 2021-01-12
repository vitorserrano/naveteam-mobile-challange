import React from 'react';

import Label from '../Label';
import { formatDate } from '../../helpers';

import { Container, Button, Icon, Title } from './styles';

interface IButtonDatePicker {
  label: string;
  onPress(): void;
  date: Date | string;
  isColor: boolean;
}

const ButtonDatePicker: React.FC<IButtonDatePicker> = ({
  label,
  onPress,
  date,
  isColor,
}) => {
  return (
    <Container>
      <Label title={label} />

      <Button onPress={onPress}>
        <Icon isColor={isColor} />
        <Title isColor={isColor}>
          {date ? formatDate(date) : `Selecione uma data`}
        </Title>
      </Button>
    </Container>
  );
};

export default ButtonDatePicker;
