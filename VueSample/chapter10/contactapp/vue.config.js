module.exports={
    devServer:{
        proxy:{
            '/api' :{
                target: 'http://sample.bmaster.kro.kr/contacts',
                ws:true,
                changeOrigin:true,
                pathRewrite:{
                    '^/api' :''
                }
            }
        }
    }
}