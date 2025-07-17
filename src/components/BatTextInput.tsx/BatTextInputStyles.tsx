import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  inputerContainer: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    width: "100%",
  },
  inputer: {
    backgroundColor: "#e5bf3c",
    width: "100%",
    color: "black",
    fontSize: 20,
    height: 45,
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
    textAlign: "center",
  },
  cleanContainer: {
    height: 45,
    width: 30,
    position: "absolute",
    top: 0,
    right: 2,
    fontSize: 30,
    color: "#e5bf3c",
    zIndex: 1,
  },
  cleanText: {
    fontSize: 25,
    color: "#555555ff",
    textAlign: "center",
    paddingTop: 2,
  }
});