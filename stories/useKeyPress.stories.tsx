import React from 'react';
import { Meta } from '@storybook/react';
import {useKeyPress} from '@channelwill/hooks';

export default {
  title: 'Tool Hooks/useKeyPress',
} as Meta;

const Template: () => JSX.Element = () => {
  const isEnterPressed = useKeyPress('Enter'); // 检测 Enter 键
  const isEscapePressed = useKeyPress('Escape'); // 检测 Escape 键
  const isSpacePressed = useKeyPress(' '); // 检测空格键是否被按下

  return <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>按键检测示例</h1>
      <p>按下 Enter 键: {isEnterPressed ? '是' : '否'}</p>
      <p>按下 Escape 键: {isEscapePressed ? '是' : '否'}</p>
      <p>按下 空格 键: {isSpacePressed ? '是' : '否'}</p>
      <p>请在此处按下 Enter 或 Escape 或者空格 键以查看效果。</p>
      <div
        style={{
          border: '1px solid #ccc',
          padding: '50px',
          marginTop: '20px',
          borderRadius: '5px',
        }}
      >
        <p>聚焦此区域并按下 Enter 或 Escape 或者空格键</p>
      </div>
    </div>
};

export const example = Template.bind({});
