import React from 'react';
import { Meta } from '@storybook/react';
import {useScrollPosition} from '@channelwill/hooks';

export default {
  title: 'DOM Hooks/useScrollPosition',
} as Meta;

const Template: () => JSX.Element = () => {
  const scrollY = useScrollPosition(); // 获取当前的滚动位置

  return <div style={{height: '200vh', padding: '20px'}}>
    <div
      style={{
        position: 'sticky',
        top: 0,
        backgroundColor: '#fff',
        padding: '10px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        zIndex: 1000,
      }}
    >
      <h1>滚动位置示例</h1>
      <p>当前滚动位置: {scrollY}px</p>
    </div>
    <div style={{marginTop: '20px'}}>
      <p>向下滚动页面以查看效果。</p>
      <div
        style={{
          padding: '20px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          backgroundColor: '#f9f9f9',
        }}
      >
        <p>这是一个长页面，继续滚动！</p>
      </div>
    </div>
  </div>
};

export const example = Template.bind({});
