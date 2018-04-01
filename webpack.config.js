var webpack = require('webpack');
var path = require('path');
var isProd = (process.env.NODE_ENV === 'prod');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var extractSass = new ExtractTextPlugin({
    filename: "[name].css",
    allChunks: true
});

var CleanWebpackPlugin = require('clean-webpack-plugin');
var BuildManifestPlugin = require('./buildtools/plugins/BuildManifestPlugin');
var DIST_FOLDER = path.resolve(__dirname, './dist');
module.exports = {
	output: {
		library: 'Website',
		// for exposting as ES6
		//libraryTarget: 'umd',
		//libraryExport: 'default',
		path: path.resolve(__dirname,'./dist'),
		filename: 'js/[name].js'
	},
	entry: {
		app: './src/main.js'
	},
	module: {
		rules: [
			// sass setup
			{
		        test: [/\.scss$/],
		        loader: ExtractTextPlugin.extract({
		          use: [
		            //'css-loader?modules&importLoaders=1&localIdentName=[local]',
		            //'sass-loader?sourceMap'
		            'css-loader',
		            'sass-loader'
		          ],
		          fallback: 'style-loader'
		        })
		    },

		    // images setup
			{
				test: /\.(png|jpg|gif)$/,
				use: [
		        	{
		            	loader: 'file-loader',
		            	options: {
		            		name: 'images/[name].[ext]'
		            	}  
		         	}
		        ]			    
			},

			// babel setup
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			// bootstrap setup
			{ 
				test: /\.(woff2?|svg)$/, loader: 'url-loader?limit=10000&name=fonts/[name].[ext]' 
			},
    		{ 
    			test: /\.(ttf|eot)$/, loader: 'file-loader?name=fonts/[name].[ext]' 
    		},
    		{ 
    			test:/bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/, loader: 'imports-loader?jQuery=jquery' 
    		},

    		// vue setup
    		{
		        test: /\.vue$/,
		        loader: 'vue-loader'
		    }
		]
	},
	// vue setup
	resolve: {
    	alias: {
      	'vue$': 'vue/dist/vue.esm.js'
    	}
  	},
	plugins: [
		// external css
		extractSass,
		// 
		new webpack.LoaderOptionsPlugin({
		  minimize: isProd
		}),
		// custom plugin
		new BuildManifestPlugin(),
		// clean dist folder plugin
		new CleanWebpackPlugin(['dist'], {
			root: __dirname,
			verbose: true,
			dry: false
		})
	]
}

if (isProd) {
	module.exports.plugins.push(
		new webpack.optimize.UglifyJsPlugin()
	)
}