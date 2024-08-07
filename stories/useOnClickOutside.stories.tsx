import React, {useRef} from 'react';
import { Meta } from '@storybook/react';
import { action  } from '@storybook/addon-actions';
import {useOnClickOutside} from '@channelwill/hooks';

export default {
  title: 'DOM Hooks/useOnClickOutside',
} as Meta;

const Template: () => JSX.Element = () => {
  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, action("useOnClickOutside"));

  return <div>
    <div ref={ref} className={"w-96 p-4 h-1/2 bg-gray-300"} onClick={action("inSideClick")}>
      inSide
    </div>
    <div className={"mt-2"}>
    outSide
    </div>
  </div>;
};

export const example = Template.bind({});
