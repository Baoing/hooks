import React, {useState} from 'react';
import { Meta } from '@storybook/react';
import {useAnimationFrame } from '@channelwill/hooks';

export default {
  title: 'DOM Hooks/useAnimationFrame',
} as Meta;

const Template: () => JSX.Element = () => {
  const [position, setPosition] = useState(0);

  useAnimationFrame((deltaTime) => {
    setPosition((prevPosition) => prevPosition + deltaTime * 0.1); // 根据时间差更新位置
  });

  return <div style={{ height: '100vh', overflow: 'hidden', position: 'relative' }}>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: position,
          width: '50px',
          height: '50px',
          backgroundColor: 'blue',
          borderRadius: '50%',
          transform: 'translateY(-50%)',
        }}
      />
      <p style={{ position: 'absolute', bottom: '20px', left: '20px' }}>
        当前位置: {position.toFixed(2)}
      </p>
    </div>
};

export const example = Template.bind({});
