import {Meta} from "@storybook/react";
import React, {useState} from 'react';
import {useExportCSV, useMount} from '@channelwill/hooks';

export default {
  title: 'Hooks/useExportCSV',
} as Meta;

const data = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 }
];

const headers = ["name", "age"];

const Template = () => {
  const { buildURI } = useExportCSV();
  const [csvURL, setURL] = useState("")

  useMount(() => {
    setURL(buildURI({
      data,
      headers,
      separator: ",",
      enclosingCharacter: "\"",
      uFEFF: true // 是否添加 BOM
    }))
  });

  return (
    <div>
      <a download={`测试示例.csv`} href={csvURL}>下载csv</a>
    </div>
  );
};

export const example = Template.bind({});