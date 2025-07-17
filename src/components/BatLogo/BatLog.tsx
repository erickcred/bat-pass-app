import React from 'react';
import { Image, Text, View } from 'react-native';

import { styles } from "./BatLogStyles";
import logo from "../../../assets/logo.png";

export function BatLogo() {
  return (
    <>
      <Text style={styles.title}>BAT PASS GENERATOR</Text>
      <Image source={logo} style={styles.image} />
    </>
  );
}