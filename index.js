module.exports = {
  "extends": [
    "stylelint-rscss/config",
    "stylelint-config-standard"
  ],
  "plugins": [
    "stylelint-scss"
  ],
  "rules": {
    "rscss/class-format": [
      true, {
        "element": "^[a-z-]+$",
        "maxDepth": false,
        "component": "pascal-case",
      }
    ],
    "at-rule-no-unknown": [
      true, {
        ignoreAtRules: [
          'if',
          'for',
          'else',
          'warn',
          'each',
          'error',
          'while',
          'debug',
          'mixin',
          'return',
          'extend',
          'at-root',
          'include',
          'content',
          'function',
        ]
      }
    ],
    "selector-max-universal": 0,
    "selector-nested-pattern": "^(&:|>|&.-)"
  }
}