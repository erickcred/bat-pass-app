import React from 'react';
import { Pressable, Text } from 'react-native';

import { styles } from './BatButtonStyles';

type Props = {
  title: string;
  bgColor?: string;
  textColor?: string;
  onPress?: () => void;
}

export function BatButton({
  title,
  bgColor,
  textColor,
  onPress
}: Props) {
  const style = styles(bgColor, textColor);

  return (
    <Pressable
      style={style.button}
      onPress={onPress}>
      <Text style={style.text}>{title}</Text>
    </Pressable>
  );
}