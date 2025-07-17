import * as Clipboard from "expo-clipboard";

export default async function clipboardeProcess(text: string) {
  try {
    await Clipboard.setStringAsync(text);
  } catch (error) {
    console.error("Error copying to clipboard:", error);
  }
}