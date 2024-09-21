<div align="center">
  <h1>
    <br/>
    <a href="https://www.npmjs.com/package/@channelwill/hooks" style="display: flex; align-items: center; justify-content: center;gap: 8px;">
       <img width="60" src="https://hooks.baoea.com/images/logo.svg" alt="" />
       <div>Channelwill Hooks</div>
    </a>
  </h1>
  <h3 align="center">Ready to use out of the box, no hassle.</h3>

<sup>
    <br />
    <a href="https://www.npmjs.com/package/@channelwill/hooks">
       <img src="https://img.shields.io/npm/v/%40channelwill%2Fhooks" alt="npm package" />
    </a>
    <a href="https://www.npmjs.com/package/@channelwill/hooks">
      <img src="https://img.shields.io/npm/dm/%40channelwill%2Fhooks" alt="npm downloads" />
    </a>
    <a href="https://hooks.baoea.com/">
      <img src="https://img.shields.io/badge/demos-🚀-yellow.svg" alt="demos" />
    </a>
    <br />
  </sup>

English | [简体中文](https://github.com/Baoing/hooks/blob/main/README.zh-CN.md)
</div>

## Installation

```bash
$ npm i @channelwill/hooks
# or
$ yarn add @channelwill/hooks
# or
$ pnpm add @channelwill/hooks
```

## API Documentation

See https://hooks.baoea.com/

### Tool Hooks

- [useArrayComparison](https://hooks.baoea.com/?path=/docs/tool-hooks-usearraycomparison--docs): Compares two arrays for differences.
- [useCommunication](https://hooks.baoea.com/?path=/docs/tool-hooks-usecommunication--docs): Succinctly handles communication between components.
- [useCurrencyConverter](https://hooks.baoea.com/?path=/docs/tool-hooks-usecurrencyconverter--docs):
  Currency conversion tool, real-time exchange rate, covering free conversion of more than 180 currencies of Shopify.
- [useCurrencyFormat](https://hooks.baoea.com/?path=/docs/tool-hooks-usecurrencyformat--docs): Formats international currency display.
- [useEncryption](https://hooks.baoea.com/?path=/docs/tool-hooks-useencryption--docs): Data encryption/decryption operations.
- [useError](https://hooks.baoea.com/?path=/docs/tool-hooks-useerror--docs): Error handling tools, combined with error capture.
- [useExportCSV](https://hooks.baoea.com/?path=/docs/tool-hooks-useexportcsv--docs): Export a CSV file.
- [useForm](https://hooks.baoea.com/?path=/docs/tool-hooks-useform--docs): Form management, validation rule management.
- [usePagination](https://hooks.baoea.com/?path=/docs/tool-hooks-usepagination--docs): Paging functionality.
- [useScript](https://hooks.baoea.com/?path=/docs/tool-hooks-usescript--docs): Dynamically load scripts via links.
- [useVerification](https://hooks.baoea.com/?path=/docs/tool-hooks-useverification--docs): Provides validation rule tools.
- [useCountdown](https://hooks.baoea.com/?path=/docs/tool-hooks-usecountdown--docs): Provides a countdown tool that supports both hour, minute, second and verification code countdown scenarios.
- [useNetworkStatus](https://hooks.baoea.com/?path=/docs/tool-hooks-usenetworkstatus--docs): Used to monitor the user's network status.
- [useKeyPress](https://hooks.baoea.com/?path=/docs/tool-hooks-usekeypress--docs): Used to detect the pressed state of a specific key.

### Base Hooks

- [useDebounce](https://hooks.baoea.com/?path=/docs/base-hooks-usedebounce--docs): debounce function.
- [useMemorizedFn](https://hooks.baoea.com/?path=/docs/base-hooks-usememorizedfn--docs): Memoize functions and expand performance optimization methods.
- [useMount](https://hooks.baoea.com/?path=/docs/base-hooks-usemount--docs): Called when the component is mounted.
- [useSearchListener](https://hooks.baoea.com/?path=/docs/base-hooks-usesearchlistener--docs):  Called when a URL query parameter changes.
- [useThrottle](https://hooks.baoea.com/?path=/docs/base-hooks-usethrottle--docs): Throttling function.
- [useToggle](https://hooks.baoea.com/?path=/docs/base-hooks-usetoggle--docs): Toggle state.

### DOM Hooks

- [useEventListener](https://hooks.baoea.com/?path=/docs/dom-hooks-useeventlistener--docs): Bind and listen to DOM events.
- [useInViewport](https://hooks.baoea.com/?path=/docs/dom-hooks-useinviewport--docs): Checks if an element is within the viewport.
- [useIsMobile](https://hooks.baoea.com/?path=/docs/dom-hooks-useismobile--docs): Detect if it is a mobile device.
- [useOnClickOutside](https://hooks.baoea.com/?path=/docs/dom-hooks-useonclickoutside--docs): Fired when clicking outside.
- [useOnceClick](https://hooks.baoea.com/?path=/docs/dom-hooks-useonceclick--docs): Only handles a click event once.
- [usePageLeave](https://hooks.baoea.com/?path=/docs/dom-hooks-usepageleave--docs): Fired when leaving the page.
- [useWindowSize](https://hooks.baoea.com/?path=/docs/dom-hooks-usewindowsize--docs): Get the window size.
- [useScrollPosition](https://hooks.baoea.com/?path=/docs/dom-hooks-usescrollposition--docs): Used to get the current scroll position.
- [useAnimationFrame](https://hooks.baoea.com/?path=/docs/dom-hooks-useanimationframe--docs): Used to execute callback functions in each animation frame, often used for performance optimization.

## Demo

Here are some sample codes and demonstrations to help users better understand how to use these hooks.

[Link address](https://hooks.baoea.com/)

Examples

```tsx
import {useWindowSize, useEventListener} from '@channelwill/hooks';

const ExampleComponent = () => {
  const {width, height} = useWindowSize();

  const handleClick = () => {
    console.log('Window clicked!');
  };

  useEventListener('click', handleClick);

  return (
    <div>
      <h1>Current window size: {width} x {height}</h1>
    </div>
  );
};

```

## 🤝 Participate in co-construction.

```bash
$ git clone git@github.com:Baoing/hooks.git

$ cd hooks

$ npm install

$ npm run start
```

Open browser access [http://localhost:6006/](http://localhost:6006/)

## License

MIT License
