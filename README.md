TypeScript Vite React "linaria" Dynamic Props Demo
=================================

linaria并不像emotion那样支持动态样式（只能通过linaria.styled方法来定义一个动态组件），会报错：

```
SyntaxError: [wyw-in-js] src/Hello.tsx: This identifier cannot be used in the template, because it is a function parameter.
  2 | import { css } from "@linaria/core";
  3 | const styles = {
> 4 |   hello: (baseFontSize) => css`
    |           ^^^^^^^^^^^^
  5 |     background-color: #EEEEEE;
  6 |     font-size: ${baseFontSize * 2}px
  7 |   `
  2 | import { css } from "@linaria/core";
```

与css-in-js相比，linaria在功能上有较多的限制，它更像是一个写在js代码里的css，而不是用js写的css

```
npm install
npm run demo
```

It will open page on browser automatically.
