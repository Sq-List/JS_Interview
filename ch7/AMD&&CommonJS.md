+ AMD
    + 全局 define 函数
    + 全局 require 函数
    + 依赖 JS 会自动、异步加载

+ CommonJS
    + CommonJS 不会异步加载JS，而是同步一次性加载出来
    + 需要构件工具支持
    + 一般和 npm 一起使用

+ AMD 和 CommonJS 使用场景
    + 需要异步加载 JS， 使用AMD
    + 使用了 npm 之后建议使用 CommonJS