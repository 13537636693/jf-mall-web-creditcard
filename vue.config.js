const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV);
 
module.exports = {
 publicPath:"./",
 assetsDir: './static' // 相对于outputDir的静态资源(js、css、img、fonts)目录
};