import React from 'react';
import { Meta } from '@storybook/react';
import { action  } from '@storybook/addon-actions';
import {usePageLeave} from '@channelwill/hooks';

export default {
  title: 'Hooks/usePageLeave',
} as Meta;

const Template: () => JSX.Element = () => {
  usePageLeave(action('onMouseOver'));

  return <div>
    尝试离开页面并在<code>Actions</code>选项卡中查看日志。
  </div>;
};

export const example = Template.bind({});
