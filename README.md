# Nuxt Auth Controller
[![NPM version][npm-image]][npm-url]

> An easier approach to set up Auth within your Nuxt and Adonis project

## Installation

Install via the adonis cli
```sh
$ npx @adonisjs/cli install @netsells/nuxt-auth-controller --yarn
```

Also install the auth package you wish to use:
```sh
yarn add -D @netsells/nuxt-auth
```

## Usage

Make sure to register the provider inside `start/app.js` file.

```js
const providers = [
    // Other providers
    '@netsells/nuxt-auth-controller/adonis/providers/AuthControllerProvider',
];
```

Edit `nuxt.config.js`
```js
modules: [
    '@netsells/nuxt-auth-controller',
],
```

## Config

The config file is saved as `config/nuxt-auth.js` make sure to update all paths for the auth and client credentials.


[npm-image]: https://badge.fury.io/js/%40netsells%2Fnuxt-auth-controller.svg
[npm-url]: https://npmjs.org/package/@netsells/nuxt-auth-controller

