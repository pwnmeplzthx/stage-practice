module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: ["next/core-web-vitals", "prettier"],
    plugins: [
        'react',
        'react-hooks',
    ],
    parserOptions: {
        parser: '@babel/eslint-parser',
        sourceType: 'module',
        ecmaVersion: 'latest',
        ecmaFeatures: {
            jsx: true,
            experimentalObjectRestSpread: true,
        },
        requireConfigFile: false,
    },
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        indent: [2, 4],
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        // Выключено, вызывает ошибку линтера https://github.com/prettier/eslint-plugin-prettier/issues/306
        'no-unused-vars': 'off',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        // 'max-len': ['error', { code: 250 }],
        'max-len': 'off',
        'linebreak-style': 0,
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
        'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies
        'no-param-reassign': 'off',
        'no-undef': 'off',
        'react/prop-types': 'off',
        'space-infix-ops': 'off',
        'jsx-a11y/label-has-associated-control': 'off',
        'default-case': 'off',
        'react/jsx-props-no-spreading': 'off',
    },
};
