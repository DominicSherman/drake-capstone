module.exports = {
    parser: 'babel-eslint',
    extends: 'get-off-my-lawn',
    rules: {
        'jsx-a11y/click-events-have-key-events': 'off',
        'max-params': ['error', 4],
        'react/prop-types': 'off',
        'node/no-unpublished-import': 0,
        'react/prefer-stateless-function': 0,
        'jest/consistent-test-it': 0,
        'camelcase': 0
    }
};