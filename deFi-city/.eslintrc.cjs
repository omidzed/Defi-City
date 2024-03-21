module.exports = {
	root: true,
	env: {
		browser: true,
		es2020: true,
		node: true, // add if you're using Node.js features
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended', // Ensure this is included for React-specific linting
		'plugin:react-hooks/recommended',
		// 'airbnb-typescript', // Uncomment or add if you prefer Airbnb's style guide
		// 'prettier', // Uncomment or add to integrate with Prettier
	],
	ignorePatterns: ['dist', '.eslintrc.js'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: ['react', 'react-hooks', '@typescript-eslint'],
	settings: {
		react: {
			version: 'detect', // Auto-detect the react version
		},
	},
	rules: {
		'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
		// Add other custom rules or override existing ones here
	},
};
