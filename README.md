# preset.json配置说明
{
  "useConfigFiles": true,
  "plugins": {
    "@vue/cli-plugin-babel": {},
    "@vue/cli-plugin-router": {
      "historyMode": true
    },
    "@vue/cli-plugin-vuex": {},
    "@vue/cli-plugin-eslint": {
      "config": "standard",
      "lintOn": [
        "save"
      ]
    },
    "@vue/cli-plugin-unit-jest": {},
    "@vue/cli-plugin-e2e-cypress": {}
  },
  "cssPreprocessor": "less"
}