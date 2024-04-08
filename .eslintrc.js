module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': 'off',
    'no-undef': 'off',
    'no-useless-escape': 'off',
    'no-constant-condition': 'off',
    'no-var': 'error', // 禁止使用var
    'vue/no-unused-components': 'warn', // 禁止出现未使用的组件
    'no-var': 'error', // 禁止使用var
    'no-dupe-keys': 'error', // 禁止对象字面量中出现重复的 key
    'no-eval': 'error', // 禁用 eval()
    'no-multi-spaces': 'error', // 不能用多余的空格,
    'no-self-compare': 'error', // 禁止自身比较
    'no-self-assign': 'error', // 禁止自我赋值
    'no-unused-vars': 'off', // 禁止出现未使用过的变量
    'no-unreachable': 'error', // 不能有无法执行的代码
    'no-lone-blocks': 'error', // 禁止不必要的嵌套块
    'no-empty': 'error', // 块语句中的内容不能为空
    'no-multiple-empty-lines': 'warn' // 不允许有连续多行空行
    // add your custom rules here
    // it is base on https://github.com/vuejs/eslint-config-vue
  }
}
