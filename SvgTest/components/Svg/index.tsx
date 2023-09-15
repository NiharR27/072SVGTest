import * as React from 'react';
import * as svg from '../../assets/svg';
import { SvgProps } from 'react-native-svg';

interface Props extends SvgProps {
  name: string;
  fill?: string;
}

export const SvgComponent = (props: Props) => {
  if (!props.name) {
    return null;
  }

  const Icon = svg?.[props.name];

  if (!Icon) {
    return null;
  }

  return <Icon {...props} />;
};
