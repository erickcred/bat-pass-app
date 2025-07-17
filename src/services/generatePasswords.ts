export default function generatePasswords(): string {
  let pass: string = "";
  let characters: string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%¨&*()_-+=?:/[]{}";
  let passLength: number = 16;

  for (let i = 0; i < passLength; i++)
    pass += characters.charAt(Math.floor(Math.random() * characters.length));
  
  return pass;
}