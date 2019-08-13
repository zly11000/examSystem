module.exports = {
    configureWebpack:{
        devServer:{
            proxy:{
                "/api":{
                    target:"http://localhost:7001",
                    pathRewrite:{
                        "^/api":""
                    }
                }
            }
        },
    },
    productionSourceMap: false, // 生产环境是否生成 SourceMap
    //css样式
   chainWebpack: config => {
       const oneOfsMap = config.module.rule('scss').oneOfs.store
       oneOfsMap.forEach(item => {
         item
           .use('sass-resources-loader')
           .loader('sass-resources-loader')
           .options({
             resources: ['./src/public/_minix.scss', './src/public/common.scss']
           })
           .end()
       })
   }
}