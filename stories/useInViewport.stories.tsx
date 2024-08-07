import React from 'react';
import { Meta } from '@storybook/react';
import {useInViewport} from '@channelwill/hooks';

export default {
  title: 'Hooks/useInViewport',
} as Meta;

const Template = () => {
  const [setNode, inViewport] = useInViewport({
    rootMargin: '0px', // 可选：设置视口边界的偏移量
    threshold: 0.1    // 可选：当元素与视口相交的比例达到 10% 时触发
  });

  return (
    <div style={{ height: "200vh", padding: "20px" }}> {/* 增加页面高度以启用滚动 */}
      <div
        ref={setNode}
        style={{
          height: "100px",
          margin: "50px 0",
          backgroundColor: inViewport ? "lightgreen" : "lightcoral", // 根据是否在视口中改变背景色
          transition: "background-color 0.3s"
        }}
      >
        观察这个元素是否在视口内
      </div>
      <p>元素 {inViewport ? <strong style={{color: "green"}}>在</strong> : <strong style={{color: "red"}}>不在</strong>} 视口内</p>
      <p style={{color: "#878787"}}>滚动页面来测试元素的可见性。</p>
    </div>
  );
};

export const example = Template.bind({});
