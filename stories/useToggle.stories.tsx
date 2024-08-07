import {Meta} from "@storybook/react";
import React from 'react';
import {useToggle} from '@channelwill/hooks';
import {Button} from '@shopify/polaris';

export default {
  title: 'Base Hooks/useToggle',
} as Meta;

const Template = () => {
  const [isOpen, toggleOpen] = useToggle(false);

  return (
    <div>
      <p>当前状态: {isOpen ? "开" : "关"}</p>
      <div className={"flex gap-2 mt-2"}>
        <Button onClick={() => toggleOpen()}>切换状态</Button>
        <Button onClick={() => toggleOpen(true)}>打开</Button>
        <Button onClick={() => toggleOpen(false)}>关闭</Button>
      </div>
    </div>
  );
};

export const example = Template.bind({});