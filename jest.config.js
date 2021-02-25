export default
{
	projects: [
		{ preset: 'jest-expo/ios' },
		{ preset: 'jest-expo/android' },
		{ preset: 'jest-expo/web' }
	],
	transform: {
		'^.+\\.(ts|tsx)?$': 'ts-jest',
		'^.+\\.(js|jsx)$': 'babel-jest',
	},
	transformIgnorePatterns: [
		'node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@sentry/.*)'
	],
	moduleFileExtensions: ['ts', 'tsx', 'js'],
	testRegex: '/__tests__/.*\\.(test|spec)?\\.(ts|tsx)$',
	coverageDirectory: './coverage',
	coveragePathIgnorePatterns: ['node_modules'],
};
