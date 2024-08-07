import React from 'react';
import { Meta } from '@storybook/react';
import { action  } from '@storybook/addon-actions';
import {useOnceClick} from '@channelwill/hooks';
import {Button} from "@shopify/polaris";

export default {
  title: 'DOM Hooks/useOnceClick',
} as Meta;

const Template: () => JSX.Element = () => {
  const handleClick = useOnceClick()(action('useOnceClick'));

  return <div>
    <Button onClick={handleClick}>点击</Button>
  </div>;
};

export const example = Template.bind({});
