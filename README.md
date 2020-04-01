<h1 align="center">zzc-postoss-webpack-plugin</h1>
<p align="center">阿里云上传OSS的webpack插件</p>
<p align='center'>
<img alt="npm" src="https://img.shields.io/npm/v/zzc-postoss-webpack-plugin">
<a href="https://www.npmjs.com/package/zzc-postoss-webpack-plugin" target="_blank"><img alt="npm" src="https://img.shields.io/npm/dm/well-cache?label=download"></a>
<img alt="NPM" src="https://img.shields.io/npm/l/zzc-postoss-webpack-plugin">
</p>


# Description

租租车专用阿里云OSS推送webpack插件，基于post-oss插件实现的webpack插件，更加合理的在webpack的构建过程中进行OSS上传。

# Getting started

```shell
npm install zzc-postoss-webpack-plugin --save-dev
```

webpack.config.js
```js
const ZZCPostOSSWebpackPlugin = require('zzc-postoss-webpack-plugin');
{
    entry: ...,
    plugins: [
        ...,
        new ZZCPostOSSWebpackPlugin( {
            remotePath: 'you remote path',
            remoteAuth: 'you remote auth'
        } )
    ]
}

```

