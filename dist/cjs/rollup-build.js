'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const Button = (props) => {
  const [count, setCount] = react.useState(0);
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntime.jsxs("button", { onClick: () => setCount(count + 1), children: [
      "count: ",
      count
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx("div", { children: props.contents })
  ] });
};

const Input = () => {
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntime.jsx("span", { children: "input anything: " }),
    /* @__PURE__ */ jsxRuntime.jsx("input", {})
  ] });
};

exports.Button = Button;
exports.Input = Input;
//# sourceMappingURL=rollup-build.js.map
