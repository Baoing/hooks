import React from 'react';
import { Meta } from '@storybook/react';
import {useCommunication, CommunicationProvider } from '@channelwill/hooks';
import {Button} from "@shopify/polaris";

export default {
  title: 'Hooks/useCommunication',
} as Meta;


const MessageSender: React.FC = () => {
  const { sendMessage } = useCommunication();

  const handleSend = () => {
    sendMessage('Hello, World!');
  };

  return <div style={{padding: 10, border: "1px solid red"}}>
    组件1
    <div className={"mt-2"}>
      <Button onClick={handleSend}>发送消息</Button>
    </div>
  </div>
};

const MessageReceiver: React.FC = () => {
  const { message } = useCommunication();

  return <div className={"mt-2"} style={{padding: 10, border: "1px solid #ccc"}}>
    组件2
    <div>接收到的消息: {message}</div>
  </div>
};


const Template = () => {
  return <CommunicationProvider>
      <MessageSender />
      <MessageReceiver />
    </CommunicationProvider>
};

export const example = Template.bind({});
