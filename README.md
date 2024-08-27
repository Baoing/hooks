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

- [useArrayComparison](https://hooks.baoea.com/?path=/docs/tool-hooks-usearraycomparison--docs): 比较两个数组的差异变化。
- [useCommunication](https://hooks.baoea.com/?path=/docs/tool-hooks-usecommunication--docs): 简洁处理组件之间的通信。
- [useCurrencyConverter](https://hooks.baoea.com/?path=/docs/tool-hooks-usecurrencyconverter--docs):
  货币转换工具，实时汇率，涵盖Shopify180多种货币的自由转换。
- [useCurrencyFormat](https://hooks.baoea.com/?path=/docs/tool-hooks-usecurrencyformat--docs): 格式化国际货币显示。
- [useEncryption](https://hooks.baoea.com/?path=/docs/tool-hooks-useencryption--docs): 数据的加/解密操作。
- [useError](https://hooks.baoea.com/?path=/docs/tool-hooks-useerror--docs): 错误处理工具，配合错误捕获。
- [useExportCSV](https://hooks.baoea.com/?path=/docs/tool-hooks-useexportcsv--docs): 导出 CSV 文件。
- [useForm](https://hooks.baoea.com/?path=/docs/tool-hooks-useform--docs): 表单管理，验证规则管理。
- [usePagination](https://hooks.baoea.com/?path=/docs/tool-hooks-usepagination--docs): 分页功能。
- [useScript](https://hooks.baoea.com/?path=/docs/tool-hooks-usescript--docs): 通过链接动态加载脚本。
- [useVerification](https://hooks.baoea.com/?path=/docs/tool-hooks-useverification--docs): 提供验证规则工具。
- [useCountdown](https://hooks.baoea.com/?path=/docs/tool-hooks-usecountdown--docs): 提供倒计时工具，同时支持时分秒和验证码倒计时场景。
- [useNetworkStatus](https://hooks.baoea.com/?path=/docs/tool-hooks-usenetworkstatus--docs): 用于监测用户的网络状态。

### Base Hooks

- [useDebounce](https://hooks.baoea.com/?path=/docs/base-hooks-usedebounce--docs): 防抖函数。
- [useMemorizedFn](https://hooks.baoea.com/?path=/docs/base-hooks-usememorizedfn--docs): 记忆化函数，拓展性能优化手段。
- [useMount](https://hooks.baoea.com/?path=/docs/base-hooks-usemount--docs): 组件挂载时调用。
- [useSearchListener](https://hooks.baoea.com/?path=/docs/base-hooks-usesearchlistener--docs):  URL 查询参数的变化时调用。
- [useThrottle](https://hooks.baoea.com/?path=/docs/base-hooks-usethrottle--docs): 节流函数。
- [useToggle](https://hooks.baoea.com/?path=/docs/base-hooks-usetoggle--docs): 状态切换。

### DOM Hooks

- [useEventListener](https://hooks.baoea.com/?path=/docs/dom-hooks-useeventlistener--docs): 绑定监听 DOM 事件。
- [useInViewport](https://hooks.baoea.com/?path=/docs/dom-hooks-useinviewport--docs): 检测元素是否在视口内。
- [useIsMobile](https://hooks.baoea.com/?path=/docs/dom-hooks-useismobile--docs): 检测是否为移动设备。
- [useOnClickOutside](https://hooks.baoea.com/?path=/docs/dom-hooks-useonclickoutside--docs): 点击外部时触发。
- [useOnceClick](https://hooks.baoea.com/?path=/docs/dom-hooks-useonceclick--docs): 只处理一次点击事件。
- [usePageLeave](https://hooks.baoea.com/?path=/docs/dom-hooks-usepageleave--docs): 页面离开时触发。
- [useWindowSize](https://hooks.baoea.com/?path=/docs/dom-hooks-usewindowsize--docs): 获取窗口尺寸。

## Demo

在这里提供一些示例代码和演示，以帮助用户更好地理解如何使用这些 hooks。

[链接地址](https://hooks.baoea.com/)

其中示例

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
      <h1>当前窗口大小: {width} x {height}</h1>
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
