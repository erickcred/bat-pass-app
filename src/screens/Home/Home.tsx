import React from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import { styles } from "./Style";
import { BatLogo } from "../../components/BatLogo/BatLog";
import { BatTextInput } from "../../components/BatTextImput/BatTextInput";

export default function Home () {
  return (
    <View style={styles.appContainer}>
      <View style={styles.logoContainer}>
        <BatLogo />
      </View>

      <View style={styles.inputerContainer}>
        <BatTextInput />
      </View>
      <StatusBar style="auto" />
    </View>
  )
}