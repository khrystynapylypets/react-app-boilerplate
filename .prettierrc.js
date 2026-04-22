export default {
	singleQuote: true,
	trailingComma: 'es5',
	proseWrap: 'always',
	useTabs: true,
	plugins: [
		'@ianvs/prettier-plugin-sort-imports',
		'prettier-plugin-tailwindcss',
	],
	importOrder: [
		'^react$',
		'<BUILTIN_MODULES>',
		'<THIRD_PARTY_MODULES>',
		'^@.+',
		'^(?!.*[.]css$)[./].*$',
		'<TYPES>^(node:)',
		'<TYPES>',
		'<TYPES>^[.]',
		'.css$',
	],
};
