import { jsxs, jsx } from 'react/jsx-runtime';
import inputStyle from './index.module.css.js';

const Input = () => {
  return /* @__PURE__ */ jsxs("div", { className: inputStyle["input-container"], children: [
    /* @__PURE__ */ jsx("span", { className: "label", children: "input anything: " }),
    /* @__PURE__ */ jsx("input", {})
  ] });
};

export { Input as default };
//# sourceMappingURL=index.js.map
