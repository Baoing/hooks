import {useMount} from '@channelwill/hooks';
import {Meta} from "@storybook/react";
import React from 'react';

export default {
  title: 'Hooks/useMount',
} as Meta;

const Template = () => {
  useMount(() => {
    // 在组件挂载时执行的操作
    console.log('组件已挂载');


    // 在组件卸载时清理资源
    return () => {
      console.log('组件已卸载');
    };
  });

  return <div>我的组件</div>;
};

export const example = Template.bind({});