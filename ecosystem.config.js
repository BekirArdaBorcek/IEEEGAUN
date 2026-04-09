module.exports = {
  apps: [
    {
      name: 'uni-community',
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 3000', // Ensure port matches nginx config
      instances: 'max',
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
        AUTH_URL: 'https://ieeegaun.com', // Use origin only, do not append /login or /api/auth
        AUTH_SECRET: 'change_me_to_a_random_string_in_production', // GENERATE A NEW SECRET!
        MONGODB_URI: 'mongodb://localhost:27017/ieeegaun', // Update if needed
      },
    },
  ],
};
