# Nuxt Auth Controller 
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

> An easier approach to set up Auth within your Nuxt project

## Installation

```sh
$ yarn add @netsells/nuxt-auth-controller @nuxtjs/auth @nuxtjs/axios 
```

Edit `nuxt.config.js`
```js
modules: [
  '@nuxtjs/axios',
  '@nuxtjs/auth',
],
```

## Usage

Create a `AuthController.js` file inside `app/Controllers/Http/api/`. In there is where you require the package: 

```js
const AuthController = require('@netsells/nuxt-auth-controller');

module.exports = new AuthController;
```

Next, in your `.env` file add the following and make sure they are all populated: 
```js
API_BASE=http://example.com
API_URL=${API_BASE}/api
API_TOKEN_URL=${API_BASE}/oauth/token
API_PERSONAL_ACCESS_CLIENT_ID=
API_PERSONAL_ACCESS_CLIENT_SECRET=
API_PASSWORD_GRANT_CLIENT_ID=
API_PASSWORD_GRANT_CLIENT_SECRET=
```

You then need to add the route for your login. in `routes.js`
```js

Route.group(() => {
   Route.post(‘auth/login’, ‘api/AuthController.login’);
}).prefix('api');
```


## License

 © [Martin Smith]()


[npm-image]: https://badge.fury.io/js/nuxt-auth-controller.svg
[npm-url]: https://npmjs.org/package/nuxt-auth-controller
[travis-image]: https://travis-ci.com/martin91s/nuxt-auth-controller.svg?branch=master
[travis-url]: https://travis-ci.com/martin91s/nuxt-auth-controller
[daviddm-image]: https://david-dm.org/martin91s/nuxt-auth-controller.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/martin91s/nuxt-auth-controller
