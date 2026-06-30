import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import importNewlines from 'eslint-plugin-import-newlines';
import stylistic from '@stylistic/eslint-plugin';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    "svgr.d.ts",
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      '@stylistic': stylistic,
      'import-newlines': importNewlines,
    },
    rules: {
      indent: [
        'warn',
        2,
        {
          SwitchCase: 1,
          FunctionExpression: {
            body: 1,
            parameters: 'first',
          },
        },
      ],
      quotes: ['warn', 'single'],
      semi: ['warn', 'always'],
      'no-trailing-spaces': 'warn',
      'object-curly-spacing': ['warn', 'always'],
      'array-bracket-newline': ['warn', 'consistent'],
      'array-element-newline': ['error', { ArrayExpression: 'consistent' }],
      'no-multiple-empty-lines': ['warn', { max: 1 }],
      'comma-dangle': ['warn', {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never'
      }],
      'no-console': 'warn',
      'eqeqeq': ['warn', 'always'],
      'no-empty-pattern': 'warn',
      'no-extra-boolean-cast': 'warn',
      'no-constant-condition': 'warn',
      'no-invalid-this': 'warn',
      'import/no-unresolved': 'error',
      'max-len': ['warn', { code: 120, ignoreStrings: true }],
      'no-multi-spaces': 'warn',
      'rest-spread-spacing': 'warn',
      'semi-spacing': 'warn',
      'semi-style': 'warn',
      'space-before-blocks': 'warn',
      'space-before-function-paren': ['warn', {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always'
      }],
      'space-in-parens': 'warn',
      'space-infix-ops': 'warn',
      'space-unary-ops': 'warn',
      'switch-colon-spacing': 'warn',
      'template-curly-spacing': 'warn',
      'wrap-regex': 'warn',
      'no-else-return': 'warn',
      'no-empty': 'warn',
      'no-undef-init': 'warn',
      'no-unneeded-ternary': 'warn',
      'no-useless-rename': 'warn',
      'no-useless-return': 'warn',
      'no-var': 'error',
      'prefer-const': 'warn',
      'one-var': ['error', 'never'],
      'arrow-spacing': 'warn',
      'block-spacing': 'warn',
      'yoda': 'warn',
      'brace-style': 'warn',
      'comma-spacing': 'warn',
      'computed-property-spacing': 'warn',
      'dot-location': ['warn', 'property'],
      'eol-last': 'warn',
      'func-call-spacing': 'warn',
      'function-paren-newline': 'warn',
      'implicit-arrow-linebreak': 'warn',
      'key-spacing': 'warn',
      'keyword-spacing': 'warn',
      'multiline-ternary': ['warn', 'always-multiline'],
      'linebreak-style': ['warn', process.platform === 'win32' ? 'windows' : 'unix'],
      'no-whitespace-before-property': 'warn',
      'nonblock-statement-body-position': 'warn',
      'object-curly-newline': 'warn',
      'max-statements-per-line': ['warn', { max: 1 }],
      'newline-per-chained-call': ['warn', { ignoreChainWithDepth: 3 }],
      'prefer-object-spread': 'warn',
      // 'func-style': ['warn', 'expression', { allowArrowFunctions: true }],
      '@stylistic/jsx-quotes': ['warn', 'prefer-double'],
      '@stylistic/member-delimiter-style': 'warn',

      "import/order": [
        "warn",
        {
          "groups": ["builtin", "external", "internal", ["parent", "sibling", "index"]],
          "pathGroups": [
            {
              "pattern": "./*.module.scss",
              "group": "index",
              "position": "after"
            }
          ],
          "pathGroupsExcludedImportTypes": ["builtin"],
        }
      ],
      'import/no-duplicates': 'warn',
      'import-newlines/enforce': ['warn', {
        items: 1,
        'max-len': 120,
        semi: false
      }],

      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      '@typescript-eslint/consistent-type-imports': [
        'warn',
        {
          prefer: 'type-imports',
          disallowTypeAnnotations: false,
        },
      ],
      '@typescript-eslint/no-empty-object-type': 'off',
      'no-redeclare': 'error',

      'react/no-unescaped-entities': 'off',
      'react/jsx-first-prop-new-line': ['warn', 'multiline-multiprop'],
      'react/jsx-max-props-per-line': ['warn', { maximum: 1, when: 'multiline' }],
      'react/jsx-indent-props': ['warn', 2],
      'react/jsx-closing-bracket-location': ['warn', 'tag-aligned'],
      'react/jsx-tag-spacing': [
        'warn',
        {
          closingSlash: 'never',
          beforeSelfClosing: 'always',
          afterOpening: 'never',
          beforeClosing: 'never'
        }
      ],
      'react/jsx-indent': ['warn', 2],
      'react/jsx-no-script-url': 'error',
      'react/jsx-no-target-blank': 'warn',
      'react/jsx-no-useless-fragment': ['off'],
      // 'react/jsx-one-expression-per-line': 'warn',
      'react/jsx-pascal-case': 'warn',
      'react/jsx-wrap-multilines': 'warn',
      'react/no-children-prop': 'error',
      'react/jsx-curly-brace-presence': 'warn',
      'react/jsx-curly-spacing': ['warn', { when: 'never', children: true }],
      'react/jsx-equals-spacing': 'warn',
      'react/jsx-key': 'error',
      'react/jsx-fragments': 'warn',
      'react/self-closing-comp': ['warn', { component: true, html: true }],
    },
  },
]);

export default eslintConfig;
