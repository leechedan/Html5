/**
 * @fileOverview Pad touch webapp config file
 * @author <a href="mailto:zhong.zhi@163.com">Zhongzhi</a>
 * @version 0.0.1
 *
 */

module.exports = {

    port: {
      www: 8075,
      liveReload: 35740
    },

    // 路径配置
    path: {
        // 程序主目录
        app: 'src',
        // 发布目录
        dist: 'dist'
    },

    // 访问不同环境对应的qzz域名
    cdnDomain: {
        '': '',
        dev: 'http://localhost:8075',
        beta: 'http://localhost:8075',
        prepare: 'http://cdn.yourdomain.com',
        prod: 'http://cdn.yourdomain.com'
    },

};
