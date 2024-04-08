const plugins = [];
plugins.push([
  "component",
  {
    libraryName: "element-ui",
    styleLibraryName: "theme-chalk",
  },
]);

module.exports = {
  presets: [
    "@vue/cli-plugin-babel/preset",
    [
      "@babel/preset-env",
      {
        useBuiltIns: "entry",
        corejs: 3, // 指定corejs的版本,如果package.json没有core-js，还需要另外安装
      },
    ],
  ],
  plugins,
};
