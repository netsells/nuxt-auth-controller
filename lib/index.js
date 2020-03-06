const axios = require('axios');

class AuthController {
    /**
     * Fetch the auth token for the client from the api
     *
     * @param {Object} context
     *
     * @returns {Promise<AxiosResponse<T>>}
     */
    async getToken(context) {
        return await axios.post(process.env.API_TOKEN_URL, {
            grant_type: 'client_credentials',
            client_id: process.env.API_PASSWORD_GRANT_CLIENT_ID,
            client_secret: process.env.API_PASSWORD_GRANT_CLIENT_SECRET,
        });
    }

    /**
     * Fetch the users auth token
     *
     * @param {Object} request
     *
     * @returns {Promise<AxiosResponse<T>>}
     */
    async getAuthToken({ request }) {
        return await axios.post(process.env.API_TOKEN_URL, {
            grant_type: 'password',
            client_id: process.env.API_PASSWORD_GRANT_CLIENT_ID,
            client_secret: process.env.API_PASSWORD_GRANT_CLIENT_SECRET,
            username: request.input('username'),
            password: request.input('password'),
        }, {
            validateStatus: () => true,
        });
    }

    /**
     * Log the user in
     *
     * @param {Object} request
     * @param {Object} response
     *
     * @returns {Promise<*>}
     */
    async login({ request, response }) {

        const result = await this.getAuthToken();

        return response.status(result.status).json(result.data);
    }

    /**
     * Request a new password for the user from the api
     *
     * @param {Object} request
     * @param {Object} response
     *
     * @returns {Promise<*>}
     */
    async passwordResetRequest({ request, response }) {
        const tokenResponse = await this.getToken();

        const result = await axios.post(`${ process.env.API_URL }/forgotten-password`, {
            email: request.input('email'),
        }, {
            headers: {
                Authorization: `Bearer ${ tokenResponse.data.access_token }`,
            },
            validateStatus: () => true,
        });

        return response
            .status(result.status)
            .json(result.data);
    }

    /**
     * Set the new password for the user
     *
     * @param {Object} request
     * @param {Object} response
     *
     * @returns {Promise<*>}
     */
    async passwordReset({ request, response }) {
        const tokenResponse = await this.getToken();

        const result = await axios.post(`${ process.env.API_URL }/forgotten-password/reset`, {
            email: request.input('email'),
            password: request.input('password'),
            password_confirmation: request.input('password_confirmation'),
            token: request.input('token'),
        }, {
            headers: {
                Authorization: `Bearer ${ tokenResponse.data.access_token }`,
            },
            validateStatus: () => true,
        });

        return response
            .status(result.status)
            .json(result.data);
    }

    //refresh use armalytix

}

module.exports = AuthController;
