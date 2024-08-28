import React from 'react';
import { Meta } from '@storybook/react';
import {useNetworkStatus } from '@channelwill/hooks';

export default {
  title: 'Tool Hooks/useNetworkStatus',
} as Meta;

const Template: () => JSX.Element = () => {
  const isOnline = useNetworkStatus();

  return (
    <div>
      <h1>网络状态</h1>
      <p>{isOnline ? '在线' : '离线'}</p>
    </div>
  );
};

export const example = Template.bind({});
