import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';

var Button = function (props) {
    var _a = useState(0), count = _a[0], setCount = _a[1];
    return jsxs("div", { children: [jsxs("button", { onClick: function () { return setCount(count + 1); }, children: ["count: ", count] }), jsx("div", { children: props.contents })] });
};

export { Button as default };
//# sourceMappingURL=index.js.map
