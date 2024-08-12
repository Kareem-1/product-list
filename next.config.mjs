/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: 'Maxyy999',
        database: 'menclothes',

        host_dev: 'localhost',
        port_dev: '3306',
        user_dev: 'root',
        password_dev: 'Maxyy999',
        database_dev: 'menclothes'
        }
};

export default nextConfig;
