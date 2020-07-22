'use strict';

const path = require('path');

module.exports = async (cli) => {
    try {
        await cli.copy(
            path.join(__dirname, './stubs/config.js'),
            path.join(cli.helpers.configPath(), 'nuxt-auth.js')
        );

        await cli.command.completed('create', 'config/nuxt-auth.js')
    } catch (error) {
        // ignore error
    }
};
