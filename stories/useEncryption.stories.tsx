import React, {useState} from 'react';
import { Meta } from '@storybook/react';
import {useEncryption} from '@channelwill/hooks';
import {Button, TextField} from "@shopify/polaris";

export default {
  title: 'Hooks/useEncryption',
} as Meta;

const Template = () => {
  const secretKey = 'your-secret-key';
  const { encrypt, decrypt, encryptedText, decryptedText } = useEncryption(secretKey);
  const [inputText, setInputText] = useState('');
  const [inputText2, setInputText2] = useState('');

  return (
    <>
      <div className={"inline-block w-96"}>
        <TextField
          value={inputText}
          onChange={(value) => setInputText(value)}
          placeholder="输入文本"
          autoComplete={""}
          label={""}
          connectedRight={<div className={"flex"}>
            <Button size={"large"} onClick={() => encrypt(inputText)}>加密</Button>
          </div>}
        />
      </div>
      <div className={"mt-2"}>
        <p>加密结果: {encryptedText}</p>
      </div>

      <div className={"inline-block w-96 mt-2"}>
        <TextField
          value={inputText2}
          onChange={(value) => setInputText2(value)}
          placeholder="输入文本"
          autoComplete={""}
          label={""}
          connectedRight={<div className={"flex"}>
            <Button size={"large"} onClick={() => encryptedText && decrypt(inputText2)}>解密</Button>
          </div>}
        />
      </div>
      <div className={"mt-2"}>
        <p>解密结果: {decryptedText}</p>
      </div>
    </>
  );
};

export const example = Template.bind({});
