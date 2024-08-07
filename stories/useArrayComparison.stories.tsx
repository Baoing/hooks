import React from 'react';
import { Meta } from '@storybook/react';
import {useArrayComparison } from '@channelwill/hooks';

export default {
  title: 'Hooks/useArrayComparison',
} as Meta;

const Template: () => JSX.Element = () => {
  const {compareArrays} = useArrayComparison();

  const arr1 = ['apple', 'banana', 'orange'];
  const arr2 = ['banana', 'kiwi', 'apple', 'grape'];

  const { extra, missing } = compareArrays(arr1, arr2);

  return <div className={"flex gap-2 flex-col"}>
      <div>数组1: {arr1.join(", ")}</div>
      <div>数组2: {arr2.join(", ")}</div>
      <hr/>
      <h3>比较结果</h3>
      <p>额外元素: {extra.join(', ')}</p>
      <p>缺失元素: {missing.join(', ')}</p>
  </div>;
};

export const example = Template.bind({});
