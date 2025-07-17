import React from 'react';
import { TextInput, View } from 'react-native';

import { styles } from './BatTextInputStyles';

export function BatTextInput() {
  return (
    <TextInput
      style={styles.inputer}
      placeholder="pass" />
  );
}