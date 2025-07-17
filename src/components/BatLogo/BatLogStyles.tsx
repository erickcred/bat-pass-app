import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    color: "#e5bf3c",
    fontWeight: "bold",
    fontSize: 30,
  },
  image: {
    resizeMode: "contain",
    height: 150,
    filter: "drop-shadow(0px 0px 4px #e5bf3c)",
    objectFit: "contain",
    marginTop: 30,
    marginBottom: 30,
  }
});