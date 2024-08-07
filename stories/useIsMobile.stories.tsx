import {useIsMobile} from '@channelwill/hooks';
import {Meta} from "@storybook/react";
import React from 'react';

export default {
  title: 'DOM Hooks/useIsMobile',
} as Meta;

const Template = () => {
  const isMobile = useIsMobile();
  const isMobileWithWindowWide = useIsMobile({isWindowWide: true});

  return <div>
    <p>当前设备: {isMobile ? "移动设备" : "非移动设备"}</p>
    <p>当前设备(含尺寸判断): {isMobileWithWindowWide ? "移动设备" : "非移动设备"}</p>
  </div>
};

export const example = Template.bind({});