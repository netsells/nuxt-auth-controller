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
