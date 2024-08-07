import {Meta} from "@storybook/react";
import React, {useEffect, useState} from 'react';
import {useDebounce} from '@channelwill/hooks';
import {TextField} from '@shopify/polaris';
import {action} from "@storybook/addon-actions";

export default {
  title: 'Base Hooks/useDebounce',
} as Meta;

const Template = () => {
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 500); // 500ms 防抖

  const handleChange = (value: string) => {
    setInputValue(value);
  };

  useEffect(() => {
    if (debouncedValue) {
      console.log('发送请求:', debouncedValue);
      // 在这里调用 API
      action('发送请求')(debouncedValue)
    }
  }, [debouncedValue]);

  return (
    <div className={"w-80 max-w-full"}>
      <TextField
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="搜索..."
        autoComplete={""}
        label="useDebounce防抖示例"
      />
    </div>
  );
};

export const example = Template.bind({});