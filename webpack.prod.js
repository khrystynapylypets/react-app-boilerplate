import { merge } from 'webpack-merge';
import path from 'path';
import { fileURLToPath } from 'url';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { StatsWriterPlugin } from 'webpack-stats-plugin';
import { commonConfig } from './webpack.common.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default merge(commonConfig, {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    // publicPath: '/',
    clean: true,
  },
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ],
  optimization: {
    chunkIds: 'deterministic',
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxSize: 244000,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
        common: {
          minChunks: 2,
          priority: -10,
          reuseExistingChunk: true,
        }
      }
    },
    minimizer: [
      `...`,
      new CssMinimizerPlugin(),
      new BundleAnalyzerPlugin(),
      new StatsWriterPlugin({
        filename: 'stats.json',
        stats: {
          all: false,
          assets: true,
          modules: true,
          chunks: true,
        },
      }),
    ]
  },
})
