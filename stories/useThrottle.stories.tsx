import {Meta} from "@storybook/react";
import React, {useState} from 'react';
import {useThrottle} from '@channelwill/hooks';
import {TextField} from '@shopify/polaris';

export default {
  title: 'Base Hooks/useThrottle',
} as Meta;

const Template = () => {
  const [inputValue, setInputValue] = useState('');

  const throttledValue = useThrottle(inputValue, 1000);

  return (
    <div className={"w-80 max-w-full"}>
      <TextField
        autoComplete={""}
        label={"useThrottle 节流示例"}
        type="text"
        value={inputValue}
        onChange={setInputValue}
      />
      <p>Throttled Value: {throttledValue}</p>
    </div>
  );
};

export const example = Template.bind({});