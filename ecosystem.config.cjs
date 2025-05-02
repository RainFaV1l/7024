module.exports = {
    apps: [
        {
            name: 'inertia-ssr',
            script: 'bootstrap/ssr/ssr.js',
            interpreter: 'node',
            watch: false,
            env: {
                NODE_ENV: 'production',
                PORT: 13714,
            }
        }
    ]
};
