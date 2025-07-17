import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View } from 'react-native';

import { styles } from "./Style";
import { BatLogo } from "../../components/BatLogo/BatLog";
import { BatTextInput } from "../../components/BatTextInput.tsx/BatTextInput";
import { BatButton } from "../../components/BatButton/BatButton";
import generatePasswords from "../../services/generatePasswords";
import clipboardeProcess from "../../services/clipboardeProcess";

export default function Home () {
  const [pass, setPass] = useState("");

  function handleGeneratePass(): void {
    setPass(generatePasswords())
  }

  async function handleCopyPass() {
    await clipboardeProcess(pass)
  }
  
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
          value={pass} 
          editable={false} />

        <BatButton
          onPress={() => handleGeneratePass()}
          title="🔥 Generate pass"
          bgColor="" />
          
        <BatButton
          onPress={async () => handleCopyPass()}
          title="⚡ Copy pass"
          bgColor="" />
      </View>

      <StatusBar style="light" />
    </View>
  )
}