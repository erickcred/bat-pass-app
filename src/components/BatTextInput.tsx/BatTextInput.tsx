import React, { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';

import { styles } from './BatTextInputStyles';

type Props = {
  placeholder?: string;
  value?: string;
  onPress?: () => void;
}

export function BatTextInput({placeholder, value, onPress}: Props) {
  return (
    <View style={styles.inputerContainer}>
      <Pressable
        style={styles.cleanContainer}
        onPress={onPress}>
        <Text style={styles.cleanText}>✖</Text>
      </Pressable>

      <TextInput
        style={styles.inputer}
        placeholder={placeholder} 
        value={value} />
    </View>
  );
}