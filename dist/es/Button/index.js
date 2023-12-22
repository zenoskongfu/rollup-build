import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';

const Button = (props) => {
  const [count, setCount] = useState(0);
  return /* @__PURE__ */ jsxs("div", { className: "button-container", children: [
    /* @__PURE__ */ jsxs("button", { onClick: () => setCount(count + 1), children: [
      "count: ",
      count
    ] }),
    /* @__PURE__ */ jsx("div", { children: props.contents })
  ] });
};
const name = "button";
const testFunc = async () => await Promise.resolve(1);
class Dong {
}

export { Dong, Button as default, name, testFunc };
//# sourceMappingURL=index.js.map
