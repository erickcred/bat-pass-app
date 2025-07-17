import { StyleSheet } from 'react-native';

export const styles = (bgColor?: string, textColor?: string) => StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: bgColor ? bgColor : "transparent",
    borderRadius: 6,
    justifyContent: "center",
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderWidth: 1,
    borderColor: bgColor ? bgColor : "#e5df3c"
    
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 21,
    letterSpacing: .30,
    color: textColor ? textColor : "#e5df3c",
  }
});