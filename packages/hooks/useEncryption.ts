import { useState } from 'react';
import CryptoJS from 'crypto-js';

const useEncryption = (secretKey: string) => {
  const [encryptedText, setEncryptedText] = useState<string | null>(null);
  const [decryptedText, setDecryptedText] = useState<string | null>(null);

  const encrypt = (text: string) => {
    const encrypted = CryptoJS.AES.encrypt(text, secretKey).toString();
    setEncryptedText(encrypted);
    return encrypted;
  };

  const decrypt = (cipherText: string) => {
    const bytes = CryptoJS.AES.decrypt(cipherText, secretKey);
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
    setDecryptedText(originalText);
    return originalText;
  };

  return { encryptedText, decryptedText, encrypt, decrypt };
};

export default useEncryption;
