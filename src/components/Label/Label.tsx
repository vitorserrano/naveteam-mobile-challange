import React from 'react';

import { Title } from './styles';

interface ILabel {
  title: string;
}

const Label: React.FC<ILabel> = ({ title }) => <Title>{title}</Title>;

export default Label;
