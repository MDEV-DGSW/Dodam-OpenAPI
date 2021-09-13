# Dodam-OpenAPI

A npm package for easy use of DodamDodam OAuth

# Installing
Use npm<br/>
`$ npm install @b1nd/openapi`<br/>
<br/>
Use yarn<br/>
`$ yarn add @b1nd/openapi`

# How to use

create module
``` javascript
const clientId: string = "clientId";
const clientSecret: string = "clientSecret";

const authClient = new AuthClient(clientId, clientSecret);
```

### Login
```javascript
const code: string = "code";

const token = await AuthClient.login(code);
```

### Get token
```javascript
const code: string = "code";

const token = await AuthClient.getToken(code);
```
### Refresh token
```javascript
const refreshToken: string = "refresh_token";

const token = await AuthClient.refreshToken(refreshToken);
```

### Get user
```javascript
const token: string = "access_token";

const user = await AuthClient.getUser(token);
```
## Read More
[DAuth](http://dauth.b1nd.com) | [DAuth-Docs](http://docs.dauth.b1nd.com/)