import React from 'react';
import {useEventListener} from '@channelwill/hooks';
import {Meta} from "@storybook/react";
import {action} from "@storybook/addon-actions";

export default {
  title: 'DOM Hooks/useEventListener',
} as Meta;

const Template = () => {
  useEventListener('click', action('onClick'));

  return <button>点击任意处（Actions-tab打印）</button>;
};

export const example = Template.bind({});