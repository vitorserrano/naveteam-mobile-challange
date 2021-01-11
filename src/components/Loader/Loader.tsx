import React from 'react';

import { LoaderContainer, AnimatedLoader } from './styles';

interface ILoader {
  size: number;
  color: string;
  container?: boolean;
}

const Loader: React.FC<ILoader> = ({ size, color, container }) => {
  if (container) {
    return (
      <LoaderContainer>
        <AnimatedLoader size={size} color={color} />
      </LoaderContainer>
    );
  }

  return <AnimatedLoader size={size} color={color} />;
};

export default Loader;
