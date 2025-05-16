import prettier from 'eslint-config-prettier';
import js from '@eslint/js';
import { includeIgnoreFile } from '@eslint/compat';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';
import { fileURLToPath } from 'node:url';
import ts from 'typescript-eslint';
import svelteConfig from './svelte.config.js';

const gitignorePath = fileURLToPath(new URL('./.gitignore', import.meta.url));

const rules = {
	settings: {
		'import-x/resolver-next': [
			createTypeScriptImportResolver({
				alwaysTryTypes: true,
				project: 'tsconfig.json'
			})
		]
	},
	rules: {
		'linebreak-style': ['error', 'unix'],
		'no-extra-boolean-cast': 'off',
		'@typescript-eslint/strict-boolean-expressions': [
			'error',
			{
				allowString: false,
				allowNumber: false,
				allowNullableObject: false,
				allowNullableBoolean: false,
				allowNullableString: false,
				allowNullableNumber: false,
				allowNullableEnum: false,
				allowAny: false
			}
		],
		'@typescript-eslint/no-inferrable-types': 'off',
		'@typescript-eslint/array-type': [
			'warn',
			{
				default: 'generic'
			}
		],
		'@typescript-eslint/ban-ts-comment': 'warn',
		'no-undef': 'off',
		'no-shadow': 'off',
		'@typescript-eslint/no-shadow': 'error',
		'no-use-before-define': 'off',
		'@typescript-eslint/no-use-before-define': [
			'error',
			{
				functions: false,
				classes: true,
				variables: true,
				allowNamedExports: false,
				enums: false,
				typedefs: false,
				ignoreTypeReferences: true
			}
		],
		'@typescript-eslint/consistent-type-definitions': ['error', 'type'],
		// The ability to do `{ [name: T]: U }` is useful for self-documenting.
		'@typescript-eslint/consistent-indexed-object-style': ['off'],
		'@typescript-eslint/dot-notation': ['off'],
		'@typescript-eslint/no-unused-vars': [
			'error',
			{
				args: 'all',
				argsIgnorePattern: '^_',
				caughtErrors: 'all',
				caughtErrorsIgnorePattern: '^_',
				destructuredArrayIgnorePattern: '^_',
				varsIgnorePattern: '^_',
				ignoreRestSiblings: true
			}
		],
		'@stylistic/member-delimiter-style': [
			'warn',
			{
				multiline: {
					delimiter: 'semi',
					requireLast: true
				},
				singleline: {
					delimiter: 'semi',
					requireLast: false
				}
			}
		],
		'@typescript-eslint/no-unused-expressions': [
			'error',
			{
				allowTaggedTemplates: true
			}
		],
		'import-x/no-default-export': 'off',
		'import-x/default': 'off',
		// its dumb and i dont like it >:(
		'@stylistic/lines-between-class-members': 'off'
	}
};

export default ts.config(
	includeIgnoreFile(gitignorePath),
	js.configs.recommended,
	stylistic.configs.recommended,
	importX.flatConfigs.recommended,
	importX.flatConfigs.errors,
	importX.flatConfigs.typescript,
	...ts.configs.recommended,
	...ts.configs.stylisticTypeChecked,
	...svelte.configs.recommended,
	prettier,
	...svelte.configs.prettier,
	{
		languageOptions: {
			globals: { ...globals.browser, ...globals.node }
		},
		rules: { 'no-undef': 'off' }
	},
	{
		files: ['**/*.svelte', '**/*.svelte.ts', '**/*.svelte.js'],
		ignores: ['eslint.config.js', 'svelte.config.js'],

		languageOptions: {
			parserOptions: {
				projectService: true,
				extraFileExtensions: ['.svelte'],
				parser: ts.parser,
				svelteConfig
			}
		},
		...rules
	},
	rules
);
