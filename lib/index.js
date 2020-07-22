import merge from 'lodash/merge';

export default function AuthModule(moduleOptions = {}) {
    this.options.auth = merge({
        password_reset_url: '/password-reset?token=%TOKEN%',

        strategies: {
            local: {
                endpoints: {
                    login: {
                        propertyName: 'access_token',
                        url: `${ process.env.APP_URL }/api/auth/login`,
                    },
                    user: {
                        propertyName: 'data',
                        url: '/me',
                    },
                    logout: false,
                },
            },
        },
        redirect: false,
    }, this.options.auth || {});

    this.requireModule('@nuxtjs/auth');

    /**
    * Handle the request intercept, and redirect the url to the API domain.
    *
    * @param {object} req
    * @param {object} res
    */
    const handler = (req, res) => {
        const url = req.url;
        const urlSegments = url.split('/').filter(Boolean);

        if (!urlSegments.length) {
            res.end();
            return;
        }

        const token = urlSegments.reverse()[0];

        res.writeHead(301, {
            Location: this.options.auth.password_reset_url.replace('%TOKEN%', token),
        });

        res.end();
    };

    this.addServerMiddleware({
        path: '/forgotten-password/',
        handler,
    });
};
