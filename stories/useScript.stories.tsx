import {useScript} from '@channelwill/hooks';
import {Meta} from "@storybook/react";
import React from 'react';

export default {
  title: 'Tool Hooks/useScript',
} as Meta;

const Template = () => {
  const {loaded, error, toPromise} = useScript("https://code.jquery.com/jquery-3.7.1.js", "sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=");

  toPromise().then(()=>{
    console.log("loaded: Do something")
  }).catch(()=>{
    console.log("load error: Do something")
  })

  return <div>
    <p>示例加载【https://example.com/script.js】</p>
    <p>控制台【检查元素】可看到DOM结构中有 ID为“example-script”的script标签</p>

    <div className={"mt-4"}>
      Script加载状态：{error ? <p>脚本加载错误</p> : loaded ? <p>脚本加载完成</p> : <p>脚本加载中...</p>}
    </div>
  </div>;
};

export const example = Template.bind({});