module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:vue/vue3-essential",
    "plugin:vue/vue3-strongly-recommended",
    "plugin:vue/vue3-recommended",
  ],
  "overrides": [
    {
      "env": {
        "node": true
      },
      "files": [
        ".eslintrc.{js,cjs}"
      ],
      "parserOptions": {
        "sourceType": "script"
      }
    }
  ],
  "parserOptions": {
    "ecmaVersion": "latest"
  },
  "plugins": [
    "vue"
  ],
  "rules": {
    /**
           * "off" 或 0：关闭规则。
           * "warn" 或 1：开启规则并设为警告（不会导致程序退出）。
           * "error" 或 2：开启规则并设为错误（会导致程序退出）。
           */
    "indent": [2, 2],
    "no-multiple-empty-lines": [2, { max: 1 }], // 不允许出现连续多行空白。
    "no-const-assign": 2, // 禁止修改 const 声明
    "vue/multi-word-component-names": 0,
    "no-multi-spaces": 2, // 禁止使用多余的空格
    "no-trailing-spaces": 1, // 末尾去除多余空格
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off", // 使用 console.log
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off", // 使用 debugger
    "no-unused-vars": 1, // 定义的变量没有使用
    "vue/no-unused-components": 1,
    "vue/no-mutating-props": 0,
    "vue/html-self-closing": [1, {
      "html": {
        "void": 'never',
        "normal": 'never',
        "component": 'always'
      },
      "svg": 'always',
      "math": 'always'
    }]
  }
}
