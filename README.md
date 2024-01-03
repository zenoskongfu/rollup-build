## rollup-build

这是一个用rollup搭建的组件库，用于教学用

zenos，慢功夫，掘金，教学，rollup组件库

### Jest

jest是一个通用的测试库，其解析不同类型的文件，是用其自身配置的文件，环境，依赖，进行解析的，和构建工具无关，是完全不同的两套解析工具

1. jest @types/jest 是基本的jest库，用来提供基本的单元测试
2. @testing-library/react 用来提供测试react组件的，解析jsx语法的能力
3. @testing-library/jest-dom 用来提供jest对DOM测试的能力

进度：
- react 测试没有问题
- 先导文件运行没有问题

```js
// 导入React
import React from "react";
global.React = React;
```