"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonHelloWorld = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const ButtonHelloWorld = () => {
    const onClickHelloWorld = () => {
        alert('Hellow World!!');
    };
    return ((0, jsx_runtime_1.jsx)("button", { onClick: (onClickHelloWorld), children: "\u306F\u308D\u30FC\u308F\u30FC\u308B\u3069" }));
};
exports.ButtonHelloWorld = ButtonHelloWorld;
//# sourceMappingURL=buttonHelloWorld.js.map