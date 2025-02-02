/**
 * 全局常量
 */
import merge from 'merge';
import baseConfig from './baseConfig';
const env = process.env.NODE_ENV || 'development';
const config = {
    // 开发环境
    development: {
        baseUrl: 'localhost:8080/',
        routeBase: '/'
    },
    // 线上开发环境
    dev: {
        baseUrl: '/',
        routeBase: '/'
    },
    // 测试环境
    sit: {
        baseUrl: '/',
        routeBase: '/'
    },
    // 生产环境
    production: {
        baseUrl: '/',
        routeBase: '/'
    },
};
export default merge(baseConfig, config[env]);

