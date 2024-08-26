import React from 'react';
import { Meta } from '@storybook/react';
import {useCountdown } from '@channelwill/hooks';

export default {
  title: 'Tool Hooks/useCountdown',
} as Meta;

const Template: () => JSX.Element = () => {
  const { hours, minutes, seconds } = useCountdown(3661); // 从 1 小时 1 分钟 1 秒开始倒计时

  return (
    <div>
      <h1>倒计时: {`${hours}小时 ${minutes}分钟 ${seconds}秒`}</h1>
      {(hours === 0 && minutes === 0 && seconds === 0) && <p>时间到！</p>}
    </div>
  );
};

export const example = Template.bind({});
