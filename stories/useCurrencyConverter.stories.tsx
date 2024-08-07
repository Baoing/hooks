import {useCurrencyConverter} from '@channelwill/hooks';
import {Meta} from "@storybook/react";
import React from 'react';

export default {
  title: 'Hooks/useCurrencyConverter',
} as Meta;

const Template = () => {
  const { rates, convert, loading, error } = useCurrencyConverter();

  if (loading) return <p>加载中...</p>;
  if (error) return <p>错误: {error.message}</p>;

  const amountInUSD = convert(100, 'EUR', 'USD');
  const amountUSDToCNY = convert(1, 'USD', 'CNY');

  return (
    <div>
      <h1 className={"font-semibold"}>货币转换示例</h1>

      <p>100 EUR = {amountInUSD} USD</p>
      <p>1 USD = {amountUSDToCNY} CNY</p>

      <div className={"font-semibold mt-2"}>汇率列表({Object.keys(rates).length}种)</div>
      <div className={"flex gap-1 flex-wrap"}>
        {Object.keys(rates).map((key) => <div className={"w-40"} key={key}>{key}: {rates[key]}</div>)}
      </div>
    </div>
  );
};

export const example = Template.bind({});