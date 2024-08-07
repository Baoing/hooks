import React from 'react';
import { Meta } from '@storybook/react';
import {useError} from '@channelwill/hooks';
import {Button, Text} from "@shopify/polaris"

export default {
  title: 'Hooks/useError',
} as Meta;

class ErrorBoundary extends React.Component<{}, { hasError: boolean }> {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <Text as="h2" tone={"critical"}>
            Something went wrong.
          </Text>
          <div className={"mt-2"}>
            <Button onClick={() => this.setState({ hasError: false })}>Retry</Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}


const DemoUseError = () => {
  const throwError = useError();

  const handleButtonClick = () => {
    throwError(new Error('This is a test error'));
  }

  return  <Button
    variant="primary"
    tone="critical"
    onClick={handleButtonClick}
  >Click me to throw</Button>
};

const Template: () => JSX.Element = () => {
  return <ErrorBoundary>
    <DemoUseError />
  </ErrorBoundary>;
};

export const example = Template.bind({});
