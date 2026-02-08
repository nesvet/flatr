import { bun } from "@nesvet/eslint-config";


export default [// eslint-disable-line import/no-default-export
	{ ignores: [ "examples/**" ] },
	...bun
];
