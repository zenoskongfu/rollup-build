import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';

const Button = (props) => {
  const [count, setCount] = useState(0);
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("button", { onClick: () => setCount(count + 1), children: [
      "count: ",
      count
    ] }),
    /* @__PURE__ */ jsx("div", { children: props.contents })
  ] });
};

export { Button as default };
//# sourceMappingURL=index.js.map
