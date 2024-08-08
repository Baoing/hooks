<div align="center">
  <h1>
    <br/>
    <a href="#" style="display: flex; justify-content: center;gap: 8px;">
       <img src="https://www.channelwill.com/wp-content/uploads/2024/04/comparison_logo_3.svg" alt="" />
    </a>
    <br />
    Channelwill Hooks👍
  </h1>
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

### Tool Hooks

- [useArrayComparison](https://hooks-1be.pages.dev/?path=/docs/tool-hooks-usearraycomparison--docs): 比较两个数组的变化。
- [useCommunication](https://hooks-1be.pages.dev/?path=/docs/tool-hooks-usecommunication--docs): 处理组件之间的通信。
- [useCurrencyConverter](https://hooks-1be.pages.dev/?path=/docs/tool-hooks-usecurrencyconverter--docs): 货币转换工具。
- [useCurrencyFormat](https://hooks-1be.pages.dev/?path=/docs/tool-hooks-usecurrencyformat--docs): 格式化货币显示。
- [useEncryption](https://hooks-1be.pages.dev/?path=/docs/tool-hooks-useencryption--docs): 数据加密。
- [useError](https://hooks-1be.pages.dev/?path=/docs/tool-hooks-useerror--docs): 错误处理工具。
- [useExportCSV](https://hooks-1be.pages.dev/?path=/docs/tool-hooks-useexportcsv--docs): 导出 CSV 文件。
- [useForm](https://hooks-1be.pages.dev/?path=/docs/tool-hooks-useform--docs): 表单管理。
- [usePagination](https://hooks-1be.pages.dev/?path=/docs/tool-hooks-usepagination--docs): 分页功能。
- [useScript](https://hooks-1be.pages.dev/?path=/docs/tool-hooks-usescript--docs): 动态加载脚本。
- [useVerification](https://hooks-1be.pages.dev/?path=/docs/tool-hooks-useverification--docs): 提供验证规则工具。

### Base Hooks

- [useDebounce](https://hooks-1be.pages.dev/?path=/docs/base-hooks-usedebounce--docs): 防抖函数。
- [useMemorizedFn](https://hooks-1be.pages.dev/?path=/docs/base-hooks-usememorizedfn--docs): 记忆化函数。
- [useMount](https://hooks-1be.pages.dev/?path=/docs/base-hooks-usemount--docs): 组件挂载时调用。
- [useThrottle](https://hooks-1be.pages.dev/?path=/docs/base-hooks-usethrottle--docs): 节流函数。
- [useToggle](https://hooks-1be.pages.dev/?path=/docs/base-hooks-usetoggle--docs): 状态切换。

### DOM Hooks

- [useEventListener](https://hooks-1be.pages.dev/?path=/docs/dom-hooks-useeventlistener--docs): 绑定监听 DOM 事件。
- [useInViewport](https://hooks-1be.pages.dev/?path=/docs/dom-hooks-useinviewport--docs): 检测元素是否在视口内。
- [useIsMobile](https://hooks-1be.pages.dev/?path=/docs/dom-hooks-useismobile--docs): 检测是否为移动设备。
- [useOnClickOutside](https://hooks-1be.pages.dev/?path=/docs/dom-hooks-useonclickoutside--docs): 点击外部时触发。
- [useOnceClick](https://hooks-1be.pages.dev/?path=/docs/dom-hooks-useonceclick--docs): 只处理一次点击事件。
- [usePageLeave](https://hooks-1be.pages.dev/?path=/docs/dom-hooks-usepageleave--docs): 页面离开时触发。
- [useWindowSize](https://hooks-1be.pages.dev/?path=/docs/dom-hooks-usewindowsize--docs): 获取窗口尺寸。

## Demo

在这里提供一些示例代码和演示，以帮助用户更好地理解如何使用这些 hooks。

[链接地址](https://hooks-1be.pages.dev/)

其中示例

```tsx
import { useWindowSize, useEventListener } from '@channelwill/hooks';

const ExampleComponent = () => {
  const { width, height } = useWindowSize();

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
