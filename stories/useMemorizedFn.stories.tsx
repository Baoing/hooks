import {Meta} from "@storybook/react";
import React, {useEffect, useState} from 'react';
import {useMemorizedFn} from '@channelwill/hooks';
import {TextField,Text} from "@shopify/polaris";

export default {
  title: 'Base Hooks/useMemorizedFn',
} as Meta;

const Template = () => {

  // 模拟一个数据源
  const dataSource = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Cherry' },
    { id: 4, name: 'Date' },
    { id: 5, name: 'Elderberry' },
    { id: 6, name: 'Fig' },
    { id: 7, name: 'Grape' },
    { id: 8, name: 'Honeydew' },
  ];

  const [query, setQuery] = useState('');
  const [results, setResults] = useState<{id: number, name: string}[]>([]);

  // 使用 useMemorizedFn 来记忆化搜索函数, 也就是搜索过的值，不会再搜索了，直接使用缓存结果
  const search = useMemorizedFn((searchQuery: string) => {
    if (!searchQuery) return dataSource;

    return dataSource.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  // 每次 query 更新时，计算搜索结果
  useEffect(() => {
    const filteredResults = search(query);
    setResults(filteredResults);
  }, [query, search]);

  return (
    <div className={"flex gap-2 flex-col"}>
      <Text as={"h3"} variant={"headingMd"}>模拟数据</Text>
      <div>
        {dataSource.map((item, index) => <div key={index}>Id:{item.id}  Name:{item.name}</div>)}
      </div>

      <Text as={"h3"} variant={"headingMd"}>动态搜索组件</Text>

      <TextField
        label={""}
        type="text"
        value={query}
        onChange={setQuery}
        placeholder="搜索..."
        autoComplete={""}
      />
      <ul>
        {results.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <p>缓存的结果数量: {search.cache.size}</p>
    </div>
  );
};

export const example = Template.bind({});