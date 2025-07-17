import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#333333",
  },
  logoContainer: {
    flexDirection: "column",
    borderColor: "#8a8a8a",
    borderWidth: .6,
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 60,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "#2e2e2e"
  },
  inputContainer: {
    flexDirection: "column",
    gap: 16,
    alignItems: "center",
    width: "80%",
  }

});