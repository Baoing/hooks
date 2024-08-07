import React, {useState} from 'react';
import { Meta } from '@storybook/react';
import {useVerification} from '@channelwill/hooks';
import {Text, TextField, Button} from "@shopify/polaris"

export default {
  title: 'Hooks/useVerification',
} as Meta;


const Template = () => {
  const {
    isValidEmail,
    isValidURL,
    checkPhoneNumberFormat,
    isE164PhoneNumber,
  } = useVerification();

  const [email, setEmail] = useState('');
  const [url, setURL] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [validationResults, setValidationResults] = useState({
    emailValid: false,
    urlValid: false,
    phoneFormatValid: false,
    phoneE164Valid: false
  });

  const handleSubmit = () => {
    const emailValid = isValidEmail(email);
    const urlValid = isValidURL(url);
    const phoneFormatValid = checkPhoneNumberFormat(phoneNumber);
    const phoneE164Valid = isE164PhoneNumber(phoneNumber);

    setValidationResults({
      emailValid,
      urlValid,
      phoneFormatValid,
      phoneE164Valid,
    });
  };

  return (
    <div>
      <Text variant={"headingLg"} as={"h3"}>输入验证表单</Text>
      <div className={"w-96 max-w-full flex flex-col gap-2 my-2"}>
        <TextField label={"Email"} value={email}  onChange={setEmail} autoComplete={""}/>
        <TextField label={"URL"} value={url}  onChange={setURL} autoComplete={""}/>
        <TextField label={"Phone"} value={phoneNumber}  onChange={setPhoneNumber} autoComplete={""}/>
        <Button variant={"primary"} onClick={handleSubmit}>提交</Button>
      </div>

      <Text variant={"headingMd"} as={"h3"}>验证结果: </Text>
      <ul className={"flex flex-col gap-2 mt-2"}>
        <li>电子邮件有效: {validationResults.emailValid ? '是' : '否'}</li>
        <li>URL有效: {validationResults.urlValid ? '是' : '否'}</li>
        <li>电话号码格式有效: {validationResults.phoneFormatValid ? '是' : '否'}</li>
        <li>电话号码符合 E.164 格式: {validationResults.phoneE164Valid ? '是' : '否'}</li>
      </ul>
    </div>
  );
};

export const example = Template.bind({});
