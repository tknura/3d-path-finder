module.exports = {
  extends: [
    "airbnb-typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
  ],
  plugins: ["react", "@typescript-eslint", "jest", "import", "only-warn"],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    "linebreak-style": "off",
    "import/prefer-default-export": "off",
    "react/prop-types": "off",
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        semi: [2, "never"],
        "@typescript-eslint/semi": [2, "never"],
        "react/jsx-props-no-spreading": "off",
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off", // Since we do not use prop-types
        "react/require-default-props": "off", // Since we do not use prop-types
        "max-len": ["warn", {
          code: 100,
          tabWidth: 2,
          ignorePattern: "^import .*",
          ignoreUrls: true
        }],
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "arrow-body-style": [0, "as-needed"],
        "no-nested-ternary": "off",
        "@typescript-eslint/no-empty-interface": "off",
        '@typescript-eslint/indent': ['error', 2, {
          ignoredNodes: ['TSTypeParameterInstantiation']
        }],
        "@typescript-eslint/space-before-blocks": ["error", "always"]
      },
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
    {
      files: ["src/i18n/*"],
      rules: {
        "max-len": 0,
      },
    },
  ],
};
