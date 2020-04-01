const Oss = require( 'post-oss' );
const colors = require( 'colors' );
const PLUGIN_NAME = 'zzc-postoss-webpack-plugin';
class ZZCPostOSSWebpackPlugins {
    constructor( options ) {
        this.remotePath = options.remotePath;
        this.remoteAuth = options.remoteAuth;
    }

    uploadOss ( path ) {
        return new Promise( ( resolve ) => {
            new Oss( {
                cwd: path,
                remotePath: this.remotePath,
                remoteAuth: this.remoteAuth,
                uploadError: function ( err, response, body ) {
                    console.log( colors.red( err ) );
                    resolve( null );
                },
                uploadSuccess: function ( err, response, body ) {
                    if ( err ) {
                        console.log( colors.red( err ) );
                        resolve( null );
                    } else {
                        resolve( body );
                    }
                }
            } );
        } );
    }

    apply ( compiler ) {
        compiler.hooks.done.tapAsync( PLUGIN_NAME, async ( stats ) => {
            const { compilation } = stats;
            const { compiler } = compilation;
            const { output } = compiler.options;
            const { path } = output;
            const uploadResult = await this.uploadOss( path );
            if ( uploadResult && uploadResult.data ) {
                const { uploadSuccess } = uploadResult.data;
                for ( let i = 0; i < uploadSuccess.length; i++ ) {
                    console.log( colors.green( uploadSuccess[i] ) );
                }
            }
            console.log( colors.green( 'upload oss done!' ) );
        } );
    }
}

module.exports = ZZCPostOSSWebpackPlugins;