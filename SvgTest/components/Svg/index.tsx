import * as React from 'react';
import * as svg from '../../assets/svg';
import {SvgProps} from 'react-native-svg';

interface Props extends SvgProps {
  name?: string;
  fill?: string;
}

export default function SvgComponent(props: Props) {
  if (!props.name) return null;

  const Icon = svg[props.name];

  return <Icon {...props} />;
}
