import React from 'react';
import { Meta } from '@storybook/react';
import {useWindowSize} from '@channelwill/hooks';

export default {
  title: 'DOM Hooks/useWindowSize',
} as Meta;

const Template: () => JSX.Element = () => {
  const {width, height} = useWindowSize();

  return <div>
    <p className={"my-2"}>移动视口宽度或者高度查看效果</p>
    当前视窗：
    <div>width: {width}</div>
    <div>height: {height}</div>
  </div>;
};

export const example = Template.bind({});
