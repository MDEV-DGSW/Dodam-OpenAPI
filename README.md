# Dodam-OpenAPI

A npm package for easy use of DodamDodam OAuth

# Installing
Use npm<br/>
`$ npm install dodam-openapi`<br/>
<br/>
Use yarn<br/>
`$ yarn add dodam-openapi`

# Example
ES5
``` javascript
const { getToken, refreshToken, getUser } = require('dodam-openapi');

const example = async () => {
	const res = await getToken(code, clientId, clientSecret)
	const res1 = await refreshToken(refreshToken, clientId);
	const res2 = await getUser(token)
}
```
ES6
``` javascript
import { getToken, getUser, refreshToken } from 'dodam-openapi';

const example = async () => {
	const res = await getToken(code, clientId, clientSecret)
	const res1 = await refreshToken(refreshToken, clientId);
	const res2 = await getUser(token)
}
```
## Read More
[DAuth](http://dauth.b1nd.com) | [DAuth-Docs](http://docs.dauth.b1nd.com/)