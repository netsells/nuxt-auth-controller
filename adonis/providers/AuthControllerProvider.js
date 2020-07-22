'use strict';

const { ServiceProvider } = use('@adonisjs/fold');

class AuthControllerProvider extends ServiceProvider {
    /**
     * Register the provider.
     */
    register() {
        this.app.bind('Auth/AuthController', () => {
            const AuthController = require('../Http/Controllers/AuthController');

            return new AuthController();
        });
    }

    /**
     * Run commands on boot.
     */
    boot() {
        const Route = use('Adonis/Src/Route');

        Route.group(() => {
            Route.post('auth/password-reset', '@provider:Auth/AuthController.passwordResetRequest');
            Route.post('auth/login', '@provider:Auth/AuthController.login');
        }).prefix('api');
    }
}

module.exports = AuthControllerProvider;
