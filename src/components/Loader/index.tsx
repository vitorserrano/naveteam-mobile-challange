import React from 'react';

import { AnimatedLoader } from './styles';

interface Props {
  size?: number;
  color?: string;
}

const Loader: React.FC<Props> = ({ size, color }) => (
  <AnimatedLoader size={size} color={color} />
);

export default Loader;
