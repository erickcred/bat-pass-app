import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View } from 'react-native';
import * as Clipboard from "expo-clipboard";

import { styles } from "./Style";
import { BatLogo } from "../../components/BatLogo/BatLog";
import { BatTextInput } from "../../components/BatTextInput.tsx/BatTextInput";
import { BatButton } from "../../components/BatButton/BatButton";
import generatePasswords from "../../services/generatePasswords";
import clipboardeProcess from "../../services/clipboardeProcess";

export default function Home () {
  const [pass, setPass] = useState("");
  
  function handleClearPass(): void {
    setPass("");
  }

  return (
    <View style={styles.appContainer}>

      <View style={styles.logoContainer}>
        <BatLogo />
      </View>

      <View style={styles.inputContainer}>
        <BatTextInput
          onPress={() => handleClearPass()}
          placeholder="pass"
          value={pass} />

        <BatButton
          onPress={() => setPass(generatePasswords())}
          title="🔥 Generate pass"
          bgColor="" />
          
        <BatButton
          onPress={async () => await clipboardeProcess(pass)}
          title="©️ Copy pass"
          bgColor="" />
      </View>

      <StatusBar style="light" />
    </View>
  )
}