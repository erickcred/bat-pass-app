import * as Clipboard from "expo-clipboard";

export default async function clipboardeProcess(text: string) {
  try {
    if (!text) {
      throw new Error("No text to copy");
    }
    await Clipboard.setStringAsync(text);
  } catch (error) {
    console.error("Error copying to clipboard:", error);
    alert(error)
  }
}