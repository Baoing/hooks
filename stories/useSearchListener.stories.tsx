import React from 'react';
import { Meta } from '@storybook/react';
import {useSearchListener } from '@channelwill/hooks';

export default {
  title: 'Base Hooks/useSearchListener',
} as Meta;

const Template = () => {
  // 使用自定义 Hook 监听 location.search 的变化
  useSearchListener((search: string) => {
    console.log('Search params changed:', search);
  });

  // 函数用于更改 window.location.search
  const changeSearchParams = () => {
    const newSearch = location.search === '?param1=value1' ? '?param2=value2' : '?param1=value1';
    window.history.pushState({}, '', newSearch); // 更新 window.location.search
    window.dispatchEvent(new Event('popstate')); // 触发 popstate 事件
  };

  return (
    <div>
      <h1>Search Listener Demo （控制台Console查看打印）</h1>
      <button className={"mt-2"} onClick={changeSearchParams}>点击改变 Search Params</button>
    </div>
  );
};

export const example = Template.bind({});
